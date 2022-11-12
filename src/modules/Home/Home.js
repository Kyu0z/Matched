import React, { useEffect } from "react";
import styled from "styled-components";
import HomeHeader from "../Header";
import HomeContent from "./HomeContent";
import Sidebar from "../Sidebar";

const HomeStyle = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  .home {
    &-main {
      display: grid;
      grid-template-columns: 300px minmax(0, 1fr);
      padding: 40px 20px;
      gap: 0 40px;
      align-items: start;
      margin-top: 5rem;
    }
    @media screen and (max-width: 1023.98px) {
      &-main {
        grid-template-columns: 100%;
        padding: 20px;
      }
    }
  }
`;

const Home = () => {
  useEffect(() => {
    document.title = "Home Page";
  }, []);

  return (
    <>
      <HomeStyle>
        {/* <HomeHeader></HomeHeader> */}
        <div className="home-main">
          <Sidebar></Sidebar>
          <HomeContent></HomeContent>
        </div>
      </HomeStyle>
    </>
  );
};

export default Home;
