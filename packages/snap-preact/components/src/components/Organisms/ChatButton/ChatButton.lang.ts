import { Lang } from '../../../hooks';

export interface ChatButtonLang {
	openChatButton: Lang<never>;
	closeChatButton: Lang<never>;
}

export const chatButtonDefaultLang: Partial<ChatButtonLang> = {
	openChatButton: {
		attributes: { 'aria-label': 'Open chat', title: 'Open Chat' },
	},
	closeChatButton: {
		attributes: { 'aria-label': 'Close chat', title: 'Close Chat' },
	},
};
