import React from "react";

type Props = { title: string; description: string };

const Utility = ({ title, description }: Props) => {
  return (
    <div className="relative flex flex-col items-center">
      <h4 className="h4 mb-2 text-white">{title}</h4>
      <p className="text-lg text-white text-center">{description}</p>
    </div>
  );
};

export default Utility;
