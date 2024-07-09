import React from "react";

const OrderSummary = () => {
  return (
    <div className="col-span-2">
      <h2>Order Summary</h2>
      <div>
        <div>
          <p>Price of Items</p>
          <p>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3587fc743300d2c8a6738e5ff610e063504059bc8cf20939676b5d0db7e1e0f3?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
              className="shrink-0 w-[24px]"
              alt="Currency symbol"
            />
            311,000
          </p>
        </div>
        <div>
          <p>Discount</p>
          <p>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3587fc743300d2c8a6738e5ff610e063504059bc8cf20939676b5d0db7e1e0f3?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
              className="shrink-0 w-[24px]"
              alt="Currency symbol"
            />
            0,000
          </p>
        </div>
        <div>
          <p>VAT</p>
          <p>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3587fc743300d2c8a6738e5ff610e063504059bc8cf20939676b5d0db7e1e0f3?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
              className="shrink-0 w-[24px]"
              alt="Currency symbol"
            />
            0,000
          </p>
        </div>
        <div>
          <p>Shipping</p>
          <p>Free</p>
        </div>
      </div>
      <div>
        <p>Total</p>
        <p>
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
  );
};

export default OrderSummary;
