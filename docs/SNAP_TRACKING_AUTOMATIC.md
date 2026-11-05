# Automatic Tracking

Product clicks and impressions are tracked out of the box when using the default `Result`/Autocomplete components, and search terms are recorded by the search controller whichever components are used — nothing further to wire up. For events that require explicit instrumentation, see [Manual Tracking](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md).

### Product Click
Tracks product click events. Not required when using `withTracking` or `ResultTracker`. It is recommended to invoke on each product `onmousedown` or `onClick` event via the `controller.track.product.click()` method available on Search, Autocomplete and Recommendation controllers.

```tsx
controller.store.results.map(result => {
	const { core } = result.mappings;

	return (
		<a href={core.url} onMouseDown={(e)=> controller.track.product.click(e, result) }>
			{core.name}
		</a>
	)
})
```

### Impressions
Impression tracking occurs when products come into the viewport. It is recommended to use the `withTracking` higher-order component within custom product result cards to track impressions. Alternatively, the `ResultTracker` component can be used to track impressions as well - be aware that this component adds an additional wrapping element. 

>[!NOTE]
>This does not need to be implemented if using the default `Result` component from `@athoscommerce/snap-preact/components` or default Autocomplete component without custom result cards.

### Typical Tracking Integration Example
```tsx
import { h } from 'preact';
import { withController, withTracking } from '@athoscommerce/snap-preact/components';

const Results = withController((props) => {
	const { controller } = props;

	return (
		<div className="ss__results">
		{
			controller.store.results.map(result => {
				return (
					<CustomResult key={result.id} result={result}/>
				)
			})
		}
		</div>
	)
});


const CustomResult = withController(withTracking((props) => {
	const { trackingRef, controller, result } = props;
	const { core } = result.mappings;

	const handleAddToCart = async () => {
		await controller.addToCart(result);
	};

	return (
		<div className="ss__result" ref={trackingRef}>
			<a href={core.url}>
				{ core.name }
			</a>
			<button onClick={handleAddToCart}>Add to cart</button>
		</div>
	)
}));
```

Note that a `key` is required on the custom result component to ensure that the trackingRef is properly attached to the correct element.

### Alternative Tracking Integration Example using `ResultTracker`

```tsx
import { h } from 'preact';
import { withController, ResultTracker } from '@athoscommerce/snap-preact/components';

const Results = withController((props) => {
	const { controller } = props;

	return (
		<div className="ss__results">
			{
				controller.store.results.map(result => {
					const { core } = result.mappings;
					const handleAddToCart = async () => {
						await controller.addToCart(result);
					};

					return (
						<ResultTracker key={result.id} result={result} controller={controller}>
							<a href={core.url}>
								{ core.name }
							</a>
							<button onClick={handleAddToCart}>Add to cart</button>
						</ResultTracker>
					)
				})
			}
		</div>
	)
});
```

### Search Terms
Each search query saved to the `SearchController` history store (`controller.store.history.save`) is also recorded as a searched term, including when the history `max` setting is `0`. The controller saves the query once the `beforeSearch` middleware has passed and the request is about to be made, so cancelled searches and re-renders with unchanged parameters are not recorded. The 10 most recent terms from the past 2 weeks are stored in local storage per siteId (most recent first) and sent as the `lastSearches` personalization parameter on search, autocomplete, finder and recommendation requests. Search, autocomplete and finder requests send the terms as a comma separated list, so commas within a term are replaced with spaces. Controllers configured with a `globals.siteId` record and send the terms of that siteId.

The tracker also includes the terms of its own siteId on preflight requests, and sends a new preflight request whenever those terms change. Terms recorded for other siteIds are not included in these preflight requests; they are sent by the controllers configured with that siteId.

Setting `globals.personalization.disabled` on a search, autocomplete or finder controller only stops it from sending the terms; search controllers still record them. Recommendation controllers and preflight requests do not use this setting and still send the stored terms of their siteId.

Removing a query from the history store (`controller.store.history.remove`) also removes it from the searched terms, and resetting the history store (`controller.store.history.reset`) clears the searched terms of its siteId. Emptying or trimming the history because of the history `max` setting does not remove searched terms.

```js
// add search terms (most recent first)
athos.tracker.cookies.searched.add(['boots']);

// get search terms
athos.tracker.cookies.searched.get(); // ['boots', ...]

// remove search terms (ignores case)
athos.tracker.cookies.searched.remove(['boots']);

// clear search terms
athos.tracker.cookies.searched.clear();

// each method accepts an optional siteId (defaults to the tracker siteId)
athos.tracker.cookies.searched.add(['bottes'], 'at1234');
athos.tracker.cookies.searched.get('at1234'); // ['bottes']
```

---
## Troubleshooting FAQ

**Q: I'm using the default `Result`/Autocomplete components and don't see any tracking calls. Do I need to add anything?**
<br>
**A:** No — the default components already wire up click and impression tracking internally. You only need to build `Product Click`/`Impressions` yourself when using custom result cards.
