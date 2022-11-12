import React from "react";
import styled from "styled-components";

const ViewProfileStyle = styled.div`
  .viewProfile {
    position: relative;
    width: 800px;
    height: 500px;
    margin-bottom: 2rem;
    -webkit-animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    transition: all 0.5s ease;
    &-box {
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      width: 100%;
      height: 100%;
      background: #2d3238;
      img {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        max-width: 100%;
        width: auto;
        max-height: 100%;
        height: auto;
        margin: auto;
        opacity: 1;
        -webkit-animation: show 0.2s ease-in-out forwards;
        animation: show 0.2s ease-in-out forwards;
      }
    }
  }
  @-webkit-keyframes slide-bottom {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(20px);
      transform: translateY(20px);
    }
  }
  @keyframes slide-bottom {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(20px);
      transform: translateY(20px);
    }
  }
`;

const ViewProfile = () => {
  return (
    <ViewProfileStyle>
      <div className="viewProfile">
        <div className="viewProfile-box">
          <img src="./person.jpg" alt="" />
        </div>
      </div>
    </ViewProfileStyle>
  );
};

export default ViewProfile;
