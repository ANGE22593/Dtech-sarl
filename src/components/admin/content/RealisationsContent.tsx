
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Save } from "lucide-react";

interface RealisationsContentProps {
  title: string;
  description: string;
  pageTitle: string;
  pageDescription: string;
  image: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSave: () => void;
}

const RealisationsContent: React.FC<RealisationsContentProps> = ({
  title,
  description,
  pageTitle,
  pageDescription,
  image,
  onChange,
  onSave,
}) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="font-bold text-lg mb-4">Réalisations</h2>
        
        <div className="space-y-4">
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
              alt="Réalisations Preview" 
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

        <div className="mt-8">
          <h3 className="font-medium mb-4">Projets de réalisation</h3>
          <p className="text-gray-500 text-sm mb-4">
            Pour modifier les projets individuels, vous pouvez utiliser l'onglet "Actualités" dans le menu latéral.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default RealisationsContent;
