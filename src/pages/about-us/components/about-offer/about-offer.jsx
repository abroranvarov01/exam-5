import React from "react";
import { forYouData } from "../../../../data/forYou-data";
import OfferCard from "./components/offer-card";
const AboutOffer = () => {
  return (
    <div className="bg-grayGreen py-[188px] mb-[141px]">
      <div className="container">
        <p className="font-yellowtail text-[36px] text-center font-p mb-[8px] text-green">
          About Us
        </p>
        <h2 className="font-h text-white text-center mb-[33px] text-h2">
          What We Offer for You
        </h2>
        <ul className="flex items-center justify-between">
          {forYouData.map((item) => (
            <OfferCard key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutOffer;
