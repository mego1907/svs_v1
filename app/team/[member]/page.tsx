import React from "react";

const TeamMember = () => {
  return (
    <div className="bg-mainBg min-h-screen">
      <div className="pt-40">
        <div className="container">
          <h2 className="text-center text-4xl leading-snug font-semibold mb-8">
            Team Member
          </h2>

          <div className="flex flex-wrap gap-16">{/* Team Member Cards */}</div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
