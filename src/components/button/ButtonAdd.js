import React from "react";
import styled from "styled-components";
import IconEdit from "../icon/IconEdit";

const ButtonAddStyle = styled.div`
  position: relative;
  button {
    padding: 2px 12px 2px 30px;
    border: 1px solid rgba(45, 45, 45, 0.15);
    background-color: transparent;
    color: #2d2d2d;
    font-weight: 600;
    font-size: 0.8rem;
    border-radius: 8px;
    height: 40px;
    &:hover {
      border-color: rgba(19, 19, 19, 0.235);
      background-color: rgba(45, 45, 45, 0.04);
      transition: all 0.2s linear;
    }
  }
  .btn-icon {
    position: absolute;
    left: 1%;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

const ButtonAdd = ({ onClick = () => {} }) => {
  return (
    <ButtonAddStyle onClick={onClick}>
      <button type="button">Add now</button>
      <IconEdit className="btn-icon"></IconEdit>
    </ButtonAddStyle>
  );
};

export default ButtonAdd;
