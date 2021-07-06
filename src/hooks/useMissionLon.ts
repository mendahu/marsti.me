import { useEffect, useState } from "react";

const mslUrl =
  "https://mars.nasa.gov/mmgis-maps/MSL/Layers/json/MSL_waypoints_current.json";
const m20Url =
  "https://mars.nasa.gov/mmgis-maps/M20/Layers/json/M20_waypoints_current.json";

export const useMissionLon = () => {
  const defaultState = {
    msl: 222.5583,
    m20: 282.5492,
    ins: 224.3766,
    igy: 282.55,
    zhu: 250.074,
  };

  const [lons, setLons] = useState(defaultState);

  useEffect(() => {
    fetch(mslUrl)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        const lonE = res.features[0].geometry.coordinates[0];
        const lonW = 360 - lonE;
        setLons((prev) => ({ ...prev, msl: lonW }));
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
        const lonE = res.features[0].geometry.coordinates[0];
        const lonW = 360 - lonE;
        setLons((prev) => ({ ...prev, m20: lonW }));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return lons;
};
