import React from "react";
import styled from "styled-components";

const MessageTextStyle = styled.p``;
const MessageText = ({ children }) => {
  return <MessageTextStyle>{children}</MessageTextStyle>;
};

export default MessageText;
