import Image from "next/image";
import React from "react";

const NewsSection = () => {
  const data = [
    {
      image:
        "https://svscoin.org/wp-content/uploads/2024/07/medi2-scaled-1.jpg",
      title: "Events",
      id: 1,
    },
    {
      image:
        "https://svscoin.org/wp-content/uploads/2024/07/medi1-scaled-1.jpg",
      title: "Media",
      id: 2,
    },
    {
      image:
        "https://svscoin.org/wp-content/uploads/2024/07/media3-scaled-1.jpg",
      title: "News",
      id: 3,
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

export const NewCard = ({
  image,
  title,
  id,
}: {
  image: string;
  title: string;
  id: number;
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="relative md:w-[353px] w-72 h-[235px] z-40">
        <Image src={image} alt={title} fill objectFit="contain" />
      </div>

      <h3 className="md:text-3xl text-xl font-semibold">{title}</h3>

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
