import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { memberType, teamData } from "@/dummy/data";
import { TeamSlider } from "./teams";
import Link from "next/link";

const OurTeamSection = () => {
  return (
    <div className="mb-20 mt-14 overflow-hidden ">
      <div className="container mx-auto">
        <h2 className="text-center md:text-4xl text-xl leading-snug font-semibold mb-8">
          Our Team
        </h2>

        <div>
          <TeamSlider />
        </div>
      </div>
    </div>
  );
};

export const TeamCard = ({
  image,
  name,
  position,
  desc,
  socialMedia,
  id,
}: memberType) => {
  return (
    <Link href={`/team/${id}`}>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="lg:w-[400px] w-[300px] h-[300px] lg:h-[400px] rounded-3xl z-40 relative overflow-hidden md:px-0 px-6">
          <Image src={image || ""} fill objectFit="cover" alt="" className="" />
        </div>
        <h3 className="text-2xl font-bold">{name}</h3>
        <div className="flex gap-4">
          {socialMedia.facebook && (
            <a
              href={socialMedia.facebook}
              className="w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center"
            >
              <FaFacebookF color="#111827" fontSize={18} />
            </a>
          )}

          {socialMedia.instagram && (
            <a
              href={socialMedia.instagram}
              className="w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center"
            >
              <FaInstagram color="#111827" fontSize={18} />{" "}
            </a>
          )}

          {socialMedia.twitter && (
            <a
              href={socialMedia.twitter}
              className="w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center"
            >
              <FaXTwitter color="#111827" fontSize={18} />
            </a>
          )}

          {socialMedia.linkedin && (
            <a
              href={socialMedia.linkedin}
              className="w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center"
            >
              <FaLinkedin color="#111827" fontSize={18} />
            </a>
          )}
        </div>
        <p className="text-base">{position}</p>
      </div>
    </Link>
  );
};

export default OurTeamSection;
