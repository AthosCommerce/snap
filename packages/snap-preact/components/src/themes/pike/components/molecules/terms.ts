import { css } from '@emotion/react';
import type { TermsProps, TermsTemplatesLegalProps } from '../../../../components/Molecules/Terms';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Terms component
const termsStyleScript = (props: TermsProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const desktopBp = variables?.breakpoints?.desktop || custom.breakpoints.desktop;

	// shared styles
	const sharedStyles = css({
		width: '100%',
		...custom.styles.boxSizing('terms', props?.treePath, props?.name),
		'.ss__terms__title': {
			'&, h5': {
				padding: 0,
			},
			h5: {
				...custom.styles.headerText(variables?.colors?.secondary, '14px'),
				lineHeight: 1.2,
			},
		},
		'.ss__terms__options': {
			'&, .ss__terms__option': {
				listStyle: 'none',
				padding: 0,
				margin: 0,
			},
			'.ss__terms__option': {
				'&, a': {
					color: variables?.colors?.primary,
				},
				a: {
					fontSize: '14px',
					em: {
						color: variables?.colors?.text,
						fontStyle: 'normal',
						fontSize: 'inherit',
						fontWeight: 'inherit',
					},
				},
			},
			'.ss__terms__option--active': {
				'a, a em': {
					...custom.styles.activeText(variables?.colors?.primary),
				},
			},
		},
		[`${custom.utils.getBp(desktopBp)}`]: {
			'.ss__terms__title h5, .ss__terms__options .ss__terms__option a': {
				fontSize: '16px',
			},
		},
	});

	// terms horizontal styles
	const termsHorizontalStyles = css([
		sharedStyles,
		{
			'.ss__terms__title h5': {
				margin: `0 0 ${custom.spacing.x4}px 0`,
			},
			'.ss__terms__options': {
				flexFlow: 'row wrap',
				justifyContent: 'flex-start',
				gap: `${custom.spacing.x1}px ${custom.spacing.x4}px`,
				'.ss__terms__option': {
					flex: '0 1 auto',
					minWidth: '1px',
					a: {
						padding: 0,
					},
				},
			},
		},
	]);

	// terms verticl styles
	const termsVerticalStyles = css([
		sharedStyles,
		{
			'.ss__terms__title h5': {
				margin: `0 0 ${custom.spacing.x2}px 0`,
			},
			'.ss__terms__options': {
				display: 'block',
				'.ss__terms__option': {
					a: {
						padding: `${custom.spacing.x2}px 0`,
						transition: `padding-left 0.5s ease`,
						fontSize: '16px',
					},
				},
				'.ss__terms__option--active': {
					a: {
						paddingLeft: `${custom.spacing.x4}px`,
						backgroundColor: custom.colors.gray01,
					},
				},
			},
		},
	]);

	return props?.vertical ? termsVerticalStyles : termsHorizontalStyles;
};

// Terms component props
export const terms: ThemeComponent<'terms', TermsProps, TermsTemplatesLegalProps> = {
	default: {
		terms: {
			themeStyleScript: termsStyleScript,
			emIfy: true,
		},
	},
};
