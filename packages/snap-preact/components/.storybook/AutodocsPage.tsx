// .storybook/AutodocsPage.tsx
// Storybook's default autodocs template without the <Title>/<Subtitle> blocks: each component's
// readme opens with its own `# ComponentName` heading, which those blocks would duplicate.
// Kept in sync with DocsPage in @storybook/addon-docs.

import { h, Fragment } from 'preact';
import { Controls, Description, Primary, Stories, useOf } from '@storybook/addon-docs/blocks';

export const AutodocsPage = () => {
	const resolvedOf = useOf('meta', ['meta']);
	const isSingleStory = Object.keys(resolvedOf.csfFile.stories).length === 1;

	return (
		<Fragment>
			<Description of="meta" />
			{isSingleStory ? <Description of="story" /> : null}
			<Primary />
			<Controls />
			{isSingleStory ? null : <Stories />}
		</Fragment>
	);
};
