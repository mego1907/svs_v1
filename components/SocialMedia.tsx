import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";

const SocialMedia = () => {
  const socialLinks = [
    {
      name: "facebook",
      link: "http://facebook.com",
      icon: <FaFacebookF color="#111827" fontSize={15} />,
    },
    {
      name: "twitter",
      link: "http://x.com",
      icon: <FaXTwitter color="#111827" fontSize={15} />,
    },
    {
      name: "linkedin",
      link: "http://linkedin.com",
      icon: <BsLinkedin color="#111827" fontSize={15} />,
    },
  ];

  return (
    <div className="flex flex-col fixed left-0 top-1/2 -translate-y-1/2 bg-white/50 z-50 hover:bg-white">
      {socialLinks.map(({ name, link, icon }) => (
        <a href={link} key={name} className="p-2" target="_blanck">
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
