import Image from "next/image";
import Link from "next/link";
import React from "react";

type NewsCardProps = {
  image: string;
  desc: string;
  title: string;
  id: number;
};

const NewsCard = ({ image, desc, title, id }: NewsCardProps) => {
  return (
    <div className="grid grid-rows-2">
      {/* Image */}
      <div className=" h-72 relative rounded-md overflow-hidden">
        <Image src={image} alt={title} fill objectFit="cover" />
      </div>
      {/* Title And Desc */}
      <div className="pt-4">
        <h3 className="md:text-2xl text-lg font-semibold mb-3">{title}</h3>
        <p className="mb-5 text-gray-400 md:text-base text-sm">{desc}</p>
        <Link
          href={`/news/${id}`}
          className="p-2 px-6 rounded-sm bg-secondary z-40 mt-6"
        >
          Click here
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
