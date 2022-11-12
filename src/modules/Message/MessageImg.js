import React from "react";
import styled from "styled-components";

const MessageImgStyle = styled.img`
  width: 200px;
  height: 180px;
  object-fit: cover;
`;
const MessageImg = ({ src = "", alt = "" }) => {
  return <MessageImgStyle src={src} alt={alt}></MessageImgStyle>;
};

export default MessageImg;
