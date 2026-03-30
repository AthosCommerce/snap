import { h } from 'preact';
import { css } from '@emotion/react';
import { observer } from 'mobx-react-lite';

import type { RecommendationController } from '@athoscommerce/snap-controller';
import type { Product } from '@athoscommerce/snap-store-mobx';
import classnames from 'classnames';
import { Result, ResultProps } from '../../Molecules/Result';
import { cloneWithProps, defined, mergeProps, mergeStyles } from '../../../utilities';
import { Theme, ThemeComponent, useTheme, useTreePath } from '../../../providers';
import { ComponentProps, StyleScript, JSXComponent } from '../../../types';

export const recommendationEmailThemeComponentProps: ThemeComponent<
	'recommendationEmailThemeComponentProps',
	RecommendationEmailProps,
	RecommendationEmailTemplatesLegalProps
> = {
	default: {},
	mobile: {},
	tablet: {},
	desktop: {},
};

const defaultStyles: StyleScript<RecommendationEmailProps> = () => {
	return css({});
};

export const RecommendationEmail = observer((properties: RecommendationEmailProps) => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<RecommendationEmailProps> = {
		resultWidth: '240px',
		name: properties.controller?.store?.profile?.tag?.toLowerCase(),
		treePath: globalTreePath,
	};

	const props = mergeProps('recommendationEmail', globalTheme, defaultProps, properties);

	const { controller, results, resultComponent, resultProps, resultWidth, treePath, disableStyles, internalClassName, className } = props;

	const subProps: RecommendationEmailSubProps = {
		result: {
			// default props
			internalClassName: 'ss__recommendation-email__result',
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
	};

	const styling = mergeStyles<RecommendationEmailProps>(props, defaultStyles);

	const resultsToRender = results || controller?.store?.results || [];

	return resultsToRender.length > 0 ? (
		<div className={classnames('ss__recommendation-email', className, internalClassName)} {...styling}>
			{resultsToRender.map((result, idx) => (
				<div
					key={idx}
					id={`ss-emailrec${idx}`}
					className={classnames('ss__recommendation-email__result-wrapper')}
					style={{ display: 'block', width: resultWidth }}
				>
					{(() => {
						if (resultComponent) {
							return cloneWithProps(resultComponent, {
								controller,
								result,
								...resultProps,
								email: true,
								treePath,
							});
						} else {
							return (
								<Result
									result={result}
									hideBadge
									theme={{
										components: {
											image: {
												lazy: false,
											},
										},
									}}
									{...subProps.result}
									{...resultProps}
								/>
							);
						}
					})()}
				</div>
			))}
		</div>
	) : (
		<></>
	);
});

export type RecommendationEmailProps = {
	controller?: RecommendationController;
	results?: Product[];
	resultComponent?: JSXComponent | JSX.Element;
} & RecommendationEmailTemplatesLegalProps &
	ComponentProps<RecommendationEmailProps>;

export type RecommendationEmailTemplatesLegalProps = {
	resultProps?: Partial<ResultProps> | Record<string, any>;
	resultWidth?: string;
};

interface RecommendationEmailSubProps {
	result: Partial<ResultProps>;
}
