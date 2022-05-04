import type { LoaderFunction } from "remix";
import { redirect } from "remix";

export const loader: LoaderFunction = () => {
  return redirect("/projects");
};

export default function Index() {
  return <></>;
}
