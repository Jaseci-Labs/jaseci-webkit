type Category =
  | "Navbars"
  | "Hero"
  | "Cards"
  | "Inputs"
  | "Sections"
  | "Layout"
  | "Basic"
  | "Footers";

export type Section = { id: string; category: Category; content: string };

export const sections: Section[] = [
  {
    id: "button-1",
    category: "Basic",
    content: JSON.stringify({
      component: "Button",
      props: { label: "Button" },
    }),
  },
  {
    id: "dropdown-1",
    category: "Basic",
    content: JSON.stringify({
      component: "Dropdown",
      props: {
        label: "My Dropdown",
        items: [
          { href: "#", label: "Hello" },
          { href: "#", label: "World" },
        ],
        buttonProps: {
          size: "sm",
        },
      },
    }),
  },
  {
    id: "badge-1",
    category: "Basic",
    content: JSON.stringify({
      component: "Badge",
      props: { label: "Badge" },
    }),
  },
  {
    id: "avatar-1",
    category: "Basic",
    content: JSON.stringify({
      component: "Avatar",
      props: {
        src: "https://placeimg.com/192/192/nature",
        placeholder: "GD",
        variant: "circle",
      },
    }),
  },
  {
    id: "progress-1",
    category: "Basic",
    content: JSON.stringify({
      component: "Progress",
      props: {
        palette: "primary",
        value: "20",
      },
    }),
  },
  {
    id: "navbar-1",
    category: "Navbars",
    content: JSON.stringify(
      {
        name: "navbar1",
        component: "Navbar",
        props: {
          label: "Hello World",
          links: [
            { label: "Home", href: "#" },
            { label: "About", href: "#" },
            {
              label: "Contact",
              links: [
                { label: "Facebook", href: "#" },
                { label: "Twitter", href: "#" },
              ],
            },
          ],
        },
      },
      null,
      2
    ),
  },
  {
    id: "navbar-2",
    category: "Navbars",
    content: JSON.stringify(
      {
        component: "Navbar",
        props: {
          label: "Hello World",
          palette: "secondary",
          links: [],
        },
      },
      null,
      2
    ),
  },
  {
    id: "hero-1",
    category: "Hero",
    content: JSON.stringify(
      {
        component: "Hero",
        props: {
          label: "Hello World",
          description:
            "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
          action: { label: "Learn More", href: "http://google.com" },
          backgroundImage:
            "https://cdn.mos.cms.futurecdn.net/tXr5UjKDsDBrYBQM9znb2c-1024-80.jpg.webp",
        },
      },
      null,
      2
    ),
  },
  {
    id: "stats-1",
    category: "Sections",
    content: JSON.stringify({
      component: "Stat",
      props: {
        stats: [
          {
            label: "Impressions",
            value: "90,000",
            description: "Take a look at that!",
          },
          {
            label: "Total API Calls",
            value: "90,000",
            description: "You may need to upgrade soon",
          },
          {
            label: "Unique Visitors",
            value: "20,000",
            description: "Going great!",
          },
        ],
      },
      css: {
        marginTop: "20px",
        marginBottom: "20px",
      },
    }),
  },
  {
    id: "collapse-1",
    category: "Sections",
    content: JSON.stringify({
      component: "Collapse",
      props: {
        label: "How do I use Jaseci?",
        palette: "primary",
      },
      sections: {
        children: [
          {
            component: "Text",
            props: { value: "Visit the site to learn more: " },
          },
          {
            component: "Anchor",
            props: {
              label: "Click Here",
              palette: "primary",
              href: "https://docs.jaseci.org/",
            },
          },
        ],
      },
    }),
  },
  {
    id: "basic-input",
    category: "Inputs",
    content: JSON.stringify({
      name: "inputbox",
      component: "Inputbox",
      props: {
        placeholder: "Enter text",
        fullwidth: "true",
        palette: "primary",
      },
    }),
  },
  {
    id: "basic-speech-input",
    category: "Inputs",
    content: JSON.stringify({
      name: "speech-input",
      component: "SpeechInput",
      props: {
        placeholder: "Enter text",
        fullwidth: "true",
        palette: "primary",
      },
    }),
  },
  {
    id: "basic-select",
    category: "Inputs",
    content: JSON.stringify({
      name: "basic-select",
      component: "Select",
      props: {
        placeholder: "Enter text",
        fullwidth: "true",
        palette: "primary",
        options: [{ label: "Option 1" }, { label: "Option 2" }],
      },
    }),
  },
  {
    id: "basic-radiogroup",
    category: "Inputs",
    content: JSON.stringify({
      name: "basic-radiogroup",
      component: "RadioGroup",
      props: {
        palette: "accent",
        label: "Choose an option",
        options: [
          { name: "on", label: "On" },
          { name: "off", label: "Off" },
        ],
      },
    }),
  },
  {
    id: "basic-textarea",
    category: "Inputs",
    content: JSON.stringify({
      name: "basic-textarea",
      component: "Textbox",
      props: {
        palette: "primary",
        label: "Biography",
        placeholder: "Enter text",
        fullwidth: "true",
      },
    }),
  },
  {
    id: "basic-datepicker",
    category: "Inputs",
    content: JSON.stringify({
      name: "basic-datepicker",
      component: "DatePicker",
      props: {
        palette: "primary",
        label: "Pick a date",
        fullwidth: "true",
      },
    }),
  },
  {
    id: "basic-range",
    category: "Inputs",
    content: JSON.stringify({
      name: "basic-range",
      component: "Range",
      props: {
        palette: "primary",
        label: "Choose amount",
        fullwidth: "true",
        min: "0",
        max: "500",
        defaultValue: "50",
      },
    }),
  },
  {
    id: "basic-rating",
    category: "Inputs",
    content: JSON.stringify({
      name: "basic-rating",
      component: "Rating",
      props: {
        palette: "primary",
        label: "Rate Us",
        stars: "10",
        value: 5,
      },
    }),
  },
  {
    id: "simple-card",
    content: JSON.stringify({
      component: "Card",
      name: "simple-card",
      props: {
        variant: "outline",
        title: "Simple Card",
      },
      sections: {
        children: [
          {
            component: "Text",
            props: {
              value: "Card text",
            },
          },
        ],
      },
    }),
    category: "Cards",
  },
  {
    id: "beach-card",
    content: JSON.stringify({
      component: "Card",
      name: "house-card",
      props: {
        variant: "outline",
        title: "Verdula Beach",
      },
      css: {
        width: "400px",
        margin: "0 auto",
      },
      sections: {
        children: [
          {
            component: "Text",
            props: {
              value:
                "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and " +
                "modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the " +
                "most beautiful beaches in Pula.",
            },
          },
          {
            component: "Divider",
            props: {},
          },
          {
            component: "Button",
            props: {
              label: "Show Details",
            },
          },
        ],
      },
    }),
    category: "Cards",
  },
  {
    id: "settings-card",
    content: JSON.stringify({
      component: "Card",
      name: "settings-card",
      props: {
        variant: "outline",
        title: "Configure notifications",
      },
      sections: {
        children: [
          {
            component: "Row",
            props: {
              justify: "between",
              items: "center",
            },
            sections: {
              children: [
                {
                  component: "Box",
                  sections: {
                    children: [
                      {
                        component: "Text",
                        props: { value: "Messages", variant: "h4" },
                        css: { fontWeight: "bold" },
                      },
                      {
                        component: "Text",
                        props: {
                          value:
                            "Direct messages you have received from other users",
                        },
                      },
                    ],
                  },
                },
                { component: "Toggle", props: { palette: "primary" } },
              ],
            },
          },

          { component: "Divider", props: {} },

          {
            component: "Row",
            props: {
              justify: "between",
              items: "center",
            },
            sections: {
              children: [
                {
                  component: "Box",
                  sections: {
                    children: [
                      {
                        component: "Text",
                        props: { value: "Review requests", variant: "h4" },
                        css: { fontWeight: "bold" },
                      },
                      {
                        component: "Text",
                        props: {
                          value: "Code review requests from your team members",
                        },
                      },
                    ],
                  },
                },
                { component: "Toggle", props: { palette: "primary" } },
              ],
            },
          },
          { component: "Divider", props: {} },
          {
            component: "Row",
            props: {
              justify: "between",
              items: "center",
            },
            sections: {
              children: [
                {
                  component: "Box",
                  sections: {
                    children: [
                      {
                        component: "Text",
                        props: { value: "Recommendations", variant: "h4" },
                        css: { fontWeight: "bold" },
                      },
                      {
                        component: "Text",
                        props: {
                          value:
                            "Digest with best community posts from previous week",
                        },
                      },
                    ],
                  },
                },
                { component: "Toggle", props: { palette: "primary" } },
              ],
            },
          },
        ],
      },
      css: {
        padding: 0,
      },
    }),
    category: "Cards",
  },
  {
    id: "avatar-card",
    content: JSON.stringify({
      component: "Card",
      name: "avatar-card",
      css: {
        width: "400px",
        margin: "0 auto",
      },
      sections: {
        children: [
          {
            component: "Column",
            props: {
              jusitfy: "center",
              items: "center",
            },

            sections: {
              children: [
                {
                  component: "Avatar",
                  props: {
                    src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80",
                    variant: "rounded",
                  },
                },
                {
                  component: "Container",
                  sections: {
                    children: [
                      {
                        component: "Text",
                        props: {
                          value: "Jane Glassbreaker",
                        },
                        css: {
                          fontWeight: "bold",
                          color: "#868e96",
                        },
                      },
                      {
                        component: "Text",
                        props: {
                          value: "glassbreaker@me.io",
                        },
                        css: {
                          fontSize: "0.9em",
                          color: "#868e96",
                        },
                      },
                    ],
                  },
                  css: {
                    paddingTop: "8px",
                    paddingBottom: "8px",
                  },
                },
                {
                  component: "Button",
                  props: {
                    label: "Send Message",
                  },
                  css: {
                    display: "block",
                    width: "100% !important",
                  },
                },
              ],
            },
          },
        ],
      },
    }),
    category: "Cards",
  },
  {
    id: "footer-1",
    category: "Footers",
    content: JSON.stringify({
      id: "footer-1",
      name: "footer-1",
      component: "Card",
      sections: {
        children: [
          {
            component: "Row",
            sections: {
              children: [
                {
                  component: "Text",
                  props: {
                    value: "Copyright © 2022 - Jaseci Studio",
                  },
                },
              ],
            },
          },
        ],
      },
    }),
  },
  {
    id: "row1",
    category: "Layout",
    content: JSON.stringify({
      name: "row1",
      component: "Row",
      props: { justify: "between", items: "center" },
      sections: {
        children: [
          {
            component: "Button",
            props: { label: "Left" },
          },
          {
            component: "Button",
            props: { label: "Right" },
          },
        ],
      },
    }),
  },
  {
    id: "column1",
    category: "Layout",
    content: JSON.stringify({
      name: "column1",
      component: "Column",
      props: { justify: "between", items: "center" },
      sections: {
        children: [
          {
            component: "Button",
            props: { label: "Top" },
          },
          {
            component: "Button",
            props: { label: "Bottom" },
          },
        ],
      },
      css: {
        gap: "10px",
      },
    }),
  },
  {
    id: "datagrid-1",
    category: "Layout",
    content: JSON.stringify({
      name: "logsDataGrid",
      component: "Datagrid",
      props: {
        server: "http://localhost:8000",
        walker: "list_log",
        token:
          "198ab01ffecda8b09c98e2e679257d25644c430690ae0cacd54529bcd83b0b9a",
        snt: "urn:uuid:ae422d32-27eb-4ee8-9d91-b1a6b4189caf",
        variant: "striped",
        itemsPerPage: 3,
        headings: [
          { label: "Subject", accessor: "subject" },
          { label: "Message", accessor: "body" },
          {
            label: "Date",
            accessor: "timestamp",
            formatter: "date",
            format: "Do MMM, YYYY h:mm a",
            render: [
              {
                component: "Text",
                props: { value: "{{value}}" },
                css: { color: "#006ADC", fontWeight: "bold" },
              },
            ],
          },
          {
            label: "Actions",
            accessor: "jid",
            render: [
              {
                component: "Button",
                props: { label: "Delete" },
                events: {
                  // call delete endpoint
                  onClick: [
                    {
                      fn: "callEndpoint",
                      endpoint: "http://localhost:8000/js/walker_run",
                      onCompleted: {
                        fn: "refreshDatagrid",
                        args: ["logsDataGrid"],
                      },
                      args: [
                        "POST",
                        {
                          name: "delete_log",
                          snt: "urn:uuid:ae422d32-27eb-4ee8-9d91-b1a6b4189caf",
                          ctx: {
                            id: "{{value}}",
                          },
                        },
                        {
                          Authorization:
                            "token 198ab01ffecda8b09c98e2e679257d25644c430690ae0cacd54529bcd83b0b9a",
                          "Content-Type": "application/json",
                        },
                      ],
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
    }),
  },
];
