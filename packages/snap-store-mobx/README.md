# Snap MobX Store

Management of Snap state using Mobx.

Although `@athoscommerce/snap-store-mobx` is published as a standalone package, it is not intended to be used directly. Internally it is a dependency of the `@athoscommerce/snap-preact` package. 

Each controller will have a store as a property. For example, the `SearchController` will have a `store` property that is an instance of the `SearchStore`.

See more information on the available stores below:
- [AbstractStore](https://athoscommerce.github.io/snap/reference-store-abstract)
- [SearchStore](https://athoscommerce.github.io/snap/reference-store-search)
- [AutocompleteStore](https://athoscommerce.github.io/snap/reference-store-autocomplete)
- [RecommendationStore](https://athoscommerce.github.io/snap/reference-store-recommendation)
- [QuickviewStore](https://athoscommerce.github.io/snap/reference-store-quickview)
- [FinderStore](https://athoscommerce.github.io/snap/reference-store-finder)
- [StorageStore](https://athoscommerce.github.io/snap/reference-store-storage)
- [MetaStore](https://athoscommerce.github.io/snap/reference-store-meta)
- [CartStore](https://athoscommerce.github.io/snap/reference-store-cart)