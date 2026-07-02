// Jest mock for `swiper/react` — the real package ships as ESM only and Jest
// cannot parse it. Tests that import a Carousel (directly or transitively) just
// need the named exports to resolve; the rendered output is not asserted on.
const h = require('preact').h;

const Swiper = ({ children }) => h('div', { className: 'swiper-mock' }, children);
const SwiperSlide = ({ children }) => h('div', { className: 'swiper-slide-mock' }, children);

module.exports = { Swiper, SwiperSlide };
module.exports.Swiper = Swiper;
module.exports.SwiperSlide = SwiperSlide;
