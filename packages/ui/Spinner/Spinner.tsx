import BeatLoader from "react-spinners/BeatLoader";
import { styled } from "../stitches.config";

export const SpinnerWrapper = styled("span", {
  display: "block",
  margin: "0 auto",
  span: {
    span: {
      bg: "$brand9",
    },
  },
});

const Spinner = () => (
  <SpinnerWrapper>
    <BeatLoader />
  </SpinnerWrapper>
);

export default Spinner;
