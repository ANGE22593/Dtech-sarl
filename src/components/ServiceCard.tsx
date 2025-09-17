
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  className?: string;
  variant: "civil" | "tech" | "energy";
  link?: string;
}

const ServiceCard = ({
  title,
  description,
  icon: Icon,
  color,
  className,
  variant,
  link,
}: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Map color strings to Tailwind classes with DTECH SARL colors
  const bgColorMap: Record<string, string> = {
    green: "bg-emerald-100",
    blue: "bg-blue-100",
    darkgreen: "bg-green-100"
  };
  
  const textColorMap: Record<string, string> = {
    green: "text-[#06a73d]",
    blue: "text-[#0677b0]",
    darkgreen: "text-emerald-600"
  };

  const borderColorMap: Record<string, string> = {
    green: "hover:border-[#06a73d]",
    blue: "hover:border-[#0677b0]",
    darkgreen: "hover:border-emerald-600"
  };

  return (
    <Card 
      className={cn(
        "bg-white border-2 shadow-lg transition-all duration-300 card-rise h-full flex flex-col",
        `service-card-${variant}`,
        borderColorMap[color],
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="pb-0">
        <div 
          className={cn(
            "w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-all duration-500", 
            bgColorMap[color],
            isHovered ? "animate-bounce" : ""
          )}
        >
          <Icon 
            className={cn(
              textColorMap[color], 
              "transition-all duration-300",
              isHovered ? "scale-125" : ""
            )} 
            size={24} 
          />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          className="w-full justify-center hover:bg-[#06a73d] hover:text-white"
          asChild
        >
          <Link to={link || "#"}>En savoir plus</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
