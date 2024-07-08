import { TeamCard } from "@/components/OurTeamSection";
import React from "react";

const Team = () => {
  return (
    <div className="bg-mainBg min-h-screen">
      <div className="pt-40">
        <div className="container mx-auto">
          <h2 className="text-center text-4xl leading-snug font-semibold mb-8">
            Our Team
          </h2>

          <div className="grid grid-cols-3 gap-5 gap-y-10">
            <TeamCard
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
            />
            <TeamCard
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
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
