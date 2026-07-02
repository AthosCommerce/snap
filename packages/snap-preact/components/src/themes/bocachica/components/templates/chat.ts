import type { ChatProps, ChatTemplatesLegalProps } from '../../../../components/Templates/Chat';
import { chatThemeComponentProps } from '../../../themeComponents/chat';
import { ThemeComponent } from '../../../../providers';

// Chat component props come from Template export
export const chat: ThemeComponent<'chat', ChatProps, ChatTemplatesLegalProps> = chatThemeComponentProps;
