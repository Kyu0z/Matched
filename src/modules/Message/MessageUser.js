import React from "react";
import styled from "styled-components";
import Avatar from "../Avatar";
import MessageImg from "./MessageImg";
import MessageText from "./MessageText";

const MessageUserStyle = styled.div`
  &::after {
    content: "";
    clear: both;
    display: table;
  }

  .message {
    &-dataBoxUser {
      display: flex;
      align-items: center;
      margin: 1.2rem 0;
      float: left;
    }

    &-dataBoxInfo {
      display: flex;
      flex-direction: column;
      margin: 0 1.2rem;
      span {
        color: #777d74;
        margin-bottom: 0.5rem;
      }
    }
  }
`;
// data
const dataMessageUser = [
  {
    key: "u1",
    avatar: "./user.jpg",
    time: "6:45",
    url: "/1",
  },
];

const MessageUser = ({ children }) => {
  return (
    <MessageUserStyle>
      {dataMessageUser.map(({ key, message, avatar, time, url }) => (
        <div className="message-dataBoxUser" key={key}>
          <div className="message-dataBoxInfo">
            <Avatar
              srcSet={avatar}
              alt=""
              style={{ width: 35, height: 35, borderRadius: "50%" }}
            />
            <span>{time}</span>
          </div>
          <div>
            <MessageText>{children}</MessageText>
            <MessageImg src="./person.jpg"></MessageImg>
          </div>
        </div>
      ))}
    </MessageUserStyle>
  );
};

export default MessageUser;
