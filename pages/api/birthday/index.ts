import { MarsDate } from "mars-date-utils";
import type { NextApiRequest, NextApiResponse } from "next";
import { generateCronExpression } from "../../../src/helpers/generateCronExpression";
import querystring from "querystring";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const token = process.env.EASY_CRON_API_TOKEN;
  const CRON_URL = process.env.EASY_CRON_API_URL;
  const groupId = process.env.CRON_GROUP_ID;

  // Temporary GET catcher to check list
  // REMOVE for PRODUCTION
  if (req.method === "GET") {
    const query = querystring.stringify({
      token,
      group_id: groupId,
    });

    try {
      const resp = await fetch(`${CRON_URL}/list?${query}`);
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
  const { earthDate, email, discordId } = req.body;

  if (!earthDate || (!email && !discordId)) {
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

  type WebHookCronDataOption =
    | "CRON_JOB_ID"
    | "CRON_JOB_NAME"
    | "CRON_JOB_URL"
    | "CRON_JOB_HTTP_STATUS_CODE"
    | "CRON_JOB_EXECUTION_STATUS"
    | "CRON_JOB_EXECUTION_ERROR";

  type AddCronJobOptions = {
    token: string;
    url: string;
    cron_expression: string;
    timezone_from?: "1" | "2";
    timezone?: string;
    cron_job_name?: string;
    description?: string;
    auth_user?: string;
    auth_pw?: string;
    custom_timeout?: string;
    criterion?: "1" | "2" | "3";
    success_regexp?: string;
    failure_regexp?: string;
    email_me?: "0" | "1";
    sensitivity?: "1" | "2" | "3" | "4" | "5";
    group_id?: string;
    http_method?: string;
    http_headers?: string;
    http_message_body?: string;
    send_slack?: "0" | "1" | "2";
    slack_sensitivity?: "1" | "2" | "3" | "4" | "5";
    slack_url?: string;
    wh?: "0" | "1" | "2";
    wh_http_method?: string;
    "wh_data[]"?: Array<WebHookCronDataOption>;
  };

  const queryObject: AddCronJobOptions = {
    token,
    url,
    cron_expression: cronExpression,
    group_id: groupId,
    timezone_from: "2",
    timezone: "UTC",
    http_method: "POST",
  };

  if (email) {
    queryObject.cron_job_name = email;
    queryObject.http_message_body = JSON.stringify({
      email,
    });

    const query = querystring.stringify(queryObject);

    try {
      const resp = await fetch(`${CRON_URL}/add?${query}`);
      const data = await resp.json();
      console.log(data);
    } catch (err) {
      return res.status(500).json({ error: 500, message: err });
    }
  }

  if (discordId) {
    queryObject.cron_job_name = discordId;
    queryObject.http_message_body = JSON.stringify({
      discordId,
    });

    const query = querystring.stringify(queryObject);

    try {
      const resp = await fetch(`${CRON_URL}/add?${query}`);
      const data = await resp.json();
      console.log(data);
    } catch (err) {
      return res.status(500).json({ error: 500, message: err });
    }
  }

  return res
    .status(200)
    .json({ status: 200, message: "Birthday request received" });
};
