import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import OrderSummary from "./OrderSummary";
import OrderMobile from "./OrderMobile";
import { useCart } from "react-use-cart";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  number: yup
    .string()
    .matches(/^\d+$/, "Phone number must be digits only")
    .required("Phone number is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  address: yup.string().required("Address is required"),
  cardName: yup.string().required("Card name is required"),
  cardNo: yup
    .string()
    .matches(/^\d{16}$/, "Card number must be 16 digits")
    .required("Card number is required"),
  date: yup.string().required("Expiry date is required"),
  cvv: yup
    .string()
    .matches(/^\d{3}$/, "CVV must be 3 digits")
    .required("CVV is required"),
});

const CheckoutForm = () => {
  const { cartTotal } = useCart();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    // e.preventDefault();
    console.log(data);
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

  // const [showPage, setShowPage] = useState(true);

  return (
    <>
      <div className="col-span-3 md:pr-16 pr-0 mt-16 md:mt-5">
        <h2 className="text-2xl font-bold mb-6">Contact information</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
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
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label htmlFor="number" className="p-2">
                  Phone Number
                </label>
                <input
                  type="number"
                  id="number"
                  placeholder="080 000 000 000"
                  className="outline-none border border-neutral-400 rounded p-4"
                  {...register("number")}
                />
                {errors.number && (
                  <p className="text-red-500">{errors.number.message}</p>
                )}
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
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
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
                {...register("address")}
              />
              {errors.address && (
                <p className="text-red-500">{errors.address.message}</p>
              )}
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
                {...register("shipping")}
                value="free"
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
                {...register("shipping")}
                value="paid"
              />
              <img src="/check.svg" alt="check" className="w-7  mr-2" />
              <label htmlFor="paid" className="text-neutral-600 text-lg">
                Paid Shipping
              </label>
            </div>
          </fieldset>

          <OrderMobile totalAmount={cartTotal} />

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
                {...register("cardName")}
              />
              {errors.cardName && (
                <p className="text-red-500">{errors.cardName.message}</p>
              )}
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
                {...register("cardNo")}
              />
              {errors.cardNo && (
                <p className="text-red-500">{errors.cardNo.message}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col">
                <label htmlFor="date" className="p-2">
                  Expiry Date
                </label>
                <input
                  type="month"
                  id="date"
                  className="outline-none border border-neutral-400 bg-transparent rounded p-4"
                  {...register("date")}
                />
                {errors.date && (
                  <p className="text-red-500">{errors.date.message}</p>
                )}
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
                  {...register("cvv")}
                />
                {errors.cvv && (
                  <p className="text-red-500">{errors.cvv.message}</p>
                )}
              </div>
            </div>
          </fieldset>
          <button
            type="submit"
            className="mt-9 border-2 border-[#f08000] transition hover:ease-in hover:bg-transparent hover:text-[#f08000] bg-[#f08000] w-full text-white p-2 rounded-lg text-2xl"
          >
            Checkout
          </button>
          <Link to={"/"}>
            <button className="lg:hidden border border-[#f08000] w-full mt-5 py-2 text-[#f08000] rounded-lg text-2xl hover:text-black transition hover:ease-in">
              Cancel
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default CheckoutForm;
