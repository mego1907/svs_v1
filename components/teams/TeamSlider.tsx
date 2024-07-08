"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { TeamCard } from "../OurTeamSection";
import { teamData } from "@/dummy/data";
import Link from "next/link";

const TeamSlider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      breakpoints={{
        300: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      }}
    >
      {teamData.map((member) => (
        <SwiperSlide key={member.id}>
          <TeamCard {...member} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TeamSlider;
