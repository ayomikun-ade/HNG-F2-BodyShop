import React from "react";
import loader from "/loader.png";

const Loading = () => {
  return (
    <div className="min-h-screen grid place-items-center absolute top-0 left-0 right-0 bottom-0 backdrop-blur-sm">
      <img src={loader} alt="loader" className="animate-spin w-40 h-40" />
    </div>
    // <div className="flex justify-center items-center">
    //   <div className="loader ease-linear rounded-full animate-spin border-4 border-t-4 border-gray-200 h-12 w-12"></div>
    // </div>
  );
};

export default Loading;
