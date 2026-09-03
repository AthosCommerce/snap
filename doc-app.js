marked.use(markedAlert());
import('./docs/documents.js').then(function (_) {
	const documents = _.default;
	const replaces = flattenDocumentLinks(documents)
		.filter((link) => link.type === 'markdown')
		.map((link) => {
			return { a: `(https://athoscommerce.github.io/snap${link.route}`, b: `(.${link.route}` };
		})
		.flat()
		.concat([
			{ a: '(https://github.com/athoscommerce/snap/tree/main/packages/snap-store-mobx/src/Search)', b: '(./reference-store-search)' },
			{ a: '(https://github.com/athoscommerce/snap/tree/main/packages/snap-store-mobx/src/Autocomplete)', b: '(./reference-store-autocomplete)' },
			{ a: '(https://github.com/athoscommerce/snap/tree/main/packages/snap-store-mobx/src/Recommendation)', b: '(./reference-store-recommendation)' },
			{ a: '(https://github.com/athoscommerce/snap/tree/main/packages/snap-store-mobx/src/Finder)', b: '(./reference-store-finder)' },
			{ a: '(https://github.com/athoscommerce/snap/tree/main/packages/snap-store-mobx/src/Storage)', b: '(./reference-store-storage)' },
			{ a: '(https://github.com/athoscommerce/snap/tree/main/packages/snap-store-mobx/src/Abstract)', b: '(./reference-store-abstract)' },
			{ a: '(https://github.com/athoscommerce/snap/tree/main/packages/snap-store-mobx/src/Cart)', b: '(./reference-store-cart)' },
			{ a: '(https://github.com/athoscommerce/snap/tree/main/packages/snap-store-mobx/src/Meta)', b: '(./reference-store-meta)' },
			{ a: '(https://github.com/athoscommerce/snap/tree/main/packages/snap-controller/src/Search)', b: '(./reference-controller-search)' },
			{
				a: '(https://github.com/athoscommerce/snap/tree/main/packages/snap-controller/src/Autocomplete)',
				b: '(./reference-controller-autocomplete)',
			},
			{ a: '(https://github.com/athoscommerce/snap/tree/main/packages/snap-controller/src/Finder)', b: '(./reference-controller-finder)' },
			{
				a: '(https://github.com/athoscommerce/snap/tree/main/packages/snap-controller/src/Recommendation)',
				b: '(./reference-controller-recommendation)',
			},
			{ a: '(https://github.com/athoscommerce/snap/tree/main/packages/snap-url-manager)', b: '(./reference-url-manager)' },
			{ a: '(https://github.com/athoscommerce/snap/tree/main/packages/snap-event-manager)', b: '(./reference-event-manager)' },
			{ a: '(https://github.com/athoscommerce/snap/tree/main/packages/snap-logger)', b: '(./reference-logger)' },
			{ a: '(https://github.com/athoscommerce/snap/tree/main/packages/snap-tracker)', b: '(./reference-tracker)' },
			{ a: '(https://github.com/athoscommerce/snap/tree/main/docs/SNAP_TRACKING.md)', b: '(./snap-tracking)' },
			{ a: '(https://github.com/athoscommerce/snap/tree/main/docs/SNAP_TRACKING.md#', b: '(./snap-tracking#' },
			{
				a: '(https://github.com/athoscommerce/snap/tree/main/docs/SNAP_TRACKING.md#cart-attribute-tracking)',
				b: '(./snap-tracking#cart-attribute-tracking)',
			},
			{ a: '(https://github.com/athoscommerce/snap/tree/main/packages/snap-client)', b: '(./snap-client)' },
			{
				a: '(https://github.com/athoscommerce/snap/tree/main/packages/snap-url-manager/src/Translators)',
				b: '(./reference-url-manager-translators)',
			},
			{
				a: '(https://github.com/athoscommerce/snap/tree/main/packages/snap-url-manager/src/Translators/Url)',
				b: '(./reference-snap-preact-url-translator)',
			},
			{
				a: '(https://github.com/athoscommerce/snap/tree/main/packages/snap-url-manager/src/Translators/QueryString)',
				b: '(./reference-url-manager-query-string-translator)',
			},
			{
				a: '(https://github.com/athoscommerce/snap/tree/main/packages/snap-url-manager/src/linkers/react)',
				b: '(./reference-url-manager-react-linker)',
			},
			{
				a: '(https://github.com/athoscommerce/snap/tree/main/docs/REFERENCE_CONFIGURATION_MIDDLEWARE.md)',
				b: '(./reference-snap-preact-middleware)',
			},
			{ a: '(https://github.com/athoscommerce/snap/tree/main/docs/REFERENCE_VARIANTS.md)', b: '(./reference-variants)' },
			{ a: '(https://github.com/athoscommerce/snap/tree/main/packages/snap-preact/components)', b: '(./preact-components)' },
			{ a: '(https://athoscommerce.github.io/snap/preact-components)', b: '(./preact-components)' },
			{ a: '(https://athoscommerce.github.io/snap/preact-components?params=', b: '(./preact-components?params=' },

			{ a: '(https://github.com/athoscommerce/snap/tree/main/packages/snap-platforms/common)', b: '(./package-platforms-common)' },

			{ a: '(https://github.com/athoscommerce/snap/tree/main/packages/snap-platforms/shopify)', b: '(./reference-platforms-shopify)' },
			{ a: '(https://github.com/athoscommerce/snap/tree/main/packages/snap-platforms/magento2)', b: '(./reference-platforms-magento2)' },
			{ a: '(https://github.com/athoscommerce/snap/tree/main/packages/snap-platforms/bigcommerce)', b: '(./reference-platforms-bigcommerce)' },

			{ a: '(https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_THEMING.md)', b: '(./templates-theming)' },

			{ a: '(https://github.com/athoscommerce/snap/blob/main/docs/INTEGRATION_VARIANTS.md)', b: '(./reference-variants)' },
			{ a: '(https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_ABOUT.md)', b: '(./templates-about)' },

			{ a: '(TEMPLATES_CONFIG.md)', b: '(./templates-config)' },
			{ a: '(TEMPLATES_LOCALIZATION.md#', b: '(./templates-localization#' },
			{ a: '(TEMPLATES_HOW_TO.md#', b: '(./templates-how-tos#' },
		]);

	const modifyLinks = (markdown) => {
		replaces.forEach(function (replace) {
			markdown = markdown.replaceAll(replace.a, replace.b);
		});
		return markdown;
	};
	const App = {
		data() {
			return {
				documents,
				darkMode: localStorage.getItem('darkMode') === 'true',
				latestVersion: null,
				showVersionModal: false,
				versionCommandCopied: false,
			};
		},
		mounted() {
			if (this.darkMode) {
				document.body.classList.add('dark-mode');
			}

			fetch('https://registry.npmjs.org/@athoscommerce/snap-preact/latest')
				.then((response) => response.json())
				.then((data) => {
					if (!data?.version) return;
					this.latestVersion = data.version;
					if (localStorage.getItem('versionModalDismissed') !== data.version) {
						setTimeout(() => {
							this.showVersionModal = true;
						}, 2000);
					}
				})
				.catch(() => {
					// silently ignore - banner just won't show if the registry is unreachable
				});
		},
		methods: {
			toggleDarkMode() {
				this.darkMode = !this.darkMode;
				localStorage.setItem('darkMode', this.darkMode);
				if (this.darkMode) {
					document.body.classList.add('dark-mode');
				} else {
					document.body.classList.remove('dark-mode');
				}
			},
			dismissVersionModal() {
				this.showVersionModal = false;
				localStorage.setItem('versionModalDismissed', this.latestVersion);
			},
			copyVersionCommand() {
				navigator.clipboard.writeText('npm install @athoscommerce/snap-preact@latest').then(() => {
					this.versionCommandCopied = true;
					setTimeout(() => {
						this.versionCommandCopied = false;
					}, 1500);
				});
			},
		},
		computed: {
			routes() {
				const routeMap = this.documents.reduce((acc, section) => {
					section?.links?.forEach((link) => {
						if (link.route) {
							acc[link.route] = link;
						}

						link?.links?.forEach((sublink) => {
							if (sublink.route) {
								acc[sublink.route] = sublink;
							}
							if (sublink?.links) {
								sublink.links.forEach((subsublink) => {
									if (subsublink.route) {
										acc[subsublink.route] = subsublink;
									}
								});
							}
						});
					});

					return acc;
				}, {});

				return routeMap;
			},
		},
		template: `
            <div id="version-banner" v-if="latestVersion">
                <span>
                    <i class="fas fa-bolt"></i>
                    Snap is on version {{ latestVersion }} — run <code>npm install @athoscommerce/snap-preact@latest</code> to get the latest updates.
                </span>
            </div>
            <div id="app-body" :class="{ 'has-version-banner': latestVersion }">
                <Navigation :documents="documents"></Navigation>

                <div id="content-wrapper">
                    <router-view :routes="routes"></router-view>
                </div>
                <div class="theme-toggle">
                    <button @click="toggleDarkMode" :title="darkMode ? 'Switch to light mode' : 'Switch to dark mode'">
                        <i :class="darkMode ? 'fas fa-sun fa-2x' : 'fas fa-moon fa-2x'"></i>
                    </button>
                </div>
                <div id="ac-overlay"></div>
            </div>
            <div id="version-modal-overlay" v-if="showVersionModal" @click.self="dismissVersionModal">
                <div id="version-modal">
                    <button id="version-modal-close" @click="dismissVersionModal" title="Dismiss">
                        <i class="fas fa-times"></i>
                    </button>
                    <i class="fas fa-bolt"></i>
                    <h3>Snap {{ latestVersion }} is available</h3>
                    <p>Run the following to update to the latest version:</p>
                    <div class="version-modal-code-wrapper">
                        <code>npm install @athoscommerce/snap-preact@latest</code>
                        <button type="button" class="copy-code-button" :class="{ copied: versionCommandCopied }" title="Copy to clipboard" @click="copyVersionCommand">
                            <i :class="versionCommandCopied ? 'fas fa-check' : 'fas fa-copy'"></i>
                        </button>
                    </div>
                </div>
            </div>
        `,
	};

	const app = Vue.createApp(App);

	app.component('Content', {
		props: ['routes'],
		template: `
            <div id="content" :class="{ 'markdown': routeData.type === 'markdown' }">
                <iframe v-if="routeData.type == 'iframe'" :src="routeData.url" id="frame" @load="onLoad"></iframe>
                <Markdown v-else-if="routeData.type == 'markdown'" :src="routeData.url" :prev="pagination.prev" :next="pagination.next" />
                <div id="searchWrapper"></div>
            </div>
        `,
		computed: {
			currentRoute() {
				return this.$route.path;
			},
			pagination() {
				return paginateDocs(documents, this.currentRoute);
			},
			routeData() {
				const params = this.$route.query.params || '';

				if (params && this.routes[this.currentRoute] && this.routes[this.currentRoute].url && this.routes[this.currentRoute].type === 'iframe') {
					const currentiFrameSrc = document.querySelector('iframe')?.src;
					let url = currentiFrameSrc || `${this.routes[this.currentRoute].url}${params}`;
					if (params.includes('&ac')) {
						url = `${this.routes[this.currentRoute].url}${params}`;
					}
					if (url.startsWith('http') && url.includes('/packages/')) {
						url = `./packages/${url.split('/packages/')[1]}`;
					}
					return { type: 'iframe', url };
				}

				return this.routes[this.currentRoute] || { type: 'markdown', url: './docs/404.md' };
			},
		},

		methods: {
			onLoad() {
				const mutations = [];
				// Select the node that will be observed for mutations
				const targetNode = document.getElementById('frame').contentWindow.document.querySelector('title');
				if (!targetNode) return;

				// Options for the observer (which mutations to observe)
				const config = { characterData: true, attributes: true, childList: true, subtree: true };

				// Callback function to execute when mutations are observed
				const callback = function (mutationsList) {
					mutations.push(mutationsList[0]);
					if (mutationsList.length && mutations.length > 1) {
						const url = mutationsList[0].target.baseURI;
						const params = encodeURIComponent(`?${url.split('?')[1]}`);
						const currentPath = window.location.pathname; // '/components-preact'
						const newRoute = `${currentPath}?params=${params}`;
						window.history.pushState({}, '', newRoute);
					}
				};

				// Create an observer instance linked to the callback function
				const observer = new MutationObserver(callback);

				// Start observing the target node for configured mutations
				observer.observe(targetNode, config);
			},
		},
	});

	app.component('Pagination', {
		props: ['prev', 'next'],
		template: `
            <div id="pagination" v-if="prev || next">
                <router-link v-if="prev" :to="prev.route" class="pagination-link pagination-prev">
                    <i class="fas fa-arrow-left"></i>
                    <span class="pagination-text">
                        <small>Previous</small>
                        {{ prev.label }}
                    </span>
                </router-link>
                <span v-else class="pagination-spacer"></span>

                <router-link v-if="next" :to="next.route" class="pagination-link pagination-next">
                    <span class="pagination-text">
                        <small>Next</small>
                        {{ next.label }}
                    </span>
                    <i class="fas fa-arrow-right"></i>
                </router-link>
                <span v-else class="pagination-spacer"></span>
            </div>
        `,
	});

	app.component('Markdown', {
		props: ['src', 'prev', 'next'],
		template: `
            <div id="markdown">
                <div v-html="markedHTML"></div>
                <Pagination :prev="prev" :next="next" />
            </div>
        `,
		data() {
			return {
				markdown: '',
			};
		},
		watch: {
			src() {
				this.getMarkdown(this.src);
			},
		},
		computed: {
			markedHTML() {
				return marked(this.markdown).replace(/<a\s+href=['"]https:\/\/[^'"]*['"]/g, (match) => {
					// external links should open in a new tab
					return match.replace('<a ', '<a target="_blank" rel="noopener noreferrer" ');
				});
			},
		},
		created() {
			this.getMarkdown(this.src);
		},
		updated() {
			window.postRenderModifications();
		},
		methods: {
			async getMarkdown(file) {
				if (Array.isArray(file)) {
					this.markdown = '';
					const markdowns = await Promise.all(
						file.map(async (file) => {
							const response = await fetch(file);
							let text = await response.text();
							return modifyLinks(text);
						})
					);
					this.markdown = markdowns.join('\n');
				} else {
					this.markdown = '';
					const response = await fetch(file);
					let text = await response.text();
					this.iframe = '';
					this.markdown = modifyLinks(text);
				}
			},
		},
	});

	app.component('Link', {
		props: ['link', 'active'],
		template: `
            <router-link v-if="link.route && !link.hidden" :key="link.route" :to="'' + link.route" :class="{ 'active': active }">
                {{link.label}}
            </router-link>
    
            <a v-else-if="link.type == 'external'" :href="link.url" target="_blank">
                {{link.label}}
                <i v-if="link.icon" :class="link.icon"></i>
            </a>
        `,
	});

	app.component('Navigation', {
		props: ['documents'],
		components: ['Link'],
		data() {
			return {
				navVisible: window.innerWidth < 768 ? false : true,
			};
		},
		computed: {
			currentRoute() {
				return this.$route.path;
			},
		},
		methods: {
			toggleNav() {
				this.navVisible = !this.navVisible;
			},
			inRoute(link) {
				if (link?.route) {
					const includedRoutes = [link.route];

					link.links?.forEach((sublink) => {
						includedRoutes.push(sublink.route);
						if (sublink?.links) {
							sublink.links.forEach((subsublink) => includedRoutes.push(subsublink.route));
						}
					});

					return includedRoutes.includes(this.currentRoute);
				}
			},
		},
		template: `
            <div id="navigation-wrapper">
                <router-link :key="'/'" :to="'/'">
                    <div id="header">
                        <div class="logo-container">
                            <img src="./images/logo-snap.svg"/>
                        </div>
                    </div>
                </router-link>
				<span class="collapseNav" @click="toggleNav"><i class="fas fa-bars fa-2x"></i></span>
                <div id="search-container">
				</div>
                <div id="navigation" :class="{ visible: navVisible }" >
                    <div v-for="section in documents" class="section">
                        <h3>{{ section.categoryName }}</h3>
                        <ul class="links">
                            <li v-for="link in section.links" :style="link.style">
                                <Link :link="link" :active="inRoute(link)" />

                                <ul v-if="link.links && inRoute(link)" class="sublinks">
                                    <li v-for="sublink in link.links" :style="sublink.style">
                                        <Link :link="sublink" :active="inRoute(sublink)"/>
                                        <ul v-if="sublink?.links && inRoute(sublink)" class="sublinks">
                                            <li v-for="subsublink in sublink.links" :style="subsublink.style">
                                                <Link :link="subsublink" :active="inRoute(subsublink)"/>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        `,
	});

	const routes = [
		{ path: '/', component: app.component('Content') },
		{ path: '/:path', component: app.component('Content') },
		{ path: '/:pathMatch(.*)', component: app.component('Content') },
	];

	const router = VueRouter.createRouter({
		history: VueRouter.createWebHistory(window.location.hostname !== 'localhost' ? `/${window.location.pathname.split('/')[1]}/` : undefined),
		routes,
	});
	router.afterEach((to, from) => {
		if (to.path !== from.path) {
			// close navigation on mobile upon changing routes (not applicable to initial load)
			if (window.innerWidth < 768 && document.getElementById('navigation')?.classList.contains('visible')) {
				document.querySelector('.collapseNav')?.click();
			}

			// invoked here to handle removal when iframe is rendered
			document.querySelector('.legend')?.remove();
		}
	});

	app.use(router);

	app.mount('#app');

	const SCROLL_TO_HEADING_DELAY = 2000;
	const DEBOUNCE_DELAY = 100;
	window.postRenderModifications = function () {
		let headingIdsInView = [];
		let lastScrolledUp = true;
		let lastScrollY = window.scrollY;
		let hashId = window.location.hash.split('#')[1];
		let preventLegendUpdate = Boolean(hashId); // if there is a hash id, prevent the legend from updating while scrolling
		if (hashId) {
			// scroll to heading if it exists in the url
			const heading = document.getElementById(hashId);
			if (heading && createHeadingId(heading) === hashId) {
				heading.scrollIntoView({ behavior: 'smooth' });
				heading.classList.add('scrolled-to');
				window.setTimeout(function () {
					heading.classList.remove('scrolled-to');
					preventLegendUpdate = false;
				}, SCROLL_TO_HEADING_DELAY);
			} else {
				// handle redirects of old routes
				if (hashId === '/') {
					router.replace('/');
				} else if (hashId.match(/^\/components-preact/)) {
					router.replace(hashId.replace(/^\/components-preact/, '/preact-components'));
				} else if (hashId.match(/^\/integration-recommendations/)) {
					router.replace('/snap-recommendations-integration');
				} else if (hashId.match(/^\/snap-recommendations-legacy/)) {
					router.replace('/snap-recommendations-legacy');
				} else if (hashId.match(/^\/start-preact/)) {
					router.replace('/getting-started');
				} else if (hashId.match(/^\/start-preact-events/)) {
					router.replace('/reference-snap-preact-middleware');
				} else if (hashId.match(/^\/start-github/)) {
					router.replace('/build-deploy');
				} else if (hashId.match(/^\/start-setup/)) {
					router.replace('/snap-setup');
				}
			}
		}

		// highlight code blocks
		document.querySelectorAll('pre code').forEach((block) => {
			hljs.highlightElement(block);
		});

		// add copy-to-clipboard buttons to code blocks
		document.querySelectorAll('#markdown pre').forEach((pre) => {
			if (pre.querySelector('.copy-code-button')) return;

			const button = document.createElement('button');
			button.type = 'button';
			button.className = 'copy-code-button';
			button.title = 'Copy to clipboard';
			button.innerHTML = '<i class="fas fa-copy"></i>';

			button.addEventListener('click', () => {
				const code = pre.querySelector('code')?.innerText ?? pre.innerText;
				navigator.clipboard.writeText(code).then(() => {
					button.innerHTML = '<i class="fas fa-check"></i>';
					button.classList.add('copied');
					window.setTimeout(() => {
						button.innerHTML = '<i class="fas fa-copy"></i>';
						button.classList.remove('copied');
					}, 1500);
				});
			});

			pre.appendChild(button);
		});

		const handleScroll = debounce(() => {
			if (window.scrollY > lastScrollY) {
				lastScrolledUp = false;
			} else {
				lastScrolledUp = true;
			}
			lastScrollY = window.scrollY;
		}, DEBOUNCE_DELAY);

		window.addEventListener('scroll', handleScroll);

		function updateLegend(id) {
			if (preventLegendUpdate && !id) return;

			document.querySelectorAll(`.legend a`).forEach((item) => {
				item.classList.remove('active');
			});
			const activeHeadingId = id || headingIdsInView[lastScrolledUp ? 0 : headingIdsInView.length - 1];
			const legendItem = document.querySelector(`.legend a[data-id="${activeHeadingId}"]`);
			if (legendItem) {
				legendItem.classList.add('active');
			}
		}

		// update active legend item when clicked
		// setTimeout is needed to prevent the legend from updating if observer fires
		window.updateLegend = (id) => {
			router.push({ hash: '#' + id });
			document.getElementById(id).scrollIntoView({ behavior: 'instant' });
			setTimeout(() => updateLegend(id), 1);
		};

		// adds ids to headings for permalinks and handles clicks to copy to clipboard
		const headingsRaw = Array.from(document.querySelectorAll('#content h2, #content h3'));
		const headings = headingsRaw.map((heading) => {
			heading.role = 'link';
			const id = createHeadingId(heading);
			heading.id = id;
			heading.addEventListener('click', () => {
				const url = window.location.origin + window.location.pathname + '#' + id;
				navigator.clipboard.writeText(url);
				router.push({ hash: '#' + id });
				const span = document.createElement('span');
				span.textContent = 'Permalink copied!';
				span.classList.add('permalink');
				heading.prepend(span);
				window.setTimeout(function () {
					span.remove();
				}, SCROLL_TO_HEADING_DELAY);
			});
			const observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						headingIdsInView.push(entry.target.id);
					} else {
						headingIdsInView = headingIdsInView.filter((item) => item !== entry.target.id);
					}
					headingIdsInView.sort((a, b) => {
						const aIndex = headingsRaw.findIndex((h) => h.id === a);
						const bIndex = headingsRaw.findIndex((h) => h.id === b);
						return aIndex - bIndex;
					});
					updateLegend();
				});
			});
			observer.observe(heading);
			return heading;
		});

		// adds a legend to the top of the page with links to the headings
		if (headings.length) {
			const legend = document.createElement('div');
			legend.classList.add('legend');
			const title = document.querySelector('#content h1')?.textContent;
			legend.innerHTML =
				`<div class="legend-container">` +
				(title ? `<div class="legend-title">${title}</div>` : '') +
				`
						<ul>
							${headings
								.map((h) => {
									const id = h.id;
									const text = h.textContent;
									const level = h.tagName.toLowerCase();
									return `<li class="${level}" onclick="updateLegend('${id}')"><a href="javascript:void(0)" data-id="${id}" class="${
										hashId === id ? 'active' : ''
									}">${text}</a></li>`;
								})
								.join('')}
						</ul>
				</div>`;
			document.getElementById('content').prepend(legend);
			// scroll active legend item into view
			const activeLegendItem = document.querySelector('.legend a.active');
			if (activeLegendItem) {
				activeLegendItem.scrollIntoView({ behavior: 'instant' });
			}
		}
	};

	function debounce(func, wait) {
		let timeout;
		return function executedFunction(...args) {
			const later = () => {
				clearTimeout(timeout);
				func(...args);
			};
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
		};
	}

	function createHeadingId(heading) {
		return heading.id || 'id-' + heading.textContent.toLowerCase().replace(/ /g, '-');
	}
});
