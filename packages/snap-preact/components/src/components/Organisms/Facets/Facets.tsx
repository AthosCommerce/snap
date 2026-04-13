import { h } from 'preact';

import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import deepmerge from 'deepmerge';
import { observer } from 'mobx-react-lite';

import { Facet, FacetProps } from '../Facet';
import { Theme, useTheme, CacheProvider, useTreePath, useSnap } from '../../../providers';
import { useComponent } from '../../../hooks';
import type { SnapTemplates } from '../../../../../src';
import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, StyleScript } from '../../../types';
import type { SearchController, AutocompleteController } from '@athoscommerce/snap-controller';
import type { ValueFacet, RangeFacet } from '@athoscommerce/snap-store-mobx';

const defaultStyles: StyleScript<FacetsProps> = () => {
	return css({});
};

export const Facets = observer((properties: FacetsProps) => {
	const globalTheme: Theme = useTheme();
	const snap = useSnap();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<FacetsProps> = {
		facets: properties.controller?.store?.facets,
		treePath: globalTreePath,
	};

	let props = mergeProps('facets', globalTheme, defaultProps, properties);

	const { limit, onFacetOptionClick, disableStyles, className, internalClassName, controller, treePath, customComponent } = props;

	if (customComponent) {
		const ComponentOverride = useComponent((snap as SnapTemplates)?.templates?.library.import.component.facets || {}, customComponent);
		if (ComponentOverride) {
			return <ComponentOverride {...props} />;
		}
	}

	const facetClickEvent = (e: React.MouseEvent<Element, MouseEvent>) => {
		onFacetOptionClick && onFacetOptionClick(e);

		// remove focus from input (close the autocomplete)
		(controller as AutocompleteController)?.setFocused && (controller as AutocompleteController)?.setFocused();
	};

	const themeDefaults: Theme = {
		components: {
			facetGridOptions: {
				onClick: facetClickEvent,
			},
			facetHierarchyOptions: {
				onClick: facetClickEvent,
			},
			facetListOptions: {
				onClick: facetClickEvent,
			},
			facetPaletteOptions: {
				onClick: facetClickEvent,
			},
		},
	};

	// merge deeply the themeDefaults with the theme props and the displaySettings theme props (do not merge arrays, but replace them)
	const theme = deepmerge(themeDefaults, props?.theme || {}, { arrayMerge: (destinationArray, sourceArray) => sourceArray });

	props = {
		...props,
		theme,
	};

	let { facets } = props;
	if (limit && facets && limit > 0) {
		facets = facets.slice(0, +limit);
	}

	const subProps: FacetsSubProps = {
		facet: {
			// default props
			internalClassName: 'ss__facets__facet',
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props.theme,
			treePath,
		},
	};

	const styling = mergeStyles<FacetsProps>(props, defaultStyles);

	return facets && facets?.length > 0 ? (
		<CacheProvider>
			<div className={classnames('ss__facets', className, internalClassName)} {...styling}>
				{facets.map((facet) => (
					<Facet key={facet.field} {...subProps.facet} facet={facet} />
				))}
			</div>
		</CacheProvider>
	) : null;
});

interface FacetsSubProps {
	facet: Partial<FacetProps>;
}

export type IndividualFacetType = ValueFacet | RangeFacet;

export type FacetsProps = {
	facets?: IndividualFacetType[];
	controller?: SearchController | AutocompleteController;
} & FacetsTemplatesLegalProps &
	ComponentProps<FacetsProps>;

export type FacetsTemplatesLegalProps = {
	limit?: number;
	onFacetOptionClick?: (e: React.MouseEvent<Element, MouseEvent>) => void;
};
