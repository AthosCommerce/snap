import { css } from '@emotion/react';
import { autocompleteModalThemeComponentProps } from '../../../themeComponents/autocompleteModal';
import { ThemeComponent } from '../../../../providers';
import { AutocompleteModalProps, AutocompleteModalTemplatesLegalProps } from '../../../../components/Templates/AutocompleteModal';
import { autocompleteSharedStyleScript } from '../templates/autocompleteShared';
import { custom } from '../../custom';

// static variables
const searchInputHeight = 40;

// CSS in JS style script for the Search component
const autocompleteModalStyleScript = (props: AutocompleteModalProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const desktopBp = variables?.breakpoints?.desktop || custom.breakpoints.desktop;

	// autocomplete shared styles
	const sharedStyles = css({
		'.ss__modal': {
			'.ss__modal__content': {
				'.ss__autocomplete-modal__inner': {
					'.ss__autocomplete': {
						...autocompleteSharedStyleScript(props, 'autocompleteModal'),
					},
				},
			},
		},
	});

	// autocomplete modal styles
	const modalStyles = css({
		...custom.styles.boxSizing('autocompleteModal', props?.treePath, props?.name),
		'.ss__modal': {
			'.ss__modal__content': {
				'.ss__autocomplete-modal__inner': {
					top: '5vh',
					display: 'flex',
					flexFlow: 'column nowrap',
					maxWidth: '1000px',
					overflow: 'visible',
					'& > .ss__search-input': {
						height: 'auto',
						flex: `0 0 ${searchInputHeight}px`,
						margin: 0,
						'.ss__button, .ss__search-input__button--close-search-button': {
							width: `${searchInputHeight}px`,
						},
						'.ss__search-input__input': {
							backgroundColor: custom.colors.white,
						},
					},
					'.ss__autocomplete': {
						width: '100%',
						flex: '1 1 0%',
						overflowY: 'auto',
						overflowX: 'hidden',
						...custom.styles.scrollbar(),
					},
				},
			},
		},
		[`${custom.utils.getBp(desktopBp)}`]: {
			'.ss__modal': {
				'.ss__modal__content': {
					'.ss__autocomplete-modal__inner': {
						top: '5vh',
					},
				},
			},
		},
	});

	// autocomplete styles
	const autocompleteModalStyles = css([sharedStyles, modalStyles]);

	return autocompleteModalStyles;
};

export const autocompleteModal: ThemeComponent<'autocompleteModal', AutocompleteModalProps, AutocompleteModalTemplatesLegalProps> = {
	default: {
		...autocompleteModalThemeComponentProps.default,
		autocompleteModal: {
			...(autocompleteModalThemeComponentProps.default?.['autocompleteModal'] || {}),
			themeStyleScript: autocompleteModalStyleScript,
			layout: 'standard',
			width: '90vw',
			contentTitle: 'Product Suggestions',
		},
		'autocompleteModal terms': {
			vertical: true,
		},
		'autocompleteModal termsList': {
			verticalOptions: true,
		},
		'autocompleteModal facets': {
			limit: 3,
		},
		'autocompleteModal facet': {
			...(autocompleteModalThemeComponentProps.default?.['autocompleteModal facet'] || {}),
			display: {
				list: {
					limit: 5,
				},
				hierarchy: {
					limit: 5,
				},
				grid: {
					limit: 6,
				},
				palette: {
					limit: 6,
				},
			},
		},
		'autocompleteModal facetPaletteOptions': {
			gridSize: '48px',
			hideLabel: false,
		},
		'autocompleteModal facetGridOptions': {
			gridSize: '48px',
		},
		'autocompleteModal results': {
			rows: 2,
			columns: 3,
			gapSize: `${custom.spacing.x4}px`,
		},
		'autocompleteModal recommendationGrid': {
			rows: 2,
			columns: 4,
			gapSize: `${custom.spacing.x4}px`,
		},
		'autocompleteModal button.see-more icon': {
			size: `${custom.sizes.icon12}px`,
			icon: custom.icons.arrowRight,
		},
	},
	mobile: {
		...autocompleteModalThemeComponentProps.mobile,
		autocompleteModal: {
			...(autocompleteModalThemeComponentProps.mobile?.['autocompleteModal'] || {}),
			layout: 'mini',
		},
		'autocompleteModal terms': {
			vertical: false,
		},
		'autocompleteModal termsList': {
			verticalOptions: false,
		},
		'autocompleteModal results': {
			rows: 1,
			columns: 3,
		},
		'autocompleteModal recommendationGrid': {
			rows: 1,
			columns: 3,
		},
	},
	tablet: {
		...autocompleteModalThemeComponentProps.tablet,
		autocompleteModal: {
			...(autocompleteModalThemeComponentProps.tablet?.['autocompleteModal'] || {}),
			layout: 'standard',
		},
		'autocompleteModal terms': {
			vertical: false,
		},
		'autocompleteModal termsList': {
			verticalOptions: false,
		},
		'autocompleteModal facet': {
			display: {
				list: {
					limit: 3,
				},
				hierarchy: {
					limit: 3,
				},
				grid: {
					limit: 4,
				},
				palette: {
					limit: 4,
				},
			},
		},
		'autocompleteModal results': {
			rows: 1,
			columns: 4,
		},
		'autocompleteModal recommendationGrid': {
			rows: 1,
			columns: 4,
		},
	},
	desktop: {
		...autocompleteModalThemeComponentProps.desktop,
		autocompleteModal: {
			...(autocompleteModalThemeComponentProps.desktop?.['autocompleteModal'] || {}),
			layout: 'standard',
		},
		'autocompleteModal terms': {
			vertical: false,
		},
		'autocompleteModal termsList': {
			verticalOptions: false,
		},
		'autocompleteModal results': {
			rows: 2,
			columns: 3,
		},
		'autocompleteModal recommendationGrid': {
			rows: 2,
			columns: 4,
		},
	},
};
