import React from "react";
import Radio from "./Radio";

const RadioMulti = ({ name, value, setValue, values }) => {
  return (
    <>
      {Object.keys(values).map((key) => (
        <Radio
          name={name}
          key={key}
          value={value === key}
          setValue={() => setValue(key)}
        >
          {values[key]}
        </Radio>
      ))}
    </>
  );
};

export default RadioMulti;
