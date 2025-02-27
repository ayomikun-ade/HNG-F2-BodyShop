import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import StarRating from "./StarRating";
import { useCart } from "react-use-cart";
import Loading from "./Loading";
import { toast } from "react-toastify";
import StarRating from "./StarRating";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product.current_price);
  const { id } = useParams();
  const { addItem } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const ORG = import.meta.env.VITE_ORGANIZATION_ID;
        const API = import.meta.env.VITE_APP_ID;
        const APP = import.meta.env.VITE_APP_ID;

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
        // console.log(response.data);
      } catch (error) {
        // setError(error);
        console.log(error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <Loading />;

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.current_price,
      image: `https://api.timbu.cloud/images/${product.photos[0].url}`,
      quantity,
    });
    toast.success("Added to cart successfully!");
  };

  const handlePrice = (value) => {
    let newQuantity = quantity + value;
    if (newQuantity > 0) {
      setQuantity(newQuantity);
      setTotalPrice(newQuantity * product.current_price);
    }
  };
  //   const updatedInfo = JSON?.parse(product.description || "{}" || {});
  //   console.log(updatedInfo.description);

  return (
    <div className="grid justify-center md:grid-cols-2 grid-cols-1 items-center gap-8">
      <div className="flex flex-col gap-3">
        <div>
          {product?.photos && (
            <img
              loading="lazy"
              src={`http://api.timbu.cloud/images/${
                product?.photos.find((photo) => photo.position === 1)?.url
              }`}
              className="w-full rounded-2xl"
              alt={product.name}
            />
          )}
        </div>
        <div className="grid grid-cols-3 gap-2">
          <img
            loading="lazy"
            src={`http://api.timbu.cloud/images/${
              product?.photos.find((photo) => photo.position === 2)?.url
            }`}
            className="w-full rounded-xl"
            alt={product.name}
          />
          <img
            loading="lazy"
            src={`http://api.timbu.cloud/images/${
              product?.photos.find((photo) => photo.position === 3)?.url
            }`}
            className="w-full rounded-xl"
            alt={product.name}
          />
          <img
            loading="lazy"
            src={`http://api.timbu.cloud/images/${
              product?.photos.find((photo) => photo.position === 4)?.url
            }`}
            className="w-full rounded-xl"
            alt={product.name}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold">{product.name}</h3>
        <p>{product.description}</p>
        <StarRating rating={product.extra_infos[0]?.value} />
        <div>
          <div className="flex font-semibold gap-4 items-center px-1 text-base text-black whitespace-nowrap">
            <div className="flex">
              <p className="mr-2">Price: </p>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3587fc743300d2c8a6738e5ff610e063504059bc8cf20939676b5d0db7e1e0f3?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
                className="shrink-0 aspect-square w-[18px]"
                alt="Currency symbol"
              />
              <p>{product.current_price}</p>
            </div>
            {/* <div className="flex">
              <p className="mr-2">Total: </p>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3587fc743300d2c8a6738e5ff610e063504059bc8cf20939676b5d0db7e1e0f3?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
                className="shrink-0 aspect-square w-[18px]"
                alt="Currency symbol"
              />
              <p>{totalPrice ? totalPrice : product.current_price}</p>
            </div> */}
          </div>
          {/* <div className="font-semibold text-lg"></div> */}
        </div>
        {/* <div className="flex items-center justify-between">
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
        </div> */}
        <button
          onClick={handleAddToCart}
          className="text-lg border border-[#f08000] hover:bg-transparent hover:text-[#f08000] transition hover:ease-in-out bg-[#f08000] px-4 py-2 w-fit text-white rounded-lg font-Inter"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
