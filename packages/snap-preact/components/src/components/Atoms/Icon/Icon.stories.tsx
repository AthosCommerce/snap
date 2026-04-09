import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { Icon, IconProps } from './Icon';
import { iconPaths, IconType } from './paths';
import { componentArgs, highlightedCode } from '../../../utilities';
import Readme from '../Icon/readme.md';

export default {
	title: 'Atoms/Icon',
	component: Icon,
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => (
				<div>
					<Markdown
						options={{
							overrides: {
								code: highlightedCode,
							},
						}}
					>
						{Readme}
					</Markdown>
					<ArgsTable story={PRIMARY_STORY} />
				</div>
			),
		},
		actions: {
			disabled: true,
		},
	},
	argTypes: {
		icon: {
			description: 'Icon name',
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
			},
			options: [...Object.keys(iconPaths)],
			control: {
				type: 'select',
			},
		},
		path: {
			description: 'SVG path',
			table: {
				type: {
					summary: 'string | SVGPathElement[]',
				},
				category: 'Templates Legal',
			},
			control: { type: 'text' },
		},
		title: {
			description: 'Title text to render inside the svg',
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
			},
			control: { type: 'text' },
		},
		children: {
			description: 'SVG elements to be contained within (using children)',
			table: {
				type: {
					summary: 'string, JSX',
				},
				category: 'Templates Legal',
			},
			control: { type: 'none' },
		},
		color: {
			description: 'Icon color',
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
				defaultValue: { summary: 'theme.variables.colors.primary' },
			},
			control: { type: 'color' },
		},
		stroke: {
			description: 'Icon stroke color',
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
			},
			control: { type: 'color' },
		},
		fill: {
			description: 'Icon fill color',
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
			},
			control: { type: 'color' },
		},
		size: {
			defaultValue: '16px',
			description: 'Icon size',
			table: {
				type: {
					summary: 'string | number',
				},
				category: 'Templates Legal',
				defaultValue: { summary: '16px' },
			},
			control: { type: 'text' },
		},
		height: {
			description: 'Icon height. Overwrites size.',
			table: {
				type: {
					summary: 'string | number',
				},
				category: 'Templates Legal',
			},
			control: { type: 'text' },
		},
		width: {
			description: 'Icon width. Overwrites size.',
			table: {
				type: {
					summary: 'string | number',
				},
				category: 'Templates Legal',
			},
			control: { type: 'text' },
		},
		viewBox: {
			description: 'SVG view box',
			defaultValue: '0 0 56 56',
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
				defaultValue: { summary: '0 0 56 56' },
			},
			control: { type: 'text' },
		},
		...componentArgs,
	},
};

export const Default = (props: IconProps): JSX.Element => <Icon {...props} />;
Default.args = {
	icon: 'cogs',
	size: '70px',
};

export const CustomPath = (props: IconProps): JSX.Element => <Icon {...props} />;
CustomPath.args = {
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
};

export const Gallery = () => {
	const legacyPaths = ['layout-large', 'layout-grid'];

	return (
		<div
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'center',
				gap: '40px',
				margin: '1rem 2rem',
				fontFamily:
					'"Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif',
				fontSize: '10px',
			}}
		>
			{Object.keys(iconPaths)
				.filter((val) => !legacyPaths.includes(val))
				.map((icon) => {
					return (
						<div style={{ flex: '0 1 auto', width: '40px' }}>
							<Icon icon={icon as IconType} size="100%" style={{ flex: '0 0 100%', height: '40px' }} />
							<div style={{ textAlign: 'center' }}>{icon}</div>
						</div>
					);
				})}
		</div>
	);
};

Gallery.parameters = {
	controls: {
		expanded: false,
		disabled: true,
	},
	options: {
		showPanel: false,
	},
};
