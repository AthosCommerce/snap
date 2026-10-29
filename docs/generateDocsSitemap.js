import fs from 'fs';
import path from 'path';
import documents from './documents.js';

// Generates docs-sitemap.json at the repository root: a mapping from each
// markdown file to the public page that renders it. Consumed by the athos-mcp
// docs indexer so downstream tools (e.g. DocsBot) can cite public
// documentation pages instead of repo files.
//
//   node ./docs/generateDocsSitemap.js          regenerate the file
//   node ./docs/generateDocsSitemap.js --check  fail if the file is stale
//
// Pages come from three sources, and when several reference the same markdown
// file the first one wins:
//
//   1. docs site navigation (documents.js) - hidden pages are included, since
//      they still render at their route. Entries keep documents.js order.
//   2. Storybook docs pages - each `*.stories.tsx` and `*.mdx` file renders the
//      markdown it imports on its docs page, shown in the docs site through the
//      iframe route that embeds the Storybook build.
//   3. TypeDoc output - packages whose `build:docs` runs TypeDoc publish their
//      README as the landing page of `packages/<package>/docs/`.

const BASE_URL = 'https://athoscommerce.github.io/snap';
const OUTPUT_FILE = 'docs-sitemap.json';
const STORYBOOK_BUILD = './packages/snap-preact/components/docs/';
const STORYBOOK_SRC = 'packages/snap-preact/components/src';

const files = {}; // filePath -> { url: route, title: label }
const missing = [];
const errors = [];

function add(filePath, url, title) {
	if (!files[filePath]) {
		files[filePath] = { url, title };
	}
}

// 1. docs site navigation

let storybookRoute;

function walk(links) {
	for (const link of links) {
		if (link.type === 'markdown' && link.url && link.route) {
			const urls = Array.isArray(link.url) ? link.url : [link.url];
			for (const url of urls) {
				const filePath = url.replace(/^\.\//, '');
				if (!fs.existsSync(filePath)) {
					missing.push(`${filePath} (route ${link.route})`);
					continue;
				}
				add(filePath, link.route, link.label);
			}
		}

		if (link.type === 'iframe' && link.url === STORYBOOK_BUILD) {
			storybookRoute = link.route;
		}

		if (link.links && Array.isArray(link.links)) {
			walk(link.links);
		}
	}
}

for (const section of documents) {
	if (section.links) {
		walk(section.links);
	}
}

// 2. Storybook docs pages

// mirrors `sanitize` from storybook's csf package, which turns a title into a story id
function toStoryId(title) {
	return title
		.toLowerCase()
		.replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '-')
		.replace(/-+/g, '-')
		.replace(/^-+/, '')
		.replace(/-+$/, '');
}

if (!storybookRoute) {
	errors.push(`documents.js has no iframe route for the Storybook build (${STORYBOOK_BUILD})`);
} else {
	const sources = fs
		.readdirSync(STORYBOOK_SRC, { recursive: true })
		.filter((file) => file.endsWith('.stories.tsx') || file.endsWith('.mdx'))
		.sort();

	for (const source of sources) {
		const sourcePath = path.posix.join(STORYBOOK_SRC, source.split(path.sep).join('/'));
		const contents = fs.readFileSync(sourcePath, 'utf8');

		const title = sourcePath.endsWith('.mdx')
			? contents.match(/<Meta\s+title=(['"])(.+?)\1/)?.[2]
			: contents.match(/^\s*title:\s*(['"])(.+?)\1/m)?.[2];
		const imports = [...contents.matchAll(/^import\s+\w+\s+from\s+(['"])([^'"]+\.md)\1/gm)].map((match) => match[2]);

		if (!title) {
			errors.push(`${sourcePath} has no Storybook title`);
			continue;
		}
		if (imports.length !== 1) {
			errors.push(`${sourcePath} imports ${imports.length} markdown files, expected 1`);
			continue;
		}

		const markdownPath = path.posix.normalize(path.posix.join(path.posix.dirname(sourcePath), imports[0]));
		if (!fs.existsSync(markdownPath)) {
			missing.push(`${markdownPath} (imported by ${sourcePath})`);
			continue;
		}

		const url = `${storybookRoute}?params=${encodeURIComponent(`?path=/docs/${toStoryId(title)}--docs`)}`;
		const label = title.split('/').pop();
		add(markdownPath, url, label);
		if (sourcePath.endsWith('.mdx')) {
			add(sourcePath, url, label);
		}
	}
}

// 3. TypeDoc package landing pages

for (const dir of fs.readdirSync('packages').sort()) {
	const packageJsonPath = path.posix.join('packages', dir, 'package.json');
	const readmePath = path.posix.join('packages', dir, 'README.md');
	if (!fs.existsSync(packageJsonPath) || !fs.existsSync(readmePath)) {
		continue;
	}

	const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
	if (/\btypedoc --out docs\b/.test(packageJson.scripts?.['build:docs'] || '')) {
		add(readmePath, `/packages/${dir}/docs/`, packageJson.name);
	}
}

if (missing.length > 0) {
	console.error(`docs sitemap sources reference files that do not exist:`);
	for (const entry of missing) {
		console.error(`  - ${entry}`);
	}
}
if (errors.length > 0) {
	console.error(`docs sitemap sources could not be read:`);
	for (const entry of errors) {
		console.error(`  - ${entry}`);
	}
}
if (missing.length > 0 || errors.length > 0) {
	process.exit(1);
}

const sitemap = {
	version: 1,
	site: {
		baseUrl: BASE_URL,
		name: 'Snap Documentation',
	},
	files,
};

const output = `${JSON.stringify(sitemap, null, '\t')}\n`;

if (process.argv.includes('--check')) {
	const current = fs.existsSync(OUTPUT_FILE) ? fs.readFileSync(OUTPUT_FILE, 'utf8') : '';
	if (current !== output) {
		console.error(`${OUTPUT_FILE} is out of date with its sources — run "npm run build:sitemap" and commit the result.`);
		process.exit(1);
	}
	console.log(`${OUTPUT_FILE} is up to date`);
} else {
	fs.writeFileSync(OUTPUT_FILE, output);
	console.log(`Generated ${OUTPUT_FILE} (${Object.keys(files).length} pages)`);
}
