"use client";
import { newsData } from "@/dummy/data";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";

const getData = async () => {
  const response = await fetch(
    "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
  );
  const news = await response.json();
  return news.Data[1];
};

type NewType = {
  id: number;
  imageurl: string;
  title: string;
  body: string;
};

const SingleNew = () => {
  const { id } = useParams();
  const [singleNew, setSingleNew] = useState<NewType | undefined>(undefined);

  useEffect(() => {
    const getNewsData = async () => {
      setSingleNew(await getData());
    };

    getNewsData();
  }, []);

  const selectedNew = useMemo(
    () => newsData.find((item: { id: number }) => item.id === +id),
    [id]
  );

  return (
    <div className="min-h-screen bg-mainBg text-whit">
      <div className="container mx-auto pt-32 text-center flex flex-col items-center justify-center ">
        <div className="relative w-10/12 h-[500px] mb-10">
          <img
            src={singleNew?.imageurl}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <h2 className="text-3xl font-bold mb-6">{singleNew?.title}</h2>
        <p className="w-10/12">{singleNew?.body}</p>
      </div>
    </div>
  );
};

export default SingleNew;
