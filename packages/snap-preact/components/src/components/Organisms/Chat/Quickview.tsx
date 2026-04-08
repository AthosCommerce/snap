import { Result, ResultProps } from '../../Molecules/Result';
import { Product } from '@athoscommerce/snap-store-mobx';
import { ChatController } from '@athoscommerce/snap-controller';
import { mergeProps, mergeStyles } from '../../../utilities';
import { observer } from 'mobx-react-lite';
import { css, useTheme } from '@emotion/react';
import { Theme, useTreePath } from '../../../providers';
import { ComponentProps, StyleScript } from '../../../types';

const defaultStyles: StyleScript<QuickviewProps> = () => {
	return css({
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		'.ss__chat__message-text__results__result__detail-slot__more-info-content__result-wrapper': {
			maxWidth: '80%',
		},
	});
};

export const Quickview = observer((properties: QuickviewProps): JSX.Element => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<QuickviewProps> = {
		treePath: globalTreePath,
	};

	const props = mergeProps('quickview', globalTheme, defaultProps, properties);

	const { result, controller, treePath } = props;

	const subProps: QuickviewSubProps = {
		result: {
			// global theme
			internalClassName: 'ss__quickview__result',
			hideAddToCartButton: false,
			hideRating: false,
			// component theme overrides
			theme: props.theme,
			treePath,
		},
	};

	const styling = mergeStyles<QuickviewProps>(properties, defaultStyles);

	return (
		result && (
			<div {...styling} className="ss__chat__message-text__results__result__detail-slot__more-info-content">
				<div className="ss__chat__message-text__results__result__detail-slot__more-info-content__result-wrapper">
					<Result {...subProps.result} result={result} controller={controller} />
				</div>
			</div>
		)
	);
});

interface QuickviewSubProps {
	result: Partial<ResultProps>;
}
interface QuickviewProps extends ComponentProps {
	result: Product;
	controller: ChatController;
	toggleActive?: () => void;
}
