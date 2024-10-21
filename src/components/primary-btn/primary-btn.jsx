import React, { Children } from "react";

const PrimaryBtn = ({ children, className, nextIcon }) => {
  return (
    <button className={className}>
      {children}
      {nextIcon}
    </button>
  );
};

export default PrimaryBtn;
