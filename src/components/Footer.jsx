import { toast } from "react-toastify";

const Footer = () => {
  const subscribe = (e) => {
    e.preventDefault();
    toast.success("Thank you for subscribing!");
  };

  return (
    <footer className="font-title flex flex-col flex-wrap md:flex-row gap-10 items-start md:items-center justify-evenly px-8 md:px-28 py-9 md:py-40 mt-36 bg-[#C80001]">
      <div className="flex flex-col items-center gap-6 mx-6">
        <h2 className="text-[32px] p-2 text-white font-title">Body Shop</h2>
        <div className="flex gap-5 ">
          <img
            loading="lazy"
            src="/facebook.svg"
            className="shrink-0 w-12 h-12 border border-white p-1 bg-white rounded-full"
            alt="Social media icon 1"
          />
          <img
            loading="lazy"
            src="/instagram.svg"
            className="shrink-0 w-12 h-12 border border-white p-1 bg-white rounded-full"
            alt="Social media icon 2"
          />
          <img
            loading="lazy"
            src="/twitter.svg"
            className="shrink-0 w-12 h-12 border border-white p-1 bg-white rounded-full"
            alt="Social media icon 3"
          />
        </div>
      </div>

      <div className="flex flex-col mx-6 text-wrap text-base text-white max-md:mt-6">
        <h3 className="text-2xl self-stretch">Contact us</h3>
        <address className="flex gap-2 mt-6 not-italic">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc99cc60aeb53c175f49e13603f0c75ae081604e276c579a89033aa584e233c8?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
            className="shrink-0 w-6 aspect-square"
            alt="Location icon"
          />
          <span className="">22, Ilerin Street, Lagos, Nigeria.</span>
        </address>
        <div className="flex gap-2 self-start mt-4 whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8acf1ead769c0175506763e5d617d9954b36fb32034cc63fa87c15ea45321db3?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
            className="shrink-0 w-6 aspect-square"
            alt="Email icon"
          />
          <a href="mailto:Info@bodyshop.org" className="">
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
          <a href="tel:08141552442" className="">
            08141552442
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-6 self-center text-base text-white">
        <h3 className="text-2xl text-center">Subscribe to our news letter</h3>
        <p className="text-[16px] text-center">
          Enter your email for more updates
        </p>
        <form className="w-full overflow-hidden flex justify-center shrink">
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="w-full rounded-l-lg pl-4 py-4 text-[#c80001] text-xl outline-none bg-white font-semibold placeholder:text-[#c80001]"
            aria-label="Enter your email for updates"
          />
          <button
            onClick={subscribe}
            className="self-stretch rounded-r-lg px-3 bg-[#f08000] cursor-pointer hover:bg-[#f39f3f]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
