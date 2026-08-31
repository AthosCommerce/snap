import { render } from 'preact';
import deepmerge from 'deepmerge';

import { AppMode, DomTargeter, getContext } from '@athoscommerce/snap-toolbox';
import { Client } from '@athoscommerce/snap-client';
import { Logger } from '@athoscommerce/snap-logger';
import { Tracker } from '@athoscommerce/snap-tracker';

import type { ClientConfig, ClientGlobals, RecommendRequestModel, RecommendationRequestFilterModel } from '@athoscommerce/snap-client';
import type { UrlTranslatorConfig } from '@athoscommerce/snap-url-manager';
import {
	AbstractController,
	RecommendationController,
	Attachments,
	ContextVariables,
	RecommendationControllerConfig,
	type QuickviewManager,
} from '@athoscommerce/snap-controller';
import { type BeaconSettings, type VariantConfig } from '@athoscommerce/snap-store-mobx';
import type { Middleware } from '@athoscommerce/snap-event-manager';
import type { Target } from '@athoscommerce/snap-toolbox';
import { createRecommendationController } from '../create';
import type { Snap } from '../Snap';

type RecommendationComponentFunc = () => Promise<any> | any;

export type RecommendationComponentObject = {
	component: RecommendationComponentFunc;
	props?: {
		[name: string]: any;
	};
	onTarget: (target: Target, elem: Element | undefined, injectedElem: Element | undefined, controller: RecommendationController) => void;
};

export type RecommendationInstantiatorConfigSettings = {
	branch: string;
	realtime?: boolean;
	batched?: boolean;
	limit?: number;
	variants?: VariantConfig;
	beacon?: BeaconSettings;
};

export type RecommendationInstantiatorConfig = {
	mode?: keyof typeof AppMode | AppMode;
	client?: {
		globals: ClientGlobals;
		config?: ClientConfig;
	};
	components: {
		[name: string]: RecommendationComponentFunc | RecommendationComponentObject;
	};
	config: RecommendationInstantiatorConfigSettings & Attachments;
	selector?: string;
	url?: UrlTranslatorConfig;
	context?: ContextVariables;
};

export type RecommendationInstantiatorServices = {
	client?: Client;
	logger?: Logger;
	tracker?: Tracker;
	snap?: Snap;
	quickviewManager?: QuickviewManager;
};

type RecommendationProfileCounts = {
	[key: string]: number;
};

type ProfileSpecificProfile = {
	custom?: any;
	options: Pick<RecommendRequestModel, 'siteId' | 'categories' | 'brands' | 'branch' | 'filters' | 'limit' | 'query' | 'dedupe'> & {
		realtime?: boolean;
	};
	profile?: string;
	tag?: string;
	selector: string;
};

type ProfileSpecificGlobals = {
	filters?: RecommendationRequestFilterModel[];
	blockedItems: string[];
	cart?: string[] | (() => string[]);
	products?: string[];
	shopper?: { id?: string };
};

type ExtendedRecommendationProfileTarget = Target & {
	profile?: ProfileSpecificProfile;
	order?: number;
};

const DEFAULT_BRANCH = 'production';
export class RecommendationInstantiator {
	private mode = AppMode.production;
	public client: Client;
	public tracker: Tracker;
	public logger: Logger;
	public quickviewManager?: QuickviewManager;
	public controller: {
		[key: string]: RecommendationController;
	} = {};
	public config: RecommendationInstantiatorConfig;
	public context: ContextVariables;
	public targeter: DomTargeter;

	public uses: Attachments[] = [];
	public plugins: { func: (cntrlr: AbstractController, ...args: any) => void | Promise<void>; args: unknown[] }[] = [];
	public middleware: { event: string; func: Middleware<any>[] }[] = [];

	constructor(config: RecommendationInstantiatorConfig, services?: RecommendationInstantiatorServices, context?: ContextVariables) {
		this.config = config;

		if (!this.config) {
			throw new Error(`Recommendation Instantiator config is required`);
		}

		if (!this.config.config?.branch) {
			this.config.config = this.config.config || {};
			this.config.config.branch = DEFAULT_BRANCH;
		}

		if (!this.config.components || typeof this.config.components != 'object' || !Object.keys(this.config.components).length) {
			throw new Error(`Recommendation Instantiator config must contain 'components' mapping property`);
		}

		if ((!services?.client || !services?.tracker) && !this.config?.client?.globals?.siteId) {
			throw new Error(`Recommendation Instantiator config must contain a valid config.client.globals.siteId value`);
		}

		if (this.config.mode && Object.values(AppMode).includes(this.config.mode as AppMode)) {
			this.mode = this.config.mode as AppMode;

			if (this.config?.client?.globals?.siteId) {
				this.config.client.config = this.config.client.config || {};
				this.config.client.config.mode = this.config.client.config.mode || this.mode;
			}
		}

		window.athos = window.athos || {};

		this.context = deepmerge(context || {}, config.context || {});
		this.client = services?.client || new Client(this.config.client!.globals, this.config.client!.config);
		this.tracker = services?.tracker || new Tracker(this.config.client!.globals);
		this.logger = services?.logger || new Logger({ prefix: 'RecommendationInstantiator ', mode: this.mode });
		this.quickviewManager = services?.quickviewManager;

		const profileCount: RecommendationProfileCounts = {};

		// script block targeter for "grouped" and "legacy" blocks
		this.targeter = new DomTargeter(
			[
				{
					selector: `${
						this.config.selector ||
						'script[type="searchspring/recommend"], script[type="searchspring/personalized-recommendations"], script[type="athos/recommend"], script[type="athos/personalized-recommendations"]'
					}, script[type="searchspring/recommend"][profile="email"], script[type="athos/recommend"][profile="email"]`,
					autoRetarget: true,
					clickRetarget: true,
					navigationRetarget: true,
					emptyTarget: false,
				},
				{
					selector: 'script[type="searchspring/recommendations"], script[type="athos/recommendations"]',
					autoRetarget: true,
					clickRetarget: true,
					navigationRetarget: true,
					emptyTarget: false,
				},
			],
			async (target: Target, elem: Element | undefined) => {
				this.cleanupStaleControllers();

				const scriptElement = elem as HTMLScriptElement;
				const elemContext = getContext(
					[
						'shopperId',
						'shopper',
						'product',
						'products',
						'seed',
						'cart',
						'filters',
						'blockedItems',
						'options',
						'profile',
						'custom',
						'profiles',
						'globals',
					],
					scriptElement
				);

				if (elemContext.profiles && elemContext.profiles.length) {
					// using the "grouped block" integration structure

					// type the new profile specific integration context variables
					const scriptContextProfiles = elemContext.profiles as ProfileSpecificProfile[];
					const scriptContextGlobals = elemContext.globals as ProfileSpecificGlobals | undefined;

					// grab from globals
					const requestGlobals: Partial<RecommendRequestModel> = {
						...defined({
							blockedItems: scriptContextGlobals?.blockedItems,
							filters: scriptContextGlobals?.filters,
							cart: scriptContextGlobals?.cart && getArrayFunc(scriptContextGlobals.cart),
							products: scriptContextGlobals?.products,
							shopper: scriptContextGlobals?.shopper?.id,
							batchId: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
						}),
					};

					// create a per-profile DomTargeter for each profile so each controller
					// gets its own targeter tracking its specific element
					scriptContextProfiles.forEach((profile, index) => {
						if (profile.selector) {
							const profileTarget: ExtendedRecommendationProfileTarget = {
								selector: profile.selector,
								autoRetarget: true,
								profile,
								order: index,
							};

							// track the controller for this profile so multiple matched elements share it
							let profileControllerPromise: Promise<RecommendationController | undefined> | undefined;

							new DomTargeter(
								[profileTarget],
								async (
									target: ExtendedRecommendationProfileTarget,
									targetElem: Element | undefined,
									_originalElem?: Element,
									targeter?: DomTargeter
								) => {
									// skip retarget if the source script element was removed and release the current target
									if (scriptElement.isConnected === false) {
										if (targetElem) {
											targeter?.releaseTargets([targetElem]);
										}
										return;
									}

									if (target.profile?.profile || target.profile?.tag) {
										const profileRequestGlobals: RecommendRequestModel = {
											...requestGlobals,
											profile: { ...target.profile?.options, order: target.order },
											tag: target.profile.tag! || target.profile.profile!, // have to support both tag and profile due to having profile at release, but will favor tag
										};
										const profileContext: ContextVariables = deepmerge(
											this.context,
											defined({ globals: scriptContextGlobals, profile: target.profile })
										);
										if (elemContext.custom) {
											profileContext.custom = deepmerge(profileContext.custom, elemContext.custom);
										}

										if (!profileControllerPromise) {
											// first element match — create the controller
											profileControllerPromise = readyTheController(
												this,
												services || {},
												targetElem,
												profileContext,
												profileCount,
												scriptElement,
												profileRequestGlobals,
												target,
												targeter!
											);
										} else {
											// subsequent element matches — reuse the existing controller and just render
											const controller = await profileControllerPromise;
											if (controller && targetElem) {
												renderController(this, services || {}, controller, targetElem, scriptElement, target);
											}
										}
									}
								}
							);
						}
					});
				} else {
					// using the "legacy" integration structure
					const { profile, products, product, seed, filters, blockedItems, options, shopper, shopperId } = elemContext;
					const combinedProducts = [].concat(products || product || seed || []);
					const shopperIdentifier = [shopper, shopper?.id, shopperId, shopperId?.id].filter((val) => val && typeof val === 'string').pop();

					const profileRequestGlobals: Partial<RecommendRequestModel> = {
						tag: profile,
						...defined({
							products: combinedProducts.length ? combinedProducts : undefined,
							cart: elemContext.cart && getArrayFunc(elemContext.cart),
							shopper: shopperIdentifier,
							filters,
							blockedItems,
							profile: options,
						}),
					};

					// inject a render container before the script element
					const profileAttr = scriptElement.getAttribute('profile') || '';
					const recsContainer = scriptElement.ownerDocument.createElement('div');
					recsContainer.setAttribute('searchspring-recommend', profileAttr);
					scriptElement.before(recsContainer);

					const legacyContext = deepmerge(this.context, elemContext);

					// create a per-element DomTargeter for the injected div (mirrors grouped block pattern)
					new DomTargeter(
						[{ selector: `[searchspring-recommend="${profileAttr}"]`, name: `legacy_${profile}_${profileCount[profile || ''] || 0}` }],
						async (_target: Target, targetElem: Element | undefined, _originalElem?: Element, targeter?: DomTargeter) => {
							// skip retarget if the source script element was removed and release the current target
							if (scriptElement.isConnected === false) {
								if (targetElem) {
									targeter?.releaseTargets([targetElem]);
								}
								return;
							}

							readyTheController(
								this,
								services || {},
								targetElem,
								legacyContext,
								profileCount,
								scriptElement,
								profileRequestGlobals,
								target,
								targeter!
							);
						}
					);
				}
			}
		);
	}

	public plugin(func: (cntrlr: AbstractController, ...args: any) => void | Promise<void>, ...args: unknown[]): void {
		this.plugins.push({ func, args });
	}

	public on<T>(event: string, ...func: Middleware<T>[]): void {
		this.middleware.push({ event, func });
	}

	public use(attachments: Attachments): void {
		this.uses.push(attachments);
	}

	// cleanup to ensure we release controllers no longer rendering in the DOM (memory leak prevention for SPA's)
	public cleanupStaleControllers(): void {
		Object.keys(this.controller).forEach((id) => {
			const controller = this.controller[id];
			const targeters = Object.values(controller.targeters);

			const hasConnectedTarget = targeters.some((targeter) =>
				targeter.getTargetedElems().some((elem) => {
					const attr = elem.isConnected !== false && elem.getAttribute('ss-controller-id');
					return attr === id;
				})
			);
			if (!hasConnectedTarget) {
				Object.keys(controller.targeters).forEach((targeterId) => controller.targeters[targeterId].destroy());
				controller.targeters = {};
				delete this.controller[id];
				if (window.athos?.controller) {
					delete window.athos.controller[id];
				}
			}
		});
	}
}

async function readyTheController(
	instance: RecommendationInstantiator,
	services: RecommendationInstantiatorServices,
	targetElem: Element | undefined,
	context: ContextVariables,
	profileCount: RecommendationProfileCounts,
	scriptElem: Element | undefined,
	controllerGlobals: Partial<RecommendRequestModel>,
	target: ExtendedRecommendationProfileTarget,
	targeter: DomTargeter
): Promise<RecommendationController | undefined> {
	const { profile, batchId, cart, tag } = controllerGlobals;
	const batched = profile?.batched ?? controllerGlobals.batched ?? true;

	if (!tag) {
		// FEEDBACK: change message depending on script integration type (profile vs. legacy)
		instance.logger.warn(`'tag' is missing from <script> tag, skipping this profile`, scriptElem);
		return;
	}

	if (Array.isArray(cart)) {
		instance.tracker.cookies.cart.set(cart);
	}

	const globals: Partial<RecommendRequestModel> = deepmerge.all([
		instance.config.client?.globals || {},
		instance.config.config?.globals || {},
		controllerGlobals,
	]);

	const controllerConfigBase = {
		tag,
		batched: batched ?? instance.config.config?.batched ?? true,
		realtime: Boolean(context.options?.realtime ?? context.profile?.options?.realtime ?? instance.config.config?.realtime),
		batchId: batchId,
		middleware: instance.config.config.middleware,
		plugins: instance.config.config.plugins,
		branch: instance.config.config?.branch || 'production',
		limit: instance.config.config?.limit,
		beacon: instance.config.config?.beacon || { enabled: true },
		settings: {
			variants: instance.config.config?.variants,
		},
		globals,
	};

	if (profile?.branch) {
		controllerConfigBase.branch = profile?.branch;
	}

	profileCount[tag] = profileCount[tag] + 1 || 1;
	const controllerConfig: RecommendationControllerConfig = {
		id: `recommend_${tag}_${profileCount[tag] - 1}`,
		...controllerConfigBase,
	};

	const controller = createRecommendationController(
		{
			url: instance.config.url,
			controller: controllerConfig,
			context,
			mode: instance.config.mode,
		},
		{ client: instance.client, tracker: instance.tracker, quickviewManager: instance.quickviewManager }
	);

	// mark element with controller id so cleanupStaleControllers knows it's active
	if (targetElem) {
		targetElem.setAttribute('ss-controller-id', controller.id);
	}

	instance.uses.forEach((attachements) => controller.use(attachements));
	instance.plugins.forEach((plugin) => controller.plugin(plugin.func, ...plugin.args));
	instance.middleware.forEach((middleware) => controller.on(middleware.event, ...middleware.func));

	// add controller to instantiator and global namespace
	instance.controller[controller.config.id] = controller;
	window.athos.controller = window.athos.controller || {};
	window.athos.controller[controller.config.id] = controller;

	// register targeter on the controller for element tracking
	controller.addTargeter(targeter);

	// run a search on the controller if it is not currently
	if (!controller.store.loading) {
		await controller.search();
	}

	const profileVars = controller.store.profile.display?.templateParameters;

	if (controller.store.error) {
		//something went wrong
		//err was already logged - nothing to do.
		return;
	}

	if (!controller.store.profile.display.template) {
		instance.logger.error(`profile '${tag}' found on the following element is missing a template!\n${scriptElem?.outerHTML}`);
		return;
	}
	if (!profileVars) {
		instance.logger.error(`profile '${tag}' found on the following element is missing templateParameters!\n${scriptElem?.outerHTML}`);
		return;
	}

	if (targetElem) {
		await renderController(instance, services, controller, targetElem, scriptElem, target);
	}

	return controller;
}

async function renderController(
	instance: RecommendationInstantiator,
	services: RecommendationInstantiatorServices,
	controller: RecommendationController,
	targetElem: Element,
	scriptElem: Element | undefined,
	target: ExtendedRecommendationProfileTarget
) {
	// update the element with the controller id
	if (targetElem) {
		targetElem.setAttribute('ss-controller-id', controller.id);
	}

	const tag = controller.config.tag;
	const component = controller.store.profile.display?.template?.component;

	if (!component) {
		instance.logger.error(`profile '${tag}' found on the following element is missing a component!\n${scriptElem?.outerHTML}`);
		return;
	}

	let props: Record<string, unknown> = {};
	let RecommendationsComponent:
		| undefined
		| React.ElementType<{
				controller: RecommendationController;
				snap?: Snap;
		  }> = undefined;

	props.className = `ss__recommendation-${component.toLowerCase()}`;

	(instance.config.components[component] as RecommendationComponentObject)?.onTarget?.(target, scriptElem, targetElem, controller);

	if (instance.config.components[component] && typeof instance.config.components[component] == 'function') {
		RecommendationsComponent = await (instance.config.components[component] as RecommendationComponentFunc)();
	} else if (instance.config.components[component] && typeof instance.config.components[component] == 'object') {
		props = (instance.config.components[component] as RecommendationComponentObject).props || {};
		const importPromises = [];
		// dynamically import the component
		importPromises.push((instance.config.components[component] as RecommendationComponentObject).component());

		const importResolutions = await Promise.all(importPromises);
		RecommendationsComponent = importResolutions[0];
	}

	if (!RecommendationsComponent) {
		instance.logger.error(
			`profile '${tag}' found on the following element is expecting component mapping for '${component}' - verify instantiator config.\n${scriptElem?.outerHTML}`
		);
		return;
	}

	setTimeout(() => {
		render(<RecommendationsComponent controller={controller} snap={services?.snap} {...props} />, targetElem);
	});
}

function getArrayFunc(arrayOrFunc: string[] | (() => string[])): string[] {
	if (typeof arrayOrFunc === 'function') {
		try {
			const funcContents = arrayOrFunc();
			if (Array.isArray(funcContents)) {
				return funcContents;
			}
		} catch (e) {
			// function didn't return an array
		}
	} else if (Array.isArray(arrayOrFunc)) {
		return arrayOrFunc;
	}

	return [];
}

type DefinedProps = {
	[key: string]: any;
};

export function defined(properties: Record<string, any>): DefinedProps {
	const definedProps: DefinedProps = {};

	Object.keys(properties).map((key) => {
		if (properties[key] !== undefined) {
			definedProps[key] = properties[key];
		}
	});

	return definedProps;
}
