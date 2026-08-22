# How the Snap MCP Indexes This Repo — Indexing Model & Documentation Best Practices

This document explains how the Snap MCP server (the `snap-mcp` / `snap-templates-mcp`
endpoints) ingests, chunks, embeds, and ranks the documentation and code in this
repository, and defines the best practices that follow from that model. Read this
before writing or substantially editing any documentation that is meant to be
retrievable through the MCP — including `README.md` files and `AGENTIC_SUMMARY.md` files.

> The authoritative implementation lives in the separate MCP server project
> (`packages/indexer`, `packages/db`, `apps/mcp-server`). The behavior described here
> reflects that source. If the MCP server changes, update this document.

---

## 1. What gets indexed

- **Automatic, extension-based.** Any file with a documentation extension
  (`.md`, `.mdx`, `.txt`, `.rst`) is classified as `documentation`; source/config
  extensions (`.ts`, `.tsx`, `.js`, `.json`, `.yaml`, …) are classified as `code`.
- **No allowlist or registration.** New files — including any new `AGENTIC_SUMMARY.md`
  — are picked up automatically on the next index run. You do **not** need to register
  them anywhere.
- **Excluded automatically:** `node_modules`, `.git`, `dist`, `build`, `coverage`,
  dot-files (except `.env.example`), symlinks, and files over 500 KB.
- **Per-repo glob filters** (`includePath`, `includeExtensions`) may further restrict
  what is ingested; these are configured in the MCP admin UI, not in this repo.

**Implication:** dropping a well-structured `.md` file into a package is sufficient to
make it retrievable. The quality of retrieval is determined entirely by how you
structure that file (sections 2–4 below).

---

## 2. How content is chunked

Markdown is split **heading-aware**:

- Chunks **never straddle a heading** (`#` through `####`). Each heading starts a new
  chunk boundary.
- Target chunk size is **~1500 characters**, with **200 characters of overlap** between
  consecutive chunks.
- A section that exceeds ~1500 characters is **force-split at raw 1500-character
  intervals** — it will be cut mid-sentence or **mid-table-row**, with no respect for
  structure.
- Each chunk is embedded with a contextual prefix: `File: <path>` plus the
  **heading trail** (e.g. `Section: Public Exports > Stores`). This heading path is part
  of what gets embedded, so headings are not just cosmetic — they carry retrieval signal.

**Implications:**

- **Keep each section under ~1500 characters (~250 words, or ~25 table rows).** This is
  the single most important rule. A section under the limit becomes one clean,
  self-contained chunk. A section over it gets fragmented at arbitrary offsets.
- **Split large export/type lists into categorized sub-sections**, each under the limit,
  rather than one giant table.
- **Use descriptive headings.** `### Search Stores` embeds better than `### Group 2`,
  because the heading text is part of the chunk's embedding.
- **Don't split a tight code example across a heading** unless each half stands alone —
  the two halves become two chunks.

---

## 3. How content is embedded and ranked

- **Embeddings:** 1024-dim vectors (Voyage `voyage-code-3` by default; OpenAI models also
  supported). Code and docs use the **same model** — there is no doc-vs-code prompt
  difference. Only truncation (24K-char cap) is applied; no stemming or lowercasing.
- **Retrieval is hybrid (Reciprocal Rank Fusion).** Two candidate pools are fused:
  1. **Vector pool** — cosine similarity over the embeddings.
  2. **Full-text pool** — Postgres `to_tsvector('simple', …)`, i.e. **no stemming**, with
     punctuation also collapsed so `settings.filters.rangeFormat` is queryable as parts.
- **Exact identifiers rank well** because the full-text pool is unstemmed. Writing the
  literal export name (`SearchFacetStore`, `setConfig`) in the text directly helps the
  query that searches for it.
- **Ranking is per-rank, not per-chunk-count.** A 62-chunk README does not automatically
  bury a 6-chunk summary; fusion is based on each chunk's rank within its pool.

### Priority weights (boost / deboost)

The MCP supports an optional **per-file priority weight**, set in the admin UI:

| Level | Weight |
|-------|--------|
| Low | −0.05 |
| Normal (default) | 0 |
| High | +0.08 |
| Critical | +0.15 |

The weight is added to the normalized fusion score (which maxes around 1.0), so it is a
meaningful but bounded nudge. **There is no document "kind"/"category" metadata** — only
`documentation` vs `code` — so the priority weight is the *only* lever for influencing how
one doc ranks relative to another.

**Policy for this repo:**

- **Leave `AGENTIC_SUMMARY.md` and `README.md` files at Normal (0) by default.**
- Do **not** globally boost summaries. They would then outrank the deep, property-level
  package READMEs for queries those READMEs should win (e.g. "what does the `active`
  property on a range facet return").
- The summaries already win **export-discovery** queries naturally, because they contain
  vocabulary the prose READMEs lack (`Public Exports`, exact type names, type contracts).
- Only apply a **targeted High (+0.08)** to an individual file if a specific,
  observed retrieval gap justifies it — never as a blanket rule.

---

## 4. The two documentation roles (and why both exist)

The MCP cannot route by document role, so we encode the role in the **content and shape**
of each file. Two complementary roles:

### `README.md` — narrative & property-level reference
- Human-facing prose, conceptual explanations, per-property / per-method detail.
- Often large and multi-chunk (e.g. `snap-store-mobx/src/Search/README.md` ≈ 62 chunks).
- Answers: *"what does property X do / what does method Y return / how does this concept work."*

### `AGENTIC_SUMMARY.md` — source-verified, retrieval-optimized overview
- Structured, compact, additive to (not duplicative of) the README.
- Answers: *"what does this package export / what are the exact type contracts / how do I
  initialize it."*
- Every claim verified against `src/index.ts` and key implementation files as ground truth.

These should use **different vocabulary** so they occupy different query shapes and don't
compete for the same queries.

---

## 5. `AGENTIC_SUMMARY.md` authoring template

Follow this structure. Keep **every section under ~1500 characters** so each becomes one
clean chunk.

```markdown
# <package> — Agentic Summary

## Purpose
<1-2 sentences. State what the package does and whether it is meant for direct use.>

## Public Exports — <Category A>
<A table of related exports. Split exports into multiple categorized sections
(e.g. "Stores", "Config Types", "Facet Models") so no single table exceeds ~25 rows
or ~1500 characters.>

## Public Exports — <Category B>
<...>

## Key Type Contracts
<The 2-4 most important type definitions as actual TypeScript code blocks, copied
from source. If these are long, give each type its own heading.>

## Minimal Working Example
<A small, copy-pasteable example. Keep it in a single section.>

## Notes for MCP Retrieval
- Authoritative source: `packages/<pkg>/src/index.ts`
- <other file pointers; caveats; re-exports; peer deps; SSR caveats>

## README Fixes Applied
<bullet list, or "None">
```

### Authoring rules
1. **Verify against source.** Never trust the MCP's current results alone — read
   `src/index.ts` (the ground-truth export list), `src/types.ts`, and key class files.
2. **Sub-section large lists.** A 50-export package becomes several categorized tables,
   not one. This is required for clean chunking.
3. **Use exact identifier names in the text** — the unstemmed full-text pool rewards them.
4. **Use descriptive headings** — the heading trail is embedded.
5. **Keep code blocks self-contained** within a section.
6. **Be additive, not duplicative** — don't restate the README's prose; provide the
   structured export/type view the README lacks.
7. **Leave priority weight at Normal** unless a measured gap justifies otherwise.

---

## 6. Re-indexing

- Indexing is triggered manually from the MCP admin UI, or via the internal index API; a
  staleness check compares the indexed commit SHA against the remote HEAD.
- `fileId` handles stay stable across re-indexes for unchanged files; renamed/removed files
  get new IDs (stale handles return an explicit error).
- **After landing documentation changes in this repo, trigger (or request) a re-index** so
  the MCP corpus reflects the new content. Until then, the MCP serves the previously
  indexed version.

---

## 7. Checklist for new or changed docs

- [ ] Verified every export/type/signature against `src/index.ts` and source files.
- [ ] Every section is under ~1500 characters (large lists are sub-sectioned).
- [ ] Headings are descriptive and reflect the content beneath them.
- [ ] Exact identifier names appear in the prose/tables.
- [ ] `AGENTIC_SUMMARY.md` is additive to the README, not a restatement.
- [ ] README inaccuracies fixed at source with minimal, targeted patches.
- [ ] Priority weight left at Normal (no boost) unless a measured gap justifies it.
- [ ] Re-index triggered / requested after merge.
