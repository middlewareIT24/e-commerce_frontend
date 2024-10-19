import React from "react";
import { Offers } from "../components";
import { CategoryPage, OfferProductsPage } from "../pages";

const Home = () => {
  return (
    <>
      <Offers />
      <OfferProductsPage />
      <CategoryPage />
    </>
  );
};

export default Home;
