# BranchOverride

Renders a popup to show when a branch override is in place.
Executes `onRemoveClick` prop when the remove button is clicked.
Must have `branch` and either `details` or `error` props to render.

## Components Used
- Icon

## Usage
```tsx
import { BranchOverride } from '@athoscommerce/snap-preact/components';
```

### branch
The required `branch` prop expects a string containing the name of the override branch.

```tsx
<BranchOverride branch="testing" />
```

### details
The `details` prop expects an object containing strings for the `url` and `lastModified` date of the override branch bundle.

```tsx
const details = {
	url: 'https://snapui.athoscommerce.io/y56s6x/next/bundle.js',
	lastModified: '1 Feb 2022 1:02:03 GMT'
};

<BranchOverride branch="testing" details={details} />
```

### error
The `error` prop expects an object containing strings for the `message` and `description` of the error.

```tsx
const error = {
	message: 'Branch not found!',
	description: 'Incorrect branch name or branch no longer exists.'
};

<BranchOverride branch="next" error={error} />
```

### onRemoveClick
The `onRemoveClick` prop is a function to be called when the 'remove' button is clicked

```tsx
const whenRemoved = (e, branch) => {
	console.log(`remove clicked in the override for the '${branch}' branch`);
};

<BranchOverride branch="testing" onRemoveClick={whenRemoved} />
```

### darkMode
The `darkMode` prop is used to set the component styling to prefer (or not to prefer) dark mode. By default the component will auto detect the browser preference.

```tsx
const details = {
	url: 'https://snapui.athoscommerce.io/y56s6x/next/bundle.js',
	lastModified: '1 Feb 2022 1:02:03 GMT'
};

<BranchOverride branch="testing" details={details} darkMode={false} />
```