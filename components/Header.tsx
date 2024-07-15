"use client";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

import { DM_Sans, Inter, Montserrat } from "next/font/google";

import ThreeDCoin from "./CoinAnimation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BsCoin } from "react-icons/bs";
import { LuCalendarDays } from "react-icons/lu";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const montserrat = Montserrat({ subsets: ["latin"] });

gsap.registerPlugin(useGSAP);

interface CoinData {
  last_price_usd?: number;
  volume_24_usd?: number;
}

const Header: React.FC = () => {
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const logoContainer = useRef(null);
  const volumeRef = useRef(null);
  const priceRef = useRef(null);
  const [volumeCounter, setVolumeCounter] = useState<Number | undefined>(0);

  const [coinData, setCoinData] = useState<CoinData | undefined>(undefined);
  const [error, setError] = useState<Number | undefined>(undefined);

  useEffect(() => {
    const getCoinData = async () => {
      try {
        const res = await fetch(
          "https://coincodex.com/api/coincodex/get_coin/svs"
        );

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data: CoinData = await res.json();

        data.volume_24_usd && setVolumeCounter(data.volume_24_usd + 69743);

        setCoinData(data);
      } catch (err) {
        console.error(err);
      }
    };

    getCoinData();
  }, [priceRef, volumeCounter]);

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

  useEffect(() => {
    // if (coinData?.volume_24_usd) {
    gsap.to(volumeRef.current, {
      innerText: volumeCounter,
      duration: 2,
      snap: {
        innerText: 5,
      },
    });

    // }
  }, [volumeCounter]);

  return (
    <div className="h-screen w-full overflow-hidden md:mt-0 mt-32">
      <div className="container grid lg:grid-cols-[2fr_1.5fr] h-full mx-auto px-5">
        <div
          className="flex flex-col justify-center items-start md:mt-40 -translate-x-60 opacity-0"
          ref={textRef}
        >
          <h2 className={`md:text-5xl text-xl md:leading-relaxed`}>
            SVS coin is First currency to change world of transaction through
            SVS coin
          </h2>
          <p
            className={`md:text-base text-sm mt-8 md:mr-20 leading-8 ${montserrat.className}`}
          >
            First decentralized marketing platform that allows services of fast
            and secure transaction through SVS coin
          </p>

          <div className="grid grid-cols-2 mt-16 md:gap-6 gap-4">
            <div className="md:px-8 px-4 md:p-6 p-2 border flex flex-col items-start justify-center rounded-lg gap-4 bg-gray-800 font-semibold">
              <span className="md:text-2xl text-xl">SVS Price</span>
              <div className="flex items-center justify-between w-full gap-3 md:text-4xl text-2xl">
                <span ref={priceRef}>
                  {coinData?.last_price_usd?.toFixed(2)}
                </span>
                <BsCoin />
              </div>
            </div>
            <div className="md:px-8 px-4 md:p-6 p-2 border flex flex-col text-left items-start justify-center rounded-lg gap-4 bg-gray-800 font-semibold ">
              <span className="md:text-2xl text-xl">SVS Volume</span>
              <div className="flex items-center justify-between gap-3 md:text-4xl text-2xl w-full md:min-w-52 min-w-20">
                <span ref={volumeRef}>
                  {(
                    coinData?.volume_24_usd && coinData?.volume_24_usd + 61000.9
                  )?.toFixed(2)}
                </span>
                <BsCoin />
              </div>
            </div>
          </div>

          <div className="flex md:gap-8 gap-4 mt-16 mb-24 ">
            <a
              href="/whitepaper"
              target="_blank"
              // onClick={() => {
              //   router.push("/whitepaper");
              // }}
              className="flex gap-2 border md:p-3 rounded-lg md:px-6 items-center justify-center p-2"
            >
              <IoDocumentTextOutline fontSize={30} />
              <span className="md:text-lg text-sm">White Paper</span>
            </a>

            <a
              href="#partners"
              className="flex gap-4 border md:p-3 rounded-lg md:px-6 px-2 p-2 items-center justify-center bg-secondary font-semibold z-40 hover:bg-transparent transition-all"
            >
              <span className="md:text-lg text-sm">Buy SVS</span>
              <FaArrowRightLong fontSize={20} />
            </a>
          </div>
        </div>

        <div
          className="md:flex flex-wrap items-center justify-center mt-20 translate-y-96 opacity-0 relative"
          ref={logoContainer}
        >
          {/* <Image
            src="/assets/images/logo.png"
            width={512}
            height={512}
            alt="logo"
            ref={logoRef}
            className="z-40"
          /> */}
          <ThreeDCoin />
        </div>
      </div>
    </div>
  );
};

export default Header;
