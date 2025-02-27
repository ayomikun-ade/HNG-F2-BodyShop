import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FilterAndSort = () => {
  const [sort, setSort] = useState(false);

  const sortClick = () => {
    setSort(!sort);
  };

  const filterClick = () => {
    toast.info("Oops. No filter option available at the moment", {
      autoClose: 4500,
    });
  };

  return (
    <div className="flex justify-between px-2 mt-3 text-base max-md:max-w-full">
      <button
        onClick={filterClick}
        className="flex p-2 text-white whitespace-nowrap bg-[#F08000] rounded-lg cursor-pointer border-2 border-[#f08000] transition hover:ease-in-out hover:bg-transparent"
      >
        <div className="flex gap-1.5 justify-center items-center px-2">
          <span className="my-auto hidden md:inline-block">Filter</span>
          <img
            loading="lazy"
            src="/filter.png"
            className="h-5"
            alt="Filter icon"
          />
        </div>
      </button>
      <div
        onClick={sortClick}
        className="flex relative gap-2 my-auto text-[#F08000] cursor-pointer hover:scale-105 transition hover:ease-in-out"
      >
        <div className="flex">
          <span className="my-auto">Sort By</span>
          <img
            loading="lazy"
            src="/dropdown.png"
            className=""
            alt="Sort icon"
          />
        </div>
        <ul
          className={`absolute top-8 right-0 bg-white px-6 py-5 text-black ${
            sort ? `flex flex-col` : `hidden`
          } items-center gap-2 text-lg font-Inter font-medium`}
        >
          <li className="hover:text-[#f08000]">Recommended</li>
          <li className="hover:text-[#f08000]">Most Popular</li>
          <li className="hover:text-[#f08000]">Price</li>
          <li className="hover:text-[#f08000]">Brand</li>
        </ul>
      </div>
    </div>
  );
};

export default FilterAndSort;
