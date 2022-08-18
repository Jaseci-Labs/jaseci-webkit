import { Paper } from "@mantine/core";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { Header } from "~/components/Header";
import type { User } from "~/models/user.server";
import { authenticator } from "~/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  return json({ user });
};

export type DashboardOutletContext = {
  user: User;
};

const DashboardLayout = () => {
  const { user } = useLoaderData<DashboardOutletContext>();

  return (
    <>
      <Header links={[{ label: "Projects", to: "/projects" }]}></Header>
      <Paper px={200}>
        <Outlet context={{ user }}></Outlet>
      </Paper>
    </>
  );
};

export default DashboardLayout;
