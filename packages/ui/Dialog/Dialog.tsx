import * as RadixDialog from "@radix-ui/react-dialog";
import { styled } from "../stitches.config";

export const Dialog = RadixDialog.Root;
export const DialogTrigger = RadixDialog.Trigger;

export const DialogOverlay = styled(RadixDialog.Overlay, {
  backgroundColor: "$brandA9",
  position: "fixed",
  width: "100vw",
  height: "100vh",
});

export const DialogTitle = styled(RadixDialog.Title, {
  margin: 0,
  fontWeight: 500,
  color: "$gray12",
  fontSize: 17,
});

export const DialogContent = styled(RadixDialog.Content, {
  backgroundColor: "$brand3",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  br: "$md",
  maxWidth: "500px",
  maxHeight: "85vh",
  px: "$10",
  py: "$4",
  border: "$gray7 1px solid",

  "&:focus": {
    outline: "none",
  },
});

export const DialogDescription = RadixDialog.Description;
export const DialogClose = RadixDialog.Close;
