import { LoaderFunction } from "@remix-run/node";
import { authenticator } from "~/auth.server";

export let loader: LoaderFunction = ({ request, params }) => {
  return authenticator.authenticate(params.provider || "", request, {
    successRedirect: "/projects",
    failureRedirect: "/login",
  });
};
