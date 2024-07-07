"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const SecureComponent = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const allCardsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      {
        translateY: 100,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "70% 90%",
        },
      }
    );

    gsap.fromTo(
      descRef.current,
      {
        translateY: 100,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: descRef.current,
          start: "70% 90%",
        },
      }
    );

    gsap.fromTo(
      allCardsRef.current,
      {
        translateY: 100,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: allCardsRef.current,
          start: "70% 90%",
        },
      }
    );
  }, []);
  return (
    <div className="my-10 overflow-hidden">
      <div className="container mx-auto">
        <h2
          className="text-center text-4xl leading-snug font-semibold"
          ref={titleRef}
        >
          Secure And Transparent Transactions Powered <br /> By Cutting-Edge
          Blockchain
        </h2>
        <p
          className="max-w-[70ch] text-center text-gray-400 mt-3 leading-7 text-base mx-auto font-light "
          ref={descRef}
        >
          Blockchain technology ensures the highest level of security and
          transparency in transactions. By decentralizing data storage and
          processing
        </p>

        <div
          className="grid md:grid-cols-3 gap-24 mt-16 px-20"
          ref={allCardsRef}
        >
          <div className="flex gap-4">
            <div className="w-40 flex items-start justify-center">
              <Image
                src="https://svscoin.org/wp-content/uploads/2024/07/secure.png"
                width={60}
                height={60}
                alt="Safe Platform"
              />
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-5">Safe platform</h3>
              <p className="text-base text-gray-400">
                Our platform employs state-of-the-art security protocols to
                safeguard your funds and personal data.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-40 flex items-start justify-center">
              <Image
                src="https://svscoin.org/wp-content/uploads/2024/07/insurance.png"
                width={60}
                height={60}
                alt="Safe Platform"
              />
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-5">
                Protected by insurance
              </h3>
              <p className="text-base text-gray-400">
                Your funds and assets held on our platform are insured against a
                range of risks, including theft, cyberattacks, and operational
                errors
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-40 flex items-start justify-center">
              <Image
                src="https://svscoin.org/wp-content/uploads/2024/07/Easy-to-withdraw.png"
                width={60}
                height={60}
                alt="Safe Platform"
              />
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-5">Easy to withdraw</h3>
              <p className="text-base text-gray-400">
                Rest assured that your withdrawals are protected by robust
                security measures
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecureComponent;
