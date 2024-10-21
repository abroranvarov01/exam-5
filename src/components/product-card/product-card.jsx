import React from "react";
import CategoryCard from "../category-card/category-card";
import { Link } from "react-router-dom";

const ProductCard = ({
  img,
  name,
  lastPrice,
  price,
  star: Star,
  category,
  id,
}) => {
  return (
    <li className="w-[335px] rounded-[30px] bg-whiteGray pt-[29px] pr-[26px] pb-[17px] pl-[30px] relative">
      <Link to={`/shop-single/${id}`}>
        <CategoryCard className="py-[6px] px-[12px] rounded-[8px] bg-grayGreen font-p text-[15px] text-white">
          {category}
        </CategoryCard>
        <div className="absolute top-[50%] left-[50%] translate-x-[-47%] translate-y-[-50%] w-[335px]">
          <img className=" h-[328px]" src={img} alt="img" />
        </div>
        <div className="pt-[340px]">
          <h3 className="font-h text-p pb-[13px]  text-grayGreen mb-[9px]">
            {name}
          </h3>
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-[8px]">
              <p className="font-h text-[15ox] text-[#b8b8b8] line-through">
                {lastPrice}
              </p>
              <p className="font-bold text-[18px] text-grayGreen">{price}</p>
            </div>
            <Star />
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ProductCard;
