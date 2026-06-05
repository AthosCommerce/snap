// Jest mock for `swiper/react`. The real package ships ESM (.mjs) that ts-jest does not
// transform, which throws "Cannot use import statement outside a module" for any suite that
// imports the Carousel molecule (directly or transitively). Tests do not exercise real Swiper
// behavior — the Carousel's own test suite is disabled — so a structural stub that simply
// renders children is sufficient to let importing suites load and render.
const { h } = require('preact');

const Swiper = ({ children }) => h('div', { className: 'swiper-mock' }, children);
const SwiperSlide = ({ children }) => h('div', { className: 'swiper-slide-mock' }, children);

module.exports = { Swiper, SwiperSlide };
