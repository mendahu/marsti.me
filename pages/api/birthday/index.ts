import { MarsDate } from "mars-date-utils";
import type { NextApiRequest, NextApiResponse } from "next";
import { generateCronExpression } from "../../../src/helpers/generateCronExpression";
import querystring from "querystring";

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

  const { earthDate, email, discordId } = req.body;

  // Reject requests without body parameter
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

  // Build options for Cron Job
  const queryOptions: AddCronJobOptions = {
    token,
    url: `${process.env.BASEURL}/api/email/`,
    cron_expression: generateCronExpression(nextMarsBirthday),
    group_id: groupId,
    timezone_from: "2",
    timezone: "UTC",
    http_method: "POST",
    http_headers: "Content-Type: application/json",
    auth_user: process.env.CRON_BASIC_USER,
    auth_pw: process.env.CRON_BASIC_PASS,
  };

  let emailSuccess: boolean | null = null;
  let discordSuccess: boolean | null = null;

  const successMsg = "Birthday reminder created successfully.";
  const failureMsg = "Birthday reminder failed.";

  // If user provided email, create an email reminder
  if (email) {
    queryOptions.cron_job_name = email;
    queryOptions.http_message_body = JSON.stringify({
      email,
    });

    const query = querystring.stringify(queryOptions);

    try {
      const resp = await fetch(`${CRON_URL}/add?${query}`);
      const data = await resp.json();
      emailSuccess = true;
      console.log(data);
    } catch (err) {
      emailSuccess = false;
      console.error(err);
    }
  }

  // If user provided Discord ID, create a discord reminder
  if (discordId) {
    queryOptions.cron_job_name = discordId;
    queryOptions.http_message_body = JSON.stringify({
      discordId,
    });

    const query = querystring.stringify(queryOptions);

    try {
      const resp = await fetch(`${CRON_URL}/add?${query}`);
      const data = await resp.json();
      discordSuccess = true;
      console.log(data);
    } catch (err) {
      discordSuccess = false;
      console.error(err);
    }
  }

  // Build Response
  const status = !emailSuccess && !discordSuccess ? 500 : 200;
  const email_reminder = emailSuccess
    ? successMsg
    : emailSuccess === null
    ? undefined
    : failureMsg;
  const discord_reminder = discordSuccess
    ? successMsg
    : discordSuccess === null
    ? undefined
    : failureMsg;

  return res.status(status).json({ status, email_reminder, discord_reminder });
};
