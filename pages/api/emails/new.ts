import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import auth from "basic-auth";
import fs from "fs";
import tsp from "templatestringparser";
import checkCredentials from "../../../src/helpers/checkCredentials";

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

  if (
    !credentials.name ||
    !credentials.pass ||
    !checkCredentials(credentials.name, credentials.pass)
  ) {
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

  // Fetch email template variables
  const { email, templateVars } = req.body;
  const fromEmail = user;

  // Fetch Email Template and hydrate with template variables
  const fetchHTMLTemplate = new Promise((resolve, reject) => {
    fs.readFile("public/birthday-email.html", "utf8", (err, template) => {
      if (err) {
        reject(err);
      } else {
        resolve(template);
      }
    });
  });

  // Hydrate Template and Send Email
  return fetchHTMLTemplate
    .then((template) => {
      const injectedTemplate = tsp(template, JSON.parse(templateVars));

      return transporter.sendMail({
        from: `Marsti.me <${fromEmail}>`,
        to: email,
        subject: "It's your Martian Birthday!",
        text: "It is your birthday.",
        html: injectedTemplate,
      });
    })
    .then(() => {
      res.status(200).json({ status: 200, message: "Email sent." });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ status: 500, message: err });
    });
};
