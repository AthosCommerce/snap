import { j as i } from './iframe-Bc4KSH0T.js';
import { D as d } from './Dropdown-tCLF6hwk.js';
import { c as p } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './useA11y-BuGQuOJb.js';
import './useClickOutside-CoFEN31h.js';
const c =
		"# Dropdown\n\nRenders a button and content. Clicking the button toggles content visibility. Typically used as an alternative to a `<select>` dropdown or to collapse content. By default any clicks outside of the element will hide the content.\n\n## Usage\n```tsx\nimport { Dropdown } from '@athoscommerce/snap-preact/components';\n```\n\n### content\nThe `content` prop specifies the dropdown contents. This can be a string or a JSX element. The Dropdown component also passes the current open state and a toggle function to the JSX element under the `open: boolean` and `toggleOpen` props. \n\n```tsx\n<Dropdown content={\"Hello World!\"} />\n```\n \nOr alternatively as children:\n\n```tsx\n<Dropdown>Hello World!</Dropdown>\n```\n\nNote you can only render either the content, or the children, if both are passed in, it will default to the content prop. \n\n\n### button\nThe `button` prop specifies the dropdown button. This button toggles the visibility of the content when clicked. This can be a string or a JSX element.\n\n```tsx\n<Dropdown button={'click me!'}>Hello World!</Dropdown>\n```\n\n### toggleOnHover\nThe `toggleOnHover` prop controls if hover events (onMouseEnter and onMouseLeave) will toggle the dropdown. This is disabled by default.\n\n```tsx\n<Dropdown button={'click me!'} toggleOnHover>Hello World!</Dropdown>\n```\n\n### open\nThe `open` prop sets the dropdown visibility state. \n\nIf specified, external state management is expected. Otherwise if not specified, the component will use its own internal state to toggle the visibility.\n\n```tsx\n<Dropdown open={true}>Hello World!</Dropdown>\n```\n\n### startOpen\nThe `startOpen` prop sets the dropdown initial internal state. Cannot be used with the `open` prop.\n\n```tsx\n<Dropdown startOpen>Hello World!</Dropdown>\n```\n\n### disabled\nThe `disabled` prop will disable the button from toggling the visibility of the dropdown content, as well as preventing the `onClick` callback from being invoked.\n\n```tsx\n<Dropdown disabled>Hello World!</Dropdown>\n```\n\n### disableClick\nThe `disableClick` prop specifies a boolean which will disable the default click behavior; this is useful if you want to only allow for hovering to toggle the state. Be aware that this will cause the dropdown to not work as expected in mobile (where touch events are used).\n\n```tsx\n<Dropdown disableClick>Hello World!</Dropdown>\n```\n\n### disableA11y\nThe `disableA11y` prop specifies a boolean to disable the autoset ally properties.\n\n```tsx\n<Dropdown disableA11y>Hello World!</Dropdown>\n```\n\n### focusTrapContent\nThe `focusTrapContent` prop specifies if the content should trap the user in a focus trap for a11y keyboard navigation.\n\n```tsx\n<Dropdown focusTrapContent={true} >Hello World!</Dropdown>\n```\n\n### disableOverlay\nThe `disableOverlay` prop will disable the dropdown contents from being rendered as an overlay. If set to `true`, dropdown contents will instead be rendered as a block and affect the height of its parent element. Typically used if Dropdown is intended to act as a header (ie. Facet)\n\n```tsx\n<Dropdown disableOverlay>Hello World!</Dropdown>\n```\n\n### disableClickOutside\nThe `disableClickOutside` prop by default is `false`. Setting this to `true` will not close the dropdown if a click event was registered outside the dropdown content.\n\n```tsx\n<Dropdown disableClickOutside>Hello World!</Dropdown>\n```\n\n### usePortal\nThe `usePortal` prop specifies if the dropdown content should be rendered in a portal. This will render the content directly on the body, and dynamically position itself below the dropdown button (repositioning on scroll and resize). This is useful if the dropdown content is being cut off by a parent container with `overflow: hidden`. Clicks within the portaled content are not treated as outside clicks and will not close the dropdown.\n\n```tsx\n<Dropdown usePortal>Hello World!</Dropdown>\n```\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function for when the dropdown button is clicked.\n\n```tsx\n<Dropdown onClick={(e)=>{console.log(e)}} >Hello World!</Dropdown>\n```\n\n#### onMouseEnter\nThe `onMouseEnter` prop allows for a custom callback function for when the dropdown has been hovered.\n\n```tsx\n<Dropdown onMouseEnter={(e)=>{console.log(e)}} >Hello World!</Dropdown>\n```\n\n#### onMouseLeave\nThe `onMouseLeave` prop allows for a custom callback function for when the dropdown has been un-hovered.\n\n```tsx\n<Dropdown onMouseLeave={(e)=>{console.log(e)}} >Hello World!</Dropdown>\n```\n\n#### onToggle\nThe `onToggle` prop allows for a custom callback function for when the dropdown visibility is toggled. This only applies if using internal state. Cannot be used with the `open` prop.\n\n```tsx\n<Dropdown onToggle={(e)=>{console.log(e)}} >Hello World!</Dropdown>\n```\n",
	{ fn: o } = __STORYBOOK_MODULE_TEST__,
	w = {
		title: 'Atoms/Dropdown',
		component: d,
		parameters: { docs: { description: { component: c } } },
		args: { onClick: o(), onMouseEnter: o(), onMouseLeave: o(), onToggle: o() },
		argTypes: {
			button: {
				description: 'Button content to toggle the dropdown',
				type: { required: !0 },
				table: { type: { summary: 'string, JSX' }, category: 'Templates Legal' },
				control: { type: 'text' },
			},
			content: {
				description: 'Content to be displayed in dropdown',
				table: { type: { summary: 'string, JSX' }, category: 'Templates Legal' },
				control: { type: 'text' },
			},
			children: {
				description: 'Content to be displayed in dropdown using children',
				table: { type: { summary: 'string, JSX' }, category: 'Templates Legal' },
				control: !1,
			},
			disabled: {
				description: 'Disable dropdown - prevents all click events',
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			disableOverlay: {
				description: 'Disable dropdown overlay and renders as block',
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			toggleOnHover: {
				description: 'open and close dropdown on hover',
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			open: {
				description: 'Pass a value here to control the state externally',
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: 'undefined' } },
				control: { type: 'boolean' },
			},
			startOpen: {
				description: 'Dropdown state is open on initial render - used with internal state only',
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			disableClickOutside: {
				description: 'Ignore clicks outside of element',
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			onClick: {
				description: 'Dropdown click event handler',
				table: { type: { summary: 'function(e: Event)' }, category: 'Templates Legal' },
				control: !1,
			},
			onMouseEnter: {
				description: 'Dropdown mouse enter event handler',
				table: { type: { summary: 'function(e: Event)' }, category: 'Templates Legal' },
			},
			onMouseLeave: {
				description: 'Dropdown mouse leave event handler',
				table: { type: { summary: 'function(e: Event)' }, category: 'Templates Legal' },
			},
			usePortal: {
				description: 'boolean to specify if the dropdown content should be rendered in a portal.',
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			onToggle: {
				description: 'Executes when the internal state changes, gets passed the event and the internal state - used with internal state only',
				table: { type: { summary: 'function(e: Event, open: boolean)' }, category: 'Templates Legal' },
				control: !1,
			},
			focusTrapContent: {
				description: 'boolean to enable ally focustrap',
				table: { type: { summary: 'boolean' }, category: 'Templates Legal' },
				control: { type: 'boolean' },
			},
			disableClick: {
				description: 'boolean to disable clicking of the button',
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			disableA11y: {
				description: 'boolean to disable autoset ally properties',
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			...p,
		},
	},
	t = { args: { button: 'button text', content: 'content text' } },
	n = { args: { button: 'hover over me', content: 'content text', toggleOnHover: !0 } },
	r = { args: { button: 'button text', content: 'content text', open: !0 } },
	a = { args: { button: 'button text', content: i('div', { children: 'jsx content - (note this component received the open state as a prop)' }) } },
	s = {
		render: (e) => i(d, { button: e.button, children: e.content }),
		args: { button: 'button text', content: i('div', { children: 'jsx content - (note this component received the open state as a prop)' }) },
	},
	l = {
		render: (e) => i(d, { button: e.button, children: e.content }),
		args: { button: 'button text', content: 'string content - (note this component received the open state as a prop)' },
	};
t.parameters = {
	...t.parameters,
	docs: {
		...t.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    button: 'button text',
    content: 'content text'
  }
}`,
			...t.parameters?.docs?.source,
		},
	},
};
n.parameters = {
	...n.parameters,
	docs: {
		...n.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    button: 'hover over me',
    content: 'content text',
    toggleOnHover: true
  }
}`,
			...n.parameters?.docs?.source,
		},
	},
};
r.parameters = {
	...r.parameters,
	docs: {
		...r.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    button: 'button text',
    content: 'content text',
    open: true
  }
}`,
			...r.parameters?.docs?.source,
		},
	},
};
a.parameters = {
	...a.parameters,
	docs: {
		...a.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    button: 'button text',
    content: <div>jsx content - (note this component received the open state as a prop)</div>
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
  render: (args: DropdownProps) => <Dropdown button={args.button}>{args.content}</Dropdown>,
  args: {
    button: 'button text',
    content: <div>jsx content - (note this component received the open state as a prop)</div>
  }
}`,
			...s.parameters?.docs?.source,
		},
	},
};
l.parameters = {
	...l.parameters,
	docs: {
		...l.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: DropdownProps) => <Dropdown button={args.button}>{args.content}</Dropdown>,
  args: {
    button: 'button text',
    content: 'string content - (note this component received the open state as a prop)'
  }
}`,
			...l.parameters?.docs?.source,
		},
	},
};
const f = ['Default', 'Hoverable', 'ExternalState', 'JSXContent', 'JSXChildren', 'StringChildren'];
export {
	t as Default,
	r as ExternalState,
	n as Hoverable,
	s as JSXChildren,
	a as JSXContent,
	l as StringChildren,
	f as __namedExportsOrder,
	w as default,
};
