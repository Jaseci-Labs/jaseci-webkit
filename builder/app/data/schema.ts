export const schemas = [
  {
    uri: "http://myserver/foo-schema.json", // id of the first schema
    fileMatch: ["*"], // associate with our model
    schema: {
      type: "object",
      properties: {
        components: {
          $ref: "http://myserver/comp-schema.json",
        },
      },
      required: ["components"],
    },
  },
  {
    uri: "http://myserver/comp-schema.json",
    schema: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: { type: "string" },
          component: {
            enum: [
              "Container",
              "Button",
              "Inputbox",
              "Textbox",
              "Navbar",
              "Navlink",
              "DatePicker",
              "Column",
              "Row",
            ],
          },
          props: {
            type: "object",
          },
          css: {
            type: "object",
          },
          events: {
            type: "object",
            properties: {
              onClick: {
                type: "array",
                items: {
                  $ref: "http://myserver/action-schema.json",
                },
              },
              onKeyPress: {
                type: "array",
              },
              onEnterKeyPress: {
                type: "array",
              },
            },
          },
          sections: {
            type: "object",
            properties: {
              links: {
                type: "array",
                items: {
                  type: "object",
                  properties: { $ref: "http://myserver/comp-schema.json" },
                },
              },
              children: {
                type: "array",
                items: {
                  type: "object",
                  properties: { $ref: "http://myserver/comp-schema.json" },
                },
              },
            },
          },
          operations: {
            description:
              "Custom sequence of actions to run that can be called with the runOperation action.",
            type: "object",
          },
        },
        required: ["name", "component"],
      },
    },
  },
  {
    uri: "http://myserver/action-schema.json",
    schema: {
      type: "object",
      required: ["fn", "args"],
      properties: {
        fn: {
          enum: ["alert", "runOperation", "add", "append", "callEndpoint"],
        },
        endpoint: { type: "string" },
        operation: { type: "string" },
        args: {
          type: "array",
        },
        onCompleted: {
          $ref: "http://myserver/action-schema.json",
        },
      },
    },
  },
];
