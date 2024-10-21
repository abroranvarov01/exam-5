import React from "react";

const InputCard = ({ placeholder, type, name, id, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      id={id}
      className={className}
    />
  );
};

export default InputCard;
