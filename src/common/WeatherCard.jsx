import { useContext } from "react";
import { Card, Typography } from "antd";
import { WeatherContext } from "./Contexts";

const WeatherCard = () => {
  const { weather } = useContext(WeatherContext);

  if (!weather) return null;

  const {
    current: { temp_c, condition, wind_kph, humidity },
    location: { name },
  } = weather;

  return (
    <Card
      title={<Typography.Title>{`Weather in ${name}`}</Typography.Title>}
      style={{ marginTop: 16 }}
    >
      <Typography.Text>🌡️ Temperature: {temp_c}°C</Typography.Text>
      <p>☁️ Condition: {condition.text}</p>
      <p>💨 Wind: {wind_kph} kph</p>
      <p>💧 Humidity: {humidity}%</p>
    </Card>
  );
};

export default WeatherCard;
