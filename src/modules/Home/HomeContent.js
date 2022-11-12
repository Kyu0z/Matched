import React from "react";
import styled from "styled-components";
import IconClose from "../../components/icon/IconClose";
import IconHeart from "../../components/icon/IconHeart";

const HomeContentStyled = styled.div`
  .home {
    &-content {
      border-radius: 8px;
      box-shadow: 0 0 10px rgb(0 0 0 / 10%);
    }
    &-feature {
      display: flex;
      align-items: center;
    }
    &-frameImg {
      position: relative;
      margin-right: 2rem;
      img {
        width: 100%;
        height: 30rem;
        object-fit: cover;
        border-radius: 8px;
      }
    }
    &-icon {
      display: flex;
      align-items: center;
      position: absolute;
      bottom: 5%;
      right: 35%;
      .icon {
        border-radius: 50%;
        background-color: #fff;
        padding: 0.8rem;
        cursor: pointer;
        &:hover {
          transform: scale(1.14);
          transition: all 0.2s linear;
        }
      }
    }
    &-info--wrap {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      h2 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
      }
      h3 {
        font-size: 1.2rem;
        font-weight: 600;
        margin: 1rem 0;
      }
      p {
        color: #767676;
      }
    }
  }
`;

const HomeContent = () => {
  return (
    <HomeContentStyled>
      <div className="home-content">
        <div className="home-feature">
          <div className="home-frameImg">
            <img srcSet="/user.jpg" alt="" />
            <div className="home-icon">
              <IconHeart className="icon"></IconHeart>
              <IconClose className="icon"></IconClose>
            </div>
          </div>
          <div className="home-info">
            <div className="home-info--wrap">
              <h2>
                Syrena Rose,
                <span>21</span>
              </h2>
              <h3>About me</h3>
              <p>Hey babe</p>
              <h3>Personal Info</h3>
              <p>Relationship: I'm single</p>
              <p>Sexuality: I'm straight</p>
            </div>
          </div>
        </div>
      </div>
    </HomeContentStyled>
  );
};

export default HomeContent;
