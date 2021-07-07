import { useEffect, useState } from "react";
import { Spacecraft } from "../../pages";

const mslUrl =
  "https://mars.nasa.gov/mmgis-maps/MSL/Layers/json/MSL_waypoints_current.json";
const m20Url =
  "https://mars.nasa.gov/mmgis-maps/M20/Layers/json/M20_waypoints_current.json";
const igyUrl =
  "https://mars.nasa.gov/mmgis-maps/M20/Layers/json/m20_heli_waypoints_current.json";

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

  const getCoords = (res) => {
    const [lonE, lat] = res.features[0].geometry.coordinates;
    const lonW = 360 - lonE;
    return [lat, lonW];
  };

  const errorHandler = (err) => console.error(err);

  // Curiosity Coordinate Fetcher
  useEffect(() => {
    fetch(mslUrl)
      .then((res) => res.json())
      .then((res) => {
        const [lat, lon] = getCoords(res);
        setLons((prev) => ({ ...prev, msl: { lat, lon } }));
      })
      .catch(errorHandler);
  }, []);

  // Perseverance Coordinate Fetcher
  useEffect(() => {
    fetch(m20Url)
      .then((res) => res.json())
      .then((res) => {
        const [lat, lon] = getCoords(res);
        setLons((prev) => ({ ...prev, m20: { lat, lon } }));
      })
      .catch(errorHandler);
  }, []);

  // Ingenuity Coordinate Fetcher
  useEffect(() => {
    fetch(igyUrl)
      .then((res) => res.json())
      .then((res) => {
        const [lat, lon] = getCoords(res);
        setLons((prev) => ({ ...prev, igy: { lat, lon } }));
      })
      .catch(errorHandler);
  }, []);

  return lons;
};
