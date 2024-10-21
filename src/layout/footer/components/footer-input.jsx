import React from "react";
import PrimaryBtn from "../../../components/primary-btn/primary-btn";
import InputCard from "../../../components/input/input";

const FooterInput = () => {
  return (
    <div className="container pb-[117px]">
      <div className="bg-[url('./src/assets/FooterInputBg.png')] py-[105px] px-[71px] rounded-[30px] bg-no-repeat bg-cover">
        <div className="flex items-center justify-between">
          <h2 className="font-h text-white text-h3 w-[357px]">
            Subscribe to our Newsletter
          </h2>
          <div className="">
            <form className="flex items-center gap-[6px]" method="post">
              <InputCard
                placeholder={"Enter your email"}
                type={"email"}
                className={
                  "w-[350px] pt-[28px] pb-[31px] pl-[23px] rounded-[13px] font-p text-p font-italic text-[#ababaa] bg-white outline-none"
                }
              />
              <PrimaryBtn
                className={
                  "text-white  py-[28px]  px-[64px] rounded-[16px] text-[20px] font-h bg-grayGreen"
                }
              >
                Subscribe
              </PrimaryBtn>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterInput;
