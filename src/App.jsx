import { ConfigProvider, theme as antdTheme } from "antd";
import { WeatherProvider } from "./common/WeatherContext";
import WeatherApp from "./components/WeatherApp";
import { useState } from "react";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);
  console.log(isDark);
  return (
    <WeatherProvider>
      <ConfigProvider
        theme={{
          algorithm: isDark
            ? antdTheme?.darkAlgorithm
            : antdTheme?.defaultAlgorithm,
        }}
      >
        <WeatherApp isDark={isDark} setIsDark={setIsDark} />
      </ConfigProvider>
    </WeatherProvider>
  );
}

export default App;
