import React from "react";
import "antd/dist/antd.css";
import { List, Card } from "antd";

const HistoryResults = ({ historyData }) => {
  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={historyData}
      renderItem={item => (
        <List.Item>
          <Card title={item.fibonacci_series.length}>
            <strong>Indice</strong> {item.fibonacci_index} <br />{" "}
            <strong>Serie:</strong> {item.fibonacci_series}
          </Card>
        </List.Item>
      )}
    />
  );
};

export default HistoryResults;
