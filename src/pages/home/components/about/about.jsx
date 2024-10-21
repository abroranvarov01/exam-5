import React from "react";
import OraganicFood from "../../../../assets/icons/oragnic-food";
import Standarts from "../../../../assets/icons/standarts";
import PrimaryBtn from "../../../../components/primary-btn/primary-btn";
import BtnNextIcon from "../../../../assets/icons/btn-next-icon";
const AboutSection = () => {
  return (
    <div className='bg-[url("./src/assets/AboutBg.png")] bg-no-repeat  bg-cover'>
      <div className="container relative">
        <div className="bg-[url('./src/assets/AboutImg.png')] bg-no-repeat ] bg-center w-[911px] h-[867px] absolute top-[87px] left-[-160px]"></div>
        <div className="w-[702px] pt-[186px] pb-[199px] ml-auto">
          <p className="text-green text-[36px] font-p font-yellowtail mb-[8px]">
            About Us
          </p>
          <h2 className="font-h text-grayGreen text-h2 mb-[14px]">
            We Believe in Working Accredited Farmers
          </h2>
          <p className="text-ptext text-p leading-p  font-p w-[680px] mb-[46px]">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <ul className="grid grid-cols-1 gap-[30px] w-[564px] mb-[46px]">
            <li className="flex items-center gap-[19px]">
              <div className="w-[101px] h-[101px] rounded-[20px] bg-white pt-[23px] pr-[27px] pb-[32px] pl-[21px]">
                <OraganicFood />
              </div>
              <div>
                <h3 className="font-h text-grayGreen text-h6 mb-[7px]">
                  Organic Foods Only
                </h3>
                <p className="text-ptext text-p leading-p font-p">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </li>
            <li className="flex items-center gap-[19px]">
              <div className="w-[101px] h-[101px] rounded-[20px] bg-white pt-[23px] pr-[27px] pb-[32px] pl-[21px]">
                <Standarts />
              </div>
              <div>
                <h3 className="font-h text-grayGreen text-h6 mb-[7px]">
                  Quality Standards
                </h3>
                <p className="text-ptext text-p leading-p font-p">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </li>
          </ul>
          <PrimaryBtn
            nextIcon={<BtnNextIcon />}
            className="text-white py-[28px] px-[49px] flex items-center gap-[9px] rounded-[16px] bg-grayGreen font-bold text-p "
          >
            Shop Now
          </PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
