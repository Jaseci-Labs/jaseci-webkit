---
title: Jaseci Button
---

#### Summary

A `Button` will render a `jsc-button`. Under the hood, this `jsc-button` tag will render a `html` button element within it's shadow DOM.

<u>Example:</u>

```JSON
{
	component: "Button",
	events: {},
	props: {
		label: "Click me"
	},
	css: {
		background: "red"
	},
}


```

The above code will render a button with a red background and a label of "Click me".

### Props

- label - sets the text within the button
