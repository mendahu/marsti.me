import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({
      errorCode: 405,
      errorMessage: `${req.method} request not allowed.`,
    });
  }

  const transporter = nodemailer.createTransport({
    host: "",
    port: 587,
    secure: false,
    auth: {
      user: "",
      pass: "",
    },
  });

  transporter
    .sendMail({
      from: "Marsti.me <test@test.com>",
      to: "test@test.com",
      subject: "Hello Mars",
      text: "It is your birthday.",
      html: "<u>It is your birthday</u>",
    })
    .then(() => {
      console.log("email sent");
      res.status(200).json({ status: 200, message: "Email sent." });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ status: 500, message: err });
    });
};
