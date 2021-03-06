export const jaseciComps: any = {
  Container: {
    props: [{ type: "input", name: "name", label: "Name" }],
  },
  Column: {
    props: [
      { type: "input", name: "name", label: "Name" },
      {
        type: "select",
        data: [
          { value: "start", label: "Start" },
          { value: "end", label: "End" },
          { value: "center", label: "Center" },
          { value: "around", label: "Around" },
          { value: "evenly", label: "Evenly" },
        ],
        label: "Justify",
        name: "justify",
      },
      {
        type: "select",
        data: [
          { value: "start", label: "Start" },
          { value: "end", label: "End" },
          { value: "center", label: "Center" },
        ],
        label: "Items",
        name: "items",
      },
    ],
  },
  Row: {
    props: [
      { type: "input", name: "name", label: "Name" },
      {
        type: "select",
        data: [
          { value: "start", label: "Start" },
          { value: "end", label: "End" },
          { value: "center", label: "Center" },
          { value: "around", label: "Around" },
          { value: "evenly", label: "Evenly" },
        ],
        label: "Justify",
        name: "justify",
      },
      {
        type: "select",
        data: [
          { value: "start", label: "Start" },
          { value: "end", label: "End" },
          { value: "center", label: "Center" },
        ],
        label: "Items",
        name: "items",
      },
    ],
  },
  Navbar: {
    props: [
      { type: "input", name: "name", label: "Name" },
      { type: "input", name: "label", label: "Label" },
    ],
  },
  NavLink: {
    props: [
      { type: "input", name: "name", label: "Name" },
      { type: "input", name: "label", label: "Label" },
      { type: "input", name: "href", label: "Link" },
      { type: "input", name: "target", label: "Target" },
    ],
  },
  Button: {
    props: [
      { type: "input", name: "name", label: "Name" },
      { type: "input", name: "label", label: "Label" },
    ],
  },
  Inputbox: {
    props: [
      { type: "input", name: "name", label: "Name" },
      { type: "input", name: "label", label: "Label" },
      { type: "input", name: "placeholder", label: "Placeholder" },
      {
        type: "select",
        data: [
          { value: "true", label: "True" },
          { value: "false", label: "False" },
        ],
        name: "fullwidth",
        label: "Fullwidth",
      },
    ],
  },
  Textbox: {
    props: [
      { type: "input", name: "name", label: "Name" },
      { type: "input", name: "label", label: "Label" },
      { type: "input", name: "placeholder", label: "Placeholder" },
      {
        type: "select",
        data: [
          { value: "true", label: "True" },
          { value: "false", label: "False" },
        ],
        name: "fullwidth",
        label: "Fullwidth",
      },
    ],
  },
  Text: {
    props: [
      { type: "input", name: "name", label: "Name" },
      { type: "input", name: "value", label: "Value" },
      {
        type: "select",
        label: "Variant",
        name: "variant",
        data: [
          { label: "h1", value: "h1" },
          { label: "h2", value: "h2" },
          { label: "h3", value: "h3" },
          { label: "h4", value: "h4" },
          { label: "h5", value: "h5" },
          { label: "h6", value: "h6" },
        ],
      },
    ],
  },
  Divider: {
    props: [{ type: "input", name: "name", label: "Name" }],
  },
  DatePicker: {
    props: [
      { type: "input", name: "name", label: "Name" },
      { type: "input", name: "label", label: "Label" },
    ],
  },
  Chip: {
    props: [
      { type: "input", name: "name", label: "Name" },
      { type: "input", name: "label", label: "Label" },
    ],
  },
};
