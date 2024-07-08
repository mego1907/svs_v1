import Image from "next/image";
import React from "react";

const NewsSection = () => {
  const data = [
    {
      image:
        "https://svscoin.org/wp-content/uploads/2024/07/medi2-scaled-1.jpg",
      title: "Events",
    },
    {
      image:
        "https://svscoin.org/wp-content/uploads/2024/07/medi1-scaled-1.jpg",
      title: "Media",
    },
    {
      image:
        "https://svscoin.org/wp-content/uploads/2024/07/media3-scaled-1.jpg",
      title: "News",
    },
  ];

  return (
    <div className="overflow-hidden">
      <div className="container">
        <h2 className="text-center md:text-4xl text-xl leading-snug font-semibold md:my-16 my-10">
          In the News
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <NewCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const NewCard = ({ image, title }: { image: string; title: string }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="relative w-[353px] h-[235px] z-40">
        <Image src={image} alt={title} fill objectFit="contain" />
      </div>

      <h3 className="md:text-3xl text-xl font-semibold">{title}</h3>

      <button
        type="button"
        className="p-2 px-6 rounded-sm bg-secondary z-40 mt-6"
      >
        Click here
      </button>
    </div>
  );
};

export default NewsSection;
