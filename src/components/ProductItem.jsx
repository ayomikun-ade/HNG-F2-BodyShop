// ProductItem.jsx

import { Link, useNavigate } from "react-router-dom";
import StarRating from "./StarRating";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();

  const productClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="rounded-3xl bg-white font-semibold w-full transition duration-700 hover:ease-in-out hover:scale-[1.01]">
      <img
        loading="lazy"
        src={`http://api.timbu.cloud/images/${product.photos[0].url}`}
        className="w-full"
        alt={product.name}
      />
      <div className="bg-[#000] bg-opacity-15 flex flex-col gap-1 p-4 rounded-b-2xl shadow-md">
        <div className="flex justify-between flex-1 text-base text-black">
          <h3>{product.name}</h3>
          <div className="flex gap-0 items-center px-1 text-base text-black whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3587fc743300d2c8a6738e5ff610e063504059bc8cf20939676b5d0db7e1e0f3?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
              className="shrink-0 aspect-square w-[18px]"
              alt="Currency symbol"
            />
            <div>{product.current_price[0].NGN}</div>
          </div>
        </div>
        <button
          onClick={productClick}
          className=" font-Inter w-full mt-2 text-center text-xs flex justify-center items-center bg-[#c80001] hover:bg-[#f02020] rounded py-2 text-white"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
