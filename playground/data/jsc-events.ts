export const actions = [
  {
    value: "alert",
    label: "Alert",
    args: [{ type: "input", label: "Message", name: "message" }],
  },
  { value: "update", label: "Update" },
  { value: "add", label: "Add" },
  { value: "append", label: "Append" },
];

const basicEventFields = [
  {
    type: "select",
    name: "fn",
    label: "Action",
    data: [...actions],
    createable: true,
  },
];

export const jaseciEvents = {
  onEnterKeyPress: {
    fields: [...basicEventFields],
  },
  onKeyPress: {
    fields: [{ type: "input", name: "key", label: "Key" }, ...basicEventFields],
  },
  onClick: {
    fields: [...basicEventFields],
  },
};
