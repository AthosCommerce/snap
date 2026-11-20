import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import type { BadgeComponentProps } from '../../components/src';
import { validateTemplatesConfig, validateTemplatesConfigUnlocked } from './SnapTemplates';

/*
 * `components.badge` registrations are typed by `ComponentTypePropsMap.badge`, which must match what
 * `OverlayBadge` and `CalloutBadge` actually pass: `<BadgeComponent {...badge} {...badge.parameters} treePath={treePath} />`.
 *
 * These callbacks are never invoked - only ever type-checked by `npm run typecheck:tests`
 * (ts-jest runs transpile-only and never sees these errors).
 */
function typeOnly(_fn: () => void) {}

const baseConfig = {
	config: { platform: 'other' as const },
	theme: { extends: 'base' as const },
};

typeOnly(() => {
	// a component typed with the badge fields it reads and an optional template parameter is accepted
	const CustomBadge = (props: { tag: string; value?: string; bg_color?: string }) => (
		<div className={`ss__badge-custombadge--${props.tag}`} style={{ background: props.bg_color }}>
			{props.value}
		</div>
	);

	validateTemplatesConfig({
		...baseConfig,
		components: {
			badge: {
				CustomBadge: () => CustomBadge,
				CustomBadgeAsync: async () => CustomBadge,
			},
		},
	});

	validateTemplatesConfigUnlocked({
		...baseConfig,
		unlocked: true,
		components: {
			badge: {
				CustomBadge: () => CustomBadge,
			},
		},
	});

	// observer-wrapped, as badge components usually are
	const ObservedBadge = observer((props: { tag: string; value?: string; bg_color?: string }) => <div className={props.tag}>{props.value}</div>);

	validateTemplatesConfig({
		...baseConfig,
		components: { badge: { ObservedBadge: () => ObservedBadge } },
	});

	// a component typed with the full badge props is accepted
	const FullBadge = (props: BadgeComponentProps) => (
		<div className={`${props.tag} ${props.location} ${props.component}`} data-tree-path={props.treePath}>
			{props.value} {Object.keys(props.parameters).length} {props.priority} {String(props.enabled)}
		</div>
	);

	validateTemplatesConfig({
		...baseConfig,
		components: { badge: { FullBadge: () => FullBadge } },
	});

	// the full badge props extended with optional template parameters is accepted
	const ExtendedBadge = (props: BadgeComponentProps & { bg_color?: string }) => <div style={{ background: props.bg_color }}>{props.value}</div>;

	validateTemplatesConfig({
		...baseConfig,
		components: { badge: { ExtendedBadge: () => ExtendedBadge } },
	});

	// a wrong type for a badge field is rejected
	const WrongTagBadge = (props: { tag: number }) => <div>{props.tag}</div>;

	validateTemplatesConfig({
		...baseConfig,
		components: {
			badge: {
				// @ts-expect-error - `tag` is a string
				WrongTagBadge: () => WrongTagBadge,
			},
		},
	});

	// `value` is optional in the badge data (a badge template can have no value), so requiring it is rejected
	const RequiredValueBadge = (props: { tag: string; value: string }) => <div>{props.value}</div>;

	validateTemplatesConfig({
		...baseConfig,
		components: {
			badge: {
				// @ts-expect-error - `value` can be undefined
				RequiredValueBadge: () => RequiredValueBadge,
			},
		},
	});

	// template parameters are not known to the type, so a component must treat them as optional
	const RequiredParameterBadge = (props: { tag: string; bg_color: string }) => <div style={{ background: props.bg_color }} />;

	validateTemplatesConfig({
		...baseConfig,
		components: {
			badge: {
				// @ts-expect-error - `bg_color` may be missing
				RequiredParameterBadge: () => RequiredParameterBadge,
			},
		},
	});
});

describe('components typing regression guards', () => {
	it('is a compile-time-only check - see typeOnly() above; run via `npm run typecheck:tests`', () => {
		expect(typeof typeOnly).toBe('function');
	});
});
