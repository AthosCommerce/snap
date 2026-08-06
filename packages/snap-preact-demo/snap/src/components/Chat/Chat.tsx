import { h } from 'preact';
import { observer } from 'mobx-react-lite';

import {
	ThemeProvider,
	defaultTheme,
	StoreProvider,
	ControllerProvider,
	SnapProvider,
	Chat as LibraryChat,
} from '@athoscommerce/snap-preact/components';
import type { Snap } from '@athoscommerce/snap-preact';
import { ChatController } from '@athoscommerce/snap-controller';

type ChatProps = {
	controller: ChatController;
	snap: Snap;
};

export const Chat = observer(({ controller, snap }: ChatProps) => {
	const store = controller.store;
	const theme = snap?.templates?.themes.local.global.theme;

	return (
		<SnapProvider snap={snap}>
			<ControllerProvider controller={controller}>
				<ThemeProvider theme={theme || defaultTheme}>
					<StoreProvider store={store}>
						<LibraryChat controller={controller} />
					</StoreProvider>
				</ThemeProvider>
			</ControllerProvider>
		</SnapProvider>
	);
});

export default Chat;
