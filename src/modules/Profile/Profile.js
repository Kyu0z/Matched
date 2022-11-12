import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ButtonAdd from "../../components/button/ButtonAdd";
import IconEdit from "../../components/icon/IconEdit";
import IconProfile from "../../components/icon/IconProfile";
import IconSetting from "../../components/icon/IconSetting";
import Header from "../Header";
import Sidebar from "../Sidebar";
import AddImg from "./AddImg";
import AddInfo from "./AddInfo";
import AddState from "./AddState";
import AddVideo from "./AddVideo";
import AddWork from "./AddWork";
import IsEditMode from "./IsEditMode";
import ReplaceImg from "./ReplaceImg";
import ViewProfile from "./ViewProfile";

const ProfileStyle = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  .profile {
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
      padding: 0.6rem;
    }
    &-heading {
      display: flex;
      align-items: center;
      justify-content: space-between;
      h2 {
        font-size: 1.5rem;
        font-weight: 600;
      }
      p {
        font-weight: 400;
      }
    }

    &-more {
      display: flex;
      align-items: center;
    }

    &-addFeature {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      margin: 1.2rem 0;
      padding-bottom: 0.8rem;
    }

    &-addMore {
      border-bottom: 1px solid #eaeaea;
      border-top: 1px solid #eaeaea;
      padding: 1.5rem 0%;
      h2 {
        font-size: 1.5rem;
        font-weight: 700;
      }
      p {
        color: #767676;
        font-size: 1rem;
        margin: 1.2rem 0;
      }

      &.selected {
        /* display: none !important; */
      }
      &.no-selected {
        display: none !important;
      }
      &.no-selectedmore {
        opacity: 0.6;
      }
    }
  }
`;

const Profile = () => {
  const [sectionSelected, setSectionSelected] = useState();
  const [visiable, setVisiable] = useState(false);
  const handleVisiable = () => {
    setVisiable(!visiable);
  };
  useEffect(() => {
    document.title = "Profile Page";
  }, []);

  return (
    <ProfileStyle>
      <Header></Header>
      <div className="profile-main">
        <Sidebar></Sidebar>
        <div className="profile-content">
          <div
            className={`profile-heading ${
              // !sectionSelected khi tất cả cái chưa đc chọn
              !sectionSelected === "visiable" ? "selected" : "no-selected"
            }`}
          >
            <h2>
              Khải Duy, <span>21</span>
            </h2>
            <div className="profile-more">
              <IconSetting></IconSetting>
              <IconProfile
                onClick={() => {
                  handleVisiable();
                  setSectionSelected(visiable ? "visiable" : "");
                }}
              ></IconProfile>
            </div>
          </div>
          {visiable ? <ViewProfile /> : ""}

          <div
            className={`profile-addFeature ${
              !sectionSelected || sectionSelected === "FEATURE"
                ? "selected"
                : "no-selectedmore"
            }`}
          >
            <AddImg
              style={{
                backgroundColor: "#1dc071",
                color: "#fff",
              }}
            ></AddImg>
            <AddVideo></AddVideo>
            <ReplaceImg></ReplaceImg>
            <ReplaceImg></ReplaceImg>
            <AddImg></AddImg>
          </div>
          {/* Vì lúc start chưa đc chọn nên xét lại đk để hiện view profile (!sectionSelected)*/}
          <div
            className={`profile-addMore ${
              !sectionSelected || sectionSelected === "WORK"
                ? "selected"
                : "no-selected"
            }`}
          >
            <h2>Work & Education</h2>
            <p>
              Tell people more about yourself by adding your work and education
              details
            </p>

            <IsEditMode>
              <AddWork />
            </IsEditMode>
          </div>
          <div
            className={`profile-addMore ${
              !sectionSelected || sectionSelected === "DATE"
                ? "selected"
                : "no-selected"
            }`}
          >
            <h2>I'm here to</h2>
            <p>Here to date</p>
            <IsEditMode>
              <AddState />
            </IsEditMode>
          </div>
          <div
            className={`profile-addMore ${
              !sectionSelected || sectionSelected === "INFO"
                ? "selected"
                : "no-selected"
            }`}
          >
            <h2>Personal info</h2>
            <p>
              Write a few words about your temperament, personality, attitude to
              life and people. What distinguishes you from the crowd? What are
              your positive and negative traits?
            </p>
            <IsEditMode>
              <AddInfo />
            </IsEditMode>
          </div>
        </div>
      </div>
    </ProfileStyle>
  );
};

export default Profile;
