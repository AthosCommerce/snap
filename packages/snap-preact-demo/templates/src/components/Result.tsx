import { h } from 'preact';
import { Icon, Price, Image, OverlayBadge, CalloutBadge, Rating, ResultProps } from '@athoscommerce/snap-preact/components';
import type { SearchController, AutocompleteController, RecommendationController, ChatController } from '@athoscommerce/snap-controller';

const openChatProductQuery = (result: any, controller?: SearchController | AutocompleteController | RecommendationController | ChatController) => {
	const options = { requestType: 'productQuery' };
	window.athos.fire('chat/open/discussProduct', { result, options });
	if (controller?.type === 'autocomplete') {
		(controller as AutocompleteController).setFocused();
	}
};
const openChatProductSimilar = (result: any, controller?: SearchController | AutocompleteController | RecommendationController | ChatController) => {
	const options = { requestType: 'productSimilar' };
	window.athos.fire('chat/open/discussProduct', { result, options });
	if (controller?.type === 'autocomplete') {
		(controller as AutocompleteController).setFocused();
	}
};

export const CustomResult = (props: ResultProps) => {
	const { result, controller, treePath } = props;
	const core = result.mappings.core;
	const isChatEnabled = !!window?.athos?.controller?.chat;

	return (
		<article className="ss__custom-result">
			<div className="ss__custom-result__image-wrapper" style={{ position: 'relative' }}>
				<a href={core?.url}>
					<OverlayBadge controller={controller as SearchController} result={result} treePath={treePath}>
						<Image treePath={treePath} src={core?.thumbnailImageUrl || ''} alt={core?.name || ''} />
						{isChatEnabled && (
							<>
								<span
									onClick={(e) => {
										e.preventDefault();
										e.stopPropagation();
										openChatProductQuery(result, controller);
									}}
									style={{ position: 'absolute', bottom: '0px', left: '0px', cursor: 'pointer' }}
								>
									<Icon icon={'chat'} title={'Ask about this product'} />
								</span>
								<span
									onClick={(e) => {
										e.preventDefault();
										e.stopPropagation();
										openChatProductSimilar(result, controller);
									}}
									style={{ position: 'absolute', bottom: '0px', left: '20px', cursor: 'pointer' }}
								>
									<Icon icon={'similar'} title={'Find similar products'} />
								</span>
							</>
						)}
					</OverlayBadge>
				</a>
			</div>
			<div className="ss__custom-result__details">
				<div className="ss__custom-result__details__title">
					<a
						href={core?.url}
						dangerouslySetInnerHTML={{
							__html: core?.name || '',
						}}
					/>
				</div>

				<div className="ss__custom-result__details__pricing">
					{core?.price && core?.msrp && core?.price < core?.msrp ? (
						<>
							<Price value={core?.msrp} lineThrough={true} treePath={treePath} />
							<Price value={core?.price} treePath={treePath} />
						</>
					) : (
						<Price value={core?.price} treePath={treePath} />
					)}
				</div>
				<Rating value={4.35} count={70} treePath={treePath} />

				<CalloutBadge result={result} treePath={treePath}></CalloutBadge>
			</div>
		</article>
	);
};
