# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.16.0](https://github.com/AthosCommerce/snap/compare/v1.15.0...v1.16.0) (2026-10-30)

### Bug Fixes

- clear tracker last searches when search history terms are removed or reset ([a14d7e9](https://github.com/AthosCommerce/snap/commit/a14d7e9b3b853ebde2999535d8326c1915635d8d))
- keep commas from splitting lastSearches terms and record searched terms with the controller tracker ([c930d42](https://github.com/AthosCommerce/snap/commit/c930d424be08e16a8194160a9d06a95b16000d91))
- record last searches even when personalization is disabled ([7c301da](https://github.com/AthosCommerce/snap/commit/7c301da0e525f8e31cb0bcec9a3a1d9bef15ea66))
- remove lastSearches from cache key, encode terms, searchController to call setService for tracker ([de6c49e](https://github.com/AthosCommerce/snap/commit/de6c49e81f194f5b6521cc14595d402e128eea10))

### Features

- add lastSearches url param to apis ([299d532](https://github.com/AthosCommerce/snap/commit/299d532260ad6e8020752b4851484807a09d1936))

# [1.15.0](https://github.com/AthosCommerce/snap/compare/v1.14.0...v1.15.0) (2026-10-30)

**Note:** Version bump only for package @athoscommerce/snap-store-mobx

# [1.14.0](https://github.com/AthosCommerce/snap/compare/v1.13.2...v1.14.0) (2026-10-14)

**Note:** Version bump only for package @athoscommerce/snap-store-mobx

## [1.13.2](https://github.com/AthosCommerce/snap/compare/v1.13.1...v1.13.2) (2026-09-23)

**Note:** Version bump only for package @athoscommerce/snap-store-mobx

## [1.13.1](https://github.com/AthosCommerce/snap/compare/v1.13.0...v1.13.1) (2026-09-18)

**Note:** Version bump only for package @athoscommerce/snap-store-mobx

# [1.13.0](https://github.com/AthosCommerce/snap/compare/v1.12.0...v1.13.0) (2026-09-17)

### Features

- **snap:** adding ability to target children in templates overrides, as well as comma separated overrides ([049ddca](https://github.com/AthosCommerce/snap/commit/049ddca3a00a82da8b7fda627b6d09aa7a8a9763))

# [1.12.0](https://github.com/AthosCommerce/snap/compare/v1.11.0...v1.12.0) (2026-08-28)

### Bug Fixes

- initial quickview ([1fd8a0c](https://github.com/AthosCommerce/snap/commit/1fd8a0cf787ab24d6e5980e7c22b173df678aaca))
- quickview initial pr feedback ([cf98107](https://github.com/AthosCommerce/snap/commit/cf98107bafe31872de2957b275a01235c46f97cd))
- quickview layout improvements, named calloutBadge, variantSelection, lang props, a11y ([9c7d19c](https://github.com/AthosCommerce/snap/commit/9c7d19c0a54126fa2de316077ce993cfc70ded9e))

### Features

- initial quickview ([b89cc1a](https://github.com/AthosCommerce/snap/commit/b89cc1a9f1998b1f08bd2dca0460a4ecf113d9e4))

# [1.11.0](https://github.com/AthosCommerce/snap/compare/v1.10.0...v1.11.0) (2026-08-18)

**Note:** Version bump only for package @athoscommerce/snap-store-mobx

# [1.10.0](https://github.com/AthosCommerce/snap/compare/v1.9.1...v1.10.0) (2026-07-31)

### Performance Improvements

- **build:** skip type-check and declaration emit on cjs pass, remove redundant theme aggregate checks ([53db26c](https://github.com/AthosCommerce/snap/commit/53db26c6e99956bb720030d2002cadaeaa65a6cf))

## [1.9.1](https://github.com/AthosCommerce/snap/compare/v1.9.0...v1.9.1) (2026-07-23)

**Note:** Version bump only for package @athoscommerce/snap-store-mobx

# [1.9.0](https://github.com/AthosCommerce/snap/compare/v1.8.0...v1.9.0) (2026-07-20)

### Features

- adding subject to the types, tests and README for the Klaviyo plugin ([0db6e26](https://github.com/AthosCommerce/snap/commit/0db6e264b5f716591de9d879309ad85a8424720d))

# [1.8.0](https://github.com/AthosCommerce/snap/compare/v1.7.0...v1.8.0) (2026-07-13)

**Note:** Version bump only for package @athoscommerce/snap-store-mobx

# [1.7.0](https://github.com/AthosCommerce/snap/compare/v1.6.0...v1.7.0) (2026-06-11)

**Note:** Version bump only for package @athoscommerce/snap-store-mobx

# [1.6.0](https://github.com/AthosCommerce/snap/compare/v1.5.1...v1.6.0) (2026-06-03)

**Note:** Version bump only for package @athoscommerce/snap-store-mobx

## [1.5.1](https://github.com/AthosCommerce/snap/compare/v1.5.0...v1.5.1) (2026-05-28)

### Bug Fixes

- **store-mobx/searchresultstore:** adding guard on variant.options iteration ([6acff9e](https://github.com/AthosCommerce/snap/commit/6acff9ea68c65c21442a30b9ae13dcd5be49b3cc))

# [1.5.0](https://github.com/AthosCommerce/snap/compare/v1.4.0...v1.5.0) (2026-05-11)

### Bug Fixes

- add isBundle check to profile store ([05025ff](https://github.com/AthosCommerce/snap/commit/05025ffd9334872f18b6324e720da43989461ead))
- **autocompletecontroller:** only re init the history of formelement change ([3739375](https://github.com/AthosCommerce/snap/commit/3739375a4442da1636ade53162fa97eae846431e))

# [1.4.0](https://github.com/AthosCommerce/snap/compare/v1.3.0...v1.4.0) (2026-05-05)

### Features

- **toolbox:** moving StorageStore to toolbox, but preserving the export from mobx-store ([800fe9a](https://github.com/AthosCommerce/snap/commit/800fe9a13a49296ec7d4b1c548bc03e633a79d96))

# [1.3.0](https://github.com/AthosCommerce/snap/compare/v1.2.2...v1.3.0) (2026-04-29)

### Features

- **preact/editor:** changes to support editor changes outside of the UI ([1b5a5dd](https://github.com/AthosCommerce/snap/commit/1b5a5dd8ada810b82181ab0fc7d3f7589ada80b5))

## [1.2.2](https://github.com/AthosCommerce/snap/compare/v1.2.1...v1.2.2) (2026-04-22)

**Note:** Version bump only for package @athoscommerce/snap-store-mobx

## [1.2.1](https://github.com/AthosCommerce/snap/compare/v1.2.0...v1.2.1) (2026-04-17)

**Note:** Version bump only for package @athoscommerce/snap-store-mobx

# [1.2.0](https://github.com/AthosCommerce/snap/compare/v1.1.5...v1.2.0) (2026-04-14)

**Note:** Version bump only for package @athoscommerce/snap-store-mobx

## [1.1.5](https://github.com/AthosCommerce/snap/compare/v1.1.4...v1.1.5) (2026-04-02)

### Bug Fixes

- **networkcache:** bugfix for networkCache and the way it handles storing large objects over max size allowed ([bfd61a6](https://github.com/AthosCommerce/snap/commit/bfd61a6fc6d105ca3067f323d366f424c2612df7))

## [1.1.4](https://github.com/AthosCommerce/snap/compare/v1.1.3...v1.1.4) (2026-03-05)

**Note:** Version bump only for package @athoscommerce/snap-store-mobx

## [1.1.3](https://github.com/AthosCommerce/snap/compare/v1.1.2...v1.1.3) (2026-03-05)

**Note:** Version bump only for package @athoscommerce/snap-store-mobx

## [1.1.2](https://github.com/AthosCommerce/snap/compare/v1.1.1...v1.1.2) (2026-03-05)

**Note:** Version bump only for package @athoscommerce/snap-store-mobx

## [1.1.1](https://github.com/AthosCommerce/snap/compare/v1.1.0...v1.1.1) (2026-03-05)

**Note:** Version bump only for package @athoscommerce/snap-store-mobx

# [1.1.0](https://github.com/athoscommerce/snap/compare/v1.0.0...v1.1.0) (2026-03-05)

**Note:** Version bump only for package @athoscommerce/snap-store-mobx

# 1.0.0 (2026-03-04)
