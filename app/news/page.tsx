import { NewCard } from "@/components/NewsSection";
import Link from "next/link";
import React from "react";

const News = () => {
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
    <div className="bg-mainBg min-h-screen">
      <div className="pt-40">
        <div className="container">
          <h2 className="text-center text-4xl leading-snug font-semibold mb-8">
            News
          </h2>

          <div className="grid grid-cols-3">
            {data.map((item, index) => (
              <NewCard {...item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
