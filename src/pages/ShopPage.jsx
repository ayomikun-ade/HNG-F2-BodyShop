import FilterAndSort from "../components/FilterAndSort";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductItem from "../components/ProductItem";
import products from "../components/productsData";
const ShopPage = () => {
  return (
    <div className="bg-[url(/src/assets/header.png)] bg-no-repeat bg-contain bg-[#c98ca7]">
      <div className=" px-[120px]">
        <Header />
        {/* Page header */}
        <div className="text-center mt-[53px] font-Inter">
          <h1 className="text-4xl font-bold leading-none mb-4">Shoes</h1>
          <p className="text-xl">Explore our range of footwear</p>
        </div>
        {/* Filter button */}
        <FilterAndSort />
        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-6 mb-8">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
        {/* Load more button */}
        <div className="flex justify-center items-center">
          <button className="bg-[#991e66] text-white text-base p-2 text-center">
            Load more
          </button>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ShopPage;
