const Header = () => {
  const menuItems = [
    { label: "Home", className: "" },
    { label: "Wears", className: "" },
    { label: "Shoes", className: "text-[#C80001]" },
    { label: "Bags", className: "" },
    { label: "Accessories", className: "" },
  ];
  return (
    <header className="flex items-center gap-6 py-[18px]  border-b border-[#C80001] border-solid max-md:flex-wrap">
      <h1 className="text-[32px] p-2 text-[#C80001] font-title">Body Shop</h1>
      {/* <div className="flex gap-5 self-start max-md:flex-wrap"> */}
      <nav className="hidden lg:flex flex-1 gap-6 justify-between px-20 py-2 my-auto text-base whitespace-nowrap text-stone-950 max-md:flex-wrap max-md:px-5">
        {menuItems.map((item, index) => (
          <a key={index} href="#" className={`${item.className} p-2`}>
            {item.label}
          </a>
        ))}
      </nav>
      <form className="flex w-[235px] justify-center items-center px-16 py-2 rounded-2xl border-2 border-[#C80001] border-solid max-md:px-5">
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
        {/* <button>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/512cf7caa992afcf495459107ba5d03465c3c2e824e1a0db608225257674da64?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
            className="shrink-0 w-10 aspect-square"
            alt=""
          />
        </button> */}
        <button className="w-10 h-10 bg-[#c80001] rounded-full p-2 flex items-center justify-center hover:border-2 hover:border-[#c80001] hover:bg-transparent transition hover:ease-in">
          <img
            loading="lazy"
            src="/cartsvg.svg"
            className="shrink-0 hover:fill-[#c80001]"
            alt=""
          />
        </button>
      </div>
      {/* </div> */}
    </header>
  );
};

export default Header;
