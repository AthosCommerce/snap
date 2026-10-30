import { h } from 'preact';
import { observer } from 'mobx-react-lite';

import { Result, ResultProps } from '../src/components/Molecules/Result';
import { OverlayResult, OverlayResultProps } from '../src/components/Molecules/OverlayResult';
import { Results, ResultsProps } from '../src/components/Organisms/Results';
import { VariantSelection, VariantSelectionProps } from '../src/components/Molecules/VariantSelection';
import { Swatches, SwatchesProps } from '../src/components/Molecules/Swatches';
import { Rating, RatingProps } from '../src/components/Molecules/Rating';
import { Price, PriceProps } from '../src/components/Atoms/Price';
import { BadgePill } from '../src/components/Atoms/BadgePill';
import { BadgeRectangle } from '../src/components/Atoms/BadgeRectangle';
import { BadgeText } from '../src/components/Atoms/BadgeText';
import { Matrix, MatrixCase } from './Matrix';
import { matrixController, searchLoader } from './data';
import type { Product } from '@athoscommerce/snap-store-mobx';

export default {
	title: 'Matrix/Results',
};

// demo catalog results that exercise result features
const RESULT = {
	standard: 1, // two color variants
	sale: 15, // msrp above price
	badges: 5, // left overlay badge + callout badge
	longTitle: 10, // long name, no variants
	noVariants: 0,
};

type ResultCase = { index?: number; rated?: boolean };

// each cell gets its own controller - results are mutated (ratings) and hold variant selection state
const useResult = (cell: string, { index = RESULT.standard, rated }: ResultCase): Product | undefined => {
	const controller = matrixController(cell);
	if (!controller.store.loaded) return;

	const result = controller.store.results[index] as Product;
	if (rated && result && !result.mappings.core!.rating) {
		result.mappings.core!.rating = 4.5;
		result.mappings.core!.ratingCount = 128;
	}
	return result;
};

const ResultCell = observer(({ cell, data, props }: { cell: string; data: ResultCase; props: Partial<ResultProps> }) => {
	const result = useResult(cell, data);
	return result ? <Result {...props} result={result} controller={matrixController(cell)} /> : null;
});

const OverlayResultCell = observer(({ cell, data, props }: { cell: string; data: ResultCase; props: Partial<OverlayResultProps> }) => {
	const result = useResult(cell, data);
	return result ? <OverlayResult {...props} result={result} controller={matrixController(cell)} /> : null;
});

type ResultMatrixProps = Partial<ResultProps> & { data?: ResultCase };

const resultCases: MatrixCase<ResultMatrixProps>[] = [
	{ label: 'standard', props: {} },
	{ label: 'sale', props: { data: { index: RESULT.sale } } },
	{ label: 'badges (overlay + callout)', props: { data: { index: RESULT.badges } } },
	{ label: 'long title, no variants', props: { data: { index: RESULT.longTitle } } },
	{ label: 'truncateTitle limit=20', props: { data: { index: RESULT.longTitle }, truncateTitle: { limit: 20, append: '...' } } },
	{ label: 'hideRating=false (rated)', props: { data: { rated: true }, hideRating: false } },
	{ label: 'hideAddToCartButton=false', props: { hideAddToCartButton: false } },
	{ label: 'hideQuickviewButton=false', props: { hideQuickviewButton: false } },
	{
		label: 'everything (sale, badges, rating, both buttons)',
		props: { data: { index: RESULT.badges, rated: true }, hideRating: false, hideAddToCartButton: false, hideQuickviewButton: false },
	},
	{ props: { hideImage: true } },
	{ props: { hideTitle: true } },
	{ props: { hidePricing: true } },
	{ props: { hideBadge: true, data: { index: RESULT.badges } } },
	{ props: { hideVariantSelections: true } },
	{ props: { addToCartButtonText: 'Add This Item to Your Shopping Cart', hideAddToCartButton: false } },
];

export const ResultGrid = {
	render: () => (
		<Matrix<ResultMatrixProps>
			minWidth="230px"
			cases={resultCases}
			render={({ data = {}, ...props }, index) => <ResultCell cell={`result-grid-${index}`} data={data} props={props} />}
		/>
	),
	loaders: [searchLoader],
};

export const ResultList = {
	render: () => (
		<Matrix<ResultMatrixProps>
			minWidth="560px"
			cases={resultCases}
			render={({ data = {}, ...props }, index) => <ResultCell cell={`result-list-${index}`} data={data} props={{ ...props, layout: 'list' }} />}
		/>
	),
	loaders: [searchLoader],
};

type OverlayMatrixProps = Partial<OverlayResultProps> & { data?: ResultCase };

export const OverlayResults = {
	render: () => (
		<Matrix<OverlayMatrixProps>
			minWidth="230px"
			cases={[
				// collapsed (details slide in on hover)
				{ label: 'standard (collapsed)', props: {} },
				{ label: 'long title (collapsed)', props: { data: { index: RESULT.longTitle } } },
				// revealed - disableSlide shows the details the slide reveals
				...[
					{ label: 'standard' },
					{ label: 'sale', data: { index: RESULT.sale } },
					{ label: 'badges', data: { index: RESULT.badges } },
					{ label: 'everything', data: { index: RESULT.badges, rated: true }, hideRating: false, hideAddToCartButton: false },
					{ label: 'overlayBackground', overlayBackground: 'rgba(58, 35, 173, 0.85)' },
					{ label: 'hidePricing', hidePricing: true },
					{ label: 'hideTitle', hideTitle: true },
					{ label: 'hideVariantSelections', hideVariantSelections: true },
					{ label: 'truncateTitle limit=20', truncateTitle: { limit: 20, append: '...' }, data: { index: RESULT.longTitle } },
				].map(({ label, ...props }) => ({ label: `${label} (revealed)`, props: { ...props, disableSlide: true } as OverlayMatrixProps })),
			]}
			render={({ data = {}, ...props }, index) => <OverlayResultCell cell={`overlay-result-${index}`} data={data} props={props} />}
		/>
	),
	loaders: [searchLoader],
};

const ResultsCell = observer(({ cell, props }: { cell: string; props: Partial<ResultsProps> }) => {
	const controller = matrixController(cell);
	return controller.store.loaded ? <Results {...props} results={controller.store.results.slice(0, 8)} controller={controller} /> : null;
});

export const ResultsLayouts = {
	render: () => (
		<Matrix<ResultsProps>
			minWidth="100%"
			cases={[
				{ props: {} },
				{ props: { columns: 3 } },
				{ props: { columns: 2, rows: 1 } },
				{ props: { columns: 6, gapSize: '5px' } },
				{ props: { layout: 'list', rows: 3 } },
			]}
			render={(props, index) => <ResultsCell cell={`results-${index}`} props={props} />}
		/>
	),
	loaders: [searchLoader],
};

const VariantSelectionCell = observer(({ cell, props }: { cell: string; props: Partial<VariantSelectionProps> }) => {
	const result = useResult(cell, { index: RESULT.standard + 2 });
	const selection = result?.variants?.selections[0];
	return selection ? <VariantSelection {...props} selection={selection} /> : null;
});

export const VariantSelections = {
	render: () => (
		<Matrix<VariantSelectionProps>
			minHeight="200px"
			cases={[{ props: { type: 'dropdown' } }, { props: { type: 'list' } }, { props: { type: 'swatches' } }]}
			render={(props, index) => <VariantSelectionCell cell={`variant-selection-${index}`} props={props} />}
		/>
	),
	loaders: [searchLoader],
};

const colors = ['Red', 'Blue', 'Green', 'Orange', 'Tan', 'Pink', 'Black', 'White'];
const swatchOptions = colors.map((color) => ({ value: color, label: color }));
const unavailableOptions = colors.map((color, index) => ({ value: color, label: color, disabled: index % 3 == 0 }));
const imageOptions = [
	{ value: 'Stripe', label: 'Stripe', backgroundImageUrl: 'https://placehold.co/60x60/3a23ad/ffffff/png?text=S' },
	{ value: 'Gradient', label: 'Gradient', background: 'linear-gradient(90deg, #ff0000, #0000ff)' },
	...swatchOptions.slice(0, 4),
];

export const SwatchesTypes = {
	render: () => (
		<Matrix<SwatchesProps>
			minWidth="280px"
			cases={[
				{ props: { type: 'slideshow' } },
				{ props: { type: 'slideshow', selected: swatchOptions[1] } },
				{ props: { type: 'slideshow', hideLabels: true } },
				{ props: { type: 'slideshow', options: unavailableOptions } },
				{ props: { type: 'slideshow', options: imageOptions } },
				{ props: { type: 'slideshow', disabled: true } },
				{ props: { type: 'grid' } },
				{ props: { type: 'grid', selected: swatchOptions[1] } },
				{ props: { type: 'grid', options: unavailableOptions } },
				{ props: { type: 'grid', options: imageOptions } },
				{ props: { type: 'grid', hideLabels: true } },
			]}
			render={(props) => <Swatches options={swatchOptions} {...props} />}
		/>
	),
};

export const Ratings = {
	render: () => (
		<Matrix<RatingProps>
			minWidth="200px"
			cases={[
				{ props: { value: 4.5 } },
				{ props: { value: 4.5, count: 128 } },
				{ props: { value: 3.2, count: 7, text: 'out of 5' } },
				{ props: { value: 3.2, disablePartialFill: true } },
				{ props: { value: 0, alwaysRender: true } },
				{ props: { value: 0, count: 0, alwaysRender: true } },
				{ props: { value: 4, fullIcon: 'heart', emptyIcon: 'heart' } },
			]}
			render={(props) => <Rating value={0} {...props} />}
		/>
	),
};

export const Prices = {
	render: () => (
		<Matrix<PriceProps>
			minWidth="180px"
			cases={[
				{ props: { value: 39 } },
				{ props: { value: 44, lineThrough: true } },
				{ props: { value: 1299.99 } },
				{ props: { value: 39, showCode: true, code: 'USD' } },
			]}
			render={(props) => <Price {...props} />}
		/>
	),
};

export const Badges = {
	render: () => (
		<Matrix<{ type: string; value: string; color?: string; colorText?: string }>
			minWidth="200px"
			cases={['pill', 'rectangle', 'text'].flatMap((type) => [
				{ props: { type, value: 'Sale' } },
				{ props: { type, value: 'Free Shipping on Orders Over $50' } },
				{ props: { type, value: 'New', color: '#3a23ad', colorText: '#ffffff' } },
			])}
			render={({ type, ...props }) =>
				type == 'pill' ? (
					<BadgePill value="" {...props} />
				) : type == 'rectangle' ? (
					<BadgeRectangle value="" {...props} />
				) : (
					<BadgeText value="" {...props} />
				)
			}
		/>
	),
};
