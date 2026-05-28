# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.5.1](https://github.com/AthosCommerce/snap/compare/v1.5.0...v1.5.1) (2026-05-28)

### Bug Fixes

- **searchinput:** fixing the ability to turn off input buttons by adding new props ([d855b26](https://github.com/AthosCommerce/snap/commit/d855b26e061e2ff125d6f6c64f9e3a4d3ae54a7f))
- **store-mobx/searchresultstore:** adding guard on variant.options iteration ([6acff9e](https://github.com/AthosCommerce/snap/commit/6acff9ea68c65c21442a30b9ae13dcd5be49b3cc))
- **templateeditorstore:** adding isValid check for colord ([f593efe](https://github.com/AthosCommerce/snap/commit/f593efedbe94c918104d1b9fbb5b244d66c09d4b))
- **theme:** adding new required type field to themes for us to identify snap templates theme from a user specified theme ([ee875d6](https://github.com/AthosCommerce/snap/commit/ee875d617b48c858195bb920e64e511fd46bbb54))
- **themecomponents:** update types to fix typescript issues ([71eae28](https://github.com/AthosCommerce/snap/commit/71eae287771c25b80cae577c1103c53c8f65bb80))
- trackingRef incorrectly setting ref for inlineBanner ([b8e8c31](https://github.com/AthosCommerce/snap/commit/b8e8c319afb50fb351e1b6db8274a4b9ac012a6e))

# [1.5.0](https://github.com/AthosCommerce/snap/compare/v1.4.0...v1.5.0) (2026-05-11)

### Bug Fixes

- add isBundle check to profile store ([05025ff](https://github.com/AthosCommerce/snap/commit/05025ffd9334872f18b6324e720da43989461ead))
- add missing isBundle property to mock bundle profile ([8f6c8d9](https://github.com/AthosCommerce/snap/commit/8f6c8d93bd85b679338e97b038082c3689deb48c))
- **autocompletecontroller:** only re init the history of formelement change ([3739375](https://github.com/AthosCommerce/snap/commit/3739375a4442da1636ade53162fa97eae846431e))

### Features

- **preact/recommendationinstantiator:** porting over functionality from searchspring snap for SPA support ([4ce4da0](https://github.com/AthosCommerce/snap/commit/4ce4da0fe0ce0ef8808d33de0bf80d037fac85e5))

# [1.4.0](https://github.com/AthosCommerce/snap/compare/v1.3.0...v1.4.0) (2026-05-05)

### Bug Fixes

- **theme:** typing fix ([85e9741](https://github.com/AthosCommerce/snap/commit/85e974112bbec4235e058fecd22b4ff285e6bb03))
- **useacrenderedinput:** trying to solve this inconsistent document click target bug again ([b718096](https://github.com/AthosCommerce/snap/commit/b7180965c7de5b73593e2672776bd2e85e311ba9))

### Features

- **toolbox:** moving StorageStore to toolbox, but preserving the export from mobx-store ([800fe9a](https://github.com/AthosCommerce/snap/commit/800fe9a13a49296ec7d4b1c548bc03e633a79d96))

# [1.3.0](https://github.com/AthosCommerce/snap/compare/v1.2.2...v1.3.0) (2026-04-29)

### Bug Fixes

- add main branch guard for merge and patchGenerate workflows ([22b86cf](https://github.com/AthosCommerce/snap/commit/22b86cf934fafd12f51f454c12ca378bc99e7d58))
- **autocomplete:** bugfixes for ac syncInputs setting and input names for form submittion when renderInput true ([024c75c](https://github.com/AthosCommerce/snap/commit/024c75c91f57367ebd1640039a78ef35a1306235))
- **controllers:** updating all controller addtocart track methods to use display. and fix broken ac parentid ([3006732](https://github.com/AthosCommerce/snap/commit/30067326bbff7107f5a0c2ac8f943d2776ac33b1))
- rename ([4414226](https://github.com/AthosCommerce/snap/commit/4414226985e5b82514e0ac01b127a39c383d5ad8))
- **themecomponents:** tweaking themeComponents typing to patch open named component sub component overrides ([bc87c81](https://github.com/AthosCommerce/snap/commit/bc87c81d2a2b8541b0d8275ba45a7430aaa00fc6))
- **uselayoutoptions:** another bugfix for layoutOptions hook when component overrides contain raw jsx ([47e0b45](https://github.com/AthosCommerce/snap/commit/47e0b45b316f2d533dd46746740ace44138d517f))
- **uselayoutoptions:** bugfix for when layoutoption contains jsx ([72c88a2](https://github.com/AthosCommerce/snap/commit/72c88a2069f4890da8acc3f732e9066a6a9360cb))

### Features

- **preact/editor:** changes to support editor changes outside of the UI ([1b5a5dd](https://github.com/AthosCommerce/snap/commit/1b5a5dd8ada810b82181ab0fc7d3f7589ada80b5))

## [1.2.2](https://github.com/AthosCommerce/snap/compare/v1.2.1...v1.2.2) (2026-04-22)

### Bug Fixes

- double clicking ac input toggles things ([095ab5d](https://github.com/AthosCommerce/snap/commit/095ab5d56194f965ed1ae01b49874e34de8bfc80))
- remove style ([1169a49](https://github.com/AthosCommerce/snap/commit/1169a493c6dc86d5c6824360725f45ef2f204f97))
- wip ([0c36bd5](https://github.com/AthosCommerce/snap/commit/0c36bd56353b18ea34399fcf0cde44a0f0eacbed))

## [1.2.1](https://github.com/AthosCommerce/snap/compare/v1.2.0...v1.2.1) (2026-04-17)

### Bug Fixes

- **autocompletecontroller:** refactoring the document click ac controller code to fix a bug when input is wrapped in web component ([179d901](https://github.com/AthosCommerce/snap/commit/179d901dfe540571464852878108db035a8fa89a))

# [1.2.0](https://github.com/AthosCommerce/snap/compare/v1.1.5...v1.2.0) (2026-04-14)

### Bug Fixes

- **client/recommend:** adding support for rectype ([8653457](https://github.com/AthosCommerce/snap/commit/86534578f6b85a25617898c26c3853510204fc83))
- **controller/autocomplete:** preventing additional render events from being sent to beacon on repeated searches ([ad0d632](https://github.com/AthosCommerce/snap/commit/ad0d632887173770eaaf0dfb11efc63f15b84bbd))
- **mergeprops:** merge props now accounts for subprops passed that were initiated via a theme ([30ff070](https://github.com/AthosCommerce/snap/commit/30ff0707063ed853410132e4df4292d8af7e522c))
- **slideshow:** bugfix for trailing slides not showing ([e4af1c2](https://github.com/AthosCommerce/snap/commit/e4af1c28fa6b3b9a59f772ff30817b703fbbfc50))
- **slideshow:** fixing remainder of last slide bug when using slide width ([5b32af9](https://github.com/AthosCommerce/snap/commit/5b32af96db601d2e2acc9789a970e0763c85bf8d))

### Features

- **plugins:** adding the ability to use custom plugins when templates config is unlocked ([b512825](https://github.com/AthosCommerce/snap/commit/b512825f42aa47c2f4f7227df5b91e48447b6b9b))
- **slideshow:** adding a new prop sideWidth to optionally be used in place of slidestoShow ([d3228e0](https://github.com/AthosCommerce/snap/commit/d3228e06da80f71a66608883d349cf250a7ccb59))
- **templates:** lots of changes, templates custom plugins, hybrid e2e tests and other various fixes and clean up ([9065eba](https://github.com/AthosCommerce/snap/commit/9065eba2c1af433c27d6d30db94016b673022c33))

## [1.1.5](https://github.com/AthosCommerce/snap/compare/v1.1.4...v1.1.5) (2026-04-02)

### Bug Fixes

- **carousel:** bugfix for backwards compatibility with carousel and unprovided slidesPerGroup/view ([91c590f](https://github.com/AthosCommerce/snap/commit/91c590f31a1fb05ee111be1f561c3e459d05ff89))
- **icon:** fixing broken icons after stroke default color change ([c6e1200](https://github.com/AthosCommerce/snap/commit/c6e1200c25fb8418201bc9f47059588795843d01))
- **networkcache:** bugfix for networkCache and the way it handles storing large objects over max size allowed ([bfd61a6](https://github.com/AthosCommerce/snap/commit/bfd61a6fc6d105ca3067f323d366f424c2612df7))

## [1.1.4](https://github.com/AthosCommerce/snap/compare/v1.1.3...v1.1.4) (2026-03-05)

**Note:** Version bump only for package @athoscommerce/snap

## [1.1.3](https://github.com/AthosCommerce/snap/compare/v1.1.2...v1.1.3) (2026-03-05)

**Note:** Version bump only for package @athoscommerce/snap

## [1.1.2](https://github.com/AthosCommerce/snap/compare/v1.1.1...v1.1.2) (2026-03-05)

**Note:** Version bump only for package @athoscommerce/snap

## [1.1.1](https://github.com/AthosCommerce/snap/compare/v1.1.0...v1.1.1) (2026-03-05)

**Note:** Version bump only for package @athoscommerce/snap

# [1.1.0](https://github.com/AthosCommerce/snap/compare/v1.0.0...v1.1.0) (2026-03-05)

### Features

- **client:** refactored client to simplify requesters - added config for endpoints in each requester ([c2304fd](https://github.com/AthosCommerce/snap/commit/c2304fd69ed8e6b370c1fa7becc4a5e9bd9fe2e0))

# 1.0.0 (2026-03-04)
