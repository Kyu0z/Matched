import React from "react";
import styled from "styled-components";

const AvatarStyle = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
`;
const Avatar = ({ srcSet = "", alt = "", ...props }) => {
  return <AvatarStyle srcSet={srcSet} alt={alt} {...props}></AvatarStyle>;
};

export default Avatar;
