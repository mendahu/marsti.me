import React from "react";

const CurrentTimeContext = React.createContext(null);

const CurrentTimeProvider = ({ value, children }) => {
  return (
    <CurrentTimeContext.Provider value={value}>
      {children}
    </CurrentTimeContext.Provider>
  );
};

export const useCurrentTime = () => React.useContext(CurrentTimeContext);

export default CurrentTimeProvider;
