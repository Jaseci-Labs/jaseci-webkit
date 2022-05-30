import { TextInput } from "@mantine/core";
import type { ComponentProps } from "react";
import React from "react";

const Input = React.forwardRef<
  HTMLInputElement,
  JSX.IntrinsicElements["input"] & ComponentProps<typeof TextInput>
>(({ type, className, ...props }, ref) => (
  <TextInput wrapperProps={{ ref }} type={type || "text"} {...props} />
));

Input.displayName = "Input";

export default Input;
