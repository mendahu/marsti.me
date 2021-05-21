import { useEffect, useState } from "react";

export const useMissionLon = () => {
  const defaultState = {
    msl: 222.5583,
    m20: 282.5492,
    ins: 224.3766,
    igy: 282.5492,
    zhu: 250.1,
  };

  const [lons, setLons] = useState(defaultState);

  useEffect(() => {
    fetch(
      "https://mars.nasa.gov/mmgis-maps/MSL/Layers/json/MSL_waypoints_current.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        const lonE = res.features[0].geometry.coordinates[0];
        const lonW = 360 - lonE;
        setLons((prev) => ({ ...prev, msl: lonW }));
      });
  }, []);

  useEffect(() => {
    fetch(
      "https://mars.nasa.gov/mmgis-maps/M20/Layers/json/M20_waypoints_current.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        const lonE = res.features[0].geometry.coordinates[0];
        const lonW = 360 - lonE;
        setLons((prev) => ({ ...prev, m20: lonW }));
      });
  }, []);

  return lons;
};
