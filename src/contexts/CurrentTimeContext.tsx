import React from "react";
import { TimeUtilities } from "../hooks/useTime";

const CurrentTimeContext = React.createContext<TimeUtilities | null>(null);

const CurrentTimeProvider = ({ value, children }) => {
  return (
    <CurrentTimeContext.Provider value={value}>
      {children}
    </CurrentTimeContext.Provider>
  );
};

export const useCurrentTime = () => React.useContext(CurrentTimeContext);

export default CurrentTimeProvider;
