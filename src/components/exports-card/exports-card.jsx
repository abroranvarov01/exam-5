import React from "react";

const ExportCard = ({ img, name, about, socials }) => {
  const {
    instagram: Instagram,
    facebook: Facebook,
    twitter: Twitter,
  } = socials;
  return (
    <li
      className={`w-[450px] rounded-[30px] ${
        about === "Designer"
          ? "bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
          : "bg-whiteGray"
      }`}
    >
      <div className="">
        <img className="rounded-t-[30px]" src={img} alt="img" />
      </div>
      <div className="py-[35px] px-[28px]">
        <h3 className="font-h text-h6 text-grayGreen mb-[2px]">{name}</h3>
        <div className="flex items-center justify-between">
          <p className="text-[22px] font-p text-green font-yellowtail">
            {about}
          </p>
          <div className="flex items-center gap-[17px]">
            {Instagram && <Instagram />}
            {Facebook && <Facebook />}
            {Twitter && <Twitter />}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ExportCard;
