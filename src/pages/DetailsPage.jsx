import React from "react";
import ProductDetails from "../components/ProductDetails";
import Title from "../components/Title";
import Header from "../components/Header";

const DetailsPage = () => {
  return (
    <div className="font-Inter max-w-[1440px] px-[120px] min-h-screen w-full  items-center">
      <Header />
      <Title title={"Product Details"} nav={"/"} />
      <div className="flex mt-12">
        <ProductDetails />
      </div>
    </div>
  );
};

export default DetailsPage;
