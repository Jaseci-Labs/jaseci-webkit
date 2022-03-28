---
title: Jaseci Row
aliases: [Row]
tags: [documentation]
---

#### Summary

A `Row` is a layout component that allows you to align `children` components horizontally. A row is rendered as a flexbox container.

<u>Example:</u>

```JSON
{
	"component": "Row",
	"events": {},
	"slots": {
		"children": []
	},
	"props": {
		"justify": "center",
		"items": "start"
	}
}
```

The above will align the children elements in a row that's center-aligned on the x-axis and aligned at the top of the y-axis.

#### Slots

- children

#### Props

- justify
- items
