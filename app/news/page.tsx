"use client";
import { NewCard } from "@/components/NewsSection";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NewsCard from "./_components/NewsCard";
import { newsData } from "@/dummy/data";

const getData = async () => {
  const response = await fetch(
    "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
  );
  const news = await response.json();
  return news.Data;
};

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const getNewsData = async () => {
      const data = await getData();

      if (searchValue) {
        setNewsData(
          data?.filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
        );
      } else {
        setNewsData(data);
      }
    };

    getNewsData();
  }, [searchValue]);

  return (
    <div className="bg-mainBg min-h-screen text-whit">
      <div className="pt-40">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <h2 className="text-left text-4xl leading-snug font-semibold mb-10">
              News
            </h2>

            <div>
              <input
                type="text"
                className="border bg-transparent px-4 py-2 rounded-sm placeholder:text-white "
                placeholder="search..."
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col  gap-10 px-5 md:px-0">
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
