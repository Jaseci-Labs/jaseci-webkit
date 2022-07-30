import { Button, Checkbox, PasswordInput, TextInput } from "@mantine/core";
import React from "react";
import { useLocation } from "@remix-run/react";

const HelloPage = () => {
  const location = useLocation();
  return (
    <>
      <TextInput
        label="Email address"
        placeholder="hello@gmail.com"
        size="md"
      />
      <PasswordInput
        label="Password"
        placeholder="Your password"
        mt="md"
        size="md"
      />
      <Checkbox label="Keep me logged in" mt="xl" size="md" />
      <Button fullWidth mt="xl" size="md">
        Login
      </Button>
    </>
  );
};

export default HelloPage;
