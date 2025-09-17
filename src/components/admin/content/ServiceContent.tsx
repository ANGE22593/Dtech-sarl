
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Save, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceContentProps {
  title: string;
  description: string;
  pageTitle: string;
  pageDescription: string;
  image: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSave: () => void;
}

const ServiceContent: React.FC<ServiceContentProps> = ({
  title,
  description,
  pageTitle,
  pageDescription,
  image,
  onChange,
  onSave,
}) => {
  // Fonction pour obtenir l'URL de la page correspondante
  const getServicePageUrl = () => {
    switch (title) {
      case "Génie Civil":
        return "/services/civil";
      case "Technologie":
        return "/services/tech";
      case "Énergie":
        return "/services/energy";
      case "Infrastructure IT":
        return "/services/it-infrastructure";
      case "FAQ":
        return "/faq";
      default:
        return "/services";
    }
  };

  return (
    <Card className="border-none shadow-none">
      <CardContent className="pt-0 px-0">
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">{title}</h3>
            <Button variant="outline" size="sm" asChild>
              <Link to={getServicePageUrl()} target="_blank">
                <ExternalLink className="h-4 w-4 mr-1" />
                Voir la page
              </Link>
            </Button>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Titre</label>
            <Input 
              name="title"
              value={title}
              onChange={onChange}
            />
          </div>  
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Description courte</label>
            <Input 
              name="description"
              value={description}
              onChange={onChange}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Titre de la page</label>
            <Input 
              name="pageTitle"
              value={pageTitle}
              onChange={onChange}
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Description de la page</label>
            <Textarea 
              name="pageDescription"
              value={pageDescription}
              onChange={onChange}
              rows={3}
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Image URL</label>
            <Input 
              name="image"
              value={image}
              onChange={onChange}
            />
          </div>
          
          <div className="mt-2">
            <img 
              src={image} 
              alt={`${title} Preview`} 
              className="w-full h-32 object-cover rounded-md border"
            />
          </div>
          
          <Button 
            onClick={onSave} 
            className="w-full mt-4 bg-[#06a73d] hover:bg-[#058a32]"
          >
            <Save size={16} className="mr-2" />
            Enregistrer
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceContent;
