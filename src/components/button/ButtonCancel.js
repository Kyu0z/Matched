import React from "react";
import styled from "styled-components";

const ButtonCancelStyle = styled.div`
  position: relative;
  button {
    padding: 10px 12px;
    border: 1px solid rgba(45, 45, 45, 0.15);
    background-color: transparent;
    color: #2d2d2d;
    font-weight: 600;
    font-size: 0.8rem;
    border-radius: 8px;
    height: 40px;
    width: 70px;
    margin-left: 1rem;
    &:hover {
      border-color: rgba(19, 19, 19, 0.235);
      background-color: rgba(45, 45, 45, 0.04);
      transition: all 0.2s linear;
    }
  }
`;

const ButtonCancel = ({ children }) => {
  return (
    <ButtonCancelStyle>
      <button type="button">{children}</button>
    </ButtonCancelStyle>
  );
};

export default ButtonCancel;
