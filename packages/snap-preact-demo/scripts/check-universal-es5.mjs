import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'acorn';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const builds = ['snap', 'templates', 'hybrid'];
const universalBundlePattern = /^universal\.bundle(?:\.chunk\.[^.]+\.[^.]+)?\.js$/;
const failures = [];
let checkedFiles = 0;

for (const build of builds) {
	const outputDirectory = path.resolve(__dirname, '..', build, 'dist');

	if (!fs.existsSync(outputDirectory)) {
		failures.push(`${build}: missing output directory ${outputDirectory}`);
		continue;
	}

	const bundles = fs
		.readdirSync(outputDirectory)
		.filter((filename) => universalBundlePattern.test(filename))
		.sort();

	if (!bundles.some((filename) => filename === 'universal.bundle.js')) {
		failures.push(`${build}: universal.bundle.js was not generated`);
		continue;
	}

	for (const filename of bundles) {
		const bundlePath = path.join(outputDirectory, filename);
		const source = fs.readFileSync(bundlePath, 'utf8');
		checkedFiles += 1;

		try {
			const syntaxTree = parse(source, {
				ecmaVersion: 'latest',
				locations: true,
				sourceType: 'script',
			});
			const nodes = [syntaxTree];
			let arrowFunction;

			while (nodes.length > 0 && !arrowFunction) {
				const node = nodes.pop();

				if (node.type === 'ArrowFunctionExpression') {
					arrowFunction = node;
					break;
				}

				for (const value of Object.values(node)) {
					if (Array.isArray(value)) {
						nodes.push(...value.filter((item) => item && typeof item.type === 'string'));
					} else if (value && typeof value.type === 'string') {
						nodes.push(value);
					}
				}
			}

			if (arrowFunction) {
				const { line, column } = arrowFunction.loc.start;
				failures.push(`${path.relative(process.cwd(), bundlePath)}: arrow function at ${line}:${column}`);
				continue;
			}

			parse(source, {
				allowHashBang: true,
				ecmaVersion: 5,
				sourceType: 'script',
			});
		} catch (error) {
			failures.push(`${path.relative(process.cwd(), bundlePath)}: ${error.message}`);
		}
	}
}

if (failures.length > 0) {
	console.error('Universal bundles contain syntax newer than ES5 (including arrow functions):');
	for (const failure of failures) {
		console.error(`- ${failure}`);
	}
	process.exitCode = 1;
} else {
	console.log(`ES5 syntax and arrow-function checks passed for ${checkedFiles} universal bundle files.`);
}
