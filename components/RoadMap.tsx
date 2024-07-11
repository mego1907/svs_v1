import React from "react";
import TimeLine from "./TimeLine";

const RoadMap = () => {
  return (
    <div className="md:my-20 my-10 overflow-hidden md:px-0 px-4" id="roadmap">
      <div className="container">
        <h2 className="text-center md:text-4xl text-xl leading-snug font-semibold mb-6">
          Roadmap
        </h2>
        <p className="md:text-left text-center md:text-base text-sm">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>

        {/*  */}
        <div className="flex relative mt-10">
          <TimeLine />
          {/* <div className="w-1 h-full bg-white absolute left-1/2"></div>
          <div className="bg-gray-800 p-6 w-1/2 flex flex-col gap-8 rounded-md -translate-x-5">
            <span className="text-secondary text-xl">2021</span>
            <span>svs coin Platform Idea</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
