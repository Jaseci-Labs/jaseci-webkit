import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";

export const loader: LoaderFunction = () => {
  return redirect("/projects");
};

export default function Index() {
  return <></>;
}
