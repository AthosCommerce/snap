import { h } from 'preact';
import { observer } from 'mobx-react-lite';

import { PaginationInfo, PaginationInfoProps } from './PaginationInfo';
import { componentArgs } from '../../../utilities';
import { Snapify } from '../../../utilities/snapify';
import Readme from '../PaginationInfo/readme.md';
import type { SearchController } from '@athoscommerce/snap-controller';

export default {
	title: 'Atoms/PaginationInfo',
	component: PaginationInfo,
	parameters: {
		docs: {
			description: {
				component: Readme,
			},
		},
	},
	argTypes: {
		controller: {
			description: 'Search Controller reference',
			type: { required: false },
			table: {
				type: {
					summary: 'Search controller object',
				},
			},
			control: false,
		},
		pagination: {
			description: 'Pagination store reference',
			type: { required: false },
			table: {
				type: {
					summary: 'pagination store object',
				},
			},
			control: false,
		},
		infoText: {
			description: 'Pagination info text to display',
			table: {
				type: {
					summary: 'string, ()=>string',
				},
				category: 'Templates Legal',
			},
			control: { type: 'text' },
		},
		...componentArgs,
	},
};

const snapInstance = Snapify.search({ id: 'Pagination', globals: { siteId: 'atkzs2' } });

const ObservablePaginationInfo = observer(({ args, controller }: { args: PaginationInfoProps; controller: SearchController }) => {
	return <PaginationInfo {...args} pagination={controller?.store?.pagination} />;
});

export const Default = {
	render: (args: PaginationInfoProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
		return <ObservablePaginationInfo args={args} controller={controller} />;
	},

	loaders: [
		async () => {
			await snapInstance.search();
			return {
				controller: snapInstance,
			};
		},
	],
};
