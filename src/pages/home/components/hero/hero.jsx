import React from "react";
import PrimaryBtn from "../../../../components/primary-btn/primary-btn";
import BtnNextIcon from "../../../../assets/icons/btn-next-icon";
const Hero = () => {
  return (
    <div className="bg-no-repeat bg-[url('./src/assets/HeroBg.jpg')] bg-cover">
      <div className="container">
        <div className="w-[645px] py-[276px]">
          <p className="text-[36px] text-green font-p font-yellowtail mb-[8px]">
            100% Natural Food
          </p>
          <h1 className="text-grayGreen text-h1 font-h mb-[23px]">
            Choose the best healthier way <br /> of life
          </h1>
          <PrimaryBtn
            nextIcon={<BtnNextIcon />}
            className={
              "text-grayGreen py-[28px] px-[39px] flex items-center gap-[9px] rounded-[16px] bg-yellow font-bold text-p"
            }
          >
            Explore Now
          </PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default Hero;
