import Link from "next/link";
import React from "react";

const FooterSection = () => {
  const links = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/buy-sell",
      name: "Buy Sell",
    },
    {
      link: "/token-sale",
      name: "Token Sale",
    },
    {
      link: "/board-advisor",
      name: "Board Advisor",
    },
    {
      link: "/contact",
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
        © COPYRIGHT 2023 CRPTIAM | ALL RIGHTS RESERVED.
      </p>
    </div>
  );
};

export default FooterSection;
