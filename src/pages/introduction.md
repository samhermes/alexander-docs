---
title: Introduction
layout: '@layouts/PageLayout.astro'
---
Alexander is a front end starter kit for quickly creating a foundation for a web project. It includes styles for increasing consistency between browsers as well as common global utilities. On top of this is a set of generic components, which each include basic styles to support their functionality.

## How to Install

```bash
npm install @samhermes/alexander
```

## Starter HTML

Depending on what tool you're using to build with, sometimes it's handy to have the basic HTML structure to start with. This information is just stored in this docs site, so head over to the [HTML page](/base/html) for more.

## Using Styles

The styles in Alexander are provided in `scss` format, so will need to be incorporated into your build process. You can access them from the package through the `scss` directory.

To `@use` all of the base and element styles:

```scss
@use '/node_modules/@samhermes/alexander/scss';
```

You can also `@use` single base or element stylesheets:

```scss
@use '/node_modules/@samhermes/alexander/scss/elements/blockquote';
```

To `@use` styles for a specific component:

```scss
@use '/node_modules/@samhermes/alexander/scss/components/card';
```

## Importing Components

The components can be imported into your project through named imports, such as this example for the accordion component:

```js
import { Accordion } from 'alexander';

new Accordion();
```

Once the component has been imported, the web component will be available on the page. For the accordion, this will look like:

```html
<alexander-accordion>
</alexander-accordion>
```

See the specific component pages for more information about each component.

## Browser support

Alexander supports the last two versions of each browser.
