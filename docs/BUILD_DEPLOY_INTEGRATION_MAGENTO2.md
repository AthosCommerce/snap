# Magento2 Integration

## Athos Search & Product Discovery Console Actions

### Update Field Settings

On the [Field Settings page](https://console.athoscommerce.net/data-configurations/field-settings), make sure the following fields are updated:

**For Search Only Integration:**

| Field | Type | Multi-Valued | Display |
|---|---|:---:|:---:|
| visibility | Text | , | ✓ |

**For Search and Category Integration:**

| Field | Type | Multi-Valued | Display |
|---|---|:---:|:---:|
| visibility | Text | , | ✓ |
| category_hierarchy | Text | \| | ✓ |

If settings are changed, perform an [Update Index](https://console.athoscommerce.net/data-sync).

## Add Tracking

Have the client install the [Athos Commerce Magento2 module](https://github.com/AthosCommerce/magento2-module). The module adds the Athos tracking scripts to the product detail, cart and checkout success pages, and stores the logged in customer's id for shopper tracking.

Set the "AthosCommerce Site ID" in the module's configuration, found in Magento 2 Admin > Stores > Configuration > AthosCommerce > Settings > Athoscommerce Tracking.

## Create a Category Search Page

> [!WARNING]
> Before creating this category page, ensure that the url does not already exist by going to `https://[domain]/shop.html`. If the url is active, alternative paths would be `search` or `ssearch`.

> [!NOTE]
> If this is a re-mockup (and sometimes even a re-platform), it is recommended to keep the same search page url (and query parameter) so customers do not need to create redirects. If the site was previously integrated using CMS page rather than a category search page, you should be able to proceed with the below methods. This is because CMS and category page urls can be formatted the same way.

- Magento 2 Admin > Left Navigation > Catalog > Categories > Add Subcategory.
- The category should be created wherever most categories are in the current view, which means usually you wouldn't use the "Add Root Category" button. Set the details to the following:

| Section | Option | Value |
|---|---|---|
| Currently Active | Enable Category | Yes |
| Include in Menu | No | |
| Category Name | Search Results | |
| Search Engine Optimization | Url Key | shop |
| Search Engine Optimization | Meta Title | Search Results |
| Design | Layout | 2 columns with left bar or 2 columns with right bar (but could be full width) |

- You do not need to add products to this category.
- You can preview the category by going to `https://[domain]/shop.html`.
- Go back to Magento 2 Admin > Left Navigation > Catalog > Categories. Click on the search category link to bring up the details. At the top of the page, it should say "Search Results (ID: 000000)". Note the id number as we will use it later.

## Theme Integration

Next we'll integrate Athos into the theme.

> [!NOTE]
> If possible, have the site owner enable Template Path Hints. This will make it easier to find which files need to be changed.

### Root.phtml Edits

- FTP > app > design > frontend > [theme vendor] > [theme name] > Magento_Theme > templates > root.phtml.

> [!CAUTION]
> If this file doesn't exist, find the root file of the same, make a copy, and upload it to the path above. Try looking in: vendor > magento > magento-theme > view > frontend > templates > root.phtml. Do not edit the root files directly because if the client updates Magento, this could erase the changes and break the integration.

- Add the below code at the end of the file.

#### Search Only

> [!NOTE]
> If you are only integrating Search page functionality, you can use the following snippet. Otherwise skip this section and continue below to install both search and category functionality.

- Replace `REPLACE_WITH_YOUR_SITE_ID` with the correct site id.
- Replace `000000` with the search category id that was noted when creating the category page.

```php
<?php
	// Athos script flags
	$athos_enable = true;
	
	// Initial attributes values for Athos script tag
	$athos_site_id = 'REPLACE_WITH_YOUR_SITE_ID';
	$athos_defer_config = ' defer';

	// Get data from objectManager
	$athos_object_manager = \Magento\Framework\App\ObjectManager::getInstance();
	$athos_category = $athos_object_manager->get('Magento\Framework\Registry')->registry('current_category');

	// Update defer if on search category
	if (isset($athos_category) && $athos_category->getId() == 000000) {
		$athos_defer_config = '';
	}
?>
<?php if ( $athos_enable ) : ?>
	<script src="https://snapui.athoscommerce.io/<?php echo $athos_site_id; ?>/bundle.js" id="athos-context"<?php echo $athos_defer_config; ?>></script>
<?php endif; ?>
```

#### Search and Category

- Replace `REPLACE_WITH_YOUR_SITE_ID` with the correct site id.
- Replace `000000` with the search category id that was noted when creating the category page.
- (Optional) If the category path attribute has a parent level you want to exclude, add to the `$athos_category_exclude` array.

```php
<?php
	// Athos script flags
	$athos_enable = true;
	$athos_find = '"';
	$athos_replace = '&quot;';
	
	// Initial attributes values for Athos script tag
	$athos_site_id = 'REPLACE_WITH_YOUR_SITE_ID';
	$athos_defer_config = ' defer';
	$athos_category_config = '';

	// Get data from objectManager
	$athos_object_manager = \Magento\Framework\App\ObjectManager::getInstance();
	$athos_category = $athos_object_manager->get('Magento\Framework\Registry')->registry('current_category');

	// Update details if on category
	if (isset($athos_category)) {
		$athos_category_id = $athos_category->getId();
		$athos_category_name = str_replace($athos_find, $athos_replace, $athos_category->getName());
		$athos_category_copy = $athos_category;
		$athos_category_array = array();
		$athos_category_exclude = array('Default Category', 'Root Catalog');

		// Build category path and trim characters
		while (!in_array($athos_category_copy->getName(), $athos_category_exclude)) {
			$athos_category_array[] = trim(htmlspecialchars($athos_category_copy->getName()));
			$athos_category_copy = $athos_category_copy->getParentCategory();
		}
		$athos_category_join = implode('>', array_reverse($athos_category_array));
		$athos_category_path = str_replace($athos_find, $athos_replace, $athos_category_join);

		// Update defer if on category
		$athos_defer_config = '';

		// Add category filter (but not on search category)
		if ($athos_category_id != 000000) {
			$athos_category_config = 'category = { id : "' . $athos_category_id . '", name : "' . $athos_category_name . '", path : "' . $athos_category_path . '" };';
		}
	}
?>
<?php if ( $athos_enable ) : ?>
	<script src="https://snapui.athoscommerce.io/<?php echo $athos_site_id; ?>/bundle.js" id="athos-context"<?php echo $athos_defer_config; ?>>
		<?php echo $athos_category_config; ?>
	</script>
<?php endif; ?>
```

### Body Class Name

Magento automatically adds a class based on the name of the page to the body, so there is no additional code needed to generate `category-shop` class. This class can be used for styling purposes or to target elements specifically on the search page.

## Category Page Edits

Next we'll add our target element(s) to the category page. This is where the Athos elements will be injected into, typically two elements are added for a two-column layout: one for content, and one for facets.

Targets are defined in your Snap configuration and will only be injected into if they exist on the page.

### Category Listing

- FTP > app > design > frontend > [theme vendor] > [theme name] > Magento_Catalog > templates > product > list.phtml.

> [!CAUTION]
> If this file doesn't exist, find the root file of the same, make a copy, and upload it to the path above. Try looking in: vendor > magento > magento-catalog > view > frontend > templates > list.phtml. Do not edit the root files directly because if the client updates Magento, this could erase the changes and break the integration.

- Once the correct file is found, ensure that all of your search controller targets are added to the category listing.
- Some category templates will only display sidebar or results content if products are assigned to the category. Look for conditions that may be checking for product count and adjust as needed (likely altering the product count conditional).

```php
<div id="athos-content" style="min-height: 100vh;"></div>
```

### Category Sidebar

- FTP > app > design > frontend > [theme vendor] > [theme name] > Magento_LayeredNavigation > templates > layer > view.phtml.

> [!CAUTION]
> If this file doesn't exist, find the root file of the same, make a copy, and upload it to the path above. Try looking in: vendor > magento > magento-layerednavigation > view > frontend > templates > view.phtml. Do not edit the root files directly because if the client updates Magento, this could erase the changes and break the integration.

- Once the correct file is found, ensure that all of your search controller targets are added to the category sidebar.

```php
<div id="athos-sidebar" style="min-height: 100vh;"></div>
```

## Search Form Updates

Next we'll update the search form to submit to the search results category page (ie. `/shop.html`) we created.

- FTP > app > design > frontend > [theme vendor] > [theme name] > Magento_Search > templates > form.mini.phtml.

> [!CAUTION]
> If this file doesn't exist, find the root file of the same, make a copy, and upload it to the path above. Try looking in: vendor > magento > magento-search > view > frontend > templates > form.mini.phtml. Do not edit the root files directly because if the client updates Magento, this could erase the changes and break the integration.

- Above the form, add a php flag to enable and disable Athos:

```php
<?php $athos_enable = true; ?>
```

- Create a copy of the form which you will edit and comment out the old form. This will allow us to retain Magento's default functionality for when Athos is disabled.

```php
<?php if ( $athos_enable ) : ?>
	<!-- Altered form code -->
<?php else : ?>
	<!-- Untouched form code -->
<?php endif; ?>
```

In your form copy, update the following details:

| Element | Attribute | Value |
|---|---|---|
| form | method | get |
| form | action | /shop.html |
| input[type="text"] or input[type="search"] | data-mage-init | remove attribute |
| input[type="hidden"] | | remove any hidden inputs |
| search_autocomplete | | remove element |

## Integration Code

Up until this point, we've added the Athos integration to the theme and category page.

Now we'll ensure our integration code captures the context variables and sets up the necessary configuration.

### Add Magento2 Plugin

The `@athoscommerce/snap-platforms` package provides a Magento2 base plugin. The plugin tracks the shopper id, sets the form key and uenc on `controller.store.custom.m2`, and adds the `wishlist`, `compare` and `addToCart` values used in results display to each `result.custom`.

```sh
npm install --save @athoscommerce/snap-platforms
```

```js
// src/index.js
import { pluginBase } from '@athoscommerce/snap-platforms/magento2';
```

> [!NOTE]
> Shopper id tracking relies on the Athos Commerce Magento2 module installed in [Add Tracking](#add-tracking), which stores the logged in customer's id as `shopper_id` under the `athoscommerce-tracking` section of `mage-cache-storage`. Without the module installed, the shopper id is not tracked.

See the [Magento2 platform reference](https://athoscommerce.github.io/snap/reference-platforms-magento2) for plugin configuration.

### Search Only Integration

If you are only integrating Search page functionality, follow these steps. Otherwise skip this section and continue below to install both search and category functionality.

Add code to set a visibility filter on search pages:

```js
// src/index.js

/* visibility filters */
let visibilityFilters = [];
visibilityFilters.push({
	field: 'visibility',
	value: 'Search',
	type: 'value',
	background: true,
});
```

In the search controller config object, add the `pluginBase` plugin and filters:

```js
// src/index.js
import { pluginBase } from '@athoscommerce/snap-platforms/magento2';
const snap = new Snap({
	client: {
		globals: {
			siteId: 'REPLACE_WITH_YOUR_SITE_ID',
		},
	},
	controllers: {
		search: [
			{
				config: {
					id: 'search',
					plugins: [[pluginBase]],
					settings: {
						redirects: {
							singleResult: true,
						},
					},
					globals: {
						filters: visibilityFilters,
					},
				},
				targeters: [
					{
						selector: '#athos-content',
						component: async () => {
							return (await import('./components/Content')).Content;
						},
					},
				],
			},
		],
		autocomplete: [
			{
				config: {
					id: 'autocomplete',
					plugins: [[pluginBase]],
					globals: {
						filters: visibilityFilters,
						pagination: {
							pageSize: 6,
						},
					},
				},
			},
		],
	},
});
```

### Search and Category Integration

If integrating on search and category pages, follow these steps.

Back in `src/index.js`, adjust context to grab additional values for category integration:

```js
// src/index.js
/* context from script tag */
import { getContext } from '@athoscommerce/snap-toolbox';
const context = getContext(['category']);
```

Below this, add code to support background filters on a `search` controller. As a best practice, we use `category_hierarchy` as it contains a unique, hierarchal path for the category.

> [!CAUTION]
> The background filter will almost always be `category_hierarchy`, but there are times when we create a custom field such as `ss_category` or `ss_category_hierarchy`. The background filter should match the category facet if there is one set. If you do need to update, be sure to change the below code to set the background filter on that field instead.

```js
// src/index.js

/* background filters */
let backgroundFilters = [];
let visibilityFilters = [];

if (context.category?.path) {
	// set background filter
	backgroundFilters.push({
		field: 'category_hierarchy',
		value: context.category.path.replace(/\&quot\;/g, '"'),
		type: 'value',
		background: true,
	});

	// add visibility filters for category
	visibilityFilters.push({
		field: 'visibility',
		value: 'Catalog',
		type: 'value',
		background: true,
	});
} else {
	// add visibility filters for search
	visibilityFilters.push({
		field: 'visibility',
		value: 'Search',
		type: 'value',
		background: true,
	});
}
```

To attach the `backgroundFilters` and `visibilityFilters` to a `search` controller, they need to be added into a `globals` config:

```js
// src/index.js
import { pluginBase } from '@athoscommerce/snap-platforms/magento2';
const snap = new Snap({
	client: {
		globals: {
			siteId: 'REPLACE_WITH_YOUR_SITE_ID',
		},
	},
	controllers: {
		search: [
			{
				config: {
					id: 'search',
					plugins: [[pluginBase]],
					settings: {
						redirects: {
							singleResult: true,
						},
					},
					globals: {
						filters: visibilityFilters.concat(backgroundFilters),
					},
				},
				targeters: [
					{
						selector: '#athos-content',
						component: async () => {
							return (await import('./components/Content')).Content;
						},
					},
				],
			},
		],
		autocomplete: [
			{
				config: {
					id: 'autocomplete',
					plugins: [[pluginBase]],
					globals: {
						filters: visibilityFilters,
						pagination: {
							pageSize: 6,
						},
					},
				},
			},
		],
	},
});
```

> [!NOTE]
> In the above code, we concat `visibilityFilters` and `backgroundFilters` to the search controller. The autocomplete controller only needs a background filter on visibility.

## Additional Targets (Optional)

In addition to having two targets for a two-column layout, you may want to inject content into other sections of the page such above the content and sidebar to display information such as the search query. Note the addition of `category-shop` class before `athos-header` to ensure the content is only injected on the search page.

```js
// src/index.js
targeters: [
	{
		selector: '#athos-content',
		component: async () => {
			return (await import('./components/Content')).Content;
		},
		hideTarget: true,
	},
	{
		selector: '#athos-sidebar',
		component: async () => {
			return (await import('./components/Sidebar')).Sidebar;
		},
		hideTarget: true,
	},
	{
		selector: '.category-shop #athos-header',
		component: async () => {
			return (await import('./content/header/Header')).Header;
		},
		hideTarget: true,
	},
],
```
