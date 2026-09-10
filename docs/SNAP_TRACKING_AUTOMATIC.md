# Automatic Tracking ✅

These events are tracked out of the box when using the default `Result`/Autocomplete components — nothing further to wire up. For events that require explicit instrumentation, see [Manual Tracking](./snap-tracking-manual).

### Product Click
Tracks product click events. Not required when using `withTracking` or `ResultTracker`. It is recommended to invoke on each product `onmousedown` or `onClick` event via the `controller.track.product.click()` method available on all controller types.

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
Impression tracking occurs when products come into the viewport. It is recommended to use the `withTracking` hook within custom product result cards to track impressions. Alternatively, the `ResultTracker` component can be used to track impressions as well - be aware that this component adds an additional wrapping element. 

>[!NOTE]
>This does not need to be implemented if using the default `Result` component from `@athoscommerce/snap-preact/components` or default Autocomplete component without custom result cards.

### Typical Tracking Integration Example
```tsx
import { withTracking } from '@athoscommerce/snap-preact/components';

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
import { ResultTracker } from '@athoscommerce/snap-preact/components';

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

---
## Troubleshooting FAQ ❓

**Q: I'm using the default `Result`/Autocomplete components and don't see any tracking calls. Do I need to add anything?**
<br>
**A:** No — the default components already wire up click and impression tracking internally. You only need to build `Product Click`/`Impressions` yourself when using custom result cards.
