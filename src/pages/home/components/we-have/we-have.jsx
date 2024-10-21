import React from "react";
import haveImg1 from "../../../../assets/have-card1.png";
import haveImg2 from "../../../../assets/have-card2.png";
import haveImg3 from "../../../../assets/have-card3.png";
import HaveCard from "./components/have-card";

const WeHave = () => {
  return (
    <div className="bg-[#f1f8f4]] py-[187px]">
      <div className="container relative">
        <ul className="grid grid-cols-3 gap-[42px]">
          <li>
            <HaveCard bgImg={haveImg1}>Organic Juice</HaveCard>
          </li>
          <li>
            <HaveCard bgImg={haveImg2}>Organic Food</HaveCard>
          </li>
          <li>
            <HaveCard bgImg={haveImg3}>Nuts Cookis</HaveCard>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WeHave;
