import { Button } from "@mantine/core";
import type { FormProps } from "remix-forms";
import { Form as RemixForm } from "remix-forms";
import type { SomeZodObject } from "zod";
import Input from "./fields/Input";

export default function Form<Schema extends SomeZodObject>(
  props: FormProps<Schema>
) {
  return (
    <RemixForm<Schema>
      //   className={}
      //   fieldComponent={}
      //   labelComponent={}
      inputComponent={Input as any}
      //   multilineComponent={}
      //   selectComponent={}
      //   checkboxComponent={}
      //   checkboxWrapperComponent={}
      buttonComponent={Button as any}
      //   fieldErrorsComponent={}
      //   globalErrorsComponent={}
      //   errorComponent={}
      {...props}
    />
  );
}
