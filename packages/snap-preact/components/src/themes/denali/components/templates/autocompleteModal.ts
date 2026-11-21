import { css } from '@emotion/react';
import { autocompleteModalThemeComponentProps } from '../../../themeComponents/autocompleteModal';
import { ThemeComponent } from '../../../../providers';
import { autocompleteCloseSearchButtonStyles, autocompleteSeeMoreStyles, autocompleteSharedStyles } from './autocompleteShared';
import { AutocompleteModalProps, AutocompleteModalTemplatesLegalProps } from '../../../../components/Templates/AutocompleteModal';

// CSS in JS style script for the Search component
const autocompleteModalStyleScript = ({ theme }: AutocompleteModalProps) => {
	const variables = theme?.variables;

	return css({
		...autocompleteSharedStyles,
		// a rounded card, like the quickview modal - its 10px padding puts the cards and results 20px in from its edges
		'& .ss__autocomplete-modal__inner': {
			boxSizing: 'border-box',
			padding: '10px',
			borderRadius: '30px',
			overflow: 'auto',
		},
		// below the desktop breakpoint the component pins the card to the top of the viewport at full height - on
		// tablets it keeps the wide screen position instead, a tenth of the way down
		[`@media (max-width: ${variables?.breakpoints?.desktop}px)`]: {
			'& .ss__autocomplete-modal__inner': {
				top: '10vh',
				maxHeight: '80vh',
			},
		},
		// a phone needs the height - the card floats 10px clear of the edges, like the slideout panels, so its
		// rounded corners are not cut off
		[`@media (max-width: ${variables?.breakpoints?.mobile}px)`]: {
			'& .ss__autocomplete-modal__inner': {
				top: '10px',
				maxHeight: 'calc(100vh - 20px)',
			},
		},
		// the card is the frame - no second outline around the autocomplete inside it
		'.ss__autocomplete-modal__inner .ss__autocomplete': {
			border: 0,
		},
		// the search input lines up with the cards and results beneath it - it stops short on the right to leave
		// room for the close button, and its top margin centers it on that button
		'.ss__autocomplete-modal__inner .ss__autocomplete-modal__search-input': {
			position: 'relative',
			margin: '4px 52px 0 10px',
		},
		// 20px from the card's top and right edges, like the quickview modal's close button
		'.ss__autocomplete-modal__search-input .ss__search-input__button--close-search-button': {
			...autocompleteCloseSearchButtonStyles,
			right: '-44px',
		},
		...autocompleteSeeMoreStyles(variables?.colors?.secondary),
	});
};

export const autocompleteModal: ThemeComponent<'autocompleteModal', AutocompleteModalProps, AutocompleteModalTemplatesLegalProps> = {
	default: {
		...autocompleteModalThemeComponentProps.default,
		autocompleteModal: {
			...(autocompleteModalThemeComponentProps.default?.['autocompleteModal'] || {}),
			themeStyleScript: autocompleteModalStyleScript,
			// wider terms and facets columns than the component's 150px, so the term cards' titles and the facet
			// options beside their checkboxes fit on one line. only the width differs from the shared columns - their
			// modules are the same (mirrored in THEME_SELECTORS in eslint/src/utils/banners.cjs)
			column1: {
				layout: ['termsList'],
				width: '180px',
			},
			column2: {
				layout: ['facets'],
				width: '180px',
			},
		},
		// an X rather than the component's back chevron, matching the other close buttons
		'autocompleteModal modal searchInput button.close-search icon': {
			icon: 'close-thin',
			size: 16,
		},
		// list options show their checkboxes, as in the sidebar - a checked box marks a selected option
		'autocompleteModal facetListOptions': {
			...(autocompleteModalThemeComponentProps.default?.['autocompleteModal facetListOptions'] || {}),
			hideCheckbox: false,
		},
		// the swatches are too small for a check - the selected one gets a ring instead
		'autocompleteModal facetPaletteOptions': {
			...(autocompleteModalThemeComponentProps.default?.['autocompleteModal facetPaletteOptions'] || {}),
			hideIcon: true,
		},
		'autocompleteModal recommendationGrid': {
			columns: 4,
			rows: 2,
		},
	},
	mobile: autocompleteModalThemeComponentProps.mobile,
	desktop: autocompleteModalThemeComponentProps.desktop,
	tablet: {
		...autocompleteModalThemeComponentProps.tablet,
		// the shared tablet props set no grid here - keep the default layer's grid over the theme's tablet `recommendationGrid` columns
		'autocompleteModal recommendationGrid': {
			columns: 4,
			rows: 2,
		},
	},
};
