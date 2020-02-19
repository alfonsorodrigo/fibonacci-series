import React, { useState } from "react";
import "antd/dist/antd.css";
import CustomLayout from "./containers/Layout";
import SearchInput from "./components/SearchInput";
import DataResults from "./components/DataResults";
import HistoryResults from "./components/HistoryResults";
import { Alert } from "antd";
import axios from "axios";

const SERVER = "http://127.0.0.1:8000";

const App = () => {
  const [formData, setFormData] = useState({
    isInvalid: false,
    message_error: "",
    index_fibonacci: "",
    fibonacci_series: [],
    history_fibonacci: []
  });

  const handlerFibonacci = index => {
    const isIndexStorage = localStorage.getItem(index);
    if (!isIndexStorage) {
      axios
        .get(`${SERVER}/api/fibonacci/?fibonacci_index=${index}`)
        .then(res => {
          const data_fibonacci = res.data;
          localStorage.setItem(index, JSON.stringify(data_fibonacci));
          setFormData({
            ...formData,
            isInvalid: false,
            index_fibonacci: data_fibonacci.fibonacci_index,
            fibonacci_series: data_fibonacci.fibonacci_series,
            history_fibonacci: allStorage()
          });
        })
        .catch(error => {
          const message_error = error.response.data.fibonacci_index[0];
          setFormData({
            ...formData,
            message_error: message_error,
            isInvalid: true,
            index_fibonacci: "",
            fibonacci_series: []
          });
        });
    } else {
      const obj = JSON.parse(isIndexStorage);
      setFormData({
        ...formData,
        isInvalid: false,
        index_fibonacci: obj.fibonacci_index,
        fibonacci_series: obj.fibonacci_series
      });
    }
  };
  const {
    isInvalid,
    message_error,
    index_fibonacci,
    history_fibonacci
  } = formData;
  const allStorage = () => {
    let values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      values.push(JSON.parse(localStorage.getItem(keys[i])));
    }

    return values;
  };
  const history_fibonacci_local = allStorage();
  const HISTORY_DATA =
    history_fibonacci.length > 0 ? history_fibonacci : history_fibonacci_local;
  console.log(HISTORY_DATA);
  return (
    <div className="App">
      <CustomLayout>
        {isInvalid ? <Alert message={message_error} type="error" /> : null}
        <br />
        <SearchInput onFibonacci={handlerFibonacci} />
        {index_fibonacci !== "" ? <DataResults data={formData} /> : null}
        <br />
        <HistoryResults historyData={HISTORY_DATA} />
      </CustomLayout>
    </div>
  );
};

export default App;
