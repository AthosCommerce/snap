import { h } from 'preact';

import { InlineBanner, InlineBannerProps } from './InlineBanner';
import { componentArgs } from '../../../utilities';
import { Snapify } from '../../../utilities/snapify';
import Readme from './readme.md';
import { ResultsLayout } from '../../../types';

import type { Banner } from '@athoscommerce/snap-store-mobx';
import type { SearchController } from '@athoscommerce/snap-controller';

export default {
	title: 'Atoms/InlineBanner',
	component: InlineBanner,
	parameters: {
		docs: {
			description: {
				component: Readme,
			},
		},
	},
	argTypes: {
		banner: {
			description: 'Banner object reference',
			type: { required: true },
			table: {
				type: {
					summary: 'inline banner store object',
				},
			},
			control: false,
		},
		layout: {
			description: 'Banner layout',
			defaultValue: ResultsLayout.grid,
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
			},
			options: [ResultsLayout.grid, ResultsLayout.list],
			control: {
				type: 'select',
			},
		},
		width: {
			description: 'InlineBanner width',
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
			},
			control: { type: 'text' },
		},
		onClick: {
			description: 'Custom onClick event handler',
			table: {
				type: {
					summary: 'function',
				},
				category: 'Templates Legal',
			},
			control: false,
			action: 'onClick',
		},
		...componentArgs,
	},
	decorators: [
		(Story: any) => (
			<div
				style={{
					width: '220px',
					height: '300px',
					position: 'relative',
				}}
			>
				<Story height="200px" />
			</div>
		),
	],
};

const snapInstance = Snapify.search({ id: 'InlineBanner', globals: { siteId: 'atkzs2', search: { query: { string: 'jacket' } } } });

export const Default = {
	render: (args: InlineBannerProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
		const inlineBanners = controller?.store?.results?.filter((result) => result.type === 'banner').pop() as Banner;

		return inlineBanners && <InlineBanner {...args} banner={inlineBanners} />;
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
