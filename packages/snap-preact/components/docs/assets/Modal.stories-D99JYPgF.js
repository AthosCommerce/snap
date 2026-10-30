import { j as l } from './iframe-U9T2Y9ZS.js';
import { M as a } from './Modal-BnFdKWAy.js';
import { c as r } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './useA11y-BuGQuOJb.js';
import './defined-CdKp_MB-.js';
import './useClickOutside-DeMSpwd-.js';
import './Overlay-BH_wZt84.js';
const s =
		"# Modal\n\nRenders a button and a modal. Clicking the button toggles modal visibility. By default any clicks outside of the modal will hide the content.\n\n## Sub-components\n- Overlay\n\n## Usage\n\n### content\nThe `content` prop specifies the modal contents. This can be a string or a JSX element. The Modal component also passes the current open state to the JSX component under the prop showContent: boolean. \n\n```tsx\n<Modal content={\"Hello World!\"} />\n```\n \nOr alternatively as children:\n\n```tsx\n<Modal>Hello World!</Modal>\n```\n\n### button\nThe `button` prop specifies the Modal trigger button. This button toggles the visibility of the modal when clicked. This can be a string or a JSX element.\n\n```tsx\n<Modal button={'click me!'}>Hello World!</Modal>\n```\n\nor alternatively you can use the `buttonSelector` prop \n\n### buttonSelector\nThe `buttonSelector` prop allows you to define a selector that identifies an element to listen for click events, which will trigger the modal to open.\n\n```tsx\n<Modal buttonSelector={'#someExistingButton'}>Hello World!</Modal>\n```\n\n### open\nThe `open` prop sets the modal visibility state. \n\nIf specified, external state management is expected. Otherwise if not specified, the component will use its own internal state to toggle the visibility.\n\n```tsx\n<Modal open={true}>Hello World!</Modal>\n```\n\n### startOpen\nThe `startOpen` prop sets the modal initial internal state. Cannot be used with the `open` prop.\n\n```tsx\n<Modal startOpen>Hello World!</Modal>\n```\n\n### overlayColor\nThe `overlayColor` prop specifies the color of the overlay.\n\n```tsx\n<Modal overlayColor={'rgba(0,0,0,0.8)'} />\n```\n\n### onOverlayClick\nThe `onOverlayClick` prop specifies the a function to call on clicking of the overlay.\n\n```tsx\n<Modal onOverlayClick={clickfunc} />\n```\n\n### lockScroll\nThe `lockScroll` prop will lock the scroll on the body of the page while the modal is open. \n\n```tsx\n<Modal lockScroll={true}>Hello World!</Modal>\n```\n\n### disabled\nThe `disabled` prop will disable the button from toggling the visibility of the modal content, as well as preventing the `onClick` callback from being invoked.\n\n```tsx\n<Modal disabled>Hello World!</Modal>\n```\n\n### disableA11y\nThe `disableA11y` prop specifies a boolean to disable the autoset ally properties.\n\n```tsx\n<Modal disableA11y>Hello World!</Modal>\n```\n\n\n### disableClickOutside\nThe `disableClickOutside` prop by default is `false`. Setting this to `true` will not close the modal if a click event was registered outside the modal content.\n\n```tsx\n<Modal disableClickOutside>Hello World!</Modal>\n```\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function for when the modal button is clicked.\n\n```tsx\n<Modal onClick={(e)=>{console.log(e)}} >Hello World!</Modal>\n```\n",
	{ fn: n } = __STORYBOOK_MODULE_TEST__,
	h = {
		title: 'Molecules/Modal',
		component: a,
		parameters: { docs: { description: { component: s } } },
		args: { onOverlayClick: n(), onClick: n() },
		argTypes: {
			button: {
				description: 'Button content to toggle the modal',
				table: { category: 'Templates Legal', type: { summary: 'string, JSX' } },
				control: { type: 'text' },
			},
			buttonSelector: {
				description: 'Button selector to toggle the modal',
				table: { category: 'Templates Legal', type: { summary: 'string, JSX' } },
				control: { type: 'text' },
			},
			overlayColor: {
				defaultValue: 'rgba(0,0,0,0.8)',
				description: 'Modal overlay color',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'rgba(0,0,0,0.0)' } },
				control: { type: 'color' },
			},
			onOverlayClick: {
				description: 'Function to call when the overlay is clicked',
				table: { category: 'Templates Legal', type: { summary: 'function(e: Event)' } },
				control: !1,
			},
			content: {
				description: 'Content to be displayed in modal',
				table: { category: 'Templates Legal', type: { summary: 'string, JSX' } },
				control: { type: 'text' },
			},
			children: {
				description: 'Content to be displayed in modal',
				table: { category: 'Templates Legal', type: { summary: 'string, JSX' } },
				control: { type: 'text' },
			},
			disabled: {
				description: 'Disable modal - prevents all click events',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			lockScroll: {
				description: 'Lock the Scroll on the body when the modal is open',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
				control: { type: 'boolean' },
			},
			open: {
				description: 'Pass a value here to control the state externally',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: 'undefined' } },
				control: { type: 'boolean' },
			},
			startOpen: {
				description: 'modal state is open on initial render - used with internal state only',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			disableClickOutside: {
				description: 'Ignore clicks outside of element',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			onClick: {
				description: 'modal click event handler',
				table: { category: 'Templates Legal', type: { summary: 'function(e: Event)' } },
				control: !1,
			},
			disableA11y: {
				description: 'boolean to disable autoset ally properties',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			...r,
		},
	},
	e = { args: { button: 'button text', content: 'content text' } },
	t = { args: { button: 'button text', content: 'content text', open: !0 } },
	o = { args: { button: 'button text', content: l('div', { children: 'jsx content - (note this component received the open state as a prop)' }) } };
e.parameters = {
	...e.parameters,
	docs: {
		...e.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    button: 'button text',
    content: 'content text'
  }
}`,
			...e.parameters?.docs?.source,
		},
	},
};
t.parameters = {
	...t.parameters,
	docs: {
		...t.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    button: 'button text',
    content: 'content text',
    open: true
  }
}`,
			...t.parameters?.docs?.source,
		},
	},
};
o.parameters = {
	...o.parameters,
	docs: {
		...o.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    button: 'button text',
    content: <div>jsx content - (note this component received the open state as a prop)</div>
  }
}`,
			...o.parameters?.docs?.source,
		},
	},
};
const g = ['Default', 'ExternalState', 'JSXContent'];
export { e as Default, t as ExternalState, o as JSXContent, g as __namedExportsOrder, h as default };
