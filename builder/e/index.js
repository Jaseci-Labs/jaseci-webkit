var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return node.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return node.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_ssr = require("@mantine/ssr");
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response(`<!DOCTYPE html>${(0, import_ssr.injectStylesIntoStaticMarkup)(markup)}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_core2 = require("@mantine/core");
var import_notifications = require("@mantine/notifications");
var import_react2 = require("react");
var import_remix2 = __toESM(require_remix());
var import_nprogress = __toESM(require("nprogress"));

// node_modules/nprogress/nprogress.css
var nprogress_default = "/build/_assets/nprogress-JFUSETFZ.css";

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/root.tsx
var import_remix3 = __toESM(require_remix());

// app/components/PageNotFound.tsx
init_react();
var import_core = require("@mantine/core");
var import_react_router_dom = require("react-router-dom");
var useStyles = (0, import_core.createStyles)((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80
  },
  label: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2],
    [theme.fn.smallerThan("sm")]: {
      fontSize: 120
    }
  },
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: "center",
    fontWeight: 900,
    fontSize: 38,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 32
    }
  },
  description: {
    maxWidth: 500,
    margin: "auto",
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5
  }
}));
function PageNotFound() {
  const { classes } = useStyles();
  return /* @__PURE__ */ React.createElement(import_core.Container, {
    className: classes.root
  }, /* @__PURE__ */ React.createElement("div", {
    className: classes.label
  }, "404"), /* @__PURE__ */ React.createElement(import_core.Title, {
    className: classes.title
  }, "You have found a secret place."), /* @__PURE__ */ React.createElement(import_core.Text, {
    color: "dimmed",
    size: "lg",
    align: "center",
    className: classes.description
  }, "Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has been moved to another URL."), /* @__PURE__ */ React.createElement(import_core.Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(import_core.Button, {
    variant: "subtle",
    size: "md",
    component: import_react_router_dom.Link,
    to: "/"
  }, "Take me back to the home page")));
}

// app/session.server.ts
init_react();
var import_remix = __toESM(require_remix());
var import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/models/user.server.ts
init_react();
var import_bcrypt = __toESM(require("@node-rs/bcrypt"));

// app/db.server.ts
init_react();
var import_client = require("@prisma/client");
var prisma;
if (true) {
  prisma = new import_client.PrismaClient();
} else {
  if (!global.__db__) {
    global.__db__ = new import_client.PrismaClient();
  }
  prisma = global.__db__;
  prisma.$connect();
}

// app/models/user.server.ts
async function getUserById(id) {
  return prisma.user.findUnique({ where: { id } });
}
async function getUserByEmail(email) {
  return prisma.user.findUnique({ where: { email } });
}
async function createUser(email, password) {
  const hashedPassword = await import_bcrypt.default.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword
        }
      }
    }
  });
  return user;
}
async function verifyLogin(email, password) {
  const userWithPassword = await prisma.user.findUnique({
    where: { email },
    include: {
      password: true
    }
  });
  if (!userWithPassword || !userWithPassword.password) {
    return null;
  }
  const isValid = await import_bcrypt.default.verify(password, userWithPassword.password.hash);
  if (!isValid) {
    return null;
  }
  const _a = userWithPassword, { password: _password } = _a, userWithoutPassword = __objRest(_a, ["password"]);
  return userWithoutPassword;
}

// app/session.server.ts
(0, import_tiny_invariant.default)(process.env.SESSION_SECRET, "SESSION_SECRET must be set");
var sessionStorage = (0, import_remix.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: true,
    maxAge: 0,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: true
  }
});
var USER_SESSION_KEY = "userId";
async function getSession(request) {
  const cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}
async function getUserId(request) {
  const session = await getSession(request);
  const userId = session.get(USER_SESSION_KEY);
  return userId;
}
async function getUser(request) {
  const userId = await getUserId(request);
  if (userId === void 0)
    return null;
  const user = await getUserById(userId);
  if (user)
    return user;
  throw await logout(request);
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  const userId = await getUserId(request);
  if (!userId) {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_remix.redirect)(`/login?${searchParams}`);
  }
  return userId;
}
async function requireUser(request) {
  const userId = await requireUserId(request);
  const user = await getUserById(userId);
  if (user)
    return user;
  throw await logout(request);
}
async function createUserSession({
  request,
  userId,
  remember,
  redirectTo
}) {
  const session = await getSession(request);
  session.set(USER_SESSION_KEY, userId);
  return (0, import_remix.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember ? 60 * 60 * 24 * 7 : void 0
      })
    }
  });
}
async function logout(request) {
  const session = await getSession(request);
  return (0, import_remix.redirect)("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/root.tsx
var links = () => {
  return [
    { href: "https://fonts.googleapis.com", rel: "preconnect" },
    {
      href: "https://fonts.gstatic.com",
      rel: "preconnect",
      crossOrigin: "anonymous"
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;300;400;500;600;700&display=swap",
      rel: "stylesheet"
    },
    { rel: "stylesheet", href: nprogress_default },
    {
      href: "https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
      rel: "stylesheet"
    }
  ];
};
var meta = () => ({
  charset: "utf-8",
  title: "Jaseci Webkit",
  viewport: "width=device-width,initial-scale=1"
});
var loader = async ({ request }) => {
  return (0, import_remix3.json)({
    user: await getUser(request)
  });
};
function App() {
  const transition = (0, import_remix2.useTransition)();
  (0, import_react2.useEffect)(() => {
    if (transition.state === "idle")
      import_nprogress.default.done();
    else
      import_nprogress.default.start();
  }, [transition.state]);
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: "h-full"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(MantineTheme, null, /* @__PURE__ */ React.createElement(import_remix3.Outlet, null)), /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null)));
}
var CatchBoundary = ({ children }) => {
  const caught = (0, import_remix3.useCatch)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: "h-full"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(MantineTheme, null, caught.status === 404 && /* @__PURE__ */ React.createElement(PageNotFound, null)))));
};
function MantineTheme({ children }) {
  const [colorScheme, setColorScheme] = (0, import_react2.useState)("light");
  const toggleColorScheme = (value) => setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return /* @__PURE__ */ React.createElement(import_core2.ColorSchemeProvider, {
    colorScheme,
    toggleColorScheme
  }, /* @__PURE__ */ React.createElement(import_core2.MantineProvider, {
    theme: {
      fontFamily: "'Readex Pro', sans-serif",
      headings: { fontFamily: "'Barlow', sans-serif" },
      primaryColor: "orange",
      colorScheme
    },
    withNormalizeCSS: true,
    withGlobalStyles: true
  }, /* @__PURE__ */ React.createElement(import_notifications.NotificationsProvider, null, children)));
}

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/api/loadGraphs.tsx
var loadGraphs_exports = {};
__export(loadGraphs_exports, {
  loader: () => loader2
});
init_react();
var import_remix4 = __toESM(require_remix());
var loader2 = async ({ request, params, context }) => {
  const url = new URL(request.url);
  const endpointUrl = url.searchParams.get("endpointUrl");
  const token = "0e61e3b200c67e7f01f76c3dcc1984da966cc2f7ea4ce5e9879a476239c8338c";
  const graphs = await fetch(`${endpointUrl}/js/graph_list`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${token}`
    }
  }).then((res) => res.json()).catch((err) => console.log(err));
  return (0, import_remix4.json)({ graphs });
};

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/api/loadGraph.tsx
var loadGraph_exports = {};
__export(loadGraph_exports, {
  loader: () => loader3
});
init_react();
var import_remix5 = __toESM(require_remix());
var loader3 = async ({ request }) => {
  const url = new URL(request.url);
  const endpointUrl = url.searchParams.get("endpointUrl");
  const token = "0e61e3b200c67e7f01f76c3dcc1984da966cc2f7ea4ce5e9879a476239c8338c";
  const graph = await fetch(`${endpointUrl}/js/graph_get`, {
    method: "POST",
    body: JSON.stringify({
      gph: "urn:uuid:4e51bae2-3fe0-49e0-8ea2-913d47eba890",
      mode: "default",
      detailed: true
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${token}`
    }
  }).then(async (res) => {
    const data = await res.json();
    console.log({ data });
    const edges = data == null ? void 0 : data.filter((item) => item.j_type === "edge").map((edge) => ({
      from: edge.from_node_id,
      to: edge.to_node_id,
      label: edge.name,
      context: edge.context
    }));
    const nodes = data == null ? void 0 : data.filter((item) => item.j_type === "node").map((node) => ({
      id: node.jid,
      label: node.name,
      context: node.context
    }));
    return { edges, nodes };
  }).catch((err) => console.log(err));
  return (0, import_remix5.json)({ graph });
};

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/__loadWebkit.tsx
var loadWebkit_exports = {};
__export(loadWebkit_exports, {
  default: () => loadWebkit_default,
  links: () => links2
});
init_react();
var import_react3 = __toESM(require("react"));
var import_remix6 = __toESM(require_remix());
var links2 = () => {
  return [
    { href: "http://localhost:3333/build/components.css", rel: "stylesheet" }
  ];
};
var LoadWebkitLayout = () => {
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("script", {
    type: "module",
    src: `http://localhost:3333/build/components.esm.js`,
    async: true
  }), /* @__PURE__ */ import_react3.default.createElement("script", {
    noModule: true,
    src: `http://localhost:3333/build/components.js`,
    async: true
  }), /* @__PURE__ */ import_react3.default.createElement(import_remix6.Outlet, null));
};
var loadWebkit_default = LoadWebkitLayout;

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/__loadWebkit/site.$slug.tsx
var site_slug_exports = {};
__export(site_slug_exports, {
  default: () => site_slug_default,
  loader: () => loader4
});
init_react();
var import_comment_json = require("comment-json");
var import_react4 = __toESM(require("react"));
var import_remix7 = __toESM(require_remix());
var loader4 = async ({ params }) => {
  return {};
};
var SitePage = () => {
  var _a;
  const jscAppRef = (0, import_react4.useRef)();
  const loaderData = (0, import_remix7.useLoaderData)();
  (0, import_react4.useEffect)(() => {
    var _a2, _b, _c;
    (_c = jscAppRef == null ? void 0 : jscAppRef.current) == null ? void 0 : _c.setMarkup(JSON.stringify((_b = (0, import_comment_json.parse)((_a2 = loaderData == null ? void 0 : loaderData.project) == null ? void 0 : _a2.content, void 0, true)) == null ? void 0 : _b.components));
  }, [loaderData == null ? void 0 : loaderData.project, jscAppRef]);
  return /* @__PURE__ */ import_react4.default.createElement("div", null, ((_a = loaderData == null ? void 0 : loaderData.project) == null ? void 0 : _a.published) ? /* @__PURE__ */ import_react4.default.createElement("jsc-app", {
    ref: jscAppRef
  }) : /* @__PURE__ */ import_react4.default.createElement(PageNotFound, null));
};
var site_slug_default = SitePage;

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/__loadWebkit/studio.tsx
var studio_exports = {};
__export(studio_exports, {
  default: () => Playground,
  loader: () => loader5
});
init_react();
var import_core4 = require("@mantine/core");
var import_remix9 = __toESM(require_remix());
var import_remix10 = __toESM(require_remix());

// app/components/EditorActionBar.tsx
init_react();
var import_core3 = require("@mantine/core");
var import_react5 = __toESM(require("react"));
var import_remix8 = __toESM(require_remix());
var import_tabler_icons_react = require("tabler-icons-react");
var EditorActionBar = () => {
  const { projectId } = (0, import_remix8.useParams)();
  const [searchParams, setSearchParams] = (0, import_remix8.useSearchParams)();
  return /* @__PURE__ */ import_react5.default.createElement(import_core3.Box, {
    sx: { background: "#202327", width: 48 }
  }, /* @__PURE__ */ import_react5.default.createElement(import_core3.Stack, {
    align: "center",
    py: "md",
    sx: { color: "#9c9692" }
  }, /* @__PURE__ */ import_react5.default.createElement(import_core3.Tooltip, {
    label: /* @__PURE__ */ import_react5.default.createElement(import_core3.Text, null, "Overview ", /* @__PURE__ */ import_react5.default.createElement(import_core3.Kbd, {
      ml: "xs"
    }, "gH")),
    position: "right",
    withArrow: true
  }, /* @__PURE__ */ import_react5.default.createElement(import_remix8.Link, {
    to: `/studio/${projectId}`
  }, /* @__PURE__ */ import_react5.default.createElement(import_core3.ActionIcon, null, /* @__PURE__ */ import_react5.default.createElement(import_tabler_icons_react.Home, {
    size: 32
  })))), /* @__PURE__ */ import_react5.default.createElement(import_core3.Tooltip, {
    label: /* @__PURE__ */ import_react5.default.createElement(import_core3.Text, null, "Views ", /* @__PURE__ */ import_react5.default.createElement(import_core3.Kbd, {
      ml: "xs"
    }, "gV")),
    position: "right",
    withArrow: true
  }, /* @__PURE__ */ import_react5.default.createElement(import_remix8.Link, {
    to: `/studio/${projectId}/editor/tab/blank`
  }, /* @__PURE__ */ import_react5.default.createElement(import_core3.ActionIcon, {
    onClick: () => {
      if (!searchParams.get("showViews")) {
        searchParams.append("showViews", "true");
      } else {
        searchParams.delete("showViews");
      }
      setSearchParams(searchParams);
    }
  }, /* @__PURE__ */ import_react5.default.createElement(import_tabler_icons_react.Browser, {
    size: 32
  })))), /* @__PURE__ */ import_react5.default.createElement(import_core3.Tooltip, {
    label: /* @__PURE__ */ import_react5.default.createElement(import_core3.Text, null, "Graphs ", /* @__PURE__ */ import_react5.default.createElement(import_core3.Kbd, {
      ml: "xs"
    }, "gG")),
    position: "right",
    withArrow: true
  }, /* @__PURE__ */ import_react5.default.createElement(import_remix8.Link, {
    to: `/studio/${projectId}/graphs`
  }, /* @__PURE__ */ import_react5.default.createElement(import_core3.ActionIcon, null, /* @__PURE__ */ import_react5.default.createElement(import_tabler_icons_react.VectorTriangle, {
    size: 32
  }))))));
};
var EditorActionBar_default = EditorActionBar;

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/__loadWebkit/studio.tsx
var loader5 = async ({ params }) => {
  return (0, import_remix10.json)({ project: {} });
};
function Playground() {
  const loaderData = (0, import_remix10.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_core4.Box, {
    sx: { display: "flex", minHeight: "100vh" }
  }, /* @__PURE__ */ React.createElement(EditorActionBar_default, null), /* @__PURE__ */ React.createElement(import_remix9.Outlet, null)));
}

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/__loadWebkit/studio/$projectId/editor.tab.$tabId.tsx
var editor_tab_tabId_exports = {};
__export(editor_tab_tabId_exports, {
  action: () => action,
  default: () => editor_tab_tabId_default,
  loader: () => loader6
});
init_react();
var import_core9 = require("@mantine/core");
var import_react10 = require("@monaco-editor/react");
var import_react11 = __toESM(require("@monaco-editor/react"));
var import_comment_json2 = require("comment-json");
var import_react12 = __toESM(require("react"));
var import_remix13 = __toESM(require_remix());
var import_remix14 = __toESM(require_remix());
var import_remix15 = __toESM(require_remix());

// app/components/EditorHeader.tsx
init_react();
var import_core5 = require("@mantine/core");
var import_hooks = require("@mantine/hooks");
var import_react6 = __toESM(require("react"));
var import_remix11 = __toESM(require_remix());
var import_tabler_icons_react2 = require("tabler-icons-react");
var EditorHeader = ({
  openTabs,
  onClickRun,
  onClickFormat,
  onTogglePreview
}) => {
  const { projectId } = (0, import_remix11.useParams)();
  const { tabId } = (0, import_remix11.useParams)();
  const navigate = (0, import_remix11.useNavigate)();
  return /* @__PURE__ */ import_react6.default.createElement(import_core5.Group, {
    position: "apart",
    sx: {
      height: "40px",
      width: "100%",
      background: "#202327",
      borderBottom: "1px solid #484f567d"
    }
  }, /* @__PURE__ */ import_react6.default.createElement(import_core5.Group, {
    sx: { height: "100%", gap: 0, maxWidth: "80%" }
  }, openTabs.map((tab) => /* @__PURE__ */ import_react6.default.createElement(EditorTab, {
    key: tab.id,
    ext: tab.ext,
    active: tabId == tab.id,
    title: tab.name,
    onClick: () => {
      navigate(`/studio/${projectId}/editor/tab/${tab.id}`);
    },
    id: tab.id
  }))), /* @__PURE__ */ import_react6.default.createElement(import_core5.Group, {
    px: "md",
    spacing: 2
  }, /* @__PURE__ */ import_react6.default.createElement(import_core5.Group, {
    px: "md",
    spacing: 1
  }, /* @__PURE__ */ import_react6.default.createElement(import_core5.ActionIcon, {
    onClick: onClickRun,
    color: "teal",
    variant: "filled"
  }, /* @__PURE__ */ import_react6.default.createElement(import_tabler_icons_react2.PlayerPlay, {
    size: 16
  }))), /* @__PURE__ */ import_react6.default.createElement(import_core5.ActionIcon, {
    color: "indigo",
    onClick: onTogglePreview,
    variant: "filled"
  }, /* @__PURE__ */ import_react6.default.createElement(import_tabler_icons_react2.LayoutColumns, {
    size: 16
  })), /* @__PURE__ */ import_react6.default.createElement(import_core5.Tooltip, {
    label: /* @__PURE__ */ import_react6.default.createElement(import_core5.Text, null, "Format ", /* @__PURE__ */ import_react6.default.createElement(import_core5.Kbd, {
      ml: "xs"
    }, "CTRL"), " + ", /* @__PURE__ */ import_react6.default.createElement(import_core5.Kbd, null, "SHIFT"), " + ", /* @__PURE__ */ import_react6.default.createElement(import_core5.Kbd, null, "F")),
    position: "bottom",
    withArrow: true
  }, /* @__PURE__ */ import_react6.default.createElement(import_core5.ActionIcon, {
    onClick: onClickFormat
  }, /* @__PURE__ */ import_react6.default.createElement(import_tabler_icons_react2.Braces, {
    size: 16,
    color: "#9ba9b8"
  }))), /* @__PURE__ */ import_react6.default.createElement(import_core5.Menu, {
    color: "red",
    control: /* @__PURE__ */ import_react6.default.createElement(import_core5.Tooltip, {
      label: /* @__PURE__ */ import_react6.default.createElement(import_core5.Text, null, "More Actions ", /* @__PURE__ */ import_react6.default.createElement(import_core5.Kbd, {
        ml: "xs"
      }, "CTRL"), " + ", /* @__PURE__ */ import_react6.default.createElement(import_core5.Kbd, null, "M")),
      position: "bottom",
      withArrow: true
    }, /* @__PURE__ */ import_react6.default.createElement(import_core5.ActionIcon, null, /* @__PURE__ */ import_react6.default.createElement(import_tabler_icons_react2.Menu, {
      size: 16,
      color: "#9ba9b8"
    })))
  }, /* @__PURE__ */ import_react6.default.createElement(import_core5.Menu.Label, null, "Actions"), /* @__PURE__ */ import_react6.default.createElement(import_core5.Menu.Item, {
    icon: /* @__PURE__ */ import_react6.default.createElement(import_tabler_icons_react2.NewSection, null)
  }, "Add Component", /* @__PURE__ */ import_react6.default.createElement(import_core5.Box, {
    mt: "xs"
  }, /* @__PURE__ */ import_react6.default.createElement(import_core5.Kbd, {
    my: "md"
  }, "CTRL"), " + ", /* @__PURE__ */ import_react6.default.createElement(import_core5.Kbd, {
    my: "md"
  }, "N"))), /* @__PURE__ */ import_react6.default.createElement(import_core5.Menu.Item, {
    icon: /* @__PURE__ */ import_react6.default.createElement(import_tabler_icons_react2.InfoSquare, null)
  }, "Examples", /* @__PURE__ */ import_react6.default.createElement(import_core5.Box, {
    mt: "xs"
  }, /* @__PURE__ */ import_react6.default.createElement(import_core5.Kbd, {
    my: "md"
  }, "CTRL"), " + ", /* @__PURE__ */ import_react6.default.createElement(import_core5.Kbd, {
    my: "md"
  }, "E"))))));
};
function EditorTab({ title, active, onClick, ext, id }) {
  const { hovered, ref } = (0, import_hooks.useHover)();
  return /* @__PURE__ */ import_react6.default.createElement(import_core5.Box, {
    ref,
    onClick,
    sx: {
      background: active ? "#1E1E1E" : "transparent",
      height: "100%",
      display: "flex",
      alignItems: "center",
      color: "#fff",
      cursor: "pointer"
    },
    px: "md"
  }, ext === "jac" ? /* @__PURE__ */ import_react6.default.createElement(import_tabler_icons_react2.VectorTriangle, null) : /* @__PURE__ */ import_react6.default.createElement(import_tabler_icons_react2.BrandHtml5, null), /* @__PURE__ */ import_react6.default.createElement(import_core5.Text, {
    sx: { marginLeft: "4px" }
  }, ext === "jac" ? title + ".jac" : title), /* @__PURE__ */ import_react6.default.createElement(import_remix11.Form, {
    method: "post"
  }, /* @__PURE__ */ import_react6.default.createElement("input", {
    name: "tabFileId",
    value: id,
    hidden: true
  }), /* @__PURE__ */ import_react6.default.createElement("input", {
    name: "_action",
    value: "closeTabItem",
    hidden: true
  }), /* @__PURE__ */ import_react6.default.createElement(import_core5.ActionIcon, {
    type: "submit",
    onClick: (e) => {
      e.stopPropagation();
    },
    sx: {
      opacity: hovered || active ? 1 : 0,
      transition: "opacity 0.2s ease-in-out"
    },
    ml: "xs",
    size: "sm"
  }, /* @__PURE__ */ import_react6.default.createElement(import_tabler_icons_react2.X, {
    size: 14
  }))));
}
var EditorHeader_default = EditorHeader;

// app/data/schema.ts
init_react();
var schemas = [
  {
    uri: "http://myserver/foo-schema.json",
    fileMatch: ["*"],
    schema: {
      type: "object",
      properties: {
        components: {
          $ref: "http://myserver/comp-schema.json"
        }
      },
      required: ["components"]
    }
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
              "Row"
            ]
          },
          props: {
            type: "object"
          },
          css: {
            type: "object"
          },
          events: {
            type: "object",
            properties: {
              onClick: {
                type: "array",
                items: {
                  $ref: "http://myserver/action-schema.json"
                }
              },
              onKeyPress: {
                type: "array"
              },
              onEnterKeyPress: {
                type: "array"
              }
            }
          },
          sections: {
            type: "object",
            properties: {
              links: {
                type: "array",
                items: {
                  type: "object",
                  properties: { $ref: "http://myserver/comp-schema.json" }
                }
              },
              children: {
                type: "array",
                items: {
                  type: "object",
                  properties: { $ref: "http://myserver/comp-schema.json" }
                }
              }
            }
          },
          operations: {
            description: "Custom sequence of actions to run that can be called with the runOperation action.",
            type: "object"
          }
        },
        required: ["name", "component"]
      }
    }
  },
  {
    uri: "http://myserver/action-schema.json",
    schema: {
      type: "object",
      required: ["fn", "args"],
      properties: {
        fn: {
          enum: ["alert", "runOperation", "add", "append", "callEndpoint"]
        },
        endpoint: { type: "string" },
        operation: { type: "string" },
        args: {
          type: "array"
        },
        onCompleted: {
          $ref: "http://myserver/action-schema.json"
        }
      }
    }
  }
];

// app/components/ViewsSidebar.tsx
init_react();
var import_core6 = require("@mantine/core");
var import_react7 = __toESM(require("react"));
var import_remix12 = __toESM(require_remix());
var import_tabler_icons_react3 = require("tabler-icons-react");
var ViewsSidebar = ({ tabFiles }) => {
  const [showNewItemModal, setShowNewItemModal] = import_react7.default.useState(false);
  return /* @__PURE__ */ import_react7.default.createElement(import_core6.Box, {
    sx: {
      background: "#202327",
      height: "100%",
      borderLeft: "1px solid #484f567d"
    }
  }, /* @__PURE__ */ import_react7.default.createElement(import_core6.Stack, {
    align: "left",
    px: "md",
    py: "md",
    sx: { color: "#9c9692" },
    spacing: "xs"
  }, /* @__PURE__ */ import_react7.default.createElement(import_core6.Button, {
    size: "xs",
    variant: "subtle",
    color: "gray",
    leftIcon: /* @__PURE__ */ import_react7.default.createElement(import_tabler_icons_react3.Plus, null),
    compact: true,
    sx: { fontFamily: "sans-serif" },
    onClick: () => setShowNewItemModal(true)
  }, "New"), tabFiles.map((tabFile) => /* @__PURE__ */ import_react7.default.createElement(import_core6.Box, {
    key: tabFile.id,
    sx: { width: "100%" }
  }, /* @__PURE__ */ import_react7.default.createElement(import_remix12.Form, {
    method: "post",
    style: { width: "100%" }
  }, /* @__PURE__ */ import_react7.default.createElement("input", {
    hidden: true,
    name: "tabFileId",
    value: tabFile.id
  }), /* @__PURE__ */ import_react7.default.createElement(import_core6.Button, {
    size: "xs",
    variant: "subtle",
    color: "gray",
    leftIcon: tabFile.ext === "jac" ? /* @__PURE__ */ import_react7.default.createElement(import_tabler_icons_react3.VectorTriangle, null) : /* @__PURE__ */ import_react7.default.createElement(import_tabler_icons_react3.BrandHtml5, null),
    compact: true,
    type: "submit",
    name: "_action",
    value: "openTabItem",
    sx: { fontFamily: "sans-serif" },
    fullWidth: true
  }, tabFile.ext === "jac" ? tabFile.name + ".jac" : tabFile.name))))), /* @__PURE__ */ import_react7.default.createElement(NewItemModal, {
    opened: showNewItemModal,
    onClose: () => setShowNewItemModal(false)
  }));
};
var NewItemModal = ({
  opened,
  onClose
}) => {
  const [tabFileType, setTabFileType] = import_react7.default.useState("View");
  return /* @__PURE__ */ import_react7.default.createElement(import_core6.Modal, {
    title: "Add Item",
    opened,
    onClose
  }, /* @__PURE__ */ import_react7.default.createElement(import_core6.SegmentedControl, {
    mb: "lg",
    value: tabFileType,
    onChange: setTabFileType,
    data: [
      { label: "View", value: "View" },
      { label: "Jac File", value: "Jac" }
    ]
  }), tabFileType === "View" && /* @__PURE__ */ import_react7.default.createElement(import_remix12.Form, {
    method: "post"
  }, /* @__PURE__ */ import_react7.default.createElement(import_core6.TextInput, {
    name: "name",
    label: "Name"
  }), /* @__PURE__ */ import_react7.default.createElement("input", {
    name: "type",
    value: tabFileType,
    hidden: true
  }), /* @__PURE__ */ import_react7.default.createElement("input", {
    name: "ext",
    value: "json",
    hidden: true
  }), /* @__PURE__ */ import_react7.default.createElement("input", {
    name: "content",
    value: "",
    hidden: true
  }), /* @__PURE__ */ import_react7.default.createElement(import_core6.Group, {
    position: "right",
    mt: "lg"
  }, /* @__PURE__ */ import_react7.default.createElement(import_core6.Button, {
    name: "_action",
    value: "createTabItem",
    type: "submit"
  }, "Create View"))), tabFileType === "Jac" && /* @__PURE__ */ import_react7.default.createElement(import_remix12.Form, {
    method: "post"
  }, /* @__PURE__ */ import_react7.default.createElement(import_core6.TextInput, {
    name: "name",
    label: "Name"
  }), /* @__PURE__ */ import_react7.default.createElement("input", {
    name: "type",
    value: tabFileType,
    hidden: true
  }), /* @__PURE__ */ import_react7.default.createElement("input", {
    name: "ext",
    value: "jac",
    hidden: true
  }), /* @__PURE__ */ import_react7.default.createElement("input", {
    name: "content",
    value: "",
    hidden: true
  }), /* @__PURE__ */ import_react7.default.createElement(import_core6.Group, {
    position: "right",
    mt: "lg"
  }, /* @__PURE__ */ import_react7.default.createElement(import_core6.Button, {
    name: "_action",
    value: "createTabItem",
    type: "submit"
  }, "Create Jac File"))));
};
var ViewsSidebar_default = ViewsSidebar;

// app/components/playground/AddComponentModal.tsx
init_react();
var import_core7 = require("@mantine/core");
var import_prism = require("@mantine/prism");
var import_react8 = __toESM(require("react"));

// app/data/jsc-comps.ts
init_react();
var jaseciComps = {
  Container: {
    props: [{ type: "input", name: "name", label: "Name" }]
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
          { value: "evenly", label: "Evenly" }
        ],
        label: "Justify",
        name: "justify"
      },
      {
        type: "select",
        data: [
          { value: "start", label: "Start" },
          { value: "end", label: "End" },
          { value: "center", label: "Center" }
        ],
        label: "Items",
        name: "items"
      }
    ]
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
          { value: "evenly", label: "Evenly" }
        ],
        label: "Justify",
        name: "justify"
      },
      {
        type: "select",
        data: [
          { value: "start", label: "Start" },
          { value: "end", label: "End" },
          { value: "center", label: "Center" }
        ],
        label: "Items",
        name: "items"
      }
    ]
  },
  Navbar: {
    props: [
      { type: "input", name: "name", label: "Name" },
      { type: "input", name: "label", label: "Label" }
    ]
  },
  NavLink: {
    props: [
      { type: "input", name: "name", label: "Name" },
      { type: "input", name: "label", label: "Label" },
      { type: "input", name: "href", label: "Link" },
      { type: "input", name: "target", label: "Target" }
    ]
  },
  Button: {
    props: [
      { type: "input", name: "name", label: "Name" },
      { type: "input", name: "label", label: "Label" }
    ]
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
          { value: "false", label: "False" }
        ],
        name: "fullwidth",
        label: "Fullwidth"
      }
    ]
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
          { value: "false", label: "False" }
        ],
        name: "fullwidth",
        label: "Fullwidth"
      }
    ]
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
          { label: "Simple", value: "simple" },
          { label: "Title", value: "title" }
        ]
      }
    ]
  }
};

// app/data/jsc-events.ts
init_react();
var actions = [
  {
    value: "alert",
    label: "Alert",
    args: [{ type: "input", label: "Message", name: "message" }]
  },
  { value: "update", label: "Update" },
  { value: "add", label: "Add" },
  { value: "append", label: "Append" }
];
var basicEventFields = [
  {
    type: "select",
    name: "fn",
    label: "Action",
    data: [...actions],
    createable: true
  }
];
var jaseciEvents = {
  onEnterKeyPress: {
    fields: [...basicEventFields]
  },
  onKeyPress: {
    fields: [{ type: "input", name: "key", label: "Key" }, ...basicEventFields]
  },
  onClick: {
    fields: [...basicEventFields]
  }
};

// app/components/playground/AddComponentModal.tsx
function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
var AddComponentModal = ({ opened, setOpened, onInsertComponent }) => {
  var _a, _b, _c, _d, _e, _f;
  const [component, setComponent] = (0, import_react8.useState)({ component: "", props: {}, events: {} });
  const [css, setCSS] = (0, import_react8.useState)("");
  const [newEvent, setNewEvent] = (0, import_react8.useState)({
    name: "",
    data: {},
    args: []
  });
  const setComponentType = (componentType) => {
    setComponent((currentComp) => ({
      component: componentType,
      events: {},
      props: {}
    }));
  };
  const setComponentCSS = (css2) => {
    setComponent((currentComp) => __spreadProps(__spreadValues({}, currentComp), {
      css: JSON.parse(css2)
    }));
  };
  const setProperty = (name, value) => {
    setComponent((currentComp) => __spreadProps(__spreadValues({}, currentComp), {
      props: __spreadProps(__spreadValues({}, currentComp == null ? void 0 : currentComp.props), {
        [name]: value
      })
    }));
  };
  const onAddEvent = (0, import_react8.useCallback)(() => {
    if (newEvent.name) {
      setComponent((currentComponentValue) => {
        var _a2, _b2;
        let events = (currentComponentValue == null ? void 0 : currentComponentValue.events) ? __spreadValues({}, currentComponentValue.events) : {};
        events = __spreadProps(__spreadValues({}, events), {
          [newEvent.name]: [
            Array.isArray((_a2 = currentComponentValue == null ? void 0 : currentComponentValue.events) == null ? void 0 : _a2[newEvent.name]) && [
              ...(_b2 = currentComponentValue == null ? void 0 : currentComponentValue.events) == null ? void 0 : _b2[newEvent.name]
            ],
            __spreadValues({}, newEvent.data)
          ].flat().filter((item) => Object.keys(item).length > 0)
        });
        const updatedComp = __spreadProps(__spreadValues({}, currentComponentValue), {
          events
        });
        return updatedComp;
      });
      setNewEvent({ name: "", data: {}, args: [] });
    }
  }, [newEvent]);
  const setNewEventArgs = (index, value) => {
    setNewEvent((currentNewEventValue) => {
      const args = [...currentNewEventValue == null ? void 0 : currentNewEventValue.args];
      args[index] = value;
      return __spreadProps(__spreadValues({}, currentNewEventValue), {
        data: __spreadProps(__spreadValues({}, currentNewEventValue.data), { args }),
        args
      });
    });
  };
  return /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement(import_core7.Modal, {
    opened,
    title: "Add Component",
    withCloseButton: true,
    transition: "rotate-left",
    onClose: () => setOpened(false),
    size: "lg",
    radius: "md"
  }, /* @__PURE__ */ import_react8.default.createElement(import_core7.InputWrapper, {
    label: "Choose Component Type"
  }, /* @__PURE__ */ import_react8.default.createElement(import_core7.Group, null, Object.keys(jaseciComps).map((componentType) => /* @__PURE__ */ import_react8.default.createElement(import_core7.Button, {
    variant: "outline",
    onClick: () => setComponentType(componentType),
    key: componentType
  }, componentType)))), /* @__PURE__ */ import_react8.default.createElement(import_core7.Space, {
    h: "md"
  }), /* @__PURE__ */ import_react8.default.createElement(import_core7.Text, null, "Preview:"), /* @__PURE__ */ import_react8.default.createElement(import_prism.Prism, {
    language: "json",
    sx: { maxHeight: "200px", overflow: "auto" }
  }, JSON.stringify(component, null, 2)), (component == null ? void 0 : component.component) && /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement(import_core7.Title, {
    order: 3
  }, "Properties"), (_a = jaseciComps[component == null ? void 0 : component.component].props) == null ? void 0 : _a.map((prop, index) => /* @__PURE__ */ import_react8.default.createElement("div", {
    key: prop.name
  }, prop.type === "input" && /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, /* @__PURE__ */ import_react8.default.createElement(import_core7.TextInput, {
    key: index,
    name: prop.name,
    label: prop.label,
    onChange: (e) => setProperty(prop.name, e.target.value)
  })), prop.type === "select" && /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, /* @__PURE__ */ import_react8.default.createElement(import_core7.Select, {
    name: prop.name,
    label: prop.label,
    data: prop.data,
    searchable: true,
    onChange: (value) => setProperty(prop.name, value)
  })))), /* @__PURE__ */ import_react8.default.createElement(import_core7.Space, {
    h: "lg"
  }), /* @__PURE__ */ import_react8.default.createElement(import_core7.Title, {
    order: 3
  }, "Events"), /* @__PURE__ */ import_react8.default.createElement(import_core7.Select, {
    label: "Choose a Trigger",
    placeholder: "Pick one",
    onChange: (value) => {
      setNewEvent((newEventBody) => __spreadProps(__spreadValues({}, newEventBody), {
        name: value
      }));
    },
    data: [
      ...Object.keys(jaseciEvents).map((eventName) => ({
        value: eventName,
        label: eventName
      }))
    ]
  }), (_c = (_b = jaseciEvents[newEvent.name]) == null ? void 0 : _b.fields) == null ? void 0 : _c.map((field) => /* @__PURE__ */ import_react8.default.createElement("div", {
    key: field.name
  }, field.type === "input" && /* @__PURE__ */ import_react8.default.createElement(import_core7.TextInput, {
    name: field.name,
    label: field.label,
    onChange: (e) => {
      var _a2;
      alert((_a2 = e == null ? void 0 : e.target) == null ? void 0 : _a2.value);
      setNewEvent((currentNewEventValue) => {
        var _a3, _b2;
        return __spreadProps(__spreadValues({}, currentNewEventValue), {
          data: __spreadProps(__spreadValues({}, currentNewEventValue == null ? void 0 : currentNewEventValue.data), {
            [(_a3 = e.target) == null ? void 0 : _a3.name]: (_b2 = e.target) == null ? void 0 : _b2.value
          })
        });
      });
    }
  }), field.type === "select" && /* @__PURE__ */ import_react8.default.createElement(import_core7.Select, {
    name: field.name,
    label: field.label,
    data: field.data,
    searchable: true,
    onChange: (value) => {
      setNewEvent((currentNewEventValue) => __spreadProps(__spreadValues({}, currentNewEventValue), {
        data: __spreadProps(__spreadValues({}, currentNewEventValue == null ? void 0 : currentNewEventValue.data), {
          [field.name]: value
        })
      }));
    }
  }))), ((_d = newEvent == null ? void 0 : newEvent.data) == null ? void 0 : _d["fn"]) && /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, actions && ((_f = (_e = actions.filter((action13) => {
    var _a2;
    return action13.value === ((_a2 = newEvent == null ? void 0 : newEvent.data) == null ? void 0 : _a2["fn"]);
  }).pop()) == null ? void 0 : _e.args) == null ? void 0 : _f.map((arg, index) => /* @__PURE__ */ import_react8.default.createElement("div", {
    key: arg.name
  }, /* @__PURE__ */ import_react8.default.createElement(import_core7.TextInput, {
    label: arg.label,
    onChange: (e) => {
      var _a2;
      return setNewEventArgs(index, (_a2 = e.target) == null ? void 0 : _a2.value);
    },
    name: arg.name
  }))))), /* @__PURE__ */ import_react8.default.createElement(import_core7.Space, {
    h: "md"
  }), /* @__PURE__ */ import_react8.default.createElement(import_core7.Button, {
    variant: "outline",
    onClick: onAddEvent
  }, "Add Event"), /* @__PURE__ */ import_react8.default.createElement(import_core7.Space, {
    h: "md"
  }), /* @__PURE__ */ import_react8.default.createElement(import_core7.Title, {
    order: 3
  }, "Styles"), /* @__PURE__ */ import_react8.default.createElement(import_core7.JsonInput, {
    label: "Styles (JSON)",
    placeholder: "Enter styles object",
    formatOnBlur: true,
    minRows: 4,
    value: css,
    onChange: (value) => {
      setCSS(value);
      if (isJsonString(value)) {
        setComponentCSS(value);
      }
    }
  })), /* @__PURE__ */ import_react8.default.createElement(import_core7.Space, {
    h: "lg"
  }), /* @__PURE__ */ import_react8.default.createElement(import_core7.Button, {
    onClick: () => onInsertComponent(component)
  }, "Insert")));
};
var AddComponentModal_default = AddComponentModal;

// app/components/playground/ExamplesModal.tsx
init_react();
var import_core8 = require("@mantine/core");
var import_react9 = __toESM(require("react"));

// app/data/examples/chatbox.json
var components = [
  {
    component: "Container",
    props: {
      name: "mainContainer"
    },
    sections: {
      children: [
        {
          name: "headerContainer",
          component: "Container",
          css: {
            height: "60px",
            background: "#11181C",
            padding: "0 20px"
          },
          sections: {
            children: [
              {
                component: "Text",
                props: {
                  value: "Chatbot Example"
                },
                css: {
                  color: "#F1F3F5",
                  fontWeight: "bold",
                  fontSize: "1.05rem"
                }
              }
            ]
          }
        },
        {
          component: "Container",
          name: "msgs",
          css: {
            background: "#F8F9FA",
            height: "250px",
            padding: "20px"
          },
          operations: {
            sendMessage: {
              args: [
                "message"
              ],
              run: [
                {
                  fn: "callEndpoint",
                  endpoint: "http://localhost:3334/message",
                  args: [
                    "POST",
                    {
                      message: "arg(message)"
                    }
                  ]
                },
                {
                  cond: [
                    "var(messageInputbox.value)::#gt::1"
                  ],
                  fn: "append",
                  args: [
                    "msgs",
                    {
                      component: "Container",
                      sections: {
                        children: [
                          {
                            component: "Container",
                            css: {
                              background: "#11181C",
                              color: "#F1F3F5",
                              padding: "0px 8px",
                              borderRadius: "5px",
                              fontSize: "0.8rem",
                              display: "inline-block"
                            },
                            sections: {
                              children: [
                                {
                                  component: "Text",
                                  props: {
                                    value: "arg(message)"
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  fn: "update",
                  args: [
                    "messageInputbox.value",
                    ""
                  ]
                }
              ]
            },
            sendResponse: {
              args: [
                "response"
              ],
              run: [
                {
                  fn: "append",
                  args: [
                    "msgs",
                    {
                      component: "Row",
                      props: {
                        justify: "end"
                      },
                      sections: {
                        children: [
                          {
                            component: "Container",
                            css: {
                              background: "#0081F1",
                              color: "#F1F3F5",
                              padding: "0px 8px",
                              borderRadius: "5px",
                              fontSize: "0.8rem",
                              display: "inline-block"
                            },
                            sections: {
                              children: [
                                {
                                  component: "Text",
                                  props: {
                                    value: "You sent: arg(response). There's no valid response as yet for this query."
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          }
        },
        {
          component: "Row",
          name: "footerContainer",
          css: {
            height: "60px",
            background: "#11181C",
            padding: "0 20px",
            gap: "10px"
          },
          props: {
            items: "center"
          },
          sections: {
            children: [
              {
                component: "Inputbox",
                name: "messageInputbox",
                props: {
                  placeholder: "Enter your message...",
                  fullwidth: "true"
                },
                css: {
                  background: "#F8F9FA",
                  color: "#687076"
                },
                events: {
                  onEnterKeyPress: [
                    {
                      fn: "runOperation",
                      operation: "msgs.sendMessage",
                      args: [
                        "var(messageInputbox.value)"
                      ]
                    }
                  ]
                }
              },
              {
                component: "Button",
                props: {
                  label: "Send"
                },
                events: {
                  onClick: [
                    {
                      fn: "runOperation",
                      operation: "msgs.sendMessage",
                      args: [
                        "var(messageInputbox.value)"
                      ]
                    }
                  ]
                }
              }
            ]
          }
        }
      ]
    }
  }
];
var chatbox_default = {
  components
};

// app/data/examples/counter.json
var components2 = [
  {
    component: "Container",
    sections: {
      children: [
        {
          component: "Text",
          props: {
            value: "Counter"
          },
          css: {
            fontWeight: "bold",
            fontSize: "1.2em",
            textDecoration: "underline"
          }
        },
        {
          component: "Row",
          sections: {
            children: [
              {
                component: "Text",
                props: {
                  value: "Current value: "
                },
                css: {
                  marginRight: "5px"
                }
              },
              {
                name: "counterText",
                component: "Text",
                props: {
                  value: "0"
                }
              }
            ]
          }
        },
        {
          name: "counterButton",
          component: "Button",
          props: {
            label: "Count"
          },
          events: {
            onClick: [
              {
                fn: "add",
                args: [
                  "var(counterText.value)",
                  1
                ],
                cond: [
                  "var(counterText.value)::#neq::10"
                ],
                onCompleted: {
                  fn: "update",
                  args: [
                    "counterText.value",
                    "var(result)"
                  ]
                }
              }
            ]
          }
        }
      ]
    }
  }
];
var counter_default = {
  components: components2
};

// app/data/examples/operations-basic.json
var operations_basic_default = [
  {
    component: "Container",
    name: "container1",
    operations: {
      sayHi: {
        args: [
          "message"
        ],
        run: [
          {
            fn: "alert",
            args: [
              "arg(message) cool!"
            ]
          }
        ]
      }
    }
  },
  {
    component: "Button",
    events: {
      onClick: [
        {
          fn: "runOperation",
          operation: "container1.sayHi",
          args: [
            "Hello world!"
          ]
        }
      ]
    },
    props: {
      name: "btn1",
      label: "Say Hello"
    }
  }
];

// app/components/playground/ExamplesModal.tsx
var ExamplesModal = ({ opened, setOpened, onRunExample }) => {
  return /* @__PURE__ */ import_react9.default.createElement("div", null, /* @__PURE__ */ import_react9.default.createElement(import_core8.Modal, {
    opened,
    title: "View Examples",
    withCloseButton: true,
    transition: "rotate-left",
    onClose: () => setOpened(false),
    size: "lg",
    radius: "md"
  }, /* @__PURE__ */ import_react9.default.createElement(import_core8.Divider, null), /* @__PURE__ */ import_react9.default.createElement(import_core8.Space, {
    h: "md"
  }), /* @__PURE__ */ import_react9.default.createElement(import_core8.Group, null, /* @__PURE__ */ import_react9.default.createElement(import_core8.Title, {
    order: 5
  }, "Chatbox Example"), /* @__PURE__ */ import_react9.default.createElement(import_core8.Button, {
    size: "xs",
    onClick: () => onRunExample(chatbox_default)
  }, "Play Example")), /* @__PURE__ */ import_react9.default.createElement(import_core8.Space, {
    h: "md"
  }), /* @__PURE__ */ import_react9.default.createElement(import_core8.Divider, null), /* @__PURE__ */ import_react9.default.createElement(import_core8.Space, {
    h: "xl"
  }), /* @__PURE__ */ import_react9.default.createElement(import_core8.Divider, null), /* @__PURE__ */ import_react9.default.createElement(import_core8.Space, {
    h: "md"
  }), /* @__PURE__ */ import_react9.default.createElement(import_core8.Group, null, /* @__PURE__ */ import_react9.default.createElement(import_core8.Title, {
    order: 5
  }, "Counter Example"), /* @__PURE__ */ import_react9.default.createElement(import_core8.Button, {
    size: "xs",
    onClick: () => onRunExample(counter_default)
  }, "Play Example")), /* @__PURE__ */ import_react9.default.createElement(import_core8.Space, {
    h: "md"
  }), /* @__PURE__ */ import_react9.default.createElement(import_core8.Divider, null), /* @__PURE__ */ import_react9.default.createElement(import_core8.Space, {
    h: "xl"
  }), /* @__PURE__ */ import_react9.default.createElement(import_core8.Divider, null), /* @__PURE__ */ import_react9.default.createElement(import_core8.Space, {
    h: "md"
  }), /* @__PURE__ */ import_react9.default.createElement(import_core8.Group, null, /* @__PURE__ */ import_react9.default.createElement(import_core8.Title, {
    order: 5
  }, "Operations Example"), /* @__PURE__ */ import_react9.default.createElement(import_core8.Button, {
    size: "xs",
    onClick: () => onRunExample(operations_basic_default)
  }, "Play Example")), /* @__PURE__ */ import_react9.default.createElement(import_core8.Space, {
    h: "md"
  }), /* @__PURE__ */ import_react9.default.createElement(import_core8.Divider, null)));
};
var ExamplesModal_default = ExamplesModal;

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/__loadWebkit/studio/$projectId/editor.tab.$tabId.tsx
var import_tiny_invariant2 = __toESM(require("tiny-invariant"));

// app/models/tabFile.server.ts
init_react();
var createTabFile = async ({
  name,
  type,
  userId,
  projectId,
  ext
}) => {
  const project = await prisma.project.findFirst({
    where: {
      id: projectId,
      userId
    }
  });
  if (!project)
    throw new Error("Cannot find project.");
  return prisma.tabFile.create({
    data: {
      name,
      type,
      ext,
      projectId
    }
  });
};
var getProjectTabFiles = ({
  projectId,
  userId
}) => {
  return prisma.tabFile.findMany({
    where: { project: { id: projectId, userId } },
    orderBy: { name: "asc" }
  });
};
var updateTabFile = async ({
  tabFileId,
  userId,
  input
}) => {
  return prisma.tabFile.updateMany({
    where: {
      id: tabFileId,
      project: { userId }
    },
    data: __spreadValues({}, input)
  });
};
var getProjectOpenedTabs = ({
  projectId,
  userId
}) => {
  return prisma.tabFile.findMany({
    where: {
      project: { id: projectId, userId },
      opened_at: { not: null }
    },
    orderBy: { opened_at: "asc" }
  });
};
var getTabFile = ({ tabFileId, userId }) => {
  return prisma.tabFile.findFirst({
    where: {
      id: tabFileId,
      project: { userId }
    }
  });
};

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/__loadWebkit/studio/$projectId/editor.tab.$tabId.tsx
var import_tabler_icons_react4 = require("tabler-icons-react");
var import_hooks2 = require("@mantine/hooks");

// app/utils/jac.ts
init_react();
var conf = {
  comments: {
    lineComment: "#",
    blockComment: ["'''", "'''"]
  },
  brackets: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"]
  ],
  autoClosingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"', notIn: ["string"] },
    { open: "'", close: "'", notIn: ["string", "comment"] }
  ],
  surroundingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' },
    { open: "'", close: "'" }
  ],
  folding: {
    offSide: true,
    markers: {
      start: new RegExp("^\\s*#region\\b"),
      end: new RegExp("^\\s*#endregion\\b")
    }
  }
};
var jacLang = {
  defaultToken: "",
  tokenPostfix: ".jac",
  keywords: [
    "False",
    "None",
    "True",
    "and",
    "as",
    "assert",
    "async",
    "await",
    "break",
    "class",
    "continue",
    "walker",
    "node",
    "del",
    "elif",
    "else",
    "except",
    "exec",
    "finally",
    "for",
    "from",
    "global",
    "if",
    "import",
    "in",
    "is",
    "lambda",
    "nonlocal",
    "not",
    "or",
    "pass",
    "print",
    "raise",
    "return",
    "has",
    "spawn",
    "take",
    "try",
    "while",
    "with",
    "yield",
    "disengage",
    "int",
    "float",
    "long",
    "complex",
    "hex",
    "abs",
    "all",
    "any",
    "apply",
    "basestring",
    "bin",
    "bool",
    "buffer",
    "bytearray",
    "callable",
    "chr",
    "classmethod",
    "cmp",
    "coerce",
    "compile",
    "complex",
    "delattr",
    "dict",
    "dir",
    "divmod",
    "enumerate",
    "eval",
    "execfile",
    "file",
    "filter",
    "format",
    "frozenset",
    "getattr",
    "globals",
    "hasattr",
    "hash",
    "help",
    "id",
    "input",
    "intern",
    "isinstance",
    "issubclass",
    "iter",
    "len",
    "locals",
    "list",
    "map",
    "max",
    "memoryview",
    "min",
    "next",
    "object",
    "oct",
    "open",
    "ord",
    "pow",
    "print",
    "property",
    "reversed",
    "range",
    "raw_input",
    "reduce",
    "reload",
    "repr",
    "reversed",
    "round",
    "self",
    "set",
    "setattr",
    "slice",
    "sorted",
    "staticmethod",
    "str",
    "sum",
    "super",
    "tuple",
    "type",
    "unichr",
    "unicode",
    "vars",
    "xrange",
    "zip",
    "__dict__",
    "__methods__",
    "__members__",
    "__class__",
    "__bases__",
    "__name__",
    "__mro__",
    "__subclasses__",
    "__init__",
    "__import__"
  ],
  brackets: [
    { open: "{", close: "}", token: "delimiter.curly" },
    { open: "[", close: "]", token: "delimiter.bracket" },
    { open: "(", close: ")", token: "delimiter.parenthesis" }
  ],
  operators: [
    "=",
    "??",
    "||",
    "&&",
    "|",
    "^",
    "&",
    "==",
    "!=",
    "<=",
    ">=",
    "<<",
    "+",
    "-",
    "*",
    "/",
    "%",
    "!",
    "~",
    "++",
    "--",
    "+=",
    "-=",
    "*=",
    "/=",
    "%=",
    "&=",
    "|=",
    "^=",
    "<<=",
    ">>=",
    ">>",
    "=>",
    "-->",
    "<--"
  ],
  symbols: /[=><!~?:&|+\-*\/\^%]+/,
  tokenizer: {
    root: [
      { include: "@whitespace" },
      { include: "@numbers" },
      { include: "@strings" },
      [/[,:;]/, "delimiter"],
      [/[{}\[\]()]/, "@brackets"],
      [/@[a-zA-Z_]\w*/, "tag"],
      [
        /[a-zA-Z_]\w*/,
        {
          cases: {
            "@keywords": "keyword",
            "@default": "identifier"
          }
        }
      ]
    ],
    whitespace: [
      [/\s+/, "white"],
      [/(^#.*$)/, "comment"],
      [/'''/, "string", "@endDocString"],
      [/"""/, "string", "@endDblDocString"]
    ],
    endDocString: [
      [/[^']+/, "string"],
      [/\\'/, "string"],
      [/'''/, "string", "@popall"],
      [/'/, "string"]
    ],
    endDblDocString: [
      [/[^"]+/, "string"],
      [/\\"/, "string"],
      [/"""/, "string", "@popall"],
      [/"/, "string"]
    ],
    numbers: [
      [/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/, "number.hex"],
      [/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, "number"]
    ],
    strings: [
      [/'$/, "string.escape", "@popall"],
      [/'/, "string.escape", "@stringBody"],
      [/"$/, "string.escape", "@popall"],
      [/"/, "string.escape", "@dblStringBody"]
    ],
    stringBody: [
      [/[^\\']+$/, "string", "@popall"],
      [/[^\\']+/, "string"],
      [/\\./, "string"],
      [/'/, "string.escape", "@popall"],
      [/\\$/, "string"]
    ],
    dblStringBody: [
      [/[^\\"]+$/, "string", "@popall"],
      [/[^\\"]+/, "string"],
      [/\\./, "string"],
      [/"/, "string.escape", "@popall"],
      [/\\$/, "string"]
    ]
  }
};

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/__loadWebkit/studio/$projectId/editor.tab.$tabId.tsx
var StudioEditor = () => {
  var _a, _b, _c;
  const submit = (0, import_remix15.useSubmit)();
  const loaderData = (0, import_remix15.useLoaderData)();
  const [showPreview, setShowPreview] = (0, import_react12.useState)(true);
  const [searchParams] = (0, import_remix15.useSearchParams)();
  const { tabId } = (0, import_remix15.useParams)();
  const showViews = searchParams.get("showViews") || "false";
  const [showPreviewText, setShowPreviewText] = (0, import_react12.useState)(true);
  const jscAppRef = (0, import_react12.useRef)();
  const [value, setValue] = (0, import_react12.useState)(((_a = loaderData == null ? void 0 : loaderData.currentTab) == null ? void 0 : _a.content) || "");
  const [showAddComponentModal, setShowAddComponentModal] = (0, import_react12.useState)(false);
  const [showExamplesModal, setShowExamplesModal] = (0, import_react12.useState)(false);
  const [debouncedValue] = (0, import_hooks2.useDebouncedValue)(value, 1500);
  const runButtonRef = (0, import_react12.useRef)(null);
  const monacoRef = (0, import_react12.useRef)(null);
  const editorRef = (0, import_react12.useRef)(null);
  const { toggle, ref: fullscreenFef } = (0, import_hooks2.useFullscreen)();
  const monaco = (0, import_react10.useMonaco)();
  function handleEditorWillMount(monaco2, editor) {
    monaco2.languages.typescript.javascriptDefaults.setEagerModelSync(true);
    monaco2.languages.json.jsonDefaults.setDiagnosticsOptions({
      allowComments: true,
      validate: true,
      schemas
    });
    monaco2.languages.register({ id: "jac" });
    monaco2.languages.setMonarchTokensProvider("jac", jacLang);
    monacoRef.current = monaco2;
  }
  function handleEditorDidMount(editor, monaco2) {
    editor.addAction({
      id: "run-code",
      label: "Run Code",
      precondition: null,
      keybindings: [
        monaco2.KeyMod.Shift | monaco2.KeyMod.Alt | monaco2.KeyCode.KeyR
      ],
      keybindingContext: null,
      run: function() {
        var _a2;
        (_a2 = runButtonRef == null ? void 0 : runButtonRef.current) == null ? void 0 : _a2.click();
      }
    });
    editorRef.current = editor;
  }
  const saveTabContent = (0, import_react12.useCallback)(() => {
    if (!tabId)
      return;
    const formData = new FormData();
    formData.set("content", value);
    formData.set("tabFileId", tabId);
    formData.set("_action", "saveTabContent");
    submit(formData, { replace: true, method: "post" });
  }, [submit, value]);
  const formatCode = () => {
    if (editorRef == null ? void 0 : editorRef.current) {
      editorRef == null ? void 0 : editorRef.current.getAction("editor.action.formatDocument").run();
    }
  };
  const runCode = (0, import_react12.useCallback)((value2) => {
    var _a2, _b2;
    if (value2 && (jscAppRef == null ? void 0 : jscAppRef.current)) {
      const components3 = (0, import_comment_json2.parse)(value2, void 0, true).components;
      const config = (0, import_comment_json2.parse)(value2, void 0, true).config;
      (_a2 = jscAppRef == null ? void 0 : jscAppRef.current) == null ? void 0 : _a2.setGlobalConfig(config);
      (_b2 = jscAppRef == null ? void 0 : jscAppRef.current) == null ? void 0 : _b2.setMarkup(JSON.stringify(components3));
      setShowPreviewText(false);
    }
  }, [jscAppRef]);
  const onRunExample = (exampleJSON) => {
    setValue(JSON.stringify(exampleJSON));
    formatCode();
    runCode(value);
  };
  const onInsertComponent = (component) => {
    setValue((value2) => value2.slice(0, value2.length - 1));
    if (value[0] !== "[") {
      setValue((value2) => "[" + value2);
    }
    if (value.includes("}")) {
      setValue((value2) => value2 + ",");
    }
    editorRef.current.trigger("keyboard", "type", {
      text: JSON.stringify(component) + "\n"
    });
    formatCode();
    setShowAddComponentModal(false);
  };
  (0, import_react12.useEffect)(() => {
    const saveTabContentTimeout = setTimeout(() => saveTabContent(), 3e3);
    return () => {
      clearTimeout(saveTabContentTimeout);
    };
  }, [saveTabContent, value]);
  (0, import_react12.useEffect)(() => {
    var _a2;
    setValue(((_a2 = loaderData == null ? void 0 : loaderData.currentTab) == null ? void 0 : _a2.content) || "");
  }, [loaderData == null ? void 0 : loaderData.currentTab]);
  (0, import_react12.useEffect)(() => {
    try {
      if (jscAppRef == null ? void 0 : jscAppRef.current) {
        runCode(value);
      }
    } catch (err) {
      console.error(err);
      console.log("Unable to run your code. Please check to see if it is valid.");
    }
  }, [jscAppRef, editorRef, runCode, debouncedValue]);
  (0, import_react12.useEffect)(() => {
    var _a2;
    if (editorRef.current) {
      monacoRef.current.editor.setModelLanguage(editorRef.current.getModel(), ((_a2 = loaderData == null ? void 0 : loaderData.currentTab) == null ? void 0 : _a2.type) === "Jac" ? "jac" : "json");
    }
  }, [editorRef, (_b = loaderData == null ? void 0 : loaderData.currentTab) == null ? void 0 : _b.ext]);
  return /* @__PURE__ */ import_react12.default.createElement(import_react12.default.Fragment, null, /* @__PURE__ */ import_react12.default.createElement(import_core9.Grid, {
    sx: { maxWidth: "100vw", width: "100%", margin: 0, gap: 0 },
    gutter: 0
  }, /* @__PURE__ */ import_react12.default.createElement(import_core9.Grid.Col, {
    span: showPreview ? 8 : 12,
    sx: { background: "#1E1E1E", color: "#fff" }
  }, /* @__PURE__ */ import_react12.default.createElement(EditorHeader_default, {
    onClickRun: runCode,
    openTabs: loaderData.openedTabFiles,
    onClickFormat: formatCode,
    onTogglePreview: () => setShowPreview((prev) => !prev)
  }), /* @__PURE__ */ import_react12.default.createElement(import_core9.Grid, {
    gutter: 0
  }, /* @__PURE__ */ import_react12.default.createElement(import_core9.Grid.Col, {
    span: showViews !== "true" ? 2 : 0
  }, showViews !== "true" && /* @__PURE__ */ import_react12.default.createElement(ViewsSidebar_default, {
    tabFiles: loaderData.tabFiles
  })), /* @__PURE__ */ import_react12.default.createElement(import_core9.Grid.Col, {
    span: showViews !== "true" ? 10 : 12
  }, /* @__PURE__ */ import_react12.default.createElement(import_react11.default, {
    width: "100%",
    height: "calc(100vh - 40px)",
    wrapperProps: {
      paddingTop: "200px",
      resize: "horizontal",
      overflow: "auto"
    },
    defaultLanguage: ((_c = loaderData == null ? void 0 : loaderData.currentTab) == null ? void 0 : _c.type) === "Jac" ? "jac" : "json",
    theme: "vs-dark",
    options: {
      formatOnType: true,
      formatOnPaste: true,
      automaticLayout: true
    },
    defaultValue: "",
    value: typeof value === "string" ? value : JSON.stringify(value),
    onChange: (value2) => setValue(value2),
    beforeMount: handleEditorWillMount,
    onMount: handleEditorDidMount,
    loading: /* @__PURE__ */ import_react12.default.createElement(import_core9.LoadingOverlay, {
      transitionDuration: 500,
      loaderProps: { variant: "bars", color: "gray" },
      visible: true,
      overlayOpacity: 0.3
    })
  })))), /* @__PURE__ */ import_react12.default.createElement(import_core9.Grid.Col, {
    span: showPreview ? 4 : 0
  }, /* @__PURE__ */ import_react12.default.createElement(import_core9.Box, {
    sx: {
      minHeight: "100%",
      width: "100%",
      display: showPreview ? "block" : "none"
    }
  }, /* @__PURE__ */ import_react12.default.createElement(import_core9.Group, {
    position: "apart",
    sx: {
      height: "40px",
      width: "100%",
      background: "#202327",
      borderBottom: "1px solid #484f567d"
    }
  }, /* @__PURE__ */ import_react12.default.createElement(import_core9.Group, {
    px: "md"
  }), /* @__PURE__ */ import_react12.default.createElement(import_core9.Group, {
    px: "md"
  }, /* @__PURE__ */ import_react12.default.createElement(import_core9.ActionIcon, {
    color: "grape",
    variant: "filled"
  }, /* @__PURE__ */ import_react12.default.createElement(import_tabler_icons_react4.ExternalLink, {
    size: 16
  })), /* @__PURE__ */ import_react12.default.createElement(import_core9.ActionIcon, {
    onClick: toggle,
    color: "blue",
    variant: "filled"
  }, /* @__PURE__ */ import_react12.default.createElement(import_tabler_icons_react4.ArrowsMaximize, {
    size: 16
  })))), /* @__PURE__ */ import_react12.default.createElement("div", {
    ref: fullscreenFef,
    style: { background: "#fff" }
  }, /* @__PURE__ */ import_react12.default.createElement("jsc-app", {
    ref: jscAppRef
  })), showPreviewText && /* @__PURE__ */ import_react12.default.createElement(import_react12.default.Fragment, null, /* @__PURE__ */ import_react12.default.createElement(import_core9.Title, {
    sx: (theme) => ({
      textTransform: "uppercase",
      fontSize: "4.3rem",
      textAlign: "center",
      color: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    })
  }, "Preview"), /* @__PURE__ */ import_react12.default.createElement(import_core9.Text, {
    sx: { textAlign: "center" }
  }, "You haven't ran any code yet"))))), /* @__PURE__ */ import_react12.default.createElement(AddComponentModal_default, {
    opened: showAddComponentModal,
    setOpened: setShowAddComponentModal,
    onInsertComponent
  }), /* @__PURE__ */ import_react12.default.createElement(ExamplesModal_default, {
    opened: showExamplesModal,
    setOpened: setShowExamplesModal,
    onRunExample
  }));
};
var loader6 = async ({ request, params }) => {
  const url = new URL(request.url);
  const userId = await requireUserId(request);
  const { projectId, tabId } = params;
  (0, import_tiny_invariant2.default)(typeof projectId === "string");
  const tabFiles = await getProjectTabFiles({ projectId, userId });
  const openedTabFiles = await getProjectOpenedTabs({ projectId, userId });
  const currentTab = openedTabFiles.find((tab) => tab.id === tabId);
  return (0, import_remix14.json)({ tabFiles, openedTabFiles, currentTab });
};
var action = async ({ request, params }) => {
  const userId = await requireUserId(request);
  const { projectId } = params;
  (0, import_tiny_invariant2.default)(projectId, "projectId is required");
  const formData = await request.formData();
  const action13 = formData.get("_action");
  if (action13 === "createTabItem") {
    const name = formData.get("name");
    const content = formData.get("content");
    const type = formData.get("type");
    const ext = formData.get("ext");
    (0, import_tiny_invariant2.default)(typeof name === "string", "name is required");
    (0, import_tiny_invariant2.default)(typeof content === "string", "content is required");
    (0, import_tiny_invariant2.default)(typeof type === "string", "type is required");
    (0, import_tiny_invariant2.default)(typeof ext === "string", "ext is required");
    await createTabFile({
      name,
      projectId,
      type,
      userId,
      ext
    });
  }
  if (action13 === "openTabItem" || action13 === "closeTabItem") {
    const tabFileId = formData.get("tabFileId");
    (0, import_tiny_invariant2.default)(typeof tabFileId === "string", "tabFileId is required");
    const tabFile = await getTabFile({ tabFileId, userId });
    if ((tabFile == null ? void 0 : tabFile.opened_at) && action13 === "openTabItem") {
      return (0, import_remix13.redirect)(`/studio/${projectId}/editor/tab/${tabFileId}`);
    }
    await updateTabFile({
      tabFileId,
      userId,
      input: {
        opened_at: action13 === "openTabItem" ? new Date().toISOString() : null
      }
    });
  }
  if (action13 === "saveTabContent") {
    const content = formData.get("content");
    const { tabId } = params;
    (0, import_tiny_invariant2.default)(typeof tabId === "string", "tabFileId is required");
    (0, import_tiny_invariant2.default)(typeof content === "string", "content is required");
    if (content) {
      await updateTabFile({ tabFileId: tabId, userId, input: { content } });
    }
  }
  console.log("referrer", request.headers.get("referer"));
  return (0, import_remix14.json)({});
};
var editor_tab_tabId_default = StudioEditor;

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/__loadWebkit/studio/$projectId/graphs.tsx
var graphs_exports = {};
__export(graphs_exports, {
  default: () => graphs_default
});
init_react();
var import_core10 = require("@mantine/core");
var import_react13 = __toESM(require("react"));
var import_tabler_icons_react5 = require("tabler-icons-react");
var StudioOverviewPage = () => {
  return /* @__PURE__ */ import_react13.default.createElement(import_core10.Box, {
    my: "lg",
    mx: "lg",
    sx: { width: "100%" }
  }, /* @__PURE__ */ import_react13.default.createElement(import_core10.Group, {
    align: "center",
    position: "apart"
  }, /* @__PURE__ */ import_react13.default.createElement(import_core10.Title, null, "Graphs"), /* @__PURE__ */ import_react13.default.createElement(import_core10.Button, {
    leftIcon: /* @__PURE__ */ import_react13.default.createElement(import_tabler_icons_react5.VectorTriangle, null),
    color: "teal"
  }, "Add Graph")));
};
var graphs_default = StudioOverviewPage;

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/__loadWebkit/studio/$projectId/index.tsx
var projectId_exports = {};
__export(projectId_exports, {
  default: () => projectId_default
});
init_react();
var import_core11 = require("@mantine/core");
var import_react14 = __toESM(require("react"));
var import_tabler_icons_react6 = require("tabler-icons-react");
var StudioOverviewPage2 = () => {
  return /* @__PURE__ */ import_react14.default.createElement(import_core11.Box, {
    my: "lg",
    mx: "lg",
    sx: { width: "100%" }
  }, /* @__PURE__ */ import_react14.default.createElement(import_core11.Group, {
    align: "center",
    position: "apart"
  }, /* @__PURE__ */ import_react14.default.createElement(import_core11.Title, null, "Overview"), /* @__PURE__ */ import_react14.default.createElement(import_core11.Button, {
    leftIcon: /* @__PURE__ */ import_react14.default.createElement(import_tabler_icons_react6.Settings, null),
    color: "teal"
  }, "Settings")));
};
var projectId_default = StudioOverviewPage2;

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/__dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => dashboard_default,
  loader: () => loader7
});
init_react();
var import_core13 = require("@mantine/core");
var import_react16 = __toESM(require("react"));
var import_remix17 = __toESM(require_remix());

// app/components/Header.tsx
init_react();
var import_core12 = require("@mantine/core");
var import_hooks3 = require("@mantine/hooks");
var import_react15 = __toESM(require("react"));
var import_remix16 = __toESM(require_remix());
var import_tabler_icons_react7 = require("tabler-icons-react");
var useStyles2 = (0, import_core12.createStyles)((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    backgroundColor: theme.colors[theme.primaryColor][6],
    borderBottom: `1px solid ${theme.colors[theme.primaryColor][6]}`,
    marginBottom: 40
  },
  mainSection: {
    paddingBottom: theme.spacing.sm
  },
  userMenu: {
    [theme.fn.smallerThan("xs")]: {
      display: "none"
    }
  },
  user: {
    color: theme.white,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: "background-color 100ms ease",
    "&:hover": {
      backgroundColor: theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 7 : 5]
    }
  },
  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none"
    }
  },
  userActive: {
    backgroundColor: theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 7 : 5]
  },
  tabs: {
    [theme.fn.smallerThan("sm")]: {
      display: "none"
    }
  },
  tabsList: {
    borderBottom: "0 !important"
  },
  tabControl: {
    fontWeight: 500,
    height: 38,
    color: `${theme.white} !important`,
    "&:hover": {
      backgroundColor: theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 7 : 5]
    }
  },
  tabControlActive: {
    color: `${theme.colorScheme === "dark" ? theme.white : theme.black} !important`,
    borderColor: `${theme.colors[theme.primaryColor][6]} !important`
  }
}));
function Header({ user, tabs }) {
  const { classes, theme, cx } = useStyles2();
  const [activeTab, setActiveTab] = (0, import_react15.useState)();
  const [opened, toggleOpened] = (0, import_hooks3.useBooleanToggle)(false);
  const [userMenuOpened, setUserMenuOpened] = (0, import_react15.useState)(false);
  const navigate = (0, import_remix16.useNavigate)();
  const renderTabs = tabs.map((tab) => /* @__PURE__ */ import_react15.default.createElement(import_core12.Tabs.Tab, {
    key: tab.label,
    tabKey: tab.to,
    label: tab.label
  }));
  return /* @__PURE__ */ import_react15.default.createElement("div", {
    className: classes.header
  }, /* @__PURE__ */ import_react15.default.createElement(import_core12.Container, {
    className: classes.mainSection
  }, /* @__PURE__ */ import_react15.default.createElement(import_core12.Group, {
    position: "apart"
  }, /* @__PURE__ */ import_react15.default.createElement(import_remix16.Link, {
    to: "/",
    style: { all: "unset", cursor: "pointer" }
  }, /* @__PURE__ */ import_react15.default.createElement(import_core12.Title, {
    order: 3,
    sx: { color: "#fff" }
  }, "Jaseci Studio")), /* @__PURE__ */ import_react15.default.createElement(import_core12.Burger, {
    opened,
    onClick: () => toggleOpened(),
    className: classes.burger,
    size: "sm",
    color: theme.white
  }), /* @__PURE__ */ import_react15.default.createElement(import_core12.Menu, {
    size: 260,
    placement: "end",
    transition: "pop-top-right",
    className: classes.userMenu,
    onClose: () => setUserMenuOpened(false),
    onOpen: () => setUserMenuOpened(true),
    control: /* @__PURE__ */ import_react15.default.createElement(import_core12.UnstyledButton, {
      className: cx(classes.user, {
        [classes.userActive]: userMenuOpened
      })
    }, /* @__PURE__ */ import_react15.default.createElement(import_core12.Group, {
      spacing: 7
    }, /* @__PURE__ */ import_react15.default.createElement(import_core12.Avatar, {
      src: user.image,
      alt: user.name,
      radius: "xl",
      size: 20
    }), /* @__PURE__ */ import_react15.default.createElement(import_core12.Text, {
      weight: 500,
      size: "sm",
      sx: { lineHeight: 1, color: theme.white },
      mr: 3
    }, user.name), /* @__PURE__ */ import_react15.default.createElement(import_tabler_icons_react7.ChevronDown, {
      size: 12
    })))
  }, /* @__PURE__ */ import_react15.default.createElement(import_core12.Menu.Item, {
    icon: /* @__PURE__ */ import_react15.default.createElement(import_tabler_icons_react7.Heart, {
      size: 14,
      color: theme.colors.red[6]
    })
  }, "Liked posts"), /* @__PURE__ */ import_react15.default.createElement(import_core12.Menu.Item, {
    icon: /* @__PURE__ */ import_react15.default.createElement(import_tabler_icons_react7.Star, {
      size: 14,
      color: theme.colors.yellow[6]
    })
  }, "Saved posts"), /* @__PURE__ */ import_react15.default.createElement(import_core12.Menu.Item, {
    icon: /* @__PURE__ */ import_react15.default.createElement(import_tabler_icons_react7.Message, {
      size: 14,
      color: theme.colors.blue[6]
    })
  }, "Your comments"), /* @__PURE__ */ import_react15.default.createElement(import_core12.Menu.Label, null, "Settings"), /* @__PURE__ */ import_react15.default.createElement(import_core12.Menu.Item, {
    icon: /* @__PURE__ */ import_react15.default.createElement(import_tabler_icons_react7.Settings, {
      size: 14
    })
  }, "Account settings"), /* @__PURE__ */ import_react15.default.createElement(import_core12.Menu.Item, {
    icon: /* @__PURE__ */ import_react15.default.createElement(import_tabler_icons_react7.SwitchHorizontal, {
      size: 14
    })
  }, "Change account"), /* @__PURE__ */ import_react15.default.createElement(import_core12.Menu.Item, {
    icon: /* @__PURE__ */ import_react15.default.createElement(import_tabler_icons_react7.Logout, {
      size: 14
    })
  }, "Logout"), /* @__PURE__ */ import_react15.default.createElement(import_core12.Divider, null), /* @__PURE__ */ import_react15.default.createElement(import_core12.Menu.Label, null, "Danger zone"), /* @__PURE__ */ import_react15.default.createElement(import_core12.Menu.Item, {
    icon: /* @__PURE__ */ import_react15.default.createElement(import_tabler_icons_react7.PlayerPause, {
      size: 14
    })
  }, "Pause subscription"), /* @__PURE__ */ import_react15.default.createElement(import_remix16.Form, {
    action: "/logout",
    method: "post"
  }, /* @__PURE__ */ import_react15.default.createElement(import_core12.Menu.Item, {
    color: "red",
    component: "button",
    type: "submit",
    icon: /* @__PURE__ */ import_react15.default.createElement(import_tabler_icons_react7.Trash, {
      size: 14
    })
  }, "Logout"))))), /* @__PURE__ */ import_react15.default.createElement(import_core12.Container, null, /* @__PURE__ */ import_react15.default.createElement(import_core12.Tabs, {
    variant: "outline",
    classNames: {
      root: classes.tabs,
      tabsListWrapper: classes.tabsList,
      tabControl: classes.tabControl,
      tabActive: classes.tabControlActive
    },
    active: activeTab,
    onTabChange: (activeTab2, tabKey) => {
      setActiveTab(activeTab2);
      navigate(tabKey || "#");
    }
  }, renderTabs)));
}

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/__dashboard.tsx
var loader7 = async ({ request }) => {
  const user = await requireUser(request);
  return (0, import_remix17.json)({ user });
};
var DashboardLayout = () => {
  const { user } = (0, import_remix17.useLoaderData)();
  return /* @__PURE__ */ import_react16.default.createElement(import_react16.default.Fragment, null, /* @__PURE__ */ import_react16.default.createElement(Header, {
    tabs: [
      { label: "Projects", to: "/projects" },
      { label: "Playground", to: "/playground" },
      { label: "Graphs", to: "/graphs" }
    ],
    user: { name: user.email, image: "" }
  }), /* @__PURE__ */ import_react16.default.createElement(import_core13.Paper, {
    px: 200
  }, /* @__PURE__ */ import_react16.default.createElement(import_remix17.Outlet, {
    context: { user }
  })));
};
var dashboard_default = DashboardLayout;

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/__dashboard/projects.$projectId.tsx
var projects_projectId_exports = {};
__export(projects_projectId_exports, {
  default: () => projects_projectId_default,
  loader: () => loader8
});
init_react();
var import_core18 = require("@mantine/core");
var import_remix21 = __toESM(require_remix());
var import_tiny_invariant3 = __toESM(require("tiny-invariant"));

// app/components/GraphList.tsx
init_react();
var import_core15 = require("@mantine/core");
var import_react18 = __toESM(require("react"));

// app/components/GraphCard.tsx
init_react();
var import_core14 = require("@mantine/core");
var import_react17 = __toESM(require("react"));
var import_remix18 = __toESM(require_remix());
function GraphCard({ graph }) {
  return /* @__PURE__ */ import_react17.default.createElement(import_core14.Card, {
    py: "md",
    px: "lg",
    radius: "md",
    shadow: "xs",
    sx: {
      overflowWrap: "anywhere"
    }
  }, /* @__PURE__ */ import_react17.default.createElement(import_core14.Group, {
    position: "apart",
    align: "center"
  }, /* @__PURE__ */ import_react17.default.createElement("div", null, /* @__PURE__ */ import_react17.default.createElement(import_core14.Text, {
    weight: 500
  }, graph.name), /* @__PURE__ */ import_react17.default.createElement(import_core14.Text, {
    color: "dimmed",
    size: "xs"
  }, graph.jid)), /* @__PURE__ */ import_react17.default.createElement(import_core14.Button, {
    size: "xs",
    component: import_remix18.Link,
    to: graph.id
  }, "View")));
}

// app/components/GraphList.tsx
var GraphList = ({ graphs }) => {
  return /* @__PURE__ */ import_react18.default.createElement(import_core15.Grid, null, graphs.map((graph) => /* @__PURE__ */ import_react18.default.createElement(import_core15.Grid.Col, {
    key: graph.id,
    span: 4
  }, /* @__PURE__ */ import_react18.default.createElement(GraphCard, {
    graph
  }))));
};
var GraphList_default = GraphList;

// app/components/SiteList.tsx
init_react();
var import_core17 = require("@mantine/core");
var import_react20 = __toESM(require("react"));

// app/components/SiteCard.tsx
init_react();
var import_core16 = require("@mantine/core");
var import_react19 = __toESM(require("react"));
var import_remix19 = __toESM(require_remix());
var import_tabler_icons_react8 = require("tabler-icons-react");
var SiteCard = ({ site }) => {
  const navigate = (0, import_remix19.useNavigate)();
  return /* @__PURE__ */ import_react19.default.createElement(import_core16.Card, {
    shadow: "xs"
  }, /* @__PURE__ */ import_react19.default.createElement(import_core16.Card.Section, null, /* @__PURE__ */ import_react19.default.createElement(import_core16.Image, {
    radius: "md",
    src: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    alt: "Random unsplash image",
    height: 150
  })), /* @__PURE__ */ import_react19.default.createElement(import_core16.Text, {
    weight: 500,
    size: "lg",
    my: "xs"
  }, "Hey"), /* @__PURE__ */ import_react19.default.createElement(import_core16.Card.Section, null, /* @__PURE__ */ import_react19.default.createElement(import_core16.Divider, {
    variant: "dashed",
    size: "xs"
  }), /* @__PURE__ */ import_react19.default.createElement(import_core16.Group, {
    position: "right",
    my: "xs"
  }, /* @__PURE__ */ import_react19.default.createElement(import_core16.ActionIcon, {
    variant: "hover",
    size: "sm",
    onClick: () => {
    },
    color: "blue"
  }, /* @__PURE__ */ import_react19.default.createElement(import_tabler_icons_react8.Edit, null)), /* @__PURE__ */ import_react19.default.createElement(import_core16.ActionIcon, {
    variant: "hover",
    size: "sm",
    onClick: () => {
    },
    color: "orange"
  }, /* @__PURE__ */ import_react19.default.createElement(import_tabler_icons_react8.ExternalLink, null)), /* @__PURE__ */ import_react19.default.createElement(import_core16.ActionIcon, {
    variant: "hover",
    size: "sm",
    onClick: () => {
      navigate(`site/${site.id}/delete`);
    },
    color: "red"
  }, /* @__PURE__ */ import_react19.default.createElement(import_tabler_icons_react8.Trash, null)))));
};
var SiteCard_default = SiteCard;

// app/components/SiteList.tsx
var SiteList = ({ sites }) => {
  return /* @__PURE__ */ import_react20.default.createElement(import_core17.Grid, null, sites.map((site) => /* @__PURE__ */ import_react20.default.createElement(import_core17.Grid.Col, {
    key: site.id,
    span: 3
  }, /* @__PURE__ */ import_react20.default.createElement(SiteCard_default, {
    site
  }))));
};
var SiteList_default = SiteList;

// app/models/projectSite.server.ts
init_react();
var import_nanoid = require("nanoid");
var import_random_words = __toESM(require("random-words"));
var createProjectSite = async ({
  title,
  projectId,
  userId
}) => {
  const randomWordsString = (0, import_random_words.default)({
    exactly: 1,
    wordsPerString: 2,
    separator: "-"
  });
  const project = await prisma.project.findFirst({ where: { userId } });
  if (!project)
    throw new Error("Project not found.");
  const friendlySlug = `${randomWordsString}-${(0, import_nanoid.nanoid)(5)}`;
  return prisma.projectSite.create({
    data: {
      title,
      slug: friendlySlug,
      content: "{\n	\n}",
      projectId
    }
  });
};
var getProjectSites = async ({
  projectId,
  userId
}) => {
  return prisma.projectSite.findMany({
    where: { project: { userId }, projectId }
  });
};
var deleteProjectSite = async ({
  siteId,
  userId
}) => {
  return prisma.projectSite.deleteMany({
    where: { id: siteId, project: { userId } }
  });
};

// app/services/graph.server.ts
init_react();

// app/services/base.server.ts
init_react();
var import_remix20 = __toESM(require_remix());
var BaseService = class {
  constructor() {
    this.db = prisma;
    this.NotFoundError = { status: 401, statusText: "Cannot find resource" };
    this.InternalServerError = {
      status: 500,
      statusText: "Internal server error"
    };
  }
  throwError(error) {
    if (error === "NOT_FOUND")
      throw (0, import_remix20.json)({}, this.getError(error));
  }
  getServiceError(error) {
    if (error === "NOT_FOUND")
      return (0, import_remix20.json)({}, this.getError(error));
  }
  redirectWithError(url, error) {
    if (error === "NOT_FOUND")
      throw (0, import_remix20.redirect)(url, this.getError(error));
  }
  getError(error) {
    switch (error) {
      case "NOT_FOUND":
        return this.NotFoundError;
      case "INTERNAL_SERVER_ERROR":
        return this.InternalServerError;
      default:
        return {};
    }
  }
};

// app/services/graph.server.ts
var GraphService = class extends BaseService {
  async createGraph({ jid, endpoint, userId, name }) {
    try {
      const graph = await this.db.graph.create({
        data: { jid, userId, endpoint, name }
      });
      return graph;
    } catch (err) {
      this.redirectWithError("/graphs", "INTERNAL_SERVER_ERROR");
    }
  }
  async getGraphs({ userId }) {
    return this.db.graph.findMany({ where: { userId } });
  }
  async getGraph({ id, userId }) {
    return this.db.graph.findFirst({ where: { id, userId } });
  }
};
var graphService = new GraphService();

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/__dashboard/projects.$projectId.tsx
var ProjectPage = () => {
  const loaderData = (0, import_remix21.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_core18.Group, {
    align: "center",
    position: "apart"
  }, /* @__PURE__ */ React.createElement(import_core18.Title, {
    mb: "lg"
  }, "Sites"), /* @__PURE__ */ React.createElement(import_core18.Button, {
    component: import_remix21.Link,
    to: "new-site"
  }, "New Site")), /* @__PURE__ */ React.createElement(SiteList_default, {
    sites: loaderData.sites
  }), /* @__PURE__ */ React.createElement(import_core18.Space, {
    h: 100
  }), /* @__PURE__ */ React.createElement(import_core18.Title, {
    mb: "lg"
  }, "Graphs"), /* @__PURE__ */ React.createElement(GraphList_default, {
    graphs: loaderData.graphs
  }), /* @__PURE__ */ React.createElement(import_remix21.Outlet, null));
};
var projects_projectId_default = ProjectPage;
var loader8 = async ({ request, params }) => {
  const { projectId } = params;
  const userId = await requireUserId(request);
  (0, import_tiny_invariant3.default)(typeof projectId === "string", "projectId must be a string");
  const sites = await getProjectSites({ projectId, userId });
  const graphs = await graphService.getGraphs({ userId });
  return (0, import_remix21.json)({ graphs, sites });
};

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/__dashboard/projects.$projectId/site.$siteId.delete.tsx
var site_siteId_delete_exports = {};
__export(site_siteId_delete_exports, {
  action: () => action2,
  default: () => site_siteId_delete_default
});
init_react();
var import_core19 = require("@mantine/core");
var import_react21 = __toESM(require("react"));
var import_remix22 = __toESM(require_remix());
var import_tiny_invariant4 = __toESM(require("tiny-invariant"));
var DeleteSitePage = () => {
  const navigate = (0, import_remix22.useNavigate)();
  return /* @__PURE__ */ import_react21.default.createElement(import_core19.Modal, {
    opened: true,
    onClose: () => navigate(".."),
    title: "Delete Project"
  }, /* @__PURE__ */ import_react21.default.createElement(import_core19.Text, null, "Are you sure you want to delete this site?"), /* @__PURE__ */ import_react21.default.createElement(import_core19.Group, {
    my: "lg",
    position: "right"
  }, /* @__PURE__ */ import_react21.default.createElement(import_core19.Button, {
    color: "teal",
    component: import_remix22.Link,
    to: ".."
  }, "No"), /* @__PURE__ */ import_react21.default.createElement(import_remix22.Form, {
    method: "post"
  }, /* @__PURE__ */ import_react21.default.createElement(import_core19.Button, {
    type: "submit",
    color: "red"
  }, "Yes"))));
};
var action2 = async ({ request, params }) => {
  const { projectId, siteId } = params;
  if (!projectId)
    throw (0, import_remix22.redirect)("/projects");
  const userId = await requireUserId(request);
  (0, import_tiny_invariant4.default)(typeof siteId === "string");
  await deleteProjectSite({
    siteId,
    userId
  });
  return (0, import_remix22.redirect)(`/projects/${projectId}`);
};
var site_siteId_delete_default = DeleteSitePage;

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/__dashboard/projects.$projectId/new-site.tsx
var new_site_exports = {};
__export(new_site_exports, {
  action: () => action3,
  default: () => new_site_default
});
init_react();
var import_core20 = require("@mantine/core");
var import_react22 = __toESM(require("react"));
var import_remix23 = __toESM(require_remix());
var import_tiny_invariant5 = __toESM(require("tiny-invariant"));
var action3 = async ({ request, params }) => {
  const { projectId } = params;
  const formData = await request.formData();
  console.log({ formData });
  const title = formData.get("title");
  const userId = await requireUserId(request);
  (0, import_tiny_invariant5.default)(typeof title == "string", "title must be a string");
  (0, import_tiny_invariant5.default)(typeof projectId == "string");
  await createProjectSite({ projectId, title, userId });
  return (0, import_remix23.redirect)(`/projects/${projectId}`);
};
var NewSitePage = () => {
  const navigate = (0, import_remix23.useNavigate)();
  return /* @__PURE__ */ import_react22.default.createElement(import_core20.Modal, {
    opened: true,
    onClose: () => navigate(".."),
    title: "Site Name"
  }, /* @__PURE__ */ import_react22.default.createElement(import_remix23.Form, {
    method: "post"
  }, /* @__PURE__ */ import_react22.default.createElement(import_core20.TextInput, {
    name: "title",
    placeholder: "Enter site name"
  }), /* @__PURE__ */ import_react22.default.createElement(import_core20.Group, {
    position: "right",
    my: "lg"
  }, /* @__PURE__ */ import_react22.default.createElement(import_core20.Button, {
    type: "submit"
  }, "Create Site"))));
};
var new_site_default = NewSitePage;

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/__dashboard/graphs/add-graph.tsx
var add_graph_exports = {};
__export(add_graph_exports, {
  action: () => action4,
  default: () => add_graph_default
});
init_react();
var import_core22 = require("@mantine/core");
var import_hooks4 = require("@mantine/hooks");
var import_react24 = __toESM(require("react"));
var import_remix24 = __toESM(require_remix());
var import_tiny_invariant6 = __toESM(require("tiny-invariant"));

// app/components/SelectGraph.tsx
init_react();
var import_core21 = require("@mantine/core");
var import_react23 = __toESM(require("react"));
var SelectGraph = ({ graphs }) => {
  return /* @__PURE__ */ import_react23.default.createElement("div", null, /* @__PURE__ */ import_react23.default.createElement(import_core21.RadioGroup, {
    label: "Select your graph",
    description: "Select the graph you want to use",
    required: true,
    name: "selectedGraph"
  }, (graphs == null ? void 0 : graphs.length) ? graphs.map((graph) => /* @__PURE__ */ import_react23.default.createElement(import_core21.Radio, {
    label: /* @__PURE__ */ import_react23.default.createElement(import_react23.default.Fragment, null, /* @__PURE__ */ import_react23.default.createElement(import_core21.Text, {
      component: "span"
    }, graph.name), /* @__PURE__ */ import_react23.default.createElement(import_core21.Text, {
      component: "span",
      size: "xs",
      color: "dimmed",
      sx: { marginLeft: "4px" }
    }, graph.jid)),
    value: graph.jid,
    key: graph.jid
  })) : /* @__PURE__ */ import_react23.default.createElement(import_core21.Text, null, "No graph found.")));
};
var SelectGraph_default = SelectGraph;

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/__dashboard/graphs/add-graph.tsx
var AddGraphPage = () => {
  var _a;
  const fetcher = (0, import_remix24.useFetcher)();
  const navigate = (0, import_remix24.useNavigate)();
  const [endpoint, setEndpoint] = (0, import_hooks4.useInputState)("");
  const [debouncedEndpointValue] = (0, import_hooks4.useDebouncedValue)(endpoint, 200);
  (0, import_react24.useEffect)(() => {
    fetcher.load(`/api/loadGraphs?endpointUrl=${debouncedEndpointValue}`);
  }, [debouncedEndpointValue]);
  return /* @__PURE__ */ import_react24.default.createElement("div", null, /* @__PURE__ */ import_react24.default.createElement(import_core22.Modal, {
    onClose: () => {
      navigate("..");
    },
    title: "Add Graph",
    opened: true
  }, /* @__PURE__ */ import_react24.default.createElement(import_remix24.Form, {
    method: "post"
  }, /* @__PURE__ */ import_react24.default.createElement(import_core22.Stack, null, /* @__PURE__ */ import_react24.default.createElement(import_core22.TextInput, {
    name: "name",
    placeholder: "Enter a name",
    label: "Name"
  }), /* @__PURE__ */ import_react24.default.createElement(import_core22.TextInput, {
    name: "endpoint",
    placeholder: "http://localhost:8000",
    label: "URL",
    value: endpoint,
    onChange: setEndpoint
  }), fetcher.state === "loading" ? /* @__PURE__ */ import_react24.default.createElement("p", null, "Loading...") : /* @__PURE__ */ import_react24.default.createElement(SelectGraph_default, {
    graphs: ((_a = fetcher.data) == null ? void 0 : _a.graphs) || []
  }), /* @__PURE__ */ import_react24.default.createElement(import_core22.Group, {
    position: "right"
  }, /* @__PURE__ */ import_react24.default.createElement(import_core22.Button, {
    type: "submit"
  }, "Add Graph"))))));
};
var action4 = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const endpoint = formData.get("endpoint");
  const selectedGraph = formData.get("selectedGraph");
  const userId = await requireUserId(request);
  (0, import_tiny_invariant6.default)(typeof name == "string");
  (0, import_tiny_invariant6.default)(typeof selectedGraph == "string");
  (0, import_tiny_invariant6.default)(typeof endpoint == "string");
  await graphService.createGraph({
    endpoint,
    jid: selectedGraph,
    userId,
    name
  });
  return (0, import_remix24.redirect)("/graphs");
};
var add_graph_default = AddGraphPage;

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/__dashboard/graphs/$graphId.tsx
var graphId_exports = {};
__export(graphId_exports, {
  default: () => graphId_default,
  loader: () => loader9
});
init_react();
var import_core23 = require("@mantine/core");
var import_react25 = __toESM(require("react"));
var import_remix25 = __toESM(require_remix());
var import_tiny_invariant7 = __toESM(require("tiny-invariant"));
var vis = __toESM(require("vis-network"));
var GraphDetailPage = () => {
  var _a, _b;
  const loaderData = (0, import_remix25.useLoaderData)();
  const graphFetcher = (0, import_remix25.useFetcher)();
  const [showContext, setShowContext] = (0, import_react25.useState)(false);
  const [context, setContext] = (0, import_react25.useState)(null);
  const [dialogPos, setDialogPos] = (0, import_react25.useState)({ x: 0, y: 0 });
  const targetNode = (0, import_react25.useRef)(null);
  const networkRef = (0, import_react25.useRef)(null);
  (0, import_react25.useEffect)(() => {
    var _a2;
    graphFetcher.load(`/api/loadGraph?endpointUrl=${(_a2 = loaderData.graph) == null ? void 0 : _a2.endpoint}`);
  }, []);
  const nodes = (0, import_react25.useMemo)(() => {
    var _a2, _b2;
    return (_b2 = (_a2 = graphFetcher == null ? void 0 : graphFetcher.data) == null ? void 0 : _a2.graph) == null ? void 0 : _b2.nodes;
  }, [graphFetcher == null ? void 0 : graphFetcher.data]);
  const edges = (0, import_react25.useMemo)(() => {
    var _a2, _b2;
    return (_b2 = (_a2 = graphFetcher == null ? void 0 : graphFetcher.data) == null ? void 0 : _a2.graph) == null ? void 0 : _b2.edges;
  }, [graphFetcher.data]);
  (0, import_react25.useEffect)(() => {
    if (networkRef == null ? void 0 : networkRef.current) {
      const network = new vis.Network(networkRef.current, { edges, nodes }, {
        height: "300px",
        edges: { arrows: "to" },
        interaction: {}
      });
      network.on("oncontext", (params) => {
        var _a2, _b2, _c;
        setShowContext(false);
        console.log(params);
        params.event.preventDefault();
        const node = network.getNodeAt({
          x: params.pointer.DOM.x,
          y: params.pointer.DOM.y
        });
        console.log({ node });
        const nodeData = (_c = (_b2 = (_a2 = graphFetcher == null ? void 0 : graphFetcher.data) == null ? void 0 : _a2.graph) == null ? void 0 : _b2.nodes) == null ? void 0 : _c.find((n) => n.id == node);
        setContext(nodeData == null ? void 0 : nodeData.context);
        console.log({ nodeData });
        if (node) {
          network.selectNodes([node]);
          network.focus(node, {
            scale: 1,
            animation: { duration: 1e3, easingFunction: "easeInOutQuad" }
          });
          setTimeout(() => {
            const newNodePosition = network.canvasToDOM(network.getPosition(node));
            console.log({ newNodePosition });
            if (targetNode.current) {
              setDialogPos(newNodePosition);
              setShowContext(true);
            }
          }, 1e3);
        }
      });
    }
  }, [networkRef, nodes, edges, targetNode, (_b = (_a = graphFetcher == null ? void 0 : graphFetcher.data) == null ? void 0 : _a.graph) == null ? void 0 : _b.nodes]);
  const renderContext = context ? Object.keys(context).map((contextKey) => /* @__PURE__ */ import_react25.default.createElement("div", {
    key: contextKey
  }, /* @__PURE__ */ import_react25.default.createElement(import_core23.Text, {
    size: "xs",
    weight: "bold"
  }, contextKey), /* @__PURE__ */ import_react25.default.createElement(import_core23.Text, {
    size: "xs"
  }, Array.isArray(context[contextKey]) ? context[contextKey].join(", ") : context[contextKey]))) : /* @__PURE__ */ import_react25.default.createElement(import_core23.Text, null, "Empty context");
  return /* @__PURE__ */ import_react25.default.createElement("div", null, /* @__PURE__ */ import_react25.default.createElement(import_core23.Card, {
    shadow: "xs",
    sx: { width: "100%", height: 300 }
  }, /* @__PURE__ */ import_react25.default.createElement(import_core23.Title, {
    order: 3
  }, "View Graph"), /* @__PURE__ */ import_react25.default.createElement(import_core23.Dialog, {
    withCloseButton: true,
    opened: showContext,
    onClose: () => setShowContext(false),
    position: { left: dialogPos.x, top: dialogPos.y },
    ref: targetNode,
    className: "targetNode"
  }, /* @__PURE__ */ import_react25.default.createElement(import_core23.Text, null, "Context"), renderContext), (graphFetcher == null ? void 0 : graphFetcher.state) === "loading" ? /* @__PURE__ */ import_react25.default.createElement(import_core23.LoadingOverlay, {
    visible: true
  }) : /* @__PURE__ */ import_react25.default.createElement("div", {
    ref: networkRef
  })));
};
var graphId_default = GraphDetailPage;
var loader9 = async ({ request, params }) => {
  const { graphId } = params;
  const userId = await requireUserId(request);
  (0, import_tiny_invariant7.default)(typeof graphId == "string");
  const graph = await graphService.getGraph({ id: graphId, userId });
  return (0, import_remix25.json)({ graph });
};

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/__dashboard/graphs/index.tsx
var graphs_exports2 = {};
__export(graphs_exports2, {
  default: () => graphs_default2,
  loader: () => loader10
});
init_react();
var import_core24 = require("@mantine/core");
var import_remix26 = __toESM(require_remix());
var import_tabler_icons_react9 = require("tabler-icons-react");
var GraphsIndexPage = () => {
  const loaderData = (0, import_remix26.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_core24.Group, {
    position: "apart"
  }, /* @__PURE__ */ React.createElement(import_core24.Title, {
    order: 1
  }, "Graphs"), /* @__PURE__ */ React.createElement(import_core24.Button, {
    leftIcon: /* @__PURE__ */ React.createElement(import_tabler_icons_react9.Affiliate, null),
    variant: "light",
    component: import_remix26.Link,
    to: "add-graph"
  }, "Add Graph")), /* @__PURE__ */ React.createElement(import_core24.Space, {
    h: "xl"
  }), /* @__PURE__ */ React.createElement(GraphList_default, {
    graphs: loaderData.graphs
  }));
};
var graphs_default2 = GraphsIndexPage;
var loader10 = async ({ request }) => {
  const userId = await requireUserId(request);
  const graphs = await graphService.getGraphs({ userId });
  return (0, import_remix26.json)({ graphs });
};

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/__dashboard/projects.tsx
var projects_exports = {};
__export(projects_exports, {
  default: () => projects_default,
  loader: () => loader11
});
init_react();
var import_core26 = require("@mantine/core");
var import_react26 = __toESM(require("react"));
var import_remix28 = __toESM(require_remix());
var import_tabler_icons_react11 = require("tabler-icons-react");

// app/components/ProjectsTable.tsx
init_react();
var import_core25 = require("@mantine/core");
var import_remix27 = __toESM(require_remix());
var import_tabler_icons_react10 = require("tabler-icons-react");
function ProjectsTable({ projects }) {
  const navigate = (0, import_remix27.useNavigate)();
  const rows = projects.map((project) => /* @__PURE__ */ React.createElement("tr", {
    key: project.id,
    style: { cursor: "pointer" },
    onClick: () => navigate(`/studio/${project.id}/editor/tab/blank`)
  }, /* @__PURE__ */ React.createElement("td", null, project.id), /* @__PURE__ */ React.createElement("td", null, project.title), /* @__PURE__ */ React.createElement("td", {
    onClick: (e) => e.stopPropagation()
  }, /* @__PURE__ */ React.createElement(import_core25.Group, null, /* @__PURE__ */ React.createElement(import_core25.ActionIcon, {
    variant: "hover",
    size: "sm",
    onClick: () => {
      navigate(`/projects/${project.id}/edit`);
    }
  }, /* @__PURE__ */ React.createElement(import_tabler_icons_react10.Edit, null)), /* @__PURE__ */ React.createElement(import_core25.ActionIcon, {
    variant: "hover",
    size: "sm",
    onClick: () => {
      navigate(`/projects/${project.id}/edit`);
    }
  }, /* @__PURE__ */ React.createElement(import_tabler_icons_react10.View360, null)), /* @__PURE__ */ React.createElement(import_core25.ActionIcon, {
    variant: "hover",
    size: "sm",
    onClick: () => {
      navigate(`/projects/${project.id}/delete`);
    }
  }, /* @__PURE__ */ React.createElement(import_tabler_icons_react10.Trash, null))))));
  return /* @__PURE__ */ React.createElement(import_core25.Table, {
    highlightOnHover: true
  }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "ID"), /* @__PURE__ */ React.createElement("th", null, "Project Name"), /* @__PURE__ */ React.createElement("th", null, "Actions"))), /* @__PURE__ */ React.createElement("tbody", null, rows));
}

// app/models/project.server.ts
init_react();
async function createProject({ userId, title }) {
  const project = await prisma.project.create({
    data: {
      userId,
      title
    }
  });
  return project;
}
async function getProjects({ userId }) {
  return prisma.project.findMany({
    where: { userId },
    orderBy: { id: "desc" }
  });
}
async function deleteProject({ projectId, userId }) {
  return prisma.project.deleteMany({ where: { id: projectId, userId } });
}
async function getProjectById({ projectId }) {
  return prisma.project.findFirst({ where: { id: projectId } });
}
async function updateProject({
  projectId,
  userId,
  input
}) {
  const project = await prisma.project.findFirst({
    where: {
      id: projectId,
      userId
    }
  });
  if (!project)
    throw new Error("Project not found.");
  return prisma.project.update({
    where: { id: projectId },
    data: __spreadValues({}, input)
  });
}

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/__dashboard/projects.tsx
var loader11 = async ({ request }) => {
  const userId = await requireUserId(request);
  const projects = await getProjects({ userId });
  return (0, import_remix28.json)({ projects });
};
var ProjectsPage = () => {
  const loaderData = (0, import_remix28.useLoaderData)();
  return /* @__PURE__ */ import_react26.default.createElement("div", null, /* @__PURE__ */ import_react26.default.createElement(import_core26.Title, null, "Projects"), /* @__PURE__ */ import_react26.default.createElement(import_core26.Group, {
    position: "apart",
    py: 20
  }, /* @__PURE__ */ import_react26.default.createElement(import_core26.Input, {
    placeholder: "Search Projects"
  }), /* @__PURE__ */ import_react26.default.createElement(import_core26.Button, {
    component: import_remix28.Link,
    to: "new-project",
    leftIcon: /* @__PURE__ */ import_react26.default.createElement(import_tabler_icons_react11.Hammer, null)
  }, "New Project")), /* @__PURE__ */ import_react26.default.createElement(ProjectsTable, {
    projects: loaderData.projects
  }), /* @__PURE__ */ import_react26.default.createElement(import_remix28.Outlet, null));
};
var projects_default = ProjectsPage;

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/__dashboard/projects/$projectId.delete.tsx
var projectId_delete_exports = {};
__export(projectId_delete_exports, {
  action: () => action5,
  default: () => projectId_delete_default
});
init_react();
var import_core27 = require("@mantine/core");
var import_react27 = __toESM(require("react"));
var import_remix29 = __toESM(require_remix());
var import_tiny_invariant8 = __toESM(require("tiny-invariant"));
var action5 = async ({ request, params }) => {
  const userId = await requireUserId(request);
  const { projectId } = params;
  (0, import_tiny_invariant8.default)(typeof projectId === "string", "projectId must be a string");
  await deleteProject({ projectId, userId });
  return (0, import_remix29.redirect)("/projects");
};
var DeleteProjectPage = () => {
  const navigate = (0, import_remix29.useNavigate)();
  return /* @__PURE__ */ import_react27.default.createElement(import_core27.Modal, {
    opened: true,
    onClose: () => navigate(".."),
    title: "Delete Project"
  }, /* @__PURE__ */ import_react27.default.createElement(import_core27.Text, null, "Are you sure you want to delete this project?"), /* @__PURE__ */ import_react27.default.createElement(import_core27.Group, {
    my: "lg",
    position: "right"
  }, /* @__PURE__ */ import_react27.default.createElement(import_core27.Button, {
    color: "teal",
    component: import_remix29.Link,
    to: ".."
  }, "No"), /* @__PURE__ */ import_react27.default.createElement(import_remix29.Form, {
    method: "post"
  }, /* @__PURE__ */ import_react27.default.createElement(import_core27.Button, {
    type: "submit",
    color: "red"
  }, "Yes"))));
};
var projectId_delete_default = DeleteProjectPage;

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/__dashboard/projects/$projectId.edit.tsx
var projectId_edit_exports = {};
__export(projectId_edit_exports, {
  action: () => action6,
  default: () => projectId_edit_default,
  loader: () => loader12
});
init_react();
var import_core28 = require("@mantine/core");
var import_react28 = __toESM(require("react"));
var import_remix30 = __toESM(require_remix());
var import_tiny_invariant9 = __toESM(require("tiny-invariant"));
var EditProjectPage = () => {
  var _a;
  const loaderData = (0, import_remix30.useLoaderData)();
  const navigate = (0, import_remix30.useNavigate)();
  return /* @__PURE__ */ import_react28.default.createElement(import_core28.Modal, {
    opened: true,
    onClose: () => {
      navigate("..");
    },
    title: "Edit Project"
  }, /* @__PURE__ */ import_react28.default.createElement(import_remix30.Form, {
    method: "post"
  }, /* @__PURE__ */ import_react28.default.createElement(import_core28.Stack, null, /* @__PURE__ */ import_react28.default.createElement(import_core28.TextInput, {
    name: "title",
    label: "Name",
    defaultValue: ((_a = loaderData.project) == null ? void 0 : _a.title) || ""
  }), /* @__PURE__ */ import_react28.default.createElement(import_core28.Group, {
    position: "right"
  }, /* @__PURE__ */ import_react28.default.createElement(import_core28.Button, {
    type: "submit"
  }, "Save Project")))));
};
var action6 = async ({ request, params }) => {
  const { projectId } = params;
  if (!projectId)
    throw (0, import_remix30.redirect)("/projects");
  const userId = await requireUserId(request);
  const formData = await request.formData();
  const title = formData.get("title") || void 0;
  await updateProject({
    projectId,
    userId,
    input: { title }
  });
  return (0, import_remix30.redirect)("/projects");
};
var loader12 = async ({ request, params }) => {
  const { projectId } = params;
  (0, import_tiny_invariant9.default)(typeof projectId === "string", "projectId must be a string");
  const project = await getProjectById({ projectId });
  return (0, import_remix30.json)({ project });
};
var projectId_edit_default = EditProjectPage;

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/__dashboard/projects/new-project.tsx
var new_project_exports = {};
__export(new_project_exports, {
  action: () => action7,
  default: () => new_project_default
});
init_react();
var import_core29 = require("@mantine/core");
var import_react29 = __toESM(require("react"));
var import_remix31 = __toESM(require_remix());
var import_tiny_invariant10 = __toESM(require("tiny-invariant"));
var action7 = async ({ request }) => {
  const userId = await requireUserId(request);
  const formData = await request.formData();
  const title = formData.get("title");
  (0, import_tiny_invariant10.default)(typeof title === "string", "title must be a string");
  await createProject({ title, userId });
  return (0, import_remix31.redirect)("/projects");
};
var NewProjectPage = () => {
  const navigate = (0, import_remix31.useNavigate)();
  return /* @__PURE__ */ import_react29.default.createElement(import_core29.Modal, {
    title: "New Project",
    onClose: () => navigate(".."),
    opened: true
  }, /* @__PURE__ */ import_react29.default.createElement(import_remix31.Form, {
    method: "post"
  }, /* @__PURE__ */ import_react29.default.createElement(import_core29.TextInput, {
    name: "title",
    label: "Name",
    placeholder: "Enter project name"
  }), /* @__PURE__ */ import_react29.default.createElement(import_core29.Group, {
    position: "right",
    my: "lg"
  }, /* @__PURE__ */ import_react29.default.createElement(import_core29.Button, {
    type: "submit"
  }, "Create Project"))));
};
var new_project_default = NewProjectPage;

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/healthcheck.tsx
var healthcheck_exports = {};
__export(healthcheck_exports, {
  loader: () => loader13
});
init_react();
var loader13 = async ({ request }) => {
  const host = request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  try {
    await Promise.all([
      prisma.user.count(),
      fetch(`http://${host}`, { method: "HEAD" }).then((r) => {
        if (!r.ok)
          return Promise.reject(r);
      })
    ]);
    return new Response("OK");
  } catch (error) {
    console.log("healthcheck \u274C", { error });
    return new Response("ERROR", { status: 500 });
  }
};

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/__auth.tsx
var auth_exports = {};
__export(auth_exports, {
  default: () => AuthenticationLayout
});
init_react();
var import_core30 = require("@mantine/core");
var import_react30 = __toESM(require("react"));
var import_remix32 = __toESM(require_remix());
var useStyles3 = (0, import_core30.createStyles)((theme) => ({
  wrapper: {
    minHeight: 900,
    backgroundSize: "cover",
    backgroundImage: "url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)"
  },
  form: {
    borderRight: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]}`,
    minHeight: 900,
    maxWidth: 450,
    paddingTop: 80,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%"
    }
  },
  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`
  },
  logo: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    width: 120,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  }
}));
var guidanceLinkMessage = {
  login: "Don't have an account?",
  signup: "Already have an account?"
};
function AuthenticationLayout() {
  const { classes } = useStyles3();
  const { pathname } = (0, import_remix32.useLocation)();
  const renderGuidanceLink = () => /* @__PURE__ */ import_react30.default.createElement(import_core30.Text, {
    align: "center",
    mt: "md"
  }, pathname.includes("login") ? /* @__PURE__ */ import_react30.default.createElement(import_react30.default.Fragment, null, guidanceLinkMessage["login"]) : /* @__PURE__ */ import_react30.default.createElement(import_react30.default.Fragment, null, guidanceLinkMessage["signup"]), " ", /* @__PURE__ */ import_react30.default.createElement(import_core30.Anchor, {
    to: pathname.includes("login") ? "/join" : "/login",
    component: import_remix32.Link,
    weight: 700
  }, pathname.includes("login") ? "Register" : "Login"));
  return /* @__PURE__ */ import_react30.default.createElement("div", {
    className: classes.wrapper
  }, /* @__PURE__ */ import_react30.default.createElement(import_core30.Paper, {
    className: classes.form,
    radius: 0,
    p: 30
  }, /* @__PURE__ */ import_react30.default.createElement(import_core30.Title, {
    order: 2,
    className: classes.title,
    align: "center",
    mt: "md",
    mb: 50
  }, pathname.includes("login") ? /* @__PURE__ */ import_react30.default.createElement(import_react30.default.Fragment, null, "Welcome back!") : /* @__PURE__ */ import_react30.default.createElement(import_react30.default.Fragment, null, "Create an account")), /* @__PURE__ */ import_react30.default.createElement(import_remix32.Outlet, null), renderGuidanceLink()));
}

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/__auth/hello.tsx
var hello_exports = {};
__export(hello_exports, {
  default: () => hello_default
});
init_react();
var import_core31 = require("@mantine/core");
var import_react31 = __toESM(require("react"));
var import_remix33 = __toESM(require_remix());
var HelloPage = () => {
  const location = (0, import_remix33.useLocation)();
  return /* @__PURE__ */ import_react31.default.createElement(import_react31.default.Fragment, null, /* @__PURE__ */ import_react31.default.createElement(import_core31.TextInput, {
    label: "Email address",
    placeholder: "hello@gmail.com",
    size: "md"
  }), /* @__PURE__ */ import_react31.default.createElement(import_core31.PasswordInput, {
    label: "Password",
    placeholder: "Your password",
    mt: "md",
    size: "md"
  }), /* @__PURE__ */ import_react31.default.createElement(import_core31.Checkbox, {
    label: "Keep me logged in",
    mt: "xl",
    size: "md"
  }), /* @__PURE__ */ import_react31.default.createElement(import_core31.Button, {
    fullWidth: true,
    mt: "xl",
    size: "md"
  }, "Login"));
};
var hello_default = HelloPage;

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/__auth/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action8,
  default: () => LoginPage,
  loader: () => loader14,
  meta: () => meta2
});
init_react();
var import_core32 = require("@mantine/core");
var React29 = __toESM(require("react"));
var import_remix35 = __toESM(require_remix());

// app/utils.ts
init_react();
var import_react32 = require("react");
var import_remix34 = __toESM(require_remix());
function useMatchesData(id) {
  const matchingRoutes = (0, import_remix34.useMatches)();
  const route = (0, import_react32.useMemo)(() => matchingRoutes.find((route2) => route2.id === id), [matchingRoutes, id]);
  return route == null ? void 0 : route.data;
}
function isUser(user) {
  return user && typeof user === "object" && typeof user.email === "string";
}
function useOptionalUser() {
  const data = useMatchesData("root");
  if (!data || !isUser(data.user)) {
    return void 0;
  }
  return data.user;
}
function useUser() {
  const maybeUser = useOptionalUser();
  if (!maybeUser) {
    throw new Error("No user found in root loader, but user is required by useUser. If user is optional, try useOptionalUser instead.");
  }
  return maybeUser;
}
function validateEmail(email) {
  return typeof email === "string" && email.length > 3 && email.includes("@");
}

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/__auth/login.tsx
var loader14 = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId)
    return (0, import_remix35.redirect)("/");
  return (0, import_remix35.json)({});
};
var action8 = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const redirectTo = formData.get("redirectTo");
  const remember = formData.get("remember");
  if (!validateEmail(email)) {
    return (0, import_remix35.json)({ errors: { email: "Email is invalid" } }, { status: 400 });
  }
  if (typeof password !== "string") {
    return (0, import_remix35.json)({ errors: { password: "Password is required" } }, { status: 400 });
  }
  if (password.length < 8) {
    return (0, import_remix35.json)({ errors: { password: "Password is too short" } }, { status: 400 });
  }
  const user = await verifyLogin(email, password);
  if (!user) {
    return (0, import_remix35.json)({ errors: { email: "Invalid email or password" } }, { status: 400 });
  }
  return createUserSession({
    request,
    userId: user.id,
    remember: remember === "on" ? true : false,
    redirectTo: typeof redirectTo === "string" ? redirectTo : "/projects"
  });
};
var meta2 = () => {
  return {
    title: "Login"
  };
};
function LoginPage() {
  var _a, _b, _c, _d;
  const [searchParams] = (0, import_remix35.useSearchParams)();
  const redirectTo = searchParams.get("redirectTo") || "/projects";
  const actionData = (0, import_remix35.useActionData)();
  const emailRef = React29.useRef(null);
  const passwordRef = React29.useRef(null);
  React29.useEffect(() => {
    var _a2, _b2, _c2, _d2;
    if ((_a2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a2.email) {
      (_b2 = emailRef.current) == null ? void 0 : _b2.focus();
    } else if ((_c2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c2.password) {
      (_d2 = passwordRef.current) == null ? void 0 : _d2.focus();
    }
  }, [actionData]);
  return /* @__PURE__ */ React29.createElement(import_remix35.Form, {
    method: "post",
    className: "space-y-6"
  }, /* @__PURE__ */ React29.createElement("div", null, /* @__PURE__ */ React29.createElement(import_core32.TextInput, {
    label: "Email address",
    placeholder: "user@jaseci.org",
    ref: emailRef,
    id: "email",
    required: true,
    autoFocus: true,
    name: "email",
    type: "email",
    color: "orange",
    autoComplete: "email",
    "aria-invalid": ((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.email) ? true : void 0,
    "aria-describedby": "email-error",
    size: "md"
  }), ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.email) && /* @__PURE__ */ React29.createElement("div", {
    className: "pt-1 text-red-700",
    id: "email-error"
  }, actionData.errors.email)), /* @__PURE__ */ React29.createElement(import_core32.PasswordInput, {
    label: "Password",
    placeholder: "Your Password",
    ref: passwordRef,
    name: "password",
    autoComplete: "new-password",
    "aria-invalid": ((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.password) ? true : void 0,
    "aria-describedby": "password-error",
    size: "md"
  }), ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.password) && /* @__PURE__ */ React29.createElement("div", {
    className: "pt-1 text-red-700",
    id: "password-error"
  }, actionData.errors.password), /* @__PURE__ */ React29.createElement("input", {
    type: "hidden",
    name: "redirectTo",
    value: redirectTo
  }), /* @__PURE__ */ React29.createElement(import_core32.Button, {
    fullWidth: true,
    mt: "xl",
    color: "orange",
    size: "md",
    type: "submit"
  }, "Log in"), /* @__PURE__ */ React29.createElement(import_core32.Checkbox, {
    name: "remember",
    label: "Keep me logged in",
    mt: "xl",
    size: "md"
  }));
}

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/__auth/join.tsx
var join_exports = {};
__export(join_exports, {
  action: () => action9,
  default: () => Join,
  loader: () => loader15,
  meta: () => meta3
});
init_react();
var import_core33 = require("@mantine/core");
var React30 = __toESM(require("react"));
var import_remix36 = __toESM(require_remix());
var loader15 = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId)
    return (0, import_remix36.redirect)("/");
  return (0, import_remix36.json)({});
};
var action9 = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const redirectTo = formData.get("redirectTo");
  if (!validateEmail(email)) {
    return (0, import_remix36.json)({ errors: { email: "Email is invalid" } }, { status: 400 });
  }
  if (typeof password !== "string") {
    return (0, import_remix36.json)({ errors: { password: "Password is required" } }, { status: 400 });
  }
  if (password.length < 8) {
    return (0, import_remix36.json)({ errors: { password: "Password is too short" } }, { status: 400 });
  }
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return (0, import_remix36.json)({ errors: { email: "A user already exists with this email" } }, { status: 400 });
  }
  const user = await createUser(email, password);
  return createUserSession({
    request,
    userId: user.id,
    remember: false,
    redirectTo: typeof redirectTo === "string" ? redirectTo : "/"
  });
};
var meta3 = () => {
  return {
    title: "Sign Up"
  };
};
function Join() {
  var _a, _b, _c, _d;
  const [searchParams] = (0, import_remix36.useSearchParams)();
  const redirectTo = searchParams.get("redirectTo") ?? void 0;
  const actionData = (0, import_remix36.useActionData)();
  const emailRef = React30.useRef(null);
  const passwordRef = React30.useRef(null);
  React30.useEffect(() => {
    var _a2, _b2, _c2, _d2;
    if ((_a2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a2.email) {
      (_b2 = emailRef.current) == null ? void 0 : _b2.focus();
    } else if ((_c2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c2.password) {
      (_d2 = passwordRef.current) == null ? void 0 : _d2.focus();
    }
  }, [actionData]);
  return /* @__PURE__ */ React30.createElement(import_remix36.Form, {
    method: "post",
    className: "space-y-6"
  }, /* @__PURE__ */ React30.createElement(import_core33.TextInput, {
    label: "Email",
    ref: emailRef,
    placeholder: "admin@jaseci.org",
    id: "email",
    required: true,
    size: "md",
    autoFocus: true,
    name: "email",
    type: "email",
    autoComplete: "email",
    "aria-invalid": ((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.email) ? true : void 0,
    "aria-describedby": "email-error",
    className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
  }), ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.email) && /* @__PURE__ */ React30.createElement("div", {
    className: "pt-1 text-red-700",
    id: "email-error"
  }, actionData.errors.email), /* @__PURE__ */ React30.createElement(import_core33.PasswordInput, {
    id: "password",
    label: "Password",
    size: "md",
    ref: passwordRef,
    name: "password",
    placeholder: "Enter a password",
    type: "password",
    autoComplete: "new-password",
    "aria-invalid": ((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.password) ? true : void 0,
    "aria-describedby": "password-error",
    className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
  }), ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.password) && /* @__PURE__ */ React30.createElement("div", {
    className: "pt-1 text-red-700",
    id: "password-error"
  }, actionData.errors.password), /* @__PURE__ */ React30.createElement("input", {
    type: "hidden",
    name: "redirectTo",
    value: redirectTo
  }), /* @__PURE__ */ React30.createElement(import_core33.Button, {
    fullWidth: true,
    mt: "xl",
    size: "md",
    type: "submit"
  }, "Create Account"));
}

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action10,
  loader: () => loader16
});
init_react();
var import_remix37 = __toESM(require_remix());
var action10 = async ({ request }) => {
  return logout(request);
};
var loader16 = async () => {
  return (0, import_remix37.redirect)("/");
};

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader17
});
init_react();
var import_remix38 = __toESM(require_remix());
var loader17 = () => {
  return (0, import_remix38.redirect)("/projects");
};
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null);
}

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/notes.tsx
var notes_exports = {};
__export(notes_exports, {
  default: () => NotesPage,
  loader: () => loader18
});
init_react();
var import_remix39 = __toESM(require_remix());

// app/models/note.server.ts
init_react();
function getNote({ userId, id }) {
  return prisma.note.findFirst({
    where: { id, userId }
  });
}
function getNoteListItems({ userId }) {
  return prisma.note.findMany({
    where: { userId },
    select: { id: true, title: true },
    orderBy: { updatedAt: "desc" }
  });
}
function createNote({
  title,
  body,
  userId
}) {
  return prisma.note.create({
    data: {
      title,
      body,
      user: {
        connect: {
          id: userId
        }
      }
    }
  });
}
function deleteNote({ id, userId }) {
  return prisma.note.deleteMany({
    where: { id, userId }
  });
}

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/notes.tsx
var loader18 = async ({ request }) => {
  const userId = await requireUserId(request);
  const noteListItems = await getNoteListItems({ userId });
  return (0, import_remix39.json)({ noteListItems });
};
function NotesPage() {
  const data = (0, import_remix39.useLoaderData)();
  const user = useUser();
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex h-full min-h-screen flex-col"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "flex items-center justify-between bg-slate-800 p-4 text-white"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl font-bold"
  }, /* @__PURE__ */ React.createElement(import_remix39.Link, {
    to: "."
  }, "Notes")), /* @__PURE__ */ React.createElement("p", null, user.email), /* @__PURE__ */ React.createElement(import_remix39.Form, {
    action: "/logout",
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "rounded bg-slate-600 py-2 px-4 text-blue-100 hover:bg-blue-500 active:bg-blue-600"
  }, "Logout"))), /* @__PURE__ */ React.createElement("main", {
    className: "flex h-full bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-full w-80 border-r bg-gray-50"
  }, /* @__PURE__ */ React.createElement(import_remix39.Link, {
    to: "new",
    className: "block p-4 text-xl text-blue-500"
  }, "+ New Note"), /* @__PURE__ */ React.createElement("hr", null), data.noteListItems.length === 0 ? /* @__PURE__ */ React.createElement("p", {
    className: "p-4"
  }, "No notes yet") : /* @__PURE__ */ React.createElement("ol", null, data.noteListItems.map((note) => /* @__PURE__ */ React.createElement("li", {
    key: note.id
  }, /* @__PURE__ */ React.createElement(import_remix39.NavLink, {
    className: ({ isActive }) => `block border-b p-4 text-xl ${isActive ? "bg-white" : ""}`,
    to: note.id
  }, "\u{1F4DD} ", note.title))))), /* @__PURE__ */ React.createElement("div", {
    className: "flex-1 p-6"
  }, /* @__PURE__ */ React.createElement(import_remix39.Outlet, null))));
}

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/notes/$noteId.tsx
var noteId_exports = {};
__export(noteId_exports, {
  CatchBoundary: () => CatchBoundary2,
  ErrorBoundary: () => ErrorBoundary,
  action: () => action11,
  default: () => NoteDetailsPage,
  loader: () => loader19
});
init_react();
var import_remix40 = __toESM(require_remix());
var import_remix41 = __toESM(require_remix());
var import_tiny_invariant11 = __toESM(require("tiny-invariant"));
var loader19 = async ({ request, params }) => {
  const userId = await requireUserId(request);
  (0, import_tiny_invariant11.default)(params.noteId, "noteId not found");
  const note = await getNote({ userId, id: params.noteId });
  if (!note) {
    throw new Response("Not Found", { status: 404 });
  }
  return (0, import_remix41.json)({ note });
};
var action11 = async ({ request, params }) => {
  const userId = await requireUserId(request);
  (0, import_tiny_invariant11.default)(params.noteId, "noteId not found");
  await deleteNote({ userId, id: params.noteId });
  return (0, import_remix40.redirect)("/notes");
};
function NoteDetailsPage() {
  const data = (0, import_remix41.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", {
    className: "text-2xl font-bold"
  }, data.note.title), /* @__PURE__ */ React.createElement("p", {
    className: "py-6"
  }, data.note.body), /* @__PURE__ */ React.createElement("hr", {
    className: "my-4"
  }), /* @__PURE__ */ React.createElement(import_remix41.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "rounded bg-blue-500  py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
  }, "Delete")));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement("div", null, "An unexpected error occurred: ", error.message);
}
function CatchBoundary2() {
  const caught = (0, import_remix41.useCatch)();
  if (caught.status === 404) {
    return /* @__PURE__ */ React.createElement("div", null, "Note not found");
  }
  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/notes/index.tsx
var notes_exports2 = {};
__export(notes_exports2, {
  default: () => NoteIndexPage
});
init_react();
var import_remix42 = __toESM(require_remix());
function NoteIndexPage() {
  return /* @__PURE__ */ React.createElement("p", null, "No note selected. Select a note on the left, or", " ", /* @__PURE__ */ React.createElement(import_remix42.Link, {
    to: "new",
    className: "text-blue-500 underline"
  }, "create a new note."));
}

// route:/home/shemar/Desktop/Projects/Work/jaseci-webkit/builder/app/routes/notes/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action12,
  default: () => NewNotePage
});
init_react();
var React31 = __toESM(require("react"));
var import_remix43 = __toESM(require_remix());
var import_alert = __toESM(require("@reach/alert"));
var action12 = async ({ request }) => {
  const userId = await requireUserId(request);
  const formData = await request.formData();
  const title = formData.get("title");
  const body = formData.get("body");
  if (typeof title !== "string" || title.length === 0) {
    return (0, import_remix43.json)({ errors: { title: "Title is required" } }, { status: 400 });
  }
  if (typeof body !== "string" || body.length === 0) {
    return (0, import_remix43.json)({ errors: { body: "Body is required" } }, { status: 400 });
  }
  const note = await createNote({ title, body, userId });
  return (0, import_remix43.redirect)(`/notes/${note.id}`);
};
function NewNotePage() {
  var _a, _b, _c, _d, _e, _f;
  const actionData = (0, import_remix43.useActionData)();
  const titleRef = React31.useRef(null);
  const bodyRef = React31.useRef(null);
  React31.useEffect(() => {
    var _a2, _b2, _c2, _d2;
    if ((_a2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a2.title) {
      (_b2 = titleRef.current) == null ? void 0 : _b2.focus();
    } else if ((_c2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c2.body) {
      (_d2 = bodyRef.current) == null ? void 0 : _d2.focus();
    }
  }, [actionData]);
  return /* @__PURE__ */ React31.createElement(import_remix43.Form, {
    method: "post",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      width: "100%"
    }
  }, /* @__PURE__ */ React31.createElement("div", null, /* @__PURE__ */ React31.createElement("label", {
    className: "flex w-full flex-col gap-1"
  }, /* @__PURE__ */ React31.createElement("span", null, "Title: "), /* @__PURE__ */ React31.createElement("input", {
    ref: titleRef,
    name: "title",
    className: "flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose",
    "aria-invalid": ((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.title) ? true : void 0,
    "aria-errormessage": ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.title) ? "title-error" : void 0
  })), ((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.title) && /* @__PURE__ */ React31.createElement(import_alert.default, {
    className: "pt-1 text-red-700",
    id: "title=error"
  }, actionData.errors.title)), /* @__PURE__ */ React31.createElement("div", null, /* @__PURE__ */ React31.createElement("label", {
    className: "flex w-full flex-col gap-1"
  }, /* @__PURE__ */ React31.createElement("span", null, "Body: "), /* @__PURE__ */ React31.createElement("textarea", {
    ref: bodyRef,
    name: "body",
    rows: 8,
    className: "w-full flex-1 rounded-md border-2 border-blue-500 py-2 px-3 text-lg leading-6",
    "aria-invalid": ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.body) ? true : void 0,
    "aria-errormessage": ((_e = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _e.body) ? "body-error" : void 0
  })), ((_f = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _f.body) && /* @__PURE__ */ React31.createElement(import_alert.default, {
    className: "pt-1 text-red-700",
    id: "body=error"
  }, actionData.errors.body)), /* @__PURE__ */ React31.createElement("div", {
    className: "text-right"
  }, /* @__PURE__ */ React31.createElement("button", {
    type: "submit",
    className: "rounded bg-blue-500  py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
  }, "Save")));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "42798ccf", "entry": { "module": "/build/entry.client-NY6XCCR3.js", "imports": ["/build/_shared/chunk-PZ2Z7HGX.js", "/build/_shared/chunk-LBAYWC5G.js", "/build/_shared/chunk-F3MGIEVU.js", "/build/_shared/chunk-2ADOHOB6.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-INXHQXGI.js", "imports": ["/build/_shared/chunk-N7ZS7M36.js", "/build/_shared/chunk-O2ZYEK6Q.js", "/build/_shared/chunk-JOKG3OR7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": false }, "routes/__auth": { "id": "routes/__auth", "parentId": "root", "path": void 0, "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__auth-6HMC5RXJ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__auth/hello": { "id": "routes/__auth/hello", "parentId": "routes/__auth", "path": "hello", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__auth/hello-IWELDHJF.js", "imports": ["/build/_shared/chunk-JOKG3OR7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__auth/join": { "id": "routes/__auth/join", "parentId": "routes/__auth", "path": "join", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__auth/join-VEJIFQ6H.js", "imports": ["/build/_shared/chunk-SDJZD42I.js", "/build/_shared/chunk-A72LE6IZ.js", "/build/_shared/chunk-7CQ5KECU.js", "/build/_shared/chunk-JOKG3OR7.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__auth/login": { "id": "routes/__auth/login", "parentId": "routes/__auth", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__auth/login-JFXUQEVY.js", "imports": ["/build/_shared/chunk-SDJZD42I.js", "/build/_shared/chunk-A72LE6IZ.js", "/build/_shared/chunk-7CQ5KECU.js", "/build/_shared/chunk-JOKG3OR7.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__dashboard": { "id": "routes/__dashboard", "parentId": "root", "path": void 0, "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__dashboard-5SNXHMC7.js", "imports": ["/build/_shared/chunk-7CQ5KECU.js", "/build/_shared/chunk-URN3UAUS.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__dashboard/graphs/$graphId": { "id": "routes/__dashboard/graphs/$graphId", "parentId": "routes/__dashboard", "path": "graphs/:graphId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__dashboard/graphs/$graphId-A44ETQDI.js", "imports": ["/build/_shared/chunk-F6G67OHE.js", "/build/_shared/chunk-JOKG3OR7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__dashboard/graphs/add-graph": { "id": "routes/__dashboard/graphs/add-graph", "parentId": "routes/__dashboard", "path": "graphs/add-graph", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__dashboard/graphs/add-graph-Q4IFUAJB.js", "imports": ["/build/_shared/chunk-F6G67OHE.js", "/build/_shared/chunk-JOKG3OR7.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__dashboard/graphs/index": { "id": "routes/__dashboard/graphs/index", "parentId": "routes/__dashboard", "path": "graphs", "index": true, "caseSensitive": void 0, "module": "/build/routes/__dashboard/graphs/index-JZDMEYIM.js", "imports": ["/build/_shared/chunk-WZCRL3ZC.js", "/build/_shared/chunk-F6G67OHE.js", "/build/_shared/chunk-JOKG3OR7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__dashboard/projects": { "id": "routes/__dashboard/projects", "parentId": "routes/__dashboard", "path": "projects", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__dashboard/projects-TBXXGSPN.js", "imports": ["/build/_shared/chunk-N5T2WQJU.js", "/build/_shared/chunk-JOKG3OR7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__dashboard/projects.$projectId": { "id": "routes/__dashboard/projects.$projectId", "parentId": "routes/__dashboard", "path": "projects/:projectId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__dashboard/projects.$projectId-5OYR6G3S.js", "imports": ["/build/_shared/chunk-WZCRL3ZC.js", "/build/_shared/chunk-G3YSDRIQ.js", "/build/_shared/chunk-F6G67OHE.js", "/build/_shared/chunk-JOKG3OR7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__dashboard/projects.$projectId/new-site": { "id": "routes/__dashboard/projects.$projectId/new-site", "parentId": "routes/__dashboard/projects.$projectId", "path": "new-site", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__dashboard/projects.$projectId/new-site-N35ZTLC3.js", "imports": ["/build/_shared/chunk-7CQ5KECU.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__dashboard/projects.$projectId/site.$siteId.delete": { "id": "routes/__dashboard/projects.$projectId/site.$siteId.delete", "parentId": "routes/__dashboard/projects.$projectId", "path": "site/:siteId/delete", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__dashboard/projects.$projectId/site.$siteId.delete-MXBC4CYY.js", "imports": ["/build/_shared/chunk-7CQ5KECU.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__dashboard/projects/$projectId.delete": { "id": "routes/__dashboard/projects/$projectId.delete", "parentId": "routes/__dashboard/projects", "path": ":projectId/delete", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__dashboard/projects/$projectId.delete-Y5BAT6ZL.js", "imports": ["/build/_shared/chunk-7CQ5KECU.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__dashboard/projects/$projectId.edit": { "id": "routes/__dashboard/projects/$projectId.edit", "parentId": "routes/__dashboard/projects", "path": ":projectId/edit", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__dashboard/projects/$projectId.edit-SYVKJDCW.js", "imports": ["/build/_shared/chunk-7CQ5KECU.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__dashboard/projects/new-project": { "id": "routes/__dashboard/projects/new-project", "parentId": "routes/__dashboard/projects", "path": "new-project", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__dashboard/projects/new-project-IZQUSBNG.js", "imports": ["/build/_shared/chunk-7CQ5KECU.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__loadWebkit": { "id": "routes/__loadWebkit", "parentId": "root", "path": void 0, "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__loadWebkit-G4GOZP7B.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__loadWebkit/site.$slug": { "id": "routes/__loadWebkit/site.$slug", "parentId": "routes/__loadWebkit", "path": "site/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__loadWebkit/site.$slug-YR4HFGAL.js", "imports": ["/build/_shared/chunk-N7ZS7M36.js", "/build/_shared/chunk-RJQ7JR6G.js", "/build/_shared/chunk-JOKG3OR7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__loadWebkit/studio": { "id": "routes/__loadWebkit/studio", "parentId": "routes/__loadWebkit", "path": "studio", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__loadWebkit/studio-K6GIVFWO.js", "imports": ["/build/_shared/chunk-URN3UAUS.js", "/build/_shared/chunk-JOKG3OR7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__loadWebkit/studio/$projectId/editor.tab.$tabId": { "id": "routes/__loadWebkit/studio/$projectId/editor.tab.$tabId", "parentId": "routes/__loadWebkit/studio", "path": ":projectId/editor/tab/:tabId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__loadWebkit/studio/$projectId/editor.tab.$tabId-MGZ3ZSXR.js", "imports": ["/build/_shared/chunk-7CQ5KECU.js", "/build/_shared/chunk-O2ZYEK6Q.js", "/build/_shared/chunk-RJQ7JR6G.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__loadWebkit/studio/$projectId/graphs": { "id": "routes/__loadWebkit/studio/$projectId/graphs", "parentId": "routes/__loadWebkit/studio", "path": ":projectId/graphs", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__loadWebkit/studio/$projectId/graphs-PMBMNWBA.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__loadWebkit/studio/$projectId/index": { "id": "routes/__loadWebkit/studio/$projectId/index", "parentId": "routes/__loadWebkit/studio", "path": ":projectId", "index": true, "caseSensitive": void 0, "module": "/build/routes/__loadWebkit/studio/$projectId/index-RKT5DX5P.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/api/loadGraph": { "id": "routes/api/loadGraph", "parentId": "root", "path": "api/loadGraph", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/api/loadGraph-SLYB6SW5.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/api/loadGraphs": { "id": "routes/api/loadGraphs", "parentId": "root", "path": "api/loadGraphs", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/api/loadGraphs-KWMAQVQM.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/healthcheck": { "id": "routes/healthcheck", "parentId": "root", "path": "healthcheck", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/healthcheck-NUSCHTT6.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-YPNXFO7G.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-ULKT2UBN.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/notes": { "id": "routes/notes", "parentId": "root", "path": "notes", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/notes-36LUII3F.js", "imports": ["/build/_shared/chunk-A72LE6IZ.js", "/build/_shared/chunk-AGQ5TKTP.js", "/build/_shared/chunk-7CQ5KECU.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/notes/$noteId": { "id": "routes/notes/$noteId", "parentId": "routes/notes", "path": ":noteId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/notes/$noteId-2AJJRS75.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/notes/index": { "id": "routes/notes/index", "parentId": "routes/notes", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/notes/index-PXRICZ7K.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/notes/new": { "id": "routes/notes/new", "parentId": "routes/notes", "path": "new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/notes/new-VCRMZBTN.js", "imports": ["/build/_shared/chunk-O2ZYEK6Q.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-42798CCF.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/api/loadGraphs": {
    id: "routes/api/loadGraphs",
    parentId: "root",
    path: "api/loadGraphs",
    index: void 0,
    caseSensitive: void 0,
    module: loadGraphs_exports
  },
  "routes/api/loadGraph": {
    id: "routes/api/loadGraph",
    parentId: "root",
    path: "api/loadGraph",
    index: void 0,
    caseSensitive: void 0,
    module: loadGraph_exports
  },
  "routes/__loadWebkit": {
    id: "routes/__loadWebkit",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: loadWebkit_exports
  },
  "routes/__loadWebkit/site.$slug": {
    id: "routes/__loadWebkit/site.$slug",
    parentId: "routes/__loadWebkit",
    path: "site/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: site_slug_exports
  },
  "routes/__loadWebkit/studio": {
    id: "routes/__loadWebkit/studio",
    parentId: "routes/__loadWebkit",
    path: "studio",
    index: void 0,
    caseSensitive: void 0,
    module: studio_exports
  },
  "routes/__loadWebkit/studio/$projectId/editor.tab.$tabId": {
    id: "routes/__loadWebkit/studio/$projectId/editor.tab.$tabId",
    parentId: "routes/__loadWebkit/studio",
    path: ":projectId/editor/tab/:tabId",
    index: void 0,
    caseSensitive: void 0,
    module: editor_tab_tabId_exports
  },
  "routes/__loadWebkit/studio/$projectId/graphs": {
    id: "routes/__loadWebkit/studio/$projectId/graphs",
    parentId: "routes/__loadWebkit/studio",
    path: ":projectId/graphs",
    index: void 0,
    caseSensitive: void 0,
    module: graphs_exports
  },
  "routes/__loadWebkit/studio/$projectId/index": {
    id: "routes/__loadWebkit/studio/$projectId/index",
    parentId: "routes/__loadWebkit/studio",
    path: ":projectId",
    index: true,
    caseSensitive: void 0,
    module: projectId_exports
  },
  "routes/__dashboard": {
    id: "routes/__dashboard",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/__dashboard/projects.$projectId": {
    id: "routes/__dashboard/projects.$projectId",
    parentId: "routes/__dashboard",
    path: "projects/:projectId",
    index: void 0,
    caseSensitive: void 0,
    module: projects_projectId_exports
  },
  "routes/__dashboard/projects.$projectId/site.$siteId.delete": {
    id: "routes/__dashboard/projects.$projectId/site.$siteId.delete",
    parentId: "routes/__dashboard/projects.$projectId",
    path: "site/:siteId/delete",
    index: void 0,
    caseSensitive: void 0,
    module: site_siteId_delete_exports
  },
  "routes/__dashboard/projects.$projectId/new-site": {
    id: "routes/__dashboard/projects.$projectId/new-site",
    parentId: "routes/__dashboard/projects.$projectId",
    path: "new-site",
    index: void 0,
    caseSensitive: void 0,
    module: new_site_exports
  },
  "routes/__dashboard/graphs/add-graph": {
    id: "routes/__dashboard/graphs/add-graph",
    parentId: "routes/__dashboard",
    path: "graphs/add-graph",
    index: void 0,
    caseSensitive: void 0,
    module: add_graph_exports
  },
  "routes/__dashboard/graphs/$graphId": {
    id: "routes/__dashboard/graphs/$graphId",
    parentId: "routes/__dashboard",
    path: "graphs/:graphId",
    index: void 0,
    caseSensitive: void 0,
    module: graphId_exports
  },
  "routes/__dashboard/graphs/index": {
    id: "routes/__dashboard/graphs/index",
    parentId: "routes/__dashboard",
    path: "graphs",
    index: true,
    caseSensitive: void 0,
    module: graphs_exports2
  },
  "routes/__dashboard/projects": {
    id: "routes/__dashboard/projects",
    parentId: "routes/__dashboard",
    path: "projects",
    index: void 0,
    caseSensitive: void 0,
    module: projects_exports
  },
  "routes/__dashboard/projects/$projectId.delete": {
    id: "routes/__dashboard/projects/$projectId.delete",
    parentId: "routes/__dashboard/projects",
    path: ":projectId/delete",
    index: void 0,
    caseSensitive: void 0,
    module: projectId_delete_exports
  },
  "routes/__dashboard/projects/$projectId.edit": {
    id: "routes/__dashboard/projects/$projectId.edit",
    parentId: "routes/__dashboard/projects",
    path: ":projectId/edit",
    index: void 0,
    caseSensitive: void 0,
    module: projectId_edit_exports
  },
  "routes/__dashboard/projects/new-project": {
    id: "routes/__dashboard/projects/new-project",
    parentId: "routes/__dashboard/projects",
    path: "new-project",
    index: void 0,
    caseSensitive: void 0,
    module: new_project_exports
  },
  "routes/healthcheck": {
    id: "routes/healthcheck",
    parentId: "root",
    path: "healthcheck",
    index: void 0,
    caseSensitive: void 0,
    module: healthcheck_exports
  },
  "routes/__auth": {
    id: "routes/__auth",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  },
  "routes/__auth/hello": {
    id: "routes/__auth/hello",
    parentId: "routes/__auth",
    path: "hello",
    index: void 0,
    caseSensitive: void 0,
    module: hello_exports
  },
  "routes/__auth/login": {
    id: "routes/__auth/login",
    parentId: "routes/__auth",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/__auth/join": {
    id: "routes/__auth/join",
    parentId: "routes/__auth",
    path: "join",
    index: void 0,
    caseSensitive: void 0,
    module: join_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/notes": {
    id: "routes/notes",
    parentId: "root",
    path: "notes",
    index: void 0,
    caseSensitive: void 0,
    module: notes_exports
  },
  "routes/notes/$noteId": {
    id: "routes/notes/$noteId",
    parentId: "routes/notes",
    path: ":noteId",
    index: void 0,
    caseSensitive: void 0,
    module: noteId_exports
  },
  "routes/notes/index": {
    id: "routes/notes/index",
    parentId: "routes/notes",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: notes_exports2
  },
  "routes/notes/new": {
    id: "routes/notes/new",
    parentId: "routes/notes",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.3.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.3.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.3.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
