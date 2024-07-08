"use client";
import { newsData } from "@/dummy/data";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useMemo } from "react";

const SingleNew = () => {
  const { id } = useParams();

  const selectedNew = useMemo(
    () => newsData.find((item: { id: number }) => item.id === +id),
    [id]
  );

  return (
    <div className="min-h-screen bg-mainBg text-whit">
      <div className="container mx-auto pt-32 text-center flex flex-col items-center justify-center ">
        <div className="relative w-10/12 h-[500px] mb-10">
          <Image src={selectedNew?.image || ""} fill objectFit="cover" alt="" />
        </div>
        <h2 className="text-3xl font-bold mb-6">{selectedNew?.title}</h2>
        <p className="w-10/12">{selectedNew?.desc}</p>
      </div>
    </div>
  );
};

export default SingleNew;
