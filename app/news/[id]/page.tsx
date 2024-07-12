import { newsData } from "@/dummy/data";
import { Metadata } from "next";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";

const getSingleNew = async (params: { id: string }) => {
  const response = await fetch(
    "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
  );
  const news = await response.json();

  return news.Data[+params.id];
};

export async function generateMetadata(props: {
  params: { id: string };
  searchParams: {};
}): Promise<Metadata> {
  const singleNew = await getSingleNew(props.params);

  return {
    title: `${singleNew?.title}`,
    description: singleNew?.body,
    keywords: ["SVS", "coin", "blockchain"],
    openGraph: {
      url: `https://svscoin.org/team/${singleNew?.id}/`,
      title: `${singleNew?.title}`,
      description: `${singleNew?.body}`,
      images: [singleNew?.imageurl],
    },
  };
}

const SingleNew = async ({ params }: { params: { id: string } }) => {
  const singleNew = await getSingleNew(params);

  return (
    <div className="min-h-screen bg-mainBg text-white">
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
