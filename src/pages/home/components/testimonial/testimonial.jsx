import React from "react";
import Ava from "../../../../assets/Testimonial-ava.svg";
import stars from "../../../../assets/tetsimonial-ava-star.svg";
import DetailCard from "./components/detail-card";
const Testimonial = () => {
  return (
    <div className="py-[160px] bg-[url('./src/assets/TestimonialBg.png')] bg-no-repeat bg-cover">
      <div className="container">
        <div className="w-[1010px] mx-auto text-center">
          <p className="text-green text-[36px] font-p font-yellowtail mb-[8px]">
            Testimonial
          </p>
          <h2 className="font-h text-grayGreen text-h2 mb-[60px]">
            What Our Clients Say
          </h2>
          <div className="w-[780px] mx-auto text-center pb-[102px]">
            <div className="w-[115px] mx-auto mb-[25px]">
              <img className="mb-[20px]" src={Ava} alt="img" />
              <img src={stars} alt="img" />
            </div>
            <p className="text-ptext text-p leading-p font-p mb-[25px]">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been.
            </p>
            <div className="pb-[24px]">
              <h3 className="font-semibold text-h6 text-grayGreen">
                Sara Taylor
              </h3>
              <p>Consumer</p>
            </div>
          </div>
          <ul className="flex items-center gap-[62px] pt-[102px] border-t-[1px] border-solid border-[#e0e0e0]">
            <li>
              <DetailCard>
                <div>
                  <p className="font-h text-h2 text-grayGreen">100%</p>
                  <p className="leading-p text-p text-grayGreen font-semibold">
                    Organic
                  </p>
                </div>
              </DetailCard>
            </li>
            <li>
              <DetailCard>
                <div>
                  <p className="font-h text-h2 text-grayGreen">285</p>
                  <p className="leading-p text-p text-grayGreen font-semibold">
                    Organic Orchads
                  </p>
                </div>
              </DetailCard>
            </li>
            <li>
              <DetailCard>
                <div>
                  <p className="font-h text-h2 text-grayGreen">350+</p>
                  <p className="leading-p text-p text-grayGreen font-semibold">
                    Organic Orchads
                  </p>
                </div>
              </DetailCard>
            </li>
            <li>
              <DetailCard>
                <div>
                  <p className="font-h text-h2 text-grayGreen">25+</p>
                  <p className="leading-p text-p text-grayGreen font-semibold">
                    Years of Farming
                  </p>
                </div>
              </DetailCard>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
