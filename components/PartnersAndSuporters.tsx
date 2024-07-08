import Image from "next/image";
import React from "react";

const PartnersAndSuporters = () => {
  const images = [
    {
      image: "https://svscoin.org/wp-content/uploads/2024/07/nwe.png",
      link: "",
    },
    {
      image: "https://svscoin.org/wp-content/uploads/2024/07/CCC.png",
      link: "",
    },
    {
      image: "https://svscoin.org/wp-content/uploads/2024/07/Coin-2-f.png",
      link: "",
    },
    {
      image:
        "https://svscoin.org/wp-content/uploads/2024/07/Coinpaprika-W-f.png",
      link: "",
    },
  ];
  return (
    <div className="md:py-20 py-10 overflow-hidden">
      <div className="container">
        <h2 className="text-center md:text-4xl text-xl leading-snug font-semibold md:mb-20 mb-8">
          Partners & Supporters
        </h2>

        <div className="flex md:flex-nowrap flex-wrap gap-5 md:p-0 px-4">
          {images.map(({ image, link }, index) => (
            <div key={index} className="md:w-52 md:h-40 w-40 h-20 relative">
              <a href={link}>
                <Image src={image} alt="" fill objectFit="contain" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersAndSuporters;
