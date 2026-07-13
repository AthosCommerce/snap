# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.8.0](https://github.com/AthosCommerce/snap/compare/v1.7.0...v1.8.0) (2026-07-13)

### Bug Fixes

- **controller:** ensuring that addToCart is async and can be awaited ([17c417f](https://github.com/AthosCommerce/snap/commit/17c417f9f7fbc7e03879e154ef31be3bfdf7b0b5))
- **pluginshopifymarkets:** remove null productIds from list ([d0f1e9e](https://github.com/AthosCommerce/snap/commit/d0f1e9e6c02866ec4fe757523a6c491ee4058db2))
- **preact/templates:** fixing bug around siteId context variable usage ([cb35148](https://github.com/AthosCommerce/snap/commit/cb351481a147fd5a55bfb77f72c361fe95ca1027))
- **snaptemplates:** fix ([1ceadbd](https://github.com/AthosCommerce/snap/commit/1ceadbd66e4fb0806e370aea8b15738eb8f7afbb))
- **templates:** adding auto-retarget by default for Snap Templates ([2199a57](https://github.com/AthosCommerce/snap/commit/2199a57cea38b5f8527f2f42367bc60c0d65e138))

### Features

- **markets plugin:** adding a new shopify markets plugin ([c09cdb9](https://github.com/AthosCommerce/snap/commit/c09cdb9cb197f5bf968fba2698bd26a2758b057e))
- **pluginshopifymarketspricing:** adding plugin for shopify markets pricing ([19483e5](https://github.com/AthosCommerce/snap/commit/19483e5961df4e55094ac4d6df924c94485137dc))
- **preact/templates:** adding globalResultComponent configuration for convenience ([bdee4ae](https://github.com/AthosCommerce/snap/commit/bdee4ae856c2477a5d6b2b6331882eec56946e5f))

# [1.7.0](https://github.com/AthosCommerce/snap/compare/v1.6.0...v1.7.0) (2026-06-11)

### Bug Fixes

- **carousel:** navigation arrows can be turned off by navigation false prop ([e5cf848](https://github.com/AthosCommerce/snap/commit/e5cf84810e472d620af3f21a583a87cfde13f781))
- **mergeprops:** bugfix for activebreakpoint being responsive ([e742763](https://github.com/AthosCommerce/snap/commit/e742763b74d548daccdea9c5c264911c545e03d8))
- **result:** bugfix for result component infinite rerender when using customComponent of itself ([7d41c98](https://github.com/AthosCommerce/snap/commit/7d41c987a2aa80b5164e42e5327f1d81a7cec37c))
- **result:** bugfix to not render a 0 if there are no selections.length ([55cb565](https://github.com/AthosCommerce/snap/commit/55cb565039c6284d38001db3f3e43f4abfb48aac))
- **searchresponse transform:** reverting transform change made previously ([9d9e84c](https://github.com/AthosCommerce/snap/commit/9d9e84c140cf84e0f19342dde3130a2d6ecba6bf))
- **usecomponent:** big refactor to useComponent usage across all component ([acefb7e](https://github.com/AthosCommerce/snap/commit/acefb7e4cf7258a73feca83fd90ae7f3ec66d161))
- **uselayoutoptions:** bugfix for useLayoutOptions only being called on certain breakpoints, and removing the hook on others breaking hook order ([74dca83](https://github.com/AthosCommerce/snap/commit/74dca83df50afb461039f948aa38c3924deab109))
- **validate-config:** bugfix for es lint rule to allow for snap provided result component names ([9015e83](https://github.com/AthosCommerce/snap/commit/9015e83977b9204ebcd7b512c095d35529b3d234))

### Features

- **autocompletelayout:** adding an additional prebuilt layout for tablet, and docs and tests for all prebuilt layouts ([505675b](https://github.com/AthosCommerce/snap/commit/505675b13e100b07c61da381983bba2bbbd6d4b2))
- **icon:** adding a new prop to icon to directly render a passed in svg ([582ebb0](https://github.com/AthosCommerce/snap/commit/582ebb0e9f00e537e1371bd8b723983f63f56b0d))
- **overlayresult:** new result component overlayResult ([eef6914](https://github.com/AthosCommerce/snap/commit/eef6914e27caa77e8cff88d8edc1b6d86af122cc))
- **results:** adding new prop to disable inline Banners ([ead5628](https://github.com/AthosCommerce/snap/commit/ead56287ac068a349c9e07fbc164da78f5ff75bb))

# [1.6.0](https://github.com/AthosCommerce/snap/compare/v1.5.1...v1.6.0) (2026-06-03)

### Bug Fixes

- **facet:** bugfix for searchable facet input clear button onclick ([c2c217f](https://github.com/AthosCommerce/snap/commit/c2c217f474efefc68f707caed2bafcdedac21702))
- **grid:** any instance of colord isDark usage was not working as expected ([9ef4051](https://github.com/AthosCommerce/snap/commit/9ef405143a6c598e68a3230aaa2ee9561705cab0))
- **layoutselector-pike:** removing hardcoded ccp prop values that block usage of props ([2a12b15](https://github.com/AthosCommerce/snap/commit/2a12b15197698bbec5f5d14c7f8e4db02f27086c))
- **mergeprops:** add support for numeric component names and use in treepath and ccp ([a406211](https://github.com/AthosCommerce/snap/commit/a406211f970557ef04a4bba4756581a2168c05e3))
- **pike-checkbox:** bugfix for pike checkbox to use prop colors ([c1d2d77](https://github.com/AthosCommerce/snap/commit/c1d2d77e6c45542598d4ab238d712da26884bef6))
- **uselayoutoptions:** bugfix for defining layoutoptions on a breakpoint ([5cb7a9f](https://github.com/AthosCommerce/snap/commit/5cb7a9f64acb786d2ebbfe096182365ee3865f56))

### Features

- **snaptemplates:** adding spots in the config for you to pass controller config settings and globals ([b914c03](https://github.com/AthosCommerce/snap/commit/b914c0391af7a0566453b9d41fa97432ae7f635c))

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
