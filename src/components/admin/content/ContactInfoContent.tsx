
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";

interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  workHours: string;
}

interface ContactInfoContentProps {
  contactInfo: ContactInfo;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
}

const ContactInfoContent: React.FC<ContactInfoContentProps> = ({
  contactInfo,
  onChange,
  onSave,
}) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="font-bold text-lg mb-4">Informations de contact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input 
                name="email"
                value={contactInfo.email}
                onChange={onChange}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Téléphone</label>
              <Input 
                name="phone"
                value={contactInfo.phone}
                onChange={onChange}
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Adresse</label>
              <Input 
                name="address"
                value={contactInfo.address}
                onChange={onChange}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Horaires d'ouverture</label>
              <Input 
                name="workHours"
                value={contactInfo.workHours}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
        
        <Button 
          onClick={onSave} 
          className="mt-6 bg-[#06a73d] hover:bg-[#058a32]"
        >
          <Save size={16} className="mr-2" />
          Enregistrer les informations de contact
        </Button>
      </CardContent>
    </Card>
  );
};

export default ContactInfoContent;
