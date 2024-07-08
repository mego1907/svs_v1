"use client";
import { TeamCard } from "@/components/OurTeamSection";
import { TeamSlider } from "@/components/teams";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Team = () => {
  return (
    <div className="bg-mainBg min-h-screen text-white">
      <div className="pt-40">
        <div className="container mx-auto">
          <h2 className="text-center text-4xl leading-snug font-semibold mb-8">
            Our Team
          </h2>

          <div>
            <TeamSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
