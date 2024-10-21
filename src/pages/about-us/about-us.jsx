import React from "react";
import AboutHero from "./components/about-hero/about-hero";
import About_AboutUs from "./components/about-aboutUs/about-aboutus";
import AboutChoose from "./components/about-choose/about-choose";
import AboutTeam from "./components/about-team/about-team";
import AboutOffer from "./components/about-offer/about-offer";

const AboutUs = () => {
  return (
    <div>
      <section>
        <AboutHero />
      </section>
      <section>
        <About_AboutUs />
      </section>
      <section>
        <AboutChoose />
      </section>
      <section>
        <AboutTeam />
      </section>
      <section>
        <AboutOffer />
      </section>
    </div>
  );
};

export default AboutUs;
