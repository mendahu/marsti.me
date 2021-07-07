import { useEffect, useState } from "react";

const mslUrl =
  "https://mars.nasa.gov/mmgis-maps/MSL/Layers/json/MSL_waypoints_current.json";
const m20Url =
  "https://mars.nasa.gov/mmgis-maps/M20/Layers/json/M20_waypoints_current.json";

export const useMissionCoords = () => {
  const defaultState = {
    msl: {
      lon: 222.5583,
      lat: 0,
    },
    m20: {
      lon: 282.5492,
      lat: 0,
    },
    ins: {
      lon: 224.3766,
      lat: 0,
    },
    igy: {
      lon: 282.55,
      lat: 0,
    },
    zhu: {
      lon: 250.074,
      lat: 0,
    },
  };

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
