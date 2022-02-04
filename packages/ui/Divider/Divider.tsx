import * as RadixSeparator from "@radix-ui/react-separator";
import { styled } from "../stitches.config";

const Divider = styled(RadixSeparator.Root, {
  backgroundColor: "$brand7",
  "&[data-orientation=horizontal]": { height: 1, width: "100%" },
  "&[data-orientation=vertical]": { height: "100%", width: 1 },
});

export default Divider;
