import Image from "next/image";
import React from "react";

const OurTeamSection = () => {
  return (
    <div className="mb-20 mt-14">
      <div className="container">
        <h2 className="text-center text-4xl leading-snug font-semibold mb-8">
          Our Team
        </h2>

        <div>
          <TeamCard
            image="https://svscoin.org/wp-content/uploads/2024/07/WhatsApp-Image-2024-06-29-at-12.28.50-AM-ct-person.jpeg"
            name="Nader said"
            position={"CEO"}
          />

          <div className="grid md:grid-cols-2 gap-32 mt-10">
            <TeamCard
              image="https://svscoin.org/wp-content/uploads/2024/07/WhatsApp-Image-2024-06-28-at-9.27.54-PM-ct-person.jpeg"
              name="Mary Pelgone"
              position="Developer"
            />
            <TeamCard
              name="Yazan Abbasi"
              position="CTO"
              image="https://svscoin.org/wp-content/uploads/2024/07/WhatsApp-Image-2024-06-28-at-9.27.51-PM-ct-person.jpeg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamCard = ({
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
      <p className="text-base">{position}</p>
    </div>
  );
};

export default OurTeamSection;
