import Image from "next/image";
import Link from "next/link";
import React from "react";

type NewsCardProps = {
  image?: string;
  body: string;
  title: string;
  id: number;
  imageurl: string;
  index: number;
};

const NewsCard = ({
  image,
  body,
  title,
  id,
  imageurl,
  index,
}: NewsCardProps) => {
  console.log("index :", index);
  return (
    <Link
      href={`/news/${index && index + 1}`}
      className="grid md:grid-cols-[1fr_3fr] gap-6 bg-white/20 p-2 rounded-md z-40 relative"
    >
      {/* Image */}
      <div className=" h-72 relative rounded-md overflow-hidden">
        <img
          src={imageurl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Title And Desc */}
      <div className="pt-4 flex flex-col justify-between items-start">
        <div>
          <h3 className="md:text-2xl text-lg font-semibold mb-3">{title}</h3>
          <p className="mb-5 text-gray-400 md:text-base text-sm">
            {body.slice(0, 800)}
          </p>
        </div>
        <Link
          href={`/news/${index && index + 1}`}
          className="p-2 px-6 rounded-sm bg-secondary z-40 mt-6"
        >
          Click here
        </Link>
      </div>
    </Link>
  );
};

export default NewsCard;
