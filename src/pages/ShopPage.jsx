import { Link } from "react-router-dom";
import FilterAndSort from "../components/FilterAndSort";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductItem from "../components/ProductItem";
import products from "../components/productsData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShopPage = () => {
  const moreClick = () => {
    toast.info("Sadly, there are no more products to view. Try again later.", {
      autoClose: 4000,
    });
  };
  return (
    <div className="max-w-[1440px] overflow-hidden w-full bg-[url(/src/assets/hero.png)] bg-no-repeat bg-auto md:bg-contain">
      <ToastContainer />
      <div className="px-4 lg:px-[119px] md:px-[60px]">
        <Header />
        {/* Page header */}
        <div className="text-center mt-[53px] font-Inter">
          <h1 className="text-4xl font-bold leading-none mb-4">Shoes</h1>
          <p className="text-xl">Explore our range of footwear</p>
        </div>

        {/* Filter button */}
        <FilterAndSort />

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-5 mt-6 mb-8">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>

        {/* Load more button */}
        <div className="flex justify-center items-center">
          <button
            onClick={moreClick}
            className="text-[#f08000] hover:scale-105 transition hover:ease-in-out text-base text-center"
          >
            See more
          </button>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ShopPage;
