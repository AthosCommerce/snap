# Manual Tracking 🛠️

These events need to be wired up manually, since they're events Snap has no way to detect without explicit instrumentation. For events that are already tracked out of the box, see [Automatic Tracking](./snap-tracking-automatic).

### Product Add To Cart
Tracks product add to cart events. It is recommended to invoke on each product `onClick` event via the `controller.addToCart()` method available on all controller types.

`controller.addToCart()` returns a Promise that settles after add-to-cart middleware has completed (it will reject if middleware cancels or throws). This makes it safe to run post-cart actions after a successful `await`.

```tsx
controller.store.results.map(result => {
	const { core } = result.mappings;
	const handleAddToCart = async () => {
		await controller.addToCart(result);
		// optional: open cart drawer or redirect after cart middleware finishes
	};

	return (
		<div>
			<a href={core.url} onMouseDown={(e)=> controller.track.product.click(e, result) }>
				{core.name}
			</a>
			<button onClick={handleAddToCart}>Add to cart</button>
		</div>
	)
})
```

---

>[!IMPORTANT]
> The remaining events below rely on beacon data that is tracked outside of the main integration code. To ensure accurate reporting, these tracking events should be implemented on the relevant pages. Note that these tracking methods require the `bundle.js` script to be present on any page where they are used.

>[!TIP]
>If you are unable to render the contents in the DOM due to caching or other limitations, you can instead call the corresponding tracking method directly using the global `window.athos.tracker` object.


### Shopper Login
Identifies the logged-in user. Should be invoked if a user is logged into their account. The value should contain any unique identifier (ie. user ID, email, hash)


- (Recommended) using the `shopper.id` context variable on the main `/bundle.js` script.

```html
<script src="https://snapui.athoscommerce.io/[your_site_id]/bundle.js" id="athos-context">
	shopper = {
		id: '[REPLACE WITH LOGGED IN SHOPPER ID]'
	};
</script>
```

- (Alternative) using the global `athos.tracker.track.shopper.login` method.

```js
athos.tracker.events.shopper.login({
	data: {
		id: '[REPLACE WITH LOGGED IN SHOPPER ID]'
	}
});
```

### Currency
Defines the currency of the shopper. This is not required if the storefront is configured to use a single currency. The value should be an ISO 4217 currency code.

- (Recommended) using the `currency` context variable on the main `/bundle.js` script.

```html
<script src="https://snapui.athoscommerce.io/[your_site_id]/bundle.js" id="athos-context">
	currency = {
		code: 'EUR'
	};
</script>
```

- (Alternative) using the global `athos.tracker.setCurrency` method.

```js
athos.tracker.setCurrency({
	code: 'EUR'
})
```


### Product View
Tracks product page views. Should only be installed on product detail pages. A `parentId` and `uid` are required while `sku` is optional.

```js
athos.tracker.events.product.pageView({
	data: {
		result: {
			parentId: 'product123',
			uid: 'product123_red',
			sku: 'product123_red',
		}
	}
});
```

### Order Transaction
Tracks order transaction. Should be invoked from an order confirmation page. Expects an object with the following:

| Option | Type | Required | Description |
|-----------|------|----------|-------------|
| `orderId` | string | ✔️ | Order ID |
| `transactionTotal` | number | ✔️ | Transaction total of all products before tax and shipping |
| `total` | number | ✔️ | Transaction total of all products after tax and shipping |
| `vat` | number | ➖ | Value added tax rate |
| `city` | string | ➖ | City name |
| `state` | string | ➖ | 2 digit state abbreviation (US only) |
| `country` | string | ➖ | 2 digit country abbreviation (e.g., 'US', 'CA', 'MX', 'PL', 'JP') |
| `results[].parentId` | string | ✔️ | Parent Product ID |
| `results[].uid` | string | ✔️ | Product UID |
| `results[].sku` | string | ➖ | Product SKU |
| `results[].qty` | number | ➖ | Product quantity |
| `results[].price` | number | ➖ | Product price |

```js
athos.tracker.events.order.transaction({
	data: {
		orderId: '123456',
		transactionTotal: 31.97,
		total: 34.21,
		vat: 0.07,
		city: 'Los Angeles',
		state: 'CA',
		country: 'US',
		results: [
			{
				parentId: 'product123',
				uid: 'product123_red',
				sku: 'product123_red',
				qty: '1',
				price: '9.99'
			},
			{
				parentId: 'product_456',
				uid: 'product_456_blue',
				sku: 'product_456_blue',
				qty: '2',
				price: '10.99'
			}
		]
	}
});
```

### Cart Contents

Cart contents can be tracked one of two ways. The first method is to invoke the `cart.add` and `cart.remove` events directly. The second method is to define the cart contents via the `shopper.cart` context variable.

#### (Recommended) Invoking cart add and remove events

This requires integrating into platform cart events or manually attaching click handlers to add/remove buttons.

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| `results` | array | ✔️ | Array of products being added or removed from the cart |
| `cart` | array | ✔️ | Array of products currently in the cart (state after products have been added/removed) |
| `(results \| cart)[].parentId` | string | ✔️ | Parent Product ID |
| `(results \| cart)[].uid` | string | ✔️ | Product UID |
| `(results \| cart)[].sku` | string | ➖ | Product SKU |
| `(results \| cart)[].qty` | number | ➖ | Product quantity |
| `(results \| cart)[].price` | number | ➖ | Product price |

```js
athos.tracker.events.cart.add({
	data: {
		results: [
			{
				parentId: 'product123',
				uid: 'product123_red',
				sku: 'product123_red',
				qty: '1',
				price: '9.99'
			}
		],
		cart: [
			{
				parentId: 'product_456',
				uid: 'product_456_blue',
				sku: 'product_456_blue',
				qty: '1',
				price: '9.99'
			}
		]
	}
});
```

```js
athos.tracker.events.cart.remove({
	data: {
		results: [
			{
				parentId: 'product123',
				uid: 'product123_red',
				sku: 'product123_red',
				qty: '1',
				price: '9.99'
			}
		],
		cart: []
	}
});
```

#### (Alternative) Defining cart contents via the `shopper.cart` context variable

This method will compare the provided cart contents with the current cart contents stored in local storage and only send events if there are differences.

```html
<script src="https://snapui.athoscommerce.io/[your_site_id]/bundle.js" id="athos-context">
	shopper = {
		id: '[REPLACE WITH LOGGED IN SHOPPER ID]',
		cart: [
			{
				parentId: 'product123',
				uid: 'product123_red',
				sku: 'product123_red',
				price: 99.99,
				qty: 1
			}
		]
	};
	currency = {
		code: 'EUR'
	};
</script>
```


### Cart Attribute Tracking

This is not required if the above `Cart Contents` and `Order Transaction` tracking has not been implemented OR you are not using the `realtime` recommendations configuration.

Adding the following attributes to clickable cart elements allows for real-time updates to any recommendations (disabled by default) when the cart changes. If the click event occurs on a nested element, the attribute data will attempt to be retrieved from up to 3 parent nodes.

>[!NOTE]
>If you are using multiple custom Tracker instances with a different tracker `config.id`, attributes are namespaced by the tracker's `id` (Default: `'track'`, Example: `ss-track-cart-add`)

#### Add to cart
Adds product identifier to `ssCartProducts` cookie. Supports multiple products using a comma delimiter. It is preferable to use the more specific variant `uid` or `sku` instead of `parentId` when available.

```html
<button ss-track-cart-add='product123_red'>Add to cart</button>
```

```html
<button ss-track-cart-add='product123_red,product_456_blue'>Add to cart</button>
```

Alternatively, this can also be integrated using the `athos.tracker.cookies.cart.add` method

```js
athos.tracker.cookies.cart.add(['product123'])
```


#### Remove from cart
Removes product identifier from `ssCartProducts` cookie. Supports multiple products using a comma delimiter. It is preferable to use the more specific variant `uid` or `sku` instead of `parentId` when available.

```html
<button ss-track-cart-remove='product123_red'>Remove</button>
```

```html
<button ss-track-cart-remove='product123_red,product_456_blue'>Remove</button>
```

Alternatively, this can also be integrated using the `athos.tracker.cookies.cart.remove` method

```js
athos.tracker.cookies.cart.remove(['product123'])
```


#### Clear cart
Clears all products currently stored in the `ssCartProducts` cookie.

```html
<button ss-track-cart-clear>Clear Cart</button>
```

Alternatively, this can also be integrated using the `athos.tracker.cookies.cart.clear` method

```js
athos.tracker.cookies.cart.clear()
```

#### View cart
Allows for real-time updates to any recommendations when an element with this attribute is clicked.

```html
<button ss-track-cart-view>View Cart</button>
```

---
## Troubleshooting FAQ ❓

**Q: My `Order Transaction` or `Product View` event isn't showing up in reporting. Why?**
<br>
**A:** Confirm the `bundle.js` script is actually present on that page — these events are invoked outside the main integration code and require it to reach `window.athos.tracker`. Also confirm the event is only fired once per page load (e.g. not re-fired on every re-render of an order confirmation page).

**Q: I set the `shopper.cart` context variable, but no cart events are firing. Why?**
<br>
**A:** This method only sends events when it detects a difference between the provided cart contents and what's already stored in local storage — if the values match, nothing fires. Confirm the object is valid (a common mistake is a missing comma between `id` and `cart` in the context script block).

**Q: My `Cart Attribute Tracking` buttons aren't triggering real-time recommendation updates. Why?**
<br>
**A:** Confirm you're using the `realtime` recommendations configuration — Cart Attribute Tracking only matters if that's enabled. Also confirm the attribute is on the clickable element itself (or within 3 parent nodes of it), and that it's namespaced correctly if you're running multiple custom Tracker instances with a non-default `config.id`.
