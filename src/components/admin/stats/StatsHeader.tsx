
import React from "react";

interface StatsHeaderProps {
  title: string;
  description: string;
}

const StatsHeader: React.FC<StatsHeaderProps> = ({ title, description }) => {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

export default StatsHeader;
