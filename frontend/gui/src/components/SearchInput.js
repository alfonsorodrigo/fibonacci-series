import React from "react";
import { Input } from "antd";
const { Search } = Input;
const SearchInput = ({ onFibonacci }) => {
  return (
    <Search
      placeholder="Ingrese un número"
      enterButton="Calcular"
      size="large"
      onSearch={value => onFibonacci(value)}
    />
  );
};

export default SearchInput;
