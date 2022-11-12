import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../components/button";
import ButtonCancel from "../../components/button/ButtonCancel";
import DropdownV2 from "../../components/dropdown/DropdownV2";
import { Field } from "../../components/field";
import { Textarea } from "../../components/textarea";

const AddInfoStyle = styled.form`
  .addInfo {
    display: flex;
    align-items: center;
    padding: 0 1rem;
    width: 100%;
    label {
      font-size: 1rem;
      white-space: nowrap;
      width: 35%;
      height: 15px;
      color: #2d2d2d;
      font-weight: 400;
      cursor: pointer;
    }
    &-textArea {
      border: 1px solid #dadada;
      margin: 1rem 0 0.4rem;
      width: 100%;
      &:focus {
        border-color: #1dc071;
      }
    }
    &-button {
      display: flex;
      align-items: center;
      padding: 2rem 1rem 0 0rem;
      justify-content: flex-end;
      width: 100%;
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

const AddInfo = () => {
  const [state, setState] = useState("NOT_TO_SAY");
  const [stateSex, setStateSex] = useState("STRAIGHT");
  const [stateHeight, setStateHeight] = useState("NOT_TO_SAY");
  return (
    <AddInfoStyle>
      <Field style={{ marginTop: "1rem" }}>
        <div className="addInfo">
          <label htmlFor="info">About me:</label>
          <Textarea
            type="text"
            id="info"
            className="addInfo-textArea"
            placeholder="Write a bit about yourself"
          ></Textarea>
        </div>
        <div className="addInfo">
          <label htmlFor="info">Relationship:</label>
          <DropdownV2
            name="relationship"
            select={state}
            setSelect={setState}
            values={{
              NOT_TO_SAY: "I'd prefer not to say",
              SINGLE: "Single",
              TAKEN: "Taken",
            }}
          />
        </div>
        <div className="addInfo">
          <label htmlFor="info">Sexuality:</label>
          <DropdownV2
            name="sex"
            select={stateSex}
            setSelect={setStateSex}
            values={{
              NOT_TO_SAY: "I'd prefer not to say",
              STRAIGHT: "Straight",
              ASK_ME: "Ask me",
            }}
          />
        </div>
        <div className="addInfo">
          <label htmlFor="info">Height:</label>
          <DropdownV2
            name="height"
            select={stateHeight}
            setSelect={setStateHeight}
            values={{
              NOT_TO_SAY: "I'd prefer not to say",
              "0-160": "<160 cm",
              "160+": ">160 cm",
            }}
          />
        </div>
        <div className="addInfo-button">
          <Button className="addInfo-btn">Save</Button>
          <ButtonCancel>Cancle</ButtonCancel>
        </div>
      </Field>
    </AddInfoStyle>
  );
};

export default AddInfo;
