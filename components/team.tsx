import React from "react";
import TeamMember from "./team-member";
import shinkutImage from "@/public/images/shinkut.jpg";
import paulImage from "@/public/images/paul.jpg";
import michaelImage from "@/public/images/michael.jpg";
import kueImage from "@/public/images/kue.jpg";
import bodamImage from "@/public/images/bodam.jpg";

const Team = () => {
  return (
    <section className="flex items-center xl:h-screen max-w-6xl mx-auto px-4 sm:px-6">
      <div className="justify-center flex-1 px-4 pt-12 md:pt-20 mx-auto max-w-7xl md:px-6">
        <div className="text-center mb-14">
          <span className="block mb-4 text-xs font-semibold leading-4 tracking-widest text-center text-primary uppercase">
            Team
          </span>
          <h1 className="text-3xl font-bold capitalize">
            {" "}
            Meet Our Wonderful Team{" "}
          </h1>
        </div>
        <div className="flex flex-wrap justify-center -mx-4">
          <TeamMember
            image={shinkutImage}
            name="Shinkut Bognet"
            linkedin="https://www.linkedin.com/in/shinkut-bognet-4a593659"
            role="Founder"
            twitter=""
          />
          <TeamMember
            image={bodamImage}
            name="Bodam Bognet"
            linkedin="https://www.linkedin.com/in/bodam-bognet-0181369b"
            role="Chief Operating Officer"
            twitter=""
          />
          <TeamMember
            image={kueImage}
            linkedin="https://www.linkedin.com/in/kue-barinor-paul-0793a3b3"
            name="Kue Barinor Paul"
            role="Head Legal Services"
            twitter=""
          />

          <TeamMember
            image={michaelImage}
            linkedin="http://www.linkedin.com/in/michael-andrew-57762510b"
            name="Michael Andrew"
            role="Marketing Executive (offline)"
            twitter=""
          />
          <TeamMember
            image={paulImage}
            linkedin="https://www.linkedin.com/in/paul-alfred-9b2a7923a"
            name="Paul Alfred"
            role="Motion/Graphic Designer"
            twitter=""
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
