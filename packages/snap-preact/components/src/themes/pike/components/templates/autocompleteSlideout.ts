import { css } from '@emotion/react';
import { autocompleteSlideoutThemeComponentProps } from '../../../themeComponents/autocompleteSlideout';
import { ThemeComponent } from '../../../../providers';
import { AutocompleteSlideoutProps, AutocompleteSlideoutTemplatesLegalProps } from '../../../../components/Templates/AutocompleteSlideout';
import { autocompleteSharedStyleScript } from '../templates/autocompleteShared';
import { custom } from '../../custom';

// static variables
const searchInputHeight = 40;

// CSS in JS style script for the Search component
const autocompleteSlideoutStyleScript = (props: AutocompleteSlideoutProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// autocomplete shared styles
	const sharedStyles = css({
		'.ss__autocomplete-slideout__inner': {
			'.ss__autocomplete': {
				...autocompleteSharedStyleScript(props, 'autocompleteSlideout'),
			},
		},
	});

	// autocomplete fixed styles
	const fixedStyles = css({
		border: 0,
		padding: `${custom.spacing.x4}px`,
		...custom.styles.boxSizing('autocompleteSlideout', props?.treePath, props?.name),
		'.ss__autocomplete-slideout__inner': {
			height: '100%',
			'& > .ss__search-input': {
				height: `${searchInputHeight}px`,
				margin: `0 0 ${custom.spacing.x4}px 0`,
				'.ss__button, .ss__search-input__button--close-search-button': {
					width: `${searchInputHeight}px`,
				},
			},
			'.ss__autocomplete': {
				alignContent: 'flex-start',
				overflow: 'visible',
				height: 'calc(100% - 60px)',
				overflowY: 'auto',
				overflowX: 'hidden',
				...custom.styles.scrollbar(),
			},
		},
	});

	// autocomplete styles
	const autocompleteSlideoutStyles = css([sharedStyles, fixedStyles]);

	return autocompleteSlideoutStyles;
};

export const autocompleteSlideout: ThemeComponent<'autocompleteSlideout', AutocompleteSlideoutProps, AutocompleteSlideoutTemplatesLegalProps> = {
	default: {
		...autocompleteSlideoutThemeComponentProps.default,
		autocompleteSlideout: {
			...(autocompleteSlideoutThemeComponentProps.default?.['autocompleteSlideout'] || {}),
			themeStyleScript: autocompleteSlideoutStyleScript,
			layout: 'mini',
			contentTitle: 'Product Suggestions',
		},
		'autocompleteSlideout terms': {
			vertical: false,
		},
		'autocompleteSlideout termsList': {
			verticalOptions: false,
		},
		'autocompleteSlideout results': {
			rows: 2,
			columns: 3,
		},
		'autocompleteSlideout recommendationGrid': {
			rows: 2,
			columns: 3,
		},
		'autocompleteSlideout button.see-more icon': {
			size: `${custom.sizes.icon12}px`,
			icon: custom.icons.arrowRight,
		},
	},
	mobile: {
		...autocompleteSlideoutThemeComponentProps.mobile,
		autocompleteSlideout: {
			...(autocompleteSlideoutThemeComponentProps.mobile?.['autocompleteSlideout'] || {}),
			layout: 'mini',
		},
		'autocompleteSlideout terms': {
			vertical: false,
		},
		'autocompleteSlideout termsList': {
			verticalOptions: false,
		},
		'autocompleteSlideout results': {
			rows: 2,
			columns: 3,
		},
		'autocompleteSlideout recommendationGrid': {
			rows: 2,
			columns: 3,
		},
	},
	tablet: {
		...autocompleteSlideoutThemeComponentProps.tablet,
		autocompleteSlideout: {
			...(autocompleteSlideoutThemeComponentProps.tablet?.['autocompleteSlideout'] || {}),
			layout: 'mini',
		},
		'autocompleteSlideout terms': {
			vertical: false,
		},
		'autocompleteSlideout termsList': {
			verticalOptions: false,
		},
		'autocompleteSlideout results': {
			rows: 2,
			columns: 3,
		},
		'autocompleteSlideout recommendationGrid': {
			rows: 2,
			columns: 3,
		},
	},
	desktop: {
		...autocompleteSlideoutThemeComponentProps.desktop,
		autocompleteSlideout: {
			...(autocompleteSlideoutThemeComponentProps.desktop?.['autocompleteSlideout'] || {}),
			layout: 'mini',
		},
		'autocompleteSlideout terms': {
			vertical: false,
		},
		'autocompleteSlideout termsList': {
			verticalOptions: false,
		},
		'autocompleteSlideout results': {
			rows: 2,
			columns: 3,
		},
		'autocompleteSlideout recommendationGrid': {
			rows: 2,
			columns: 3,
		},
	},
};
