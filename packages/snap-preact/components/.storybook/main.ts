import { createRequire } from 'module';
import { dirname, join } from 'path';
import type { StorybookConfig } from '@storybook/preact-vite';
import { mergeConfig, type Plugin } from 'vite';

const require = createRequire(import.meta.url);

// npm hoists `storybook` to the monorepo root but keeps framework/addons in the workspace,
// so bare specifiers are unresolvable from core — hand it absolute paths instead
function getAbsolutePath(value: string): any {
	return dirname(require.resolve(join(value, 'package.json')));
}

// component readmes are imported directly into stories; Vite has no built-in loader for `.md`
const markdownAsString: Plugin = {
	name: 'snap-markdown-as-string',
	enforce: 'pre',
	transform(src, id) {
		if (id.endsWith('.md')) {
			return { code: `export default ${JSON.stringify(src)};`, map: null };
		}
	},
};

const config: StorybookConfig = {
	framework: {
		name: getAbsolutePath('@storybook/preact-vite'),
		options: {},
	},
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [getAbsolutePath('@storybook/addon-docs'), getAbsolutePath('@storybook/addon-themes')],
	viteFinal: async (config) =>
		mergeConfig(config, {
			plugins: [markdownAsString],
			resolve: {
				// Do not alias react here — the preact renderer preset already maps it to
				// preact/compat, and aliasing react/jsx-runtime to preact's non-compat
				// runtime breaks the React-based docs UI.
				// A second @emotion/react instance would break theme context.
				dedupe: ['preact', '@emotion/react'],
			},
			esbuild: {
				jsx: 'automatic',
				jsxImportSource: '@emotion/react',
			},
		}),
};

export default config;
