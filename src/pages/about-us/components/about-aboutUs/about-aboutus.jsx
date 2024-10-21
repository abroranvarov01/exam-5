import React from "react";
import Eqipment from "../../../../assets/about-img/icons/eqipment";
import Growth from "../../../../assets/about-img/icons/growth";
import PrimaryBtn from "../../../../components/primary-btn/primary-btn";
import BtnNextIcon from "../../../../assets/icons/btn-next-icon";
import IMG from "../../../../assets/about-img/AboutImg.png";
const About_AboutUs = () => {
  return (
    <div className="pt-[209px] pb-[143px]">
      <div className="container flex  items-center">
        <div className="">
          <img src={IMG} alt="img" />
        </div>
        <div className="w-[663px] ml-auto">
          <p className="text-green text-[36px] font-p font-yellowtail mb-[8px]">
            About Us
          </p>
          <h2 className="text-h2 text-grayGreen font-h mb-[14px]">
            We do Creative Things for Success
          </h2>
          <p className="text-p text-ptext leading-p font-p mb-[48px]">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
            <br />
            <br />
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div className="flex items-center justify-between mb-[58px]">
            <div className="flex items-center gap-[15px]">
              <Eqipment />
              <h3 className="font-medium text-grayGreen text-h6 w-[226px]">
                Modern Agriculture Equipment
              </h3>
            </div>
            <div className="flex items-center gap-[15px]">
              <Growth />
              <h3 className="font-medium text-grayGreen text-h6 w-[226px]">
                No growth hormones are used
              </h3>
            </div>
          </div>
          <PrimaryBtn
            nextIcon={<BtnNextIcon />}
            className="text-white py-[28px] px-[39px] flex items-center gap-[9px] rounded-[16px] bg-grayGreen font-bold text-p"
          >
            Explore More
          </PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default About_AboutUs;
