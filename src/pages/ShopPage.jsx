import FilterAndSort from "../components/FilterAndSort";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductItem from "../components/ProductItem";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
// import { Link, useNavigate } from "react-router-dom";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const pageClick = (e) => {
    // console.log(e.target.value);
    setCurrentPage(e.target.value);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/products`, {
          params: {
            organization_id: import.meta.env.VITE_ORGANIZATION_ID,
            reverse_sort: false,
            page: currentPage,
            size: 10,
            Appid: import.meta.env.VITE_APP_ID,
            Apikey: import.meta.env.VITE_API_KEY,
          },
        });
        const data = await response.data.items;
        setProducts(data);
        setLoading(false);
        // console.log(response.data);
      } catch (error) {
        // setError(error);
        console.log(error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, [currentPage]);

  // const productClick = () => {
  //   navigate(`/product/${product.id}`);
  // };

  return (
    <div className="flex flex-col min-h-screen items-center bg-[url(/src/assets/hero.png)] bg-no-repeat bg-auto md:bg-contain">
      <ToastContainer />
      {/* {loading && <Loading />} */}
      <div className="max-w-[1440px] overflow-hidden w-full">
        {/* <ToastContainer />
        {loading && <Loading />} */}
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
          {loading ? (
            <Loading />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-5 mt-6 mb-8">
              {products.map((product) => (
                // <Link key={product.id} to={`/product/${product.id}`}>
                <ProductItem key={product.id} product={product} />
                // </Link>
              ))}
            </div>
          )}

          {/* pagination button */}
          <div className="flex justify-center items-center gap-4 mb-1">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                value={page}
                onClick={pageClick}
                className={`text-[#f08000] border border-[#f08000] px-2 py-1 rounded ${
                  page == currentPage
                    ? `bg-[#f08000] text-white`
                    : `bg-transparent text-[#f08000]`
                } hover:bg-[#f08000] hover:text-white transition hover:ease-in-out text-base`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
        {/* Footer */}
      </div>
      <div className="w-full mt-auto ">
        <Footer />
      </div>
    </div>
  );
};

export default ShopPage;
