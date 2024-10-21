import React from "react";
import Hero from "./components/hero/hero";
import Banners from "./components/banners/banners";
import AboutSection from "./components/about/about";
import Categories from "./components/categories/categories";
import Testimonial from "./components/testimonial/testimonial";
import Offer from "./components/offer/offer";
import EcoFrendly from "./components/eco-frendly/eco-frendly";
import WeHave from "./components/we-have/we-have";
import News from "./components/news/news";

const Home = () => {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section>
        <Banners />
      </section>
      <section>
        <AboutSection />
      </section>
      <section>
        <Categories />
      </section>
      <section>
        <Testimonial />
      </section>
      <section>
        <Offer />
      </section>
      <section>
        <EcoFrendly />
      </section>
      <section>
        <WeHave />
      </section>
      <section>
        <News />
      </section>
    </div>
  );
};

export default Home;
