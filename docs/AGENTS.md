# Docs standards

Applies to `docs/*.md`, package READMEs and component `readme.md` files. These pages are published: `docs/*.md` through the docs site (`docs/documents.js`), and component readmes through the docs feed. Their audience is external integrators.

## Accuracy comes first

- **Examples must be valid** against the current code: real config keys, valid values and correct theme variable paths. Check them against the types, and run them when you can.
- **Examples must work when copied:** include the imports and any required config.
- **Examples model good practice:** dynamic `import()` for component registration, typed `.tsx` examples and current tracking methods.
- **State defaults and caveats:** what an option defaults to, which values are supported, which events a plugin sends, and what a mode preserves or skips.
- **Code and docs change together.** A doc that describes behavior the code doesn't have is a bug, just like the reverse.

## Writing for integrators

- **Integrator-facing pages** don't document internal-only methods or internal tooling.
- **One canonical place per topic.** Link to the section that covers it rather than repeating its steps. Internal links point at the markdown file.
- **Obvious placeholders.** Make placeholder values clearly placeholders, and spell out steps a newcomer could miss.

## Adding a page

Register new pages in `docs/documents.js`, then run `npm run build:sitemap` and commit `docs-sitemap.json`. CI fails when the sitemap is stale.
