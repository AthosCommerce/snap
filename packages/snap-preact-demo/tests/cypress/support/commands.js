// ***********************************************
// Custom Snap Cypress Commands
//
// For more comprehensive examples:
// https://on.cypress.io/custom-commands
// ***********************************************

import packageJSON from '../../../package.json';
import 'cypress-wait-until';

Cypress.Commands.add('addScript', (script) => {
	cy.document().then((doc) => {
		const scriptElem = document.createElement('script');
		scriptElem.type = 'text/javascript';
		scriptElem.src = script;
		doc.head.appendChild(scriptElem);
	});
});

Cypress.Commands.add('addScripts', (scripts = []) => {
	scripts = typeof scripts === 'string' ? [scripts] : scripts;

	if (!scripts.length) return;

	scripts.forEach((script) => {
		cy.addScript(script);
	});
});

Cypress.Commands.add('addLocalSnap', () => {
	cy.window().then((window) => {
		if (!window?.athos) {
			cy.addScript('https://localhost:3333/bundle.js');
		}
	});
});

Cypress.Commands.add('snapController', (controllerId = 'search', options) => {
	const defaultOptions = {
		// Minimum settle before the controller is handed back. Many specs use this command as a de
		// facto page settle and then assert synchronously on things that are only ready *after* the
		// store loads - theme stylescripts, targeter bindings, autocomplete input sync - so resolving
		// as soon as `loaded` flips is not safe. This matches the floor of the original implementation
		// (a 300ms delay plus one 150ms poll); shortening it fails on slower CI runners.
		settle: 450,
		delay: 0,
		timeout: Cypress.config('defaultCommandTimeout'),
		interval: 20,
	};

	const mergedOptions = { ...defaultOptions, ...options };
	const startedAt = Date.now();

	const getSettledController = (window) => {
		const controller = window.athos?.controller?.[controllerId];
		if (!controller) return;
		if (controller.store.loading) return;
		if (Date.now() - startedAt < mergedOptions.settle) return;

		return controller;
	};

	if (mergedOptions.delay) {
		cy.wait(mergedOptions.delay);
	}

	return cy
		.waitUntil(() => cy.window({ log: false }).then((window) => Boolean(getSettledController(window))), {
			timeout: mergedOptions.timeout,
			interval: mergedOptions.interval,
			errorMsg: `snapController('${controllerId}'): controller never became available or store never stopped loading`,
		})
		.then(() => cy.window({ log: false }).then((window) => getSettledController(window)));
});

Cypress.Commands.add('waitForBundle', () => {
	return cy.window().then((window) => {
		return new Cypress.Promise((resolve) => {
			const checkTimeout = 100;
			let interval = setInterval(() => {
				if (window.athos) {
					clearInterval(interval);
					resolve(window.athos);
				}
			}, checkTimeout);
		});
	});
});

Cypress.Commands.add('waitForIdle', (options) => {
	options = { timeout: 200, ...options };

	return cy.window().then((window) => {
		return new Cypress.Promise((resolve) => {
			let timeout = setTimeout(resolve, options.timeout);

			const observer = new window.PerformanceObserver(() => {
				clearTimeout(timeout);
				timeout = setTimeout(resolve, options.timeout);
			});

			observer.observe({ entryTypes: ['resource'] });
		});
	});
});

Cypress.Commands.add('waitForRecsReady', (options) => {
	const mergedOptions = { timeout: 10000, interval: 50, ...options };

	// the email pages set window.RecsReady from their own RecsReady listener, so polling the flag
	// also covers the case where the event fired before this command could attach a listener
	return cy
		.waitUntil(() => cy.window({ log: false }).then((window) => window.RecsReady === true), {
			timeout: mergedOptions.timeout,
			interval: mergedOptions.interval,
			errorMsg: 'waitForRecsReady: window.RecsReady was never set (RecsReady event did not fire)',
		})
		.then(() => cy.window({ log: false }));
});
