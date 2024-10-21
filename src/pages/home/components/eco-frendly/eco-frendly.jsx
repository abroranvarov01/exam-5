import React from "react";
import EcoImg from "../../../../assets/EcoFrendlyImage.png";

const EcoFrendly = () => {
  return (
    <div className="h-[931px]">
      <div className="container relative">
        <div className="w-[952px] h-[931px] absolute top-0 left-[-15%]">
          <img src={EcoImg} alt="img" />
        </div>
        <div className="w-[790px] rounded-[30px] absolute z-10 bg-white top-[50%] left-[63%] translate-x-[-50%] translate-y-[10%] pl-[98px] pt-[78px] pb-[77px]">
          <p className="text-green text-[36px] font-p font-yellowtail mb-[8px]">
            Eco Friendly
          </p>
          <h2 className="font-h text-grayGreen text-h2 mb-[35px]">
            Econis is a Friendly Organic Store
          </h2>
          <ul className="grid grid-cols-1 gap-[35px] pr-[69px]">
            <li>
              <h3 className="font-medium text-h6 text-grayGreen mb-[7px]">
                Start with Our Company First
              </h3>
              <p className="text-ptext text-p leading-p font-p">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </li>
            <li>
              <h3 className="font-medium text-h6 text-grayGreen mb-[7px]">
                Learn How to Grow Yourself
              </h3>
              <p className="text-ptext text-p leading-p font-p">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </li>
            <li>
              <h3 className="font-medium text-h6 text-grayGreen mb-[7px]">
                Farming Strategies of Today
              </h3>
              <p className="text-ptext text-p leading-p font-p">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EcoFrendly;
