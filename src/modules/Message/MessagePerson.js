import React from "react";
import styled from "styled-components";
import Avatar from "../Avatar";
import MessageText from "./MessageText";

const MessagePersonStyle = styled.div`
  &::after {
    content: "";
    clear: both;
    display: table;
  }
  .message {
    &-dataBoxPerson {
      display: flex;
      align-items: center;
      margin: 1.2rem 0;
      float: right;
    }
    &-dataBoxInfo {
      display: flex;
      flex-direction: column;
      margin: 0 1.2rem;
      span {
        color: #777d74;
        margin-top: 0.5rem;
      }
    }
  }
`;

const dataMessagePerson = [
  {
    key: "sms1",
    message: "How can we help? We're here for you! 😄",
    avatar: "./person.jpg",
    time: "6:45",
    url: "/1",
  },
];

const MessagePerson = ({ children }) => {
  return (
    <MessagePersonStyle>
      {dataMessagePerson.map(({ key, message, avatar, time, url }) => (
        <div className="message-dataBoxPerson" key={key}>
          <div>
            <MessageText>{children}</MessageText>
          </div>
          <div className="message-dataBoxInfo">
            <Avatar
              srcSet={avatar}
              alt=""
              style={{ width: 35, height: 35, borderRadius: "50%" }}
            />
            <span>{time}</span>
          </div>
        </div>
      ))}
    </MessagePersonStyle>
  );
};

export default MessagePerson;
