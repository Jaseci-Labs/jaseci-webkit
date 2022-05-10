import type { ColorScheme } from "@mantine/core";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import type { CatchBoundaryComponent } from "@remix-run/react/routeModules";
import { useState } from "react";
import type { LinksFunction, LoaderFunction, MetaFunction } from "remix";
import {
  json,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "remix";
import { PageNotFound } from "./components/PageNotFound";
import { getUser } from "./session.server";

export const links: LinksFunction = () => {
  return [
    { href: "https://fonts.googleapis.com", rel: "preconnect" },
    {
      href: "https://fonts.gstatic.com",
      rel: "preconnect",
      crossOrigin: "anonymous",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;300;400;500;600;700&display=swap",
      rel: "stylesheet",
    },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Jaseci Webkit",
  viewport: "width=device-width,initial-scale=1",
});

type LoaderData = {
  user: Awaited<ReturnType<typeof getUser>>;
};

export const loader: LoaderFunction = async ({ request }) => {
  return json<LoaderData>({
    user: await getUser(request),
  });
};

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <MantineTheme>
          <Outlet />
        </MantineTheme>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export const CatchBoundary: CatchBoundaryComponent = ({ children }) => {
  const caught = useCatch();
  return (
    <>
      <html lang="en" className="h-full">
        <head>
          <Meta />
          <Links />
        </head>
        <body>
          <MantineTheme>
            {caught.status === 404 && <PageNotFound></PageNotFound>}
          </MantineTheme>
        </body>
      </html>
    </>
  );
};

function MantineTheme({ children }: { children: React.ReactNode }) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          fontFamily: "'Readex Pro', sans-serif",
          headings: { fontFamily: "'Readex Pro', sans-serif" },
          primaryColor: "orange",
          colorScheme,
        }}
        withNormalizeCSS
        withGlobalStyles
      >
        <NotificationsProvider>{children}</NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
