import { applyChatTargetInject } from './applyChatTargetInject';
import type { ExtendedTarget } from '../Snap';

describe('applyChatTargetInject', () => {
	it('gives a body target an appended container and never hides body', () => {
		const target = applyChatTargetInject({ selector: 'body' } as ExtendedTarget);

		expect(target.hideTarget).toBe(false);
		expect(target.inject?.action).toBe('append');

		const container = (target.inject?.element as (target: any, element: Element) => Element)(target, document.body);
		expect(container.className).toBe('ss__chat--target');
	});

	it('gives a custom-selector target an appended inline container and never hides the host', () => {
		const target = applyChatTargetInject({ selector: '.my-nav' } as ExtendedTarget);

		expect(target.hideTarget).toBe(false);
		expect(target.inject?.action).toBe('append');

		const host = document.createElement('nav');
		const container = (target.inject?.element as (target: any, element: Element) => Element)(target, host);
		expect(container.className).toBe('ss__chat--inline-target');
	});

	it('leaves a target with an explicit inject untouched', () => {
		const element = document.createElement('div');
		const original = { selector: 'body', hideTarget: true, inject: { action: 'replace', element } } as ExtendedTarget;
		const target = applyChatTargetInject(original);

		expect(target).toBe(original);
		expect(target.hideTarget).toBe(true);
		expect(target.inject?.action).toBe('replace');
	});

	it('preserves other target properties', () => {
		const component = async () => (() => null) as any;
		const target = applyChatTargetInject({ selector: '.my-nav', autoRetarget: true, component, props: { content: 'Ask AI' } } as ExtendedTarget);

		expect(target.autoRetarget).toBe(true);
		expect(target.component).toBe(component);
		expect(target.props).toEqual({ content: 'Ask AI' });
	});
});
