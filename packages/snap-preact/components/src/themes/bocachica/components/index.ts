import { atoms } from './atoms';
import { molecules } from './molecules';
import { organisms } from './organisms';
import { templates } from './templates';

import type { ThemeComponentsRestricted } from '../../../providers';

export const components = {
	...atoms.default,
	...molecules.default,
	...organisms.default,
	...templates.default,
} as unknown as ThemeComponentsRestricted;

export const mobileComponents = {
	...atoms.mobile,
	...molecules.mobile,
	...organisms.mobile,
	...templates.mobile,
} as unknown as ThemeComponentsRestricted;

export const tabletComponents = {
	...atoms.tablet,
	...molecules.tablet,
	...organisms.tablet,
	...templates.tablet,
} as unknown as ThemeComponentsRestricted;

export const desktopComponents = {
	...atoms.desktop,
	...molecules.desktop,
	...organisms.desktop,
	...templates.desktop,
} as unknown as ThemeComponentsRestricted;
