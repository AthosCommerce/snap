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

// ---- selector-KEY checking (ts-visible walk): unknown selector keys are the one thing
// TS cannot catch at the literal (no EPC against pattern-keyed types through a generic
// call), so the rule squiggles them - mirroring the compiler's use-site error ----

export const unknownTopLevelSelector: SnapTemplatesConfig = {
	theme: {
		extends: 'base',
		overrides: {
			default: {
				nopeTopLevel: { hi: 'mom' },
			},
		},
	},
};

export const unknownSelectorInNamedChildren: SnapTemplatesConfig = {
	theme: {
		extends: 'base',
		overrides: {
			default: {
				badgeImage: {
					$children: {
						nopeChild: { hi: 'mom' },
					},
				},
			},
		},
	},
};

// valid named-under-named children must NOT be flagged (and their props are TS's job, not the rule's)
export const validNamedChildrenNotFlagged: SnapTemplatesConfig = {
	theme: {
		extends: 'base',
		overrides: {
			default: {
				badgeImage: {
					$children: {
						badgeRectangle: {
							$children: {
								icon: { color: 'red' },
							},
						},
					},
				},
			},
		},
	},
};

// template open-named selectors resolve via pattern index signatures (`search.${string}`) - not flagged
export const templateOpenNamedSelectorNotFlagged: SnapTemplatesConfig = {
	theme: {
		extends: 'base',
		overrides: {
			default: {
				'search.tabbed': { anything: 'goes' },
			},
		},
	},
};

// blind region: unknown selector key inside an open-named selector's $children
export const unknownSelectorInBlindChildren: SnapTemplatesConfig = {
	theme: {
		extends: 'base',
		overrides: {
			default: {
				'facet.custom3': {
					$children: {
						nopeBlind: {},
					},
				},
			},
		},
	},
};

// unknown prop KEY on a named selector next to a valid sibling: invisible to TS through the
// generic call (EPC doesn't survive it; the weak-type rule needs zero shared props), so the
// rule's key-existence squiggle is the only inline signal
export const unknownPropOnNamedSelector: SnapTemplatesConfig = {
	theme: {
		extends: 'base',
		overrides: {
			default: {
				result: { hideQuickviewButton: false, definitelyNotARealResultProp: 'nonsense' },
			},
		},
	},
};

// unknown BREAKPOINT key next to a valid one - the four breakpoint names are the only ones ThemeStore reads
export const unknownBreakpointKey: SnapTemplatesConfig = {
	theme: {
		extends: 'base',
		overrides: {
			default: { result: { hideQuickviewButton: false } },
			nopeBreakpoint: { result: {} },
		},
	},
};

// ---- config-level unknown keys (call-style: the compiler reports these only at the use
// site; the rule's squiggle pinpoints the exact key) ----
import { validateTemplatesConfig } from '@athoscommerce/snap-preact';

validateTemplatesConfig({
	config: { platform: 'other' },
	theme: { extends: 'base' },
	zzBogusRootKey: 1,
	search: {
		zzBogusSearchKey: 1,
		targets: [{ selector: '#x', component: 'Search', zzBogusTargetKey: 1 }],
	},
});
