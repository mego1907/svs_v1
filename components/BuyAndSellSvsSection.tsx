"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const BuyAndSellSvsSection = () => {
  const rightCardsRef = useRef(null);
  const leftCardsRef = useRef(null);
  const mobileRef = useRef(null);

  const data1 = [
    {
      image: "/assets/images/bank.png",
      title: "Bank Transfers",
    },
    {
      image: "/assets/images/wallet.png",
      title: "Online Wallets",
    },
  ];

  const data2 = [
    {
      image: "/assets/images/cash.png",
      title: "Cash Payment",
    },
    {
      image: "/assets/images/debit.png",
      title: "Debit/Credit Cards",
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
        duration: 1.5,
        // ease: "power1.inOut",
        scrollTrigger: {
          trigger: leftCardsRef.current,
          start: "70% 100%",
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
        duration: 1.5,
        // ease: "power1.inOut",
        scrollTrigger: {
          trigger: rightCardsRef.current,
          start: "70% 110%",
        },
      }
    );

    gsap.fromTo(
      mobileRef.current,
      {
        translateY: -500,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 1.5,
        // ease: "power1.inOut",
        scrollTrigger: {
          trigger: rightCardsRef.current,
          start: "70% 110%",
        },
      }
    );
  }, []);

  return (
    <div className="md:my-40 my-10 max-w-full">
      <div className="container mx-auto">
        <h2 className="text-center md:text-4xl text-xl leading-snug font-semibold">
          How To Buy And Sell SVS Coin
        </h2>
        <p className="max-w-[70ch] text-center text-gray-400 mt-3 leading-7 text-sm mx-auto">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>

        <div className="grid md:grid-cols-[3fr_3fr_3fr] mt-10 md:gap-0 gap-10">
          <div
            className="flex flex-col gap-10 md:ml-16 px-6 md:px-0"
            ref={leftCardsRef}
          >
            {data1.map((item, index) => (
              <BuyAndSellCard key={index} img={item.image} title={item.title} />
            ))}
          </div>

          <div>
            <img
              src="/assets/images/Green-White-Aesthetic-Skincare-Branding-Logo.png"
              alt=""
              ref={mobileRef}
            />
          </div>

          <div
            className="flex flex-col gap-10 md:ml-16  px-6 md:px-0"
            ref={rightCardsRef}
          >
            {data2.map((item, index) => (
              <BuyAndSellCard key={index} img={item.image} title={item.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const BuyAndSellCard = ({ img, title }: { img: string; title: string }) => {
  return (
    <div className="bg-[#1e2739] flex z-40">
      <div className="flex px-10">
        <div className="flex items-end z-40 relative">
          <img src={img} alt={title} className="z-40 relative block" />
        </div>

        <div className="flex items-center justify-center p-6">
          <h3 className="md:text-xl text-base font-medium">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default BuyAndSellSvsSection;
