import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/main-layout";
import Home from "./pages/home/home";
import AboutUs from "./pages/about-us/about-us";
import Shop from "./pages/shop/shop";
import ShopSingle from "./pages/shop-single/shop-single";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/shop-single/:id" element={<ShopSingle />} />
      </Route>
    </Routes>
  );
}

export default App;
