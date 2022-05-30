import type { CatchBoundaryComponent } from "@remix-run/react/routeModules";
import React from "react";
import type { ErrorBoundaryComponent } from "remix";
import { Outlet, useCatch } from "remix";

const PagesLayout = () => {
  return (
    <>
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
