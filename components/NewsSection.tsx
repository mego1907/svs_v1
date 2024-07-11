"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type SingleNewType = {
  id: number;
  imageurl: string;
  title: string;
  body: string;
};

const NewsSection = () => {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
      );
      const news = await response.json();

      setNewsData(news.Data);

      return news;
    };
    getData();
  }, []);

  // const data = [
  //   {
  //     image:
  //       "https://svscoin.org/wp-content/uploads/2024/07/medi2-scaled-1.jpg",
  //     title: "Events",
  //     id: 1,
  //   },
  //   {
  //     image:
  //       "https://svscoin.org/wp-content/uploads/2024/07/medi1-scaled-1.jpg",
  //     title: "Media",
  //     id: 2,
  //   },
  //   {
  //     image:
  //       "https://svscoin.org/wp-content/uploads/2024/07/media3-scaled-1.jpg",
  //     title: "News",
  //     id: 3,
  //   },
  // ];

  return (
    <div>
      <div className="container">
        <h2 className="text-center md:text-4xl text-xl leading-snug font-semibold md:py-16 py-10">
          In the News
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {newsData.slice(0, 3).map((item: SingleNewType, index) => (
            <NewCard key={index} {...item} />
          ))}
        </div>

        <div className="flex items-center justify-center mt-10">
          <Link
            href="/news"
            className="text-gray-300 border border-gray-300 px-10 py-2 rounded-full hover:bg-gray-600 transition-all"
          >
            All News
          </Link>
        </div>
      </div>
    </div>
  );
};

export const NewCard = ({
  image,
  title,
  id,
  imageurl,
}: {
  image?: string;
  title: string;
  id: number;
  imageurl: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4" id="news">
      <div className="relative md:w-[353px] w-72 h-[235px] z-40">
        {/* <Image
          src={image ? image : imageurl}
          alt={title}
          fill
          objectFit="contain"
        /> */}
        <img
          src={imageurl}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>

      <h3 className="md:text-3xl text-xl font-semibold text-center">{title}</h3>

      <a
        href={`/news/${id}`}
        className="p-2 px-6 rounded-sm bg-secondary z-40 mt-6"
      >
        Click here
      </a>
    </div>
  );
};

export default NewsSection;
