const FilterAndSort = () => {
  return (
    <div className="flex justify-between px-2 mt-3 text-base max-md:max-w-full">
      <button className="flex p-2 text-white whitespace-nowrap bg-pink-800">
        <div className="flex gap-1.5 justify-center px-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f54187dafe15b8f691c3203ad8fbc0d3dd17bfecbbfd1479af04add2536b6536?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
            className="shrink-0 w-6 aspect-square"
            alt="Filter icon"
          />
          <span className="my-auto">Filter</span>
        </div>
      </button>
      <div className="flex gap-2 my-auto text-pink-800">
        <span className="my-auto">Sort By</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/437858e4ef2a8c8c924a104b6e3a664666ad61e735650d75408a4a5cf6d60edc?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
          className="shrink-0 w-6 aspect-square"
          alt="Sort icon"
        />
      </div>
    </div>
  );
};

export default FilterAndSort;
