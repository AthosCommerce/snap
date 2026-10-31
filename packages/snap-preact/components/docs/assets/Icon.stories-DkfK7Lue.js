import { ah as i, I as r, j as s, l as c } from './iframe-Bc4KSH0T.js';
import { c as l } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
const p = `# Icon

Renders an Icon either from our list of available icons or from a custom path. 

## Usage
\`\`\`tsx
import { Icon } from '@athoscommerce/snap-preact/components';
\`\`\`

### icon
The \`icon\` prop specifies the name of the icon to display. 

\`\`\`tsx
<Icon icon='cogs' />
\`\`\`

if false is passed, no Icon will render. 

\`\`\`tsx
<Icon icon={false} />
\`\`\`


### path
The \`path\` prop specifies the SVG path value for custom icons.

\`\`\`tsx
<Icon color='#3a23ad' size='120px' style='padding: 20px;' viewBox='0 0 70 70' path='M12.9,13.8C12.9,13.8,12.9,13.8,12.9,13.8c-0.1,0.1-0.3,0.2-0.5,0.2C4.5,17.9,1.9,28.8,6.6,38.5l28.6-13.8 c0,0,0,0,0,0c0.2-0.1,0.3-0.1,0.5-0.2C43.5,20.6,46.2,9.7,41.5,0L12.9,13.8zM8.6,42.1C8.6,42.1,8.6,42.1,8.6,42.1c-0.1,0.1-0.3,0.1-0.5,0.2C0.3,46.1-2.4,57,2.3,66.7l28.6-13.8 c0,0,0,0,0,0c0.2-0.1,0.3-0.1,0.5-0.2c7.9-3.8,10.5-14.8,5.8-24.4L8.6,42.1z' />
\`\`\`

The \`path\` prop can also contain an array of children svg elements to render.

\`\`\`tsx
<Icon size={'70'} viewBox={'0 0 70 70'} path={[
    {
        type: 'line', 
        attributes: { 
            x1: "1",
            y1: "10",
            x2: "69",
            y2: "10",
            stroke: "#000000",
            'stroke-width': "3",
            'stroke-linecap': "round",
            'stroke-linejoin': "round",
        }
    },
    {
        type: 'line', 
        attributes: { 
            x1: "1",
            y1: "30",
            x2: "69",
            y2: "30",
            stroke: "#000000",
            'stroke-width': "3",
            'stroke-linecap': "round",
            'stroke-linejoin': "round",
        }
    },
    {
        type: 'circle', 
        attributes: { 
            cx: "15",
            cy: "10",
            r: "6",
            fill: "#000000",
            stroke: "#000000",
            'stroke-width': "3",
        }
    },
    {
        type: 'circle', 
        attributes: { 
            cx: "55",
            cy: "30",
            r: "6",
            fill: "#000000",
            stroke: "#000000",
            'stroke-width': "3",
        }
    },
]} />
\`\`\`

### svg
The \`svg\` prop accepts a JSX SVG element and renders it directly. This is useful when you have a complete SVG that should be rendered as-is.

\`\`\`tsx
<Icon svg={<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 22h20L12 2z"/></svg>} size="70px" />
\`\`\`

### children
Component children can be provided and will be rendered within the wrapping \`svg\` element.

\`\`\`tsx
<Icon size={'70'} viewBox={'0 0 70 70'} >
    <line x1="1" y1="10" x2="69" y2="10" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></line>
	<line x1="1" y1="30" x2="69" y2="30" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></line>
	<circle cx="15" cy="10" r="6" fill="#000000" stroke="#000000" stroke-width="3"></circle>
	<circle cx="55" cy="30" r="6" fill="#000000" stroke="#000000" stroke-width="3"></circle>
</Icon>
\`\`\`

### color
The \`color\` prop specifies the icon color, overwritten by fill props.

\`\`\`tsx
<Icon icon='cogs' color="#ffff00" />
\`\`\`

### fill
The \`fill\` prop specifies the icon fill color, overwrites color prop.

\`\`\`tsx
<Icon icon='cogs' fill="#ffff00" />
\`\`\`

### stroke
The \`stroke\` prop specifies the icon stroke color.

\`\`\`tsx
<Icon icon='cogs' stroke="#ffff00" />
\`\`\`

### title
The \`title\` prop specifies the title to render inside the svg. (not supported when using svg prop)

\`\`\`tsx
<Icon icon='cogs' title={'Settings'} />
\`\`\`

### size
The \`size\` prop specifies the custom icon size. This will be set to both the width and height.

\`\`\`tsx
<Icon icon='cogs' size={'20px'} />
\`\`\`

### title
The \`title\` prop specifies the title to render inside the svg.

\`\`\`tsx
<Icon icon='cogs' title={'Settings'} />
\`\`\`

### width & height
The \`width\` and \`height\` props specify custom icon dimensions and will overwrite the \`size\` prop.

\`\`\`tsx
<Icon icon='cogs' width={'20px'} height={'25px'} />
\`\`\`

### viewBox
The \`viewBox\` prop specifies the SVG \`viewBox\` attribute. This defines the position and dimension, in user space, of an SVG viewport.

Format: \`\` \`\${min-x} \${min-y} \${width} \${height}\` \`\`

\`\`\`tsx
<Icon icon='cogs' viewBox={'0 0 20 20'} />
\`\`\`
`,
	y = {
		title: 'Atoms/Icon',
		component: r,
		parameters: { docs: { description: { component: p } }, actions: { disabled: !0 } },
		argTypes: {
			icon: {
				description: 'Icon name',
				table: { type: { summary: 'string' }, category: 'Templates Legal' },
				options: [...Object.keys(i)],
				control: { type: 'select' },
			},
			path: {
				description: 'SVG path',
				table: { type: { summary: 'string | SVGPathElement[]' }, category: 'Templates Legal' },
				control: { type: 'text' },
			},
			title: {
				description: 'Title text to render inside the svg (not supported when using svg prop)',
				table: { type: { summary: 'string' }, category: 'Templates Legal' },
				control: { type: 'text' },
			},
			children: {
				description: 'SVG elements to be contained within (using children)',
				table: { type: { summary: 'string, JSX' }, category: 'Templates Legal' },
				control: !1,
			},
			svg: {
				description: 'SVG element to render directly',
				table: { type: { summary: 'VNode<JSX.SVGAttributes<SVGSVGElement>>' }, category: 'Templates Legal' },
				control: !1,
			},
			color: {
				description: 'Icon color',
				table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: 'theme.variables.colors.primary' } },
				control: { type: 'color' },
			},
			stroke: { description: 'Icon stroke color', table: { type: { summary: 'string' }, category: 'Templates Legal' }, control: { type: 'color' } },
			fill: { description: 'Icon fill color', table: { type: { summary: 'string' }, category: 'Templates Legal' }, control: { type: 'color' } },
			size: {
				defaultValue: '16px',
				description: 'Icon size',
				table: { type: { summary: 'string | number' }, category: 'Templates Legal', defaultValue: { summary: '16px' } },
				control: { type: 'text' },
			},
			height: {
				description: 'Icon height. Overwrites size.',
				table: { type: { summary: 'string | number' }, category: 'Templates Legal' },
				control: { type: 'text' },
			},
			width: {
				description: 'Icon width. Overwrites size.',
				table: { type: { summary: 'string | number' }, category: 'Templates Legal' },
				control: { type: 'text' },
			},
			viewBox: {
				description: 'SVG view box',
				defaultValue: '0 0 56 56',
				table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '0 0 56 56' } },
				control: { type: 'text' },
			},
			...l,
		},
	},
	t = { args: { icon: 'cogs', size: '70px' } },
	n = {
		args: {
			path: [
				{
					type: 'path',
					attributes: {
						d: 'M592.1,203.3c0,41.8-30.7,75.9-68.5,75.9h-151.9c-53.3,0-86.1-64.4-58.7-115.2l63.7-118.3c12.5-22.9,34.6-36.9,58.7-36.9h87.9c37.8,0,68.5,34.1,68.5,75.9l.3,118.6Z',
						fill: '#1d4990',
					},
				},
				{
					type: 'path',
					attributes: {
						d: 'M592.1,516.1c0,41.8-30.7,75.9-68.5,75.9h-151.9c-53.3,0-86.1-64.4-58.7-115.2l63.7-118.3c12.5-22.9,34.6-36.9,58.7-36.9h87.9c37.8,0,68.5,34.1,68.5,75.9l.3,118.6Z',
						fill: '#00aeef',
					},
				},
				{
					type: 'path',
					attributes: {
						d: 'M8.9,84.7C8.9,42.9,39.6,8.8,77.4,8.8h151.9c53.3,0,86.1,64.4,58.7,115.2l-63.7,118.3c-12.5,22.9-34.6,36.9-58.7,36.9h-87.9c-37.8,0-68.5-34.1-68.5-75.9l-.3-118.6Z',
						fill: '#00aeef',
					},
				},
				{
					type: 'path',
					attributes: {
						d: 'M8.9,397.6c0-41.8,30.7-75.9,68.5-75.9h151.9c53.3,0,86.1,64.4,58.7,115.2l-63.7,118.3c-12.5,22.9-34.6,36.9-58.7,36.9h-87.9c-37.8,0-68.5-34.1-68.5-75.9l-.3-118.6Z',
						fill: '#1d4990',
					},
				},
			],
			size: '70px',
			viewBox: '0 0 600 600',
		},
	},
	o = {
		render: () => {
			const a = ['layout-large', 'layout-grid'];
			return s('div', {
				style: {
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'center',
					gap: '40px',
					margin: '1rem 2rem',
					fontFamily:
						'"Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif',
					fontSize: '10px',
				},
				children: Object.keys(i)
					.filter((e) => !a.includes(e))
					.map((e) =>
						c('div', {
							style: { flex: '0 1 auto', width: '40px' },
							children: [
								s(r, { icon: e, size: '100%', style: { flex: '0 0 100%', height: '40px' } }),
								s('div', { style: { textAlign: 'center' }, children: e }),
							],
						})
					),
			});
		},
		parameters: { controls: { expanded: !1, disabled: !0 }, options: { showPanel: !1 } },
	};
t.parameters = {
	...t.parameters,
	docs: {
		...t.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    icon: 'cogs',
    size: '70px'
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
    path: [{
      type: 'path',
      attributes: {
        d: 'M592.1,203.3c0,41.8-30.7,75.9-68.5,75.9h-151.9c-53.3,0-86.1-64.4-58.7-115.2l63.7-118.3c12.5-22.9,34.6-36.9,58.7-36.9h87.9c37.8,0,68.5,34.1,68.5,75.9l.3,118.6Z',
        fill: '#1d4990'
      }
    }, {
      type: 'path',
      attributes: {
        d: 'M592.1,516.1c0,41.8-30.7,75.9-68.5,75.9h-151.9c-53.3,0-86.1-64.4-58.7-115.2l63.7-118.3c12.5-22.9,34.6-36.9,58.7-36.9h87.9c37.8,0,68.5,34.1,68.5,75.9l.3,118.6Z',
        fill: '#00aeef'
      }
    }, {
      type: 'path',
      attributes: {
        d: 'M8.9,84.7C8.9,42.9,39.6,8.8,77.4,8.8h151.9c53.3,0,86.1,64.4,58.7,115.2l-63.7,118.3c-12.5,22.9-34.6,36.9-58.7,36.9h-87.9c-37.8,0-68.5-34.1-68.5-75.9l-.3-118.6Z',
        fill: '#00aeef'
      }
    }, {
      type: 'path',
      attributes: {
        d: 'M8.9,397.6c0-41.8,30.7-75.9,68.5-75.9h151.9c53.3,0,86.1,64.4,58.7,115.2l-63.7,118.3c-12.5,22.9-34.6,36.9-58.7,36.9h-87.9c-37.8,0-68.5-34.1-68.5-75.9l-.3-118.6Z',
        fill: '#1d4990'
      }
    }],
    size: '70px',
    viewBox: '0 0 600 600'
  }
}`,
			...n.parameters?.docs?.source,
		},
	},
};
o.parameters = {
	...o.parameters,
	docs: {
		...o.parameters?.docs,
		source: {
			originalSource: `{
  render: () => {
    const legacyPaths = ['layout-large', 'layout-grid'];
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '40px',
      margin: '1rem 2rem',
      fontFamily: '"Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif',
      fontSize: '10px'
    }}>
                {Object.keys(iconPaths).filter(val => !legacyPaths.includes(val)).map(icon => {
        return <div style={{
          flex: '0 1 auto',
          width: '40px'
        }}>
                                <Icon icon={icon as IconType} size="100%" style={{
            flex: '0 0 100%',
            height: '40px'
          }} />
                                <div style={{
            textAlign: 'center'
          }}>{icon}</div>
                            </div>;
      })}
            </div>;
  },
  parameters: {
    controls: {
      expanded: false,
      disabled: true
    },
    options: {
      showPanel: false
    }
  }
}`,
			...o.parameters?.docs?.source,
		},
	},
};
const g = ['Default', 'CustomPath', 'Gallery'];
export { n as CustomPath, t as Default, o as Gallery, g as __namedExportsOrder, y as default };
