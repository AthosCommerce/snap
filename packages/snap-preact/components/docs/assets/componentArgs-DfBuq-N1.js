const e = {
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
	style: { description: 'Inline style', table: { type: { summary: 'string, object' }, category: 'default Props' }, control: { type: 'text' } },
	theme: { description: 'Specify specific sub component props', table: { type: { summary: 'object' }, category: 'default Props' }, control: !1 },
};
export { e as c };
