# RecommendationEmail

Renders product result cards to be used in email recommendation profiles. It's designed to render email recommendations in a structured format, optimized for generating images of product cards used for email recommendations. 

This component is not intended for front-end display. It is an internal dependency for Email Recommendations.

## Sub-components
- Result (default)

## Usage

### controller
The `controller` prop specifies a reference to the RecommendationController.

```tsx
<RecommendationEmail controller={controller} />
```

### results
Alternatively if a `controller` prop is not provided, the `results` prop specifies a reference to the results store array to use instead.

```tsx
<RecommendationEmail results={controller.store.results} />
```

### resultComponent
The `resultComponent` prop allows you to specify a custom component to render each result. If not provided, the default `Result` component will be used.

```tsx
import { CustomResult } from '../components/CustomResult';

<RecommendationEmail controller={controller} resultComponent={CustomResult} />
```

### resultWidth
The `resultWidth` prop allows you to specify the width of each result card. This is particularly useful for controlling the layout and sizing of the product cards in email recommendations. The value should be a string representing a valid CSS width.

Default value: '240px'

```tsx
<RecommendationEmail controller={controller} resultWidth={'240px'} />
```
