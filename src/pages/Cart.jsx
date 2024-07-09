import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import { ToastContainer, toast } from "react-toastify";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = [
    { id: 1, name: "Brown Ecco Shoe", imageSrc: "/ecco.png", price: "80000" },
    { id: 2, name: "Nike Sneakers", imageSrc: "/nike.png", price: "75000" },
    { id: 3, name: "Nike Air", imageSrc: "/air.png", price: "60000" },
    {
      id: 4,
      name: "Black Ankle Shoe",
      imageSrc: "/maleankle.png",
      price: "90000",
    },
  ];

  const viewClick = () => {
    toast.info("You are currently viewing all items!", { autoClose: 4000 });
  };
  return (
    <div className="px-4 mb-10 md:px-[120px] w-full font-Inter">
      <ToastContainer />
      <div className="hidden lg:flex">
        <Header />
      </div>
      <div className=" mt-10 lg:mt-0">
        <Title title={"Shopping Cart"} nav={"/"} />
      </div>
      <p className="mt-6 text-lg px-2 text-center md:text-left">
        You have four items in your cart
      </p>
      <div
        onClick={viewClick}
        className="hidden mt-[42.5px] p-2 lg:flex justify-end cursor-pointer hover: transition hover:ease-in"
      >
        <span className="text-[#f08000]">View All</span>
        <img loading="lazy" src="/dropdown.png" className="" alt="Sort icon" />
      </div>
      <div className="flex flex-col gap-4 mt-6">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            imageSrc={item.imageSrc}
            price={item.price}
          />
        ))}
      </div>
      <div className="mt-6 p-2 text-lg flex flex-col gap-3">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p className="flex text-lg">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3587fc743300d2c8a6738e5ff610e063504059bc8cf20939676b5d0db7e1e0f3?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
              className="shrink-0 w-[24px]"
              alt="Currency symbol"
            />
            311,000
          </p>
        </div>
        <div className="flex justify-between">
          <p>V.A.T</p>
          <p className="flex text-lg font-semibold">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3587fc743300d2c8a6738e5ff610e063504059bc8cf20939676b5d0db7e1e0f3?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
              className="shrink-0 w-[24px]"
              alt="Currency symbol"
            />
            0.00
          </p>
        </div>
        <div className="flex justify-between">
          <p className="font-bold">Total</p>
          <p className="flex text-lg font-semibold">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3587fc743300d2c8a6738e5ff610e063504059bc8cf20939676b5d0db7e1e0f3?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
              className="shrink-0 w-[24px]"
              alt="Currency symbol"
            />
            311,000
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col-reverse lg:flex-row justify-between items-center">
        <Link
          to={"/"}
          className="text-[#f08000] text-xl px-6 py-3 lg:py-0 w-full text-center lg:border-none border-2 border-[#f08000] rounded-xl mt-2 lg:mt-0 lg:w-fit"
        >
          Continue Shopping
        </Link>
        <Link
          to={"/checkout"}
          className="bg-[#f08000] w-full lg:w-fit text-center text-white px-6 py-3 rounded-xl text-xl"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
