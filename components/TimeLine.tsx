"use client";
import React from "react";
import { Timeline } from "primereact/timeline";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { GrRadialSelected } from "react-icons/gr";

interface TimelineEvent {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
  title?: string;
  desc?: string;
}

export default function TimeLine() {
  const events: TimelineEvent[] = [
    {
      icon: "pi pi-shopping-cart",
      color: "#9C27B0",
      title: "2021",
      desc: "svs coin Platform Idea",
    },
    {
      icon: "pi pi-cog",
      color: "#673AB7",
      title: "End Of Jan",
      desc: "Create Smart Contract",
    },
    {
      icon: "pi pi-shopping-cart",
      color: "#FF9800",
      title: "Feb",
      desc: "Listed On Exchanges Live Now",
    },
    {
      icon: "pi pi-check",
      color: "#607D8B",
      title: "2024",
      desc: "Will Built Our Blockchain",
    },
    {
      icon: "pi pi-shopping-cart",
      color: "#FF9800",
      title: "Feb",
      desc: "we Take Next Step",
    },
    {
      icon: "pi pi-shopping-cart",
      color: "#FF9800",
      title: "may",
      desc: "New Step",
    },
  ];

  const customizedMarker = (item: TimelineEvent) => {
    return (
      <span className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1">
        <GrRadialSelected className="text-secondary" />
      </span>
    );
  };

  const customizedContent = (item: TimelineEvent) => {
    return (
      <Card className="text-left z-40 relative">
        <span className="md:text-xl text-sm font-semibold text-secondary pb-10">
          {item.title}
        </span>
        <p className="text-gray-300 md:text-base text-xs">{item.desc}</p>
      </Card>
    );
  };

  return (
    <div className="card w-full">
      <Timeline
        value={events}
        align="alternate"
        className="customized-timeline"
        marker={customizedMarker}
        content={customizedContent}
      />
    </div>
  );
}
