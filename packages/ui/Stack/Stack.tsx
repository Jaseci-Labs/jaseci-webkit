import { styled } from "../stitches.config";

export const Stack = styled("div", {
  $$gap: "$space$5",

  "> *": {
    mb: "$$gap !important",
  },
  "&:last-child": {
    mb: 0,
  },

  variants: {
    gap: {
      tigher: {
        $$gap: "$space$2",
      },
      tight: {
        $$gap: "$space$4",
      },
      base: {
        $$gap: "$space$5",
      },
      loose: {
        $$gap: "$space$6",
      },
      looser: {
        $$gap: "$space$8",
      },
    },
    horizontal: {
      true: {
        display: "flex",
        "> *": {
          mr: "$$gap",
        },
        "&:last-child": {
          mr: 0,
        },
      },
    },
  },
});

export default Stack;
