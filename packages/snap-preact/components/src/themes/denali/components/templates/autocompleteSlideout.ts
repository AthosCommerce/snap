import { css } from '@emotion/react';
import { autocompleteSlideoutThemeComponentProps } from '../../../themeComponents/autocompleteSlideout';
import { ThemeComponent } from '../../../../providers';
import { AutocompleteSlideoutProps, AutocompleteSlideoutTemplatesLegalProps } from '../../../../components/Templates/AutocompleteSlideout';

// CSS in JS style script for the Search component
const autocompleteSlideoutStyleScript = ({}: AutocompleteSlideoutProps) => {
	return css({
		// half the component's facet header/options gap (out-specify the facet's own styles)
		'& .ss__facet .ss__facet__header': {
			paddingBottom: '3px',
		},
		'& .ss__facet .ss__facet__options': {
			marginTop: '4px',
		},
		// the first list option sits as close to the header as the palette's first swatch
		'& .ss__facet .ss__facet-list-options__option:first-child, & .ss__facet .ss__facet-hierarchy-options__option:first-child': {
			paddingTop: 0,
			marginTop: 0,
		},
		'.ss__autocomplete__button--see-more': {
			margin: '10px 0px',
			border: '0px',
		},
	});
};

export const autocompleteSlideout: ThemeComponent<'autocompleteSlideout', AutocompleteSlideoutProps, AutocompleteSlideoutTemplatesLegalProps> = {
	default: {
		...autocompleteSlideoutThemeComponentProps.default,
		autocompleteSlideout: {
			...(autocompleteSlideoutThemeComponentProps.default?.['autocompleteSlideout'] || {}),
			themeStyleScript: autocompleteSlideoutStyleScript,
		},
		'autocompleteSlideout recommendationGrid': {
			columns: 2,
			rows: 2,
		},
	},
	mobile: autocompleteSlideoutThemeComponentProps.mobile,
	desktop: autocompleteSlideoutThemeComponentProps.desktop,
	tablet: autocompleteSlideoutThemeComponentProps.tablet,
};
