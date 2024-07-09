import { Link } from "react-router-dom";
import cart from "/cart2.svg";
import menu from "/menu.svg";

const Header = () => {
  const menuItems = [
    { label: "Home", className: "" },
    { label: "Wears", className: "" },
    { label: "Shoes", className: "text-[#C80001]" },
    { label: "Bags", className: "" },
    { label: "Accessories", className: "" },
  ];
  return (
    <header className=" w-full flex items-center justify-between py-[18px] gap-4 md:border-b border-[#C80001] border-solid">
      <Link to={"/"}>
        <h1 className="text-[32px] p-2 text-[#C80001] font-title cursor-pointer">
          Body Shop
        </h1>
      </Link>
      {/* <div className="flex gap-5 self-start max-md:flex-wrap"> */}
      <nav className="hidden lg:flex flex-1 gap-4 justify-between px-10 py-2 my-auto text-base whitespace-nowrap text-stone-950 max-md:flex-wrap max-md:px-5">
        {menuItems.map((item, index) => (
          <a key={index} href="#" className={`${item.className} p-1`}>
            {item.label}
          </a>
        ))}
      </nav>
      <form className="hidden md:flex justify-center items-center px-8 py-2 rounded-2xl border-2 border-[#C80001] border-solid max-md:px-5">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          type="text"
          id="search"
          className="bg-transparent outline-none"
        />
        <img
          loading="lazy"
          src="/search.png"
          alt=""
          className="w-5 cursor-pointer transition hover:ease-in-out hover:scale-110"
        />
      </form>
      <div className="flex items-center gap-4">
        <Link to="/cart" className="hidden md:block">
          <button className="w-10 h-10 bg-[#c80001] rounded-full p-2 flex items-center justify-center hover:border-2 hover:border-[#c80001] hover:bg-transparent transition hover:ease-in">
            <img
              loading="lazy"
              src={cart}
              className="shrink-0 hover:fill-[#c80001] "
              alt=""
            />
          </button>
        </Link>
        <div className="block md:hidden cursor-pointer">
          <button className="">
            <img loading="lazy" src={menu} className="w-9" alt="" />
          </button>
        </div>
      </div>
      {/* </div> */}
    </header>
  );
};

export default Header;
