import React from "react";

type Props = {
  title: string;
  description: string;
  icon: React.JSX.Element;
  delay: string;
};

const Feature = ({ title, description, icon, delay }: Props) => {
  return (
    <div
      className="relative flex flex-col items-center"
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-anchor="[data-aos-id-blocks]"
    >
      {icon}
      <h4 className="h4 mb-2">{title}</h4>
      <p className="text:md lg:text-lg text-center">{description}</p>
    </div>
  );
};

export default Feature;
