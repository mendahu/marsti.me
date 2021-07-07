import { useEffect, useState } from "react";
import { Spacecraft } from "../../pages";

const mslUrl =
  "https://mars.nasa.gov/mmgis-maps/MSL/Layers/json/MSL_waypoints_current.json";
const m20Url =
  "https://mars.nasa.gov/mmgis-maps/M20/Layers/json/M20_waypoints_current.json";

export const useMissionCoords = (spacecraft: Spacecraft[]) => {
  const defaultState = {};

  spacecraft.forEach((vehicle) => {
    const {
      id,
      coords: { lat, lon },
    } = vehicle;

    defaultState[id] = {
      lat,
      lon,
    };
  });

  const [lons, setLons] = useState(defaultState);

  useEffect(() => {
    fetch(mslUrl)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        const [lonE, lat] = res.features[0].geometry.coordinates;
        const lonW = 360 - lonE;
        setLons((prev) => ({ ...prev, msl: { lat, lon: lonW } }));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    fetch(m20Url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        const [lonE, lat] = res.features[0].geometry.coordinates;
        const lonW = 360 - lonE;
        setLons((prev) => ({ ...prev, m20: { lat, lon: lonW } }));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return lons;
};
