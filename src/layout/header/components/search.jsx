import React from "react";

const Search = ({ className, placeholder, type, name, id }) => {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      name={name}
      id={id}
    />
  );
};

export default Search;
