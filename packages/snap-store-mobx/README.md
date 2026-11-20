# Snap MobX Store

Management of Snap state using Mobx.

Although `@athoscommerce/snap-store-mobx` is published as a standalone package, it is not intended to be used directly. Internally it is a dependency of the `@athoscommerce/snap-preact` package. 

Each controller will have a store as a property. For example, the `SearchController` will have a `store` property that is an instance of the `SearchStore`.

See more information on the available stores below:
- [AbstractStore](https://github.com/athoscommerce/snap/blob/main/packages/snap-store-mobx/src/Abstract/README.md)
- [SearchStore](https://github.com/athoscommerce/snap/blob/main/packages/snap-store-mobx/src/Search/README.md)
- [AutocompleteStore](https://github.com/athoscommerce/snap/blob/main/packages/snap-store-mobx/src/Autocomplete/README.md)
- [RecommendationStore](https://github.com/athoscommerce/snap/blob/main/packages/snap-store-mobx/src/Recommendation/README.md)
- [QuickviewStore](https://github.com/athoscommerce/snap/blob/main/packages/snap-store-mobx/src/QuickView/README.md)
- [FinderStore](https://github.com/athoscommerce/snap/blob/main/packages/snap-store-mobx/src/Finder/README.md)
- [StorageStore](https://github.com/athoscommerce/snap/blob/main/packages/snap-toolbox/src/StorageStore/README.md)
- [MetaStore](https://github.com/athoscommerce/snap/blob/main/packages/snap-store-mobx/src/Meta/README.md)
- [CartStore](https://github.com/athoscommerce/snap/blob/main/packages/snap-store-mobx/src/Cart/README.md)