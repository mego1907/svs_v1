import React from "react";

const page = ({ props }) => {
  console.log("props", props);

  return (
    <iframe
      src="/whitepaper.pdf"
      style={{ width: "100%", height: "100vh", border: "none" }}
    />
  );
};

export default page;
