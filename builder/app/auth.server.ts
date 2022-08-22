import type { User } from "@prisma/client";
import { json } from "@remix-run/node";
import * as argon2 from "argon2";
import { nanoid } from "nanoid";
import { Authenticator, AuthorizationError } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import { GoogleStrategy, SocialsProvider } from "remix-auth-socials";
import { email, validate } from "remix-server-kit";
import { sessionStorage } from "~/session.server";
import { prisma } from "./db.server";

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
export let authenticator = new Authenticator<User>(sessionStorage);

authenticator.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      callbackURL: `http://localhost:3000/auth/${SocialsProvider.GOOGLE}/callback`,
    },
    async ({ profile }) => {
      if (!profile._json.email) throw json({ error: "Unable to authenticate" });
      console.log({ profile });
      // here you would find or create a user in your database
      const user = await prisma.user.findFirst({
        where: { email: profile._json.email },
      });

      if (!user) {
        // create user with a random password
        return await signUp(profile._json.email, nanoid(25));
      }

      return user;
    }
  )
);

authenticator.use(
  new FormStrategy(async ({ form }) => {
    let action = form.get("_action");
    console.log({ action });
    let providedEmail = validate(form.get("email"), email());
    let password = form.get("password");

    if (action === "login") {
      return await login(providedEmail as string, password as string);
    }

    if (action === "signup") {
      return await signUp(providedEmail as string, password as string);
    }

    throw new AuthorizationError("No action specified.");
  }),
  // each strategy has a name and can be changed to use another one
  // same strategy multiple times, especially useful for the OAuth2 strategy.
  "user-pass"
);

async function signUp(email: string, password: string) {
  const currentUserWithEmail = await prisma.user.findFirst({
    where: { email },
  });

  if (currentUserWithEmail) {
    throw new AuthorizationError("Email already in use.");
  } else {
    const passwordHash = await argon2.hash(password);
    return await prisma.user.create({
      data: { email, password: { create: { hash: passwordHash } } },
    });
  }
}

async function login(email: string, password: string) {
  // find user, if user exists return user, otherwise return null
  const user = await prisma.user.findFirst({
    where: { email },
    include: { password: true },
  });

  if (!user || !user?.password) {
    throw new AuthorizationError("Password is invalid.");
  }

  // validate user password
  const isPasswordCorrect = await argon2.verify(user.password?.hash, password);

  if (isPasswordCorrect) {
    const { password: _password, ...userWithoutPassword } = user;

    console.log({ userWithoutPassword });
    return userWithoutPassword;
  }

  throw new AuthorizationError("Password is invalid.");
}
