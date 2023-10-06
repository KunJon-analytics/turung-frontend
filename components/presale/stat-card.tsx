import React from "react";

interface Prop {
  icon: React.JSX.Element;
  title: string;
  value: string;
  description: string;
}

const StatCard = ({ icon, title, value, description }: Prop) => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-primary sm:w-12 sm:h-12">
        {icon}
      </div>
      <h6 className="text-2xl lg:text-3xl font-bold">{value}</h6>
      <p className="mb-2 font-bold text-md">{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default StatCard;
