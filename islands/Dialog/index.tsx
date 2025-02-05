import { FunctionalComponent } from "preact";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import TButton from "@/islands/Button/index.tsx";
import T from "@/lib/Translate.ts";

interface DialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  subContent?: string;
  onClose?: () => void;
  onConfirm?: () => void;
}

const DialogComponent: FunctionalComponent<DialogProps> = (
  { open, setOpen, title, subContent, onClose, onConfirm, children },
) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {subContent && <DialogContentText>{subContent}</DialogContentText>}
        <div class="mt-4">
          {children}
        </div>
      </DialogContent>
      <DialogActions>
        <TButton
          variant="outlined"
          onClick={() => {
            setOpen(false);
          }}
        >
          {T("Cancel")}
        </TButton>
        <TButton variant="contain" type="submit">{T("Confirm")}</TButton>
      </DialogActions>
    </Dialog>
  );
};

export default DialogComponent;
