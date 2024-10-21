import React from "react";
import FooterInput from "./components/footer-input";
import Logo from "../../assets/Logo.svg";
import { InstagramIcon } from "../../assets/icons/InstagramIcon";
import { FacebookIcon } from "../../assets/icons/FacebookIcon";
import { TwitterIcon } from "../../assets/icons/TwitterIcon";
import { PinterestIcon } from "../../assets/icons/PinterestIcon";
const Footer = () => {
  return (
    <div>
      <FooterInput />
      <div className="container">
        <div className="px-[51px] pb-[102px] flex ">
          <ul className="flex flex-col gap-[32px] text-end w-[336px] pr-[51px] border-r-[1px] border-gray pb-[40px]">
            <li>
              <h2 className="text-h5 font-semibold text-grayGreen">
                Contact Us
              </h2>
            </li>
            <li>
              <h3 className="font-h text-p leading-p  text-opBlack">Email</h3>
              <a href="#" className="font-p text-p leading-p  text-opBlack">
                needhelp@Organia.com
              </a>
            </li>
            <li>
              <h3 className="font-h text-p leading-p  text-opBlack">Phone</h3>
              <a href="#" className="font-p text-p leading-p  text-opBlack">
                666 888 888
              </a>
            </li>
            <li>
              <h3 className="font-h text-p leading-p  text-opBlack">Address</h3>
              <a href="#" className="font-p text-p leading-p  text-opBlack">
                88 road, borklyn street, USA
              </a>
            </li>
          </ul>
          <div className="px-[42px]  w-[626px]">
            <div className="mb-[23px] w-[200px] mx-auto">
              <a className="inline-block" href="#">
                <img src={Logo} alt="Logo" />
              </a>
            </div>
            <div>
              <p className="mb-[49px] text-p leading-p text-grayGreen font-p text-center">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing
              </p>
              <ul className="flex items-center gap-[15px] w-[285px] mx-auto">
                <li className="w-[60px] h-[60px] bg-opGreen rounded-[100%] p-[20px]">
                  <a href="#">
                    <InstagramIcon />
                  </a>
                </li>
                <li className="w-[60px] h-[60px] bg-opGreen rounded-[100%] p-[20px]">
                  <a href="#">
                    <FacebookIcon />
                  </a>
                </li>
                <li className="w-[60px] h-[60px] bg-opGreen rounded-[100%] p-[20px]">
                  <a href="#">
                    <TwitterIcon />
                  </a>
                </li>
                <li className="w-[60px] h-[60px] bg-opGreen rounded-[100%] p-[20px]">
                  <a href="#">
                    <PinterestIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pl-[50px] pb-[34px] border-l-[1px] border-gray">
            <h2 className="text-h5 font-semibold text-grayGree mb-[24px]">
              Utility Pages
            </h2>
            <ul className="">
              <li>
                <a
                  href="#"
                  className="text-p font-p text-opBlack leading-[273%]"
                >
                  Style Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-p font-p  text-opBlack leading-[273%]"
                >
                  404 Not Found
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-p font-p  text-opBlack leading-[273%]"
                >
                  Password Protected
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-p font-p  text-opBlack leading-[273%]"
                >
                  Licences
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-p font-p  text-opBlack leading-[273%]"
                >
                  Changelog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-[16px] border-t-[1px] border-solid border-gray">
        <p className="text-p text-center font-p leading-p text-opBlack translate-x-[-3%]">
          Copyright © <span className="font-semibold">Organick</span> | Designed
          by <span className="font-semibold">VictorFlow</span> Templates -
          Powered by <span className="font-semibold">Webflow</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
