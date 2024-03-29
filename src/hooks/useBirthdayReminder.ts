import { AlertColor } from "@mui/material";
import { useState } from "react";
import { AlertSnackbarProps } from "../components/AlertSnackbar/AlertSnackbar";
import * as ga from "../../lib/ga";

const useBirthdayReminder = (earthDate: Date) => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: "success" as AlertColor,
    message: "Success! We'll email you on your birthday!",
  });

  const submitReminder = (event: React.FormEvent<HTMLFormElement>) => {
    setSubmitting(true);
    event.preventDefault();
    ga.event({
      action: "set_birthday_reminder",
      params: {},
    });

    fetch("/api/reminders/new", {
      method: "POST",
      body: JSON.stringify({
        email,
        earthDate: earthDate,
        offset: earthDate.getTimezoneOffset(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status !== 200) {
          throw "error";
        }
        return res.json();
      })
      .then((data) => {
        setSubmitting(false);
        setSnackbar({
          open: true,
          severity: "success",
          message: "Success! We'll email you on your birthday!",
        });
        console.log(data);
      })
      .catch((err) => {
        setSubmitting(false);
        setSnackbar({
          open: true,
          severity: "error",
          message: "Whoops, something went wrong.",
        });
        console.error(err);
      });
  };

  const closeSnackbar = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar((prev) => {
      return { ...prev, open: false };
    });
  };

  const snackbarProps: AlertSnackbarProps = {
    open: snackbar.open,
    onClose: closeSnackbar,
    severity: snackbar.severity,
    message: snackbar.message,
  };

  return {
    email,
    setEmail,
    submitReminder,
    submitting,
    snackbarProps,
  };
};

export default useBirthdayReminder;
