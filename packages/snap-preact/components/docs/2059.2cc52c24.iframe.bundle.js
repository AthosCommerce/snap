'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[2059],
		{
			'../../node_modules/dequal/dist/index.mjs'(Ce, ge, ee) {
				ee.d(ge, { j: () => x });
				var L = Object.prototype.hasOwnProperty;
				function _(q, c, u) {
					for (u of q.keys()) if (x(u, c)) return u;
				}
				function x(q, c) {
					var u, f, D;
					if (q === c) return !0;
					if (q && c && (u = q.constructor) === c.constructor) {
						if (u === Date) return q.getTime() === c.getTime();
						if (u === RegExp) return q.toString() === c.toString();
						if (u === Array) {
							if ((f = q.length) === c.length) for (; f-- && x(q[f], c[f]); );
							return f === -1;
						}
						if (u === Set) {
							if (q.size !== c.size) return !1;
							for (f of q) if (((D = f), (D && typeof D == 'object' && ((D = _(c, D)), !D)) || !c.has(D))) return !1;
							return !0;
						}
						if (u === Map) {
							if (q.size !== c.size) return !1;
							for (f of q) if (((D = f[0]), (D && typeof D == 'object' && ((D = _(c, D)), !D)) || !x(f[1], c.get(D)))) return !1;
							return !0;
						}
						if (u === ArrayBuffer) (q = new Uint8Array(q)), (c = new Uint8Array(c));
						else if (u === DataView) {
							if ((f = q.byteLength) === c.byteLength) for (; f-- && q.getInt8(f) === c.getInt8(f); );
							return f === -1;
						}
						if (ArrayBuffer.isView(q)) {
							if ((f = q.byteLength) === c.byteLength) for (; f-- && q[f] === c[f]; );
							return f === -1;
						}
						if (!u || typeof q == 'object') {
							f = 0;
							for (u in q) if ((L.call(q, u) && ++f && !L.call(c, u)) || !(u in c) || !x(q[u], c[u])) return !1;
							return Object.keys(c).length === f;
						}
					}
					return q !== q && c !== c;
				}
			},
			'../../node_modules/swiper/modules/a11y.mjs'(Ce, ge, ee) {
				ee.d(ge, { A: () => x });
				var L = ee('../../node_modules/swiper/shared/classes-to-selector.mjs'),
					_ = ee('../../node_modules/swiper/shared/utils.mjs');
				function x(q) {
					let { swiper: c, extendParams: u, on: f } = q;
					u({
						a11y: {
							enabled: !0,
							notificationClass: 'swiper-notification',
							prevSlideMessage: 'Previous slide',
							nextSlideMessage: 'Next slide',
							firstSlideMessage: 'This is the first slide',
							lastSlideMessage: 'This is the last slide',
							paginationBulletMessage: 'Go to slide {{index}}',
							slideLabelMessage: '{{index}} / {{slidesLength}}',
							containerMessage: null,
							containerRoleDescriptionMessage: null,
							itemRoleDescriptionMessage: null,
							slideRole: 'group',
							id: null,
						},
					}),
						(c.a11y = { clicked: !1 });
					let D = null;
					function Q(m) {
						const h = D;
						h.length !== 0 && ((h.innerHTML = ''), (h.innerHTML = m));
					}
					function re(m) {
						m === void 0 && (m = 16);
						const h = () => Math.round(16 * Math.random()).toString(16);
						return 'x'.repeat(m).replace(/x/g, h);
					}
					function oe(m) {
						(m = (0, _.m)(m)),
							m.forEach((h) => {
								h.setAttribute('tabIndex', '0');
							});
					}
					function de(m) {
						(m = (0, _.m)(m)),
							m.forEach((h) => {
								h.setAttribute('tabIndex', '-1');
							});
					}
					function be(m, h) {
						(m = (0, _.m)(m)),
							m.forEach((C) => {
								C.setAttribute('role', h);
							});
					}
					function he(m, h) {
						(m = (0, _.m)(m)),
							m.forEach((C) => {
								C.setAttribute('aria-roledescription', h);
							});
					}
					function Se(m, h) {
						(m = (0, _.m)(m)),
							m.forEach((C) => {
								C.setAttribute('aria-controls', h);
							});
					}
					function ae(m, h) {
						(m = (0, _.m)(m)),
							m.forEach((C) => {
								C.setAttribute('aria-label', h);
							});
					}
					function ce(m, h) {
						(m = (0, _.m)(m)),
							m.forEach((C) => {
								C.setAttribute('id', h);
							});
					}
					function N(m, h) {
						(m = (0, _.m)(m)),
							m.forEach((C) => {
								C.setAttribute('aria-live', h);
							});
					}
					function W(m) {
						(m = (0, _.m)(m)),
							m.forEach((h) => {
								h.setAttribute('aria-disabled', !0);
							});
					}
					function ne(m) {
						(m = (0, _.m)(m)),
							m.forEach((h) => {
								h.setAttribute('aria-disabled', !1);
							});
					}
					function K(m) {
						if (m.keyCode !== 13 && m.keyCode !== 32) return;
						const h = c.params.a11y,
							C = m.target;
						(c.pagination &&
							c.pagination.el &&
							(C === c.pagination.el || c.pagination.el.contains(m.target)) &&
							!m.target.matches((0, L.c)(c.params.pagination.bulletClass))) ||
							(c.navigation &&
								c.navigation.nextEl &&
								C === c.navigation.nextEl &&
								((c.isEnd && !c.params.loop) || c.slideNext(), c.isEnd ? Q(h.lastSlideMessage) : Q(h.nextSlideMessage)),
							c.navigation &&
								c.navigation.prevEl &&
								C === c.navigation.prevEl &&
								((c.isBeginning && !c.params.loop) || c.slidePrev(), c.isBeginning ? Q(h.firstSlideMessage) : Q(h.prevSlideMessage)),
							c.pagination && C.matches((0, L.c)(c.params.pagination.bulletClass)) && C.click());
					}
					function v() {
						if (c.params.loop || c.params.rewind || !c.navigation) return;
						const { nextEl: m, prevEl: h } = c.navigation;
						h && (c.isBeginning ? (W(h), de(h)) : (ne(h), oe(h))), m && (c.isEnd ? (W(m), de(m)) : (ne(m), oe(m)));
					}
					function T() {
						return c.pagination && c.pagination.bullets && c.pagination.bullets.length;
					}
					function G() {
						return T() && c.params.pagination.clickable;
					}
					function te() {
						const m = c.params.a11y;
						T() &&
							c.pagination.bullets.forEach((h) => {
								c.params.pagination.clickable &&
									(oe(h),
									c.params.pagination.renderBullet || (be(h, 'button'), ae(h, m.paginationBulletMessage.replace(/\{\{index\}\}/, (0, _.h)(h) + 1)))),
									h.matches((0, L.c)(c.params.pagination.bulletActiveClass))
										? h.setAttribute('aria-current', 'true')
										: h.removeAttribute('aria-current');
							});
					}
					const S = (m, h, C) => {
							oe(m), m.tagName !== 'BUTTON' && (be(m, 'button'), m.addEventListener('keydown', K)), ae(m, C), Se(m, h);
						},
						y = () => {
							c.a11y.clicked = !0;
						},
						A = () => {
							requestAnimationFrame(() => {
								requestAnimationFrame(() => {
									c.destroyed || (c.a11y.clicked = !1);
								});
							});
						},
						P = (m) => {
							if (c.a11y.clicked) return;
							const h = m.target.closest(`.${c.params.slideClass}, swiper-slide`);
							if (!h || !c.slides.includes(h)) return;
							const C = c.slides.indexOf(h) === c.activeIndex,
								B = c.params.watchSlidesProgress && c.visibleSlides && c.visibleSlides.includes(h);
							C ||
								B ||
								(m.sourceCapabilities && m.sourceCapabilities.firesTouchEvents) ||
								(c.isHorizontal() ? (c.el.scrollLeft = 0) : (c.el.scrollTop = 0), c.slideTo(c.slides.indexOf(h), 0));
						},
						Y = () => {
							const m = c.params.a11y;
							m.itemRoleDescriptionMessage && he(c.slides, m.itemRoleDescriptionMessage), m.slideRole && be(c.slides, m.slideRole);
							const h = c.slides.length;
							m.slideLabelMessage &&
								c.slides.forEach((C, B) => {
									const X = c.params.loop ? parseInt(C.getAttribute('data-swiper-slide-index'), 10) : B,
										J = m.slideLabelMessage.replace(/\{\{index\}\}/, X + 1).replace(/\{\{slidesLength\}\}/, h);
									ae(C, J);
								});
						},
						Z = () => {
							const m = c.params.a11y;
							c.el.append(D);
							const h = c.el;
							m.containerRoleDescriptionMessage && he(h, m.containerRoleDescriptionMessage), m.containerMessage && ae(h, m.containerMessage);
							const C = c.wrapperEl,
								B = m.id || C.getAttribute('id') || `swiper-wrapper-${re(16)}`,
								X = c.params.autoplay && c.params.autoplay.enabled ? 'off' : 'polite';
							ce(C, B), N(C, X), Y();
							let { nextEl: J, prevEl: fe } = c.navigation ? c.navigation : {};
							(J = (0, _.m)(J)),
								(fe = (0, _.m)(fe)),
								J && J.forEach((pe) => S(pe, B, m.nextSlideMessage)),
								fe && fe.forEach((pe) => S(pe, B, m.prevSlideMessage)),
								G() &&
									(0, _.m)(c.pagination.el).forEach((ue) => {
										ue.addEventListener('keydown', K);
									}),
								c.el.addEventListener('focus', P, !0),
								c.el.addEventListener('pointerdown', y, !0),
								c.el.addEventListener('pointerup', A, !0);
						};
					function le() {
						D && D.remove();
						let { nextEl: m, prevEl: h } = c.navigation ? c.navigation : {};
						(m = (0, _.m)(m)),
							(h = (0, _.m)(h)),
							m && m.forEach((C) => C.removeEventListener('keydown', K)),
							h && h.forEach((C) => C.removeEventListener('keydown', K)),
							G() &&
								(0, _.m)(c.pagination.el).forEach((B) => {
									B.removeEventListener('keydown', K);
								}),
							c.el.removeEventListener('focus', P, !0),
							c.el.removeEventListener('pointerdown', y, !0),
							c.el.removeEventListener('pointerup', A, !0);
					}
					f('beforeInit', () => {
						(D = (0, _.c)('span', c.params.a11y.notificationClass)), D.setAttribute('aria-live', 'assertive'), D.setAttribute('aria-atomic', 'true');
					}),
						f('afterInit', () => {
							c.params.a11y.enabled && Z();
						}),
						f('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {
							c.params.a11y.enabled && Y();
						}),
						f('fromEdge toEdge afterInit lock unlock', () => {
							c.params.a11y.enabled && v();
						}),
						f('paginationUpdate', () => {
							c.params.a11y.enabled && te();
						}),
						f('destroy', () => {
							c.params.a11y.enabled && le();
						});
				}
			},
			'../../node_modules/swiper/modules/navigation.mjs'(Ce, ge, ee) {
				ee.d(ge, { A: () => x });
				var L = ee('../../node_modules/swiper/shared/create-element-if-not-defined.mjs'),
					_ = ee('../../node_modules/swiper/shared/utils.mjs');
				function x(q) {
					let { swiper: c, extendParams: u, on: f, emit: D } = q;
					u({
						navigation: {
							nextEl: null,
							prevEl: null,
							hideOnClick: !1,
							disabledClass: 'swiper-button-disabled',
							hiddenClass: 'swiper-button-hidden',
							lockClass: 'swiper-button-lock',
							navigationDisabledClass: 'swiper-navigation-disabled',
						},
					}),
						(c.navigation = { nextEl: null, prevEl: null });
					function Q(N) {
						let W;
						return N && typeof N == 'string' && c.isElement && ((W = c.el.querySelector(N)), W)
							? W
							: (N &&
									(typeof N == 'string' && (W = [...document.querySelectorAll(N)]),
									c.params.uniqueNavElements &&
										typeof N == 'string' &&
										W.length > 1 &&
										c.el.querySelectorAll(N).length === 1 &&
										(W = c.el.querySelector(N))),
							  N && !W ? N : W);
					}
					function re(N, W) {
						const ne = c.params.navigation;
						(N = (0, _.m)(N)),
							N.forEach((K) => {
								K &&
									(K.classList[W ? 'add' : 'remove'](...ne.disabledClass.split(' ')),
									K.tagName === 'BUTTON' && (K.disabled = W),
									c.params.watchOverflow && c.enabled && K.classList[c.isLocked ? 'add' : 'remove'](ne.lockClass));
							});
					}
					function oe() {
						const { nextEl: N, prevEl: W } = c.navigation;
						if (c.params.loop) {
							re(W, !1), re(N, !1);
							return;
						}
						re(W, c.isBeginning && !c.params.rewind), re(N, c.isEnd && !c.params.rewind);
					}
					function de(N) {
						N.preventDefault(), !(c.isBeginning && !c.params.loop && !c.params.rewind) && (c.slidePrev(), D('navigationPrev'));
					}
					function be(N) {
						N.preventDefault(), !(c.isEnd && !c.params.loop && !c.params.rewind) && (c.slideNext(), D('navigationNext'));
					}
					function he() {
						const N = c.params.navigation;
						if (
							((c.params.navigation = (0, L.c)(c, c.originalParams.navigation, c.params.navigation, {
								nextEl: 'swiper-button-next',
								prevEl: 'swiper-button-prev',
							})),
							!(N.nextEl || N.prevEl))
						)
							return;
						let W = Q(N.nextEl),
							ne = Q(N.prevEl);
						Object.assign(c.navigation, { nextEl: W, prevEl: ne }), (W = (0, _.m)(W)), (ne = (0, _.m)(ne));
						const K = (v, T) => {
							v && v.addEventListener('click', T === 'next' ? be : de), !c.enabled && v && v.classList.add(...N.lockClass.split(' '));
						};
						W.forEach((v) => K(v, 'next')), ne.forEach((v) => K(v, 'prev'));
					}
					function Se() {
						let { nextEl: N, prevEl: W } = c.navigation;
						(N = (0, _.m)(N)), (W = (0, _.m)(W));
						const ne = (K, v) => {
							K.removeEventListener('click', v === 'next' ? be : de), K.classList.remove(...c.params.navigation.disabledClass.split(' '));
						};
						N.forEach((K) => ne(K, 'next')), W.forEach((K) => ne(K, 'prev'));
					}
					f('init', () => {
						c.params.navigation.enabled === !1 ? ce() : (he(), oe());
					}),
						f('toEdge fromEdge lock unlock', () => {
							oe();
						}),
						f('destroy', () => {
							Se();
						}),
						f('enable disable', () => {
							let { nextEl: N, prevEl: W } = c.navigation;
							if (((N = (0, _.m)(N)), (W = (0, _.m)(W)), c.enabled)) {
								oe();
								return;
							}
							[...N, ...W].filter((ne) => !!ne).forEach((ne) => ne.classList.add(c.params.navigation.lockClass));
						}),
						f('click', (N, W) => {
							let { nextEl: ne, prevEl: K } = c.navigation;
							(ne = (0, _.m)(ne)), (K = (0, _.m)(K));
							const v = W.target;
							if (c.params.navigation.hideOnClick && !K.includes(v) && !ne.includes(v)) {
								if (c.pagination && c.params.pagination && c.params.pagination.clickable && (c.pagination.el === v || c.pagination.el.contains(v)))
									return;
								let T;
								ne.length
									? (T = ne[0].classList.contains(c.params.navigation.hiddenClass))
									: K.length && (T = K[0].classList.contains(c.params.navigation.hiddenClass)),
									D(T === !0 ? 'navigationShow' : 'navigationHide'),
									[...ne, ...K].filter((G) => !!G).forEach((G) => G.classList.toggle(c.params.navigation.hiddenClass));
							}
						});
					const ae = () => {
							c.el.classList.remove(...c.params.navigation.navigationDisabledClass.split(' ')), he(), oe();
						},
						ce = () => {
							c.el.classList.add(...c.params.navigation.navigationDisabledClass.split(' ')), Se();
						};
					Object.assign(c.navigation, { enable: ae, disable: ce, update: oe, init: he, destroy: Se });
				}
			},
			'../../node_modules/swiper/modules/pagination.mjs'(Ce, ge, ee) {
				ee.d(ge, { A: () => q });
				var L = ee('../../node_modules/swiper/shared/classes-to-selector.mjs'),
					_ = ee('../../node_modules/swiper/shared/create-element-if-not-defined.mjs'),
					x = ee('../../node_modules/swiper/shared/utils.mjs');
				function q(c) {
					let { swiper: u, extendParams: f, on: D, emit: Q } = c;
					const re = 'swiper-pagination';
					f({
						pagination: {
							el: null,
							bulletElement: 'span',
							clickable: !1,
							hideOnClick: !1,
							renderBullet: null,
							renderProgressbar: null,
							renderFraction: null,
							renderCustom: null,
							progressbarOpposite: !1,
							type: 'bullets',
							dynamicBullets: !1,
							dynamicMainBullets: 1,
							formatFractionCurrent: (v) => v,
							formatFractionTotal: (v) => v,
							bulletClass: `${re}-bullet`,
							bulletActiveClass: `${re}-bullet-active`,
							modifierClass: `${re}-`,
							currentClass: `${re}-current`,
							totalClass: `${re}-total`,
							hiddenClass: `${re}-hidden`,
							progressbarFillClass: `${re}-progressbar-fill`,
							progressbarOppositeClass: `${re}-progressbar-opposite`,
							clickableClass: `${re}-clickable`,
							lockClass: `${re}-lock`,
							horizontalClass: `${re}-horizontal`,
							verticalClass: `${re}-vertical`,
							paginationDisabledClass: `${re}-disabled`,
						},
					}),
						(u.pagination = { el: null, bullets: [] });
					let oe,
						de = 0;
					function be() {
						return !u.params.pagination.el || !u.pagination.el || (Array.isArray(u.pagination.el) && u.pagination.el.length === 0);
					}
					function he(v, T) {
						const { bulletActiveClass: G } = u.params.pagination;
						v &&
							((v = v[`${T === 'prev' ? 'previous' : 'next'}ElementSibling`]),
							v &&
								(v.classList.add(`${G}-${T}`),
								(v = v[`${T === 'prev' ? 'previous' : 'next'}ElementSibling`]),
								v && v.classList.add(`${G}-${T}-${T}`)));
					}
					function Se(v) {
						const T = v.target.closest((0, L.c)(u.params.pagination.bulletClass));
						if (!T) return;
						v.preventDefault();
						const G = (0, x.h)(T) * u.params.slidesPerGroup;
						if (u.params.loop) {
							if (u.realIndex === G) return;
							u.slideToLoop(G);
						} else u.slideTo(G);
					}
					function ae() {
						const v = u.rtl,
							T = u.params.pagination;
						if (be()) return;
						let G = u.pagination.el;
						G = (0, x.m)(G);
						let te, S;
						const y = u.virtual && u.params.virtual.enabled ? u.virtual.slides.length : u.slides.length,
							A = u.params.loop ? Math.ceil(y / u.params.slidesPerGroup) : u.snapGrid.length;
						if (
							(u.params.loop
								? ((S = u.previousRealIndex || 0),
								  (te = u.params.slidesPerGroup > 1 ? Math.floor(u.realIndex / u.params.slidesPerGroup) : u.realIndex))
								: typeof u.snapIndex < 'u'
								? ((te = u.snapIndex), (S = u.previousSnapIndex))
								: ((S = u.previousIndex || 0), (te = u.activeIndex || 0)),
							T.type === 'bullets' && u.pagination.bullets && u.pagination.bullets.length > 0)
						) {
							const P = u.pagination.bullets;
							let Y, Z, le;
							if (
								(T.dynamicBullets &&
									((oe = (0, x.f)(P[0], u.isHorizontal() ? 'width' : 'height', !0)),
									G.forEach((m) => {
										m.style[u.isHorizontal() ? 'width' : 'height'] = `${oe * (T.dynamicMainBullets + 4)}px`;
									}),
									T.dynamicMainBullets > 1 &&
										S !== void 0 &&
										((de += te - (S || 0)), de > T.dynamicMainBullets - 1 ? (de = T.dynamicMainBullets - 1) : de < 0 && (de = 0)),
									(Y = Math.max(te - de, 0)),
									(Z = Y + (Math.min(P.length, T.dynamicMainBullets) - 1)),
									(le = (Z + Y) / 2)),
								P.forEach((m) => {
									const h = [...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map((C) => `${T.bulletActiveClass}${C}`)]
										.map((C) => (typeof C == 'string' && C.includes(' ') ? C.split(' ') : C))
										.flat();
									m.classList.remove(...h);
								}),
								G.length > 1)
							)
								P.forEach((m) => {
									const h = (0, x.h)(m);
									h === te ? m.classList.add(...T.bulletActiveClass.split(' ')) : u.isElement && m.setAttribute('part', 'bullet'),
										T.dynamicBullets &&
											(h >= Y && h <= Z && m.classList.add(...`${T.bulletActiveClass}-main`.split(' ')),
											h === Y && he(m, 'prev'),
											h === Z && he(m, 'next'));
								});
							else {
								const m = P[te];
								if (
									(m && m.classList.add(...T.bulletActiveClass.split(' ')),
									u.isElement &&
										P.forEach((h, C) => {
											h.setAttribute('part', C === te ? 'bullet-active' : 'bullet');
										}),
									T.dynamicBullets)
								) {
									const h = P[Y],
										C = P[Z];
									for (let B = Y; B <= Z; B += 1) P[B] && P[B].classList.add(...`${T.bulletActiveClass}-main`.split(' '));
									he(h, 'prev'), he(C, 'next');
								}
							}
							if (T.dynamicBullets) {
								const m = Math.min(P.length, T.dynamicMainBullets + 4),
									h = (oe * m - oe) / 2 - le * oe,
									C = v ? 'right' : 'left';
								P.forEach((B) => {
									B.style[u.isHorizontal() ? C : 'top'] = `${h}px`;
								});
							}
						}
						G.forEach((P, Y) => {
							if (
								(T.type === 'fraction' &&
									(P.querySelectorAll((0, L.c)(T.currentClass)).forEach((Z) => {
										Z.textContent = T.formatFractionCurrent(te + 1);
									}),
									P.querySelectorAll((0, L.c)(T.totalClass)).forEach((Z) => {
										Z.textContent = T.formatFractionTotal(A);
									})),
								T.type === 'progressbar')
							) {
								let Z;
								T.progressbarOpposite ? (Z = u.isHorizontal() ? 'vertical' : 'horizontal') : (Z = u.isHorizontal() ? 'horizontal' : 'vertical');
								const le = (te + 1) / A;
								let m = 1,
									h = 1;
								Z === 'horizontal' ? (m = le) : (h = le),
									P.querySelectorAll((0, L.c)(T.progressbarFillClass)).forEach((C) => {
										(C.style.transform = `translate3d(0,0,0) scaleX(${m}) scaleY(${h})`), (C.style.transitionDuration = `${u.params.speed}ms`);
									});
							}
							T.type === 'custom' && T.renderCustom
								? ((P.innerHTML = T.renderCustom(u, te + 1, A)), Y === 0 && Q('paginationRender', P))
								: (Y === 0 && Q('paginationRender', P), Q('paginationUpdate', P)),
								u.params.watchOverflow && u.enabled && P.classList[u.isLocked ? 'add' : 'remove'](T.lockClass);
						});
					}
					function ce() {
						const v = u.params.pagination;
						if (be()) return;
						const T =
							u.virtual && u.params.virtual.enabled
								? u.virtual.slides.length
								: u.grid && u.params.grid.rows > 1
								? u.slides.length / Math.ceil(u.params.grid.rows)
								: u.slides.length;
						let G = u.pagination.el;
						G = (0, x.m)(G);
						let te = '';
						if (v.type === 'bullets') {
							let S = u.params.loop ? Math.ceil(T / u.params.slidesPerGroup) : u.snapGrid.length;
							u.params.freeMode && u.params.freeMode.enabled && S > T && (S = T);
							for (let y = 0; y < S; y += 1)
								v.renderBullet
									? (te += v.renderBullet.call(u, y, v.bulletClass))
									: (te += `<${v.bulletElement} ${u.isElement ? 'part="bullet"' : ''} class="${v.bulletClass}"></${v.bulletElement}>`);
						}
						v.type === 'fraction' &&
							(v.renderFraction
								? (te = v.renderFraction.call(u, v.currentClass, v.totalClass))
								: (te = `<span class="${v.currentClass}"></span> / <span class="${v.totalClass}"></span>`)),
							v.type === 'progressbar' &&
								(v.renderProgressbar
									? (te = v.renderProgressbar.call(u, v.progressbarFillClass))
									: (te = `<span class="${v.progressbarFillClass}"></span>`)),
							(u.pagination.bullets = []),
							G.forEach((S) => {
								v.type !== 'custom' && (S.innerHTML = te || ''),
									v.type === 'bullets' && u.pagination.bullets.push(...S.querySelectorAll((0, L.c)(v.bulletClass)));
							}),
							v.type !== 'custom' && Q('paginationRender', G[0]);
					}
					function N() {
						u.params.pagination = (0, _.c)(u, u.originalParams.pagination, u.params.pagination, { el: 'swiper-pagination' });
						const v = u.params.pagination;
						if (!v.el) return;
						let T;
						typeof v.el == 'string' && u.isElement && (T = u.el.querySelector(v.el)),
							!T && typeof v.el == 'string' && (T = [...document.querySelectorAll(v.el)]),
							T || (T = v.el),
							!(!T || T.length === 0) &&
								(u.params.uniqueNavElements &&
									typeof v.el == 'string' &&
									Array.isArray(T) &&
									T.length > 1 &&
									((T = [...u.el.querySelectorAll(v.el)]), T.length > 1 && (T = T.filter((G) => (0, x.a)(G, '.swiper')[0] === u.el)[0])),
								Array.isArray(T) && T.length === 1 && (T = T[0]),
								Object.assign(u.pagination, { el: T }),
								(T = (0, x.m)(T)),
								T.forEach((G) => {
									v.type === 'bullets' && v.clickable && G.classList.add(...(v.clickableClass || '').split(' ')),
										G.classList.add(v.modifierClass + v.type),
										G.classList.add(u.isHorizontal() ? v.horizontalClass : v.verticalClass),
										v.type === 'bullets' &&
											v.dynamicBullets &&
											(G.classList.add(`${v.modifierClass}${v.type}-dynamic`), (de = 0), v.dynamicMainBullets < 1 && (v.dynamicMainBullets = 1)),
										v.type === 'progressbar' && v.progressbarOpposite && G.classList.add(v.progressbarOppositeClass),
										v.clickable && G.addEventListener('click', Se),
										u.enabled || G.classList.add(v.lockClass);
								}));
					}
					function W() {
						const v = u.params.pagination;
						if (be()) return;
						let T = u.pagination.el;
						T &&
							((T = (0, x.m)(T)),
							T.forEach((G) => {
								G.classList.remove(v.hiddenClass),
									G.classList.remove(v.modifierClass + v.type),
									G.classList.remove(u.isHorizontal() ? v.horizontalClass : v.verticalClass),
									v.clickable && (G.classList.remove(...(v.clickableClass || '').split(' ')), G.removeEventListener('click', Se));
							})),
							u.pagination.bullets && u.pagination.bullets.forEach((G) => G.classList.remove(...v.bulletActiveClass.split(' ')));
					}
					D('changeDirection', () => {
						if (!u.pagination || !u.pagination.el) return;
						const v = u.params.pagination;
						let { el: T } = u.pagination;
						(T = (0, x.m)(T)),
							T.forEach((G) => {
								G.classList.remove(v.horizontalClass, v.verticalClass), G.classList.add(u.isHorizontal() ? v.horizontalClass : v.verticalClass);
							});
					}),
						D('init', () => {
							u.params.pagination.enabled === !1 ? K() : (N(), ce(), ae());
						}),
						D('activeIndexChange', () => {
							typeof u.snapIndex > 'u' && ae();
						}),
						D('snapIndexChange', () => {
							ae();
						}),
						D('snapGridLengthChange', () => {
							ce(), ae();
						}),
						D('destroy', () => {
							W();
						}),
						D('enable disable', () => {
							let { el: v } = u.pagination;
							v && ((v = (0, x.m)(v)), v.forEach((T) => T.classList[u.enabled ? 'remove' : 'add'](u.params.pagination.lockClass)));
						}),
						D('lock unlock', () => {
							ae();
						}),
						D('click', (v, T) => {
							const G = T.target,
								te = (0, x.m)(u.pagination.el);
							if (
								u.params.pagination.el &&
								u.params.pagination.hideOnClick &&
								te &&
								te.length > 0 &&
								!G.classList.contains(u.params.pagination.bulletClass)
							) {
								if (u.navigation && ((u.navigation.nextEl && G === u.navigation.nextEl) || (u.navigation.prevEl && G === u.navigation.prevEl)))
									return;
								const S = te[0].classList.contains(u.params.pagination.hiddenClass);
								Q(S === !0 ? 'paginationShow' : 'paginationHide'), te.forEach((y) => y.classList.toggle(u.params.pagination.hiddenClass));
							}
						});
					const ne = () => {
							u.el.classList.remove(u.params.pagination.paginationDisabledClass);
							let { el: v } = u.pagination;
							v && ((v = (0, x.m)(v)), v.forEach((T) => T.classList.remove(u.params.pagination.paginationDisabledClass))), N(), ce(), ae();
						},
						K = () => {
							u.el.classList.add(u.params.pagination.paginationDisabledClass);
							let { el: v } = u.pagination;
							v && ((v = (0, x.m)(v)), v.forEach((T) => T.classList.add(u.params.pagination.paginationDisabledClass))), W();
						};
					Object.assign(u.pagination, { enable: ne, disable: K, render: ce, update: ae, init: N, destroy: W });
				}
			},
			'../../node_modules/swiper/modules/scrollbar.mjs'(Ce, ge, ee) {
				ee.d(ge, { A: () => c });
				var L = ee('../../node_modules/swiper/shared/ssr-window.esm.mjs'),
					_ = ee('../../node_modules/swiper/shared/utils.mjs'),
					x = ee('../../node_modules/swiper/shared/create-element-if-not-defined.mjs'),
					q = ee('../../node_modules/swiper/shared/classes-to-selector.mjs');
				function c(u) {
					let { swiper: f, extendParams: D, on: Q, emit: re } = u;
					const oe = (0, L.g)();
					let de = !1,
						be = null,
						he = null,
						Se,
						ae,
						ce,
						N;
					D({
						scrollbar: {
							el: null,
							dragSize: 'auto',
							hide: !1,
							draggable: !1,
							snapOnRelease: !0,
							lockClass: 'swiper-scrollbar-lock',
							dragClass: 'swiper-scrollbar-drag',
							scrollbarDisabledClass: 'swiper-scrollbar-disabled',
							horizontalClass: 'swiper-scrollbar-horizontal',
							verticalClass: 'swiper-scrollbar-vertical',
						},
					}),
						(f.scrollbar = { el: null, dragEl: null });
					function W() {
						if (!f.params.scrollbar.el || !f.scrollbar.el) return;
						const { scrollbar: h, rtlTranslate: C } = f,
							{ dragEl: B, el: X } = h,
							J = f.params.scrollbar,
							fe = f.params.loop ? f.progressLoop : f.progress;
						let pe = ae,
							ue = (ce - ae) * fe;
						C
							? ((ue = -ue), ue > 0 ? ((pe = ae - ue), (ue = 0)) : -ue + ae > ce && (pe = ce + ue))
							: ue < 0
							? ((pe = ae + ue), (ue = 0))
							: ue + ae > ce && (pe = ce - ue),
							f.isHorizontal()
								? ((B.style.transform = `translate3d(${ue}px, 0, 0)`), (B.style.width = `${pe}px`))
								: ((B.style.transform = `translate3d(0px, ${ue}px, 0)`), (B.style.height = `${pe}px`)),
							J.hide &&
								(clearTimeout(be),
								(X.style.opacity = 1),
								(be = setTimeout(() => {
									(X.style.opacity = 0), (X.style.transitionDuration = '400ms');
								}, 1e3)));
					}
					function ne(h) {
						!f.params.scrollbar.el || !f.scrollbar.el || (f.scrollbar.dragEl.style.transitionDuration = `${h}ms`);
					}
					function K() {
						if (!f.params.scrollbar.el || !f.scrollbar.el) return;
						const { scrollbar: h } = f,
							{ dragEl: C, el: B } = h;
						(C.style.width = ''),
							(C.style.height = ''),
							(ce = f.isHorizontal() ? B.offsetWidth : B.offsetHeight),
							(N = f.size / (f.virtualSize + f.params.slidesOffsetBefore - (f.params.centeredSlides ? f.snapGrid[0] : 0))),
							f.params.scrollbar.dragSize === 'auto' ? (ae = ce * N) : (ae = parseInt(f.params.scrollbar.dragSize, 10)),
							f.isHorizontal() ? (C.style.width = `${ae}px`) : (C.style.height = `${ae}px`),
							N >= 1 ? (B.style.display = 'none') : (B.style.display = ''),
							f.params.scrollbar.hide && (B.style.opacity = 0),
							f.params.watchOverflow && f.enabled && h.el.classList[f.isLocked ? 'add' : 'remove'](f.params.scrollbar.lockClass);
					}
					function v(h) {
						return f.isHorizontal() ? h.clientX : h.clientY;
					}
					function T(h) {
						const { scrollbar: C, rtlTranslate: B } = f,
							{ el: X } = C;
						let J;
						(J = (v(h) - (0, _.b)(X)[f.isHorizontal() ? 'left' : 'top'] - (Se !== null ? Se : ae / 2)) / (ce - ae)),
							(J = Math.max(Math.min(J, 1), 0)),
							B && (J = 1 - J);
						const fe = f.minTranslate() + (f.maxTranslate() - f.minTranslate()) * J;
						f.updateProgress(fe), f.setTranslate(fe), f.updateActiveIndex(), f.updateSlidesClasses();
					}
					function G(h) {
						const C = f.params.scrollbar,
							{ scrollbar: B, wrapperEl: X } = f,
							{ el: J, dragEl: fe } = B;
						(de = !0),
							(Se = h.target === fe ? v(h) - h.target.getBoundingClientRect()[f.isHorizontal() ? 'left' : 'top'] : null),
							h.preventDefault(),
							h.stopPropagation(),
							(X.style.transitionDuration = '100ms'),
							(fe.style.transitionDuration = '100ms'),
							T(h),
							clearTimeout(he),
							(J.style.transitionDuration = '0ms'),
							C.hide && (J.style.opacity = 1),
							f.params.cssMode && (f.wrapperEl.style['scroll-snap-type'] = 'none'),
							re('scrollbarDragStart', h);
					}
					function te(h) {
						const { scrollbar: C, wrapperEl: B } = f,
							{ el: X, dragEl: J } = C;
						de &&
							(h.preventDefault ? h.preventDefault() : (h.returnValue = !1),
							T(h),
							(B.style.transitionDuration = '0ms'),
							(X.style.transitionDuration = '0ms'),
							(J.style.transitionDuration = '0ms'),
							re('scrollbarDragMove', h));
					}
					function S(h) {
						const C = f.params.scrollbar,
							{ scrollbar: B, wrapperEl: X } = f,
							{ el: J } = B;
						de &&
							((de = !1),
							f.params.cssMode && ((f.wrapperEl.style['scroll-snap-type'] = ''), (X.style.transitionDuration = '')),
							C.hide &&
								(clearTimeout(he),
								(he = (0, _.n)(() => {
									(J.style.opacity = 0), (J.style.transitionDuration = '400ms');
								}, 1e3))),
							re('scrollbarDragEnd', h),
							C.snapOnRelease && f.slideToClosest());
					}
					function y(h) {
						const { scrollbar: C, params: B } = f,
							X = C.el;
						if (!X) return;
						const J = X,
							fe = B.passiveListeners ? { passive: !1, capture: !1 } : !1,
							pe = B.passiveListeners ? { passive: !0, capture: !1 } : !1;
						if (!J) return;
						const ue = h === 'on' ? 'addEventListener' : 'removeEventListener';
						J[ue]('pointerdown', G, fe), oe[ue]('pointermove', te, fe), oe[ue]('pointerup', S, pe);
					}
					function A() {
						!f.params.scrollbar.el || !f.scrollbar.el || y('on');
					}
					function P() {
						!f.params.scrollbar.el || !f.scrollbar.el || y('off');
					}
					function Y() {
						const { scrollbar: h, el: C } = f;
						f.params.scrollbar = (0, x.c)(f, f.originalParams.scrollbar, f.params.scrollbar, { el: 'swiper-scrollbar' });
						const B = f.params.scrollbar;
						if (!B.el) return;
						let X;
						if ((typeof B.el == 'string' && f.isElement && (X = f.el.querySelector(B.el)), !X && typeof B.el == 'string')) {
							if (((X = oe.querySelectorAll(B.el)), !X.length)) return;
						} else X || (X = B.el);
						f.params.uniqueNavElements &&
							typeof B.el == 'string' &&
							X.length > 1 &&
							C.querySelectorAll(B.el).length === 1 &&
							(X = C.querySelector(B.el)),
							X.length > 0 && (X = X[0]),
							X.classList.add(f.isHorizontal() ? B.horizontalClass : B.verticalClass);
						let J;
						X &&
							((J = X.querySelector((0, q.c)(f.params.scrollbar.dragClass))),
							J || ((J = (0, _.c)('div', f.params.scrollbar.dragClass)), X.append(J))),
							Object.assign(h, { el: X, dragEl: J }),
							B.draggable && A(),
							X && X.classList[f.enabled ? 'remove' : 'add'](...(0, _.i)(f.params.scrollbar.lockClass));
					}
					function Z() {
						const h = f.params.scrollbar,
							C = f.scrollbar.el;
						C && C.classList.remove(...(0, _.i)(f.isHorizontal() ? h.horizontalClass : h.verticalClass)), P();
					}
					Q('changeDirection', () => {
						if (!f.scrollbar || !f.scrollbar.el) return;
						const h = f.params.scrollbar;
						let { el: C } = f.scrollbar;
						(C = (0, _.m)(C)),
							C.forEach((B) => {
								B.classList.remove(h.horizontalClass, h.verticalClass), B.classList.add(f.isHorizontal() ? h.horizontalClass : h.verticalClass);
							});
					}),
						Q('init', () => {
							f.params.scrollbar.enabled === !1 ? m() : (Y(), K(), W());
						}),
						Q('update resize observerUpdate lock unlock changeDirection', () => {
							K();
						}),
						Q('setTranslate', () => {
							W();
						}),
						Q('setTransition', (h, C) => {
							ne(C);
						}),
						Q('enable disable', () => {
							const { el: h } = f.scrollbar;
							h && h.classList[f.enabled ? 'remove' : 'add'](...(0, _.i)(f.params.scrollbar.lockClass));
						}),
						Q('destroy', () => {
							Z();
						});
					const le = () => {
							f.el.classList.remove(...(0, _.i)(f.params.scrollbar.scrollbarDisabledClass)),
								f.scrollbar.el && f.scrollbar.el.classList.remove(...(0, _.i)(f.params.scrollbar.scrollbarDisabledClass)),
								Y(),
								K(),
								W();
						},
						m = () => {
							f.el.classList.add(...(0, _.i)(f.params.scrollbar.scrollbarDisabledClass)),
								f.scrollbar.el && f.scrollbar.el.classList.add(...(0, _.i)(f.params.scrollbar.scrollbarDisabledClass)),
								Z();
						};
					Object.assign(f.scrollbar, { enable: le, disable: m, updateSize: K, setTranslate: W, init: Y, destroy: Z });
				}
			},
			'../../node_modules/swiper/shared/classes-to-selector.mjs'(Ce, ge, ee) {
				ee.d(ge, { c: () => L });
				function L(_) {
					return (
						_ === void 0 && (_ = ''),
						`.${_.trim()
							.replace(/([\.:!+\/])/g, '\\$1')
							.replace(/ /g, '.')}`
					);
				}
			},
			'../../node_modules/swiper/shared/create-element-if-not-defined.mjs'(Ce, ge, ee) {
				ee.d(ge, { c: () => _ });
				var L = ee('../../node_modules/swiper/shared/utils.mjs');
				function _(x, q, c, u) {
					return (
						x.params.createElements &&
							Object.keys(u).forEach((f) => {
								if (!c[f] && c.auto === !0) {
									let D = (0, L.e)(x.el, `.${u[f]}`)[0];
									D || ((D = (0, L.c)('div', u[f])), (D.className = u[f]), x.el.append(D)), (c[f] = D), (q[f] = D);
								}
							}),
						c
					);
				}
			},
			'../../node_modules/swiper/shared/ssr-window.esm.mjs'(Ce, ge, ee) {
				ee.d(ge, { a: () => u, g: () => q });
				function L(f) {
					return f !== null && typeof f == 'object' && 'constructor' in f && f.constructor === Object;
				}
				function _(f, D) {
					f === void 0 && (f = {}),
						D === void 0 && (D = {}),
						Object.keys(D).forEach((Q) => {
							typeof f[Q] > 'u' ? (f[Q] = D[Q]) : L(D[Q]) && L(f[Q]) && Object.keys(D[Q]).length > 0 && _(f[Q], D[Q]);
						});
				}
				const x = {
					body: {},
					addEventListener() {},
					removeEventListener() {},
					activeElement: { blur() {}, nodeName: '' },
					querySelector() {
						return null;
					},
					querySelectorAll() {
						return [];
					},
					getElementById() {
						return null;
					},
					createEvent() {
						return { initEvent() {} };
					},
					createElement() {
						return {
							children: [],
							childNodes: [],
							style: {},
							setAttribute() {},
							getElementsByTagName() {
								return [];
							},
						};
					},
					createElementNS() {
						return {};
					},
					importNode() {
						return null;
					},
					location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
				};
				function q() {
					const f = typeof document < 'u' ? document : {};
					return _(f, x), f;
				}
				const c = {
					document: x,
					navigator: { userAgent: '' },
					location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
					history: { replaceState() {}, pushState() {}, go() {}, back() {} },
					CustomEvent: function () {
						return this;
					},
					addEventListener() {},
					removeEventListener() {},
					getComputedStyle() {
						return {
							getPropertyValue() {
								return '';
							},
						};
					},
					Image() {},
					Date() {},
					screen: {},
					setTimeout() {},
					clearTimeout() {},
					matchMedia() {
						return {};
					},
					requestAnimationFrame(f) {
						return typeof setTimeout > 'u' ? (f(), null) : setTimeout(f, 0);
					},
					cancelAnimationFrame(f) {
						typeof setTimeout > 'u' || clearTimeout(f);
					},
				};
				function u() {
					const f = typeof window < 'u' ? window : {};
					return _(f, c), f;
				}
			},
			'../../node_modules/swiper/shared/utils.mjs'(Ce, ge, ee) {
				ee.d(ge, {
					a: () => v,
					b: () => ce,
					c: () => ae,
					d: () => c,
					e: () => he,
					f: () => G,
					h: () => K,
					i: () => _,
					j: () => f,
					m: () => te,
					n: () => q,
					o: () => ne,
					p: () => W,
					q: () => N,
					r: () => de,
					s: () => oe,
					t: () => Se,
					u: () => re,
					v: () => x,
				});
				var L = ee('../../node_modules/swiper/shared/ssr-window.esm.mjs');
				function _(S) {
					return (
						S === void 0 && (S = ''),
						S.trim()
							.split(' ')
							.filter((y) => !!y.trim())
					);
				}
				function x(S) {
					const y = S;
					Object.keys(y).forEach((A) => {
						try {
							y[A] = null;
						} catch {}
						try {
							delete y[A];
						} catch {}
					});
				}
				function q(S, y) {
					return y === void 0 && (y = 0), setTimeout(S, y);
				}
				function c() {
					return Date.now();
				}
				function u(S) {
					const y = (0, L.a)();
					let A;
					return y.getComputedStyle && (A = y.getComputedStyle(S, null)), !A && S.currentStyle && (A = S.currentStyle), A || (A = S.style), A;
				}
				function f(S, y) {
					y === void 0 && (y = 'x');
					const A = (0, L.a)();
					let P, Y, Z;
					const le = u(S);
					return (
						A.WebKitCSSMatrix
							? ((Y = le.transform || le.webkitTransform),
							  Y.split(',').length > 6 &&
									(Y = Y.split(', ')
										.map((m) => m.replace(',', '.'))
										.join(', ')),
							  (Z = new A.WebKitCSSMatrix(Y === 'none' ? '' : Y)))
							: ((Z =
									le.MozTransform ||
									le.OTransform ||
									le.MsTransform ||
									le.msTransform ||
									le.transform ||
									le.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,')),
							  (P = Z.toString().split(','))),
						y === 'x' && (A.WebKitCSSMatrix ? (Y = Z.m41) : P.length === 16 ? (Y = parseFloat(P[12])) : (Y = parseFloat(P[4]))),
						y === 'y' && (A.WebKitCSSMatrix ? (Y = Z.m42) : P.length === 16 ? (Y = parseFloat(P[13])) : (Y = parseFloat(P[5]))),
						Y || 0
					);
				}
				function D(S) {
					return typeof S == 'object' && S !== null && S.constructor && Object.prototype.toString.call(S).slice(8, -1) === 'Object';
				}
				function Q(S) {
					return typeof window < 'u' && typeof window.HTMLElement < 'u' ? S instanceof HTMLElement : S && (S.nodeType === 1 || S.nodeType === 11);
				}
				function re() {
					const S = Object(arguments.length <= 0 ? void 0 : arguments[0]),
						y = ['__proto__', 'constructor', 'prototype'];
					for (let A = 1; A < arguments.length; A += 1) {
						const P = A < 0 || arguments.length <= A ? void 0 : arguments[A];
						if (P != null && !Q(P)) {
							const Y = Object.keys(Object(P)).filter((Z) => y.indexOf(Z) < 0);
							for (let Z = 0, le = Y.length; Z < le; Z += 1) {
								const m = Y[Z],
									h = Object.getOwnPropertyDescriptor(P, m);
								h !== void 0 &&
									h.enumerable &&
									(D(S[m]) && D(P[m])
										? P[m].__swiper__
											? (S[m] = P[m])
											: re(S[m], P[m])
										: !D(S[m]) && D(P[m])
										? ((S[m] = {}), P[m].__swiper__ ? (S[m] = P[m]) : re(S[m], P[m]))
										: (S[m] = P[m]));
							}
						}
					}
					return S;
				}
				function oe(S, y, A) {
					S.style.setProperty(y, A);
				}
				function de(S) {
					let { swiper: y, targetPosition: A, side: P } = S;
					const Y = (0, L.a)(),
						Z = -y.translate;
					let le = null,
						m;
					const h = y.params.speed;
					(y.wrapperEl.style.scrollSnapType = 'none'), Y.cancelAnimationFrame(y.cssModeFrameID);
					const C = A > Z ? 'next' : 'prev',
						B = (J, fe) => (C === 'next' && J >= fe) || (C === 'prev' && J <= fe),
						X = () => {
							(m = new Date().getTime()), le === null && (le = m);
							const J = Math.max(Math.min((m - le) / h, 1), 0),
								fe = 0.5 - Math.cos(J * Math.PI) / 2;
							let pe = Z + fe * (A - Z);
							if ((B(pe, A) && (pe = A), y.wrapperEl.scrollTo({ [P]: pe }), B(pe, A))) {
								(y.wrapperEl.style.overflow = 'hidden'),
									(y.wrapperEl.style.scrollSnapType = ''),
									setTimeout(() => {
										(y.wrapperEl.style.overflow = ''), y.wrapperEl.scrollTo({ [P]: pe });
									}),
									Y.cancelAnimationFrame(y.cssModeFrameID);
								return;
							}
							y.cssModeFrameID = Y.requestAnimationFrame(X);
						};
					X();
				}
				function be(S) {
					return S.querySelector('.swiper-slide-transform') || (S.shadowRoot && S.shadowRoot.querySelector('.swiper-slide-transform')) || S;
				}
				function he(S, y) {
					return y === void 0 && (y = ''), [...S.children].filter((A) => A.matches(y));
				}
				function Se(S) {
					try {
						console.warn(S);
						return;
					} catch {}
				}
				function ae(S, y) {
					y === void 0 && (y = []);
					const A = document.createElement(S);
					return A.classList.add(...(Array.isArray(y) ? y : _(y))), A;
				}
				function ce(S) {
					const y = (0, L.a)(),
						A = (0, L.g)(),
						P = S.getBoundingClientRect(),
						Y = A.body,
						Z = S.clientTop || Y.clientTop || 0,
						le = S.clientLeft || Y.clientLeft || 0,
						m = S === y ? y.scrollY : S.scrollTop,
						h = S === y ? y.scrollX : S.scrollLeft;
					return { top: P.top + m - Z, left: P.left + h - le };
				}
				function N(S, y) {
					const A = [];
					for (; S.previousElementSibling; ) {
						const P = S.previousElementSibling;
						y ? P.matches(y) && A.push(P) : A.push(P), (S = P);
					}
					return A;
				}
				function W(S, y) {
					const A = [];
					for (; S.nextElementSibling; ) {
						const P = S.nextElementSibling;
						y ? P.matches(y) && A.push(P) : A.push(P), (S = P);
					}
					return A;
				}
				function ne(S, y) {
					return (0, L.a)().getComputedStyle(S, null).getPropertyValue(y);
				}
				function K(S) {
					let y = S,
						A;
					if (y) {
						for (A = 0; (y = y.previousSibling) !== null; ) y.nodeType === 1 && (A += 1);
						return A;
					}
				}
				function v(S, y) {
					const A = [];
					let P = S.parentElement;
					for (; P; ) y ? P.matches(y) && A.push(P) : A.push(P), (P = P.parentElement);
					return A;
				}
				function T(S, y) {
					function A(P) {
						P.target === S && (y.call(S, P), S.removeEventListener('transitionend', A));
					}
					y && S.addEventListener('transitionend', A);
				}
				function G(S, y, A) {
					const P = (0, L.a)();
					return A
						? S[y === 'width' ? 'offsetWidth' : 'offsetHeight'] +
								parseFloat(P.getComputedStyle(S, null).getPropertyValue(y === 'width' ? 'margin-right' : 'margin-top')) +
								parseFloat(P.getComputedStyle(S, null).getPropertyValue(y === 'width' ? 'margin-left' : 'margin-bottom'))
						: S.offsetWidth;
				}
				function te(S) {
					return (Array.isArray(S) ? S : [S]).filter((y) => !!y);
				}
			},
			'../../node_modules/swiper/swiper-react.mjs'(Ce, ge, ee) {
				ee.d(ge, { RC: () => Ue, qr: () => Ke });
				var L = ee('../../node_modules/preact/compat/dist/compat.module.js'),
					_ = ee('../../node_modules/swiper/shared/ssr-window.esm.mjs'),
					x = ee('../../node_modules/swiper/shared/utils.mjs');
				let q;
				function c() {
					const i = (0, _.a)(),
						e = (0, _.g)();
					return {
						smoothScroll: e.documentElement && e.documentElement.style && 'scrollBehavior' in e.documentElement.style,
						touch: !!('ontouchstart' in i || (i.DocumentTouch && e instanceof i.DocumentTouch)),
					};
				}
				function u() {
					return q || (q = c()), q;
				}
				let f;
				function D(i) {
					let { userAgent: e } = i === void 0 ? {} : i;
					const t = u(),
						s = (0, _.a)(),
						n = s.navigator.platform,
						r = e || s.navigator.userAgent,
						l = { ios: !1, android: !1 },
						o = s.screen.width,
						a = s.screen.height,
						p = r.match(/(Android);?[\s\/]+([\d.]+)?/);
					let d = r.match(/(iPad).*OS\s([\d_]+)/);
					const g = r.match(/(iPod)(.*OS\s([\d_]+))?/),
						b = !d && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
						w = n === 'Win32';
					let M = n === 'MacIntel';
					const I = [
						'1024x1366',
						'1366x1024',
						'834x1194',
						'1194x834',
						'834x1112',
						'1112x834',
						'768x1024',
						'1024x768',
						'820x1180',
						'1180x820',
						'810x1080',
						'1080x810',
					];
					return (
						!d && M && t.touch && I.indexOf(`${o}x${a}`) >= 0 && ((d = r.match(/(Version)\/([\d.]+)/)), d || (d = [0, 1, '13_0_0']), (M = !1)),
						p && !w && ((l.os = 'android'), (l.android = !0)),
						(d || b || g) && ((l.os = 'ios'), (l.ios = !0)),
						l
					);
				}
				function Q(i) {
					return i === void 0 && (i = {}), f || (f = D(i)), f;
				}
				let re;
				function oe() {
					const i = (0, _.a)(),
						e = Q();
					let t = !1;
					function s() {
						const o = i.navigator.userAgent.toLowerCase();
						return o.indexOf('safari') >= 0 && o.indexOf('chrome') < 0 && o.indexOf('android') < 0;
					}
					if (s()) {
						const o = String(i.navigator.userAgent);
						if (o.includes('Version/')) {
							const [a, p] = o
								.split('Version/')[1]
								.split(' ')[0]
								.split('.')
								.map((d) => Number(d));
							t = a < 16 || (a === 16 && p < 2);
						}
					}
					const n = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent),
						r = s(),
						l = r || (n && e.ios);
					return { isSafari: t || r, needPerspectiveFix: t, need3dFix: l, isWebView: n };
				}
				function de() {
					return re || (re = oe()), re;
				}
				function be(i) {
					let { swiper: e, on: t, emit: s } = i;
					const n = (0, _.a)();
					let r = null,
						l = null;
					const o = () => {
							!e || e.destroyed || !e.initialized || (s('beforeResize'), s('resize'));
						},
						a = () => {
							!e ||
								e.destroyed ||
								!e.initialized ||
								((r = new ResizeObserver((g) => {
									l = n.requestAnimationFrame(() => {
										const { width: b, height: w } = e;
										let M = b,
											I = w;
										g.forEach((k) => {
											let { contentBoxSize: E, contentRect: V, target: O } = k;
											(O && O !== e.el) || ((M = V ? V.width : (E[0] || E).inlineSize), (I = V ? V.height : (E[0] || E).blockSize));
										}),
											(M !== b || I !== w) && o();
									});
								})),
								r.observe(e.el));
						},
						p = () => {
							l && n.cancelAnimationFrame(l), r && r.unobserve && e.el && (r.unobserve(e.el), (r = null));
						},
						d = () => {
							!e || e.destroyed || !e.initialized || s('orientationchange');
						};
					t('init', () => {
						if (e.params.resizeObserver && typeof n.ResizeObserver < 'u') {
							a();
							return;
						}
						n.addEventListener('resize', o), n.addEventListener('orientationchange', d);
					}),
						t('destroy', () => {
							p(), n.removeEventListener('resize', o), n.removeEventListener('orientationchange', d);
						});
				}
				function he(i) {
					let { swiper: e, extendParams: t, on: s, emit: n } = i;
					const r = [],
						l = (0, _.a)(),
						o = function (d, g) {
							g === void 0 && (g = {});
							const b = l.MutationObserver || l.WebkitMutationObserver,
								w = new b((M) => {
									if (e.__preventObserver__) return;
									if (M.length === 1) {
										n('observerUpdate', M[0]);
										return;
									}
									const I = function () {
										n('observerUpdate', M[0]);
									};
									l.requestAnimationFrame ? l.requestAnimationFrame(I) : l.setTimeout(I, 0);
								});
							w.observe(d, {
								attributes: typeof g.attributes > 'u' ? !0 : g.attributes,
								childList: typeof g.childList > 'u' ? !0 : g.childList,
								characterData: typeof g.characterData > 'u' ? !0 : g.characterData,
							}),
								r.push(w);
						},
						a = () => {
							if (e.params.observer) {
								if (e.params.observeParents) {
									const d = (0, x.a)(e.hostEl);
									for (let g = 0; g < d.length; g += 1) o(d[g]);
								}
								o(e.hostEl, { childList: e.params.observeSlideChildren }), o(e.wrapperEl, { attributes: !1 });
							}
						},
						p = () => {
							r.forEach((d) => {
								d.disconnect();
							}),
								r.splice(0, r.length);
						};
					t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }), s('init', a), s('destroy', p);
				}
				var Se = {
					on(i, e, t) {
						const s = this;
						if (!s.eventsListeners || s.destroyed || typeof e != 'function') return s;
						const n = t ? 'unshift' : 'push';
						return (
							i.split(' ').forEach((r) => {
								s.eventsListeners[r] || (s.eventsListeners[r] = []), s.eventsListeners[r][n](e);
							}),
							s
						);
					},
					once(i, e, t) {
						const s = this;
						if (!s.eventsListeners || s.destroyed || typeof e != 'function') return s;
						function n() {
							s.off(i, n), n.__emitterProxy && delete n.__emitterProxy;
							for (var r = arguments.length, l = new Array(r), o = 0; o < r; o++) l[o] = arguments[o];
							e.apply(s, l);
						}
						return (n.__emitterProxy = e), s.on(i, n, t);
					},
					onAny(i, e) {
						const t = this;
						if (!t.eventsListeners || t.destroyed || typeof i != 'function') return t;
						const s = e ? 'unshift' : 'push';
						return t.eventsAnyListeners.indexOf(i) < 0 && t.eventsAnyListeners[s](i), t;
					},
					offAny(i) {
						const e = this;
						if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
						const t = e.eventsAnyListeners.indexOf(i);
						return t >= 0 && e.eventsAnyListeners.splice(t, 1), e;
					},
					off(i, e) {
						const t = this;
						return (
							!t.eventsListeners ||
								t.destroyed ||
								!t.eventsListeners ||
								i.split(' ').forEach((s) => {
									typeof e > 'u'
										? (t.eventsListeners[s] = [])
										: t.eventsListeners[s] &&
										  t.eventsListeners[s].forEach((n, r) => {
												(n === e || (n.__emitterProxy && n.__emitterProxy === e)) && t.eventsListeners[s].splice(r, 1);
										  });
								}),
							t
						);
					},
					emit() {
						const i = this;
						if (!i.eventsListeners || i.destroyed || !i.eventsListeners) return i;
						let e, t, s;
						for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++) r[l] = arguments[l];
						return (
							typeof r[0] == 'string' || Array.isArray(r[0])
								? ((e = r[0]), (t = r.slice(1, r.length)), (s = i))
								: ((e = r[0].events), (t = r[0].data), (s = r[0].context || i)),
							t.unshift(s),
							(Array.isArray(e) ? e : e.split(' ')).forEach((a) => {
								i.eventsAnyListeners &&
									i.eventsAnyListeners.length &&
									i.eventsAnyListeners.forEach((p) => {
										p.apply(s, [a, ...t]);
									}),
									i.eventsListeners &&
										i.eventsListeners[a] &&
										i.eventsListeners[a].forEach((p) => {
											p.apply(s, t);
										});
							}),
							i
						);
					},
				};
				function ae() {
					const i = this;
					let e, t;
					const s = i.el;
					typeof i.params.width < 'u' && i.params.width !== null ? (e = i.params.width) : (e = s.clientWidth),
						typeof i.params.height < 'u' && i.params.height !== null ? (t = i.params.height) : (t = s.clientHeight),
						!((e === 0 && i.isHorizontal()) || (t === 0 && i.isVertical())) &&
							((e = e - parseInt((0, x.o)(s, 'padding-left') || 0, 10) - parseInt((0, x.o)(s, 'padding-right') || 0, 10)),
							(t = t - parseInt((0, x.o)(s, 'padding-top') || 0, 10) - parseInt((0, x.o)(s, 'padding-bottom') || 0, 10)),
							Number.isNaN(e) && (e = 0),
							Number.isNaN(t) && (t = 0),
							Object.assign(i, { width: e, height: t, size: i.isHorizontal() ? e : t }));
				}
				function ce() {
					const i = this;
					function e(z, j) {
						return parseFloat(z.getPropertyValue(i.getDirectionLabel(j)) || 0);
					}
					const t = i.params,
						{ wrapperEl: s, slidesEl: n, size: r, rtlTranslate: l, wrongRTL: o } = i,
						a = i.virtual && t.virtual.enabled,
						p = a ? i.virtual.slides.length : i.slides.length,
						d = (0, x.e)(n, `.${i.params.slideClass}, swiper-slide`),
						g = a ? i.virtual.slides.length : d.length;
					let b = [];
					const w = [],
						M = [];
					let I = t.slidesOffsetBefore;
					typeof I == 'function' && (I = t.slidesOffsetBefore.call(i));
					let k = t.slidesOffsetAfter;
					typeof k == 'function' && (k = t.slidesOffsetAfter.call(i));
					const E = i.snapGrid.length,
						V = i.slidesGrid.length;
					let O = t.spaceBetween,
						R = -I,
						$ = 0,
						ie = 0;
					if (typeof r > 'u') return;
					typeof O == 'string' && O.indexOf('%') >= 0
						? (O = (parseFloat(O.replace('%', '')) / 100) * r)
						: typeof O == 'string' && (O = parseFloat(O)),
						(i.virtualSize = -O),
						d.forEach((z) => {
							l ? (z.style.marginLeft = '') : (z.style.marginRight = ''), (z.style.marginBottom = ''), (z.style.marginTop = '');
						}),
						t.centeredSlides && t.cssMode && ((0, x.s)(s, '--swiper-centered-offset-before', ''), (0, x.s)(s, '--swiper-centered-offset-after', ''));
					const Ee = t.grid && t.grid.rows > 1 && i.grid;
					Ee ? i.grid.initSlides(d) : i.grid && i.grid.unsetSlides();
					let se;
					const H =
						t.slidesPerView === 'auto' &&
						t.breakpoints &&
						Object.keys(t.breakpoints).filter((z) => typeof t.breakpoints[z].slidesPerView < 'u').length > 0;
					for (let z = 0; z < g; z += 1) {
						se = 0;
						let j;
						if ((d[z] && (j = d[z]), Ee && i.grid.updateSlide(z, j, d), !(d[z] && (0, x.o)(j, 'display') === 'none'))) {
							if (t.slidesPerView === 'auto') {
								H && (d[z].style[i.getDirectionLabel('width')] = '');
								const U = getComputedStyle(j),
									F = j.style.transform,
									me = j.style.webkitTransform;
								if ((F && (j.style.transform = 'none'), me && (j.style.webkitTransform = 'none'), t.roundLengths))
									se = i.isHorizontal() ? (0, x.f)(j, 'width', !0) : (0, x.f)(j, 'height', !0);
								else {
									const ve = e(U, 'width'),
										ye = e(U, 'padding-left'),
										Be = e(U, 'padding-right'),
										Ie = e(U, 'margin-left'),
										we = e(U, 'margin-right'),
										xe = U.getPropertyValue('box-sizing');
									if (xe && xe === 'border-box') se = ve + Ie + we;
									else {
										const { clientWidth: Nt, offsetWidth: Vt } = j;
										se = ve + ye + Be + Ie + we + (Vt - Nt);
									}
								}
								F && (j.style.transform = F), me && (j.style.webkitTransform = me), t.roundLengths && (se = Math.floor(se));
							} else
								(se = (r - (t.slidesPerView - 1) * O) / t.slidesPerView),
									t.roundLengths && (se = Math.floor(se)),
									d[z] && (d[z].style[i.getDirectionLabel('width')] = `${se}px`);
							d[z] && (d[z].swiperSlideSize = se),
								M.push(se),
								t.centeredSlides
									? ((R = R + se / 2 + $ / 2 + O),
									  $ === 0 && z !== 0 && (R = R - r / 2 - O),
									  z === 0 && (R = R - r / 2 - O),
									  Math.abs(R) < 1 / 1e3 && (R = 0),
									  t.roundLengths && (R = Math.floor(R)),
									  ie % t.slidesPerGroup === 0 && b.push(R),
									  w.push(R))
									: (t.roundLengths && (R = Math.floor(R)),
									  (ie - Math.min(i.params.slidesPerGroupSkip, ie)) % i.params.slidesPerGroup === 0 && b.push(R),
									  w.push(R),
									  (R = R + se + O)),
								(i.virtualSize += se + O),
								($ = se),
								(ie += 1);
						}
					}
					if (
						((i.virtualSize = Math.max(i.virtualSize, r) + k),
						l && o && (t.effect === 'slide' || t.effect === 'coverflow') && (s.style.width = `${i.virtualSize + O}px`),
						t.setWrapperSize && (s.style[i.getDirectionLabel('width')] = `${i.virtualSize + O}px`),
						Ee && i.grid.updateWrapperSize(se, b),
						!t.centeredSlides)
					) {
						const z = [];
						for (let j = 0; j < b.length; j += 1) {
							let U = b[j];
							t.roundLengths && (U = Math.floor(U)), b[j] <= i.virtualSize - r && z.push(U);
						}
						(b = z), Math.floor(i.virtualSize - r) - Math.floor(b[b.length - 1]) > 1 && b.push(i.virtualSize - r);
					}
					if (a && t.loop) {
						const z = M[0] + O;
						if (t.slidesPerGroup > 1) {
							const j = Math.ceil((i.virtual.slidesBefore + i.virtual.slidesAfter) / t.slidesPerGroup),
								U = z * t.slidesPerGroup;
							for (let F = 0; F < j; F += 1) b.push(b[b.length - 1] + U);
						}
						for (let j = 0; j < i.virtual.slidesBefore + i.virtual.slidesAfter; j += 1)
							t.slidesPerGroup === 1 && b.push(b[b.length - 1] + z), w.push(w[w.length - 1] + z), (i.virtualSize += z);
					}
					if ((b.length === 0 && (b = [0]), O !== 0)) {
						const z = i.isHorizontal() && l ? 'marginLeft' : i.getDirectionLabel('marginRight');
						d.filter((j, U) => (!t.cssMode || t.loop ? !0 : U !== d.length - 1)).forEach((j) => {
							j.style[z] = `${O}px`;
						});
					}
					if (t.centeredSlides && t.centeredSlidesBounds) {
						let z = 0;
						M.forEach((U) => {
							z += U + (O || 0);
						}),
							(z -= O);
						const j = z - r;
						b = b.map((U) => (U <= 0 ? -I : U > j ? j + k : U));
					}
					if (t.centerInsufficientSlides) {
						let z = 0;
						if (
							(M.forEach((j) => {
								z += j + (O || 0);
							}),
							(z -= O),
							z < r)
						) {
							const j = (r - z) / 2;
							b.forEach((U, F) => {
								b[F] = U - j;
							}),
								w.forEach((U, F) => {
									w[F] = U + j;
								});
						}
					}
					if (
						(Object.assign(i, { slides: d, snapGrid: b, slidesGrid: w, slidesSizesGrid: M }),
						t.centeredSlides && t.cssMode && !t.centeredSlidesBounds)
					) {
						(0, x.s)(s, '--swiper-centered-offset-before', `${-b[0]}px`),
							(0, x.s)(s, '--swiper-centered-offset-after', `${i.size / 2 - M[M.length - 1] / 2}px`);
						const z = -i.snapGrid[0],
							j = -i.slidesGrid[0];
						(i.snapGrid = i.snapGrid.map((U) => U + z)), (i.slidesGrid = i.slidesGrid.map((U) => U + j));
					}
					if (
						(g !== p && i.emit('slidesLengthChange'),
						b.length !== E && (i.params.watchOverflow && i.checkOverflow(), i.emit('snapGridLengthChange')),
						w.length !== V && i.emit('slidesGridLengthChange'),
						t.watchSlidesProgress && i.updateSlidesOffset(),
						i.emit('slidesUpdated'),
						!a && !t.cssMode && (t.effect === 'slide' || t.effect === 'fade'))
					) {
						const z = `${t.containerModifierClass}backface-hidden`,
							j = i.el.classList.contains(z);
						g <= t.maxBackfaceHiddenSlides ? j || i.el.classList.add(z) : j && i.el.classList.remove(z);
					}
				}
				function N(i) {
					const e = this,
						t = [],
						s = e.virtual && e.params.virtual.enabled;
					let n = 0,
						r;
					typeof i == 'number' ? e.setTransition(i) : i === !0 && e.setTransition(e.params.speed);
					const l = (o) => (s ? e.slides[e.getSlideIndexByData(o)] : e.slides[o]);
					if (e.params.slidesPerView !== 'auto' && e.params.slidesPerView > 1)
						if (e.params.centeredSlides)
							(e.visibleSlides || []).forEach((o) => {
								t.push(o);
							});
						else
							for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
								const o = e.activeIndex + r;
								if (o > e.slides.length && !s) break;
								t.push(l(o));
							}
					else t.push(l(e.activeIndex));
					for (r = 0; r < t.length; r += 1)
						if (typeof t[r] < 'u') {
							const o = t[r].offsetHeight;
							n = o > n ? o : n;
						}
					(n || n === 0) && (e.wrapperEl.style.height = `${n}px`);
				}
				function W() {
					const i = this,
						e = i.slides,
						t = i.isElement ? (i.isHorizontal() ? i.wrapperEl.offsetLeft : i.wrapperEl.offsetTop) : 0;
					for (let s = 0; s < e.length; s += 1)
						e[s].swiperSlideOffset = (i.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) - t - i.cssOverflowAdjustment();
				}
				function ne(i) {
					i === void 0 && (i = (this && this.translate) || 0);
					const e = this,
						t = e.params,
						{ slides: s, rtlTranslate: n, snapGrid: r } = e;
					if (s.length === 0) return;
					typeof s[0].swiperSlideOffset > 'u' && e.updateSlidesOffset();
					let l = -i;
					n && (l = i),
						s.forEach((a) => {
							a.classList.remove(t.slideVisibleClass, t.slideFullyVisibleClass);
						}),
						(e.visibleSlidesIndexes = []),
						(e.visibleSlides = []);
					let o = t.spaceBetween;
					typeof o == 'string' && o.indexOf('%') >= 0
						? (o = (parseFloat(o.replace('%', '')) / 100) * e.size)
						: typeof o == 'string' && (o = parseFloat(o));
					for (let a = 0; a < s.length; a += 1) {
						const p = s[a];
						let d = p.swiperSlideOffset;
						t.cssMode && t.centeredSlides && (d -= s[0].swiperSlideOffset);
						const g = (l + (t.centeredSlides ? e.minTranslate() : 0) - d) / (p.swiperSlideSize + o),
							b = (l - r[0] + (t.centeredSlides ? e.minTranslate() : 0) - d) / (p.swiperSlideSize + o),
							w = -(l - d),
							M = w + e.slidesSizesGrid[a],
							I = w >= 0 && w <= e.size - e.slidesSizesGrid[a];
						((w >= 0 && w < e.size - 1) || (M > 1 && M <= e.size) || (w <= 0 && M >= e.size)) &&
							(e.visibleSlides.push(p), e.visibleSlidesIndexes.push(a), s[a].classList.add(t.slideVisibleClass)),
							I && s[a].classList.add(t.slideFullyVisibleClass),
							(p.progress = n ? -g : g),
							(p.originalProgress = n ? -b : b);
					}
				}
				function K(i) {
					const e = this;
					if (typeof i > 'u') {
						const d = e.rtlTranslate ? -1 : 1;
						i = (e && e.translate && e.translate * d) || 0;
					}
					const t = e.params,
						s = e.maxTranslate() - e.minTranslate();
					let { progress: n, isBeginning: r, isEnd: l, progressLoop: o } = e;
					const a = r,
						p = l;
					if (s === 0) (n = 0), (r = !0), (l = !0);
					else {
						n = (i - e.minTranslate()) / s;
						const d = Math.abs(i - e.minTranslate()) < 1,
							g = Math.abs(i - e.maxTranslate()) < 1;
						(r = d || n <= 0), (l = g || n >= 1), d && (n = 0), g && (n = 1);
					}
					if (t.loop) {
						const d = e.getSlideIndexByData(0),
							g = e.getSlideIndexByData(e.slides.length - 1),
							b = e.slidesGrid[d],
							w = e.slidesGrid[g],
							M = e.slidesGrid[e.slidesGrid.length - 1],
							I = Math.abs(i);
						I >= b ? (o = (I - b) / M) : (o = (I + M - w) / M), o > 1 && (o -= 1);
					}
					Object.assign(e, { progress: n, progressLoop: o, isBeginning: r, isEnd: l }),
						(t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) && e.updateSlidesProgress(i),
						r && !a && e.emit('reachBeginning toEdge'),
						l && !p && e.emit('reachEnd toEdge'),
						((a && !r) || (p && !l)) && e.emit('fromEdge'),
						e.emit('progress', n);
				}
				function v() {
					const i = this,
						{ slides: e, params: t, slidesEl: s, activeIndex: n } = i,
						r = i.virtual && t.virtual.enabled,
						l = i.grid && t.grid && t.grid.rows > 1,
						o = (g) => (0, x.e)(s, `.${t.slideClass}${g}, swiper-slide${g}`)[0];
					e.forEach((g) => {
						g.classList.remove(t.slideActiveClass, t.slideNextClass, t.slidePrevClass);
					});
					let a, p, d;
					if (r)
						if (t.loop) {
							let g = n - i.virtual.slidesBefore;
							g < 0 && (g = i.virtual.slides.length + g),
								g >= i.virtual.slides.length && (g -= i.virtual.slides.length),
								(a = o(`[data-swiper-slide-index="${g}"]`));
						} else a = o(`[data-swiper-slide-index="${n}"]`);
					else
						l
							? ((a = e.filter((g) => g.column === n)[0]), (d = e.filter((g) => g.column === n + 1)[0]), (p = e.filter((g) => g.column === n - 1)[0]))
							: (a = e[n]);
					a &&
						(a.classList.add(t.slideActiveClass),
						l
							? (d && d.classList.add(t.slideNextClass), p && p.classList.add(t.slidePrevClass))
							: ((d = (0, x.p)(a, `.${t.slideClass}, swiper-slide`)[0]),
							  t.loop && !d && (d = e[0]),
							  d && d.classList.add(t.slideNextClass),
							  (p = (0, x.q)(a, `.${t.slideClass}, swiper-slide`)[0]),
							  t.loop && !p === 0 && (p = e[e.length - 1]),
							  p && p.classList.add(t.slidePrevClass))),
						i.emitSlidesClasses();
				}
				const T = (i, e) => {
						if (!i || i.destroyed || !i.params) return;
						const t = () => (i.isElement ? 'swiper-slide' : `.${i.params.slideClass}`),
							s = e.closest(t());
						if (s) {
							let n = s.querySelector(`.${i.params.lazyPreloaderClass}`);
							!n &&
								i.isElement &&
								(s.shadowRoot
									? (n = s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`))
									: requestAnimationFrame(() => {
											s.shadowRoot && ((n = s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`)), n && n.remove());
									  })),
								n && n.remove();
						}
					},
					G = (i, e) => {
						if (!i.slides[e]) return;
						const t = i.slides[e].querySelector('[loading="lazy"]');
						t && t.removeAttribute('loading');
					},
					te = (i) => {
						if (!i || i.destroyed || !i.params) return;
						let e = i.params.lazyPreloadPrevNext;
						const t = i.slides.length;
						if (!t || !e || e < 0) return;
						e = Math.min(e, t);
						const s = i.params.slidesPerView === 'auto' ? i.slidesPerViewDynamic() : Math.ceil(i.params.slidesPerView),
							n = i.activeIndex;
						if (i.params.grid && i.params.grid.rows > 1) {
							const l = n,
								o = [l - e];
							o.push(...Array.from({ length: e }).map((a, p) => l + s + p)),
								i.slides.forEach((a, p) => {
									o.includes(a.column) && G(i, p);
								});
							return;
						}
						const r = n + s - 1;
						if (i.params.rewind || i.params.loop)
							for (let l = n - e; l <= r + e; l += 1) {
								const o = ((l % t) + t) % t;
								(o < n || o > r) && G(i, o);
							}
						else for (let l = Math.max(n - e, 0); l <= Math.min(r + e, t - 1); l += 1) l !== n && (l > r || l < n) && G(i, l);
					};
				function S(i) {
					const { slidesGrid: e, params: t } = i,
						s = i.rtlTranslate ? i.translate : -i.translate;
					let n;
					for (let r = 0; r < e.length; r += 1)
						typeof e[r + 1] < 'u'
							? s >= e[r] && s < e[r + 1] - (e[r + 1] - e[r]) / 2
								? (n = r)
								: s >= e[r] && s < e[r + 1] && (n = r + 1)
							: s >= e[r] && (n = r);
					return t.normalizeSlideIndex && (n < 0 || typeof n > 'u') && (n = 0), n;
				}
				function y(i) {
					const e = this,
						t = e.rtlTranslate ? e.translate : -e.translate,
						{ snapGrid: s, params: n, activeIndex: r, realIndex: l, snapIndex: o } = e;
					let a = i,
						p;
					const d = (w) => {
						let M = w - e.virtual.slidesBefore;
						return M < 0 && (M = e.virtual.slides.length + M), M >= e.virtual.slides.length && (M -= e.virtual.slides.length), M;
					};
					if ((typeof a > 'u' && (a = S(e)), s.indexOf(t) >= 0)) p = s.indexOf(t);
					else {
						const w = Math.min(n.slidesPerGroupSkip, a);
						p = w + Math.floor((a - w) / n.slidesPerGroup);
					}
					if ((p >= s.length && (p = s.length - 1), a === r && !e.params.loop)) {
						p !== o && ((e.snapIndex = p), e.emit('snapIndexChange'));
						return;
					}
					if (a === r && e.params.loop && e.virtual && e.params.virtual.enabled) {
						e.realIndex = d(a);
						return;
					}
					const g = e.grid && n.grid && n.grid.rows > 1;
					let b;
					if (e.virtual && n.virtual.enabled && n.loop) b = d(a);
					else if (g) {
						const w = e.slides.filter((I) => I.column === a)[0];
						let M = parseInt(w.getAttribute('data-swiper-slide-index'), 10);
						Number.isNaN(M) && (M = Math.max(e.slides.indexOf(w), 0)), (b = Math.floor(M / n.grid.rows));
					} else if (e.slides[a]) {
						const w = e.slides[a].getAttribute('data-swiper-slide-index');
						w ? (b = parseInt(w, 10)) : (b = a);
					} else b = a;
					Object.assign(e, { previousSnapIndex: o, snapIndex: p, previousRealIndex: l, realIndex: b, previousIndex: r, activeIndex: a }),
						e.initialized && te(e),
						e.emit('activeIndexChange'),
						e.emit('snapIndexChange'),
						(e.initialized || e.params.runCallbacksOnInit) && (l !== b && e.emit('realIndexChange'), e.emit('slideChange'));
				}
				function A(i, e) {
					const t = this,
						s = t.params;
					let n = i.closest(`.${s.slideClass}, swiper-slide`);
					!n &&
						t.isElement &&
						e &&
						e.length > 1 &&
						e.includes(i) &&
						[...e.slice(e.indexOf(i) + 1, e.length)].forEach((o) => {
							!n && o.matches && o.matches(`.${s.slideClass}, swiper-slide`) && (n = o);
						});
					let r = !1,
						l;
					if (n) {
						for (let o = 0; o < t.slides.length; o += 1)
							if (t.slides[o] === n) {
								(r = !0), (l = o);
								break;
							}
					}
					if (n && r)
						(t.clickedSlide = n),
							t.virtual && t.params.virtual.enabled
								? (t.clickedIndex = parseInt(n.getAttribute('data-swiper-slide-index'), 10))
								: (t.clickedIndex = l);
					else {
						(t.clickedSlide = void 0), (t.clickedIndex = void 0);
						return;
					}
					s.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
				}
				var P = {
					updateSize: ae,
					updateSlides: ce,
					updateAutoHeight: N,
					updateSlidesOffset: W,
					updateSlidesProgress: ne,
					updateProgress: K,
					updateSlidesClasses: v,
					updateActiveIndex: y,
					updateClickedSlide: A,
				};
				function Y(i) {
					i === void 0 && (i = this.isHorizontal() ? 'x' : 'y');
					const e = this,
						{ params: t, rtlTranslate: s, translate: n, wrapperEl: r } = e;
					if (t.virtualTranslate) return s ? -n : n;
					if (t.cssMode) return n;
					let l = (0, x.j)(r, i);
					return (l += e.cssOverflowAdjustment()), s && (l = -l), l || 0;
				}
				function Z(i, e) {
					const t = this,
						{ rtlTranslate: s, params: n, wrapperEl: r, progress: l } = t;
					let o = 0,
						a = 0;
					const p = 0;
					t.isHorizontal() ? (o = s ? -i : i) : (a = i),
						n.roundLengths && ((o = Math.floor(o)), (a = Math.floor(a))),
						(t.previousTranslate = t.translate),
						(t.translate = t.isHorizontal() ? o : a),
						n.cssMode
							? (r[t.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = t.isHorizontal() ? -o : -a)
							: n.virtualTranslate ||
							  (t.isHorizontal() ? (o -= t.cssOverflowAdjustment()) : (a -= t.cssOverflowAdjustment()),
							  (r.style.transform = `translate3d(${o}px, ${a}px, ${p}px)`));
					let d;
					const g = t.maxTranslate() - t.minTranslate();
					g === 0 ? (d = 0) : (d = (i - t.minTranslate()) / g), d !== l && t.updateProgress(i), t.emit('setTranslate', t.translate, e);
				}
				function le() {
					return -this.snapGrid[0];
				}
				function m() {
					return -this.snapGrid[this.snapGrid.length - 1];
				}
				function h(i, e, t, s, n) {
					i === void 0 && (i = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), s === void 0 && (s = !0);
					const r = this,
						{ params: l, wrapperEl: o } = r;
					if (r.animating && l.preventInteractionOnTransition) return !1;
					const a = r.minTranslate(),
						p = r.maxTranslate();
					let d;
					if ((s && i > a ? (d = a) : s && i < p ? (d = p) : (d = i), r.updateProgress(d), l.cssMode)) {
						const g = r.isHorizontal();
						if (e === 0) o[g ? 'scrollLeft' : 'scrollTop'] = -d;
						else {
							if (!r.support.smoothScroll) return (0, x.r)({ swiper: r, targetPosition: -d, side: g ? 'left' : 'top' }), !0;
							o.scrollTo({ [g ? 'left' : 'top']: -d, behavior: 'smooth' });
						}
						return !0;
					}
					return (
						e === 0
							? (r.setTransition(0), r.setTranslate(d), t && (r.emit('beforeTransitionStart', e, n), r.emit('transitionEnd')))
							: (r.setTransition(e),
							  r.setTranslate(d),
							  t && (r.emit('beforeTransitionStart', e, n), r.emit('transitionStart')),
							  r.animating ||
									((r.animating = !0),
									r.onTranslateToWrapperTransitionEnd ||
										(r.onTranslateToWrapperTransitionEnd = function (b) {
											!r ||
												r.destroyed ||
												(b.target === this &&
													(r.wrapperEl.removeEventListener('transitionend', r.onTranslateToWrapperTransitionEnd),
													(r.onTranslateToWrapperTransitionEnd = null),
													delete r.onTranslateToWrapperTransitionEnd,
													t && r.emit('transitionEnd')));
										}),
									r.wrapperEl.addEventListener('transitionend', r.onTranslateToWrapperTransitionEnd))),
						!0
					);
				}
				var C = { getTranslate: Y, setTranslate: Z, minTranslate: le, maxTranslate: m, translateTo: h };
				function B(i, e) {
					const t = this;
					t.params.cssMode || ((t.wrapperEl.style.transitionDuration = `${i}ms`), (t.wrapperEl.style.transitionDelay = i === 0 ? '0ms' : '')),
						t.emit('setTransition', i, e);
				}
				function X(i) {
					let { swiper: e, runCallbacks: t, direction: s, step: n } = i;
					const { activeIndex: r, previousIndex: l } = e;
					let o = s;
					if ((o || (r > l ? (o = 'next') : r < l ? (o = 'prev') : (o = 'reset')), e.emit(`transition${n}`), t && r !== l)) {
						if (o === 'reset') {
							e.emit(`slideResetTransition${n}`);
							return;
						}
						e.emit(`slideChangeTransition${n}`), o === 'next' ? e.emit(`slideNextTransition${n}`) : e.emit(`slidePrevTransition${n}`);
					}
				}
				function J(i, e) {
					i === void 0 && (i = !0);
					const t = this,
						{ params: s } = t;
					s.cssMode || (s.autoHeight && t.updateAutoHeight(), X({ swiper: t, runCallbacks: i, direction: e, step: 'Start' }));
				}
				function fe(i, e) {
					i === void 0 && (i = !0);
					const t = this,
						{ params: s } = t;
					(t.animating = !1), !s.cssMode && (t.setTransition(0), X({ swiper: t, runCallbacks: i, direction: e, step: 'End' }));
				}
				var pe = { setTransition: B, transitionStart: J, transitionEnd: fe };
				function ue(i, e, t, s, n) {
					i === void 0 && (i = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), typeof i == 'string' && (i = parseInt(i, 10));
					const r = this;
					let l = i;
					l < 0 && (l = 0);
					const { params: o, snapGrid: a, slidesGrid: p, previousIndex: d, activeIndex: g, rtlTranslate: b, wrapperEl: w, enabled: M } = r;
					if ((r.animating && o.preventInteractionOnTransition) || (!M && !s && !n) || r.destroyed) return !1;
					const I = Math.min(r.params.slidesPerGroupSkip, l);
					let k = I + Math.floor((l - I) / r.params.slidesPerGroup);
					k >= a.length && (k = a.length - 1);
					const E = -a[k];
					if (o.normalizeSlideIndex)
						for (let O = 0; O < p.length; O += 1) {
							const R = -Math.floor(E * 100),
								$ = Math.floor(p[O] * 100),
								ie = Math.floor(p[O + 1] * 100);
							typeof p[O + 1] < 'u' ? (R >= $ && R < ie - (ie - $) / 2 ? (l = O) : R >= $ && R < ie && (l = O + 1)) : R >= $ && (l = O);
						}
					if (
						r.initialized &&
						l !== g &&
						((!r.allowSlideNext && (b ? E > r.translate && E > r.minTranslate() : E < r.translate && E < r.minTranslate())) ||
							(!r.allowSlidePrev && E > r.translate && E > r.maxTranslate() && (g || 0) !== l))
					)
						return !1;
					l !== (d || 0) && t && r.emit('beforeSlideChangeStart'), r.updateProgress(E);
					let V;
					if ((l > g ? (V = 'next') : l < g ? (V = 'prev') : (V = 'reset'), (b && -E === r.translate) || (!b && E === r.translate)))
						return (
							r.updateActiveIndex(l),
							o.autoHeight && r.updateAutoHeight(),
							r.updateSlidesClasses(),
							o.effect !== 'slide' && r.setTranslate(E),
							V !== 'reset' && (r.transitionStart(t, V), r.transitionEnd(t, V)),
							!1
						);
					if (o.cssMode) {
						const O = r.isHorizontal(),
							R = b ? E : -E;
						if (e === 0) {
							const $ = r.virtual && r.params.virtual.enabled;
							$ && ((r.wrapperEl.style.scrollSnapType = 'none'), (r._immediateVirtual = !0)),
								$ && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
									? ((r._cssModeVirtualInitialSet = !0),
									  requestAnimationFrame(() => {
											w[O ? 'scrollLeft' : 'scrollTop'] = R;
									  }))
									: (w[O ? 'scrollLeft' : 'scrollTop'] = R),
								$ &&
									requestAnimationFrame(() => {
										(r.wrapperEl.style.scrollSnapType = ''), (r._immediateVirtual = !1);
									});
						} else {
							if (!r.support.smoothScroll) return (0, x.r)({ swiper: r, targetPosition: R, side: O ? 'left' : 'top' }), !0;
							w.scrollTo({ [O ? 'left' : 'top']: R, behavior: 'smooth' });
						}
						return !0;
					}
					return (
						r.setTransition(e),
						r.setTranslate(E),
						r.updateActiveIndex(l),
						r.updateSlidesClasses(),
						r.emit('beforeTransitionStart', e, s),
						r.transitionStart(t, V),
						e === 0
							? r.transitionEnd(t, V)
							: r.animating ||
							  ((r.animating = !0),
							  r.onSlideToWrapperTransitionEnd ||
									(r.onSlideToWrapperTransitionEnd = function (R) {
										!r ||
											r.destroyed ||
											(R.target === this &&
												(r.wrapperEl.removeEventListener('transitionend', r.onSlideToWrapperTransitionEnd),
												(r.onSlideToWrapperTransitionEnd = null),
												delete r.onSlideToWrapperTransitionEnd,
												r.transitionEnd(t, V)));
									}),
							  r.wrapperEl.addEventListener('transitionend', r.onSlideToWrapperTransitionEnd)),
						!0
					);
				}
				function Ze(i, e, t, s) {
					i === void 0 && (i = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), typeof i == 'string' && (i = parseInt(i, 10));
					const n = this;
					if (n.destroyed) return;
					const r = n.grid && n.params.grid && n.params.grid.rows > 1;
					let l = i;
					if (n.params.loop)
						if (n.virtual && n.params.virtual.enabled) l = l + n.virtual.slidesBefore;
						else {
							let o;
							if (r) {
								const b = l * n.params.grid.rows;
								o = n.slides.filter((w) => w.getAttribute('data-swiper-slide-index') * 1 === b)[0].column;
							} else o = n.getSlideIndexByData(l);
							const a = r ? Math.ceil(n.slides.length / n.params.grid.rows) : n.slides.length,
								{ centeredSlides: p } = n.params;
							let d = n.params.slidesPerView;
							d === 'auto'
								? (d = n.slidesPerViewDynamic())
								: ((d = Math.ceil(parseFloat(n.params.slidesPerView, 10))), p && d % 2 === 0 && (d = d + 1));
							let g = a - o < d;
							if ((p && (g = g || o < Math.ceil(d / 2)), g)) {
								const b = p ? (o < n.activeIndex ? 'prev' : 'next') : o - n.activeIndex - 1 < n.params.slidesPerView ? 'next' : 'prev';
								n.loopFix({
									direction: b,
									slideTo: !0,
									activeSlideIndex: b === 'next' ? o + 1 : o - a + 1,
									slideRealIndex: b === 'next' ? n.realIndex : void 0,
								});
							}
							if (r) {
								const b = l * n.params.grid.rows;
								l = n.slides.filter((w) => w.getAttribute('data-swiper-slide-index') * 1 === b)[0].column;
							} else l = n.getSlideIndexByData(l);
						}
					return (
						requestAnimationFrame(() => {
							n.slideTo(l, e, t, s);
						}),
						n
					);
				}
				function Je(i, e, t) {
					i === void 0 && (i = this.params.speed), e === void 0 && (e = !0);
					const s = this,
						{ enabled: n, params: r, animating: l } = s;
					if (!n || s.destroyed) return s;
					let o = r.slidesPerGroup;
					r.slidesPerView === 'auto' && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (o = Math.max(s.slidesPerViewDynamic('current', !0), 1));
					const a = s.activeIndex < r.slidesPerGroupSkip ? 1 : o,
						p = s.virtual && r.virtual.enabled;
					if (r.loop) {
						if (l && !p && r.loopPreventsSliding) return !1;
						if ((s.loopFix({ direction: 'next' }), (s._clientLeft = s.wrapperEl.clientLeft), s.activeIndex === s.slides.length - 1 && r.cssMode))
							return (
								requestAnimationFrame(() => {
									s.slideTo(s.activeIndex + a, i, e, t);
								}),
								!0
							);
					}
					return r.rewind && s.isEnd ? s.slideTo(0, i, e, t) : s.slideTo(s.activeIndex + a, i, e, t);
				}
				function Qe(i, e, t) {
					i === void 0 && (i = this.params.speed), e === void 0 && (e = !0);
					const s = this,
						{ params: n, snapGrid: r, slidesGrid: l, rtlTranslate: o, enabled: a, animating: p } = s;
					if (!a || s.destroyed) return s;
					const d = s.virtual && n.virtual.enabled;
					if (n.loop) {
						if (p && !d && n.loopPreventsSliding) return !1;
						s.loopFix({ direction: 'prev' }), (s._clientLeft = s.wrapperEl.clientLeft);
					}
					const g = o ? s.translate : -s.translate;
					function b(E) {
						return E < 0 ? -Math.floor(Math.abs(E)) : Math.floor(E);
					}
					const w = b(g),
						M = r.map((E) => b(E));
					let I = r[M.indexOf(w) - 1];
					if (typeof I > 'u' && n.cssMode) {
						let E;
						r.forEach((V, O) => {
							w >= V && (E = O);
						}),
							typeof E < 'u' && (I = r[E > 0 ? E - 1 : E]);
					}
					let k = 0;
					if (
						(typeof I < 'u' &&
							((k = l.indexOf(I)),
							k < 0 && (k = s.activeIndex - 1),
							n.slidesPerView === 'auto' &&
								n.slidesPerGroup === 1 &&
								n.slidesPerGroupAuto &&
								((k = k - s.slidesPerViewDynamic('previous', !0) + 1), (k = Math.max(k, 0)))),
						n.rewind && s.isBeginning)
					) {
						const E = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
						return s.slideTo(E, i, e, t);
					} else if (n.loop && s.activeIndex === 0 && n.cssMode)
						return (
							requestAnimationFrame(() => {
								s.slideTo(k, i, e, t);
							}),
							!0
						);
					return s.slideTo(k, i, e, t);
				}
				function et(i, e, t) {
					i === void 0 && (i = this.params.speed), e === void 0 && (e = !0);
					const s = this;
					if (!s.destroyed) return s.slideTo(s.activeIndex, i, e, t);
				}
				function tt(i, e, t, s) {
					i === void 0 && (i = this.params.speed), e === void 0 && (e = !0), s === void 0 && (s = 0.5);
					const n = this;
					if (n.destroyed) return;
					let r = n.activeIndex;
					const l = Math.min(n.params.slidesPerGroupSkip, r),
						o = l + Math.floor((r - l) / n.params.slidesPerGroup),
						a = n.rtlTranslate ? n.translate : -n.translate;
					if (a >= n.snapGrid[o]) {
						const p = n.snapGrid[o],
							d = n.snapGrid[o + 1];
						a - p > (d - p) * s && (r += n.params.slidesPerGroup);
					} else {
						const p = n.snapGrid[o - 1],
							d = n.snapGrid[o];
						a - p <= (d - p) * s && (r -= n.params.slidesPerGroup);
					}
					return (r = Math.max(r, 0)), (r = Math.min(r, n.slidesGrid.length - 1)), n.slideTo(r, i, e, t);
				}
				function it() {
					const i = this;
					if (i.destroyed) return;
					const { params: e, slidesEl: t } = i,
						s = e.slidesPerView === 'auto' ? i.slidesPerViewDynamic() : e.slidesPerView;
					let n = i.clickedIndex,
						r;
					const l = i.isElement ? 'swiper-slide' : `.${e.slideClass}`;
					if (e.loop) {
						if (i.animating) return;
						(r = parseInt(i.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
							e.centeredSlides
								? n < i.loopedSlides - s / 2 || n > i.slides.length - i.loopedSlides + s / 2
									? (i.loopFix(),
									  (n = i.getSlideIndex((0, x.e)(t, `${l}[data-swiper-slide-index="${r}"]`)[0])),
									  (0, x.n)(() => {
											i.slideTo(n);
									  }))
									: i.slideTo(n)
								: n > i.slides.length - s
								? (i.loopFix(),
								  (n = i.getSlideIndex((0, x.e)(t, `${l}[data-swiper-slide-index="${r}"]`)[0])),
								  (0, x.n)(() => {
										i.slideTo(n);
								  }))
								: i.slideTo(n);
					} else i.slideTo(n);
				}
				var st = { slideTo: ue, slideToLoop: Ze, slideNext: Je, slidePrev: Qe, slideReset: et, slideToClosest: tt, slideToClickedSlide: it };
				function rt(i) {
					const e = this,
						{ params: t, slidesEl: s } = e;
					if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
					const n = () => {
							(0, x.e)(s, `.${t.slideClass}, swiper-slide`).forEach((g, b) => {
								g.setAttribute('data-swiper-slide-index', b);
							});
						},
						r = e.grid && t.grid && t.grid.rows > 1,
						l = t.slidesPerGroup * (r ? t.grid.rows : 1),
						o = e.slides.length % l !== 0,
						a = r && e.slides.length % t.grid.rows !== 0,
						p = (d) => {
							for (let g = 0; g < d; g += 1) {
								const b = e.isElement ? (0, x.c)('swiper-slide', [t.slideBlankClass]) : (0, x.c)('div', [t.slideClass, t.slideBlankClass]);
								e.slidesEl.append(b);
							}
						};
					if (o) {
						if (t.loopAddBlankSlides) {
							const d = l - (e.slides.length % l);
							p(d), e.recalcSlides(), e.updateSlides();
						} else
							(0, x.t)(
								'Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
							);
						n();
					} else if (a) {
						if (t.loopAddBlankSlides) {
							const d = t.grid.rows - (e.slides.length % t.grid.rows);
							p(d), e.recalcSlides(), e.updateSlides();
						} else
							(0, x.t)(
								'Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
							);
						n();
					} else n();
					e.loopFix({ slideRealIndex: i, direction: t.centeredSlides ? void 0 : 'next' });
				}
				function nt(i) {
					let {
						slideRealIndex: e,
						slideTo: t = !0,
						direction: s,
						setTranslate: n,
						activeSlideIndex: r,
						byController: l,
						byMousewheel: o,
					} = i === void 0 ? {} : i;
					const a = this;
					if (!a.params.loop) return;
					a.emit('beforeLoopFix');
					const { slides: p, allowSlidePrev: d, allowSlideNext: g, slidesEl: b, params: w } = a,
						{ centeredSlides: M } = w;
					if (((a.allowSlidePrev = !0), (a.allowSlideNext = !0), a.virtual && w.virtual.enabled)) {
						t &&
							(!w.centeredSlides && a.snapIndex === 0
								? a.slideTo(a.virtual.slides.length, 0, !1, !0)
								: w.centeredSlides && a.snapIndex < w.slidesPerView
								? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0)
								: a.snapIndex === a.snapGrid.length - 1 && a.slideTo(a.virtual.slidesBefore, 0, !1, !0)),
							(a.allowSlidePrev = d),
							(a.allowSlideNext = g),
							a.emit('loopFix');
						return;
					}
					let I = w.slidesPerView;
					I === 'auto' ? (I = a.slidesPerViewDynamic()) : ((I = Math.ceil(parseFloat(w.slidesPerView, 10))), M && I % 2 === 0 && (I = I + 1));
					const k = w.slidesPerGroupAuto ? I : w.slidesPerGroup;
					let E = k;
					E % k !== 0 && (E += k - (E % k)), (E += w.loopAdditionalSlides), (a.loopedSlides = E);
					const V = a.grid && w.grid && w.grid.rows > 1;
					p.length < I + E
						? (0, x.t)(
								'Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters'
						  )
						: V && w.grid.fill === 'row' && (0, x.t)('Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`');
					const O = [],
						R = [];
					let $ = a.activeIndex;
					typeof r > 'u' ? (r = a.getSlideIndex(p.filter((F) => F.classList.contains(w.slideActiveClass))[0])) : ($ = r);
					const ie = s === 'next' || !s,
						Ee = s === 'prev' || !s;
					let se = 0,
						H = 0;
					const z = V ? Math.ceil(p.length / w.grid.rows) : p.length,
						U = (V ? p[r].column : r) + (M && typeof n > 'u' ? -I / 2 + 0.5 : 0);
					if (U < E) {
						se = Math.max(E - U, k);
						for (let F = 0; F < E - U; F += 1) {
							const me = F - Math.floor(F / z) * z;
							if (V) {
								const ve = z - me - 1;
								for (let ye = p.length - 1; ye >= 0; ye -= 1) p[ye].column === ve && O.push(ye);
							} else O.push(z - me - 1);
						}
					} else if (U + I > z - E) {
						H = Math.max(U - (z - E * 2), k);
						for (let F = 0; F < H; F += 1) {
							const me = F - Math.floor(F / z) * z;
							V
								? p.forEach((ve, ye) => {
										ve.column === me && R.push(ye);
								  })
								: R.push(me);
						}
					}
					if (
						((a.__preventObserver__ = !0),
						requestAnimationFrame(() => {
							a.__preventObserver__ = !1;
						}),
						Ee &&
							O.forEach((F) => {
								(p[F].swiperLoopMoveDOM = !0), b.prepend(p[F]), (p[F].swiperLoopMoveDOM = !1);
							}),
						ie &&
							R.forEach((F) => {
								(p[F].swiperLoopMoveDOM = !0), b.append(p[F]), (p[F].swiperLoopMoveDOM = !1);
							}),
						a.recalcSlides(),
						w.slidesPerView === 'auto'
							? a.updateSlides()
							: V &&
							  ((O.length > 0 && Ee) || (R.length > 0 && ie)) &&
							  a.slides.forEach((F, me) => {
									a.grid.updateSlide(me, F, a.slides);
							  }),
						w.watchSlidesProgress && a.updateSlidesOffset(),
						t)
					) {
						if (O.length > 0 && Ee) {
							if (typeof e > 'u') {
								const F = a.slidesGrid[$],
									ve = a.slidesGrid[$ + se] - F;
								o
									? a.setTranslate(a.translate - ve)
									: (a.slideTo($ + Math.ceil(se), 0, !1, !0),
									  n &&
											((a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - ve),
											(a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - ve)));
							} else if (n) {
								const F = V ? O.length / w.grid.rows : O.length;
								a.slideTo(a.activeIndex + F, 0, !1, !0), (a.touchEventsData.currentTranslate = a.translate);
							}
						} else if (R.length > 0 && ie)
							if (typeof e > 'u') {
								const F = a.slidesGrid[$],
									ve = a.slidesGrid[$ - H] - F;
								o
									? a.setTranslate(a.translate - ve)
									: (a.slideTo($ - H, 0, !1, !0),
									  n &&
											((a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - ve),
											(a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - ve)));
							} else {
								const F = V ? R.length / w.grid.rows : R.length;
								a.slideTo(a.activeIndex - F, 0, !1, !0);
							}
					}
					if (((a.allowSlidePrev = d), (a.allowSlideNext = g), a.controller && a.controller.control && !l)) {
						const F = { slideRealIndex: e, direction: s, setTranslate: n, activeSlideIndex: r, byController: !0 };
						Array.isArray(a.controller.control)
							? a.controller.control.forEach((me) => {
									!me.destroyed && me.params.loop && me.loopFix({ ...F, slideTo: me.params.slidesPerView === w.slidesPerView ? t : !1 });
							  })
							: a.controller.control instanceof a.constructor &&
							  a.controller.control.params.loop &&
							  a.controller.control.loopFix({ ...F, slideTo: a.controller.control.params.slidesPerView === w.slidesPerView ? t : !1 });
					}
					a.emit('loopFix');
				}
				function at() {
					const i = this,
						{ params: e, slidesEl: t } = i;
					if (!e.loop || (i.virtual && i.params.virtual.enabled)) return;
					i.recalcSlides();
					const s = [];
					i.slides.forEach((n) => {
						const r = typeof n.swiperSlideIndex > 'u' ? n.getAttribute('data-swiper-slide-index') * 1 : n.swiperSlideIndex;
						s[r] = n;
					}),
						i.slides.forEach((n) => {
							n.removeAttribute('data-swiper-slide-index');
						}),
						s.forEach((n) => {
							t.append(n);
						}),
						i.recalcSlides(),
						i.slideTo(i.realIndex, 0);
				}
				var lt = { loopCreate: rt, loopFix: nt, loopDestroy: at };
				function ot(i) {
					const e = this;
					if (!e.params.simulateTouch || (e.params.watchOverflow && e.isLocked) || e.params.cssMode) return;
					const t = e.params.touchEventsTarget === 'container' ? e.el : e.wrapperEl;
					e.isElement && (e.__preventObserver__ = !0),
						(t.style.cursor = 'move'),
						(t.style.cursor = i ? 'grabbing' : 'grab'),
						e.isElement &&
							requestAnimationFrame(() => {
								e.__preventObserver__ = !1;
							});
				}
				function dt() {
					const i = this;
					(i.params.watchOverflow && i.isLocked) ||
						i.params.cssMode ||
						(i.isElement && (i.__preventObserver__ = !0),
						(i[i.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = ''),
						i.isElement &&
							requestAnimationFrame(() => {
								i.__preventObserver__ = !1;
							}));
				}
				var ct = { setGrabCursor: ot, unsetGrabCursor: dt };
				function ft(i, e) {
					e === void 0 && (e = this);
					function t(s) {
						if (!s || s === (0, _.g)() || s === (0, _.a)()) return null;
						s.assignedSlot && (s = s.assignedSlot);
						const n = s.closest(i);
						return !n && !s.getRootNode ? null : n || t(s.getRootNode().host);
					}
					return t(e);
				}
				function Ge(i, e, t) {
					const s = (0, _.a)(),
						{ params: n } = i,
						r = n.edgeSwipeDetection,
						l = n.edgeSwipeThreshold;
					return r && (t <= l || t >= s.innerWidth - l) ? (r === 'prevent' ? (e.preventDefault(), !0) : !1) : !0;
				}
				function ut(i) {
					const e = this,
						t = (0, _.g)();
					let s = i;
					s.originalEvent && (s = s.originalEvent);
					const n = e.touchEventsData;
					if (s.type === 'pointerdown') {
						if (n.pointerId !== null && n.pointerId !== s.pointerId) return;
						n.pointerId = s.pointerId;
					} else s.type === 'touchstart' && s.targetTouches.length === 1 && (n.touchId = s.targetTouches[0].identifier);
					if (s.type === 'touchstart') {
						Ge(e, s, s.targetTouches[0].pageX);
						return;
					}
					const { params: r, touches: l, enabled: o } = e;
					if (!o || (!r.simulateTouch && s.pointerType === 'mouse') || (e.animating && r.preventInteractionOnTransition)) return;
					!e.animating && r.cssMode && r.loop && e.loopFix();
					let a = s.target;
					if (
						(r.touchEventsTarget === 'wrapper' && !e.wrapperEl.contains(a)) ||
						('which' in s && s.which === 3) ||
						('button' in s && s.button > 0) ||
						(n.isTouched && n.isMoved)
					)
						return;
					const p = !!r.noSwipingClass && r.noSwipingClass !== '',
						d = s.composedPath ? s.composedPath() : s.path;
					p && s.target && s.target.shadowRoot && d && (a = d[0]);
					const g = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
						b = !!(s.target && s.target.shadowRoot);
					if (r.noSwiping && (b ? ft(g, a) : a.closest(g))) {
						e.allowClick = !0;
						return;
					}
					if (r.swipeHandler && !a.closest(r.swipeHandler)) return;
					(l.currentX = s.pageX), (l.currentY = s.pageY);
					const w = l.currentX,
						M = l.currentY;
					if (!Ge(e, s, w)) return;
					Object.assign(n, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
						(l.startX = w),
						(l.startY = M),
						(n.touchStartTime = (0, x.d)()),
						(e.allowClick = !0),
						e.updateSize(),
						(e.swipeDirection = void 0),
						r.threshold > 0 && (n.allowThresholdMove = !1);
					let I = !0;
					a.matches(n.focusableElements) && ((I = !1), a.nodeName === 'SELECT' && (n.isTouched = !1)),
						t.activeElement && t.activeElement.matches(n.focusableElements) && t.activeElement !== a && t.activeElement.blur();
					const k = I && e.allowTouchMove && r.touchStartPreventDefault;
					(r.touchStartForcePreventDefault || k) && !a.isContentEditable && s.preventDefault(),
						r.freeMode && r.freeMode.enabled && e.freeMode && e.animating && !r.cssMode && e.freeMode.onTouchStart(),
						e.emit('touchStart', s);
				}
				function pt(i) {
					const e = (0, _.g)(),
						t = this,
						s = t.touchEventsData,
						{ params: n, touches: r, rtlTranslate: l, enabled: o } = t;
					if (!o || (!n.simulateTouch && i.pointerType === 'mouse')) return;
					let a = i;
					if ((a.originalEvent && (a = a.originalEvent), a.type === 'pointermove' && (s.touchId !== null || a.pointerId !== s.pointerId))) return;
					let p;
					if (a.type === 'touchmove') {
						if (((p = [...a.changedTouches].filter((ie) => ie.identifier === s.touchId)[0]), !p || p.identifier !== s.touchId)) return;
					} else p = a;
					if (!s.isTouched) {
						s.startMoving && s.isScrolling && t.emit('touchMoveOpposite', a);
						return;
					}
					const d = p.pageX,
						g = p.pageY;
					if (a.preventedByNestedSwiper) {
						(r.startX = d), (r.startY = g);
						return;
					}
					if (!t.allowTouchMove) {
						a.target.matches(s.focusableElements) || (t.allowClick = !1),
							s.isTouched && (Object.assign(r, { startX: d, startY: g, currentX: d, currentY: g }), (s.touchStartTime = (0, x.d)()));
						return;
					}
					if (n.touchReleaseOnEdges && !n.loop) {
						if (t.isVertical()) {
							if ((g < r.startY && t.translate <= t.maxTranslate()) || (g > r.startY && t.translate >= t.minTranslate())) {
								(s.isTouched = !1), (s.isMoved = !1);
								return;
							}
						} else if ((d < r.startX && t.translate <= t.maxTranslate()) || (d > r.startX && t.translate >= t.minTranslate())) return;
					}
					if (e.activeElement && a.target === e.activeElement && a.target.matches(s.focusableElements)) {
						(s.isMoved = !0), (t.allowClick = !1);
						return;
					}
					s.allowTouchCallbacks && t.emit('touchMove', a), (r.previousX = r.currentX), (r.previousY = r.currentY), (r.currentX = d), (r.currentY = g);
					const b = r.currentX - r.startX,
						w = r.currentY - r.startY;
					if (t.params.threshold && Math.sqrt(b ** 2 + w ** 2) < t.params.threshold) return;
					if (typeof s.isScrolling > 'u') {
						let ie;
						(t.isHorizontal() && r.currentY === r.startY) || (t.isVertical() && r.currentX === r.startX)
							? (s.isScrolling = !1)
							: b * b + w * w >= 25 &&
							  ((ie = (Math.atan2(Math.abs(w), Math.abs(b)) * 180) / Math.PI),
							  (s.isScrolling = t.isHorizontal() ? ie > n.touchAngle : 90 - ie > n.touchAngle));
					}
					if (
						(s.isScrolling && t.emit('touchMoveOpposite', a),
						typeof s.startMoving > 'u' && (r.currentX !== r.startX || r.currentY !== r.startY) && (s.startMoving = !0),
						s.isScrolling)
					) {
						s.isTouched = !1;
						return;
					}
					if (!s.startMoving) return;
					(t.allowClick = !1), !n.cssMode && a.cancelable && a.preventDefault(), n.touchMoveStopPropagation && !n.nested && a.stopPropagation();
					let M = t.isHorizontal() ? b : w,
						I = t.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
					n.oneWayMovement && ((M = Math.abs(M) * (l ? 1 : -1)), (I = Math.abs(I) * (l ? 1 : -1))),
						(r.diff = M),
						(M *= n.touchRatio),
						l && ((M = -M), (I = -I));
					const k = t.touchesDirection;
					(t.swipeDirection = M > 0 ? 'prev' : 'next'), (t.touchesDirection = I > 0 ? 'prev' : 'next');
					const E = t.params.loop && !n.cssMode,
						V = (t.touchesDirection === 'next' && t.allowSlideNext) || (t.touchesDirection === 'prev' && t.allowSlidePrev);
					if (!s.isMoved) {
						if ((E && V && t.loopFix({ direction: t.swipeDirection }), (s.startTranslate = t.getTranslate()), t.setTransition(0), t.animating)) {
							const ie = new window.CustomEvent('transitionend', { bubbles: !0, cancelable: !0 });
							t.wrapperEl.dispatchEvent(ie);
						}
						(s.allowMomentumBounce = !1),
							n.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0),
							t.emit('sliderFirstMove', a);
					}
					let O;
					if ((new Date().getTime(), s.isMoved && s.allowThresholdMove && k !== t.touchesDirection && E && V && Math.abs(M) >= 1)) {
						Object.assign(r, { startX: d, startY: g, currentX: d, currentY: g, startTranslate: s.currentTranslate }),
							(s.loopSwapReset = !0),
							(s.startTranslate = s.currentTranslate);
						return;
					}
					t.emit('sliderMove', a), (s.isMoved = !0), (s.currentTranslate = M + s.startTranslate);
					let R = !0,
						$ = n.resistanceRatio;
					if (
						(n.touchReleaseOnEdges && ($ = 0),
						M > 0
							? (E &&
									V &&
									!O &&
									s.allowThresholdMove &&
									s.currentTranslate > (n.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] : t.minTranslate()) &&
									t.loopFix({ direction: 'prev', setTranslate: !0, activeSlideIndex: 0 }),
							  s.currentTranslate > t.minTranslate() &&
									((R = !1), n.resistance && (s.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + s.startTranslate + M) ** $)))
							: M < 0 &&
							  (E &&
									V &&
									!O &&
									s.allowThresholdMove &&
									s.currentTranslate < (n.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] : t.maxTranslate()) &&
									t.loopFix({
										direction: 'next',
										setTranslate: !0,
										activeSlideIndex:
											t.slides.length - (n.slidesPerView === 'auto' ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(n.slidesPerView, 10))),
									}),
							  s.currentTranslate < t.maxTranslate() &&
									((R = !1), n.resistance && (s.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - s.startTranslate - M) ** $))),
						R && (a.preventedByNestedSwiper = !0),
						!t.allowSlideNext && t.swipeDirection === 'next' && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate),
						!t.allowSlidePrev && t.swipeDirection === 'prev' && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate),
						!t.allowSlidePrev && !t.allowSlideNext && (s.currentTranslate = s.startTranslate),
						n.threshold > 0)
					)
						if (Math.abs(M) > n.threshold || s.allowThresholdMove) {
							if (!s.allowThresholdMove) {
								(s.allowThresholdMove = !0),
									(r.startX = r.currentX),
									(r.startY = r.currentY),
									(s.currentTranslate = s.startTranslate),
									(r.diff = t.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY);
								return;
							}
						} else {
							s.currentTranslate = s.startTranslate;
							return;
						}
					!n.followFinger ||
						n.cssMode ||
						(((n.freeMode && n.freeMode.enabled && t.freeMode) || n.watchSlidesProgress) && (t.updateActiveIndex(), t.updateSlidesClasses()),
						n.freeMode && n.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(),
						t.updateProgress(s.currentTranslate),
						t.setTranslate(s.currentTranslate));
				}
				function mt(i) {
					const e = this,
						t = e.touchEventsData;
					let s = i;
					s.originalEvent && (s = s.originalEvent);
					let n;
					if (s.type === 'touchend' || s.type === 'touchcancel') {
						if (((n = [...s.changedTouches].filter(($) => $.identifier === t.touchId)[0]), !n || n.identifier !== t.touchId)) return;
					} else {
						if (t.touchId !== null || s.pointerId !== t.pointerId) return;
						n = s;
					}
					if (
						['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(s.type) &&
						!(['pointercancel', 'contextmenu'].includes(s.type) && (e.browser.isSafari || e.browser.isWebView))
					)
						return;
					(t.pointerId = null), (t.touchId = null);
					const { params: l, touches: o, rtlTranslate: a, slidesGrid: p, enabled: d } = e;
					if (!d || (!l.simulateTouch && s.pointerType === 'mouse')) return;
					if ((t.allowTouchCallbacks && e.emit('touchEnd', s), (t.allowTouchCallbacks = !1), !t.isTouched)) {
						t.isMoved && l.grabCursor && e.setGrabCursor(!1), (t.isMoved = !1), (t.startMoving = !1);
						return;
					}
					l.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
					const g = (0, x.d)(),
						b = g - t.touchStartTime;
					if (e.allowClick) {
						const $ = s.path || (s.composedPath && s.composedPath());
						e.updateClickedSlide(($ && $[0]) || s.target, $),
							e.emit('tap click', s),
							b < 300 && g - t.lastClickTime < 300 && e.emit('doubleTap doubleClick', s);
					}
					if (
						((t.lastClickTime = (0, x.d)()),
						(0, x.n)(() => {
							e.destroyed || (e.allowClick = !0);
						}),
						!t.isTouched ||
							!t.isMoved ||
							!e.swipeDirection ||
							(o.diff === 0 && !t.loopSwapReset) ||
							(t.currentTranslate === t.startTranslate && !t.loopSwapReset))
					) {
						(t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
						return;
					}
					(t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
					let w;
					if ((l.followFinger ? (w = a ? e.translate : -e.translate) : (w = -t.currentTranslate), l.cssMode)) return;
					if (l.freeMode && l.freeMode.enabled) {
						e.freeMode.onTouchEnd({ currentPos: w });
						return;
					}
					const M = w >= -e.maxTranslate() && !e.params.loop;
					let I = 0,
						k = e.slidesSizesGrid[0];
					for (let $ = 0; $ < p.length; $ += $ < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup) {
						const ie = $ < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
						typeof p[$ + ie] < 'u'
							? (M || (w >= p[$] && w < p[$ + ie])) && ((I = $), (k = p[$ + ie] - p[$]))
							: (M || w >= p[$]) && ((I = $), (k = p[p.length - 1] - p[p.length - 2]));
					}
					let E = null,
						V = null;
					l.rewind &&
						(e.isBeginning
							? (V = l.virtual && l.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1)
							: e.isEnd && (E = 0));
					const O = (w - p[I]) / k,
						R = I < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
					if (b > l.longSwipesMs) {
						if (!l.longSwipes) {
							e.slideTo(e.activeIndex);
							return;
						}
						e.swipeDirection === 'next' && (O >= l.longSwipesRatio ? e.slideTo(l.rewind && e.isEnd ? E : I + R) : e.slideTo(I)),
							e.swipeDirection === 'prev' &&
								(O > 1 - l.longSwipesRatio ? e.slideTo(I + R) : V !== null && O < 0 && Math.abs(O) > l.longSwipesRatio ? e.slideTo(V) : e.slideTo(I));
					} else {
						if (!l.shortSwipes) {
							e.slideTo(e.activeIndex);
							return;
						}
						e.navigation && (s.target === e.navigation.nextEl || s.target === e.navigation.prevEl)
							? s.target === e.navigation.nextEl
								? e.slideTo(I + R)
								: e.slideTo(I)
							: (e.swipeDirection === 'next' && e.slideTo(E !== null ? E : I + R), e.swipeDirection === 'prev' && e.slideTo(V !== null ? V : I));
					}
				}
				function Re() {
					const i = this,
						{ params: e, el: t } = i;
					if (t && t.offsetWidth === 0) return;
					e.breakpoints && i.setBreakpoint();
					const { allowSlideNext: s, allowSlidePrev: n, snapGrid: r } = i,
						l = i.virtual && i.params.virtual.enabled;
					(i.allowSlideNext = !0), (i.allowSlidePrev = !0), i.updateSize(), i.updateSlides(), i.updateSlidesClasses();
					const o = l && e.loop;
					(e.slidesPerView === 'auto' || e.slidesPerView > 1) && i.isEnd && !i.isBeginning && !i.params.centeredSlides && !o
						? i.slideTo(i.slides.length - 1, 0, !1, !0)
						: i.params.loop && !l
						? i.slideToLoop(i.realIndex, 0, !1, !0)
						: i.slideTo(i.activeIndex, 0, !1, !0),
						i.autoplay &&
							i.autoplay.running &&
							i.autoplay.paused &&
							(clearTimeout(i.autoplay.resizeTimeout),
							(i.autoplay.resizeTimeout = setTimeout(() => {
								i.autoplay && i.autoplay.running && i.autoplay.paused && i.autoplay.resume();
							}, 500))),
						(i.allowSlidePrev = n),
						(i.allowSlideNext = s),
						i.params.watchOverflow && r !== i.snapGrid && i.checkOverflow();
				}
				function gt(i) {
					const e = this;
					e.enabled &&
						(e.allowClick ||
							(e.params.preventClicks && i.preventDefault(),
							e.params.preventClicksPropagation && e.animating && (i.stopPropagation(), i.stopImmediatePropagation())));
				}
				function ht() {
					const i = this,
						{ wrapperEl: e, rtlTranslate: t, enabled: s } = i;
					if (!s) return;
					(i.previousTranslate = i.translate),
						i.isHorizontal() ? (i.translate = -e.scrollLeft) : (i.translate = -e.scrollTop),
						i.translate === 0 && (i.translate = 0),
						i.updateActiveIndex(),
						i.updateSlidesClasses();
					let n;
					const r = i.maxTranslate() - i.minTranslate();
					r === 0 ? (n = 0) : (n = (i.translate - i.minTranslate()) / r),
						n !== i.progress && i.updateProgress(t ? -i.translate : i.translate),
						i.emit('setTranslate', i.translate, !1);
				}
				function vt(i) {
					const e = this;
					T(e, i.target), !(e.params.cssMode || (e.params.slidesPerView !== 'auto' && !e.params.autoHeight)) && e.update();
				}
				function wt() {
					const i = this;
					i.documentTouchHandlerProceeded ||
						((i.documentTouchHandlerProceeded = !0), i.params.touchReleaseOnEdges && (i.el.style.touchAction = 'auto'));
				}
				const $e = (i, e) => {
					const t = (0, _.g)(),
						{ params: s, el: n, wrapperEl: r, device: l } = i,
						o = !!s.nested,
						a = e === 'on' ? 'addEventListener' : 'removeEventListener',
						p = e;
					t[a]('touchstart', i.onDocumentTouchStart, { passive: !1, capture: o }),
						n[a]('touchstart', i.onTouchStart, { passive: !1 }),
						n[a]('pointerdown', i.onTouchStart, { passive: !1 }),
						t[a]('touchmove', i.onTouchMove, { passive: !1, capture: o }),
						t[a]('pointermove', i.onTouchMove, { passive: !1, capture: o }),
						t[a]('touchend', i.onTouchEnd, { passive: !0 }),
						t[a]('pointerup', i.onTouchEnd, { passive: !0 }),
						t[a]('pointercancel', i.onTouchEnd, { passive: !0 }),
						t[a]('touchcancel', i.onTouchEnd, { passive: !0 }),
						t[a]('pointerout', i.onTouchEnd, { passive: !0 }),
						t[a]('pointerleave', i.onTouchEnd, { passive: !0 }),
						t[a]('contextmenu', i.onTouchEnd, { passive: !0 }),
						(s.preventClicks || s.preventClicksPropagation) && n[a]('click', i.onClick, !0),
						s.cssMode && r[a]('scroll', i.onScroll),
						s.updateOnWindowResize
							? i[p](l.ios || l.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', Re, !0)
							: i[p]('observerUpdate', Re, !0),
						n[a]('load', i.onLoad, { capture: !0 });
				};
				function bt() {
					const i = this,
						{ params: e } = i;
					(i.onTouchStart = ut.bind(i)),
						(i.onTouchMove = pt.bind(i)),
						(i.onTouchEnd = mt.bind(i)),
						(i.onDocumentTouchStart = wt.bind(i)),
						e.cssMode && (i.onScroll = ht.bind(i)),
						(i.onClick = gt.bind(i)),
						(i.onLoad = vt.bind(i)),
						$e(i, 'on');
				}
				function St() {
					$e(this, 'off');
				}
				var Et = { attachEvents: bt, detachEvents: St };
				const ke = (i, e) => i.grid && e.grid && e.grid.rows > 1;
				function Tt() {
					const i = this,
						{ realIndex: e, initialized: t, params: s, el: n } = i,
						r = s.breakpoints;
					if (!r || (r && Object.keys(r).length === 0)) return;
					const l = i.getBreakpoint(r, i.params.breakpointsBase, i.el);
					if (!l || i.currentBreakpoint === l) return;
					const a = (l in r ? r[l] : void 0) || i.originalParams,
						p = ke(i, s),
						d = ke(i, a),
						g = s.enabled;
					p && !d
						? (n.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`), i.emitContainerClasses())
						: !p &&
						  d &&
						  (n.classList.add(`${s.containerModifierClass}grid`),
						  ((a.grid.fill && a.grid.fill === 'column') || (!a.grid.fill && s.grid.fill === 'column')) &&
								n.classList.add(`${s.containerModifierClass}grid-column`),
						  i.emitContainerClasses()),
						['navigation', 'pagination', 'scrollbar'].forEach((E) => {
							if (typeof a[E] > 'u') return;
							const V = s[E] && s[E].enabled,
								O = a[E] && a[E].enabled;
							V && !O && i[E].disable(), !V && O && i[E].enable();
						});
					const b = a.direction && a.direction !== s.direction,
						w = s.loop && (a.slidesPerView !== s.slidesPerView || b),
						M = s.loop;
					b && t && i.changeDirection(), (0, x.u)(i.params, a);
					const I = i.params.enabled,
						k = i.params.loop;
					Object.assign(i, {
						allowTouchMove: i.params.allowTouchMove,
						allowSlideNext: i.params.allowSlideNext,
						allowSlidePrev: i.params.allowSlidePrev,
					}),
						g && !I ? i.disable() : !g && I && i.enable(),
						(i.currentBreakpoint = l),
						i.emit('_beforeBreakpoint', a),
						t &&
							(w ? (i.loopDestroy(), i.loopCreate(e), i.updateSlides()) : !M && k ? (i.loopCreate(e), i.updateSlides()) : M && !k && i.loopDestroy()),
						i.emit('breakpoint', a);
				}
				function xt(i, e, t) {
					if ((e === void 0 && (e = 'window'), !i || (e === 'container' && !t))) return;
					let s = !1;
					const n = (0, _.a)(),
						r = e === 'window' ? n.innerHeight : t.clientHeight,
						l = Object.keys(i).map((o) => {
							if (typeof o == 'string' && o.indexOf('@') === 0) {
								const a = parseFloat(o.substr(1));
								return { value: r * a, point: o };
							}
							return { value: o, point: o };
						});
					l.sort((o, a) => parseInt(o.value, 10) - parseInt(a.value, 10));
					for (let o = 0; o < l.length; o += 1) {
						const { point: a, value: p } = l[o];
						e === 'window' ? n.matchMedia(`(min-width: ${p}px)`).matches && (s = a) : p <= t.clientWidth && (s = a);
					}
					return s || 'max';
				}
				var yt = { setBreakpoint: Tt, getBreakpoint: xt };
				function Ct(i, e) {
					const t = [];
					return (
						i.forEach((s) => {
							typeof s == 'object'
								? Object.keys(s).forEach((n) => {
										s[n] && t.push(e + n);
								  })
								: typeof s == 'string' && t.push(e + s);
						}),
						t
					);
				}
				function Pt() {
					const i = this,
						{ classNames: e, params: t, rtl: s, el: n, device: r } = i,
						l = Ct(
							[
								'initialized',
								t.direction,
								{ 'free-mode': i.params.freeMode && t.freeMode.enabled },
								{ autoheight: t.autoHeight },
								{ rtl: s },
								{ grid: t.grid && t.grid.rows > 1 },
								{ 'grid-column': t.grid && t.grid.rows > 1 && t.grid.fill === 'column' },
								{ android: r.android },
								{ ios: r.ios },
								{ 'css-mode': t.cssMode },
								{ centered: t.cssMode && t.centeredSlides },
								{ 'watch-progress': t.watchSlidesProgress },
							],
							t.containerModifierClass
						);
					e.push(...l), n.classList.add(...e), i.emitContainerClasses();
				}
				function Mt() {
					const i = this,
						{ el: e, classNames: t } = i;
					e.classList.remove(...t), i.emitContainerClasses();
				}
				var Lt = { addClasses: Pt, removeClasses: Mt };
				function _t() {
					const i = this,
						{ isLocked: e, params: t } = i,
						{ slidesOffsetBefore: s } = t;
					if (s) {
						const n = i.slides.length - 1,
							r = i.slidesGrid[n] + i.slidesSizesGrid[n] + s * 2;
						i.isLocked = i.size > r;
					} else i.isLocked = i.snapGrid.length === 1;
					t.allowSlideNext === !0 && (i.allowSlideNext = !i.isLocked),
						t.allowSlidePrev === !0 && (i.allowSlidePrev = !i.isLocked),
						e && e !== i.isLocked && (i.isEnd = !1),
						e !== i.isLocked && i.emit(i.isLocked ? 'lock' : 'unlock');
				}
				var It = { checkOverflow: _t },
					Oe = {
						init: !0,
						direction: 'horizontal',
						oneWayMovement: !1,
						swiperElementNodeName: 'SWIPER-CONTAINER',
						touchEventsTarget: 'wrapper',
						initialSlide: 0,
						speed: 300,
						cssMode: !1,
						updateOnWindowResize: !0,
						resizeObserver: !0,
						nested: !1,
						createElements: !1,
						eventsPrefix: 'swiper',
						enabled: !0,
						focusableElements: 'input, select, option, textarea, button, video, label',
						width: null,
						height: null,
						preventInteractionOnTransition: !1,
						userAgent: null,
						url: null,
						edgeSwipeDetection: !1,
						edgeSwipeThreshold: 20,
						autoHeight: !1,
						setWrapperSize: !1,
						virtualTranslate: !1,
						effect: 'slide',
						breakpoints: void 0,
						breakpointsBase: 'window',
						spaceBetween: 0,
						slidesPerView: 1,
						slidesPerGroup: 1,
						slidesPerGroupSkip: 0,
						slidesPerGroupAuto: !1,
						centeredSlides: !1,
						centeredSlidesBounds: !1,
						slidesOffsetBefore: 0,
						slidesOffsetAfter: 0,
						normalizeSlideIndex: !0,
						centerInsufficientSlides: !1,
						watchOverflow: !0,
						roundLengths: !1,
						touchRatio: 1,
						touchAngle: 45,
						simulateTouch: !0,
						shortSwipes: !0,
						longSwipes: !0,
						longSwipesRatio: 0.5,
						longSwipesMs: 300,
						followFinger: !0,
						allowTouchMove: !0,
						threshold: 5,
						touchMoveStopPropagation: !1,
						touchStartPreventDefault: !0,
						touchStartForcePreventDefault: !1,
						touchReleaseOnEdges: !1,
						uniqueNavElements: !0,
						resistance: !0,
						resistanceRatio: 0.85,
						watchSlidesProgress: !1,
						grabCursor: !1,
						preventClicks: !0,
						preventClicksPropagation: !0,
						slideToClickedSlide: !1,
						loop: !1,
						loopAddBlankSlides: !0,
						loopAdditionalSlides: 0,
						loopPreventsSliding: !0,
						rewind: !1,
						allowSlidePrev: !0,
						allowSlideNext: !0,
						swipeHandler: null,
						noSwiping: !0,
						noSwipingClass: 'swiper-no-swiping',
						noSwipingSelector: null,
						passiveListeners: !0,
						maxBackfaceHiddenSlides: 10,
						containerModifierClass: 'swiper-',
						slideClass: 'swiper-slide',
						slideBlankClass: 'swiper-slide-blank',
						slideActiveClass: 'swiper-slide-active',
						slideVisibleClass: 'swiper-slide-visible',
						slideFullyVisibleClass: 'swiper-slide-fully-visible',
						slideNextClass: 'swiper-slide-next',
						slidePrevClass: 'swiper-slide-prev',
						wrapperClass: 'swiper-wrapper',
						lazyPreloaderClass: 'swiper-lazy-preloader',
						lazyPreloadPrevNext: 0,
						runCallbacksOnInit: !0,
						_emitClasses: !1,
					};
				function Ot(i, e) {
					return function (s) {
						s === void 0 && (s = {});
						const n = Object.keys(s)[0],
							r = s[n];
						if (typeof r != 'object' || r === null) {
							(0, x.u)(e, s);
							return;
						}
						if (
							(i[n] === !0 && (i[n] = { enabled: !0 }),
							n === 'navigation' && i[n] && i[n].enabled && !i[n].prevEl && !i[n].nextEl && (i[n].auto = !0),
							['pagination', 'scrollbar'].indexOf(n) >= 0 && i[n] && i[n].enabled && !i[n].el && (i[n].auto = !0),
							!(n in i && 'enabled' in r))
						) {
							(0, x.u)(e, s);
							return;
						}
						typeof i[n] == 'object' && !('enabled' in i[n]) && (i[n].enabled = !0), i[n] || (i[n] = { enabled: !1 }), (0, x.u)(e, s);
					};
				}
				const Ae = {
						eventsEmitter: Se,
						update: P,
						translate: C,
						transition: pe,
						slide: st,
						loop: lt,
						grabCursor: ct,
						events: Et,
						breakpoints: yt,
						checkOverflow: It,
						classes: Lt,
					},
					ze = {};
				class Te {
					constructor() {
						let e, t;
						for (var s = arguments.length, n = new Array(s), r = 0; r < s; r++) n[r] = arguments[r];
						n.length === 1 && n[0].constructor && Object.prototype.toString.call(n[0]).slice(8, -1) === 'Object' ? (t = n[0]) : ([e, t] = n),
							t || (t = {}),
							(t = (0, x.u)({}, t)),
							e && !t.el && (t.el = e);
						const l = (0, _.g)();
						if (t.el && typeof t.el == 'string' && l.querySelectorAll(t.el).length > 1) {
							const d = [];
							return (
								l.querySelectorAll(t.el).forEach((g) => {
									const b = (0, x.u)({}, t, { el: g });
									d.push(new Te(b));
								}),
								d
							);
						}
						const o = this;
						(o.__swiper__ = !0),
							(o.support = u()),
							(o.device = Q({ userAgent: t.userAgent })),
							(o.browser = de()),
							(o.eventsListeners = {}),
							(o.eventsAnyListeners = []),
							(o.modules = [...o.__modules__]),
							t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
						const a = {};
						o.modules.forEach((d) => {
							d({ params: t, swiper: o, extendParams: Ot(t, a), on: o.on.bind(o), once: o.once.bind(o), off: o.off.bind(o), emit: o.emit.bind(o) });
						});
						const p = (0, x.u)({}, Oe, a);
						return (
							(o.params = (0, x.u)({}, p, ze, t)),
							(o.originalParams = (0, x.u)({}, o.params)),
							(o.passedParams = (0, x.u)({}, t)),
							o.params &&
								o.params.on &&
								Object.keys(o.params.on).forEach((d) => {
									o.on(d, o.params.on[d]);
								}),
							o.params && o.params.onAny && o.onAny(o.params.onAny),
							Object.assign(o, {
								enabled: o.params.enabled,
								el: e,
								classNames: [],
								slides: [],
								slidesGrid: [],
								snapGrid: [],
								slidesSizesGrid: [],
								isHorizontal() {
									return o.params.direction === 'horizontal';
								},
								isVertical() {
									return o.params.direction === 'vertical';
								},
								activeIndex: 0,
								realIndex: 0,
								isBeginning: !0,
								isEnd: !1,
								translate: 0,
								previousTranslate: 0,
								progress: 0,
								velocity: 0,
								animating: !1,
								cssOverflowAdjustment() {
									return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
								},
								allowSlideNext: o.params.allowSlideNext,
								allowSlidePrev: o.params.allowSlidePrev,
								touchEventsData: {
									isTouched: void 0,
									isMoved: void 0,
									allowTouchCallbacks: void 0,
									touchStartTime: void 0,
									isScrolling: void 0,
									currentTranslate: void 0,
									startTranslate: void 0,
									allowThresholdMove: void 0,
									focusableElements: o.params.focusableElements,
									lastClickTime: 0,
									clickTimeout: void 0,
									velocities: [],
									allowMomentumBounce: void 0,
									startMoving: void 0,
									pointerId: null,
									touchId: null,
								},
								allowClick: !0,
								allowTouchMove: o.params.allowTouchMove,
								touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
								imagesToLoad: [],
								imagesLoaded: 0,
							}),
							o.emit('_swiper'),
							o.params.init && o.init(),
							o
						);
					}
					getDirectionLabel(e) {
						return this.isHorizontal()
							? e
							: {
									width: 'height',
									'margin-top': 'margin-left',
									'margin-bottom ': 'margin-right',
									'margin-left': 'margin-top',
									'margin-right': 'margin-bottom',
									'padding-left': 'padding-top',
									'padding-right': 'padding-bottom',
									marginRight: 'marginBottom',
							  }[e];
					}
					getSlideIndex(e) {
						const { slidesEl: t, params: s } = this,
							n = (0, x.e)(t, `.${s.slideClass}, swiper-slide`),
							r = (0, x.h)(n[0]);
						return (0, x.h)(e) - r;
					}
					getSlideIndexByData(e) {
						return this.getSlideIndex(this.slides.filter((t) => t.getAttribute('data-swiper-slide-index') * 1 === e)[0]);
					}
					recalcSlides() {
						const e = this,
							{ slidesEl: t, params: s } = e;
						e.slides = (0, x.e)(t, `.${s.slideClass}, swiper-slide`);
					}
					enable() {
						const e = this;
						e.enabled || ((e.enabled = !0), e.params.grabCursor && e.setGrabCursor(), e.emit('enable'));
					}
					disable() {
						const e = this;
						e.enabled && ((e.enabled = !1), e.params.grabCursor && e.unsetGrabCursor(), e.emit('disable'));
					}
					setProgress(e, t) {
						const s = this;
						e = Math.min(Math.max(e, 0), 1);
						const n = s.minTranslate(),
							l = (s.maxTranslate() - n) * e + n;
						s.translateTo(l, typeof t > 'u' ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
					}
					emitContainerClasses() {
						const e = this;
						if (!e.params._emitClasses || !e.el) return;
						const t = e.el.className.split(' ').filter((s) => s.indexOf('swiper') === 0 || s.indexOf(e.params.containerModifierClass) === 0);
						e.emit('_containerClasses', t.join(' '));
					}
					getSlideClasses(e) {
						const t = this;
						return t.destroyed
							? ''
							: e.className
									.split(' ')
									.filter((s) => s.indexOf('swiper-slide') === 0 || s.indexOf(t.params.slideClass) === 0)
									.join(' ');
					}
					emitSlidesClasses() {
						const e = this;
						if (!e.params._emitClasses || !e.el) return;
						const t = [];
						e.slides.forEach((s) => {
							const n = e.getSlideClasses(s);
							t.push({ slideEl: s, classNames: n }), e.emit('_slideClass', s, n);
						}),
							e.emit('_slideClasses', t);
					}
					slidesPerViewDynamic(e, t) {
						e === void 0 && (e = 'current'), t === void 0 && (t = !1);
						const s = this,
							{ params: n, slides: r, slidesGrid: l, slidesSizesGrid: o, size: a, activeIndex: p } = s;
						let d = 1;
						if (typeof n.slidesPerView == 'number') return n.slidesPerView;
						if (n.centeredSlides) {
							let g = r[p] ? Math.ceil(r[p].swiperSlideSize) : 0,
								b;
							for (let w = p + 1; w < r.length; w += 1) r[w] && !b && ((g += Math.ceil(r[w].swiperSlideSize)), (d += 1), g > a && (b = !0));
							for (let w = p - 1; w >= 0; w -= 1) r[w] && !b && ((g += r[w].swiperSlideSize), (d += 1), g > a && (b = !0));
						} else if (e === 'current') for (let g = p + 1; g < r.length; g += 1) (t ? l[g] + o[g] - l[p] < a : l[g] - l[p] < a) && (d += 1);
						else for (let g = p - 1; g >= 0; g -= 1) l[p] - l[g] < a && (d += 1);
						return d;
					}
					update() {
						const e = this;
						if (!e || e.destroyed) return;
						const { snapGrid: t, params: s } = e;
						s.breakpoints && e.setBreakpoint(),
							[...e.el.querySelectorAll('[loading="lazy"]')].forEach((l) => {
								l.complete && T(e, l);
							}),
							e.updateSize(),
							e.updateSlides(),
							e.updateProgress(),
							e.updateSlidesClasses();
						function n() {
							const l = e.rtlTranslate ? e.translate * -1 : e.translate,
								o = Math.min(Math.max(l, e.maxTranslate()), e.minTranslate());
							e.setTranslate(o), e.updateActiveIndex(), e.updateSlidesClasses();
						}
						let r;
						if (s.freeMode && s.freeMode.enabled && !s.cssMode) n(), s.autoHeight && e.updateAutoHeight();
						else {
							if ((s.slidesPerView === 'auto' || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
								const l = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
								r = e.slideTo(l.length - 1, 0, !1, !0);
							} else r = e.slideTo(e.activeIndex, 0, !1, !0);
							r || n();
						}
						s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit('update');
					}
					changeDirection(e, t) {
						t === void 0 && (t = !0);
						const s = this,
							n = s.params.direction;
						return (
							e || (e = n === 'horizontal' ? 'vertical' : 'horizontal'),
							e === n ||
								(e !== 'horizontal' && e !== 'vertical') ||
								(s.el.classList.remove(`${s.params.containerModifierClass}${n}`),
								s.el.classList.add(`${s.params.containerModifierClass}${e}`),
								s.emitContainerClasses(),
								(s.params.direction = e),
								s.slides.forEach((r) => {
									e === 'vertical' ? (r.style.width = '') : (r.style.height = '');
								}),
								s.emit('changeDirection'),
								t && s.update()),
							s
						);
					}
					changeLanguageDirection(e) {
						const t = this;
						(t.rtl && e === 'rtl') ||
							(!t.rtl && e === 'ltr') ||
							((t.rtl = e === 'rtl'),
							(t.rtlTranslate = t.params.direction === 'horizontal' && t.rtl),
							t.rtl
								? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), (t.el.dir = 'rtl'))
								: (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), (t.el.dir = 'ltr')),
							t.update());
					}
					mount(e) {
						const t = this;
						if (t.mounted) return !0;
						let s = e || t.params.el;
						if ((typeof s == 'string' && (s = document.querySelector(s)), !s)) return !1;
						(s.swiper = t),
							s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
						const n = () => `.${(t.params.wrapperClass || '').trim().split(' ').join('.')}`;
						let l = s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(n()) : (0, x.e)(s, n())[0];
						return (
							!l &&
								t.params.createElements &&
								((l = (0, x.c)('div', t.params.wrapperClass)),
								s.append(l),
								(0, x.e)(s, `.${t.params.slideClass}`).forEach((o) => {
									l.append(o);
								})),
							Object.assign(t, {
								el: s,
								wrapperEl: l,
								slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : l,
								hostEl: t.isElement ? s.parentNode.host : s,
								mounted: !0,
								rtl: s.dir.toLowerCase() === 'rtl' || (0, x.o)(s, 'direction') === 'rtl',
								rtlTranslate: t.params.direction === 'horizontal' && (s.dir.toLowerCase() === 'rtl' || (0, x.o)(s, 'direction') === 'rtl'),
								wrongRTL: (0, x.o)(l, 'display') === '-webkit-box',
							}),
							!0
						);
					}
					init(e) {
						const t = this;
						if (t.initialized || t.mount(e) === !1) return t;
						t.emit('beforeInit'),
							t.params.breakpoints && t.setBreakpoint(),
							t.addClasses(),
							t.updateSize(),
							t.updateSlides(),
							t.params.watchOverflow && t.checkOverflow(),
							t.params.grabCursor && t.enabled && t.setGrabCursor(),
							t.params.loop && t.virtual && t.params.virtual.enabled
								? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0)
								: t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
							t.params.loop && t.loopCreate(),
							t.attachEvents();
						const n = [...t.el.querySelectorAll('[loading="lazy"]')];
						return (
							t.isElement && n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
							n.forEach((r) => {
								r.complete
									? T(t, r)
									: r.addEventListener('load', (l) => {
											T(t, l.target);
									  });
							}),
							te(t),
							(t.initialized = !0),
							te(t),
							t.emit('init'),
							t.emit('afterInit'),
							t
						);
					}
					destroy(e, t) {
						e === void 0 && (e = !0), t === void 0 && (t = !0);
						const s = this,
							{ params: n, el: r, wrapperEl: l, slides: o } = s;
						return (
							typeof s.params > 'u' ||
								s.destroyed ||
								(s.emit('beforeDestroy'),
								(s.initialized = !1),
								s.detachEvents(),
								n.loop && s.loopDestroy(),
								t &&
									(s.removeClasses(),
									r.removeAttribute('style'),
									l.removeAttribute('style'),
									o &&
										o.length &&
										o.forEach((a) => {
											a.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass),
												a.removeAttribute('style'),
												a.removeAttribute('data-swiper-slide-index');
										})),
								s.emit('destroy'),
								Object.keys(s.eventsListeners).forEach((a) => {
									s.off(a);
								}),
								e !== !1 && ((s.el.swiper = null), (0, x.v)(s)),
								(s.destroyed = !0)),
							null
						);
					}
					static extendDefaults(e) {
						(0, x.u)(ze, e);
					}
					static get extendedDefaults() {
						return ze;
					}
					static get defaults() {
						return Oe;
					}
					static installModule(e) {
						Te.prototype.__modules__ || (Te.prototype.__modules__ = []);
						const t = Te.prototype.__modules__;
						typeof e == 'function' && t.indexOf(e) < 0 && t.push(e);
					}
					static use(e) {
						return Array.isArray(e) ? (e.forEach((t) => Te.installModule(t)), Te) : (Te.installModule(e), Te);
					}
				}
				Object.keys(Ae).forEach((i) => {
					Object.keys(Ae[i]).forEach((e) => {
						Te.prototype[e] = Ae[i][e];
					});
				}),
					Te.use([be, he]);
				const Ne = [
					'eventsPrefix',
					'injectStyles',
					'injectStylesUrls',
					'modules',
					'init',
					'_direction',
					'oneWayMovement',
					'swiperElementNodeName',
					'touchEventsTarget',
					'initialSlide',
					'_speed',
					'cssMode',
					'updateOnWindowResize',
					'resizeObserver',
					'nested',
					'focusableElements',
					'_enabled',
					'_width',
					'_height',
					'preventInteractionOnTransition',
					'userAgent',
					'url',
					'_edgeSwipeDetection',
					'_edgeSwipeThreshold',
					'_freeMode',
					'_autoHeight',
					'setWrapperSize',
					'virtualTranslate',
					'_effect',
					'breakpoints',
					'breakpointsBase',
					'_spaceBetween',
					'_slidesPerView',
					'maxBackfaceHiddenSlides',
					'_grid',
					'_slidesPerGroup',
					'_slidesPerGroupSkip',
					'_slidesPerGroupAuto',
					'_centeredSlides',
					'_centeredSlidesBounds',
					'_slidesOffsetBefore',
					'_slidesOffsetAfter',
					'normalizeSlideIndex',
					'_centerInsufficientSlides',
					'_watchOverflow',
					'roundLengths',
					'touchRatio',
					'touchAngle',
					'simulateTouch',
					'_shortSwipes',
					'_longSwipes',
					'longSwipesRatio',
					'longSwipesMs',
					'_followFinger',
					'allowTouchMove',
					'_threshold',
					'touchMoveStopPropagation',
					'touchStartPreventDefault',
					'touchStartForcePreventDefault',
					'touchReleaseOnEdges',
					'uniqueNavElements',
					'_resistance',
					'_resistanceRatio',
					'_watchSlidesProgress',
					'_grabCursor',
					'preventClicks',
					'preventClicksPropagation',
					'_slideToClickedSlide',
					'_loop',
					'loopAdditionalSlides',
					'loopAddBlankSlides',
					'loopPreventsSliding',
					'_rewind',
					'_allowSlidePrev',
					'_allowSlideNext',
					'_swipeHandler',
					'_noSwiping',
					'noSwipingClass',
					'noSwipingSelector',
					'passiveListeners',
					'containerModifierClass',
					'slideClass',
					'slideActiveClass',
					'slideVisibleClass',
					'slideFullyVisibleClass',
					'slideNextClass',
					'slidePrevClass',
					'slideBlankClass',
					'wrapperClass',
					'lazyPreloaderClass',
					'lazyPreloadPrevNext',
					'runCallbacksOnInit',
					'observer',
					'observeParents',
					'observeSlideChildren',
					'a11y',
					'_autoplay',
					'_controller',
					'coverflowEffect',
					'cubeEffect',
					'fadeEffect',
					'flipEffect',
					'creativeEffect',
					'cardsEffect',
					'hashNavigation',
					'history',
					'keyboard',
					'mousewheel',
					'_navigation',
					'_pagination',
					'parallax',
					'_scrollbar',
					'_thumbs',
					'virtual',
					'zoom',
					'control',
				];
				function Pe(i) {
					return typeof i == 'object' && i !== null && i.constructor && Object.prototype.toString.call(i).slice(8, -1) === 'Object' && !i.__swiper__;
				}
				function Me(i, e) {
					const t = ['__proto__', 'constructor', 'prototype'];
					Object.keys(e)
						.filter((s) => t.indexOf(s) < 0)
						.forEach((s) => {
							typeof i[s] > 'u'
								? (i[s] = e[s])
								: Pe(e[s]) && Pe(i[s]) && Object.keys(e[s]).length > 0
								? e[s].__swiper__
									? (i[s] = e[s])
									: Me(i[s], e[s])
								: (i[s] = e[s]);
						});
				}
				function Ve(i) {
					return i === void 0 && (i = {}), i.navigation && typeof i.navigation.nextEl > 'u' && typeof i.navigation.prevEl > 'u';
				}
				function je(i) {
					return i === void 0 && (i = {}), i.pagination && typeof i.pagination.el > 'u';
				}
				function Fe(i) {
					return i === void 0 && (i = {}), i.scrollbar && typeof i.scrollbar.el > 'u';
				}
				function He(i) {
					i === void 0 && (i = '');
					const e = i
							.split(' ')
							.map((s) => s.trim())
							.filter((s) => !!s),
						t = [];
					return (
						e.forEach((s) => {
							t.indexOf(s) < 0 && t.push(s);
						}),
						t.join(' ')
					);
				}
				function jt(i) {
					return i === void 0 && (i = ''), i.replace(/-[a-z]/g, (e) => e.toUpperCase().replace('-', ''));
				}
				function At(i) {
					return i === void 0 && (i = ''), i ? (i.includes('swiper-wrapper') ? i : `swiper-wrapper ${i}`) : 'swiper-wrapper';
				}
				function zt(i) {
					let { swiper: e, slides: t, passedParams: s, changedParams: n, nextEl: r, prevEl: l, scrollbarEl: o, paginationEl: a } = i;
					const p = n.filter((H) => H !== 'children' && H !== 'direction' && H !== 'wrapperClass'),
						{ params: d, pagination: g, navigation: b, scrollbar: w, virtual: M, thumbs: I } = e;
					let k, E, V, O, R, $, ie, Ee;
					n.includes('thumbs') && s.thumbs && s.thumbs.swiper && d.thumbs && !d.thumbs.swiper && (k = !0),
						n.includes('controller') && s.controller && s.controller.control && d.controller && !d.controller.control && (E = !0),
						n.includes('pagination') && s.pagination && (s.pagination.el || a) && (d.pagination || d.pagination === !1) && g && !g.el && (V = !0),
						n.includes('scrollbar') && s.scrollbar && (s.scrollbar.el || o) && (d.scrollbar || d.scrollbar === !1) && w && !w.el && (O = !0),
						n.includes('navigation') &&
							s.navigation &&
							(s.navigation.prevEl || l) &&
							(s.navigation.nextEl || r) &&
							(d.navigation || d.navigation === !1) &&
							b &&
							!b.prevEl &&
							!b.nextEl &&
							(R = !0);
					const se = (H) => {
						e[H] &&
							(e[H].destroy(),
							H === 'navigation'
								? (e.isElement && (e[H].prevEl.remove(), e[H].nextEl.remove()),
								  (d[H].prevEl = void 0),
								  (d[H].nextEl = void 0),
								  (e[H].prevEl = void 0),
								  (e[H].nextEl = void 0))
								: (e.isElement && e[H].el.remove(), (d[H].el = void 0), (e[H].el = void 0)));
					};
					n.includes('loop') && e.isElement && (d.loop && !s.loop ? ($ = !0) : !d.loop && s.loop ? (ie = !0) : (Ee = !0)),
						p.forEach((H) => {
							if (Pe(d[H]) && Pe(s[H]))
								Object.assign(d[H], s[H]),
									(H === 'navigation' || H === 'pagination' || H === 'scrollbar') && 'enabled' in s[H] && !s[H].enabled && se(H);
							else {
								const z = s[H];
								(z === !0 || z === !1) && (H === 'navigation' || H === 'pagination' || H === 'scrollbar') ? z === !1 && se(H) : (d[H] = s[H]);
							}
						}),
						p.includes('controller') &&
							!E &&
							e.controller &&
							e.controller.control &&
							d.controller &&
							d.controller.control &&
							(e.controller.control = d.controller.control),
						n.includes('children') && t && M && d.virtual.enabled
							? ((M.slides = t), M.update(!0))
							: n.includes('virtual') && M && d.virtual.enabled && (t && (M.slides = t), M.update(!0)),
						n.includes('children') && t && d.loop && (Ee = !0),
						k && I.init() && I.update(!0),
						E && (e.controller.control = d.controller.control),
						V &&
							(e.isElement &&
								(!a || typeof a == 'string') &&
								((a = document.createElement('div')), a.classList.add('swiper-pagination'), a.part.add('pagination'), e.el.appendChild(a)),
							a && (d.pagination.el = a),
							g.init(),
							g.render(),
							g.update()),
						O &&
							(e.isElement &&
								(!o || typeof o == 'string') &&
								((o = document.createElement('div')), o.classList.add('swiper-scrollbar'), o.part.add('scrollbar'), e.el.appendChild(o)),
							o && (d.scrollbar.el = o),
							w.init(),
							w.updateSize(),
							w.setTranslate()),
						R &&
							(e.isElement &&
								((!r || typeof r == 'string') &&
									((r = document.createElement('div')),
									r.classList.add('swiper-button-next'),
									(r.innerHTML = e.hostEl.constructor.nextButtonSvg),
									r.part.add('button-next'),
									e.el.appendChild(r)),
								(!l || typeof l == 'string') &&
									((l = document.createElement('div')),
									l.classList.add('swiper-button-prev'),
									(l.innerHTML = e.hostEl.constructor.prevButtonSvg),
									l.part.add('button-prev'),
									e.el.appendChild(l))),
							r && (d.navigation.nextEl = r),
							l && (d.navigation.prevEl = l),
							b.init(),
							b.update()),
						n.includes('allowSlideNext') && (e.allowSlideNext = s.allowSlideNext),
						n.includes('allowSlidePrev') && (e.allowSlidePrev = s.allowSlidePrev),
						n.includes('direction') && e.changeDirection(s.direction, !1),
						($ || Ee) && e.loopDestroy(),
						(ie || Ee) && e.loopCreate(),
						e.update();
				}
				function Dt(i, e) {
					i === void 0 && (i = {}), e === void 0 && (e = !0);
					const t = { on: {} },
						s = {},
						n = {};
					Me(t, Oe), (t._emitClasses = !0), (t.init = !1);
					const r = {},
						l = Ne.map((a) => a.replace(/_/, '')),
						o = Object.assign({}, i);
					return (
						Object.keys(o).forEach((a) => {
							typeof i[a] > 'u' ||
								(l.indexOf(a) >= 0
									? Pe(i[a])
										? ((t[a] = {}), (n[a] = {}), Me(t[a], i[a]), Me(n[a], i[a]))
										: ((t[a] = i[a]), (n[a] = i[a]))
									: a.search(/on[A-Z]/) === 0 && typeof i[a] == 'function'
									? e
										? (s[`${a[2].toLowerCase()}${a.substr(3)}`] = i[a])
										: (t.on[`${a[2].toLowerCase()}${a.substr(3)}`] = i[a])
									: (r[a] = i[a]));
						}),
						['navigation', 'pagination', 'scrollbar'].forEach((a) => {
							t[a] === !0 && (t[a] = {}), t[a] === !1 && delete t[a];
						}),
						{ params: t, passedParams: n, rest: r, events: s }
					);
				}
				function Bt(i, e) {
					let { el: t, nextEl: s, prevEl: n, paginationEl: r, scrollbarEl: l, swiper: o } = i;
					Ve(e) &&
						s &&
						n &&
						((o.params.navigation.nextEl = s),
						(o.originalParams.navigation.nextEl = s),
						(o.params.navigation.prevEl = n),
						(o.originalParams.navigation.prevEl = n)),
						je(e) && r && ((o.params.pagination.el = r), (o.originalParams.pagination.el = r)),
						Fe(e) && l && ((o.params.scrollbar.el = l), (o.originalParams.scrollbar.el = l)),
						o.init(t);
				}
				function Gt(i, e, t, s, n) {
					const r = [];
					if (!e) return r;
					const l = (a) => {
						r.indexOf(a) < 0 && r.push(a);
					};
					if (t && s) {
						const a = s.map(n),
							p = t.map(n);
						a.join('') !== p.join('') && l('children'), s.length !== t.length && l('children');
					}
					return (
						Ne.filter((a) => a[0] === '_')
							.map((a) => a.replace(/_/, ''))
							.forEach((a) => {
								if (a in i && a in e)
									if (Pe(i[a]) && Pe(e[a])) {
										const p = Object.keys(i[a]),
											d = Object.keys(e[a]);
										p.length !== d.length
											? l(a)
											: (p.forEach((g) => {
													i[a][g] !== e[a][g] && l(a);
											  }),
											  d.forEach((g) => {
													i[a][g] !== e[a][g] && l(a);
											  }));
									} else i[a] !== e[a] && l(a);
							}),
						r
					);
				}
				const Rt = (i) => {
					!i ||
						i.destroyed ||
						!i.params.virtual ||
						(i.params.virtual && !i.params.virtual.enabled) ||
						(i.updateSlides(),
						i.updateProgress(),
						i.updateSlidesClasses(),
						i.parallax && i.params.parallax && i.params.parallax.enabled && i.parallax.setTranslate());
				};
				var We;
				function _e() {
					return (
						(_e = Object.assign
							? Object.assign.bind()
							: function (i) {
									for (var e = 1; e < arguments.length; e++) {
										var t = arguments[e];
										for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (i[s] = t[s]);
									}
									return i;
							  }),
						_e.apply(this, arguments)
					);
				}
				function qe(i) {
					return i.type && i.type.displayName && i.type.displayName.includes('SwiperSlide');
				}
				function Ye(i) {
					const e = [];
					return (
						L.default.Children.toArray(i).forEach((t) => {
							qe(t) ? e.push(t) : t.props && t.props.children && Ye(t.props.children).forEach((s) => e.push(s));
						}),
						e
					);
				}
				function $t(i) {
					const e = [],
						t = { 'container-start': [], 'container-end': [], 'wrapper-start': [], 'wrapper-end': [] };
					return (
						L.default.Children.toArray(i).forEach((s) => {
							if (qe(s)) e.push(s);
							else if (s.props && s.props.slot && t[s.props.slot]) t[s.props.slot].push(s);
							else if (s.props && s.props.children) {
								const n = Ye(s.props.children);
								n.length > 0 ? n.forEach((r) => e.push(r)) : t['container-end'].push(s);
							} else t['container-end'].push(s);
						}),
						{ slides: e, slots: t }
					);
				}
				function kt(i, e, t) {
					if (!t) return null;
					const s = (d) => {
							let g = d;
							return d < 0 ? (g = e.length + d) : g >= e.length && (g = g - e.length), g;
						},
						n = i.isHorizontal() ? { [i.rtlTranslate ? 'right' : 'left']: `${t.offset}px` } : { top: `${t.offset}px` },
						{ from: r, to: l } = t,
						o = i.params.loop ? -e.length : 0,
						a = i.params.loop ? e.length * 2 : e.length,
						p = [];
					for (let d = o; d < a; d += 1) d >= r && d <= l && p.push(e[s(d)]);
					return p.map((d, g) => L.default.cloneElement(d, { swiper: i, style: n, key: d.props.virtualIndex || d.key || `slide-${g}` }));
				}
				function Le(i, e) {
					return typeof window > 'u' ? (0, L.useEffect)(i, e) : (0, L.useLayoutEffect)(i, e);
				}
				const De = (0, L.createContext)(null),
					Ft = () => We(De),
					Xe = (0, L.createContext)(null),
					Ht = () => We(Xe),
					Ue = (0, L.forwardRef)(function (i, e) {
						let { className: t, tag: s = 'div', wrapperTag: n = 'div', children: r, onSwiper: l, ...o } = i === void 0 ? {} : i,
							a = !1;
						const [p, d] = (0, L.useState)('swiper'),
							[g, b] = (0, L.useState)(null),
							[w, M] = (0, L.useState)(!1),
							I = (0, L.useRef)(!1),
							k = (0, L.useRef)(null),
							E = (0, L.useRef)(null),
							V = (0, L.useRef)(null),
							O = (0, L.useRef)(null),
							R = (0, L.useRef)(null),
							$ = (0, L.useRef)(null),
							ie = (0, L.useRef)(null),
							Ee = (0, L.useRef)(null),
							{ params: se, passedParams: H, rest: z, events: j } = Dt(o),
							{ slides: U, slots: F } = $t(r),
							me = () => {
								M(!w);
							};
						Object.assign(se.on, {
							_containerClasses(we, xe) {
								d(xe);
							},
						});
						const ve = () => {
							Object.assign(se.on, j), (a = !0);
							const we = { ...se };
							if ((delete we.wrapperClass, (E.current = new Te(we)), E.current.virtual && E.current.params.virtual.enabled)) {
								E.current.virtual.slides = U;
								const xe = { cache: !1, slides: U, renderExternal: b, renderExternalUpdate: !1 };
								Me(E.current.params.virtual, xe), Me(E.current.originalParams.virtual, xe);
							}
						};
						k.current || ve(), E.current && E.current.on('_beforeBreakpoint', me);
						const ye = () => {
								a ||
									!j ||
									!E.current ||
									Object.keys(j).forEach((we) => {
										E.current.on(we, j[we]);
									});
							},
							Be = () => {
								!j ||
									!E.current ||
									Object.keys(j).forEach((we) => {
										E.current.off(we, j[we]);
									});
							};
						(0, L.useEffect)(() => () => {
							E.current && E.current.off('_beforeBreakpoint', me);
						}),
							(0, L.useEffect)(() => {
								!I.current && E.current && (E.current.emitSlidesClasses(), (I.current = !0));
							}),
							Le(() => {
								if ((e && (e.current = k.current), !!k.current))
									return (
										E.current.destroyed && ve(),
										Bt(
											{ el: k.current, nextEl: R.current, prevEl: $.current, paginationEl: ie.current, scrollbarEl: Ee.current, swiper: E.current },
											se
										),
										l && !E.current.destroyed && l(E.current),
										() => {
											E.current && !E.current.destroyed && E.current.destroy(!0, !1);
										}
									);
							}, []),
							Le(() => {
								ye();
								const we = Gt(H, V.current, U, O.current, (xe) => xe.key);
								return (
									(V.current = H),
									(O.current = U),
									we.length &&
										E.current &&
										!E.current.destroyed &&
										zt({
											swiper: E.current,
											slides: U,
											passedParams: H,
											changedParams: we,
											nextEl: R.current,
											prevEl: $.current,
											scrollbarEl: Ee.current,
											paginationEl: ie.current,
										}),
									() => {
										Be();
									}
								);
							}),
							Le(() => {
								Rt(E.current);
							}, [g]);
						function Ie() {
							return se.virtual ? kt(E.current, U, g) : U.map((we, xe) => L.default.cloneElement(we, { swiper: E.current, swiperSlideIndex: xe }));
						}
						return L.default.createElement(
							s,
							_e({ ref: k, className: He(`${p}${t ? ` ${t}` : ''}`) }, z),
							L.default.createElement(
								Xe.Provider,
								{ value: E.current },
								F['container-start'],
								L.default.createElement(n, { className: At(se.wrapperClass) }, F['wrapper-start'], Ie(), F['wrapper-end']),
								Ve(se) &&
									L.default.createElement(
										L.default.Fragment,
										null,
										L.default.createElement('div', { ref: $, className: 'swiper-button-prev' }),
										L.default.createElement('div', { ref: R, className: 'swiper-button-next' })
									),
								Fe(se) && L.default.createElement('div', { ref: Ee, className: 'swiper-scrollbar' }),
								je(se) && L.default.createElement('div', { ref: ie, className: 'swiper-pagination' }),
								F['container-end']
							)
						);
					});
				Ue.displayName = 'Swiper';
				const Ke = (0, L.forwardRef)(function (i, e) {
					let {
						tag: t = 'div',
						children: s,
						className: n = '',
						swiper: r,
						zoom: l,
						lazy: o,
						virtualIndex: a,
						swiperSlideIndex: p,
						...d
					} = i === void 0 ? {} : i;
					const g = (0, L.useRef)(null),
						[b, w] = (0, L.useState)('swiper-slide'),
						[M, I] = (0, L.useState)(!1);
					function k(R, $, ie) {
						$ === g.current && w(ie);
					}
					Le(() => {
						if ((typeof p < 'u' && (g.current.swiperSlideIndex = p), e && (e.current = g.current), !(!g.current || !r))) {
							if (r.destroyed) {
								b !== 'swiper-slide' && w('swiper-slide');
								return;
							}
							return (
								r.on('_slideClass', k),
								() => {
									r && r.off('_slideClass', k);
								}
							);
						}
					}),
						Le(() => {
							r && g.current && !r.destroyed && w(r.getSlideClasses(g.current));
						}, [r]);
					const E = {
							isActive: b.indexOf('swiper-slide-active') >= 0,
							isVisible: b.indexOf('swiper-slide-visible') >= 0,
							isPrev: b.indexOf('swiper-slide-prev') >= 0,
							isNext: b.indexOf('swiper-slide-next') >= 0,
						},
						V = () => (typeof s == 'function' ? s(E) : s),
						O = () => {
							I(!0);
						};
					return L.default.createElement(
						t,
						_e({ ref: g, className: He(`${b}${n ? ` ${n}` : ''}`), 'data-swiper-slide-index': a, onLoad: O }, d),
						l &&
							L.default.createElement(
								De.Provider,
								{ value: E },
								L.default.createElement(
									'div',
									{ className: 'swiper-zoom-container', 'data-swiper-zoom': typeof l == 'number' ? l : void 0 },
									V(),
									o && !M && L.default.createElement('div', { className: 'swiper-lazy-preloader' })
								)
							),
						!l &&
							L.default.createElement(
								De.Provider,
								{ value: E },
								V(),
								o && !M && L.default.createElement('div', { className: 'swiper-lazy-preloader' })
							)
					);
				});
				Ke.displayName = 'SwiperSlide';
			},
		},
	]);
})();
