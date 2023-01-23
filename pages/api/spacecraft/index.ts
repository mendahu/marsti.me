import { NextApiRequest, NextApiResponse } from "next";
import spacecraft from "../../../config/spacecraft.json";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Reject non-GET requests
  if (req.method !== "GET") {
    return res.status(405).json({
      errorCode: 405,
      errorMessage: `${req.method} request not allowed.`,
    });
  }

  return res.status(200).json(spacecraft);
};
