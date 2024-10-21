import React from "react";
import PrimaryBtn from "../../../../../components/primary-btn/primary-btn";
const HaveCard = ({ children, bgImg }) => {
  return (
    <div className="h-[583px]" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="py-[244px] w-[320px] mx-auto">
        <PrimaryBtn
          className={
            "text-grayGreen py-[34px] px-[83px] flex items-center gap-[9px] rounded-[20px] bg-white font-normal text-h6"
          }
        >
          {children}
        </PrimaryBtn>
      </div>
    </div>
  );
};

export default HaveCard;
