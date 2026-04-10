import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import deepmerge from 'deepmerge';
import type { RecommendationController } from '@athoscommerce/snap-controller';
import type { Product } from '@athoscommerce/snap-store-mobx';
import { Result, ResultProps } from '../../Molecules/Result';
import { ComponentProps, BreakpointsProps, StyleScript, JSXComponent } from '../../../types';
import { cloneWithProps, defined, mergeProps, mergeStyles } from '../../../utilities';
import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { useDisplaySettings } from '../../../hooks/useDisplaySettings';
import { RecommendationProfileTracker } from '../../Trackers/Recommendation/ProfileTracker';
import { ResultTracker } from '../../Trackers/ResultTracker';
import { useState } from 'react';
import { useRef } from 'preact/hooks';
import { useIntersection } from '../../../hooks';

const defaultStyles: StyleScript<RecommendationGridProps> = ({ gapSize, columns }) => {
	return css({
		maxWidth: '100%',
		maxHeight: '100%',
		'.ss__recommendation-grid__results': {
			display: 'flex',
			flexFlow: 'row wrap',
			gap: gapSize,
			gridTemplateRows: 'auto',
			gridTemplateColumns: `repeat(${columns}, 1fr)`,
			overflow: 'auto',

			'@supports (display: grid)': {
				display: 'grid',
			},
		},
	});
};

export const RecommendationGrid = observer((properties: RecommendationGridProps) => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<RecommendationGridProps> = {
		results: properties.controller?.store?.results,
		gapSize: '20px',
		title: properties.controller?.store?.profile?.display?.templateParameters?.title,
		treePath: globalTreePath,
	};

	//mergeprops only uses names that are passed via properties, so this cannot be put in the defaultProps
	const _properties = {
		name: properties.controller?.store?.profile?.tag?.toLowerCase(),
		...properties,
	};

	let props = mergeProps('recommendationGrid', globalTheme, defaultProps, _properties);

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

	const { disableStyles, title, resultComponent, trim, lazyRender, className, internalClassName, treePath, theme, controller } = props;

	const mergedlazyRender = {
		enabled: true,
		offset: '10%',
		...lazyRender,
	};

	const subProps: RecommendationGridSubProps = {
		result: {
			// default props
			internalClassName: 'ss__recommendation-grid__result',
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
		},
	};

	let results = props.results || controller.store.results;
	if (!props.columns && !props.rows) {
		props.rows = 1;
		props.columns = results.length;
	} else if (props.columns && !props.rows) {
		props.rows = Math.floor(results.length / props.columns);

		if (trim) {
			const remainder = results.length % props.columns;
			results = results.slice(0, results.length - remainder);
		}
	} else if (props.rows && !props.columns) {
		if (trim) {
			const remainder = results.length % props.rows;
			results = results.slice(0, results.length - remainder);
		}

		props.columns = Math.ceil(results.length / props.rows);
	} else if (props?.columns && props?.rows && props.columns > 0 && props.rows > 0) {
		results = results?.slice(0, props.columns * props.rows);
	}

	const styling = mergeStyles<RecommendationGridProps>(props, defaultStyles);

	const [isVisible, setIsVisible] = useState(false);
	const recsRef = useRef(null);
	const inView = mergedlazyRender?.enabled ? useIntersection(recsRef, `${mergedlazyRender.offset} 0px ${mergedlazyRender.offset} 0px`, true) : true;
	if (inView) {
		setIsVisible(true);
	}

	return results?.length ? (
		<CacheProvider>
			<div {...styling} ref={recsRef} className={classnames('ss__recommendation-grid', className, internalClassName)}>
				{isVisible ? (
					<RecommendationProfileTracker controller={controller}>
						{title && <h3 className="ss__recommendation-grid__title">{title}</h3>}

						<div className="ss__recommendation-grid__results">
							{results.map((result) =>
								(() => {
									if (resultComponent && controller) {
										return cloneWithProps(resultComponent, {
											controller,
											result: result as Product,
											theme,
											treePath,
										});
									} else {
										return (
											<ResultTracker result={result as Product} controller={controller}>
												<Result
													key={(result as Product).id}
													{...subProps.result}
													result={result as Product}
													controller={controller}
													treePath={treePath}
												/>
											</ResultTracker>
										);
									}
								})()
							)}
						</div>
					</RecommendationProfileTracker>
				) : (
					<RecommendationProfileTracker controller={controller}>
						{results.map((result) => (
							<ResultTracker controller={controller} result={result}>
								<></>
							</ResultTracker>
						))}
					</RecommendationProfileTracker>
				)}
			</div>
		</CacheProvider>
	) : null;
});

export type RecommendationGridProps = {
	controller: RecommendationController;
	breakpoints?: BreakpointsProps;
	resultComponent?: JSXComponent | JSX.Element;
	results?: Product[];
} & RecommendationGridTemplatesLegalProps &
	Omit<ComponentProps, 'customComponent'>;

export type RecommendationGridTemplatesLegalProps = {
	title?: string;
	columns?: number;
	rows?: number;
	gapSize?: string;
	trim?: boolean;
	lazyRender?: {
		enabled: boolean;
		offset?: string;
	};
};

interface RecommendationGridSubProps {
	result: Partial<ResultProps>;
}
