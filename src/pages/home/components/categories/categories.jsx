import React from "react";
import { MainData } from "../../../../data/main-data";
import { Link } from "react-router-dom";
import ProductCard from "../../../../components/product-card/product-card";
import PrimaryBtn from "../../../../components/primary-btn/primary-btn";
import BtnNextIcon from "../../../../assets/icons/btn-next-icon";
const Categories = () => {
  return (
    <div className="pt-[176px] pb-[200px]">
      <div className="container">
        <div className="w-[360px] mx-auto mb-[40px] text-center">
          <p className="mb-[8px] text-[36px] font-p font-yellowtail text-green">
            Categories
          </p>
          <h2 className="font-h text-grayGreen text-h2">Our Products</h2>
        </div>
        <ul className="flex items-center flex-wrap justify-center  gap-[20px] mb-[122px]">
          {MainData.slice(0, 8).map((item) => (
            <ProductCard
              key={item.id}
              name={item.name}
              price={item.price}
              lastPrice={item.lastPrice}
              star={item.star}
              img={item.img}
              category={item.category}
              id={item.id}
            />
          ))}
        </ul>
        <div className="w-[220px] mx-auto">
          <PrimaryBtn
            nextIcon={<BtnNextIcon />}
            className="text-white py-[28px] px-[46px] flex items-center gap-[9px] rounded-[16px] bg-grayGreen font-bold text-p "
          >
            Load More
          </PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default Categories;
