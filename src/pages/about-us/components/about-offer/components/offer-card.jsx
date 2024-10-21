import React from "react";

const OfferCard = ({ img, name }) => {
  return (
    <li className="text-center">
      <div className="mb-[24px] ">
        <img
          className="w-[334px] h-[314px] rounded-[30px]"
          src={img}
          alt="img"
        />
      </div>
      <h3 className="font-medium text-h6 text-white">{name}</h3>
    </li>
  );
};

export default OfferCard;
