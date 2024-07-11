"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const imageRef = useRef(null);
  const leftCardsRef = useRef(null);
  const rightCardsRef = useRef(null);

  const data1 = [
    {
      image: "/assets/images/icon-4 (1).png",
      title: "Experience:",
      desc: "With SVS COIN years of experience in the crypto industry, we bring deep expertise and a proven track record of delivering results.",
    },
    {
      image: "/assets/images/icon-6 (1).png",
      title: "Range of Services:",
      desc: "Whether you're a seasoned investor or new to cryptocurrencies, we offer a comprehensive range of services tailored to meet your needs.",
    },
  ];

  const data2 = [
    {
      image: "/assets/images/icon-6 (1).png",
      title: "Approach:",
      desc: "We prioritize our clients' needs above all else, offering personalized support and guidance every step of the way.",
    },
    {
      image: "/assets/images/icon-5 (1).png",
      title: "Innovation and Vision:",
      desc: "Beyond the present, we envision the future ol finance. Our innovative solutions pave the way for tomorrow's digital economy:",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      leftCardsRef.current,
      {
        translateY: 100,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 1,
        // ease: "power1.inOut",
        scrollTrigger: {
          trigger: leftCardsRef.current,
          start: "70% 170%",
        },
      }
    );

    gsap.fromTo(
      rightCardsRef.current,
      {
        translateY: 100,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 1,
        // ease: "power1.inOut",
        scrollTrigger: {
          trigger: rightCardsRef.current,
          start: "70% 170%",
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      {
        translateY: -500,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 1,
        // ease: "power1.inOut",
        scrollTrigger: {
          trigger: rightCardsRef.current,
          start: "70% 170%",
        },
      }
    );
  }, []);

  return (
    <div className="my-10 max-w-full">
      <div className="container mx-auto">
        <h2 className="text-center md:text-4xl text-xl leading-snug font-semibold">
          Why Choose Us
        </h2>
        <p className="max-w-[70ch] text-center text-gray-400 mt-3 leading-7 font-light text-base mx-auto md:px-0 px-5">
          At SVS COIN , we stand at the forefront of the crypto revolution,
          offering innovative solutions and unwavering commitment to our
          clients’ success.
        </p>

        <div className="grid md:grid-cols-[3fr_3fr_3fr] mt-10 md:gap-0 gap-10">
          <div
            className="flex flex-col gap-10 md:ml-16 md:px-0 px-4"
            ref={leftCardsRef}
          >
            {data1.map((item, index) => (
              <BuyAndSellCard
                key={index}
                img={item.image}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>

          <div className="flex items-center justify-center">
            <div className="md:w-[416px] h-[411px] w-10/12 relative">
              <Image
                src="/assets/images/png-o.png"
                alt=""
                fill
                objectFit="contain"
                ref={imageRef}
              />
            </div>
          </div>

          <div
            className="flex flex-col gap-10 md:ml-16 md:px-0 px-4"
            ref={rightCardsRef}
          >
            {data2.map((item, index) => (
              <BuyAndSellCard
                key={index}
                img={item.image}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const BuyAndSellCard = ({
  img,
  title,
  desc,
}: {
  img: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="bg-[#1e2739] flex">
      <div className="flex md:flex-row flex-col px-10">
        <div className="flex items-start p-5">
          <img src={img} alt={title} className="min-w-[60px]" />
        </div>

        <div className="flex flex-col p-5 px-2">
          <h3 className="md:text-xl font-medium ">{title}</h3>
          <p className="text-gray-400 mt-3">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
