import type { Product } from '@athoscommerce/snap-store-mobx';
import { getVariantId } from './getVariantId';

export type BigCommerceAddToCartConfig = {
	redirect?: boolean | string;
	idFieldName?: string; // display.mappings.core.id
};

// a Storefront Cart API line item, whose ids are integers - https://docs.bigcommerce.com/docs/rest-storefront/carts/cart-items
type LineItem = {
	productId: number;
	quantity: number;
	variantId?: number;
	optionSelections?: { optionId: number; optionValue: number }[];
};

// ids arrive from the feed as strings
const toId = (value: string): number | undefined => (/^\d+$/.test(value) ? Number(value) : undefined);

export const addToCart = async (items: Product[], config?: BigCommerceAddToCartConfig) => {
	if (!items) {
		console.error('bigcommerce/addToCart: No products to add!');
		return;
	}

	const lineItems: LineItem[] = [];

	items.map((item) => {
		const core = item?.display?.mappings?.core;
		let id: string | undefined = core?.uid;

		// try to find custom field in data
		if (config?.idFieldName) {
			let level: any = item;
			config.idFieldName.split('.').map((field) => {
				if (level && level[field]) {
					level = level[field];
				} else {
					console.error(`bigcommerce/addToCart: Could not find column in item data. Please verify 'idFieldName' in the config.`);
					level = undefined;
					id = undefined;
					return;
				}
			});

			if (level && level !== item) {
				id = String(level);
			}
		}

		if (!id || !item.quantity) return;

		// a product with options in an Athos feed is identified as `{parentId}_{variantId}`
		const parentId = item.mappings?.core?.parentId ?? core?.parentId;
		const variantId = config?.idFieldName ? undefined : getVariantId({ uid: core?.uid, parentId });

		if (variantId && parentId) {
			const productId = toId(parentId);
			if (productId !== undefined) {
				lineItems.push({ productId, quantity: item.quantity, variantId: Number(variantId) });
				return;
			}
		}

		const productId = toId(id);
		if (productId === undefined) {
			console.error(`bigcommerce/addToCart: '${id}' is not a BigCommerce product id. Please verify 'idFieldName' in the config.`);
			return;
		}

		const lineItem: LineItem = {
			productId,
			quantity: item.quantity,
		};

		// feeds whose variants carry the product id identify the variant through its option selections
		const options = item.variants?.active?.options;
		if (options) {
			lineItem.optionSelections = [];
			Object.keys(options).forEach((option) => {
				const { optionId, optionValue } = options[option];
				const selectionId = optionId ? toId(optionId) : undefined;
				const selectionValue = optionValue ? toId(optionValue) : undefined;
				if (selectionId !== undefined && selectionValue !== undefined) {
					lineItem.optionSelections?.push({ optionId: selectionId, optionValue: selectionValue });
				}
			});
		}

		lineItems.push(lineItem);
	});

	if (lineItems.length) {
		const addToCartResponse = await addLineItemsToCart(lineItems);

		// do redirect (or not)
		if (config?.redirect !== false) {
			setTimeout(() => (window.location.href = typeof config?.redirect == 'string' ? config?.redirect : '/cart.php'));
		}

		return addToCartResponse;
	}
};

async function addLineItemsToCart(lineItems: LineItem[]): Promise<any> {
	try {
		const cartId = await getExistingCartId();

		// if existing cartId use it, otherwise create new cart with items
		let addToCartUrl = '/api/storefront/carts';
		if (cartId) {
			addToCartUrl = `/api/storefront/carts/${cartId}/items`;
		}

		const body = JSON.stringify({ lineItems });

		const response = await fetch(addToCartUrl, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body,
		});

		if (response.status !== 200) {
			throw new Error(`API rejected addToCart: ${response.status}`);
		}

		const responseData = await response.json();

		if (responseData?.id) {
			// cart Id should exist now.
			return responseData;
		}
	} catch (err) {
		console.error('bigcommerce/addToCart: Encountered an error!');
		console.error(err);
	}
}

async function getExistingCartId(): Promise<string | undefined> {
	try {
		const response = await fetch('/api/storefront/carts', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		});

		const responseData = await response.json();

		if (Array.isArray(responseData) && responseData.length) {
			return responseData[0].id;
		}
	} catch (err) {
		// error...
	}
}
