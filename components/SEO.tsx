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
      <link rel="shortcut icon" href="/assets/images/logoo.png" />
      <link
        rel="shortcut icon"
        href="/assets/images/logo-share.png"
        type="image/x-icon"
      />
      <meta property="og:title" content="SVS" />
      <meta property="og:description" content="SVS coin" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://svs-v1.vercel.app/" />
      <meta
        property="og:image"
        content="https://svs-v1.vercel.app/assets/images/logo-share.jpg"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="SVS" />
      <meta property="twitter:description" content="SVS coin" />
      <meta
        property="twitter:image"
        content="https://svs-v1.vercel.app/assets/images/logo-share.jpg"
      />
    </Head>
  );
};

export default SEO;
