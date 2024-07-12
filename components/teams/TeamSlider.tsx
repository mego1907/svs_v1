"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { TeamCard } from "../OurTeamSection";
import { teamData } from "@/dummy/data";

const TeamSlider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      breakpoints={{
        // 300: {
        //   slidesPerView: 1,
        //   spaceBetween: 10,
        // },
        // 768: {
        //   slidesPerView: 1,
        //   spaceBetween: 10,
        // },
        1024: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 10,
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
