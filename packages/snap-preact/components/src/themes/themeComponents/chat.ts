import { ChatProps, ChatTemplatesLegalProps } from '../../components/Templates/Chat';
import { ThemeComponent } from '../../providers';

export const chatThemeComponentProps: ThemeComponent<'chat', ChatProps, ChatTemplatesLegalProps> = {
	default: {
		chat: {
			position: 'right',
			offset: '20px',
		},
	},
	mobile: {},
	tablet: {},
	desktop: {},
};
