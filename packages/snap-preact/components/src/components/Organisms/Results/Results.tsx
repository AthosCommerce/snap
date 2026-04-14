import { h } from 'preact';

import { observer } from 'mobx-react-lite';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import deepmerge from 'deepmerge';

import type { SearchController, AutocompleteController, RecommendationController } from '@athoscommerce/snap-controller';
import type { SearchResultStore, Product, Banner } from '@athoscommerce/snap-store-mobx';
import { ContentType } from '@athoscommerce/snap-store-mobx';
import { InlineBanner, InlineBannerProps } from '../../Atoms/InlineBanner';
import { Result, ResultProps } from '../../Molecules/Result';
import { ComponentProps, ResultsLayout, BreakpointsProps, StyleScript, JSXComponent } from '../../../types';
import { cloneWithProps, defined, mergeProps, mergeStyles } from '../../../utilities';
import { Theme, useTheme, CacheProvider, withTracking, useSnap, useTreePath } from '../../../providers';
import { useDisplaySettings } from '../../../hooks/useDisplaySettings';
import { ResultTracker } from '../../Trackers/ResultTracker';
import { SnapTemplates } from '../../../../../src';
import { useComponent } from '../../../hooks';

const defaultStyles: StyleScript<ResultsProps> = ({ gapSize, columns }) => {
	return css({
		display: 'flex',
		flexFlow: 'row wrap',
		gap: gapSize,
		gridTemplateRows: 'auto',
		gridTemplateColumns: `repeat(${columns}, 1fr)`,

		'& .ss__result, & .ss__result-layout': {
			boxSizing: 'border-box',
			flex: '0 1 auto',
			width: `calc(${100 / columns!}% - (${columns! - 1} * ${gapSize} / ${columns} ) )`,
			marginRight: gapSize,
			marginBottom: gapSize,

			[`&:nth-of-type(${columns}n)`]: {
				marginRight: '0',
			},
			[`&:nth-last-of-type(-n+${columns})`]: {
				marginBottom: '0',
			},
		},
		'@supports (display: grid)': {
			display: 'grid',

			'& .ss__result, & .ss__result-layout': {
				width: 'initial',
				flex: undefined,
				margin: 0,
			},
		},
	});
};

const TrackedResultComponent = withTracking<ResultProps>(Result);

export const Results = observer((properties: ResultsProps) => {
	const globalTheme: Theme = useTheme();
	const snap = useSnap();
	const globalTreePath = useTreePath();
	const defaultBreakpointsProps = {
		0: {
			columns: properties.columns || 1,
		},
		540: {
			columns: properties.columns || 2,
		},
		768: {
			columns: properties.columns || 3,
		},
		991: {
			columns: properties.columns || 4,
		},
	};

	const defaultProps: Partial<ResultsProps> = {
		results: properties.controller?.store?.results,
		columns: 4,
		gapSize: '20px',
		layout: ResultsLayout.grid,
		breakpoints: defaultBreakpointsProps,
		treePath: globalTreePath,
	};

	let props = mergeProps('results', globalTheme, defaultProps, properties);

	if (!properties.theme?.name) {
		// breakpoint settings are calculated in ThemeStore for snap templates
		const displaySettings = useDisplaySettings(props?.breakpoints || {});
		const theme = deepmerge(props?.theme || {}, displaySettings?.theme || {}, { arrayMerge: (destinationArray, sourceArray) => sourceArray });
		props = {
			...props,
			...displaySettings,
			theme,
		};
	}

	const { disableStyles, className, internalClassName, layout, theme, controller, treePath, customComponent, resultComponent } = props;

	if (customComponent) {
		const ComponentOverride = useComponent((snap as SnapTemplates)?.templates?.library.import.component.results || {}, customComponent);
		if (ComponentOverride) {
			return <ComponentOverride {...props} />;
		}
	}

	const subProps: ResultsSubProps = {
		result: {
			// default props
			internalClassName: 'ss__results__result',
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
		inlineBanner: {
			controller,
			// default props
			internalClassName: 'ss__results__inline-banner',
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
	};

	let results = props.results;
	if (props?.columns && props?.rows && props.columns > 0 && props.rows > 0) {
		results = props.results?.slice(0, props.columns * props.rows);
	}

	const styling = mergeStyles<ResultsProps>({ ...props, columns: layout == ResultsLayout.list ? 1 : props.columns }, defaultStyles);

	return results?.length ? (
		<CacheProvider>
			<div {...styling} className={classnames('ss__results', `ss__results-${props.layout}`, className, internalClassName)}>
				{results.map((result) =>
					(() => {
						switch (result.type) {
							case ContentType.BANNER:
								return <InlineBanner {...subProps.inlineBanner} key={result.id} banner={result as Banner} layout={props.layout} />;
							default:
								if (resultComponent && controller) {
									return (
										<ResultTracker result={result as Product} controller={controller as SearchController}>
											{cloneWithProps(resultComponent, {
												key: (result as Product).id,
												controller,
												result: result as Product,
												theme,
												treePath,
											})}
										</ResultTracker>
									);
								} else {
									return (
										<TrackedResultComponent
											key={(result as Product).id}
											{...subProps.result}
											result={result as Product}
											layout={props.layout}
											controller={controller}
										/>
									);
								}
						}
					})()
				)}
			</div>
		</CacheProvider>
	) : null;
});

export type ResultsProps = {
	breakpoints?: BreakpointsProps;
	controller?: SearchController | AutocompleteController | RecommendationController;
	resultComponent?: JSXComponent | JSX.Element;
	results?: SearchResultStore;
} & ResultsTemplatesLegalProps &
	ComponentProps<ResultsProps>;

export type ResultsTemplatesLegalProps = {
	columns?: number;
	rows?: number;
	gapSize?: string;
	layout?: keyof typeof ResultsLayout | ResultsLayout;
};

interface ResultsSubProps {
	result: Partial<ResultProps>;
	inlineBanner: Partial<InlineBannerProps>;
}
