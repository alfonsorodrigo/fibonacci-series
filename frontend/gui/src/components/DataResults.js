import React from "react";
import { Result } from "antd";

const DataResults = ({ data: { index_fibonacci, fibonacci_series } }) => {
  const titleString = `Índice ${index_fibonacci}`;
  const subTitleString = `Sucesión ${fibonacci_series}`;
  return (
    <Result status="success" title={titleString} subTitle={subTitleString} />
  );
};
export default DataResults;
