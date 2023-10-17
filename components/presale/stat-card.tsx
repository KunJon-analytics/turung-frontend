import React from "react";
import { IconType } from "react-icons/lib";

interface Prop {
  icon: IconType;
  title: string;
  value: string;
  description: string;
}

const StatCard = ({ icon: Icon, title, value, description }: Prop) => {
  return (
    <div className="stat">
      <div className="stat-figure text-primary">
        <Icon className="inline-block w-8 h-8 stroke-current" />
      </div>
      <div className="stat-title">{title}</div>
      <div className="stat-value text-primary">{value}</div>
      <div className="stat-desc">{description}</div>
    </div>
  );
};

export default StatCard;
