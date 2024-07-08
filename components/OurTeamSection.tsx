import Image from "next/image";
import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { memberType, teamData } from "@/dummy/data";
import { TeamSlider } from "./teams";
import Link from "next/link";

const OurTeamSection = () => {
  return (
    <div className="mb-20 mt-14 overflow-hidden ">
      <div className="container">
        <h2 className="text-center md:text-4xl text-xl leading-snug font-semibold mb-8">
          Our Team
        </h2>

        <div>
          <div className="mt-10 md:px-0 px-10">
            <TeamSlider />
            {/* <TeamCard
              image="https://svscoin.org/wp-content/uploads/2024/07/WhatsApp-Image-2024-06-29-at-12.28.50-AM-ct-person.jpeg"
              name="Nader said"
              position={"CEO"}
            />

            <TeamCard
              image="https://svscoin.org/wp-content/uploads/2024/07/WhatsApp-Image-2024-06-28-at-9.27.54-PM-ct-person.jpeg"
              name="Mary Pelgone"
              position="Developer"
            />
            <TeamCard
              name="Yazan Abbasi"
              position="CTO"
              image="https://svscoin.org/wp-content/uploads/2024/07/WhatsApp-Image-2024-06-28-at-9.27.51-PM-ct-person.jpeg"
            /> */}
          </div>
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
        <div className="lg:w-[400px] md:w-[300px] md:h-[300px] w-[200px] h-[200px] lg:h-[400px] rounded-3xl z-40 relative overflow-hidden md:px-0 px-6">
          <Image src={image || ""} fill objectFit="cover" alt="" className="" />
        </div>
        <h3 className="text-2xl font-bold">{name}</h3>
        <div className="flex gap-4">
          <a
            href={socialMedia.facebook}
            className="w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center"
          >
            <FaFacebookF color="#111827" fontSize={18} />
          </a>
          <a
            href={socialMedia.linkedin}
            className="w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center"
          >
            <BsLinkedin color="#111827" fontSize={18} />
          </a>
          <a
            href={socialMedia.twitter}
            className="w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center"
          >
            <FaXTwitter color="#111827" fontSize={18} />
          </a>
        </div>
        <p className="text-base">{position}</p>
      </div>
    </Link>
  );
};

export default OurTeamSection;
