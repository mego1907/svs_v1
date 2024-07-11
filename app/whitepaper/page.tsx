import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <>
      <iframe
        src="/whitepaper.pdf"
        style={{ width: "100%", height: "100vh", border: "none" }}
      />
    </>
  );
};

export default page;
