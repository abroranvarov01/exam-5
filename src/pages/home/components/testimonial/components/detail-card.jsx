import React from "react";

const DetailCard = ({ children }) => {
  return (
    <div className="w-[211px] h-[211px] border-[5px] border-green rounded-[100%] relative">
      <div className="w-[189px] h-[189px] pt-[40px] rounded-[100%] bg-[#f1f1f1] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        {children}
      </div>
    </div>
  );
};

export default DetailCard;
