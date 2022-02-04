import { styled } from "../stitches.config";
import Text from "../Text/Text";

const BaseHeading = styled("h1", Text, {
  color: "$gray12",
  display: "block",

  ".dark-theme &": {
    color: "$warning11",
  },
});

const H1 = styled("h1", BaseHeading, {
  defaultVariants: { textSize: "4xl" },
});

const H2 = styled("h2", BaseHeading, {
  defaultVariants: { textSize: "3xl" },
});

const H3 = styled("h3", BaseHeading, {
  defaultVariants: { textSize: "2xl" },
});

const Heading = { H1, H2, H3 };

export default Heading;
