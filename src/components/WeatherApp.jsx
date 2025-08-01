import { Layout, Switch } from "antd";
import HistoryList from "../common/HistoryList";
import OutfitSuggestion from "../common/OutfitSuggestion";
import WeatherCard from "../common/WeatherCard";
import SearchBar from "./SearchBar";

const WeatherApp = ({ isDark, setIsDark }) => {
  const { Header, Content, Footer } = Layout;
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header className="header">
        <div />
        <div className="app-title">🌤️ Weather App</div>
        <div>
          <Switch
            checkedChildren="🌙"
            unCheckedChildren="☀️"
            onChange={() => setIsDark(!isDark)}
            checked={isDark}
          />
        </div>
      </Header>
      <Content style={{ padding: "20px 50px" }}>
        <SearchBar />
        <WeatherCard />
        <OutfitSuggestion />
        <HistoryList />
      </Content>
      <Footer style={{ textAlign: "center" }}>Weather App ©2025</Footer>
    </Layout>
  );
};

export default WeatherApp;
