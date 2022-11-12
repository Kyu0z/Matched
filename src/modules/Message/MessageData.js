import React from "react";
import styled from "styled-components";
import { Button } from "../../components/button";
import IconCall from "../../components/icon/IconCall";
import IconEmoji from "../../components/icon/IconEmoji";
import IconImage from "../../components/icon/IconImage";
import IconVideo from "../../components/icon/IconVideo";
import { Input } from "../../components/input";
import Avatar from "../Avatar";
import MessagePerson from "./MessagePerson";
import MessageUser from "./MessageUser";

const MessageDataStyle = styled.div`
  .message {
    &-data {
      border-left: 1px solid #eaeaea;
      padding-left: 1.5rem;
    }

    &-dataHeader {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #eaeaea;
      padding-bottom: 1rem;
    }
    &-dataUser {
      display: flex;
      align-items: center;
      h3 {
        font-size: 1.5rem;
        font-weight: 600;
        margin-left: 1rem;
      }
    }

    &-dataMore {
      display: flex;
      align-items: center;
    }

    &-dataChat {
      margin: 1.5rem 0;
      background-color: #eaeaea;
      padding: 1rem;
      max-height: 55vh;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
      p {
        border: 1px solid #fff;
        padding: 1rem 1.2rem;
        border-radius: 5px;
        background-color: #fff;
      }
    }
  }
`;

const MessageData = ({ messages, user }) => {
  return (
    <MessageDataStyle>
      <div className="message-data">
        <div className="message-dataHeader">
          <div className="message-dataUser">
            <Avatar srcSet="./user.jpg" alt="" />
            <h3>Syrena Rose</h3>
          </div>
          <div className="message-dataMore">
            <IconCall></IconCall>
            <IconVideo></IconVideo>
          </div>
        </div>
        <div className="message-dataChat">
          <MessagePerson>
            How can we help? We're here for you! 😄How can we help? We're here
            for you! 😄How can we help? We're here for you! 😄How can we help?
            We're here for you! 😄How can we help? We're here for you! 😄
          </MessagePerson>
          <MessageUser>
            Hey Khai, I am looking for the best admin template. Could you please
            help me to find it out? 🤔
          </MessageUser>
          <MessagePerson>haizz</MessagePerson>
        </div>
        <div className="message-dataInput">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="message-dataMore">
              <IconEmoji></IconEmoji>
              <IconImage></IconImage>
            </div>
            <Input
              placeholder="Type your message"
              style={{
                border: "1px solid #ced4da",
                margin: "0 1rem",
              }}
            ></Input>
            <div>
              <Button
                style={{
                  width: "70px",
                  height: "50px",
                  marginLeft: "2rem",
                }}
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MessageDataStyle>
  );
};

export default MessageData;
