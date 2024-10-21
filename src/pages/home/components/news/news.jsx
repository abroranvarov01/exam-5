import React from "react";
import PrimaryBtn from "../../../../components/primary-btn/primary-btn";
import BtnNextIcon from "../../../../assets/icons/btn-next-icon";
import NewImg1 from "../../../../assets/NewsBg1.png";
import NewImg2 from "../../../../assets/NewsBg2.png";
import ProfilIcon from "../../../../assets/icons/profil-icon";
const News = () => {
  return (
    <div className="pt-[177px] pb-[185px]">
      <div className="container">
        <div>
          <p className="text-green text-[36px] font-p font-yellowtail mb-[8px]">
            News
          </p>
          <div className="flex i justify-between mb-[48px]">
            <h2 className="font-h  text-grayGreen text-h2">
              Discover weekly content <br /> about organic food, & more
            </h2>
            <div className="pt-[63px]">
              <PrimaryBtn
                nextIcon={<BtnNextIcon />}
                className="text-grayGreen py-[28px] px-[44px] h-[88px] flex items-center gap-[9px] rounded-[16px] bg-white border-grayGreen font-bold text-p border-[2px]"
              >
                More News
              </PrimaryBtn>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-[677px] bg-[url('./src/assets/NewsBg1.png')] rounded-[30px] h-[529px] pt-[43px] px-[32px] relative">
              <span className="py-[12px] px-[23px] bg-white rounded-[100%] inline-block">
                <div className="text-center">
                  <p className="text-grayGreen  font-h text-h6">
                    25 <br /> Nov
                  </p>
                </div>
              </span>
              <div className=" w-[613px] pt-[43px] px-[57px] pb-[60px] rounded-[30px] bg-white absolute top-[40%] shadow-[0_20px_35px_0_rgba(167,167,167,0.25)]">
                <div className="flex gap-[9px] items-center mb-[15px]">
                  <ProfilIcon />
                  <p className="text-grayGreen font-p text-p">By Rachi Card</p>
                </div>
                <h3 className="font-h text-grayGreen text-h6 mb-[2px] ">
                  The Benefits of Vitamin D & How to Get It
                </h3>
                <p className="text-ptext text-p leading-p font-p mb-[15px]">
                  Simply dummy text of the printing and typesetting <br />
                  industry. Lorem Ipsum
                </p>
                <PrimaryBtn
                  nextIcon={<BtnNextIcon />}
                  className={
                    "text-grayGreen py-[28px] px-[47px] flex items-center gap-[9px] rounded-[16px] bg-yellow font-bold text-p"
                  }
                >
                  Read More
                </PrimaryBtn>
              </div>
            </div>
            <div className="w-[677px] bg-[url('./src/assets/NewsBg2.png')] rounded-[30px] h-[529px] pt-[43px] px-[32px] relative">
              <span className="py-[12px] px-[23px] bg-white rounded-[100%] inline-block">
                <div className="text-center">
                  <p className="text-grayGreen  font-h text-h6">
                    25 <br /> Nov
                  </p>
                </div>
              </span>
              <div className=" w-[613px] pt-[43px] px-[57px] pb-[60px] rounded-[30px] bg-white absolute top-[40%]  shadow-[0_20px_35px_0_rgba(167,167,167,0.25)]">
                <div className="flex gap-[9px] items-center mb-[15px]">
                  <ProfilIcon />
                  <p className="text-grayGreen font-p text-p">By Rachi Card</p>
                </div>
                <h3 className="font-h text-grayGreen text-h6 mb-[2px] ">
                  Our Favourite Summertime Tommeto
                </h3>
                <p className="text-ptext text-p leading-p font-p mb-[15px]">
                  Simply dummy text of the printing and typesetting <br />
                  industry. Lorem Ipsum
                </p>
                <PrimaryBtn
                  nextIcon={<BtnNextIcon />}
                  className={
                    "text-grayGreen py-[28px] px-[46px] flex items-center gap-[9px] rounded-[16px] bg-yellow font-bold text-p"
                  }
                >
                  Read More
                </PrimaryBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
