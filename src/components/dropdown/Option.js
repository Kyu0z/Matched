import React from "react";
import { useDropdown } from "./dropdown-context";

const Option = (props) => {
  const { onClick } = props;
  const { setShow } = useDropdown();
  const handleClick = () => {
    // Nếu có onClick thì kêu onClick() function
    onClick && onClick();
    setShow(false);
  };
  return (
    <div
      // Lúc ban đầu chỗ onClick={onClick}, sau này thay đổi lại theo chức năng đóng khi chọn
      className="py-4 px-5 cursor-pointer flex items-center justify-between hover:text-primary transition-all text-sm"
      onClick={handleClick}
    >
      {props.children}
    </div>
  );
};

export default Option;
