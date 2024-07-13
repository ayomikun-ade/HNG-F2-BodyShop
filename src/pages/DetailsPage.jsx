import React from "react";
import ProductDetails from "../components/ProductDetails";
import Title from "../components/Title";

const DetailsPage = () => {
  return (
    <div className="max-w-[1440px] px-[120px] ">
      {/* <Title title={"Product Details"} nav={"/"} /> */}
      <ProductDetails />
    </div>
  );
};

export default DetailsPage;
