import { styled } from "../stitches.config";

export const Input = styled("input", {
  all: "unset",
  boxSizing: "border-box",
  $$focusShadowColor: "$colors$brand8",
  bg: "$gray2",
  width: "100%",
  px: "$4",
  py: "$3",
  br: "$md",
  my: 0,
  mx: 0,
  color: "$brand12",
  border: "$brand6 1px solid",
  transition: "0.2s ease-in-out box-shadow",
  fontFamily: "$sans",
  // fontSize: "1.2em",

  "&:focus": {
    outline: "none",
    boxShadow: "0 0 0 2px $$focusShadowColor",
  },

  "&::placeholder": {
    color: "$brand11",
    // fontSize: '1.2em',
  },

  variants: {
    state: {
      error: {
        $$focusShadowColor: "$colors$danger8",
        border: "$danger6 1px solid",
        boxShadow: "0 0 0 2px $$focusShadowColor",
      },
    },
  },
});
