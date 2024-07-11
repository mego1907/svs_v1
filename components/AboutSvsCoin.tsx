import React from "react";

const AboutSvsCoin = () => {
  return (
    <div className="mb-20 overflow-hidden">
      <div className="container">
        <h3 className="text-center md:text-4xl text-xl leading-snug font-semibold mb-3">
          About SVS coin
        </h3>
        <p className="text-center font-light md:text-base text-sm px-4">
          The SVS Coin is the first digital currency of its kind which is aimed
          at enhancing the ease of managing funds – be in the world of
          investment, travel & tourism, hotels, hospitals and medical
          facilities, education etc. or meeting the requirements of businesses
          in cash flow management, trade finance needs or even for large scale
          project funding, globally by using modern blockchain technologies.
        </p>

        <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 md:mt-40 mt-10 md:text-left text-center md:px-0 px-4">
          <div className="flex flex-col gap-8">
            <p>
              The validity of each SVS coin is provided by a blockchain. A
              blockchain is a continuously growing list of records, called
              blocks, which are linked and secured using cryptography. Each
              block typically contains a hash pointer as a link to a previous
              block, a timestamp and transaction data. By design, blockchains
              are inherently resistant to modification of the data which
              provides a high degree of data integrity. A blockchain is
              typically managed by a peer-to-peer network collectively adhering
              to a protocol for validating new blocks. Once recorded, the block
              time is the average time it takes for the network to generate one
              extra block in the blockchain.
            </p>

            <p>
              SVS Coin is an easier and more stable way of managing personal and
              business needs. It is mainly targeted at SVS Network members and
              Partners to enable them to use the SVS Coin towards making
              payments to SVS for various services in an orderly and quick
              fashion. On a larger scale, SVS Coin shall serve to meet the
              short-term trade related business requirements of the members as
              well as long term project funding requirements for investments in
              various infrastructure, healthcare, educational and humanitarian
              projects associated with SVS.
            </p>

            <p>
              SVS Coin is fully backed by SVS Network – which is actively
              engaged in several Investment and Infrastructural development
              projects worldwide, as well as many of humanitarian projects
              mainly in Africa and therefore provides the highest stability and
              safety for its investors.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img src="/assets/images/bbb.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSvsCoin;
