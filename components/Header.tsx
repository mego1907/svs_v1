"use client";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

import { DM_Sans, Inter, Montserrat } from "next/font/google";
import {
  HeaderCoinLogo1,
  HeaderCoinLogo2,
  HeaderCoinLogo3,
  HeaderCoinLogo4,
  HeaderCoinLogo5,
  HeaderCoinLogo6,
} from "@/icons";

const montserrat = Montserrat({ subsets: ["latin"] });

gsap.registerPlugin(useGSAP);

const Header = () => {
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const logoContainer = useRef(null);

  useEffect(() => {
    // ..coin animation
    gsap.to(logoRef.current, {
      rotationY: 360,
      duration: 8,
      repeat: -1,
      ease: "linear",
    });

    // ..text animation
    gsap.to(textRef.current, {
      translateX: 0,
      opacity: 1,
      duration: 0.7,
      ease: "power1.inOut",
    });

    // ..logo container animation
    gsap.to(logoContainer.current, {
      opacity: 1,
      translateY: 0,
      duration: 0.7,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden">
      <div className="container grid md:grid-cols-[2fr_1.5fr] h-full mx-auto">
        <div
          className="flex flex-col justify-center items-start mt-40 -translate-x-60 opacity-0"
          ref={textRef}
        >
          <h2 className={`md:text-5xl text-xl leading-tight`}>
            SVS coin is First currency to change world of transaction through
            SVS coin
          </h2>
          <p
            className={`md:text-base text-sm mt-8 md:mr-20 leading-8 ${montserrat.className}`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            architecto quo. Ad facilis exercitationem unde est reiciendis
            architecto modi officia sequi. Aspernatur incidunt ex beatae
            sapiente eveniet voluptatibus facere fugit.
          </p>

          <div className="flex md:gap-8 gap-4 mt-16 md:ml-2">
            <button
              type="button"
              className="flex gap-2 border md:p-3 rounded-lg md:px-6 items-center justify-center px-2"
            >
              <IoDocumentTextOutline fontSize={30} />
              <span className="md:text-lg text-sm">White Paper</span>
            </button>

            <button
              type="button"
              className="flex gap-4 border md:p-3 rounded-lg md:px-6 px-2 items-center justify-center bg-secondary font-semibold z-40 hover:bg-transparent transition-all"
            >
              <span className="md:text-lg text-sm">Get Started</span>
              <FaArrowRightLong fontSize={20} />
            </button>
          </div>
          <div className="grid md:grid-cols-4 w-full grid-rows-2 mt-10 opacity-30">
            <div className="flex items-center justify-start py-6">
              <HeaderCoinLogo1 />
            </div>
            <div className="flex items-center justify-start py-6">
              <HeaderCoinLogo2 />
            </div>
            <div className="flex items-center justify-start py-6">
              <HeaderCoinLogo3 />
            </div>
            <div className="flex items-center justify-start py-6">
              <HeaderCoinLogo4 />
            </div>
            <div className="flex items-center justify-start py-6">
              <HeaderCoinLogo5 />
            </div>
            <div className="flex items-center justify-start py-6">
              <HeaderCoinLogo6 />
            </div>
            <div className="flex items-center justify-start py-6">
              <HeaderCoinLogo2 />
            </div>
            <div className="flex items-center justify-start py-6">
              <HeaderCoinLogo1 />
            </div>
          </div>
        </div>

        <div
          className="md:flex hidden flex-wrap items-center justify-center mt-20 translate-y-96 opacity-0 relative"
          ref={logoContainer}
        >
          <Image
            src="/assets/images/logo.png"
            width={512}
            height={512}
            alt="logo"
            ref={logoRef}
            className="z-40"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
