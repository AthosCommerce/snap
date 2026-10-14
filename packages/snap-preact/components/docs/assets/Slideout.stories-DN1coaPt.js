import { j as t } from './iframe-CXSVAHru.js';
import { S as n } from './Slideout-OFSsF92G.js';
import { c as i } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './defined-CdKp_MB-.js';
import './Overlay-BCtuQj-C.js';
import './useA11y-BuGQuOJb.js';
const l = `# Slideout

Renders a slideout with a background overlay. Typically used for a mobile menu slideout. 

## Sub-components
- Overlay

## Usage
\`\`\`tsx
import { Slideout } from '@athoscommerce/snap-preact/components';
\`\`\`

### buttonContent
The \`buttonContent\` prop accepts a string or JSX element to render a clickable button that toggles the slideout visibility. 

When using the \`buttonContent\` prop, render the component where you want the button to render. The slideout content position is fixed, therefore, the location of the component is only for the render location of the button itself. 

\`\`\`tsx
<Slideout buttonContent={'click me'}>
	<div>slideout content</div>
</Slideout>
\`\`\`

### children
The children provided to the component will be displayed within the slideout - the slideout content. When using a component here, it will be passed additional props (\`active\` and \`toggleActive\`) from the slideout component which can be used for referencing and toggling of the \`active\` state.

\`\`\`tsx
<Slideout buttonContent={'click me'}>
	<span>slideout content (children)</span>
</Slideout>
\`\`\`

\`\`\`tsx
const SlideoutContent = (props) => {
	return (
		<div>
			<button onClick={() => props.toggleActive()}>close slideout</button>
			<div>the slideout is { props.active ? 'open' : 'closed' }</div>
		</div>
	)
}

<Slideout buttonContent={'click me'}>
	<SlideoutContent />
</Slideout>
\`\`\`

### width
The \`width\` prop is the width of the slideout.

\`\`\`tsx
<Slideout width={'300px'}>
	<div>slideout content</div>
</Slideout>
\`\`\`

### displayAt
The \`displayAt\` prop specifies a CSS media query for when the component will render. By default, the component will always render. 

\`\`\`tsx
<Slideout displayAt={'(max-width: 600px)'}>
	<div>slideout content</div>
</Slideout>
\`\`\`

### transitionSpeed
The \`transitionSpeed\` prop changes the CSS transition speed animation for the slideout and overlay.

\`\`\`tsx
<Slideout transitionSpeed={'0.5s'}>
	<div>slideout content</div>
</Slideout>
\`\`\`


### overlayColor
The \`overlayColor\` prop sets the overlay color.

\`\`\`tsx
<Slideout overlayColor={'rgba(0,0,0,0.7)'}>
	<div>slideout content</div>
</Slideout>
\`\`\`


### slideDirection
The \`slideDirection\` prop sets the direction that the overlay slides in. Defaults to \`left\`. Available values are \`left\`, \`right\`, \`top\`, & \`bottom\`.

\`\`\`tsx
<Slideout slideDirection={'right'}>
	<div>slideout content</div>
</Slideout>
\`\`\`

### noButtonWrapper
The \`noButtonWrapper\` prop prevents the button wrapper div with className of \`ss__slideout__button\` from rendering. This element normally wraps \`buttonContent\` and handles toggling the \`active\` state via an onClick handler. By utilizing this prop, toggling of the \`active\` state must instead happen within the component passed into \`buttonContent\`. The \`buttonContent\` component will be passed additional props (\`active\` and \`toggleActive\`) from the slideout component which can be used for referencing and toggling of the \`active\` state.

\`\`\`tsx

const ButtonComponent = (props) => {
	return (
		<div onClick={() => props.toggleActive()}>
			Button to Toggle the Slideout
		</div>
	)
}

<Slideout buttonContent={<ButtonComponent/>} noButtonWrapper>
	<div>slideout content</div>
</Slideout>
\`\`\`

### active
The \`active\` prop is an optional way to specify the initial state of the slideout when rendered. It is recommended to let the component manage its own state internally by not using this prop.

\`\`\`tsx
<Slideout active={true}>
	<div>Hello World</div>
</Slideout>
\`\`\`

### rerender
The \`rerender\` prop determines whether the slideout content should be re-rendered each time the slideout is closed and reopened. By default, this behavior is enabled to ensure better accessibility compliance by avoiding rendering content when the slideout is closed.  

\`\`\`tsx
<Slideout rerender={true}>
	<div>Hello World</div>
</Slideout>
\`\`\`

### buttonSelector
The \`buttonSelector\` prop specifies a selector of an element to query for, to listen for clicks, to trigger the slideout. This is primarily used if you want to have an external element trigger the slide out. 

\`\`\`tsx

<button value={'click me to open'} id="my-button">
<Slideout buttonSelector={'#my-button'}>
	<div>Hello World</div>
</Slideout>
\`\`\``,
	{ fn: r } = __STORYBOOK_MODULE_TEST__,
	m = {
		title: 'Molecules/Slideout',
		component: n,
		parameters: { docs: { description: { component: l } } },
		args: { onChange: r() },
		argTypes: {
			buttonContent: {
				description: 'Slideout button content (children), appended to buttonText',
				type: { required: !0 },
				table: { category: 'Templates Legal', type: { summary: 'string, jsx' } },
				control: { type: 'text' },
			},
			active: {
				description: 'Initial state of the slideout.',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			slideDirection: {
				defaultValue: 'left',
				description: 'Slideout slide direction',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'left' } },
				control: { type: 'text' },
			},
			width: {
				defaultValue: '300px',
				description: 'Slideout width',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '300px' } },
				control: { type: 'text' },
			},
			displayAt: {
				defaultValue: '',
				description: 'Media query for when to render this component',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '' } },
				control: { type: 'text' },
			},
			transitionSpeed: {
				defaultValue: '0.25s',
				description: 'Overlay opening/closing transition speed',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '0.25s' } },
				control: { type: 'text' },
			},
			overlayColor: {
				defaultValue: 'rgba(0,0,0,0.8)',
				description: 'Slideout overlay color',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'rgba(0,0,0,0.8)' } },
				control: { type: 'color' },
			},
			noButtonWrapper: {
				description: 'Prevent the wrapper element from rendering (this element has the onClick handler to toggle the state)',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			rerender: {
				description: 'determine if the content should be re-rendered when the slideout is closed and re-opened',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			buttonSelector: {
				description: 'external Slideout button selector',
				table: { category: 'Templates Legal', type: { summary: 'string, jsx' } },
				control: { type: 'text' },
			},
			onChange: {
				description: 'called with the new active state whenever the slideout is toggled',
				table: { type: { summary: '(active: boolean) => void' } },
				control: 'none',
			},
			...i,
		},
	},
	e = {
		render: (o) => t(n, { ...o, children: t('div', { children: 'props.children will be rendered here' }) }),
		args: { active: !0, buttonContent: 'Click Me' },
	};
e.parameters = {
	...e.parameters,
	docs: {
		...e.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: SlideoutProps) => <Slideout {...args}>
            <div>props.children will be rendered here</div>
        </Slideout>,
  args: {
    active: true,
    buttonContent: 'Click Me'
  }
}`,
			...e.parameters?.docs?.source,
		},
	},
};
const g = ['Default'];
export { e as Default, g as __namedExportsOrder, m as default };
