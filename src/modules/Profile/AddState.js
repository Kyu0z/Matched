import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../components/button";
import ButtonCancel from "../../components/button/ButtonCancel";
import { Radio } from "../../components/checkbox";
import RadioMulti from "../../components/checkbox/RadioMulti";
import { Field } from "../../components/field";
import { Label } from "../../components/label";

const AddStateStyle = styled.div`
  .addState {
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

const AddState = () => {
  const [state, setState] = useState("HERE_TO_DATE");
  return (
    <AddStateStyle>
      <Field style={{ marginTop: "1rem" }}>
        <Label>Status:</Label>
        <div className="flex flex-wrap gap-x-8 mt-3">
          <RadioMulti
            name="status"
            value={state}
            setValue={setState}
            values={{
              HERE_TO_DATE: "Here to Date",
              OPEN_TO_CHAT: "Open to Chat",
              READY_RELATIONSHIP: "Ready relationship",
            }}
          />
        </div>
        <div className="addState-button">
          <Button className="addState-btn">Save</Button>
          <ButtonCancel>Cancle</ButtonCancel>
        </div>
      </Field>
    </AddStateStyle>
  );
};

export default AddState;
