import type { ExtendedTarget } from '../Snap';

// Chat mounts at the document level — when a target aims at <body> directly,
// give DomTargeter a child element to render into instead of stomping on body (and never hide <body>).
export function applyChatBodyInject(target: ExtendedTarget): ExtendedTarget {
	if (target.selector === 'body' && !target.inject) {
		return {
			...target,
			hideTarget: false,
			inject: {
				action: 'append',
				element: () => {
					const chatContainer = document.createElement('div');
					chatContainer.className = 'ss__chat--target';
					return chatContainer;
				},
			},
		};
	}
	return target;
}
