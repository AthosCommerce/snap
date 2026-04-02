(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6634],
		{
			'./components/src/components/Atoms/Icon/Icon.stories.tsx'(m, n, e) {
				'use strict';
				e.r(n), e.d(n, { CustomPath: () => a, Default: () => c, Gallery: () => l, __namedExportsOrder: () => g, default: () => h });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					s = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					r = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					d = e('./components/src/components/Atoms/Icon/paths.tsx'),
					o = e('./components/src/utilities/storybook.tsx'),
					i = e('./components/src/utilities/componentArgs.ts');
				const y = `# Icon

Renders an Icon either from our list of available icons or from a custom path. 

## Usage
\`\`\`jsx
import { Icon } from '@athoscommerce/snap-preact/components';
\`\`\`

### icon
The \`icon\` prop specifies the name of the icon to display. 

\`\`\`jsx
<Icon icon='cogs' />
\`\`\`

if false is passed, no Icon will render. 

\`\`\`jsx
<Icon icon={false} />
\`\`\`


### path
The \`path\` prop specifies the SVG path value for custom icons.

\`\`\`jsx
<Icon color='#3a23ad' size='120px' style='padding: 20px;' viewBox='0 0 70 70' path='M12.9,13.8C12.9,13.8,12.9,13.8,12.9,13.8c-0.1,0.1-0.3,0.2-0.5,0.2C4.5,17.9,1.9,28.8,6.6,38.5l28.6-13.8 c0,0,0,0,0,0c0.2-0.1,0.3-0.1,0.5-0.2C43.5,20.6,46.2,9.7,41.5,0L12.9,13.8zM8.6,42.1C8.6,42.1,8.6,42.1,8.6,42.1c-0.1,0.1-0.3,0.1-0.5,0.2C0.3,46.1-2.4,57,2.3,66.7l28.6-13.8 c0,0,0,0,0,0c0.2-0.1,0.3-0.1,0.5-0.2c7.9-3.8,10.5-14.8,5.8-24.4L8.6,42.1z' />
\`\`\`

The \`path\` prop can also contain an array of children svg elements to render.

\`\`\`jsx
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

### children
Component children can be provided and will be rendered within the wrapping \`svg\` element.

\`\`\`jsx
<Icon size={'70'} viewBox={'0 0 70 70'} >
    <line x1="1" y1="10" x2="69" y2="10" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></line>
	<line x1="1" y1="30" x2="69" y2="30" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></line>
	<circle cx="15" cy="10" r="6" fill="#000000" stroke="#000000" stroke-width="3"></circle>
	<circle cx="55" cy="30" r="6" fill="#000000" stroke="#000000" stroke-width="3"></circle>
</Icon>
\`\`\`

### color
The \`color\` prop specifies the icon color, overwritten by fill props.

\`\`\`jsx
<Icon icon='cogs' color="#ffff00" />
\`\`\`

### fill
The \`fill\` prop specifies the icon fill color, overwrites color prop.

\`\`\`jsx
<Icon icon='cogs' fill="#ffff00" />
\`\`\`

### stroke
The \`stroke\` prop specifies the icon stroke color.

\`\`\`jsx
<Icon icon='cogs' stroke="#ffff00" />
\`\`\`

### title
The \`title\` prop specifies the title to render inside the svg.

\`\`\`jsx
<Icon icon='cogs' title={'Settings'} />
\`\`\`

### size
The \`size\` prop specifies the custom icon size. This will be set to both the width and height.

\`\`\`jsx
<Icon icon='cogs' size={'20px'} />
\`\`\`

### title
The \`title\` prop specifies the title to render inside the svg.

\`\`\`jsx
<Icon icon='cogs' title={'Settings'} />
\`\`\`

### width & height
The \`width\` and \`height\` props specify custom icon dimensions and will overwrite the \`size\` prop.

\`\`\`jsx
<Icon icon='cogs' width={'20px'} height={'25px'} />
\`\`\`

### viewBox
The \`viewBox\` prop specifies the SVG \`viewBox\` attribute. This defines the position and dimension, in user space, of an SVG viewport.

Format: \`\` \`\${min-x} \${min-y} \${width} \${height}\` \`\`

\`\`\`jsx
<Icon icon='cogs' viewBox={'0 0 20 20'} />
\`\`\`
`,
					h = {
						title: 'Atoms/Icon',
						component: r.I,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(s.oz, { options: { overrides: { code: o.Z } }, children: y }), (0, t.Y)(s.uY, { story: s.h1 })],
									}),
							},
							actions: { disabled: !0 },
						},
						argTypes: {
							icon: {
								description: 'Icon name',
								table: { type: { summary: 'string' }, category: 'Templates Legal' },
								options: [...Object.keys(d.c)],
								control: { type: 'select' },
							},
							path: {
								description: 'SVG path',
								table: { type: { summary: 'string | SVGPathElement[]' }, category: 'Templates Legal' },
								control: { type: 'text' },
							},
							title: {
								description: 'Title text to render inside the svg',
								table: { type: { summary: 'string' }, category: 'Templates Legal' },
								control: { type: 'text' },
							},
							children: {
								description: 'SVG elements to be contained within (using children)',
								table: { type: { summary: 'string, JSX' }, category: 'Templates Legal' },
								control: { type: 'none' },
							},
							color: {
								description: 'Icon color',
								table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: 'theme.variables.colors.primary' } },
								control: { type: 'color' },
							},
							stroke: {
								description: 'Icon stroke color',
								table: { type: { summary: 'string' }, category: 'Templates Legal' },
								control: { type: 'color' },
							},
							fill: {
								description: 'Icon fill color',
								table: { type: { summary: 'string' }, category: 'Templates Legal' },
								control: { type: 'color' },
							},
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
							...i.F,
						},
					},
					c = (p) => (0, t.Y)(r.I, { ...p });
				c.args = { icon: 'cogs' };
				const a = (p) => (0, t.Y)(r.I, { ...p });
				a.args = {
					path: [
						{
							type: 'path',
							attributes: {
								d: 'M592.1,203.3c0,41.8-30.7,75.9-68.5,75.9h-151.9c-53.3,0-86.1-64.4-58.7-115.2l63.7-118.3c12.5-22.9,34.6-36.9,58.7-36.9h87.9c37.8,0,68.5,34.1,68.5,75.9l.3,118.6Z',
							},
						},
						{
							type: 'path',
							attributes: {
								d: 'M592.1,516.1c0,41.8-30.7,75.9-68.5,75.9h-151.9c-53.3,0-86.1-64.4-58.7-115.2l63.7-118.3c12.5-22.9,34.6-36.9,58.7-36.9h87.9c37.8,0,68.5,34.1,68.5,75.9l.3,118.6Z',
							},
						},
						{
							type: 'path',
							attributes: {
								d: 'M8.9,84.7C8.9,42.9,39.6,8.8,77.4,8.8h151.9c53.3,0,86.1,64.4,58.7,115.2l-63.7,118.3c-12.5,22.9-34.6,36.9-58.7,36.9h-87.9c-37.8,0-68.5-34.1-68.5-75.9l-.3-118.6Z',
							},
						},
						{
							type: 'path',
							attributes: {
								d: 'M8.9,397.6c0-41.8,30.7-75.9,68.5-75.9h151.9c53.3,0,86.1,64.4,58.7,115.2l-63.7,118.3c-12.5,22.9-34.6,36.9-58.7,36.9h-87.9c-37.8,0-68.5-34.1-68.5-75.9l-.3-118.6Z',
							},
						},
					],
					size: '70px',
					viewBox: '0 0 670 670',
				};
				const l = () => {
					const p = ['layout-large', 'layout-grid'];
					return (0, t.Y)('div', {
						style: {
							display: 'flex',
							flexWrap: 'wrap',
							fontFamily:
								'"Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif',
							fontSize: '10px',
						},
						children: Object.keys(d.c)
							.filter((u) => !p.includes(u))
							.map((u) =>
								(0, t.FD)('div', {
									style: { marginBottom: '40px' },
									children: [
										(0, t.Y)(r.I, { icon: u, size: '40px', style: { margin: '20px' } }),
										(0, t.Y)('div', { style: { textAlign: 'center' }, children: u }),
									],
								})
							),
					});
				};
				(l.parameters = { controls: { expanded: !1, disabled: !0 }, options: { showPanel: !1 } }),
					(c.parameters = {
						...c.parameters,
						docs: {
							...c.parameters?.docs,
							source: { originalSource: '(props: IconProps): JSX.Element => <Icon {...props} />', ...c.parameters?.docs?.source },
						},
					}),
					(a.parameters = {
						...a.parameters,
						docs: {
							...a.parameters?.docs,
							source: { originalSource: '(props: IconProps): JSX.Element => <Icon {...props} />', ...a.parameters?.docs?.source },
						},
					}),
					(l.parameters = {
						...l.parameters,
						docs: {
							...l.parameters?.docs,
							source: {
								originalSource: `() => {
  const legacyPaths = ['layout-large', 'layout-grid'];
  return <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    fontFamily: '"Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif',
    fontSize: '10px'
  }}>
            {Object.keys(iconPaths).filter(val => !legacyPaths.includes(val)).map(icon => {
      return <div style={{
        marginBottom: '40px'
      }}>
                            <Icon icon={icon as IconType} size="40px" style={{
          margin: '20px'
        }} />
                            <div style={{
          textAlign: 'center'
        }}>{icon}</div>
                        </div>;
    })}
        </div>;
}`,
								...l.parameters?.docs?.source,
							},
						},
					});
				const g = ['Default', 'CustomPath', 'Gallery'];
			},
			'./components/src/utilities/componentArgs.ts'(m, n, e) {
				'use strict';
				e.d(n, { F: () => t });
				const t = {
					className: {
						description: 'Class name appended to root element of component',
						table: { type: { summary: 'string' }, category: 'default Props', defaultValue: { summary: 'ss__${component-name}' } },
						control: { type: 'text' },
					},
					disableStyles: {
						defaultValue: !1,
						description: 'Disable all default styling',
						table: { type: { summary: 'boolean' }, category: 'default Props', defaultValue: { summary: !1 } },
						control: { type: 'boolean' },
					},
					style: {
						description: 'Inline style',
						table: { type: { summary: 'string, object' }, category: 'default Props' },
						control: { type: 'text' },
					},
					theme: {
						description: 'Specify specific sub component props',
						table: { type: { summary: 'object' }, category: 'default Props' },
						control: { type: 'none' },
					},
				};
			},
			'./components/src/utilities/storybook.tsx'(m, n, e) {
				'use strict';
				e.d(n, { Z: () => d });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = 'prism-block',
					d = (o) => {
						const i = (0, s.li)(null);
						return (
							(0, s.vJ)(() => {
								i.current && o.className?.includes('lang-') && !o.className?.includes(r) && window?.Prism?.highlightElement(i.current);
							}, [o.className, o.children, i]),
							(0, t.Y)('code', { ...o, ref: i, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(m) {
				function n(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(n.keys = () => []), (n.resolve = n), (n.id = '../../node_modules/memoizerific sync recursive'), (m.exports = n);
			},
		},
	]);
})();

//# sourceMappingURL=components-Atoms-Icon-Icon-stories.8d5e9c02.iframe.bundle.js.map
