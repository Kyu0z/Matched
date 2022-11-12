import React, { useEffect } from "react";
import styled from "styled-components";
import IconMatched from "../../components/icon/IconMatched";
import Header from "../Header";
import Sidebar from "../Sidebar";
import MatchedList from "./MatchedList";

const MatchedStyle = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  .matched {
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
    &-heading {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      border-bottom: 1px solid #eaeaea;
      margin: 1.2rem 0;
      padding-bottom: 1rem;
      h2 {
        font-size: 1.6rem;
        font-weight: 700;
      }
    }
  }
`;

const Matched = () => {
  useEffect(() => {
    document.title = "Matched Page";
  }, []);
  return (
    <MatchedStyle>
      <Header></Header>
      <div className="matched-main">
        <Sidebar></Sidebar>
        <div className="matched-content">
          <div className="matched-heading">
            <IconMatched></IconMatched>
            <h2>Your Matched List</h2>
          </div>
          <MatchedList></MatchedList>
        </div>
      </div>
    </MatchedStyle>
  );
};

export default Matched;
