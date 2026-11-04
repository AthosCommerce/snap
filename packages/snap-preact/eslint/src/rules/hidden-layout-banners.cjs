/**
 * ESLint rule: hidden-layout-banners
 *
 * Reports theme overrides whose hide props (hideSidebar, hideTopToolbar, hideMiddleToolbar,
 * hideBottomToolbar, excludeBanners) stop a merchandising banner the default layouts render from
 * rendering. Hiding a toolbar or the sidebar is often deliberate, and the left banner can only
 * render in the sidebar, so this is a separate rule from layout-banners: projects run it as a
 * warning, so they're told without being blocked. Layouts that leave a banner out are
 * layout-banners' error. See utils/banners.cjs for how banners are resolved.
 */

const { createConfigVisitors } = require('../utils/config-visitors.cjs');
const { validateLayoutBanners } = require('../utils/banners.cjs');

module.exports = {
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Warn when theme override hide props stop merchandising banners from rendering',
		},
		messages: {
			hiddenLayoutBanners:
				'The "{{ prop }}" set by the "{{ selector }}" override stops {{ banners }} from rendering in {{ where }}, so those merchandising banners returned by the API will not render.',
		},
		schema: [],
	},
	create(context) {
		return createConfigVisitors((config) => validateLayoutBanners(config, context, 'hidden'));
	},
};
