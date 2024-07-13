import React from "react";

const OrderMobile = ({ totalAmount }) => {
  return (
    <div
      className={`lg:hidden inline-block w-full border-b border-neutral-400 pt-10 pb-7 px-2`}
    >
      <h2 className="text-2xl font-bold mb-11">Order Summary</h2>
      <div className="flex flex-col gap-9 text-2xl">
        <div className="flex justify-between">
          <p>Price of Items</p>
          <p className="flex items-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3587fc743300d2c8a6738e5ff610e063504059bc8cf20939676b5d0db7e1e0f3?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
              className="shrink-0 w-[24px]"
              alt="Currency symbol"
            />
            {totalAmount}
          </p>
        </div>
        <div className="flex justify-between">
          <p>Discount</p>
          <p className="flex items-center">
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
          <p>VAT</p>
          <p className="flex items-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3587fc743300d2c8a6738e5ff610e063504059bc8cf20939676b5d0db7e1e0f3?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
              className="shrink-0 w-[24px]"
              alt="Currency symbol"
            />
            0.00
          </p>
        </div>
        <div className="flex justify-between border-b border-neutral-400 pb-9">
          <p>Shipping</p>
          <p className="text-[#f08000]">Free</p>
        </div>
      </div>
      <div className="flex justify-between text-2xl font-bold mt-9">
        <p>Total</p>
        <p className="flex items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3587fc743300d2c8a6738e5ff610e063504059bc8cf20939676b5d0db7e1e0f3?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
            className="shrink-0 w-[24px]"
            alt="Currency symbol"
          />
          {totalAmount}
        </p>
      </div>
    </div>
  );
};

export default OrderMobile;
