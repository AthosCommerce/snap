// ***********************************************
// Custom Snap Cypress Commands
//
// For more comprehensive examples:
// https://on.cypress.io/custom-commands
// ***********************************************

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
		// Readiness is state based - there is no timing here. The controller is handed back once it
		// exists, is not searching, and (by default) has loaded. `controller.searching` is defined
		// from the moment a search is triggered - for autocomplete, from the keystroke, so it also
		// covers the input debounce - and is cleared once the search settles, after `afterStore`.
		// That makes trigger-then-read race free without the old 450ms floor: a search started by a
		// click or `url.go()` raises it synchronously, so the first poll already observes it.
		//
		// Specs that read a store which never loads - an autocomplete controller on a page where
		// nothing was typed, or a page whose bundle was removed - must pass `{ loaded: false }`,
		// otherwise this waits for a load that will never happen.
		loaded: true,
		delay: 0,
		timeout: Cypress.config('defaultCommandTimeout'),
		interval: 20,
	};

	const mergedOptions = { ...defaultOptions, ...options };

	const getSettledController = (window) => {
		const controller = window.athos?.controller?.[controllerId];
		if (!controller) return;

		// a search is underway - keep polling until it settles. `searching` is feature detected
		// because the branch override specs load a bundle built before it existed
		if (controller.store.loading || controller.searching !== undefined) return;

		if (mergedOptions.loaded && !controller.store.loaded) return;

		return controller;
	};

	if (mergedOptions.delay) {
		cy.wait(mergedOptions.delay);
	}

	// the predicate must yield an explicit falsy to retry - a cy.then returning undefined keeps
	// the previous subject (the window, truthy), which would end the wait immediately
	return cy.waitUntil(() => cy.window({ log: false }).then((window) => getSettledController(window) ?? false), {
		timeout: mergedOptions.timeout,
		interval: mergedOptions.interval,
		errorMsg: `snapController('${controllerId}'): controller never became available, or a search never settled`,
	});
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
	return cy.waitUntil(() => cy.window({ log: false }).then((window) => window.RecsReady === true && window), {
		timeout: mergedOptions.timeout,
		interval: mergedOptions.interval,
		errorMsg: 'waitForRecsReady: window.RecsReady was never set (RecsReady event did not fire)',
	});
});
