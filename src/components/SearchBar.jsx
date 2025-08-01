import { useState, useEffect, useContext } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useWeatherApi } from "../hooks/useFetchApi";
import { Input, Spin, Alert } from "antd";
import { WeatherContext } from "../common/Contexts";

const SearchBar = () => {
  const [city, setCity] = useState("Ahmedabad");
  const debouncedCity = useDebounce(city, 700);

  const {
    setWeather,
    addToHistory,
    setError: setGlobalError,
  } = useContext(WeatherContext);
  const { data, loading, error, fetchWeather } = useWeatherApi();
  console.log("data", data);

  useEffect(() => {
    if (debouncedCity.trim()) {
      fetchWeather(debouncedCity);
    }
  }, [debouncedCity]);

  useEffect(() => {
    if (data) {
      setWeather(data);
      addToHistory(debouncedCity);
      setGlobalError(null);
    }
    if (error) {
      setGlobalError(error);
    }
  }, [data, error]);

  const CrossMark = ({ onClick }) => {
    return (
      <>
        <span onClick={onClick}>❌</span>
      </>
    );
  };

  return (
    <>
      <Input
        placeholder="Enter city name"
        size="large"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ marginBottom: 10 }}
        suffix={<CrossMark onClick={() => setCity("")} />}
      />
      {loading && <Spin />}
      {error && <Alert message={error} type="error" />}
    </>
  );
};

export default SearchBar;
