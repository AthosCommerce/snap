import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import type { SearchController } from '@athoscommerce/snap-controller';
import { ComponentProps } from '../../../types';
import { CacheProvider } from '../../../providers';
import { Search, SearchProps, SearchTemplatesLegalProps } from '../Search/Search';

export const SearchCollapsible = observer((properties: SearchCollapsibleProps) => {
	return (
		<CacheProvider>
			<Search {...properties} alias="searchCollapsible" />
		</CacheProvider>
	);
});

//todo improve the controller spreading here..

export type SearchCollapsibleProps = {
	controller: SearchController;
} & SearchProps &
	SearchCollapsibleTemplatesLegalProps &
	Omit<ComponentProps, 'customComponent'>;

export type SearchCollapsibleTemplatesLegalProps = SearchTemplatesLegalProps;
