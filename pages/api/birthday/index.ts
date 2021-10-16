import { MarsDate } from "mars-date-utils";
import type { NextApiRequest, NextApiResponse } from "next";
import { generateCronExpression } from "../../../src/helpers/generateCronExpression";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const TOKEN = process.env.EASY_CRON_API_TOKEN;
  const CRON_URL = process.env.EASY_CRON_API_URL;
  const GROUP_ID = process.env.CRON_GROUP_ID;

  // Temporary GET catcher to check list
  // REMOVE for PRODUCTION
  if (req.method === "GET") {
    try {
      const resp = await fetch(
        `${CRON_URL}/list?token=${TOKEN}&group_id=${GROUP_ID}`
      );
      const data = await resp.json();
      return res.status(200).json({ status: 200, data });
    } catch (err) {
      return res.status(500).json({ error: 500, err });
    }
  }

  // Reject non-POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      errorCode: 405,
      errorMessage: `${req.method} request not allowed.`,
    });
  }

  // Reject requests without body parameter
  const { earthDate, email } = req.body;

  if (!earthDate || !email) {
    return res.status(400).json({
      errorCode: 400,
      errorMessage: `Missing body content.`,
    });
  }

  // Create next Birthday
  const earthBirthday = new Date(earthDate);
  const marsDate = new MarsDate(earthBirthday);
  const nextMarsBirthday = marsDate.getNextAnniversary();
  const cronExpression = generateCronExpression(nextMarsBirthday);
  const url = `${process.env.BASEURL}/api/email/`;

  try {
    const resp = await fetch(
      `${CRON_URL}/add?token=${TOKEN}&url=${url}&cron_expression=${cronExpression}&group_id=${GROUP_ID}&timezone_from=2&timezone=UTC&cron_job_name=${email}&http_method=POST&http_message_body={"email":"${email}"}`
    );
    const data = await resp.json();
    console.log(data);
    return res
      .status(200)
      .json({ status: 200, message: "Birthday request received" });
  } catch (err) {
    return res.status(500).json({ error: 500, message: err });
  }
};