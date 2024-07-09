import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";

const CheckoutPage = () => {
  return (
    <div className="px-4 md:px-[120px] w-full font-Inter">
      <div className="hidden lg:flex">
        <Header />
      </div>
      <Title title={"Checkout"} nav={"/cart"} />
    </div>
  );
};

export default CheckoutPage;
