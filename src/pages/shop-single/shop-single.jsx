import React, { useEffect } from "react";
import { MainData } from "../../data/main-data";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card";
import ShopSingleCard from "./ui/shop-single-card";
import ShopSingleHero from "./shop-single-hero";
import { organicData } from "../../data/organic-data";
const ShopSingle = () => {
  const { id } = useParams();
  const product =
    MainData.find((item) => item.id == id) ||
    organicData.find((item) => item.id == id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <section>
        <ShopSingleHero />
      </section>
      <section>
        <ShopSingleCard {...product} />
      </section>
      <section className="py-[140px]">
        <div className="container">
          <h2 className="font-h text-grayGreen text-h2 text-center mb-[40px]">
            Related Products
          </h2>
          <ul className="grid grid-cols-4 gap-[20px]">
            {MainData.slice(0, 4).map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ShopSingle;
