// "use client";
import SEO from "@/components/SEO";
import { memberType, teamData } from "@/dummy/data";
import { Metadata } from "next";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useMemo } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";

export async function generateMetadata(props): Promise<Metadata> {
  console.log("Generat metadata props :", props);

  const firstMember = teamData[0];

  return {
    title: firstMember.name,
    description: "member in SVS coin",
    keywords: ["SVS", "coin", "blockchain"],
    openGraph: {
      url: `https://svs-v1.vercel.app/team/${firstMember.id}/`,
      title: firstMember.name,
      description: firstMember.desc,
      images: ["https://svs-v1.vercel.app/assets/images/logo-share.jpg"],
    },
  };
}

const TeamMember = () => {
  const { memberId } = useParams();

  // const selectedMember = useMemo(
  //   () => ,
  //   [memberId]
  // );

  return (
    <>
      {/* <SEO
        url={`https://svs-v1.vercel.app/team/${selectedMember?.id}`}
        title={selectedMember?.name || ""}
        image={`https://svs-v1.vercel.app/${selectedMember?.image}`}
        description={selectedMember?.desc || ""}
      /> */}

      <div className="bg-mainBg min-h-screen text-white">
        <div className="pt-40">
          <div className="container mx-auto">
            <div className="flex items-center justify-center flex-col gap-5">
              <div className="flex items-center justify-center">
                <div className="md:w-[400px] w-[200px] h-[200px] md:h-[400px] rounded-3xl z-40 relative overflow-hidden md:px-0 px-6">
                  <Image
                    src={
                      teamData.find((member) => member.id === +memberId)
                        ?.image || ""
                    }
                    fill
                    objectFit="cover"
                    alt=""
                    className=""
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold">
                {teamData.find((member) => member.id === +memberId)?.name}
              </h3>
              <div className="flex gap-4">
                <a
                  href={
                    teamData.find((member) => member.id === +memberId)
                      ?.socialMedia.facebook
                  }
                  className="w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center"
                >
                  <FaFacebookF color="#111827" fontSize={18} />
                </a>
                <a
                  href={
                    teamData.find((member) => member.id === +memberId)
                      ?.socialMedia.linkedin
                  }
                  className="w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center"
                >
                  <BsLinkedin color="#111827" fontSize={18} />
                </a>
                <a
                  href={
                    teamData.find((member) => member.id === +memberId)
                      ?.socialMedia.twitter
                  }
                  className="w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center"
                >
                  <FaXTwitter color="#111827" fontSize={18} />
                </a>
              </div>
              <p className="text-base">
                {teamData.find((member) => member.id === +memberId)?.position}
              </p>
            </div>

            <p className="text-center mt-10 text-gray-300 md:px-60 px-5">
              {teamData.find((member) => member.id === +memberId)?.desc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMember;
