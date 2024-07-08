import Image from "next/image";
import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { teamData } from "@/dummy/data";

const OurTeamSection = () => {
  return (
    <div className="mb-20 mt-14 overflow-hidden ">
      <div className="container">
        <h2 className="text-center md:text-4xl text-xl leading-snug font-semibold mb-8">
          Our Team
        </h2>

        <div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-32 gap-10 mt-10">
            {teamData.map((member) => (
              <TeamCard
                key={member.id}
                image={member.image}
                name={member.name}
                position={member.position}
              />
            ))}
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
}: {
  image: string;
  name: string;
  position: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Image
        src={image}
        width={400}
        height={400}
        alt=""
        className="rounded-3xl z-40"
      />
      <h3 className="text-2xl font-bold">{name}</h3>
      <div className="flex gap-4">
        <a
          href=""
          className="w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center"
        >
          <FaFacebookF color="#111827" fontSize={18} />
        </a>
        <a
          href=""
          className="w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center"
        >
          <BsLinkedin color="#111827" fontSize={18} />
        </a>
        <a
          href=""
          className="w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center"
        >
          <FaXTwitter color="#111827" fontSize={18} />
        </a>
      </div>
      <p className="text-base">{position}</p>
    </div>
  );
};

export default OurTeamSection;
