import React, { useContext } from "react";
import { WeatherContext } from "./Contexts";
import { Typography } from "antd";

const OutfitSuggestion = () => {
  const { weather } = useContext(WeatherContext);
  console.log(weather);

  if (!weather) return null;

  const { temp_c, condition } = weather.current;
  const suggestions = [];

  if (temp_c < 10) suggestions.push("🧥 Wear a jacket");
  if (temp_c > 10 && temp_c < 25) suggestions.push("🧥 Wear a blazer");
  if (temp_c > 25) suggestions.push("😎 Sunglasses suggested");
  if (condition.text.toLowerCase().includes("rain"))
    suggestions.push("☔ Take an umbrella");

  return (
    <div style={{ marginTop: 10 }}>
      <Typography.Title level={2}>👕 Outfit Suggestions</Typography.Title>
      <ul>
        {suggestions.map((s, i) => (
          <li key={i}>
            <Typography.Title level={3}>{s}</Typography.Title>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OutfitSuggestion;
