import { styled } from "../stitches.config";

const TextContent = styled("p", {
  display: "inline-block",
  fontFamily: "$sans",
  my: 0,
  py: 0,

  defaultVariants: { textSize: "base" },

  variants: {
    color: {
      primary: {
        color: "$brand11",
      },
      warning: {
        color: "$warning11",
      },
      danger: {
        color: "$danger11",
      },
      info: {
        color: "$info11",
      },
      success: {
        color: "$success11",
      },
    },
    block: {
      true: {
        display: "block",
      },
    },
    uppercase: {
      true: {
        textTransform: "uppercase",
      },
    },
    bold: {
      true: {
        fontWeight: "bold",
      },
    },
    medium: {
      true: {
        fontWeight: 500,
      },
    },
    align: {
      center: {
        textAlign: "center",
      },
      end: {
        textAlign: "end",
      },
      start: {
        textAlign: "start",
      },
      right: {
        textAlign: "right",
      },
      left: {
        textAlign: "left",
      },
    },
    textSize: {
      xs: {
        fontSize: "0.75rem",
        lineHeight: "1rem",
      },
      sm: {
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
      },
      base: {
        fontSize: "1rem",
        lineHeight: "1.5rem",
      },
      lg: {
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
      },
      xl: {
        fontSize: "1.25rem",
        lineHeight: "1.75rem",
      },
      "2xl": {
        fontSize: "1.5rem",
        lineHeight: "2rem",
      },
      "3xl": {
        fontSize: "1.875rem",
        lineHeight: "2.25rem",
      },
      "4xl": {
        fontSize: "2.25rem",
        lineHeight: "2.5rem",
      },
      "5xl": {
        fontsize: "3rem",
        lineHeight: 1,
      },
      "6xl": {
        fontSize: "3.75rem",
        lineHeight: 1,
      },
      "7xl": {
        fontSize: "4.5rem",
        lineHeight: 1,
      },
      "8xl": {
        fontSize: "6rem",
        lineHeight: 1,
      },
    },
  },
});

export default TextContent;
