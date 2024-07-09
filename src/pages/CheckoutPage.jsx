import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import CheckoutForm from "../components/CheckoutForm";
import OrderSummary from "../components/OrderSummary";

const CheckoutPage = () => {
  return (
    <div className="px-4 md:px-[120px] w-full font-Inter">
      <ToastContainer />
      <div className="hidden lg:flex">
        <Header />
      </div>
      <Title title={"Checkout"} nav={"/cart"} />
      <div className="grid grid-cols-5 mt-8 gap-5">
        <CheckoutForm />
        <OrderSummary />
      </div>
    </div>
  );
};

export default CheckoutPage;
