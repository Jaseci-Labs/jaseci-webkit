import type { CatchBoundaryComponent } from "@remix-run/react/routeModules";
import React from "react";
import type { ErrorBoundaryComponent, LinksFunction } from "remix";
import { Outlet, useCatch } from "remix";

export const links: LinksFunction = () => {
  return [
    {
      href:
        process.env.NODE_ENV === "production"
          ? "https://jaseci-webkit.pages.dev/components/components.css"
          : "http://localhost:3333/build/components.css",
      rel: "stylesheet",
    },
  ];
};

const PagesLayout = () => {
  return (
    <>
      <script
        type="module"
        src={
          process.env.NODE_ENV === "production"
            ? `https://jaseci-webkit.pages.dev/components/components.esm.js`
            : `http://localhost:3333/build/components.esm.js`
        }
        async
      ></script>
      <script
        noModule
        src={
          process.env.NODE_ENV === "production"
            ? `https://jaseci-webkit.pages.dev/components/components.js`
            : `http://localhost:3333/build/components.js`
        }
        async
      ></script>
      <Outlet></Outlet>
    </>
  );
};

export const ErrorBoundary: ErrorBoundaryComponent = ({ children, error }) => {
  return (
    <>
      {children}
      <p>An error occurred</p>
      {JSON.stringify(error)}
    </>
  );
};

export const CatchBoundary: CatchBoundaryComponent = ({ children }) => {
  const caught = useCatch();
  return (
    <>
      {children}
      <p>An error occurred</p>
      {JSON.stringify(caught)}
    </>
  );
};

export default PagesLayout;
