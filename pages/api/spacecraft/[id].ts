import { MarsDate } from "mars-date-utils";
import { NextApiRequest, NextApiResponse } from "next";
import spacecraft from "../../../config/spacecraft.json";
import { formatLs } from "../../../src/helpers/formatLs";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Reject non-GET requests
  if (req.method !== "GET") {
    return res.status(405).json({
      errorCode: 405,
      errorMessage: `${req.method} request not allowed.`,
    });
  }

  const { id } = req.query;

  const vehicle = spacecraft.find((s) => s.id === id);

  const time = new MarsDate(new Date());

  const response = {
    spacecraft: vehicle,
    currentSol: Math.floor(
      new MarsDate(new Date(vehicle.epoch)).getAgeInSols()
    ),
    currentLs: formatLs(time.getLs()),
    currentTime: time.getLMST(vehicle.coords.lon),
    currentMY: time.getCalendarYear(),
  };

  return res.status(200).json(response);
};
