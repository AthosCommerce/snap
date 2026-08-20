# Overview

Snap is built using the Model View Controller (MVC) pattern. When constructing an instance of the Snap class, the configuration object that is provided contains all the controllers that the project will use and where they will be rendered on the page. Each controller can be configured with various settings and custom functionality can be implemented via middleware to tie into the search lifecycle.

<img src='/images/snap-search-lifecycle.svg'/>

 
**1. Config → controllers.**
You pass a config object listing every controller your project uses and the DOM target each one renders to.
 
**2. Controller → search.**
Each controller exposes `controller.search()`, which reads state from `controller.urlManager` and sends it to the Athos API. For `Search` controllers, urlManager tracks URL query/hash params. `Autocomplete`, `Recommendations`, and `Finder` controllers keep their urlManager detached from the URL — so, for example, opening an autocomplete dropdown never touches the browser's address bar or fires a full-page search.
 
**3. API → store.**
The response lands in `controller.store`. Each controller type (`Search`, `Autocomplete`, `Recommendations`, `Finder`) has its own store schema.
 
**4. Store → component.**
A root Preact component renders to the controller's target, receiving the controller via `props.controller`. It and its children read from `props.controller.store` and re-render automatically when the store changes.
 
**5. Interaction → urlManager → loop.**
Clicking a facet, page number, or sort option updates the urlManager state, which triggers a new `controller.search()` — and the cycle repeats from step 2.
 
---


Here is an example of the bare minimum configuration to create a search controller and render a root level `Content` component to the page.

```js
// src/index.js
import { Snap } from '@athoscommerce/snap-preact';

const snap = new Snap({
    client: {
		globals: {
			siteId: 'REPLACE_WITH_YOUR_SITE_ID',
		},
	},
    controllers: {
        search: [
            {
                config: {
                    id: 'search',
                },
                targeters: [
                    {
                        selector: '#athos-content',
                        component: async () => {
                            return (await import('./components/Content/Content')).Content;
                        },
                    },
                ],
            },
        ],
    },
});
```

The `Content` component is considered a root level component since it is being rendered onto the page using a targeter.

To provide a reference to the controller via props to any subcomponents, we can utilize the `ControllerProvider` component from the `@athoscommerce/snap-preact/components` package.

```tsx
// src/components/Content/Content.jsx

import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { ControllerProvider } from '@athoscommerce/snap-preact/components';
import { Results } from '../Results/Results';

export const Content = observer((props) => {
    const { controller } = props;

    return controller.store.loaded ? (
        <ControllerProvider controller={controller}>
            <Results />
        </ControllerProvider>
    ) : null;
});
```

Then from any subcomponent such as `Results` in this example, the `withController` higher order component is used to access the controller via props. It should be placed before any other decorators/HOCs. 

Finally, the `observer` higher order component is used to make the component reactive to changes in the store.

```tsx
// src/components/Results/Results.jsx

import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { withController, InlineBanner, Result } from '@athoscommerce/snap-preact/components';

export const Results = withController(observer((props) => {
    const { controller } = props;

    return (
        <ul class="ss__results">
            {controller.store.results.map((result) => (
                <li class="ss__result" key={result.id}>
                    {{
                        banner: <InlineBanner banner={result} />,
                    }[result.type] || <Result result={result} />}
                </li>
            ))}
        </ul>
    );
}));
```

## Preact Component Library

Snap provides an extensive [library of Preact components](https://athoscommerce.github.io/snap/preact-components) that can be used exclusively or in combination with custom components throughout your project. 