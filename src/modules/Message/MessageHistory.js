import React from "react";
import styled from "styled-components";
import Avatar from "../Avatar";

const MessageHistoryStyle = styled.div`
  .message {
    &-historyMain {
      h3 {
        font-size: 1.2rem;
        font-weight: 600;
        margin: 1rem 0;
      }
      padding: 0 2rem 0 0;
      max-height: 60vh;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
    }

    &-historyBox {
      display: flex;
      align-items: center;
      margin-bottom: 2rem;

      &:hover {
        opacity: 0.9;
        transition: all 0.2s linear;
        cursor: pointer;
      }
    }

    &-historyInfo {
      margin-left: 0.5rem;
      h2 {
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 0.4rem;
      }
      p {
        white-space: nowrap;
        color: #777d74;
        font-size: 0.8rem;
      }
    }
  }
`;
// data
const dataUser = [
  {
    key: "user1",
    name: "1",
    author: "Bạn:",
    historyMessage: "Hello babe 💛",
    url: "/1",
    image: "./user.jpg",
  },
  {
    key: "user2",
    name: "2",
    author: "Bạn:",
    historyMessage: "Hello babe 💛",
    url: "/2",
    image: "./user.jpg",
  },
  {
    key: "user3",
    name: "Syrena Rose",
    author: "Bạn:",
    historyMessage: "Hello babe 💛",
    url: "/2",
    image: "./user.jpg",
  },
  {
    key: "user4",
    name: "Syrena Rose",
    author: "Bạn:",
    historyMessage: "Hello babe 💛",
    url: "/2",
    image: "./user.jpg",
  },
  {
    key: "user5",
    name: "Syrena Roses",
    author: "Bạn:",
    historyMessage: "Hello babe 💛",
    url: "/2",
    image: "./user.jpg",
  },
];

const MessageHistory = () => {
  return (
    <MessageHistoryStyle>
      <div className="message-historyMain">
        <h3>Message</h3>
        {dataUser.map(({ key, name, author, historyMessage, url, image }) => (
          <div className="message-historyBox" key={key}>
            <Avatar srcSet={image} alt="" />
            <div className="message-historyInfo">
              <h2>{name}</h2>
              <p>
                {author}
                <span> {historyMessage}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </MessageHistoryStyle>
  );
};

export default MessageHistory;
