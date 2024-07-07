"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Panel } from "primereact/panel";
import gsap from "gsap";

const TokenSVSSection = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const collapseRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      collapseRef.current,
      {
        translateX: -500,
        opacity: 0,
      },
      {
        translateX: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: collapseRef.current,
          start: "70% 90%",
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      {
        translateX: 500,
        opacity: 0,
      },
      {
        translateX: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: collapseRef.current,
          start: "70% 110%",
        },
      }
    );
  }, []);

  return (
    <div>
      <div className="container mx-auto">
        <h2 className="text-center text-4xl leading-snug font-semibold">
          What Is Token SVS?
        </h2>
        <p className="max-w-[70ch] text-center text-gray-400 mt-3 leading-7 text-base mx-auto">
          SVS Coin is a token developed for facilitating the payment of the
          fees, expenses and Return of investment ( ROI ) of SVS Network's
          Projects worldwide . it will be created with a strict maximum limit of
          5,000 million units, a number that can never be increased
        </p>

        <div className="grid md:grid-cols-[2fr_1fr]">
          <div
            className="flex gap-6 flex-col md:px-20 px-5 py-10"
            ref={collapseRef}
          >
            <Panel
              ref={ref}
              header="What is Token SVS?"
              toggleable
              className="text-xl z-40"
            >
              <p className="m-0 text-base">
                SVS Coin is a token developed for facilitating the payment of
                the fees, expenses and Return of investment ( ROI ) of SVS
                Network's Projects worldwide . it will be created with a strict
                maximum limit of 5,000 million units, a number that can never be
                increased
              </p>
            </Panel>
            <Panel
              ref={ref2}
              header="Can I make payments directly from an exchange?"
              toggleable
              className="text-xl z-40"
              collapsed
            >
              <p className="m-0 text-base">
                The Token SVS can be available participation in a private sale
                or through vindax.com exchange. You can buy from Vindax You can
                also buy from exhanges and you can trade Total SVS for Exchange
                1 = 12,000,000 Total SVS for Exchange 2 = 18,000,000 Total SVS
                for Exchange 3 = 30,000,000
              </p>
            </Panel>
            <Panel
              ref={ref3}
              header="What is the SVS coin Token asmart contract address?"
              toggleable
              className="text-xl z-40"
              collapsed
            >
              <p className="m-0 text-base">
                Contract Address : TCdn1HueBe4dbN9Xn25UaFmWDSsrKFPBhB The SVS
                token is built on top of the Tron blockchain (TRC20) network -
                using TRC20 Tron blockchain (TRC20) is a blockchain network
                designed for running applications based on smart contracts.
                TRC20 works in parallel with native tron blockchain (tron) as
                tron blockchain, giving users the best of bathworlds: Tron's
                high transaction capacity and TRC's smart contract capability.
                Contract Address : TCdn1HueBe4dbN9Xn25UaFmWDSsrKFPBhB The SVS
                token is built on top of the Binance blockchain (BEP20) network
                - using BEP20 Binance blockchain (BEP20) is a blockchain network
                designed for running applications based on smart contracts.
                BEP20 works in parallel with native binance blockchain (BSC) as
                Binance blockchain, giving users the best of bathworlds: BSC's
                high transaction capacity and BSC's smart contract capability.
              </p>
            </Panel>
          </div>
          <div>
            <Image
              src="https://svscoin.org/wp-content/uploads/2024/07/qnewwww.png"
              alt=""
              width={526}
              height={827}
              ref={imageRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenSVSSection;
