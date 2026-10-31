import { B as t, j as a } from './iframe-Bc4KSH0T.js';
import { E as l } from './ErrorHandler-DqvpdgjD.js';
import { c } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './Button-C4cTOUHA.js';
import './useA11y-BuGQuOJb.js';
import './defined-CdKp_MB-.js';
import './useLang-Dx66cFD0.js';
import './Colour-BeIqPw58.js';
const i = `# ErrorHandler

Renders error messages.

## Sub-components
- Icon
- Button

## Usage
\`\`\`tsx
import { ErrorHandler } from '@athoscommerce/snap-preact/components';
\`\`\`

### controller
The \`controller\` prop specifies a reference to a Snap controller. This is the standard usage.

\`\`\`tsx
<ErrorHandler controller={controller} />
\`\`\`

### error
The \`error\` prop provides an alternative means of utilizing the component to display errors messages.

\`\`\`tsx
import { ErrorType } from '@athoscommerce/snap-store-mobx';
const errorObject = {
	code: 500,
	type: ErrorType.ERROR,
	message: 'Invalid Search Request or Service Unavailable',
}

<ErrorHandler error={errorObject} />
\`\`\`

### onRetryClick
When a request has been rate limited, a 'warning' error with code \`429\` will be generated. For this error the component will render a 'retry' button to try the request again. By default the retry button will run the provided controller's \`search\` method unless the \`onRetryClick\` prop is provided.

\`\`\`tsx
<ErrorHandler controller={controller} onRetryClick={(e) => {
    // do something
    controller.search();
}}/>
\`\`\`

\`\`\`tsx
import { ErrorType } from '@athoscommerce/snap-store-mobx';
const errorObject = {
	code: 429,
	type: ErrorType.WARNING,
	message: 'Too many requests try again later',
}

<ErrorHandler error={errorObject} onRetryClick={(e) => {
    // do something
}}/>
\`\`\`


## ErrorHandle Types

\`\`\`js
import { ErrorType } from '@athoscommerce/snap-store-mobx';

export enum ErrorType {
	WARNING = 'warning',
	INFO = 'info',
	ERROR = 'error',
}
\`\`\`
## Lang

The \`lang\` prop allows you to override translatable text strings used by the ErrorHandler component. All lang entries support a \`value\` (static string or function) and \`attributes\` (e.g. \`aria-label\`).

| Lang Key | Description | Data Provided |
|---|---|---|
| \`warningText\` | Warning message prefix text | \`controller\` (AbstractController) |
| \`infoText\` | Info message prefix text | \`controller\` (AbstractController) |
| \`errorText\` | Error message prefix text | \`controller\` (AbstractController) |
| \`reloadText\` | Retry button text | \`controller\` (AbstractController) |

### Example

\`\`\`tsx
<ErrorHandler
	controller={controller}
	lang={{
		warningText: {
			value: 'Warning:',
		},
		errorText: {
			value: 'Something went wrong:',
		},
		reloadText: {
			value: 'Try Again',
		},
	}}
/>
\`\`\`
`,
	{ fn: p } = __STORYBOOK_MODULE_TEST__,
	x = {
		title: 'Molecules/ErrorHandler',
		component: l,
		parameters: { docs: { description: { component: i } } },
		decorators: [(s) => a('div', { style: { maxWidth: '1200px' }, children: a(s, {}) })],
		args: { onRetryClick: p() },
		argTypes: {
			controller: { description: 'Controller reference', table: { type: { summary: 'Controller object' } }, control: !1 },
			error: { description: 'Error object containing message and type', table: { type: { summary: 'Error object' } }, control: { type: 'object' } },
			onRetryClick: {
				description: 'Retry button click event handler',
				table: { category: 'Templates Legal', type: { summary: 'function' } },
				control: !1,
			},
			...c,
		},
	},
	r = { args: { controller: { store: { error: { code: 429, type: t.WARNING, message: 'Too many requests try again later' } } } } },
	e = { args: { controller: { store: { error: { code: 500, type: t.ERROR, message: 'Invalid Search Request or Service Unavailable' } } } } },
	n = { args: { controller: { store: { error: { code: 200, type: t.INFO, message: 'Something important happened' } } } } },
	o = { args: { error: { type: t.INFO, message: 'Custom error using info type' } } };
r.parameters = {
	...r.parameters,
	docs: {
		...r.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    controller: {
      store: {
        error: {
          code: 429,
          type: ErrorType.WARNING,
          message: 'Too many requests try again later'
        }
      }
    }
  }
}`,
			...r.parameters?.docs?.source,
		},
	},
};
e.parameters = {
	...e.parameters,
	docs: {
		...e.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    controller: {
      store: {
        error: {
          code: 500,
          type: ErrorType.ERROR,
          message: 'Invalid Search Request or Service Unavailable'
        }
      }
    }
  }
}`,
			...e.parameters?.docs?.source,
		},
	},
};
n.parameters = {
	...n.parameters,
	docs: {
		...n.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    controller: {
      store: {
        error: {
          code: 200,
          type: ErrorType.INFO,
          message: 'Something important happened'
        }
      }
    }
  }
}`,
			...n.parameters?.docs?.source,
		},
	},
};
o.parameters = {
	...o.parameters,
	docs: {
		...o.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    error: {
      type: ErrorType.INFO,
      message: 'Custom error using info type'
    }
  }
}`,
			...o.parameters?.docs?.source,
		},
	},
};
const R = ['Warning', 'Error', 'Info', 'CustomError'];
export { o as CustomError, e as Error, n as Info, r as Warning, R as __namedExportsOrder, x as default };
