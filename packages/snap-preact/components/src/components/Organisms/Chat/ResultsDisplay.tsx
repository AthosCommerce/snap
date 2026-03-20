import { observer } from 'mobx-react-lite';
import { Carousel, CarouselProps } from '../../Molecules/Carousel';
import { ChatResult } from './ChatResult';
import { ChatController } from '@athoscommerce/snap-controller';

export const ResultsDisplay = observer((props: ResultsDisplayProps) => {
	const { chatItem, controller, scrollToBottom } = props;
	const carouselProps: Partial<CarouselProps> = {
		breakpoints: undefined,
		slidesPerView: 2.8,
		slidesPerGroup: 1,
		loop: false,
		hideButtons: true,
		pagination: false,
		centerInsufficientSlides: false,
		freeMode: true,
	};

	return chatItem.products?.length > 0 ? (
		<div className="ss__chat__message-text__results" style={{ width: '100%' }}>
			<Carousel {...carouselProps}>
				{chatItem.products.map((result: any) => (
					<div key={result.id} className="ss__chat__message-text__results__result">
						<ChatResult result={result} controller={controller} scrollToBottom={scrollToBottom} />
					</div>
				))}
			</Carousel>
		</div>
	) : null;
});

export interface ResultsDisplayProps {
	chatItem: any;
	controller: ChatController;
	scrollToBottom: () => void;
}
