import { useContext } from "react";
import { List } from "antd";
import { WeatherContext } from "./Contexts";

const HistoryList = () => {
  const { history } = useContext(WeatherContext);

  return (
    <List
      size="small"
      header={<div>🕘 Recent Searches</div>}
      bordered
      dataSource={history}
      renderItem={(item) => <List.Item>{item}</List.Item>}
      style={{ marginTop: 20 }}
    />
  );
};

export default HistoryList;
