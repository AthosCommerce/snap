import { h } from 'preact';
import { css } from '@emotion/react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';
import deepmerge from 'deepmerge';

import type { AbstractController } from '@athoscommerce/snap-controller';
import type { SearchStore, AutocompleteStore } from '@athoscommerce/snap-store-mobx';
import type { TabManagerStore, Tab } from '../../../../../src/Templates/Stores/TabManagerStore';
import { ComponentProps, StyleScript } from '../../../types';
import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { Lang, useLang, useCustomComponentOverride } from '../../../hooks';
import { Button, ButtonProps } from '../../Atoms/Button';
import { LangAttributes } from '../../../hooks/useLang';

const defaultStyles: StyleScript<TabSelectionProps> = () => {
	return css({
		'.ss__tab-selection__title': {
			textAlign: 'center',
		},
		'.ss__tab-selection__tabs': {
			display: 'flex',
			gap: '10px',
			textAlign: 'center',
			alignItems: 'center',
			alignContent: 'center',
			justifyContent: 'center',
		},
		'.ss__tab-selection__button--active': {
			fontWeight: 'bold',
		},
		'.ss__tab-selection__button__count': {
			marginLeft: '5px',
		},
	});
};

export const TabSelection = observer((properties: TabSelectionProps) => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<TabSelectionProps> = {
		treePath: globalTreePath,
		showResultCount: true,
		enableEmptyTabs: false,
	};

	const props = mergeProps('tabSelection', globalTheme, defaultProps, properties);

	const { tabManager, titleText, showResultCount, enableEmptyTabs, onTabClick, disableStyles, className, internalClassName, treePath } = props;

	const { overrideElement, shouldRenderDefault } = useCustomComponentOverride('tabSelection', props);

	if (!shouldRenderDefault) {
		return overrideElement;
	}

	if (!tabManager || !tabManager.tabs?.length) {
		return null;
	}

	const subProps: TabSelectionSubProps = {
		button: {
			// inherited props
			...defined({
				disableStyles,
			}),
			theme: props.theme,
			treePath,
		},
	};

	function getResultCount(controller: AbstractController): number | undefined {
		const store = controller.store as SearchStore | AutocompleteStore;
		return store?.loaded ? store.pagination?.totalResults : undefined;
	}

	const styling = mergeStyles<TabSelectionProps>(props, defaultStyles);

	//initialize lang
	const defaultLang: Partial<TabSelectionLang> = {
		title: {
			value: titleText,
		},
		tabList: {
			attributes: {
				'aria-label': 'Result tabs',
			},
		},
	};

	//deep merge with props.lang - scoped per key, each is resolved against different data
	const langs = deepmerge(defaultLang, { title: props.lang?.title || {}, tabList: props.lang?.tabList || {} });
	const mergedLang = useLang(langs as any, { tabManager }, { activeBreakpoint: globalTheme?.activeBreakpoint });

	return (
		<CacheProvider>
			<div {...styling} className={classnames('ss__tab-selection', className, internalClassName)}>
				{titleText || props.lang?.title?.value ? <h4 className="ss__tab-selection__title" {...mergedLang.title?.all}></h4> : null}

				<div className="ss__tab-selection__tabs" role="tablist" {...mergedLang.tabList?.attributes}>
					{tabManager.tabs.map((tab) => {
						const active = tabManager.active?.id === tab.id;
						const resultCount = getResultCount(tab.controller);
						const disabled = !enableEmptyTabs && !active && resultCount === 0;
						const label = tab.label || tab.id;
						const displayedCount = showResultCount ? resultCount : undefined;

						const defaultTabLang: Partial<TabSelectionLang> = {
							tabButton: {
								value: label,
								attributes: {
									'aria-label': typeof displayedCount == 'number' ? `${label}, ${displayedCount} results` : label,
								},
							},
						};

						const tabLangs = deepmerge(defaultTabLang, { tabButton: props.lang?.tabButton || {} });
						const tabLang = useLang(tabLangs as any, { tab, resultCount, active }, { activeBreakpoint: globalTheme?.activeBreakpoint });

						return (
							<Button
								key={tab.id}
								{...subProps.button}
								internalClassName={classnames('ss__tab-selection__button', {
									'ss__tab-selection__button--active': active,
								})}
								disabled={disabled}
								// @ts-ignore - role and aria-selected are valid props for Button, but not defined in ButtonProps
								role="tab"
								aria-selected={active}
								{...tabLang.tabButton?.attributes}
								onClick={(e) => {
									onTabClick && onTabClick(e, tab);
									tabManager.setActive(tab.id);
								}}
							>
								<span className="ss__tab-selection__button__label" {...tabLang.tabButton?.value} />
								{typeof displayedCount == 'number' ? <span className="ss__tab-selection__button__count">({displayedCount})</span> : null}
							</Button>
						);
					})}
				</div>
			</div>
		</CacheProvider>
	);
});

interface TabSelectionSubProps {
	button: Partial<ButtonProps>;
}

export type TabSelectionProps = {
	lang?: Partial<TabSelectionLang>;
	tabManager?: TabManagerStore;
} & TabSelectionTemplatesLegalProps &
	ComponentProps<TabSelectionProps>;

export type TabSelectionTemplatesLegalProps = {
	titleText?: string;
	showResultCount?: boolean;
	enableEmptyTabs?: boolean;
	onTabClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>, tab: Tab) => void;
};

export interface TabSelectionLang {
	title?: Lang<{ tabManager: TabManagerStore }>;
	tabList?: LangAttributes<{ tabManager: TabManagerStore }>;
	tabButton?: Lang<{ tab: Tab; resultCount?: number; active: boolean }>;
}
