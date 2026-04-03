import { h } from 'preact';

import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';

import { Filter, FilterProps } from '../../Molecules/Filter';
import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { Theme, useTheme, CacheProvider, useTreePath, useSnap } from '../../../providers';
import { ComponentProps, StyleScript } from '../../../types';
import type { SearchController, AutocompleteController } from '@athoscommerce/snap-controller';
import type { Filter as FilterType } from '@athoscommerce/snap-store-mobx';
import { IconProps, IconType } from '../../Atoms/Icon';
import { Lang, useComponent, useLang } from '../../../hooks';
import type { SnapTemplates } from '../../../../../src';
import deepmerge from 'deepmerge';

const defaultStyles: StyleScript<FilterSummaryProps> = (props) => {
	const variables = props.theme?.variables;
	return css({
		'.ss__filter-summary__title': {
			fontSize: '1.2em',
			padding: '6px 0',
		},
		'.ss__filter-summary__filters': {
			margin: '5px 0',
			display: 'flex',
			gap: '10px',
			flexWrap: 'wrap',
		},

		'&.ss__filter-summary--list': {
			'& .ss__filter-summary__clear-all .ss__filter__value': {
				marginLeft: '5px',
			},

			'&, .ss__filter-summary__filters': {
				display: 'block',
			},

			'.ss__filter-summary__filters': {
				'.ss__filter': {
					display: 'block',
					margin: `0 5px 5px 5px`,
					'.ss__filter__button': {
						padding: `0 0 0 0`,
						border: 0,
						'&, &:hover, &:not(.ss__button--disabled):hover, &.ss__button--disabled': {
							backgroundColor: 'transparent',
						},
						'.ss__button__content': {
							display: 'flex',
							alignItems: 'center',

							'.ss__icon': {
								padding: '4px',
								backgroundColor: '#f8f8f8',
								border: `1px solid black`,
								width: `8px`,
								height: `8px`,
								fill: variables?.colors?.primary,
								stroke: variables?.colors?.primary,
								marginRight: '0px',
							},
						},
					},
				},
			},
		},
	});
};

export const FilterSummary = observer((properties: FilterSummaryProps) => {
	const globalTheme: Theme = useTheme();
	const snap = useSnap();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<FilterSummaryProps> = {
		title: 'Current Filters',
		type: 'inline',
		clearAllLabel: 'Clear All',
		clearAllIcon: 'close-thin',
		filterIcon: 'close-thin',
		filters: properties.controller?.store?.filters,
		separator: ':',
		treePath: globalTreePath,
	};

	const props = mergeProps('filterSummary', globalTheme, defaultProps, properties);

	const {
		filters,
		title,
		type,
		filterIcon,
		clearAllIcon,
		separator,
		hideFacetLabel,
		hideTitle,
		clearAllLabel,
		hideClearAll,
		onClick,
		onClearAllClick,
		disableStyles,
		className,
		internalClassName,
		treePath,
		customComponent,
	} = props;

	if (customComponent) {
		const ComponentOverride = useComponent((snap as SnapTemplates)?.templates?.library.import.component.filterSummary || {}, customComponent);
		if (ComponentOverride) {
			return <ComponentOverride {...props} />;
		}
	}

	const subProps: FilterSummarySubProps = {
		filter: {
			name: 'filter',
			// default props
			internalClassName: 'ss__filter-summary__filter',
			// inherited props
			...defined({
				disableStyles,
				separator,
				hideFacetLabel,
				icon: filterIcon,
			}),
			// component theme overrides
			theme: props.theme,
			treePath,
		},
	};

	const styling = mergeStyles<FilterSummaryProps>(props, defaultStyles);

	//initialize lang
	const defaultLang = {
		title: {
			value: title,
		},
		clearAllLabel: {
			value: clearAllLabel,
		},
	};

	//deep merge with props.lang
	const lang = deepmerge(defaultLang, props.lang || {});
	const mergedLang = useLang(lang as any, {
		filters,
	});

	return filters?.length ? (
		<CacheProvider>
			<div
				{...styling}
				className={classnames(
					'ss__filter-summary',
					{ 'ss__filter-summary--list': type === 'list' },
					{ 'ss__filter-summary--inline': type === 'inline' },
					className,
					internalClassName
				)}
			>
				{!hideTitle && <div className="ss__filter-summary__title" {...mergedLang.title?.all}></div>}

				<div className="ss__filter-summary__filters">
					{filters.map((filter) => (
						<Filter {...subProps.filter} filter={filter} onClick={(e) => onClick && onClick(e, filter)} />
					))}

					{!hideClearAll && (
						<Filter
							{...subProps.filter}
							name={'clear-all'}
							icon={clearAllIcon}
							internalClassName={`${subProps?.filter?.internalClassName} ss__filter-summary__clear-all`}
							hideFacetLabel
							valueLabel={clearAllLabel}
							onClick={(e) => {
								onClearAllClick && onClearAllClick(e);
								properties.controller?.urlManager.remove('filter').remove('page').go();
							}}
							lang={{
								filter: { attributes: { 'aria-label': clearAllLabel } },
							}}
						/>
					)}
				</div>
			</div>
		</CacheProvider>
	) : null;
});

export type FilterSummaryProps = {
	filters?: FilterType[];
	controller?: SearchController | AutocompleteController;
	lang?: Partial<FilterSummaryLang>;
} & FilterSummaryTemplatesLegalProps &
	ComponentProps<FilterSummaryProps>;

export type FilterSummaryTemplatesLegalProps = {
	type?: 'inline' | 'list';
	title?: string;
	hideTitle?: boolean;
	filterIcon?: IconType | Partial<IconProps>;
	clearAllIcon?: IconType | Partial<IconProps>;
	separator?: string;
	hideFacetLabel?: boolean;
	clearAllLabel?: string;
	hideClearAll?: boolean;
	onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, filterFilter: FilterType) => void;
	onClearAllClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

export interface FilterSummaryLang {
	title: Lang<{
		filters: FilterType[];
	}>;
	clearAllLabel: Lang<{
		label?: string;
		value?: string;
	}>;
}

interface FilterSummarySubProps {
	filter: Partial<FilterProps>;
}
