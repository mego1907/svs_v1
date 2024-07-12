// "use client";
import SEO from "@/components/SEO";
import { memberType, teamData } from "@/dummy/data";
import { Metadata } from "next";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useMemo } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export async function generateMetadata(props: {
  params: { memberId: string };
  searchParams: {};
}): Promise<Metadata> {
  const member = teamData.find(
    (member) => member.id === +props.params.memberId
  );

  return {
    title: `${member?.name}`,
    description: "member in SVS coin",
    keywords: ["SVS", "coin", "blockchain"],
    openGraph: {
      url: `https://svscoin.org/team/${member?.id}/`,
      title: `${member?.name}`,
      description: `${member?.desc}`,
      images: [`https://svscoin.org/${member?.image}`],
    },
  };
}

const getTeamMember = (memberId: string) => {
  const member = teamData.find((member) => member.id === +memberId);
  return member;
};

const TeamMember = async ({
  params: { memberId },
}: {
  params: { memberId: string };
}) => {
  const teamMember = getTeamMember(memberId);

  return (
    <div className="bg-mainBg min-h-screen text-white">
      <div className="pt-40">
        <div className="container mx-auto">
          <div className="flex items-center justify-center flex-col gap-5">
            <div className="flex items-center justify-center">
              <div className="md:w-[400px] w-[200px] h-[200px] md:h-[400px] rounded-3xl z-40 relative overflow-hidden md:px-0 px-6">
                <Image
                  src={teamMember?.image || ""}
                  fill
                  objectFit="cover"
                  alt={teamMember?.name || ""}
                />
              </div>
            </div>

            <h3 className="text-2xl font-bold">{teamMember?.name}</h3>
            <div className="flex gap-4">
              {teamMember?.socialMedia.facebook && (
                <a
                  href={teamMember?.socialMedia.facebook}
                  className="w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center relative z-40"
                >
                  <FaFacebookF color="#111827" fontSize={18} />
                </a>
              )}

              {teamMember?.socialMedia.linkedin && (
                <a
                  href={teamMember?.socialMedia.linkedin}
                  className="w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center relative z-40"
                >
                  <BsLinkedin color="#111827" fontSize={18} />
                </a>
              )}

              {teamMember?.socialMedia.twitter && (
                <a
                  href={teamMember?.socialMedia.twitter}
                  className="w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center relative z-40"
                >
                  <FaXTwitter color="#111827" fontSize={18} />
                </a>
              )}

              {teamMember?.socialMedia.instagram && (
                <a
                  href={teamMember?.socialMedia.instagram}
                  className="w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center relative z-40"
                >
                  <FaInstagram color="#111827" fontSize={18} />
                </a>
              )}
            </div>
            <p className="text-base">{teamMember?.position}</p>
          </div>

          <p className="text-center mt-10 text-gray-300 md:px-60 px-5">
            {teamMember?.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
