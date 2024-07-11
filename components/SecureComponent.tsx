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
          start: "70% 100%",
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
          start: "50% 100%",
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
        scrollTrigger: {
          trigger: allCardsRef.current,
          start: "50% 110%",
        },
      }
    );
  }, []);

  return (
    <div className="md:my-10 max-w-full md:px-0 px-3">
      <div className="container mx-auto ">
        <h2
          className="text-center md:text-4xl text-xl px-5 md:leading-snug font-semibold"
          ref={titleRef}
        >
          Secure And Transparent Transactions Powered By Cutting-Edge Blockchain
        </h2>
        <p
          className="md:max-w-[70ch] text-center text-gray-400 mt-3 md:leading-7 text-base md:mx-auto font-light"
          ref={descRef}
        >
          Blockchain technology ensures the highest level of security and
          transparency in transactions. By decentralizing data storage and
          processing
        </p>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-24 gap-14 mt-16 md:px-20 px-5"
          ref={allCardsRef}
        >
          <div className="flex gap-4">
            <div className="w-40 flex items-start justify-center">
              <Image
                src="/assets/images/secure.png"
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
                src="/assets/images/insurance.png"
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
                src="/assets/images/Easy-to-withdraw.png"
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
