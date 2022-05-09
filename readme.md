###

### Project Structure

#### Setup

Run the following commands:

1. `cd components`
2. `npm install` or `yarn install`
3. `yarn start`

---

**Directories**

1. `components/src/components` - contains a stenciljs-bootstraped project
   - `components/src/components/components` - contains a set of web components used when rendering
   - `components/src/components/utils` - utility functions

---

### Docs

#### Rendering a component

`<jsc-app></jsc-app>` is the main entry point for rendering a component. A component is rendered by providing a list of objects conforming to a speficic standard.

Here's an example of how we can render a Navbar component:

```JSON
[
  {
    "component":"Navbar",
    "sections":{
      "links":[
        {
          "component":"NavLink",
          "props":{
            "label":"Home"
          }
        },
        {
          "component":"NavLink",
          "props":{
            "label":"About"
          }
        }
      ]
    },
    "props":{
      "title": "Jaseci App"
    }
  }
]
```

## Guide

- [Introduction](./docs/what-is-jaseci-webkit.md)
- [Basic Concepts](./docs/basic-concepts.md)
- [Built-in Actions](./docs/built-in-actions.md)
- [Connecting an API](./docs/connecting-an-api.md)
- [Components](./docs/components/)
  - [Button](./docs/components/button.md)
  - [Column](./docs/components/column.md)
  - [Container](./docs/components/container.md)
  - [Inputbox](./docs/components/inputbox.md)
  - [Navbar](./docs/components/navbar.md)
  - [Navbar](./docs/components/navlink.md)
  - [Row](./docs/components/row.md)
  - [Text](./docs/components/text.md)
  - [Textbox](./docs/components/textbox.md)

The above code will generate the following markup.

```html
<jsc-nav-bar label="Jaseci App">
  <div slot="links">
    <jsc-nav-link label="Home"></jsc-nav-link>
    <jsc-nav-link label="About"></jsc-nav-link>
  </div>
</jsc-nav-bar>
```

- `component` is used to determine which html element to generate.
- `sections` are array of components to be rendered as a child of `component`, each slot has a name to determine where it will be rendered
- `props` are attributes that will be attached to the generated element

The generated navbar might look like this:
![Jaseci Navbar](https://i.imgur.com/dhuRlwr.png)

#### Utils

- renderComponentTree
  - The `renderComponentTree` functions accepts an array of `JaseciComponent` and converts it to a string of custom html elements.
- renderComponent
  - `renderComponent` accepts a single `Jaseci Component` component and generates and converts it to a custom html element
