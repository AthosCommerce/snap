import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { observer } from 'mobx-react-lite';

import { Autocomplete as LibraryAutocomplete, ChatButton, Icon } from '@athoscommerce/snap-preact/components';
import type { Snap, SnapTemplates } from '@athoscommerce/snap-preact';
import type { ChatController } from '@athoscommerce/snap-controller';

type AutocompleteProps = {
	controller: AutocompleteController;
	snap?: Snap | SnapTemplates;
};

// replaces the default linkSlot to add a chat launcher alongside the see-more link
const LinkSlotWithChat = observer((props: any) => {
	const { search, results, pagination, filters, controller, chatController } = props;

	return (
		<div className="ss__autocomplete__content__info">
			{search?.query?.string && results?.length > 0 && (
				<a href={controller?.store?.state?.url?.href} onClick={() => controller?.setFocused && controller.setFocused()}>
					See {pagination.totalResults} {filters?.length > 0 ? 'filtered ' : ''}result{pagination.totalResults == 1 ? '' : 's'} for "
					{search.query.string}"
					<Icon icon="angle-right" />
				</a>
			)}
			{chatController && (
				<span onClick={() => controller?.setFocused && controller.setFocused()}>
					<ChatButton controller={chatController} content="Ask AI" />
				</span>
			)}
		</div>
	);
});

export const Autocomplete = observer(({ controller, snap }: AutocompleteProps) => {
	const [chatController, setChatController] = useState<ChatController | undefined>(undefined);

	useEffect(() => {
		(snap as Snap)
			?.getController('chat')
			.then((chat) => setChatController(chat as unknown as ChatController))
			.catch(() => {
				// noop
			});
	}, [snap]);

	const theme = {
		components: {
			facet: {
				limit: 5,
			},
			result: {
				discussProductIcon: { icon: 'chat' as const },
			},
		},
	};

	const breakpoints = {
		0: {
			columns: 1,
			rows: 1,
			hideHistory: true,
			hideTrending: true,
		},
		320: {
			columns: 2,
			rows: 1,
			hideFacets: true,
			vertical: true,
			hideHistory: true,
			hideTrending: true,
		},
		768: {
			columns: 3,
			rows: 1,
			layout: 'list',
		},
		1200: {
			width: 'auto',
			columns: 2,
			rows: 2,
		},
	};

	return (
		<LibraryAutocomplete
			controller={controller}
			snap={snap}
			input={controller.config.selector}
			breakpoints={breakpoints}
			theme={theme}
			linkSlot={<LinkSlotWithChat chatController={chatController} />}
		/>
	);
});
