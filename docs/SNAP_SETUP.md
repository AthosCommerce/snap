# Setup

This page walks through everything needed to go from an empty project to a MVP working Snap Integration: installing the Snapfu CLI, scaffolding a new project, running the local development server, connecting a mockup file (or the Snapfu Chrome extension) to preview it, and wiring up the minimum viable controller and components to get results on the page.

## Install
To create a new project, we recommend using the [Snapfu CLI](https://www.npmjs.com/package/snapfu) to initialize a new project from a preconfigured scaffold. 

Snapfu is a CLI interface for creating a Snap project from a template. You do **NOT** need to utilize Snapfu to develop using Snap, but it does simplify the process and provides additional features. 


```sh
npm install -g snapfu
```
<img src='/images/setup-install.gif'/>

> [!TIP]
> We recommend using Node v24 or higher and npm v10 or higher.


---

## Initialize new project

```sh
snapfu init [projectname]
cd [projectname] && npm install
```
This will create a new project with a git repo from a list of available scaffolds. The `[projectname]` argument is optional and will create a directory with the given name. Otherwise the project will be created in the current directory.

During this you will also be prompted for your **Site ID and secret key**, which you find in the [Athos Search & Product Discovery Console](https://console.athoscommerce.net)

<img src='/images/setup-initialize.gif'/>

---
## Development

```sh
npm run dev
```

This will start the local development server and serve the project build files and the contents of the `public` directory.


| File/Resource                | URL                                                      |
|------------------------------|----------------------------------------------------------|
| public/index.html            | [https://localhost:3333/](https://localhost:3333/)       |
| public/mockup.html (or other files) | [https://localhost:3333/mockup.html](https://localhost:3333/mockup.html) |
| main bundle                  | [https://localhost:3333/bundle.js](https://localhost:3333/bundle.js) |
| universal bundle             | [https://localhost:3333/universal.bundle.js](https://localhost:3333/universal.bundle.js) |


> [!TIP]
>The local server uses a self-signed certificate for HTTPS and you may be prompted to continue.

> [!NOTE]
>There are two common ways to develop a project, using a [local mockup file](#local-mockup-file) or leveraging the [Snapfu Chrome extension](#snapfu-chrome-extension).


---
## Local mockup file

The preconfigured scaffold shown above includes a `public/index.html` or `public/mockup.html` mockup file. For Snap components to render, this page needs to load `bundle.js` — the local development server serves the bundle, but it's the page's `<script>` tag that actually pulls it in.

The minimal mockup below includes just the script tag and target elements needed to get components rendered on the page. A more complete mockup would also include a copy of your storefront's DOM structure and its styles/fonts, so components inherit the real site's look.

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>Snap</title>
	</head>
	<body>
		<div id="athos-header"></div>
		<div id="athos-content"></div>
		<div id="athos-sidebar"></div>
	</body>

	<script src="bundle.js" id="athos-context"></script>
</html>
```


---
## Snapfu Chrome Extension
 The Snapfu Chrome Extension is a Chrome extension that you can install manually via chrome developer mode. The extension allows you to inject the development `bundle.js` into a live storefront page. This is useful for previewing changes on a live domain.
 
 Visit the website you are developing for, then click the extension to enable it and set the mode to `local`, then press `Save`.
 
 The page will reload with the local development bundle [https://localhost:3333/bundle.js](https://localhost:3333/bundle.js) injected into the current website. While `npm run dev` is running, the page will automatically reload upon saving any code modifications.
 
 >[!TIP]
 >For more information, see the [Snapfu Chrome Extension](https://github.com/searchspring/snapfu-extension) repository.

 >[!NOTE]
>Some of the other possible methods of serving the local development server while previewing changes on a live domain include: Browser local override modifying script src, or an alternative development domain (e.g. `https://dev.mysite.com`) or unpublished storefront theme with script src pointing to `https://localhost:3333/bundle.js` or a ngrok tunnel. However we encourage you to use our two native options included above.

---
## Minimum Viable Controller

Snap organizes storefront functionality into distinct features, each backed by its own controller. With your mockup file in place, here's the bare minimum configuration to create a search controller and render a root level `Content` component into it.

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


The `Content` component is considered a root level component since it is being rendered onto the page using a targeter — the `#athos-content` selector matches the target element from the mockup file above.

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

With that in place, `npm run dev` will render live search results into your mockup file. From here, see [Overview](https://athoscommerce.github.io/snap/snap-overview) for how the controller/store/component lifecycle works, or the [Preact Component Library](https://athoscommerce.github.io/snap/preact-components) for pre-built components you can use instead of writing your own.

>[!TIP]
>Continue to our **Features** section for more in depth details on setting up your Feature Controllers. 