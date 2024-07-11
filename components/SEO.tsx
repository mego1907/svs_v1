// components/SEO.tsx
import React from "react";
import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  url: string;
  image: string;
}

const SEO: React.FC = () => {
  return (
    <Head>
      <title>SVS</title>
      <meta name="description" content="SVS coin" />
      <link rel="icon" href="/assets/images/logoo.png" />
      <meta property="og:title" content="SVS" />
      <meta property="og:description" content="SVS coin" />
      <meta property="og:type" content="website" />
      <meta property="twitter:card" content="/assets/images/logo-share.jpg" />
      <meta property="twitter:title" content={"SVS"} />
      <meta property="twitter:description" content={"SVS coin"} />
      <meta
        property="twitter:image"
        content={"/assets/images/logo-share.jpg"}
      />
      <meta
        property="og:image"
        content="http://localhost:3000/_next/image?url=%2Fassets%2Fimages%2Flogoo.png&w=3840&q=75"
      />
      <meta property="og:image:type" content="jpg" />
    </Head>
  );
};

export default SEO;
