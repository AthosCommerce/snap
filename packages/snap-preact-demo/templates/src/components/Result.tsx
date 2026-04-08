import { h } from 'preact';
import { Price, Image, OverlayBadge, CalloutBadge, Rating, ResultProps } from '@athoscommerce/snap-preact/components';
import type { SearchController } from '@athoscommerce/snap-controller';

export const CustomResult = (props: ResultProps) => {
	const { result, controller, treePath } = props;
	const core = result.mappings.core;

	return (
		<article className="ss__custom-result">
			<div className="ss__custom-result__image-wrapper">
				<a href={core?.url}>
					<OverlayBadge controller={controller as SearchController} result={result} treePath={treePath}>
						<Image treePath={treePath} src={core?.thumbnailImageUrl || ''} alt={core?.name || ''} />
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
