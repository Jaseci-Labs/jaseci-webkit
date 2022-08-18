import {
  Button,
  Checkbox,
  PasswordInput,
  Stack,
  TextInput,
} from "@mantine/core";
import * as React from "react";
import type {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useActionData, useSearchParams } from "@remix-run/react";
import { authenticator } from "~/auth.server";
import { SocialsProvider } from "remix-auth-socials";
import { BrandGoogle } from "tabler-icons-react";

interface SocialButtonProps {
  provider: SocialsProvider;
  label: string;
}

interface ActionData {
  errors?: {
    email?: string;
    password?: string;
  };
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    successRedirect: "/projects",
  });

  return json({ user });
};

export const action: ActionFunction = async ({ request, params }) => {
  const user = await authenticator.authenticate(
    params.provider || "user-pass",
    request,
    {
      successRedirect: "/projects",
    }
  );

  if (!user) {
    return json<ActionData>(
      { errors: { email: "invalid email or password" } },
      { status: 400 }
    );
  }

  return user;
};

export const meta: MetaFunction = () => {
  return {
    title: "Login",
  };
};

export const SocialButton: React.FC<SocialButtonProps> = ({
  provider,
  label,
}) => (
  <Form action={`/auth/${provider}`} method="post">
    <Button
      type="submit"
      color="blue"
      fullWidth
      leftIcon={<BrandGoogle></BrandGoogle>}
    >
      {label}
    </Button>
  </Form>
);

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

      <Stack spacing={"lg"}>
        <Button
          fullWidth
          mt="xl"
          color="orange"
          size="md"
          name="_action"
          value="login"
          type="submit"
        >
          Log in
        </Button>

        <SocialButton
          provider={SocialsProvider.GOOGLE}
          label="Login with Google"
        ></SocialButton>
      </Stack>

      <Checkbox name="remember" label="Keep me logged in" mt="xl" size="md" />
    </Form>
  );
}
