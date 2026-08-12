import { makeObservable, observable, action } from 'mobx';
import type {
	AbstractController,
	AutocompleteController,
	SearchController,
	SearchTabConfig,
	AutocompleteTabConfig,
	TabsConfig,
} from '@athoscommerce/snap-controller';
import { ControllerTypes } from '@athoscommerce/snap-controller';
import type { Next } from '@athoscommerce/snap-event-manager';

export const TAB_ID_DEFAULT_PARAM = 'view';

export type Tab = {
	id: string;
	param: string;
	controller: AbstractController;
	siteId: string;
	prefetch: boolean;
	label?: string;
};

export class TabManagerStore {
	public tabs: Tab[] = [];
	public active: Tab | undefined;
	public param: string;

	constructor(tabs: SearchTabConfig[] | AutocompleteTabConfig[], controllers: AbstractController[], config?: TabsConfig) {
		this.param = config?.tabParam || TAB_ID_DEFAULT_PARAM;

		const startingTabConfig = tabs.filter((tab) => tab.default)[0] || tabs[0];
		let urlParam: string | undefined;

		tabs.forEach((tabConfig) => {
			const cntrlr = controllers.filter((controller) => controller.id == tabConfig.id)[0];

			if (!cntrlr) {
				return;
			}

			const newTab: Tab = {
				id: tabConfig.id,
				label: tabConfig.label,
				siteId: tabConfig.siteId,
				param: config?.catalogs?.[tabConfig.siteId]?.param || tabConfig.id,
				controller: cntrlr,
				// search-tab only setting - autocomplete has nothing to fetch until the shopper types
				prefetch: 'prefetch' in tabConfig ? tabConfig.prefetch ?? true : true,
			};

			if (cntrlr.type == ControllerTypes.autocomplete) {
				const autocompleteController = cntrlr as AutocompleteController;

				// hidden form inputs for tab selections
				if (!autocompleteController.config.action) {
					autocompleteController.eventManager.on(
						'beforeSubmit',
						async (context: { controller: AbstractController; input?: HTMLInputElement }, next: Next) => {
							if (context.input?.form) {
								addHiddenFormInput(context.input.form, this.param, this.active?.param || newTab.param);
							}
							await next();
						}
					);
				}
			}

			if (cntrlr.type == ControllerTypes.search) {
				const searchController = cntrlr as SearchController;

				// read the active tab from the url on initial load
				if (!urlParam) {
					urlParam = getTabParamFromUrlState(searchController.urlManager.state[this.param]);
				}

				// functionality for back/forward browser buttons
				searchController.urlManager.subscribe((prev, next) => {
					const nextParam = getTabParamFromUrlState(next?.[this.param]);
					const nextTab = (nextParam && this.getTabByParam(nextParam)) || this.getTab(startingTabConfig.id);

					if (nextTab) {
						this.setActive(nextTab.id);
					}
				});
			}

			this.tabs.push(newTab);
		});

		this.active = (urlParam && this.getTabByParam(urlParam)) || this.getTab(startingTabConfig.id) || this.tabs[0];

		makeObservable(this, {
			tabs: observable,
			active: observable,
			setActive: action,
		});

		// the active tab always searches - the rest only when they opt into prefetching
		this.tabs.forEach((tab) => {
			if (tab.prefetch || tab.id == this.active?.id) {
				this.searchTab(tab);
			}
		});
	}

	public setActive = (id: string) => {
		const tabToSelect = this.getTab(id);

		if (!tabToSelect || tabToSelect.id === this.active?.id) {
			return;
		}

		const previousController = this.active?.controller;

		this.active = tabToSelect;

		if (tabToSelect.controller.type == ControllerTypes.search) {
			// to remove page chain: `.remove('page')` to urlManager.set(...)
			(tabToSelect.controller as SearchController).urlManager.set(this.param, tabToSelect.param).go();
			this.searchTab(tabToSelect);
		}

		if (tabToSelect.controller.type == ControllerTypes.autocomplete) {
			this.syncAutocompleteState(previousController, tabToSelect.controller as AutocompleteController);
		}
	};

	private searchTab = (tab: Tab) => {
		if (tab.controller.type != ControllerTypes.search) {
			return;
		}

		const searchController = tab.controller as SearchController;

		if (!searchController.store.loading && !searchController.store.loaded) {
			searchController.search();
		}
	};

	// Autocomplete tabs all share a single input element, but each tab has its own controller with
	// its own store. Without carrying the query and focus across, the newly active controller
	// renders with an empty `state.input`, which blanks the shared input - and that empty value is
	// then read back by every bound controller, resetting their stores and closing the autocomplete.
	private syncAutocompleteState = (previousController: AbstractController | undefined, nextController: AutocompleteController) => {
		if (!previousController || previousController.type !== ControllerTypes.autocomplete) {
			return;
		}

		const previousState = (previousController as AutocompleteController).store.state;
		const query = previousState.input;

		nextController.store.state.input = query;
		nextController.store.state.focusedInput = previousState.focusedInput;

		if (query) {
			// run the shared query against the newly active tab
			nextController.urlManager.set({ query }).go();
		}
	};

	public getTab = (id: string) => {
		return this.tabs?.filter((tab) => tab.id == id)[0];
	};

	public getTabByParam = (param: string) => {
		return this.tabs?.filter((tab) => tab.param == param)[0];
	};
}

function addHiddenFormInput(form: HTMLFormElement, name: string, value: string) {
	// match by property rather than an interpolated attribute selector to avoid selector injection
	const existingElem = Array.from(form.querySelectorAll('input[type="hidden"]')).find((elem) => (elem as HTMLInputElement).name === name) as
		| HTMLInputElement
		| undefined;

	if (existingElem) {
		// keep the value current - the active tab can change after the input was first appended
		existingElem.value = value;
		return;
	}

	const inputElem = document.createElement('input');
	inputElem.type = 'hidden';
	inputElem.name = name;
	inputElem.value = value;
	form.append(inputElem);
}

// custom url params always deserialize as arrays when parsed fresh from the url, but can be a
// plain string when read back from an in-session localState set() - handle both shapes
function getTabParamFromUrlState(value: unknown): string | undefined {
	if (Array.isArray(value)) {
		return value[0] as string | undefined;
	}
	return typeof value == 'string' ? value : undefined;
}
