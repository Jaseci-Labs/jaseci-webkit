import { keyframes, styled } from "../stitches.config";

const loadingSpinner = keyframes({
  from: {
    transform: "rotate(0turn)",
  },
  to: {
    transform: "rotate(1turn)",
  },
});

const Button = styled("button", {
  position: "relative",
  display: "inline-block",
  alignItems: "center",
  fontFamily: "$sans",
  py: "$2-5",
  outline: "none",
  br: "$md",
  fontSize: "$md",
  fontWeight: "bolder",
  lineHeight: 1,
  boxShadow: "none",
  color: "$$textColor",
  textAlign: "center",

  "&:hover": {
    cursor: "pointer",
    bg: "$$hoverBackground",
    border: "$$hoverBorderColor 1px solid",
  },

  "&:active": {
    bg: "$$activeBackground",
  },

  "&:focus": {
    boxShadow: "0 0 0 4px $$focusShadowColor",
    border: "transparent 1px solid",
  },

  "&:disabled": {
    cursor: "not-allowed",
  },

  defaultVariants: {
    palette: "primary",
    size: "normal",
  },

  compoundVariants: [
    // solid and palette
    {
      solid: true,
      palette: "primary",
      css: {
        $$focusShadowColor: "$colors$brand8",
        $$hoverBackground: "$colors$brand10",
        $$hoverBorderColor: "$colors$brand10",
        $$activeBackground: "$colors$brand11",
        $$textColor: "#fff",

        bg: "$brand9",
        border: "transparent 1px solid",
      },
    },
    {
      solid: true,
      palette: "success",
      css: {
        $$focusShadowColor: "$colors$success8",
        $$hoverBackground: "$colors$success10",
        $$hoverBorderColor: "$colors$success10",
        $$activeBackground: "$colors$success11",
        $$textColor: "#fff",

        bg: "$success9",
        border: "transparent 1px solid",
      },
    },
    {
      solid: true,
      palette: "info",
      css: {
        $$focusShadowColor: "$colors$info8",
        $$hoverBackground: "$colors$info10",
        $$hoverBorderColor: "$colors$info10",
        $$activeBackground: "$colors$info11",
        $$textColor: "#fff",

        bg: "$info9",
        border: "transparent 1px solid",
      },
    },
    {
      solid: true,
      palette: "warning",
      css: {
        $$focusShadowColor: "$colors$warning8",
        $$hoverBackground: "$colors$warning10",
        $$hoverBorderColor: "$colors$warning10",
        $$activeBackground: "$colors$warning11",
        $$textColor: "#000",

        bg: "$warning9",
        border: "transparent 1px solid",
      },
    },
    {
      solid: true,
      palette: "danger",
      css: {
        $$focusShadowColor: "$colors$danger8",
        $$hoverBackground: "$colors$danger10",
        $$hoverBorderColor: "$colors$danger10",
        $$activeBackground: "$colors$danger11",
        $$textColor: "#fff",

        bg: "$danger9",
        border: "transparent 1px solid",
      },
    },
  ],

  variants: {
    size: {
      normal: {
        fontSize: "normal",
        px: "$3",
      },
      sm: {
        fontSize: "$xs",
        px: "$2",
        letterSpacing: "1.25px",
      },
      md: {
        fontSize: "$md",
        px: "$2",
        letterSpacing: "1.25px",
      },
      lg: {
        fontSize: "$lg",
        lineHeight: "1.75rem",
        px: "$5",
      },
    },

    solid: {
      true: {},
    },

    full: {
      true: {
        width: "100%",
      },
    },

    palette: {
      primary: {
        $$focusShadowColor: "$colors$brand7",
        $$hoverBackground: "$colors$brand5",
        $$hoverBorderColor: "$colors$brand8",
        $$activeBackground: "$colors$brand6",
        $$textColor: "$colors$brand11",

        bg: "$brand4",
        border: "$brand6 1px solid",
      },
      warning: {
        $$focusShadowColor: "$colors$warning7",
        $$hoverBackground: "$colors$warning5",
        $$hoverBorderColor: "$colors$warning8",
        $$activeBackground: "$colors$warning6",
        $$textColor: "$colors$warning11",

        bg: "$warning4",
        border: "$warning6 1px solid",
      },
      success: {
        $$focusShadowColor: "$colors$success7",
        $$hoverBackground: "$colors$success5",
        $$hoverBorderColor: "$colors$success8",
        $$activeBackground: "$colors$success6",
        $$textColor: "$colors$success11",

        bg: "$success4",
        border: "$success6 1px solid",
      },
      info: {
        $$focusShadowColor: "$colors$info7",
        $$hoverBackground: "$colors$info5",
        $$hoverBorderColor: "$colors$info8",
        $$activeBackground: "$colors$info6",
        $$textColor: "$colors$info11",

        bg: "$info4",
        border: "$info6 1px solid",
      },
      danger: {
        $$focusShadowColor: "$colors$danger7",
        $$hoverBackground: "$colors$danger5",
        $$hoverBorderColor: "$colors$danger8",
        $$activeBackground: "$colors$danger6",
        $$textColor: "$colors$danger11",

        bg: "$danger4",
        border: "$danger6 1px solid",
      },
    },
    loading: {
      true: {
        color: "transparent",
        $$spinnerColor: "$$textColor",

        "&::after": {
          content: "",
          position: "absolute",
          width: "16px",
          height: "16px",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          margin: "auto",
          border: "4px solid transparent",
          borderTopColor: "$$spinnerColor",
          borderRadius: "50%",
          animation: `${loadingSpinner} 1s ease infinite`,
        },
      },
    },
  },
});

export default Button;
