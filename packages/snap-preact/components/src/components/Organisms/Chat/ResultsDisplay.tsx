import { observer } from 'mobx-react-lite';
import { Carousel, CarouselProps } from '../../Molecules/Carousel';
import { ChatResult } from './ChatResult';
import { ChatController } from '@athoscommerce/snap-controller';

export const ResultsDisplay = observer((props: ResultsDisplayProps) => {
	const { chatItem, controller, scrollToBottom } = props;
	const carouselProps: Partial<CarouselProps> = {
		breakpoints: undefined,
		slidesPerView: 2.9,
		slidesPerGroup: 1,
		loop: false,
		hideButtons: true,
		pagination: false,
		centerInsufficientSlides: false,
		freeMode: true,
	};

	if (chatItem.messageType === 'productRecommendation' && chatItem.recommendationResult?.length) {
		return (
			<>
				{chatItem.recommendationResult.map((recommendation: any, index: number) => {
					return recommendation.results?.length > 0 ? (
						<div key={index} className="ss__chat__message-text__results" style={{ width: '100%' }}>
							<Carousel {...carouselProps}>
								{recommendation.results.map((result: any) => {
									return (
										<div key={result.id} className="ss__chat__message-text__results__result">
											<ChatResult result={result} controller={controller} scrollToBottom={scrollToBottom} />
										</div>
									);
								})}
							</Carousel>
						</div>
					) : null;
				})}
			</>
		);
	}

	return chatItem.results?.length > 0 ? (
		<div className="ss__chat__message-text__results" style={{ width: '100%' }}>
			<Carousel {...carouselProps}>
				{chatItem.results.map((result: any) => {
					return (
						<div key={result.id} className="ss__chat__message-text__results__result">
							<ChatResult result={result} controller={controller} scrollToBottom={scrollToBottom} />
						</div>
					);
				})}
			</Carousel>
		</div>
	) : null;
});

export interface ResultsDisplayProps {
	chatItem: any;
	controller: ChatController;
	scrollToBottom: () => void;
}
