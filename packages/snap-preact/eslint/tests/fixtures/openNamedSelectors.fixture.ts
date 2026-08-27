import type { SnapTemplatesConfig } from '@athoscommerce/snap-preact';

export const validOpenNamedProp: SnapTemplatesConfig = {
	theme: {
		extends: 'base',
		overrides: {
			default: {
				'facet.price': { disableCollapse: true },
			},
		},
	},
};

export const invalidOpenNamedProp: SnapTemplatesConfig = {
	theme: {
		extends: 'base',
		overrides: {
			default: {
				'facet.price': { disableCollapse: true, thisIsNotARealProp: 'nonsense' },
			},
		},
	},
};

export const invalidOnADifferentOpenNamedComponent: SnapTemplatesConfig = {
	theme: {
		extends: 'base',
		overrides: {
			default: {
				'recommendationGrid.related': { anotherFakeProp: 'nonsense' },
			},
		},
	},
};

export const customComponentEscapeHatchNotFlagged: SnapTemplatesConfig = {
	theme: {
		extends: 'base',
		overrides: {
			default: {
				'facet.myCustomFacet': { customComponent: 'MyCustomFacet', anyPropAtAll: 'is fine here' },
			},
		},
	},
};

export const childrenCascadeAlwaysAllowed: SnapTemplatesConfig = {
	theme: {
		extends: 'base',
		overrides: {
			default: {
				'facet.price': { $children: {} },
			},
		},
	},
};

// `color` is a real Facet prop, but its type is `string` - a valid key with the wrong
// value type must still be flagged, not just an unknown key
export const validKeyWrongValueType: SnapTemplatesConfig = {
	theme: {
		extends: 'base',
		overrides: {
			default: {
				'facet.color': { color: 5 },
			},
		},
	},
};

// once inside `facet.custom`'s $children, the WHOLE subtree is `unknown` to TS - even a
// bare `icon` selector, which is normally fully precise on its own, needs re-checking here
export const nestedBadPropInsideChildren: SnapTemplatesConfig = {
	theme: {
		extends: 'base',
		overrides: {
			default: {
				'facet.custom': {
					$children: {
						icon: { icon: 'not-a-real-icon-name' },
					},
				},
			},
		},
	},
};

// valid selector + valid props nested in $children must not be flagged
export const nestedValidPropsInsideChildren: SnapTemplatesConfig = {
	theme: {
		extends: 'base',
		overrides: {
			default: {
				'facet.custom2': {
					$children: {
						icon: { icon: 'cog' },
					},
				},
			},
		},
	},
};

// nesting can go multiple levels: $children -> another open-named dotted selector -> its
// own $children -> a bare selector with a bad prop
export const deeplyNestedBadProp: SnapTemplatesConfig = {
	theme: {
		extends: 'base',
		overrides: {
			default: {
				'facet.outer': {
					$children: {
						'recommendation.inner': {
							$children: {
								result: { hideQuickviewButton: 'not-a-boolean' },
							},
						},
					},
				},
			},
		},
	},
};
