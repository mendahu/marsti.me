import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import auth from "basic-auth";
import compare from "tsscmp";

export default (req: NextApiRequest, res: NextApiResponse) => {
  // Reject non-POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      errorCode: 405,
      errorMessage: `${req.method} request not allowed.`,
    });
  }

  // Verify Credentials
  const credentials = auth(req);

  function check(name, pass) {
    let valid = true;

    // Simple method to prevent short-circut and use timing-safe compare
    valid = compare(name, process.env.CRON_BASIC_USER) && valid;
    valid = compare(pass, process.env.CRON_BASIC_PASS) && valid;

    return valid;
  }

  if (!credentials || !check(credentials.name, credentials.pass)) {
    return res.status(403).json({ status: 403, message: "Access Denied" });
  }

  // Creates Nodemailer transporter service
  const host = process.env.EMAIL_SERVER;
  const port = Number(process.env.EMAIL_PORT);
  const user = process.env.EMAIL_FROM;
  const pass = process.env.EMAIL_PASS;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: true,
    auth: {
      user,
      pass,
    },
  });

  // Send Email
  const { email } = req.body;
  const fromEmail = user;

  return transporter
    .sendMail({
      from: `Marsti.me <${fromEmail}>`,
      to: email,
      subject: "It's your Martian Birthday!",
      text: "It is your birthday.",
      html: "<u>It is your birthday</u>",
    })
    .then(() => {
      res.status(200).json({ status: 200, message: "Email sent." });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ status: 500, message: err });
    });
};
