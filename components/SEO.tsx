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
      <meta property="og:title" content="SVS" />
      <meta property="og:description" content="SVS coin" />
      <meta property="og:image" content={"/assets/images/logo-share.jpg"} />
      <meta property="og:type" content="website" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={"SVS"} />
      <meta property="twitter:description" content={"SVS coin"} />
      <meta
        property="twitter:image"
        content={"/assets/images/logo-share.jpg"}
      />
    </Head>
  );
};

export default SEO;
