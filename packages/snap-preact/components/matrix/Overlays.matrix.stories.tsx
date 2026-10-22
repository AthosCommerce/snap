import { h } from 'preact';
import { observer } from 'mobx-react-lite';

import { Modal, ModalProps } from '../src/components/Molecules/Modal';
import { Slideout, SlideoutProps } from '../src/components/Molecules/Slideout';
import { Gallery, GalleryProps } from '../src/components/Molecules/Gallery';
import { ProductDetail, ProductDetailProps } from '../src/components/Atoms/ProductDetail';
import { ProductDetailTable, ProductDetailTableProps } from '../src/components/Molecules/ProductDetailTable';
import { QuickviewModal } from '../src/components/Templates/QuickviewModal';
import { QuickviewSlideout } from '../src/components/Templates/QuickviewSlideout';
import { Matrix } from './Matrix';
import { matrixController, searchLoader } from './data';
import type { Product } from '@athoscommerce/snap-store-mobx';

export default {
	title: 'Matrix/Overlays',
};

// a sale result with badges and variants (see Results matrix)
const PRODUCT_INDEX = 15;

const displayFields = [
	{ field: 'brand', label: 'Brand' },
	{ field: 'price', label: 'Price', type: 'price' as const },
	{ field: 'msrp', label: 'Compare At', type: 'price' as const },
	{ field: 'sku', label: 'SKU' },
	{ field: 'description', label: 'A Long Label For The Product Description', type: 'html' as const },
];

const useProduct = (cell: string): Product | undefined => {
	const controller = matrixController(cell);
	if (!controller.store.loaded) return;
	const product = controller.store.results[PRODUCT_INDEX] as Product;
	product.mappings.core!.description =
		product.mappings.core!.description ||
		'<p>Lightweight, durable and easy to roll up. A grippy surface keeps you steady from warm-up to cool-down.</p>';
	return product;
};

// quickview templates read everything from a quickview manager store - mock it around a real search result
const mockQuickview = (sourceController: unknown, store: Record<string, unknown>) => ({
	type: 'quickview',
	sourceController,
	// the layout tracks product impressions through the manager
	track: { product: { impression: () => undefined, click: () => undefined } },
	store: { isOpen: true, loading: false, error: undefined, resolvedConfig: { displayFields }, close: () => undefined, ...store },
});

type QuickviewState = 'default' | 'loading' | 'error';

const QuickviewCell = observer(({ cell, template, state }: { cell: string; template: 'modal' | 'slideout'; state: QuickviewState }) => {
	const product = useProduct(cell);
	if (!product) return null;

	const manager = mockQuickview(matrixController(cell), {
		product,
		loading: state == 'loading',
		error: state == 'error' ? { message: 'Failed to display quickview' } : undefined,
	}) as any;
	return template == 'modal' ? <QuickviewModal quickviewManager={manager} /> : <QuickviewSlideout quickviewManager={manager} />;
});

// overlays are fixed to the viewport - one state per story
const quickviewStory = (template: 'modal' | 'slideout', state: QuickviewState) => ({
	render: () => <QuickviewCell cell={`quickview-${template}-${state}`} template={template} state={state} />,
	loaders: [searchLoader],
});

export const QuickviewModalDefault = quickviewStory('modal', 'default');
export const QuickviewModalLoading = quickviewStory('modal', 'loading');
export const QuickviewModalError = quickviewStory('modal', 'error');
export const QuickviewSlideoutDefault = quickviewStory('slideout', 'default');
export const QuickviewSlideoutLoading = quickviewStory('slideout', 'loading');
export const QuickviewSlideoutError = quickviewStory('slideout', 'error');

const galleryImages = [1, 2, 3, 4, 5].map((index) => `https://placehold.co/800x600/png?text=Image+${index}`);

export const GalleryMultiple = {
	render: (args: Partial<GalleryProps>) => <Gallery images={galleryImages} startIndex={1} alt="Gallery image" {...args} open={true} />,
};

export const GallerySingle = {
	render: () => <Gallery images={galleryImages.slice(0, 1)} alt="Gallery image" open={true} />,
};

export const ModalOpen = {
	render: (args: Partial<ModalProps>) => (
		<Modal {...args} button="Open Modal" startOpen={true} content="Modal content - the overlay covers the page behind it." />
	),
};

export const SlideoutOpen = {
	render: (args: Partial<SlideoutProps>) => (
		<Slideout {...args} active={true} displayAt="">
			<div>Slideout content</div>
		</Slideout>
	),
};

const ProductDetailCell = observer(({ cell, props }: { cell: string; props: Partial<ProductDetailProps> }) => {
	const product = useProduct(cell);
	return product ? <ProductDetail field="mappings.core.name" {...props} result={product} /> : null;
});

export const ProductDetails = {
	render: () => (
		<Matrix<ProductDetailProps>
			minWidth="320px"
			cases={[
				{ props: { field: 'mappings.core.name' } },
				{ props: { field: 'mappings.core.description', html: true } },
				{ props: { field: 'mappings.core.brand' } },
			]}
			render={(props, index) => <ProductDetailCell cell={`product-detail-${index}`} props={props} />}
		/>
	),
	loaders: [searchLoader],
};

const ProductDetailTableCell = observer(({ cell, props }: { cell: string; props: Partial<ProductDetailTableProps> }) => {
	const product = useProduct(cell);
	return product ? <ProductDetailTable displayFields={displayFields} {...props} result={product} /> : null;
});

export const ProductDetailTables = {
	render: () => (
		<Matrix<ProductDetailTableProps>
			minWidth="380px"
			cases={[{}, { props: { displayFields: displayFields.slice(0, 2) } }]}
			render={(props, index) => <ProductDetailTableCell cell={`product-detail-table-${index}`} props={props} />}
		/>
	),
	loaders: [searchLoader],
};
