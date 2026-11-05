# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.16.0](https://github.com/AthosCommerce/snap/compare/v1.15.0...v1.16.0) (2026-10-30)

### Bug Fixes

- clear tracker last searches when search history terms are removed or reset ([a14d7e9](https://github.com/AthosCommerce/snap/commit/a14d7e9b3b853ebde2999535d8326c1915635d8d))
- keep commas from splitting lastSearches terms and record searched terms with the controller tracker ([c930d42](https://github.com/AthosCommerce/snap/commit/c930d424be08e16a8194160a9d06a95b16000d91))
- record last searches even when personalization is disabled ([7c301da](https://github.com/AthosCommerce/snap/commit/7c301da0e525f8e31cb0bcec9a3a1d9bef15ea66))
- remove lastSearches from cache key, encode terms, searchController to call setService for tracker ([de6c49e](https://github.com/AthosCommerce/snap/commit/de6c49e81f194f5b6521cc14595d402e128eea10))
- replace commas within lastSearches terms with spaces instead of encoding them ([b9404ca](https://github.com/AthosCommerce/snap/commit/b9404caae063c0e61d19bdfb533d27696f15e845))
- send lastSearches as one query param per term ([8320c61](https://github.com/AthosCommerce/snap/commit/8320c611b3b77845282b1809295671ac23beab6d))

### Features

- add lastSearches url param to apis ([299d532](https://github.com/AthosCommerce/snap/commit/299d532260ad6e8020752b4851484807a09d1936))

# [1.15.0](https://github.com/AthosCommerce/snap/compare/v1.14.0...v1.15.0) (2026-10-30)

### Bug Fixes

- **searchcontroller:** bugfix for single result redirect when banners are in result set ([a7881f6](https://github.com/AthosCommerce/snap/commit/a7881f63d518bb37227a36c3121ac1f09bd5874f))

# [1.14.0](https://github.com/AthosCommerce/snap/compare/v1.13.2...v1.14.0) (2026-10-14)

**Note:** Version bump only for package @athoscommerce/snap-controller

## [1.13.2](https://github.com/AthosCommerce/snap/compare/v1.13.1...v1.13.2) (2026-09-23)

**Note:** Version bump only for package @athoscommerce/snap-controller

## [1.13.1](https://github.com/AthosCommerce/snap/compare/v1.13.0...v1.13.1) (2026-09-18)

**Note:** Version bump only for package @athoscommerce/snap-controller

# [1.13.0](https://github.com/AthosCommerce/snap/compare/v1.12.0...v1.13.0) (2026-09-17)

### Features

- **currency plugin:** adding shopify currency plugin, and adding currency overrides ([c29892b](https://github.com/AthosCommerce/snap/commit/c29892bec4190133521d7ff6c16b4132c4bc5719))

# [1.12.0](https://github.com/AthosCommerce/snap/compare/v1.11.0...v1.12.0) (2026-08-28)

### Bug Fixes

- finalize quickview, add impression and clickThrough tracking, docs ([d20ac64](https://github.com/AthosCommerce/snap/commit/d20ac64e58f179f434e5e85d39a31247e3e6a04e))
- initial quickview ([1fd8a0c](https://github.com/AthosCommerce/snap/commit/1fd8a0cf787ab24d6e5980e7c22b173df678aaca))
- pr review ([4fb4efe](https://github.com/AthosCommerce/snap/commit/4fb4efe01bbf738f9af7ea69b18a0d8cecc3759f))
- quickview initial pr feedback ([cf98107](https://github.com/AthosCommerce/snap/commit/cf98107bafe31872de2957b275a01235c46f97cd))
- quickview layout improvements, named calloutBadge, variantSelection, lang props, a11y ([9c7d19c](https://github.com/AthosCommerce/snap/commit/9c7d19c0a54126fa2de316077ce993cfc70ded9e))

### Features

- initial quickview ([b89cc1a](https://github.com/AthosCommerce/snap/commit/b89cc1a9f1998b1f08bd2dca0460a4ecf113d9e4))

# [1.11.0](https://github.com/AthosCommerce/snap/compare/v1.10.0...v1.11.0) (2026-08-18)

### Features

- **tabbedsearch:** adding tabbed search ([226af09](https://github.com/AthosCommerce/snap/commit/226af09a3b8512f7aaa259512e05a45545e12546))

# [1.10.0](https://github.com/AthosCommerce/snap/compare/v1.9.1...v1.10.0) (2026-07-31)

### Performance Improvements

- **build:** skip type-check and declaration emit on cjs pass, remove redundant theme aggregate checks ([53db26c](https://github.com/AthosCommerce/snap/commit/53db26c6e99956bb720030d2002cadaeaa65a6cf))
- **test:** halve Jest CI time and make npm test the full-suite entry point ([7c9a3e9](https://github.com/AthosCommerce/snap/commit/7c9a3e94ed49e5b8c73a9e86aa7ad18ff5ab4e11))

## [1.9.1](https://github.com/AthosCommerce/snap/compare/v1.9.0...v1.9.1) (2026-07-23)

**Note:** Version bump only for package @athoscommerce/snap-controller

# [1.9.0](https://github.com/AthosCommerce/snap/compare/v1.8.0...v1.9.0) (2026-07-20)

**Note:** Version bump only for package @athoscommerce/snap-controller

# [1.8.0](https://github.com/AthosCommerce/snap/compare/v1.7.0...v1.8.0) (2026-07-13)

### Bug Fixes

- **controller:** ensuring that addToCart is async and can be awaited ([17c417f](https://github.com/AthosCommerce/snap/commit/17c417f9f7fbc7e03879e154ef31be3bfdf7b0b5))

# [1.7.0](https://github.com/AthosCommerce/snap/compare/v1.6.0...v1.7.0) (2026-06-11)

**Note:** Version bump only for package @athoscommerce/snap-controller

# [1.6.0](https://github.com/AthosCommerce/snap/compare/v1.5.1...v1.6.0) (2026-06-03)

### Features

- **snaptemplates:** adding spots in the config for you to pass controller config settings and globals ([b914c03](https://github.com/AthosCommerce/snap/commit/b914c0391af7a0566453b9d41fa97432ae7f635c))

## [1.5.1](https://github.com/AthosCommerce/snap/compare/v1.5.0...v1.5.1) (2026-05-28)

**Note:** Version bump only for package @athoscommerce/snap-controller

# [1.5.0](https://github.com/AthosCommerce/snap/compare/v1.4.0...v1.5.0) (2026-05-11)

**Note:** Version bump only for package @athoscommerce/snap-controller

# [1.4.0](https://github.com/AthosCommerce/snap/compare/v1.3.0...v1.4.0) (2026-05-05)

### Features

- **toolbox:** moving StorageStore to toolbox, but preserving the export from mobx-store ([800fe9a](https://github.com/AthosCommerce/snap/commit/800fe9a13a49296ec7d4b1c548bc03e633a79d96))

# [1.3.0](https://github.com/AthosCommerce/snap/compare/v1.2.2...v1.3.0) (2026-04-29)

### Bug Fixes

- **controllers:** updating all controller addtocart track methods to use display. and fix broken ac parentid ([3006732](https://github.com/AthosCommerce/snap/commit/30067326bbff7107f5a0c2ac8f943d2776ac33b1))

## [1.2.2](https://github.com/AthosCommerce/snap/compare/v1.2.1...v1.2.2) (2026-04-22)

**Note:** Version bump only for package @athoscommerce/snap-controller

## [1.2.1](https://github.com/AthosCommerce/snap/compare/v1.2.0...v1.2.1) (2026-04-17)

### Bug Fixes

- **autocompletecontroller:** refactoring the document click ac controller code to fix a bug when input is wrapped in web component ([179d901](https://github.com/AthosCommerce/snap/commit/179d901dfe540571464852878108db035a8fa89a))

# [1.2.0](https://github.com/AthosCommerce/snap/compare/v1.1.5...v1.2.0) (2026-04-14)

### Bug Fixes

- **controller/autocomplete:** preventing additional render events from being sent to beacon on repeated searches ([ad0d632](https://github.com/AthosCommerce/snap/commit/ad0d632887173770eaaf0dfb11efc63f15b84bbd))

## [1.1.5](https://github.com/AthosCommerce/snap/compare/v1.1.4...v1.1.5) (2026-04-02)

**Note:** Version bump only for package @athoscommerce/snap-controller

## [1.1.4](https://github.com/AthosCommerce/snap/compare/v1.1.3...v1.1.4) (2026-03-05)

**Note:** Version bump only for package @athoscommerce/snap-controller

## [1.1.3](https://github.com/AthosCommerce/snap/compare/v1.1.2...v1.1.3) (2026-03-05)

**Note:** Version bump only for package @athoscommerce/snap-controller

## [1.1.2](https://github.com/AthosCommerce/snap/compare/v1.1.1...v1.1.2) (2026-03-05)

**Note:** Version bump only for package @athoscommerce/snap-controller

## [1.1.1](https://github.com/AthosCommerce/snap/compare/v1.1.0...v1.1.1) (2026-03-05)

**Note:** Version bump only for package @athoscommerce/snap-controller

# [1.1.0](https://github.com/athoscommerce/snap/compare/v1.0.0...v1.1.0) (2026-03-05)

**Note:** Version bump only for package @athoscommerce/snap-controller

# 1.0.0 (2026-03-04)
