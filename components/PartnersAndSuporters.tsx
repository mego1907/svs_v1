import Image from "next/image";
import React from "react";

const PartnersAndSuporters = () => {
  const partnersImages = [
    {
      image: "https://svscoin.org/wp-content/uploads/2024/07/nwe.png",
      link: "https://azbit.com/exchange/SVS_USDT",
    },
    {
      image:
        "https://svscoin.org/wp-content/uploads/2024/07/Coinpaprika-W-f.png",
      link: "https://dex-trade.com/spot/trading/SVSUSDT?interface=classic",
    },

    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Uniswap_Logo_and_Wordmark.png/240px-Uniswap_Logo_and_Wordmark.png",
      link: "https://app.uniswap.org/?intro=true",
    },
  ];

  const listedOnImage = [
    {
      image: "https://svscoin.org/wp-content/uploads/2024/07/CCC.png",
      link: "https://coinpaprika.com/coin/svs-svs-coin/",
    },
    {
      image:
        "https://s.geckoterminal.com/_next/static/media/logo_dark.6b1547fe.png",
      link: "https://www.geckoterminal.com/polygon_pos/pools/0xea6d0718a0b84c90c0764aeaee1a24a06f7cbd2e",
    },
    {
      image: "https://svscoin.org/wp-content/uploads/2024/07/Coin-2-f.png",
      link: "https://coincodex.com/crypto/svs-coin/",
    },
  ];

  return (
    <>
      <div className="md:py-20 pt-10 overflow-hidden">
        <div className="container">
          <h2 className="text-center md:text-4xl text-xl leading-snug font-semibold md:mb-20 mb-8">
            Our Partners
          </h2>

          <div className="flex md:flex-nowrap flex-wrap gap-5 md:p-0 px-4">
            {partnersImages.map(({ image, link }, index) => (
              <div key={index} className="md:w-52 md:h-40 w-40 h-20 relative">
                <a href={link} target="_blank">
                  <Image src={image} alt="" fill objectFit="contain" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="md:py-20 pt-10 overflow-hidden">
        <div className="container">
          <h2 className="text-center md:text-4xl text-xl leading-snug font-semibold md:mb-20 mb-8">
            Listed On
          </h2>

          <div className="flex md:flex-nowrap flex-wrap gap-5 md:p-0 px-4">
            {listedOnImage.map(({ image, link }, index) => (
              <div key={index} className="md:w-52 md:h-40 w-40 h-20 relative">
                <a href={link} target="_blank">
                  <Image src={image} alt="" fill objectFit="contain" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersAndSuporters;
