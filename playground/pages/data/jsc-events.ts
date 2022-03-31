const actions = [
  { value: "alert", label: "Alert" },
  { value: "update", label: "Update" },
  { value: "add", label: "Add" },
  { value: "append", label: "Append" },
];

export const jaseciEvents = {
  onEnter: {
    fields: [],
  },
  onKeyPress: {
    fields: [
      { type: "input", name: "key", label: "Key" },
      {
        type: "select",
        name: "fn",
        label: "Action",
        data: [...actions],
        createable: true,
      },
    ],
  },
  onClick: {
    fields: [],
  },
};
