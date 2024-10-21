import React from "react";

const Banners = () => {
  return (
    <div className="pt-[154px] pb-[190px]">
      <div className="container">
        <div className="flex items-center gap-[36px]">
          <div className='w-[682px] bg-[url("./src/assets/banneerItemBg.png")] rounded-[30px] py-[110px] pl-[54px]  bg-no-repeat bg-cover'>
            <div className="w-[277px]">
              <p className="text-white text-[36px] font-p mb-[5px] font-yellowtail ">
                Natural!!
              </p>
              <h2 className="font-h text-white text-h3">
                Get Garden Fresh Fruits
              </h2>
            </div>
          </div>
          <div className='w-[682px] bg-[url("./src/assets/banneerItemBg2.png")] rounded-[30px] py-[110px] pl-[54px]  bg-no-repeat bg-cover'>
            <div className="w-[313px]">
              <p className="text-green text-[36px] font-p mb-[5px] font-yellowtail ">
                Offer!!
              </p>
              <h2 className="font-h text-grayGreen text-h3">
                Get 10% off <br/> on Vegetables
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
