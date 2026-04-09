import fs from 'fs';
import documents from './documents.js';

const BASE_URL = 'https://athoscommerce.github.io/snap';

const markdownLinks = []; // { category, label, url }
const sitemapRoutes = []; // route strings

function walk(links, category) {
	for (const link of links) {
		if (link.route && !link.hidden) {
			sitemapRoutes.push(link.route);
		}

		if (link.type === 'markdown' && link.url) {
			const urls = Array.isArray(link.url) ? link.url : [link.url];
			for (const url of urls) {
				markdownLinks.push({ category, label: link.label, url });
			}
		}

		if (link.links && Array.isArray(link.links)) {
			walk(link.links, category);
		}
	}
}

for (const section of documents) {
	const category = section.categoryName || '';
	if (section.links) {
		walk(section.links, category);
	}
}

// --- llms.txt ---
let llms = `# Snap SDK

> Snap is an open source SDK for building e-commerce search, autocomplete, recommendations, and product discovery experiences powered by Athos Commerce.

Documentation site: ${BASE_URL}
Repository: https://github.com/athoscommerce/snap

`;

const grouped = new Map();
for (const link of markdownLinks) {
	const cat = link.category || 'Other';
	if (!grouped.has(cat)) grouped.set(cat, []);
	grouped.get(cat).push(link);
}

for (const [category, links] of grouped) {
	if (category) {
		llms += `## ${category}\n\n`;
	}
	for (const link of links) {
		// Convert relative path (./docs/FOO.md or ./packages/...) to absolute URL
		const absoluteUrl = `${BASE_URL}/${link.url.replace(/^\.\//, '')}`;
		llms += `- [${link.label}](${absoluteUrl})\n`;
	}
	llms += '\n';
}

fs.writeFileSync('llms.txt', llms.trimEnd() + '\n');
console.log('Generated llms.txt');

// --- sitemap.xml ---
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

for (const route of sitemapRoutes) {
	const loc = `${BASE_URL}${route}`;
	sitemap += `  <url><loc>${loc}</loc></url>\n`;
}

sitemap += `</urlset>\n`;

fs.writeFileSync('sitemap.xml', sitemap);
console.log('Generated sitemap.xml');

// --- robots.txt ---
const robots = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;

fs.writeFileSync('robots.txt', robots);
console.log('Generated robots.txt');
