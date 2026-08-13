import type { ChatButtonProps, ChatButtonTemplatesLegalProps } from '../../../../components/Templates/ChatButton';
import { chatButtonThemeComponentProps } from '../../../themeComponents/chatButton';
import { ThemeComponent } from '../../../../providers';

// ChatButton component props come from Template export
export const chatButton: ThemeComponent<'chatButton', ChatButtonProps, ChatButtonTemplatesLegalProps> = chatButtonThemeComponentProps;
