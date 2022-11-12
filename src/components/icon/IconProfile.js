import React from "react";

const IconProfile = ({ onClick = () => {} }) => {
  return (
    <span
      onClick={onClick}
      style={{
        border: "1px solid rgba(45, 45, 45, 0.15)",
        padding: ".5rem",
        borderRadius: "5px",
        backgroundColor: "transparent",
        color: "#2d2d2d",
        margin: "0 .4REM",
        cursor: "pointer",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="ionicon"
        viewBox="0 0 512 512"
        width="30"
        height="25"
        borderColor="rgba(45, 45, 45, 0.15)"
        backgroundColor="transparent"
        color="#2d2d2d"
      >
        <title>Person</title>
        <path
          d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
          fill="none"
          stroke="currentColor"
          stroke-miterlimit="10"
          strokeWidth="32"
        />
      </svg>
    </span>
  );
};

export default IconProfile;
