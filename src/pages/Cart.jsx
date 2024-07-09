import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import { ToastContainer, toast } from "react-toastify";
import CartItem from "../components/CartItem";

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
    <div className="px-4 md:px-[120px] w-full font-Inter">
      <ToastContainer />
      <Header />
      <Title title={"Shopping Cart"} nav={"/"} />
      <p className="mt-6 text-lg px-2">You have four items in your cart</p>
      <div
        onClick={viewClick}
        className="mt-[42.5px] p-2 flex justify-end cursor-pointer hover: transition hover:ease-in"
      >
        <span className="text-[#f08000]">View All</span>
        <img loading="lazy" src="/dropdown.png" className="" alt="Sort icon" />
      </div>
      <div className="flex flex-col gap-4 mt-6">
        {cartItems.map((item) => (
          <CartItem
            id={item.id}
            name={item.name}
            imageSrc={item.imageSrc}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
