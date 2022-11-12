import React from "react";
import { useDropdown } from "./dropdown-context";

const List = ({ children }) => {
  const { show } = useDropdown();
  return (
    <div style={{ marginBottom: "0" }}>
      {show && (
        <div className="absolute top-full left-0 w-full bg-white border border-solid border-[#dadada] z-10 mb-3">
          {children}
        </div>
      )}
    </div>
  );
};

export default List;
