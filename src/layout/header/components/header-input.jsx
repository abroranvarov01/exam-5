import React from "react";
import Search from "./search";
import SearchIcon from "../../../assets/icons/search-icon";
import PrimaryBtn from "../../../components/primary-btn/primary-btn";
import CartIcon from "../../../assets/icons/cart-icon";
const HeaderInput = () => {
  return (
    <div className="flex items-center gap-[18px]">
      <form className="relative" method="post">
        <Search
          type={"text"}
          placeholder={""}
          className={
            "w-[376px] rounded-[36px] bg-SearhBG py-[5px] px-[6px] leading-[66px] outline-green"
          }
        />
        <button className="absolute top-[50%] translate-y-[-50%] right-[2%]  rounded-[100%] w-[56px] h-[56px] bg-green pt-[17px] pr-[16px] pb-[18px] pl-[19px]">
          <SearchIcon />
        </button>
      </form>
      <PrimaryBtn className="text-grayGreen flex items-center gap-[12px] border-[1px] border-[#e0e0e0] py-[5px] pl-[6px] pr-[23px] rounded-[33px] text-p font-semibold">
        <CartIcon />
        Cart (0)
      </PrimaryBtn>
    </div>
  );
};

export default HeaderInput;
