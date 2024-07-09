import { NewCard } from "@/components/NewsSection";
import Link from "next/link";
import React from "react";
import NewsCard from "./_components/NewsCard";
import { newsData } from "@/dummy/data";

const News = () => {
  return (
    <div className="bg-mainBg min-h-screen text-whit">
      <div className="pt-40">
        <div className="container mx-auto">
          <h2 className="text-center text-4xl leading-snug font-semibold mb-8">
            News
          </h2>

          <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-10 px-5 md:px-0">
            {newsData.map((item, index) => (
              <NewsCard {...item} key={index} />
            ))}
          </div>
          {/* <NewCard {...item} key={index} /> */}
        </div>
      </div>
    </div>
  );
};

export default News;
