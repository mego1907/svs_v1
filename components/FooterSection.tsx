import Link from "next/link";
import React from "react";

const FooterSection = () => {
  const links = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "#partners",
      name: "Buy Sell",
    },
    {
      link: "#news",
      name: "news",
    },
    {
      link: "#listing",
      name: "listing",
    },
    {
      link: "#roadmap",
      name: "Board Advisor",
    },
    {
      link: "#contactus",
      name: "Contact",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-10 text-white">
      <div className="flex flex-wrap gap-10 p-5">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.link}
            className="text-base font-medium hover:text-secondary hover:border-b-[1px ]"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <p className="text-center text-sm">
        ©️ COPYRIGHT 2024 SVS | ALL RIGHTS RESERVED.
      </p>
    </div>
  );
};

export default FooterSection;
