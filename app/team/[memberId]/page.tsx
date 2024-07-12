// "use client";
import SEO from "@/components/SEO";
import { memberType, teamData } from "@/dummy/data";
import { Metadata } from "next";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useMemo } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";

// export async function generateMetadata(props: {
//   params: { memberId: string };
//   searchParams: {};
// }): Promise<Metadata> {
//   const member = teamData.find(
//     (member) => member.id === +props.params.memberId
//   );

//   return {
//     title: `{member?.name}`,
//     description: "member in SVS coin",
//     keywords: ["SVS", "coin", "blockchain"],
//     openGraph: {
//       url: `https://svs-v1.vercel.app/team/${member?.id}/`,
//       title: `${member?.name}`,
//       description: `${member?.desc}`,
//       images: ["https://svs-v1.vercel.app/assets/images/logo-share.jpg"],
//     },
//   };
// }

export const metaData: Metadata = {
  title: `{member?.name}`,
  description: "member in SVS coin",
  keywords: ["SVS", "coin", "blockchain"],
  openGraph: {
    url: `https://svs-v1.vercel.app/team/{member?.id}/`,
    title: `{member?.name}`,
    description: `{member?.desc}`,
    images: ["https://svs-v1.vercel.app/assets/images/team-1.jpeg"],
  },
};

const TeamMember = ({
  params: { memberID },
  searchParams,
}: {
  params: { memberID: string };
  searchParams: {};
}) => {
  const member = teamData.find((member) => member.id === +memberID);

  return (
    <div className="bg-mainBg min-h-screen text-white">
      <div className="pt-40">
        <div className="container mx-auto">
          <div className="flex items-center justify-center flex-col gap-5">
            <div className="flex items-center justify-center">
              <div className="md:w-[400px] w-[200px] h-[200px] md:h-[400px] rounded-3xl z-40 relative overflow-hidden md:px-0 px-6">
                <Image
                  src={member?.image || ""}
                  fill
                  objectFit="cover"
                  alt=""
                  className=""
                />
              </div>
            </div>

            <h3 className="text-2xl font-bold">{member?.name}</h3>
            <div className="flex gap-4">
              <a
                href={member?.socialMedia.facebook}
                className="w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center"
              >
                <FaFacebookF color="#111827" fontSize={18} />
              </a>
              <a
                href={member?.socialMedia.linkedin}
                className="w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center"
              >
                <BsLinkedin color="#111827" fontSize={18} />
              </a>
              <a
                href={member?.socialMedia.twitter}
                className="w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center"
              >
                <FaXTwitter color="#111827" fontSize={18} />
              </a>
            </div>
            <p className="text-base">{member?.position}</p>
          </div>

          <p className="text-center mt-10 text-gray-300 md:px-60 px-5">
            {member?.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
