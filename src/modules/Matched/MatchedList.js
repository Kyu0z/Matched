import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MatchedListStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  margin: 1.2rem 1rem;
  .matched {
    &-item {
      position: relative;
      color: #fff;
      img {
        width: 190px;
        height: 250px;
        object-fit: cover;
        border-radius: 8px;
      }
      p {
        position: absolute;
        right: 25%;
        bottom: 0;
        white-space: nowrap;
      }
    }
  }
`;
// data
const dataUser = [
  {
    key: "matched1",
    name: "Syrena Rose,",
    age: 21,
    image: "./user.jpg",
  },
  {
    key: "matched2",
    name: "Syrena Rose,",
    age: 21,
    image: "./user.jpg",
  },
  {
    key: "matched3",
    name: "Syrena Rose,",
    age: 21,
    image: "./user.jpg",
  },
  {
    key: "matched4",
    name: "Syrena Rose,",
    age: 22,
    image: "./user.jpg",
  },
  {
    key: "matched5",
    name: "Syrena Roses,",
    age: 21,
    image: "./user.jpg",
  },
];
const MatchedList = () => {
  return (
    <MatchedListStyle>
      {dataUser.map(({ key, name, age, image }) => (
        <NavLink to={"/message"}>
          <li className="matched-item" key={key}>
            <img src={image} alt="" />
            <p>
              {name} <span> {age}</span>
            </p>
          </li>
        </NavLink>
      ))}
    </MatchedListStyle>
  );
};

export default MatchedList;
