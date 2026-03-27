import { h } from 'preact';

import { observer } from 'mobx-react-lite';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';

import type { AutocompleteController } from '@athoscommerce/snap-controller';
import { ComponentProps, StyleScript } from '../../../types';
import { Theme, useTheme, CacheProvider, useTreePath, useSnap } from '../../../providers';
import { useComponent } from '../../../hooks';
import type { SnapTemplates } from '../../../../../src';
import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { Terms, TermsProps } from '../../Molecules/Terms/Terms';

const defaultStyles: StyleScript<TermsListProps> = ({}) => {
	return css({
		display: 'flex',
		flexDirection: 'row',
		background: '#f8f8f8',
		width: 'auto',
		flexWrap: 'wrap',

		'.ss__terms-list__row': {
			display: 'flex',
			flexDirection: 'row',
			flexBasis: '100%',
		},

		'.ss__terms-list__row:empty': {
			display: 'none',
		},

		'.ss__terms-list__separator': {
			flexGrow: 1,
			flexShrink: 1,
		},
	});
};

export const TermsList = observer((properties: TermsListProps) => {
	const globalTheme: Theme = useTheme();
	const snap = useSnap();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<TermsListProps> = {
		layout: [['Suggestions'], ['Trending'], ['History']],
		historyTitle: 'Recent Searches',
		trendingTitle: 'Popular Searches',
		suggestionTitle: 'Search Suggestions',
		treePath: globalTreePath,
	};

	const props = mergeProps('termsList', globalTheme, defaultProps, properties);
	const {
		layout,
		historyTitle,
		verticalOptions,
		trendingTitle,
		suggestionTitle,
		retainHistory,
		retainTrending,
		treePath,
		disableStyles,
		className,
		internalClassName,
		controller,
		customComponent,
	} = props;

	if (customComponent) {
		const ComponentOverride = useComponent((snap as SnapTemplates)?.templates?.library.import.component.termsList || {}, customComponent);
		if (ComponentOverride) {
			return <ComponentOverride {...props} />;
		}
	}

	const subProps: TermsListSubProps = {
		terms: {
			vertical: verticalOptions ? true : false,
			// default props
			// inherited props
			...defined({
				disableStyles,
			}),
			theme: props.theme,
			treePath,
		},
	};

	const styling = mergeStyles<TermsListProps>(props, defaultStyles);

	const history = controller?.store.history || [];
	const suggestions = controller?.store.terms || [];
	const trending = controller?.store.trending || [];

	const trendingActive = trending?.filter((term) => term.active).pop();
	const historyActive = history?.filter((term) => term.active).pop();

	const { loaded, results, state } = controller?.store;

	let showTrending = false;
	if (trending?.length && ((retainTrending && loaded) || (!results.length && !state.input))) {
		showTrending = true;
	}

	let showHistory = false;
	if (history?.length && ((retainHistory && loaded) || (!results.length && !state.input))) {
		showHistory = true;
	}

	if (!controller.store.state.input && (historyActive || trendingActive)) {
		if (history?.length) showHistory = true;
		if (trending?.length) showTrending = true;
	}

	const findModule = (module: TermsListModuleNames[] | TermsListModuleNames) => {
		if (typeof module !== 'string') {
			const children = module?.map((subModule) => findModule(subModule));
			const hasContent = module?.some((subModule, i) => subModule !== '_' && children[i]);
			if (!hasContent) return null;
			return <div className="ss__terms-list__row">{children}</div>;
		}

		if (module == '_') {
			return <div className="ss__terms-list__separator"></div>;
		}

		if (module == 'History' && showHistory) {
			return (
				<Terms
					internalClassName={'ss__terms-list__terms--history'}
					title={historyTitle}
					terms={history}
					controller={controller}
					name={'history'}
					limit={controller.config.settings?.history?.limit}
					{...subProps.terms}
				/>
			);
		}

		if (module == 'Trending' && showTrending) {
			return (
				<Terms
					internalClassName={'ss__terms-list__terms--trending'}
					title={trendingTitle}
					terms={trending}
					controller={controller}
					name={'trending'}
					limit={controller.config.settings?.trending?.limit}
					{...subProps.terms}
				/>
			);
		}

		if (module == 'Suggestions') {
			if (!suggestions.length) return null;
			return (
				<Terms
					internalClassName={'ss__terms-list__terms--suggestions'}
					title={suggestionTitle}
					terms={suggestions}
					controller={controller}
					name={'suggestions'}
					{...subProps.terms}
				/>
			);
		}
	};

	const modules = layout?.map((module) => findModule(module as TermsListModuleNames));

	return modules?.some(Boolean) ? (
		<CacheProvider>
			<div {...styling} className={classnames('ss__terms-list', className, internalClassName)}>
				{modules}
			</div>
		</CacheProvider>
	) : null;
});

interface TermsListSubProps {
	terms: Partial<TermsProps>;
}

export type TermsListModuleNames = 'Trending' | 'Suggestions' | 'History' | '_';

export type TermsListProps = {
	controller: AutocompleteController;
} & TermsListTemplatesLegalProps &
	ComponentProps<TermsListProps>;

export type TermsListTemplatesLegalProps = {
	layout?: TermsListModuleNames[] | TermsListModuleNames[][];
	historyTitle?: string;
	suggestionTitle?: string;
	trendingTitle?: string;
	retainHistory?: boolean;
	retainTrending?: boolean;
	verticalOptions?: boolean;
};
