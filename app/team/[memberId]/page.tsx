"use client";
import { memberType, teamData } from "@/dummy/data";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useMemo } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";

const TeamMember = () => {
  const { memberId } = useParams();

  const selectedMember = useMemo(
    () => teamData.find((member) => member.id === +memberId),
    [memberId]
  );

  return (
    <div className="bg-mainBg min-h-screen text-whit">
      <div className="pt-40">
        <div className="container mx-auto">
          <div className="flex items-center justify-center flex-col gap-5">
            <div className="flex items-center justify-center">
              <div className="md:w-[400px] w-[200px] h-[200px] md:h-[400px] rounded-3xl z-40 relative overflow-hidden md:px-0 px-6">
                <Image
                  src={selectedMember?.image || ""}
                  fill
                  objectFit="cover"
                  alt=""
                  className=""
                />
              </div>
            </div>

            <h3 className="text-2xl font-bold">{selectedMember?.name}</h3>
            <div className="flex gap-4">
              <a
                href={selectedMember?.socialMedia.facebook}
                className="w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center"
              >
                <FaFacebookF color="#111827" fontSize={18} />
              </a>
              <a
                href={selectedMember?.socialMedia.linkedin}
                className="w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center"
              >
                <BsLinkedin color="#111827" fontSize={18} />
              </a>
              <a
                href={selectedMember?.socialMedia.twitter}
                className="w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center"
              >
                <FaXTwitter color="#111827" fontSize={18} />
              </a>
            </div>
            <p className="text-base">{selectedMember?.position}</p>
          </div>

          <p className="text-center mt-10 text-gray-300 md:px-60 px-5">
            {selectedMember?.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
