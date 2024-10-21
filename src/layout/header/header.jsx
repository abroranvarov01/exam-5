import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import RouteData from "../../data/Routes-data";
import HeaderInput from "./components/header-input";
import HeaderSelectIcon from "../../assets/icons/headerSelect-icon";

const Header = () => {
  return (
    <div className="py-[69px]">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[150px]">
            <Link to={"/"}>
              <img src={Logo} alt="Logo" />
            </Link>
            <ul className="flex gap-[40px] items-center">
              {RouteData.map((item) =>
                item.name === "Pages" ? (
                  <li key={item.id} className="flex items-center gap-[10px]">
                    <p className="text-grayGreen text-[20px] font-bold">
                      {item.name}
                    </p>
                    <HeaderSelectIcon />
                  </li>
                ) : (
                  <Link key={item.id} to={item.path}>
                    <li>
                      <p className="text-grayGreen text-[20px] font-bold">
                        {item.name}
                      </p>
                    </li>
                  </Link>
                )
              )}
            </ul>
          </div>
          <HeaderInput />
        </div>
      </div>
    </div>
  );
};

export default Header;
