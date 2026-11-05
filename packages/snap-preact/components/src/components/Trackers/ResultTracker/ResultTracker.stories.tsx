import { h } from 'preact';

import { ResultTracker, ResultTrackerProps } from './ResultTracker';
import { componentArgs } from '../../../utilities';
import Readme from '../ResultTracker/readme.md';
import { Snapify } from '../../../utilities/snapify';
import type { SearchController } from '@athoscommerce/snap-controller';
import { Result } from '../../Molecules/Result';
import { Product } from '@athoscommerce/snap-store-mobx';

export default {
	title: 'Trackers/ResultTracker',
	component: ResultTracker,
	parameters: {
		docs: {
			description: {
				component: Readme,
			},
		},
	},
	decorators: [
		(Story: any) => (
			<div style={{ maxWidth: '250px' }}>
				<Story />
			</div>
		),
	],
	argTypes: {
		controller: {
			description: 'Controller reference',
			type: { required: true },
			table: {
				type: {
					summary: 'Controller',
				},
			},
			control: false,
		},
		result: {
			description: 'Result store Product reference',
			type: { required: true },
			table: {
				type: {
					summary: 'result store Product object',
				},
			},
			control: false,
		},

		...componentArgs,
	},
};

const snapInstance = Snapify.search({ id: 'SearchResultTracker', globals: { siteId: 'atkzs2', search: { query: { string: '*' } } } });

export const Default = {
	render: (props: ResultTrackerProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
		const firstResult = controller?.store?.results[0] as Product;
		return (
			<ResultTracker {...props} controller={controller} result={firstResult}>
				<Result result={firstResult} />
			</ResultTracker>
		);
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
