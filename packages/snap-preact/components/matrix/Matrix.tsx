import { h, ComponentChildren } from 'preact';

import { ThemeProvider, useTheme } from '../src/providers';
import type { Theme, ThemeComponentsRestricted } from '../src/providers';

/*
	Prop-combination matrices for theme development. Loaded only by `npm run storybook:matrix`
	(see `.storybook/main.ts`), never by the library Storybook or the published docs.

	Each cell varies the rendered component in one of two ways:
	  - `props`: JSX props on the story-root component. Storybook-rooted components let their own
	    args win over theme selectors, so these behave like project overrides.
	  - `overrides`: theme override selectors (exactly as written in a Templates config under
	    `theme.overrides.default`), applied through a nested ThemeProvider. Use these to reach
	    nested components, e.g. `{ 'facet facetListOptions': { hideCheckbox: true } }`.
*/

export type MatrixValue = string | number | boolean | undefined | Record<string, unknown>;

export type MatrixCase<Props> = {
	label?: string;
	props?: Partial<Props>;
	overrides?: ThemeComponentsRestricted;
};

type MatrixProps<Props> = {
	cases: MatrixCase<Props>[];
	// the cell index gives each cell a stable key, e.g. for its own controller
	render: (props: Partial<Props>, index: number) => ComponentChildren;
	// minimum cell width - cells wrap into as many columns as fit
	minWidth?: string;
	// minimum cell height - room for absolutely positioned content (open dropdowns)
	minHeight?: string;
};

// build every combination of the given prop values, e.g. { a: [1, 2], b: [true, false] } => 4 cases
export function combinations<Props>(axes: { [K in keyof Props]?: MatrixValue[] }): MatrixCase<Props>[] {
	return Object.entries(axes).reduce<MatrixCase<Props>[]>(
		(cases, [key, values]) =>
			cases.flatMap((matrixCase) => (values as MatrixValue[]).map((value) => ({ props: { ...matrixCase.props, [key]: value } as Partial<Props> }))),
		[{ props: {} }]
	);
}

const describe = (value: unknown): string => {
	if (typeof value == 'object' && value !== null) return JSON.stringify(value);
	return String(value);
};

const caseLabel = <Props,>(matrixCase: MatrixCase<Props>): string => {
	if (matrixCase.label) return matrixCase.label;

	const parts = [
		...Object.entries(matrixCase.props || {}).map(([key, value]) => `${key}=${describe(value)}`),
		...Object.entries(matrixCase.overrides || {}).map(([selector, props]) => `'${selector}': ${describe(props)}`),
	];
	return parts.length ? parts.join('  ') : 'defaults';
};

const CellTheme = ({ overrides, children }: { overrides?: ThemeComponentsRestricted; children: ComponentChildren }) => {
	const theme = useTheme() as Theme;
	if (!overrides) return <>{children}</>;

	const cellTheme = { ...theme, components: { ...theme.components, ...overrides } } as Theme;
	return <ThemeProvider theme={cellTheme}>{children}</ThemeProvider>;
};

export const Matrix = <Props,>({ cases, render, minWidth = '260px', minHeight }: MatrixProps<Props>) => (
	<div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fill, minmax(min(${minWidth}, 100%), 1fr))`, gap: '24px' }}>
		{cases.map((matrixCase, index) => (
			<div key={index} className="matrix__cell" style={{ minWidth: 0, minHeight, padding: '12px', outline: '1px dashed #c8c8c8' }}>
				<div
					className="matrix__label"
					style={{ margin: '0 0 12px', font: '11px/1.4 ui-monospace, Menlo, monospace', color: '#7a7a7a', wordBreak: 'break-word' }}
				>
					{caseLabel(matrixCase)}
				</div>
				<CellTheme overrides={matrixCase.overrides}>{render(matrixCase.props || {}, index)}</CellTheme>
			</div>
		))}
	</div>
);
