import React, { useRef } from "react";
import styled from "styled-components";
import IconVideo from "../../components/icon/IconVideo";

const AddVideoStyle = styled.button`
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

const AddVideo = () => {
  const inputFileEl = useRef();

  const handleAdd = () => {
    inputFileEl.current.click();
  };
  return (
    <AddVideoStyle
      type="button"
      className="profile-add"
      // onClick={(ev) => {
      //   inputFileEl.current.click();
      // }}
      onClick={handleAdd}
    >
      <input type="file" style={{ display: "none" }} ref={inputFileEl} />
      <IconVideo></IconVideo>
      <h3>Add photos</h3>
    </AddVideoStyle>
  );
};

export default AddVideo;
