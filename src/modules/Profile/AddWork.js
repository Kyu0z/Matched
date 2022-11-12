import React from "react";
import styled from "styled-components";
import { Button } from "../../components/button";
import ButtonCancel from "../../components/button/ButtonCancel";
import { Input } from "../../components/input";

const AddWorkStyle = styled.form`
  .addWork {
    display: flex;
    align-items: center;
    padding: 0 1rem;
    label {
      font-size: 1rem;
      white-space: nowrap;
      width: 35%;
      height: 15px;
      color: #2d2d2d;
      font-weight: 400;
      cursor: pointer;
    }
    &-input {
      border: 1px solid #dadada;
      margin: 1rem 0 0.4rem;
      &:focus {
        border-color: #1dc071;
      }
    }

    &-button {
      display: flex;
      align-items: center;
      padding: 2rem 1rem 0 0rem;
      justify-content: flex-end;
    }

    &-btn {
      padding: 8px 10px;
      height: 40px;
      font-weight: 600;
      font-size: 0.8rem;
      width: 70px;
      background-color: fff;
      border-color: #1dc071;
      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

const AddWork = () => {
  return (
    <AddWorkStyle>
      <div className="addWork">
        <label htmlFor="job">Job title:</label>
        <Input
          type="job"
          name="job"
          className="addWork-input"
          placeholder="Add job title"
        ></Input>
      </div>
      <div className="addWork">
        <label htmlFor="company">Company name:</label>
        <Input
          type="company"
          name="company"
          className="addWork-input"
          placeholder="Add company"
        ></Input>
      </div>
      <div className="addWork">
        <label htmlFor="education">School or university:</label>
        <Input
          type="education"
          name="education"
          className="addWork-input"
          placeholder="Add education"
        ></Input>
      </div>
      <div className="addWork-button">
        <Button className="addWork-btn">Save</Button>
        <ButtonCancel>Cancle</ButtonCancel>
      </div>
    </AddWorkStyle>
  );
};

export default AddWork;
