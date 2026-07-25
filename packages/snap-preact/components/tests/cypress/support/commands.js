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
		// Minimum settle before the controller is handed back - see the demo package's copy of this
		// command. Resolving as soon as the store loads is not safe, because specs assert on things
		// that are only ready after render. Matches the original floor (200ms delay + one 200ms poll).
		settle: 400,
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
