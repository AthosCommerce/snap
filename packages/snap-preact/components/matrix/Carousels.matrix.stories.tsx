import { h } from 'preact';

import { Carousel, CarouselProps } from '../src/components/Molecules/Carousel';
import { Slideshow, SlideshowProps } from '../src/components/Molecules/Slideshow';
import { Matrix } from './Matrix';

export default {
	title: 'Matrix/Carousels',
};

const tiles = Array.from(Array(10).keys()).map((index) => (
	<div
		style={{
			height: '120px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			background: index % 2 ? '#e6e1ff' : '#c4e3ff',
			font: '14px sans-serif',
		}}
	>
		Slide {index + 1}
	</div>
));

export const Carousels = {
	render: () => (
		<Matrix<CarouselProps>
			minWidth="560px"
			cases={[
				{},
				{ props: { pagination: true } },
				{ props: { scrollbar: true } },
				{ props: { pagination: true, scrollbar: true } },
				{ props: { scrollbar: { draggable: true } } },
				{ props: { hideButtons: true, pagination: true } },
				{ props: { loop: true } },
				{ props: { slidesPerView: 2 } },
				{ props: { slidesPerView: 6, spaceBetween: 5 } },
				{ props: { prevButton: 'Prev', nextButton: 'Next' } },
			]}
			render={(props) => <Carousel {...props}>{tiles}</Carousel>}
		/>
	),
};

export const CarouselVertical = {
	render: () => (
		<div style={{ height: '400px', maxWidth: '300px' }}>
			<Carousel vertical={true} pagination={true}>
				{tiles}
			</Carousel>
		</div>
	),
};

const images = Array.from(Array(8).keys()).map((index) => `https://placehold.co/400x300/png?text=Slide+${index + 1}`);

export const Slideshows = {
	render: () => (
		<Matrix<SlideshowProps>
			minWidth="560px"
			cases={[
				{},
				{ props: { slidesToShow: 3 } },
				{ props: { slidesToShow: 3, showPagination: true } },
				{ props: { slidesToShow: 3, showNavigation: false, showPagination: true } },
				{ props: { slidesToShow: 3, overlayNavigation: true } },
				{ props: { slidesToShow: 3, alwaysShowNavigation: true } },
				{ props: { slidesToShow: 3, loop: true } },
				{ props: { slidesToShow: 3, gap: 0 } },
				{ props: { slideWidth: 120 } },
				{ label: 'insufficient slides', props: { slidesToShow: 4, slides: images.slice(0, 2) } },
				{ label: 'insufficient slides, centered', props: { slidesToShow: 4, slides: images.slice(0, 2), centerInsufficientSlides: true } },
			]}
			render={(props) => <Slideshow slides={images} {...props} />}
		/>
	),
};
