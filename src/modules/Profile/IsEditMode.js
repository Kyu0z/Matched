import React, { useState } from "react";
import ButtonAdd from "../../components/button/ButtonAdd";
import IconEdit from "../../components/icon/IconEdit";

const IsEditMode = ({ children }) => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };
  return (
    <>
      <ButtonAdd onClick={toggle}>
        <IconEdit></IconEdit>
      </ButtonAdd>
      {show && children}
    </>
  );
};

export default IsEditMode;
