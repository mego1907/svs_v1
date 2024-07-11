import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="flex items-center justify-center md:py-20 py-10">
      <AiOutlineLoading3Quarters className="animate-spin" fontSize={100} />
    </div>
  );
};

export default Loading;
