import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { TeamCard } from "../OurTeamSection";

const TeamSlider = () => {
  return (
    <Swiper spaceBetween={50}>
      <SwiperSlide>
        <div className="grid grid-cols-3 gap-5 ">
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
      </SwiperSlide>
    </Swiper>
  );
};

export default TeamSlider;
