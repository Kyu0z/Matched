import React from "react";
import styled from "styled-components";
const ReplaceImgStyle = styled.button`
  width: 150px;
  height: 150px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ReplaceImg = () => {
  return (
    <ReplaceImgStyle>
      <img src="./person2.jpg" alt="" />
    </ReplaceImgStyle>
  );
};

export default ReplaceImg;
