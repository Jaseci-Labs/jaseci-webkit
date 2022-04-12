---
title: Jaseci Column
aliases: [Column]
tags: [documentation]
---

#### Summary

A `Column` is a layout component that allows you to align `children` components vertically. A column is rendered as a flexbox container.

<u>Example:</u>

```JSON
{
	"component": "Column",
	"events": {},
	"sections": {
		"children": []
	},
	"props": {
		"justify": "center",
		"items": "start"
	},
}
```

The above will align the children elements in a column that's aligned to the left of the x-axis and center-aligned on the y-axis.

#### Sections

- children

#### Props

- justify - positions children along the y-axis
  - Acceptable values are `start` | `end` | `center` | `around` | `evenly`
- items - positions children along the x-axis
  - Acceptable values = `start` | `end` | `center`
