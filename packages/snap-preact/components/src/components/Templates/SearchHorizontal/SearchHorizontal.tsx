import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import type { SearchController } from '@athoscommerce/snap-controller';
import { ComponentProps } from '../../../types';
import { CacheProvider } from '../../../providers';
import { Search, SearchProps, SearchTemplatesLegalProps } from '../Search/Search';

export const SearchHorizontal = observer((properties: SearchHorizontalProps) => {
	return (
		<CacheProvider>
			<Search {...properties} alias="searchHorizontal" internalClassName="ss__search-horizontal" />
		</CacheProvider>
	);
});

export type SearchHorizontalProps = {
	controller: SearchController;
} & SearchProps &
	SearchHorizontalTemplatesLegalProps &
	Omit<ComponentProps, 'customComponent'>;

export type SearchHorizontalTemplatesLegalProps = SearchTemplatesLegalProps;
