import { useState } from "react";

import { WeatherContext } from "./Contexts";

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState(null);

  const addToHistory = (city) => {
    setHistory((prev) => {
      const updated = [city, ...prev.filter((c) => c !== city)];
      return updated.slice(0, 5);
    });
  };

  return (
    <WeatherContext.Provider
      value={{
        weather,
        setWeather,
        history,
        addToHistory,
        error,
        setError,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
