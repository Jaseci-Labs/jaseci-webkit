import { styled } from "../stitches.config";

const Card = styled("div", {
  bg: "$gray1",
  boxSizing: "border-box",
  br: "$lg",
  py: "$8",
  px: "$12",
  color: "#000",

  defaultVariants: { outline: true },

  variants: {
    outline: {
      true: {
        border: "$gray6 1px solid",
      },
    },
    shadow: {
      true: {
        border: "none",
        boxShadow:
          "rgba(0, 0, 0, 0.15) 0px 1px 4px 0px, rgba(0, 0, 0, 0.02) 0px 0px 2px 1px",
      },
    },
  },

  ".dark-theme &": {
    color: "#fff",
  },
});

export const CardHeading = styled("h3", {
  fontFamily: "$sans",
});

export default Card;
