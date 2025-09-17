
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface ServiceProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  projectId?: string;
}

const ServiceProjectCard = ({ title, description, image, category, projectId }: ServiceProjectCardProps) => {
  // Fonction pour générer un ID à partir du titre si aucun projectId n'est fourni
  const getProjectId = () => {
    if (projectId) return projectId;
    return title
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, '-');
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
      </div>
      <CardHeader className="p-4 pb-0">
        <div className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-white bg-[#0677b0] rounded-full">
          {category}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <p className="text-gray-700">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button variant="outline" size="sm" asChild>
          <Link to={`/realisations/${getProjectId()}`}>Plus</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceProjectCard;
