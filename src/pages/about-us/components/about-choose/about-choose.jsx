import React from "react";
import IMG from "../../../../assets/about-img/choose-img.png";
import PercentIcon from "../../../../assets/about-img/icons/perent-icon";
import returnImg from "../../../../assets/about-img/return.svg";
import FreshImg from "../../../../assets/about-img/fresh.svg";
import SupportImg from "../../../../assets/about-img/support.svg";
import PaymentImg from "../../../../assets/about-img/payment.svg";
const AboutChoose = () => {
  return (
    <div className="py-[190px] bg-whiteGray">
      <div className="container">
        <div>
          <div className="flex justify-between items-center mb-[91px]">
            <div>
              <p className="text-green text-[36px] font-p font-yellowtail">
                Why Choose us?
              </p>
              <h2 className="font-h text-grayGreen text-h2 mb-[25px]">
                We do not buy from the open market & traders.
              </h2>
              <p className="text-ptext text-p leading-p font-p mb-[36px] w-[638px]">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard the 1500s, when
                an unknown
              </p>
              <div>
                <div className="mb-[24px]">
                  <div className="flex items-center gap-[9px] rounded-[49px] py-[29px]  pl-[27px] bg-[#ececec] w-[339px] mb-[12px]">
                    <PercentIcon />
                    <h3 className="font-medium text-grayGreen text-[20px]">
                      100% Natural Product
                    </h3>
                  </div>
                  <p className="text-ptext text-p leading-p font-p pl-[60px] w-[454px]">
                    Simply dummy text of the printing and typesetting industry
                    Lorem Ipsum
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-[9px] rounded-[49px] py-[29px]  pl-[27px] bg-[#ececec] w-[339px] mb-[12px]">
                    <PercentIcon />
                    <h3 className="font-medium text-grayGreen text-[20px]">
                      Increases resistance
                    </h3>
                  </div>
                  <p className="text-ptext text-p leading-p font-p pl-[60px] w-[454px]">
                    Simply dummy text of the printing and typesetting industry
                    Lorem Ipsum
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[678px]">
              <img className=" h-[579px]" src={IMG} alt="img" />
            </div>
          </div>
          <ul className="grid grid-cols-4 gap-[30px] w-[1120px] mx-auto">
            <li className="w-[257px] rounded-[30px] bg-white px-[36px] pb-[19px] pt-[50px] text-center">
              <div className="mb-[15px] w-[65px] mx-auto">
                <img src={returnImg} alt="img" />
              </div>
              <h3 className="font-h text-grayGreen text-h6 mb-[12px]">
                Return Policy
              </h3>
              <p className="text-ptext text-p leading-p font-p">
                Simply dummy text of the printintypesetting industry.
              </p>
            </li>
            <li className="w-[257px] rounded-[30px] bg-white px-[36px] pb-[19px] pt-[50px] text-center">
              <div className="mb-[15px] w-[65px] mx-auto">
                <img src={FreshImg} alt="img" />
              </div>
              <h3 className="font-h text-grayGreen text-h6 mb-[12px]">
                100% Fresh
              </h3>
              <p className="text-ptext text-p leading-p font-p">
                Simply dummy text of the printintypesetting industry.
              </p>
            </li>
            <li className="w-[257px] rounded-[30px] bg-white px-[36px] pb-[19px] pt-[50px] text-center">
              <div className="mb-[15px] w-[65px] mx-auto">
                <img src={SupportImg} alt="img" />
              </div>
              <h3 className="font-h text-grayGreen text-h6 mb-[12px]">
                Support 24/7
              </h3>
              <p className="text-ptext text-p leading-p font-p">
                Simply dummy text of the printintypesetting industry.
              </p>
            </li>
            <li className="w-[257px] rounded-[30px] bg-white px-[36px] pb-[19px] pt-[50px] text-center">
              <div className="mb-[15px] w-[65px] mx-auto">
                <img src={PaymentImg} alt="img" />
              </div>
              <h3 className="font-h text-grayGreen text-h6 mb-[12px]">
                Secured Payment
              </h3>
              <p className="text-ptext text-p leading-p font-p">
                Simply dummy text of the printintypesetting industry.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutChoose;
