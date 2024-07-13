import React, { useState } from "react";
import { useCart } from "react-use-cart";
// import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  let [quantity, setQuantity] = useState(1);
  let [totalPrice, setTotalPrice] = useState(item.price);
  const { updateItemQuantity, removeItem } = useCart();

  const handlePrice = (value) => {
    let newQuantity = quantity + value;
    if (newQuantity > 0) {
      setQuantity(newQuantity);
      setTotalPrice(newQuantity * item.price);
    }
  };

  return (
    <>
      <div className="rounded-3xl bg-white px-6 py-4 border hidden lg:grid grid-cols-2 gap-4 font-semibold w-full">
        <div className="flex gap-2 items-center">
          <img
            loading="lazy"
            src={item.image}
            className="w-24"
            alt={item.name}
          />
          <div>
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p>Comfortable and durable shoes.</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <span
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              className="px-1  cursor-pointer "
            >
              <img src="/minus.svg" alt="minus sign" />
            </span>
            <p>{item.quantity}</p>
            <span
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              className="px-1 cursor-pointer"
            >
              <img src="/plus.svg" alt="plus sign" />
            </span>
          </div>
          <div className="flex gap-10">
            <div className="flex gap-0 items-center px-1 text-base text-black whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3587fc743300d2c8a6738e5ff610e063504059bc8cf20939676b5d0db7e1e0f3?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
                className="shrink-0 w-[28px]"
                alt="Currency symbol"
              />
              <div className="text-2xl">{totalPrice}</div>
            </div>
            <button onClick={() => removeItem(item.id)}>
              <img src="/delete.svg" alt="delete" className="w-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="rounded-3xl bg-white px-6 py-6 border lg:hidden grid grid-cols-2 font-semibold w-full">
        <div className="flex gap-2 items-center">
          <img
            loading="lazy"
            src={item.image}
            className="w-24"
            alt={item.name}
          />
          <div>
            <h3 className="text-lg mb-1 font-semibold leading-none">
              {item.name}
            </h3>
            <p className="text-base font-normal">
              Comfortable and durable shoes.
            </p>
            <div className="flex gap-0 items-center pr-1 text-base text-black whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3587fc743300d2c8a6738e5ff610e063504059bc8cf20939676b5d0db7e1e0f3?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
                className="shrink-0 w-[20px]"
                alt="Currency symbol"
              />
              <div className="text-xl">{item.price}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-between">
          <div onClick={() => removeItem(item.id)} className="flex gap-10">
            <img
              src="/delete.svg"
              alt="delete"
              className="w-7 hover:fill-red-400 cursor-pointer"
            />
          </div>
          <div className="flex gap-0 sm:mb-0 sm:gap-2 items-center">
            <span
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              className="px-1  cursor-pointer "
            >
              <img src="/minus.svg" alt="minus sign" className="w-5" />
            </span>
            <p>{item.quantity}</p>
            <span
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              className="px-1 cursor-pointer"
            >
              <img src="/plus.svg" alt="plus sign" className="w-5" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
