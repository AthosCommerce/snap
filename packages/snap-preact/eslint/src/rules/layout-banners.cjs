/**
 * ESLint rule: layout-banners
 *
 * Reports theme override layouts (and autocomplete column overrides) that leave a merchandising
 * banner the default layouts render with nowhere to render. Banners hidden by hide props are
 * reported by hidden-layout-banners instead. See utils/banners.cjs for how banners are resolved.
 */

const { createConfigVisitors } = require('../utils/config-visitors.cjs');
const { validateLayoutBanners } = require('../utils/banners.cjs');

module.exports = {
	meta: {
		type: 'problem',
		docs: {
			description: 'Validate that overridden layouts still render the merchandising banners the default layouts render',
		},
		messages: {
			missingLayoutBanners:
				'The "{{ prop }}" set by the "{{ selector }}" override leaves {{ banners }} out of every layout of {{ where }}, so those merchandising banners returned by the API will not render. Add them to this layout or another layout of the template.',
		},
		schema: [],
	},
	create(context) {
		return createConfigVisitors((config) => validateLayoutBanners(config, context, 'layout'));
	},
};
