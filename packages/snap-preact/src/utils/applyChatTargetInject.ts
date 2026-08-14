import type { ExtendedTarget } from '../Snap';

// Chat targets never render *into* the matched element — DomTargeter would empty it
// (and hideTarget would hide it, e.g. a merchant's nav while injecting a ChatButton).
// Instead, append a dedicated container to render into and never hide the host.
// An explicit `inject` in the target config always wins.
export function applyChatTargetInject(target: ExtendedTarget): ExtendedTarget {
	if (target.inject) {
		return target;
	}
	const isBody = target.selector === 'body';
	return {
		...target,
		hideTarget: false,
		inject: {
			action: 'append',
			element: () => {
				const container = document.createElement('div');
				container.className = isBody ? 'ss__chat--target' : 'ss__chat--inline-target';
				return container;
			},
		},
	};
}
