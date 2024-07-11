import Image from "next/image";
import React from "react";

const WhitePaperSection = () => {
  return (
    <div className="md:mt-20 mt-10 max-w-full">
      <div className="container">
        <h2 className="text-center md:text-4xl text-xl leading-snug font-semibold md:mb-10 mb-5">
          Whitepaper
        </h2>
        <p className="max-w-[70ch] text-center text-gray-100 mt-3 leading-7 md:text-base text-sm mx-auto ">
          Terms of service are rules by which one must agree to abide in order
          to use a service.
        </p>
        <p className="md:max-w-[70ch] text-center text-gray-100 leading-7 md:text-base text-sm mx-auto mb-2 px-5 md:px-0">
          Terms of service can also be merely a disclaimer, especially regarding
          the use of websites.
        </p>

        <div className="grid lg:grid-cols-2 md:px-40 px-5 md:gap-0 gap-5 md:mt-20 mt-5">
          <div className="flex items-center justify-center">
            <div className="md:w-[372px] md:h-[372px] relative w-[150px] h-[150px]">
              <Image
                src="/assets/images/blockchain.png"
                alt=""
                fill
                objectFit="contain"
              />
            </div>
          </div>
          <div className="flex flex-col gap-8 md:text-lg text-sm">
            <p>
              A white paper is an authoritative report or guide that informs
              readers concisely about a complex issue and presents the issuing
              body’s philosophy on the matter. It is meant to help readers
              understand an issue, solve a problem, or make a decision.
            </p>
            <p>
              The initial British term concerning a type of government-issued
              document has proliferated, taking a somewhat new meaning in
              business. In business, a white paper is closer to a form of
              marketing presentation, a tool meant to persuade customers and
              partners and promote a product or viewpoint, White papers may be
              considered grey literature.
            </p>
            <p>
              Since the early 1990s, the term “white paper”, or “whitepaper”,
              has been applied to documents used as marketing or sales tools in
              business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhitePaperSection;
