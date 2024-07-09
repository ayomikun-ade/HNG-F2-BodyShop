import React, { useState } from "react";
// import { Link } from "react-router-dom";

const CartItem = ({ name, imageSrc, price }) => {
  let [count, setCount] = useState(1);

  const addItem = () => {
    let num = count + 1;

    setCount(num);
  };
  const removeItem = () => {
    let num = count - 1;
    num < 1 ? (num = 1) : count;
    setCount(num);
  };

  return (
    <>
      <div className="rounded-3xl bg-white px-6 py-4 border hidden lg:grid grid-cols-2 gap-4 font-semibold w-full">
        <div className="flex gap-2 items-center">
          <img loading="lazy" src={imageSrc} className="w-24" alt={name} />
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p>Comfortable and durable shoes.</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <span onClick={removeItem} className="px-1  cursor-pointer ">
              <img src="/minus.svg" alt="minus sign" />
            </span>
            <p>{count}</p>
            <span onClick={addItem} className="px-1 cursor-pointer">
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
              <div className="text-2xl">{price}</div>
            </div>
            <img src="/delete.svg" alt="delete" className="w-8" />
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="rounded-3xl bg-white px-6 py-6 border lg:hidden grid grid-cols-2 font-semibold w-full">
        <div className="flex gap-2 items-center">
          <img loading="lazy" src={imageSrc} className="w-24" alt={name} />
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p>Comfortable and durable shoes.</p>
            <div className="flex gap-0 items-center px-1 text-base text-black whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3587fc743300d2c8a6738e5ff610e063504059bc8cf20939676b5d0db7e1e0f3?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
                className="shrink-0 w-[20px]"
                alt="Currency symbol"
              />
              <div className="text-xl">{price}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-between">
          <div className="flex gap-10">
            <img
              src="/delete.svg"
              alt="delete"
              className="w-8 hover:fill-red-400 cursor-pointer"
            />
          </div>
          <div className="flex gap-0 -mb-5 sm:mb-0 sm:gap-2 items-center">
            <span onClick={removeItem} className="px-1  cursor-pointer ">
              <img src="/minus.svg" alt="minus sign" />
            </span>
            <p>{count}</p>
            <span onClick={addItem} className="px-1 cursor-pointer">
              <img src="/plus.svg" alt="plus sign" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
