import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import StarRating from "./StarRating";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  //   const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const ORG = import.meta.env.VITE_ORGANIZATION_ID;
        const API = import.meta.env.VITE_APP_ID;
        const APP = import.meta.env.VITE_APP_ID;
        // console.log(APP);
        // const url = `/api/products/${id}?organization_id=${
        //   import.meta.env.VITE_ORGANIZATION_ID
        // }&Appid=${import.meta.env.VITE_APP_ID}&Apikey=${
        //   import.meta.env.VITE_APP_ID
        // }&`;
        // const url =
        //   "/api/products/1e9ad21a95a54afcb77b8dc2fa452523?organization_id=23be6d7ecbc44a779d7f6e356ce15071&Appid=YIICCNS5WM4VJ6B&Apikey=edbbb236d215459db89ebc62da6c80b520240712140602348087&";
        // console.log(url);
        // const response = await axios.get(url);
        const response = await axios.get(`/api/products/${id}`, {
          params: {
            organization_id: import.meta.env.VITE_ORGANIZATION_ID,
            Appid: import.meta.env.VITE_APP_ID,
            Apikey: import.meta.env.VITE_API_KEY,
          },
        });
        // console.log(response);
        const data = await response.data;
        console.log(data);
        setProduct(data);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        // setError(error);
        console.log(error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  let [quantity, setQuantity] = useState(1);
  let [totalPrice, setTotalPrice] = useState(product.current_price);

  const handlePrice = (value) => {
    let newQuantity = quantity + value;
    if (newQuantity > 0) {
      setQuantity(newQuantity);
      setTotalPrice(newQuantity * product.current_price);
    }
  };

  //   const price = product.current_price;

  return (
    <div className="grid justify-center md:grid-cols-2 grid-cols-1 items-center gap-8">
      <div>
        {product?.photos && (
          <img
            loading="lazy"
            src={`http://api.timbu.cloud/images/${product?.photos[0]?.url}`}
            className="w-full rounded-2xl"
            alt={product.name}
          />
        )}
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-4xl font-bold">{product.name}</h3>
        <p>{product.description}</p>
        <div>
          <div className="flex font-semibold gap-4 items-center px-1 text-base text-black whitespace-nowrap">
            <div className="flex">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3587fc743300d2c8a6738e5ff610e063504059bc8cf20939676b5d0db7e1e0f3?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
                className="shrink-0 aspect-square w-[18px]"
                alt="Currency symbol"
              />
              <p>{product.current_price}</p>
            </div>
            <div className="flex">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3587fc743300d2c8a6738e5ff610e063504059bc8cf20939676b5d0db7e1e0f3?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
                className="shrink-0 aspect-square w-[18px]"
                alt="Currency symbol"
              />
              <p>Total: {totalPrice ? totalPrice : product.current_price}</p>
            </div>
          </div>
          {/* <div className="font-semibold text-lg"></div> */}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <span
              onClick={() => handlePrice(-1)}
              className="px-1  cursor-pointer "
            >
              <img src="/minus.svg" alt="minus sign" />
            </span>
            <p>{quantity}</p>
            <span
              onClick={() => handlePrice(1)}
              className="px-1 cursor-pointer"
            >
              <img src="/plus.svg" alt="plus sign" />
            </span>
          </div>
        </div>
        <Link className="text-lg bg-[#f08000] px-4 py-2 w-fit text-white rounded-lg font-Inter">
          Add to Cart
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
