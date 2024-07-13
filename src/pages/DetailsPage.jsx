import React from "react";
import ProductDetails from "../components/ProductDetails";
import Title from "../components/Title";
import Header from "../components/Header";
import { ToastContainer } from "react-toastify";

const DetailsPage = () => {
  return (
    <div className="font-Inter max-w-[1440px] px-4 lg:px-[120px] md:px-[60px] min-h-screen w-full  items-center">
      <ToastContainer />
      <Header />
      <Title title={"Product Details"} nav={"/"} />
      <div className="flex mt-12 mb-6">
        <ProductDetails />
      </div>
    </div>
  );
};

export default DetailsPage;
