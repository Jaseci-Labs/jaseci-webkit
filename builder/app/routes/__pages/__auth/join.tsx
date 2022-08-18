import { Button, PasswordInput, Stack, TextInput } from "@mantine/core";
import * as React from "react";
import type {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData, useSearchParams } from "@remix-run/react";
import { createUser, getUserByEmail } from "~/models/user.server";
import { createUserSession, getUserId } from "~/session.server";
import { validateEmail } from "~/utils";
import { authenticator } from "~/auth.server";
import { SocialButton } from "./login";
import { SocialsProvider } from "remix-auth-socials";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId) return redirect("/");
  return json({});
};

interface ActionData {
  errors: {
    email?: string;
    password?: string;
  };
}
export const action: ActionFunction = async ({ request }) => {
  try {
    return authenticator.authenticate("user-pass", request, {
      successRedirect: "/projects",
    });
  } catch (err) {
    console.log(err);
  }

  return null;
};

export const meta: MetaFunction = () => {
  return {
    title: "Sign Up",
  };
};

export default function Join() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? undefined;
  const actionData = useActionData() as ActionData;
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (actionData?.errors?.email) {
      emailRef.current?.focus();
    } else if (actionData?.errors?.password) {
      passwordRef.current?.focus();
    }
  }, [actionData]);

  return (
    <Form method="post" className="space-y-6">
      <TextInput
        label="Email"
        ref={emailRef}
        placeholder="admin@jaseci.org"
        id="email"
        required
        size="md"
        autoFocus={true}
        name="email"
        type="email"
        autoComplete="email"
        aria-invalid={actionData?.errors?.email ? true : undefined}
        aria-describedby="email-error"
        className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
      />
      {actionData?.errors?.email && (
        <div className="pt-1 text-red-700" id="email-error">
          {actionData.errors.email}
        </div>
      )}

      <PasswordInput
        id="password"
        label="Password"
        size="md"
        ref={passwordRef}
        name="password"
        placeholder="Enter a password"
        type="password"
        autoComplete="new-password"
        aria-invalid={actionData?.errors?.password ? true : undefined}
        aria-describedby="password-error"
        className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
      />
      {actionData?.errors?.password && (
        <div className="pt-1 text-red-700" id="password-error">
          {actionData.errors.password}
        </div>
      )}

      <input type="hidden" name="redirectTo" value={redirectTo} />

      <Stack spacing={"lg"}>
        <Button
          name="_action"
          value="signup"
          fullWidth
          mt="xl"
          size="md"
          type="submit"
        >
          Create Account
        </Button>

        <SocialButton
          provider={SocialsProvider.GOOGLE}
          label="Create Account with Google"
        ></SocialButton>
      </Stack>
    </Form>
  );
}
