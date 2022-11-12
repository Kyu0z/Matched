import React, { Fragment } from "react";
import IconSearch from "../icon/IconSearch";
import Input from "./Input";

const InputSearch = ({ value, onChange, style }) => {
  return (
    <Fragment>
      <Input
        // style={{ width: "20%", border: "1px solid #ced4da" }}
        type="text"
        name="text"
        style={style}
        placeholder="Enter your search"
        value={value}
        onChange={onChange}
      >
        <IconSearch></IconSearch>
      </Input>
    </Fragment>
  );
};

export default InputSearch;
