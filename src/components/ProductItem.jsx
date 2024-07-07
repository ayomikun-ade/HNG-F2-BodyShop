// ProductItem.js

const ProductItem = ({ product }) => {
  return (
    // <div className="bg-white p-4 rounded-lg shadow-md">
    //   <img
    //     src={product.imageSrc}
    //     alt={product.name}
    //     className="w-full h-40 object-cover"
    //   />
    //   <p className="text-gray-800 font-semibold">{product.name}</p>
    //   <p className="text-gray-600">{product.price}</p>
    //   {/* Add buttons for adding to cart or viewing details */}
    // </div>
    <div className="rounded-2xl bg-white font-semibold w-full">
      <img
        loading="lazy"
        src={product.imageSrc}
        className="w-full"
        alt={product.name}
      />
      <div className="bg-white flex flex-col gap-1 p-4 rounded-b-2xl shadow-md">
        <div className="flex justify-between flex-1 text-base text-black">
          <div>{product.name}</div>
          <div className="flex gap-0 items-center px-1 text-base text-black whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3587fc743300d2c8a6738e5ff610e063504059bc8cf20939676b5d0db7e1e0f3?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
              className="shrink-0 aspect-square w-[18px]"
              alt="Currency symbol"
            />
            <div>{product.price}</div>
          </div>
        </div>
        <div className="flex justify-between">
          <img
            loading="lazy"
            src={product.rating}
            className="max-w-full aspect-[5] w-[120px]"
            alt="Product rating"
          />
          <button className="self-start mt-2 ml-4 text-xs text-[#426b69] max-md:ml-2.5">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
