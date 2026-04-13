import { h } from 'preact';

import { observer } from 'mobx-react-lite';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';

import { Theme, useTheme, CacheProvider, useTreePath, useSnap } from '../../../providers';
import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, ListOption, StyleScript } from '../../../types';
import { Select, SelectProps } from '../Select';
import { SearchPaginationStore } from '@athoscommerce/snap-store-mobx';
import type { SearchController } from '@athoscommerce/snap-controller';
import { RadioList, RadioListProps } from '../RadioList';
import { List, ListProps } from '../List';
import deepmerge from 'deepmerge';
import { Lang, useComponent } from '../../../hooks';
import type { SnapTemplates } from '../../../../../src';

const defaultStyles: StyleScript<PerPageProps> = () => {
	return css({
		'.ss__button__content': {
			display: 'flex',
			alignItems: 'center',
		},
	});
};

export const PerPage = observer((properties: PerPageProps) => {
	const globalTheme: Theme = useTheme();
	const snap = useSnap();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<PerPageProps> = {
		label: 'Per Page',
		type: 'dropdown',
		treePath: globalTreePath,
	};

	const props = mergeProps('perPage', globalTheme, defaultProps, properties);

	const { pagination, type, controller, label, disableStyles, className, internalClassName, treePath, customComponent } = props;

	if (customComponent) {
		const ComponentOverride = useComponent((snap as SnapTemplates)?.templates?.library.import.component.perPage || {}, customComponent);
		if (ComponentOverride) {
			return <ComponentOverride {...props} />;
		}
	}

	const store = pagination || controller?.store?.pagination;

	const subProps: SelectSubProps = {
		select: {
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
		RadioList: {
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
		List: {
			multiSelect: false,
			hideOptionCheckboxes: true,
			horizontal: true,
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
	};

	const styling = mergeStyles<PerPageProps>(props, defaultStyles);

	const selectedOption = store && store?.pageSizeOptions?.find((option) => option.value == store?.pageSize);

	//initialize lang
	const defaultLang = {
		label: {
			value: label,
		},
	};

	//deep merge with props.lang
	const lang = deepmerge(defaultLang, props.lang || {});

	// options can be an Array or ObservableArray - but should have length
	return store?.pageSize && typeof store?.pageSizeOptions == 'object' && store.pageSizeOptions?.length ? (
		<CacheProvider>
			{type?.toLowerCase() == 'dropdown' && (
				<Select
					{...styling}
					className={classnames('ss__per-page', 'ss__per-page__select', className, internalClassName)}
					{...subProps.select}
					label={label}
					options={store.pageSizeOptions}
					selected={selectedOption}
					onSelect={(e, option) => {
						store.setPageSize(+option!.value);
					}}
					lang={{
						buttonLabel: lang.label,
					}}
				/>
			)}

			{type?.toLowerCase() == 'list' && (
				<List
					{...styling}
					className={classnames('ss__per-page', 'ss__per-page__list', className, internalClassName)}
					{...subProps.List}
					onSelect={(e: any, option: any) => {
						store.setPageSize(+option!.value);
					}}
					requireSelection
					options={store.pageSizeOptions}
					selected={store.pageSizeOption}
					titleText={label}
					lang={{
						title: lang.label,
					}}
				/>
			)}

			{type?.toLowerCase() == 'radio' && (
				<RadioList
					{...styling}
					className={classnames('ss__per-page', 'ss__per-page__radioList', className, internalClassName)}
					{...subProps.RadioList}
					onSelect={(e: any, option: any) => {
						store.setPageSize(+option!.value);
					}}
					options={store.pageSizeOptions}
					selected={store.pageSizeOption}
					titleText={label}
					lang={{
						title: lang.label,
					}}
				/>
			)}
		</CacheProvider>
	) : null;
});

interface SelectSubProps {
	select: Partial<SelectProps>;
	RadioList: Partial<RadioListProps>;
	List: Partial<ListProps>;
}

export type PerPageProps = {
	pagination?: SearchPaginationStore;
	controller?: SearchController;
	lang?: Partial<PerPageLang>;
} & PerPageTemplatesLegalProps &
	ComponentProps<PerPageProps>;

export type PerPageTemplatesLegalProps = {
	label?: string;
	type?: 'dropdown' | 'list' | 'radio';
};

export interface PerPageLang {
	label: Lang<{
		options: ListOption[];
		selectedOptions: ListOption[];
	}>;
}
