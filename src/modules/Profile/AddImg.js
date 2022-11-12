import React, { useRef } from "react";
import styled from "styled-components";
import IconImage from "../../components/icon/IconImage";

const AddImgStyle = styled.button`
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  background: #f6f6f6;
  color: #767676;
  h3 {
    margin-top: 0.5rem;
  }
  &:hover {
    opacity: 0.7;
  }
`;

const AddImg = ({ ...props }) => {
  const inputFileEl = useRef();

  const handleAdd = () => {
    inputFileEl.current.click();
  };
  return (
    <AddImgStyle
      type="button"
      {...props}
      className="profile-add"
      // onClick={(ev) => {
      //   inputFileEl.current.click();
      // }}
      onClick={handleAdd}
    >
      <input type="file" style={{ display: "none" }} ref={inputFileEl} />
      <IconImage></IconImage>
      <h3>Add photos</h3>
    </AddImgStyle>
  );
};

export default AddImg;
