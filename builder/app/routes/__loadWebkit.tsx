import React from "react";
import type { LinksFunction } from "remix";
import { Outlet } from "remix";

export const links: LinksFunction = () => {
  return [
    { href: "http://localhost:3333/build/components.css", rel: "stylesheet" },
  ];
};

const LoadWebkitLayout = () => {
  return (
    <>
      <script
        type="module"
        src={`http://localhost:3333/build/components.esm.js`}
        async
      ></script>
      <script
        noModule
        src={`http://localhost:3333/build/components.js`}
        async
      ></script>
      <Outlet></Outlet>
    </>
  );
};

export default LoadWebkitLayout;
