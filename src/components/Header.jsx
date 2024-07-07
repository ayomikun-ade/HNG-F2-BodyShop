const Header = () => {
  const menuItems = [
    { label: "Home", className: "" },
    { label: "Wears", className: "" },
    { label: "Shoes", className: "text-pink-800" },
    { label: "Bags", className: "" },
    { label: "Accessories", className: "" },
  ];
  return (
    <header className="flex items-center gap-6 py-[18px]  border-b border-pink-800 border-solid max-md:flex-wrap">
      <h1 className="text-[32px] p-2 text-[#991e66] font-title">Body Shop</h1>
      {/* <div className="flex gap-5 self-start max-md:flex-wrap"> */}
      <nav className="flex flex-1 gap-6 justify-between px-20 py-2 my-auto text-base whitespace-nowrap text-stone-950 max-md:flex-wrap max-md:px-5">
        {menuItems.map((item, index) => (
          <a key={index} href="#" className={`${item.className} p-2`}>
            {item.label}
          </a>
        ))}
      </nav>
      <form className="flex w-[235px] justify-center items-end px-16 py-2 rounded-2xl border-2 border-[#991e66] border-solid max-md:px-5">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input type="text" id="search" className="bg-transparent" />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f62c273e11ae708d5b21be568a7f00992dacfb9b4fdfca26c5e8dc18f58f8cb?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
          alt=""
        />
      </form>
      <div className="flex items-center gap-4">
        <button>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/512cf7caa992afcf495459107ba5d03465c3c2e824e1a0db608225257674da64?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
            className="shrink-0 w-10 aspect-square"
            alt=""
          />
        </button>
        <button>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e64cbf1465e79354fffbba662e1c4cdead76506e86e9620556ca53858657c414?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
            className="shrink-0 w-10 aspect-square"
            alt=""
          />
        </button>
      </div>
      {/* </div> */}
    </header>
  );
};

export default Header;
