
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  changeText: string;
  changeColor: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon: Icon,
  iconColor,
  iconBgColor,
  changeText,
  changeColor,
}) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-gray-500">{title}</p>
            <h3 className="text-2xl font-bold">{value}</h3>
          </div>
          <div className={`${iconBgColor} p-2 rounded-full`}>
            <Icon className={`${iconColor}`} />
          </div>
        </div>
        <p className={`text-xs ${changeColor} mt-2`}>{changeText}</p>
      </CardContent>
    </Card>
  );
};

export default StatCard;
