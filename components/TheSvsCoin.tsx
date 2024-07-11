import Image from "next/image";
import React from "react";

const TheSvsCoin = () => {
  return (
    <div className="max-w-full">
      <div className="container mx-auto">
        <h2 className="text-center md:text-4xl text-xl leading-snug font-semibold">
          The SVS coin
        </h2>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 md:px-40 px-6 mt-20">
          <div className="flex items-center justify-center flex-col md:gap-16 ">
            <h3 className="text-center md:text-4xl text-xl leading-snug font-semibold">
              VISION
            </h3>

            <div className="md:w-[540px] md:h-[335px] h-[200px] w-8/12 relative">
              <Image
                src="/assets/images/fffffffffffffffffffffffffffffff.png"
                fill
                objectFit="contain"
                alt=""
              />
            </div>
            <p>
              Our major advancement is to provide our members and partners with
              a much safer environment while maintaining their confidentiality
              and to benefit them with easy money transfers to any destination
              in the world in the shortest time possible. We also intend to
              issue credit cards to our members and partners in the future to
              make it easier to receive and send money around the world.
            </p>
          </div>
          <div className="flex items-center justify-center flex-col md:gap-16 ">
            <h3 className="md:text-4xl text-xl leading-snug font-semibold">
              OVERVIEW
            </h3>
            <div className="md:w-[540px] md:h-[335px] h-[200px] w-8/12 relative">
              <Image
                src="/assets/images/fffffffffffffffffff2.png"
                fill
                objectFit="contain"
                alt=""
              />
            </div>
            <p>
              Our mission is to provide our members and partners with the best
              instant money transfer service anywhere in the world, allowing
              them to receive money from loved ones anywhere in the world.
              Whether you’re at home, at work, or on the go, you can get
              information quickly, especially in an emergency, which will reduce
              your overall stress level. When you require money quickly, a SVS
              coin allows you to get it as soon as possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheSvsCoin;
