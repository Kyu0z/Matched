import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../components/button";
const HeaderStyle = styled.div`
  width: 1200px;
  margin: 0 auto;
  .header-style {
    display: block;
    position: fixed;
    width: 1200px;
    height: 95px;
    top: 0;
    bottom: 0;
    margin: 0 auto;
    z-index: 99;
  }
  .header {
    background-color: white;
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 18px;
    font-weight: 600;
    img {
      max-width: 40px;
    }
  }
  .header-avatar {
    width: 52px;
    height: 52px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 100rem;
    }
  }
  .header-right {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

const Header = () => {
  const location = useLocation();
  if (location.pathname.startsWith("/auth/")) {
    return;
  }
  return (
    <HeaderStyle>
      <div className="header-style">
        <div className="header">
          <NavLink to="/home" className="logo">
            <img srcSet="/logo.png 2x" alt="monkey-blogging" className="logo" />
            <span className="hidden lg:inline-block">Monkey Blogging</span>
          </NavLink>
          <div className="header-right">
            <Button
              to="/manage/add-post"
              className="header-button"
              height="52px"
            >
              Search
            </Button>
            {/* <Link to="/profile" className="header-avatar">
          <img src={userInfo?.avatar} alt="" />
        </Link> */}
          </div>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
