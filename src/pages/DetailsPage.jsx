import React from "react";
import ProductDetails from "../components/ProductDetails";
import Title from "../components/Title";

const DetailsPage = () => {
  return (
    <div className="font-Inter max-w-[1440px] px-[120px] h-screen w-full flex items-center">
      {/* <Title title={"Product Details"} nav={"/"} /> */}
      <ProductDetails />
    </div>
  );
};

export default DetailsPage;
