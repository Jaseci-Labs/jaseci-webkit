import { Button, Checkbox, PasswordInput, TextInput } from "@mantine/core";
import * as React from "react";
import type { ActionFunction, LoaderFunction, MetaFunction } from "remix";
import { Form, json, redirect, useActionData, useSearchParams } from "remix";
import { verifyLogin } from "~/models/user.server";
import { createUserSession, getUserId } from "~/session.server";
import { validateEmail } from "~/utils";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId) return redirect("/");
  return json({});
};

interface ActionData {
  errors?: {
    email?: string;
    password?: string;
  };
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const redirectTo = formData.get("redirectTo");
  const remember = formData.get("remember");

  if (!validateEmail(email)) {
    return json<ActionData>(
      { errors: { email: "Email is invalid" } },
      { status: 400 }
    );
  }

  if (typeof password !== "string") {
    return json<ActionData>(
      { errors: { password: "Password is required" } },
      { status: 400 }
    );
  }

  if (password.length < 8) {
    return json<ActionData>(
      { errors: { password: "Password is too short" } },
      { status: 400 }
    );
  }

  const user = await verifyLogin(email, password);

  if (!user) {
    return json<ActionData>(
      { errors: { email: "Invalid email or password" } },
      { status: 400 }
    );
  }

  return createUserSession({
    request,
    userId: user.id,
    remember: remember === "on" ? true : false,
    redirectTo: typeof redirectTo === "string" ? redirectTo : "/projects",
  });
};

export const meta: MetaFunction = () => {
  return {
    title: "Login",
  };
};

export default function LoginPage() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/projects";
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
      <div>
        <TextInput
          label="Email address"
          placeholder="user@jaseci.org"
          ref={emailRef}
          id="email"
          required
          autoFocus={true}
          name="email"
          type="email"
          color="orange"
          autoComplete="email"
          aria-invalid={actionData?.errors?.email ? true : undefined}
          aria-describedby="email-error"
          size="md"
        />
        {actionData?.errors?.email && (
          <div className="pt-1 text-red-700" id="email-error">
            {actionData.errors.email}
          </div>
        )}
      </div>

      <PasswordInput
        label="Password"
        placeholder="Your Password"
        ref={passwordRef}
        name="password"
        autoComplete="new-password"
        aria-invalid={actionData?.errors?.password ? true : undefined}
        aria-describedby="password-error"
        size="md"
      />
      {actionData?.errors?.password && (
        <div className="pt-1 text-red-700" id="password-error">
          {actionData.errors.password}
        </div>
      )}

      <input type="hidden" name="redirectTo" value={redirectTo} />

      <Button fullWidth mt="xl" color="orange" size="md" type="submit">
        Log in
      </Button>

      <Checkbox name="remember" label="Keep me logged in" mt="xl" size="md" />
    </Form>
  );
}
