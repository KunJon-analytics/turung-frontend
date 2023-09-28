import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

type Props = {
  image: StaticImageData;
  role: string;
  linkedin: string;
  name: string;
};

const TeamMember = ({ image, role, name, linkedin }: Props) => {
  return (
    <div className="w-full px-4 mb-10 sm:w-1/2 lg:w-1/3 xl:w-1/4 ">
      <div className="mx-auto text-center ">
        <div className="inline-block mb-3 overflow-hidden text-xs rounded-full w-44 h-44 sm:w-64 sm:h-64">
          <Image
            className="object-cover w-full h-full transition-all hover:scale-110"
            src={image}
            alt={name}
          />
        </div>
        <h2 className="mb-2 text-xl font-semibold">{name}</h2>
        <span className="inline-block mb-6 text-base font-medium text-primary">
          {role}
        </span>
        <div className="flex items-center justify-center">
          <Link className="inline-block mr-5" target="_blank" href={linkedin}>
            <FaLinkedin className="w-6 h-6 bi bi-linkedin " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
