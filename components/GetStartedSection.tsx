"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const GetStartedSection = () => {
  const allCardsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      allCardsRef.current,
      {
        translateY: 100,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 0.8,
        // ease: "power1.inOut",
        scrollTrigger: {
          trigger: allCardsRef.current,
          start: "50% 110%",
        },
      }
    );
  }, []);

  return (
    <div className="my-10 mt-20 overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-center md:text-4xl leading-snug font-semibold">
          Get Started In A Few Minutes
        </h2>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 lg:gap-36 gap-16 mt-20 px-40"
          ref={allCardsRef}
        >
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="w-40 flex items-center justify-center">
              <Image
                src="https://svscoin.org/wp-content/uploads/2024/07/man.png"
                width={60}
                height={60}
                alt="Safe Platform"
              />
            </div>

            <div className="flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold mb-5">Register</h3>
              <p className="text-base text-gray-400 text-center">
                Getting started with svs coin is quick and easy. Simply follow
                these steps to create your account:
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="w-40 flex items-center justify-center">
              <Image
                src="https://svscoin.org/wp-content/uploads/2024/07/bank2.png"
                width={60}
                height={60}
                alt="Safe Platform"
              />
            </div>

            <div className="flex flex-col justify-center items-center">
              <h3 className="text-xl font-semibold mb-5">Fund</h3>
              <p className="text-base text-gray-400 text-center">
                Choose from a variety of deposit methods, including bank
                transfer, credit/debit card, and digital wallets.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="w-40 flex items-center justify-center">
              <Image
                src="https://svscoin.org/wp-content/uploads/2024/07/buy.png"
                width={60}
                height={60}
                alt="Safe Platform"
              />
            </div>

            <div className="flex flex-col justify-center items-center text-center">
              <h3 className="text-xl font-semibold mb-5">Trade</h3>
              <p className="text-base text-gray-400">
                After your account is funded, you're ready to start trading on
                svs coin
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;
