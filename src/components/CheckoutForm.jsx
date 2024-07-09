import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CheckoutForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Payment Successful", { autoclose: 2500 });
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  const disabled = () => {
    toast.info("Paid shipping is not available at the moment", {
      autoClose: 3000,
    });
  };
  return (
    <>
      <div className="col-span-3 md:pr-16 pr-0 mt-16 md:mt-0">
        <h2 className="text-2xl font-bold mb-6">Contact information</h2>
        <form className="">
          <fieldset className="flex flex-col gap-4 border-b border-neutral-400 pb-10">
            <div className="flex flex-col">
              <label htmlFor="name" className="p-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="outline-none border border-neutral-400 rounded p-4"
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label htmlFor="name" className="p-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="number"
                  placeholder="080 000 000 000"
                  className="outline-none border border-neutral-400 rounded p-4"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="name" className="p-2">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="john.doe@example.com"
                  className="outline-none border border-neutral-400 rounded p-4"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="address" className="p-2">
                Address
              </label>
              <input
                type="text"
                id="address"
                placeholder="6391 Elgin St. Celina, Delaware 10299"
                className="outline-none border border-neutral-400 rounded p-4"
              />
            </div>
          </fieldset>
          <fieldset className="flex flex-col gap-4 border-b border-neutral-400 pb-10">
            <h2 className="text-2xl font-bold my-6">Shipping Method</h2>
            <div className="flex mb-2">
              <input
                type="radio"
                name="shipping"
                id="free"
                className="appearance-none"
              />
              <img src="/checked.svg" alt="check" className="w-7 mr-2" />
              <label htmlFor="free" className="text-lg hover:text-[#c80001]">
                Free Regular Shipping
              </label>
            </div>
            <div onClick={disabled} className="flex disabled">
              <input
                type="radio"
                name="shipping"
                id="paid"
                className="appearance-none"
              />
              <img src="/check.svg" alt="check" className="w-7  mr-2" />
              <label htmlFor="paid" className="text-lg">
                Paid Shipping
              </label>
            </div>
          </fieldset>
          <fieldset className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold my-6">Payment Details</h2>
            <div className="flex flex-col">
              <label htmlFor="card-name" className="p-2">
                Card Name
              </label>
              <input
                type="text"
                id="card-name"
                placeholder="John Doe"
                className="outline-none border border-neutral-400 rounded p-4"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="card-no" className="p-2">
                Card Number
              </label>
              <input
                type="text"
                id="card-no"
                placeholder="0000 0000 0000 0000"
                className="outline-none border border-neutral-400 rounded p-4"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col">
                <label htmlFor="date" className="p-2">
                  Expiry Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="outline-none border border-neutral-400 rounded p-4"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="cvv" className="p-2">
                  CVV
                </label>
                <input
                  type="number"
                  id="cvv"
                  placeholder="123"
                  className="outline-none border border-neutral-400 rounded p-4"
                />
              </div>
            </div>
          </fieldset>
          <button
            onClick={handleSubmit}
            className="my-9 border-2 border-[#f08000] hover:bg-transparent hover:text-[#f08000] bg-[#f08000] w-full text-white p-2 rounded-lg text-2xl"
          >
            Proceed to Pay
          </button>
        </form>
      </div>
    </>
  );
};

export default CheckoutForm;
