import { ColorScheme } from "@mantine/core";
import type { CatchBoundaryComponent } from "@remix-run/react/routeModules";
import { useEffect, useState } from "react";
import type {
  ErrorBoundaryComponent,
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";

import { Outlet, useCatch, useTransition } from "@remix-run/react";

import NProgress from "nprogress";
import nProgressStyles from "nprogress/nprogress.css";
import { PageNotFound } from "./components/PageNotFound";
import { getUser } from "./session.server";
import { Document } from "./components/Document";

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
    { rel: "stylesheet", href: nProgressStyles },
    {
      href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap",
      rel: "stylesheet",
    },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Jaseci Studio",
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
  const transition = useTransition();
  useEffect(() => {
    // when the state is idle then we can to complete the progress bar
    if (transition.state === "idle") NProgress.done();
    // and when it's something else it means it's either submitting a form or
    // waiting for the loaders of the next location so we start it
    else NProgress.start();
  }, [transition.state]);

  return (
    <MantineTheme>
      <Outlet />
    </MantineTheme>
  );
}

export const ErrorBoundary: ErrorBoundaryComponent = ({ children, error }) => {
  return (
    <>
      <MantineTheme>{children}</MantineTheme>
    </>
  );
};

export const CatchBoundary: CatchBoundaryComponent = ({ children }) => {
  const caught = useCatch();
  return (
    <>
      <MantineTheme>
        {caught.status === 404 && <PageNotFound></PageNotFound>}
      </MantineTheme>
    </>
  );
};

function MantineTheme({ children }: { children: React.ReactNode }) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return <Document>{children}</Document>;
}
