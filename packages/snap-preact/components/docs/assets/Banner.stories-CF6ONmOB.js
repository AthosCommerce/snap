import { j as l } from './iframe-CXSVAHru.js';
import { B as t } from './Banner-DD7UuHM6.js';
import { S as d } from './snapify-CnhKBMyG.js';
import { c as p } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './withTracking-DWvVsRqK.js';
import './createImpressionObserver-DI1SU3AN.js';
import './RecommendationController-CRNIe9PS.js';
import './AutocompleteController-CNarJwx-.js';
const i =
		"# Banner\n\nRenders a merchandising banner. Banner Types include `header`, `footer`, `left`, and `banner`. \n\nThis `Banner` component does not support inline banners. See `InlineBanner` component below.\n\n## Usage\n```tsx\nimport { Banner } from '@athoscommerce/snap-preact/components';\n```\n\n### content\nThe required `content` prop specifies an object of banners returned from the athos API.\n\n```tsx\n<Banner content={controller?.store?.merchandising?.content} type={'header'} />\n```\n\n### type\nThe required `type` prop specifies the banner type to render from the `content` object.\n\nBanner Types include `header`, `footer`, `left`, and `banner`. \n\n```tsx\n<Banner content={controller?.store?.merchandising?.content} type={'header'} />\n```\n\n```tsx\n<Banner content={controller?.store?.merchandising?.content} type={'footer'} />\n```\n\n```tsx\n<Banner content={controller?.store?.merchandising?.content} type={'left'} />\n```\n\n```tsx\n<Banner content={controller?.store?.merchandising?.content} type={'banner'} />\n```",
	I = {
		title: 'Atoms/Banner',
		component: t,
		parameters: { docs: { description: { component: i } } },
		argTypes: {
			content: {
				description: 'Banner content store reference',
				type: { required: !0 },
				table: { type: { summary: 'banner content store object' }, category: 'Templates Legal' },
				control: !1,
			},
			type: {
				description: 'Banner position type',
				type: { required: !0 },
				table: { type: { summary: 'string' }, category: 'Templates Legal' },
				options: ['header', 'footer', 'left', 'inline', 'banner'],
				control: { type: 'select' },
			},
			controller: { description: 'Controller reference', table: { type: { summary: 'Controller' } }, control: !1 },
			...p,
		},
	},
	n = d.search({ id: 'Banner', globals: { siteId: 'atkzs2', search: { query: { string: 'jacket' } } } }),
	o = {
		render: (e, { loaded: { controller: r } }) => l(t, { ...e, content: r?.store?.merchandising?.content }),
		loaders: [async () => (await n.search(), { controller: n })],
		args: { type: 'header' },
	},
	a = {
		render: (e, { loaded: { controller: r } }) => l(t, { ...e, content: r?.store?.merchandising?.content }),
		loaders: [async () => (await n.search(), { controller: n })],
		args: { type: 'footer' },
	},
	s = {
		render: (e, { loaded: { controller: r } }) => l(t, { ...e, content: r?.store?.merchandising?.content }),
		loaders: [async () => (await n.search(), { controller: n })],
		args: { type: 'banner' },
	},
	c = {
		render: (e, { loaded: { controller: r } }) => l(t, { ...e, content: r?.store?.merchandising?.content }),
		loaders: [async () => (await n.search(), { controller: n })],
		args: { type: 'left' },
	};
o.parameters = {
	...o.parameters,
	docs: {
		...o.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: BannerProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => <Banner {...args} content={controller?.store?.merchandising?.content} />,
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }],
  args: {
    type: 'header'
  }
}`,
			...o.parameters?.docs?.source,
		},
	},
};
a.parameters = {
	...a.parameters,
	docs: {
		...a.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: BannerProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => <Banner {...args} content={controller?.store?.merchandising?.content} />,
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }],
  args: {
    type: 'footer'
  }
}`,
			...a.parameters?.docs?.source,
		},
	},
};
s.parameters = {
	...s.parameters,
	docs: {
		...s.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: BannerProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => <Banner {...args} content={controller?.store?.merchandising?.content} />,
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }],
  args: {
    type: 'banner'
  }
}`,
			...s.parameters?.docs?.source,
		},
	},
};
c.parameters = {
	...c.parameters,
	docs: {
		...c.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: BannerProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => <Banner {...args} content={controller?.store?.merchandising?.content} />,
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }],
  args: {
    type: 'left'
  }
}`,
			...c.parameters?.docs?.source,
		},
	},
};
const w = ['Header', 'Footer', 'Secondary', 'Left'];
export { a as Footer, o as Header, c as Left, s as Secondary, w as __namedExportsOrder, I as default };
