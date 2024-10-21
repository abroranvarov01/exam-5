import React from "react";
import ShopHero from "./components/shop-hero/shop-hero";
import { MainData } from "../../data/main-data";
import ProductCard from "../../components/product-card/product-card";

const Shop = () => {
  return (
    <div>
      <section>
        <ShopHero />
      </section>
      <section className="pt-[90px] pb-[140px]">
        <div className="container">
          <ul className="grid grid-cols-4   gap-y-[40px]">
            {MainData.map((item) => (
              <li key={item.id}>
                <ProductCard
                  name={item.name}
                  price={item.price}
                  lastPrice={item.lastPrice}
                  star={item.star}
                  img={item.img}
                  category={item.category}
                  id={item.id}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Shop;
