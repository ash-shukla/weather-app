import { useState } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const useWeatherApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await axios.get(BASE_URL, {
        params: {
          key: import.meta.env.VITE_WEATHER_API_KEY,
          q: city,
        },
      });
      setData(response.data);
    } catch (err) {
      setError(err.response?.data?.error?.message || "API call failed");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchWeather };
};
