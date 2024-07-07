import React from "react";

const News = () => {
  return (
    <div className="bg-mainBg min-h-screen">
      <div className="pt-40">
        <div className="container">
          <h2 className="text-center text-4xl leading-snug font-semibold mb-8">
            News
          </h2>

          <div className="flex flex-wrap gap-16">{/* News Cards */}</div>
        </div>
      </div>
    </div>
  );
};

export default News;
