import { RecommendationEmailProps, RecommendationEmailTemplatesLegalProps } from '../../components/Templates/RecommendationEmail';
import { ThemeComponent } from '../../providers';

export const recommendationEmailThemeComponentProps: ThemeComponent<
	'recommendationEmail',
	RecommendationEmailProps,
	RecommendationEmailTemplatesLegalProps
> = {
	default: {},
	mobile: {},
	tablet: {},
	desktop: {},
};
