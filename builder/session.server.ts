import { createCookieSessionStorage } from "@remix-run/node";
import { validate } from "remix-server-kit";
import { string } from "superstruct";

validate(process.env.SESSION_SECRET, string(), "sessionSecret");

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET as string],
    secure: process.env.NODE_ENV === "production",
  },
});

export let { getSession, commitSession, destroySession } = sessionStorage;
