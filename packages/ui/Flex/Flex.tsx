import { styled } from "../stitches.config";

const Flex = styled("div", {
  display: "flex",

  variants: {
    axis: {
      row: {
        flexDirection: "row",
      },
      "row-reverse": {
        flexDirection: "row-reverse",
      },
      column: {
        flexDirection: "column",
      },
      "column-reverse": {
        flexDirection: "column-reverse",
      },
    },

    justify: {
      center: {
        justifyContent: "center",
      },
      left: {
        justifyContent: "left",
      },
      right: {
        justifyContent: "right",
      },
      start: {
        justifyContent: "start",
      },
      end: {
        justifyContent: "end",
      },
      stretch: {
        justifyContent: "end",
      },
      "space-between": {
        justifyContent: "space-between",
      },
      "space-evenly": {
        justifyContent: "space-evenly",
      },
      "space-around": {
        justifyContent: "space-around",
      },
    },
    align: {
      center: {
        alignItems: "center",
      },
      baseline: {
        alignItems: "baseline",
      },
      end: {
        alignItems: "end",
      },
      start: {
        alignItems: "start",
      },
      stretch: {
        alignItems: "stretch",
      },
    },
  },
});

export default Flex;
