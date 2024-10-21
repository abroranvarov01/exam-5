import React from "react";
import CategoryCard from "../../../components/category-card/category-card";
import PrimaryBtn from "../../../components/primary-btn/primary-btn";
import BtnNextIcon from "../../../assets/icons/btn-next-icon";
const ShopSingleCard = ({
  img,
  category,
  name,
  lastPrice,
  price,
  star: Star,
  description,
}) => {
  return (
    <div className="container">
      <div>
        <div className="flex items-center gap-[88px] w-[1337px] mb-[90px]">
          <div className=" relative bg-whiteGray w-[591px] h-[563px] text-center rounded-[30px]">
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[500px] h-[500px]">
              <img className="" src={img} alt="img" />
            </div>
            <CategoryCard
              className={
                "py-[6px] px-[12px] rounded-[8px] bg-grayGreen font-semibold text-[15px] text-white absolute top-[38px] left-[35px]"
              }
            >
              {category}
            </CategoryCard>
          </div>
          <div className="w-[658px]">
            <h2 className="text-grayGreen text-h3 font-semibold mb-[9px]">
              {name}
            </h2>
            <div className="mb-[9px]">
              <Star />
            </div>
            <div className="flex gap-[9px] items-center mb-[27px]">
              <p className="text-[20px] text-[#b8b8b8] font-semibold">
                {lastPrice}
              </p>
              <p className="text-h6 text-grayGreen font-bold">{price}</p>
            </div>
            <p className="text-p text-ptext font-p leading-p w-[618px] mb-[35px]">
              {description}
            </p>
            <div className="flex gap-[20px] items-center">
              <div className="flex items-center gap-[22px]">
                <p className="font-bold text-[20px] text-grayGreen">
                  Quantity :
                </p>
                <div className="py-[28px] px-[61px] border-[2px] border-grayGreen rounded-[18px]">
                  <p className="font-bold text-[20px] text-grayGreen">1</p>
                </div>
              </div>
              <PrimaryBtn
                nextIcon={<BtnNextIcon />}
                className="text-white py-[28px] px-[39px] flex items-center gap-[9px] rounded-[16px] bg-grayGreen font-bold text-[20px] "
              >
                Add To Cart
              </PrimaryBtn>
            </div>
          </div>
        </div>
        <div className="pl-[251px] pr-[207px]">
          <div className="flex gap-[20px] items-center mb-[27px] w-[692px] mx-auto">
            <PrimaryBtn
              className={
                "text-white  py-[23px]  px-[57px] rounded-[16px] text-h6 font-bold bg-grayGreen"
              }
            >
              Product Description
            </PrimaryBtn>
            <PrimaryBtn
              className={
                "text-grayGreen  py-[23px]  px-[61px] rounded-[16px] text-h6 font-bold bg-opGreen"
              }
            >
              Additional Info
            </PrimaryBtn>
          </div>
          <p className="text-p text-ptext font-p leading-p text-center w-[1337px]">
            Welcome to the world of natural and organic. Here you can discover
            the bounty of nature. We have grown on the principles of health,
            ecology, and care. We aim to give our customers a healthy
            chemical-free meal for perfect nutrition. It offers about 8–10%
            carbs. Simple sugars — such as glucose and fructose — make up 70%
            and 80% of the carbs in raw.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopSingleCard;
