import React from "react";
import { exportsData } from "../../../../data/export-data";
import { Link } from "react-router-dom";
import ExportCard from "../../../../components/exports-card/exports-card";

const AboutTeam = () => {
  return (
    <div className="pt-[177px] pb-[202px]">
      <div className="container">
        <div>
          <div className="w-[852px] mx-auto mb-[42px]">
            <p className="text-green text-[36px] font-p font-yellowtail mb-[8px] text-center">
              Team
            </p>
            <h2 className="font-h text-grayGreen text-h2 mb-[16px] text-center">
              Our Organic Experts
            </h2>
            <p className="text-ptext text-p leading-p font-p text-center">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
          </div>
          <ul className="flex items-center gap-[27px] w-[1440px] mx-auto">
            {exportsData.map((item) => (
              <Link key={item.id} to={item.id}>
                <ExportCard {...item} />
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
