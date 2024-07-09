import { toast } from "react-toastify";

const Footer = () => {
  const subscribe = (e) => {
    e.preventDefault();
    toast.success("Thank you for subscribing!");
  };

  return (
    <footer className="font-title flex flex-col px-16 py-20 mt-36 w-full bg-[#C80001] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      {/* <div className="mt-10 mb-3.5 w-full max-w-[1208px] max-md:max-w-full"> */}
      {/* <div className="flex gap-6 justify-center max-md:flex-col max-md:gap-0"> */}
      {/* <div className="flex flex-col items-center"> */}
      <div className="flex flex-col items-center gap-6 max-md:mt-10">
        <h2 className="text-[32px] p-2 text-white font-title">Body Shop</h2>
        <div className="flex gap-5 ">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/296e3c61bf550aae51931b05027c8ca5bbf6a356b8f8ec5581d342c3cdc40a89?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
            className="shrink-0 w-10 aspect-square"
            alt="Social media icon 1"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/82a7f3f19a2337680c45bd12c8ecd5e176bf9278922c921012f40c66d642b05a?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
            className="shrink-0 w-10 aspect-square"
            alt="Social media icon 2"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d0932e36122e66638883d6522be8e532cde9bc908e461a1487917d259aa3395?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
            className="shrink-0 w-10 aspect-square"
            alt="Social media icon 3"
          />
        </div>
      </div>
      {/* </div> */}
      {/* <div className="flex flex-col items-center ml-5 max-md:ml-0 max-md:w-full"> */}
        <div className="flex flex-col grow text-base text-white max-md:mt-6">
          <h3 className="text-2xl self-stretch">Contact us</h3>
          <address className="flex gap-2 mt-6 not-italic">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc99cc60aeb53c175f49e13603f0c75ae081604e276c579a89033aa584e233c8?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
              className="shrink-0 w-6 aspect-square"
              alt="Location icon"
            />
            <span className="my-auto">22, Ilerin Street, Lagos, Nigeria.</span>
          </address>
          <div className="flex gap-2 self-start mt-4 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8acf1ead769c0175506763e5d617d9954b36fb32034cc63fa87c15ea45321db3?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
              className="shrink-0 w-6 aspect-square"
              alt="Email icon"
            />
            <a href="mailto:Info@bodyshop.org" className="my-auto">
              Info@bodyshop.org
            </a>
          </div>
          <div className="flex gap-2 self-start mt-4 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5744e3b6f8b29e4fb54e29dcaa513de67dd5d78c237d277811484753d84609e7?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
              className="shrink-0 w-6 aspect-square"
              alt="Phone icon"
            />
            <a href="tel:08141552442" className="my-auto">
              08141552442
            </a>
          </div>
        </div>
      {/* </div> */}
      {/* <div className="flex flex-col max-md:ml-0 max-md:w-full"> */}
        <div className="flex flex-col gap-6 justify-center items-center self-stretch text-base text-white max-md:mt-7">
          <h3 className="text-2xl">Subscribe to our news letter</h3>
          <p className="text-[16px]">Enter your email for more updates</p>
          <form className="border border-[#FFB2E6] border-solid">
            {/* <label htmlFor="email" className="">
                  Email
                </label> */}
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-[299px] px-5 py-5 whitespace-nowrap text-black bg-white placeholder:text-black"
              aria-label="Enter your email for updates"
            />
            <button
              onClick={subscribe}
              className="p-5 bg-[#f08000] cursor-pointer hover:bg-[#f39f3f]"
            >
              Subscribe
            </button>
          </form>
        </div>
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </footer>
  );
};

export default Footer;
