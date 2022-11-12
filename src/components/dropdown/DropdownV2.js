import React, { useState } from "react";
import useClickOutSide from "../../hooks/useClickOutSide";

const DropdownV2 = ({ values, select, setSelect }) => {
  const { show, setShow, nodeRef } = useClickOutSide();
  return (
    <div className="relative w-full" ref={nodeRef}>
      <div
        className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
        onClick={() => setShow(!show)}
      >
        {/* Thay first input */}
        {values[select]}
      </div>
      {show && (
        <div
          className="border border-gray-200 rounded-lg absolute top-full left-0 w-full bg-white z-[9999]"
          onClick={() => setShow(!show)}
        >
          {Object.keys(values).map((key) => (
            <div className="p-4 cursor-pointer" onClick={() => setSelect(key)}>
              {values[key]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownV2;
