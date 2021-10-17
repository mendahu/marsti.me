import { Alert, AlertColor, Snackbar } from "@mui/material";
import { SyntheticEvent } from "react";

export type AlertSnackbarProps = {
  open: boolean;
  onClose: (event: SyntheticEvent<Element, Event>) => void;
  severity: AlertColor;
  message: string;
};

export default function AlertSnackbar(props: AlertSnackbarProps) {
  return (
    <Snackbar
      open={props.open}
      autoHideDuration={6000}
      onClose={props.onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert
        onClose={props.onClose}
        severity={props.severity}
        sx={{ width: "90%" }}
        variant="filled"
      >
        {props.message}
      </Alert>
    </Snackbar>
  );
}
