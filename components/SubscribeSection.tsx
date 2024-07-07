"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const SubscribeSection = () => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      {
        translateY: -200,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ref.current,
          start: "70% 90%",
        },
      }
    );
  }, []);

  return (
    <div className="w-full  bg-slate-800 md:p-20 py-20 z-40 my-10 overflow-hidden">
      <div className="flex items-center justify-center flex-col" ref={ref}>
        <p className="md:text-3xl text-xl mb-2">
          Subscribe our newsletter for get updates
        </p>
        <p className="md:text-3xl text-base md:mb-10 mb-4">
          We don't make any spam
        </p>

        <div className="flex gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="rounded-full p-3 px-5 bg-white md:min-w-80"
          />
          <button type="submit" className="bg-secondary p-3 px-6 rounded-full">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
