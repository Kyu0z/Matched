import React, { Fragment, useState } from "react";
import IconEyeClose from "../icon/IconEyeClose";
import IconEyeOpen from "../icon/IconEyeOpen";
import Input from "./Input";

const InputPasswordToggle = ({ value, onChange, onKeyPress }) => {
  const [togglePassword, setTogglePassword] = useState(false);
  return (
    <Fragment>
      <Input
        type={togglePassword ? "text" : "password"}
        name="password"
        placeholder="Enter your password"
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      >
        {/* Dùng children để UI code không cần className (input-icon) trùng nhau */}
        {!togglePassword ? (
          <IconEyeClose onClick={() => setTogglePassword(true)}></IconEyeClose>
        ) : (
          <IconEyeOpen onClick={() => setTogglePassword(false)}></IconEyeOpen>
        )}
      </Input>
    </Fragment>
  );
};

export default InputPasswordToggle;
