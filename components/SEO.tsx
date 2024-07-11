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
      <meta property="og:url" content="https://svscoin.org/" />
      <meta property="og:image" content="/assets/images/logo-share.jpg" />
    </Head>
  );
};

export default SEO;
