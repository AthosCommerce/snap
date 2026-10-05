// .storybook/AutodocsPage.tsx
// Docs pages show only the component readme and its props table; rendered examples stay on the
// story pages. The readme opens with its own `# ComponentName` heading, so there is no <Title>.

import { h, Fragment } from 'preact';
import { ArgTypes, Description } from '@storybook/addon-docs/blocks';

export const AutodocsPage = () => (
	<Fragment>
		<Description of="meta" />
		<ArgTypes />
	</Fragment>
);
