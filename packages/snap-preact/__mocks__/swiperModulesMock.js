// Jest mock for `swiper/modules`. Real modules are ESM only.
// Tests only need the named exports to resolve.
const Navigation = {};
const Pagination = {};
const Scrollbar = {};
const A11y = {};
const Autoplay = {};
const FreeMode = {};

module.exports = { Navigation, Pagination, Scrollbar, A11y, Autoplay, FreeMode };
