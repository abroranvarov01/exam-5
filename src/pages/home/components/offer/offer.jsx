import React from "react";
import PrimaryBtn from "../../../../components/primary-btn/primary-btn";
import BtnNextIcon from "../../../../assets/icons/btn-next-icon";
import { organicData } from "../../../../data/organic-data";
import ProductCard from "../../../../components/product-card/product-card";

const Offer = () => {
  return (
    <div className="bg-grayGreen py-[200px]">
      <div className="container">
        <div className="">
          <p className="text-green text-[36px] font-p font-yellowtail mb-[8px]">
            Offer
          </p>
          <div className="flex justify-between items-center mb-[50px]">
            <h2 className="font-h text-white text-h2">
              We Offer Organic For You
            </h2>
            <PrimaryBtn
              nextIcon={<BtnNextIcon />}
              className={
                "text-grayGreen py-[28px] px-[39px] flex items-center gap-[9px] rounded-[16px] bg-yellow font-bold text-p"
              }
            >
              View All Product
            </PrimaryBtn>
          </div>
          <ul className="grid grid-cols-4 gap-[20px]">
            {organicData.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Offer;
