import React, { useEffect } from "react";
import styled from "styled-components";
import InputSearch from "../../components/input/InputSearch";
import Header from "../Header";
import Sidebar from "../Sidebar";
import MessageHistory from "./MessageHistory";
import MessageData from "./MessageData";
import Avatar from "../Avatar";

const MessageStyle = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  .message {
    &-main {
      display: grid;
      grid-template-columns: 300px minmax(0, 1fr);
      padding: 40px 20px;
      gap: 0 40px;
      align-items: start;
      margin-top: 5rem;
    }
    &-content {
      border-radius: 8px;
      box-shadow: 0 0 10px rgb(0 0 0 / 10%);
    }
    &-row {
      display: grid;
      grid-template-columns: 200px minmax(0, 1fr);
      padding: 8px 20px;
      gap: 0 15px;
      align-items: start;
    }

    &-info {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;

      h3 {
        font-size: 1.5rem;
        font-weight: 400;
        margin-left: 0.5rem;
      }
    }
  }
`;

const Message = () => {
  useEffect(() => {
    document.title = "Message Page";
  }, []);

  return (
    <>
      <MessageStyle>
        <Header></Header>
        <div className="message-main">
          <Sidebar></Sidebar>
          <div className="message-content">
            <div className="message-row">
              <div className="message-history">
                <div className="message-info">
                  <Avatar srcSet="./person.jpg" alt="" />
                  <h3>Khải Duy</h3>
                </div>
                <InputSearch
                  style={{ border: "1px solid #ced4da" }}
                ></InputSearch>
                <MessageHistory></MessageHistory>
              </div>
              <MessageData></MessageData>
            </div>
          </div>
        </div>
      </MessageStyle>
    </>
  );
};

export default Message;
