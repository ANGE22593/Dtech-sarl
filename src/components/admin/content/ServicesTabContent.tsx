
import React from "react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import ServiceContent from "./ServiceContent";

interface ServiceData {
  title: string;
  description: string;
  pageTitle: string;
  pageDescription: string;
  image: string;
}

interface ServicesTabContentProps {
  civilContent: ServiceData;
  techContent: ServiceData;
  energyContent: ServiceData;
  itInfraContent: ServiceData;
  faqContent: ServiceData;
  handleCivilChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleTechChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleEnergyChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleItInfraChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleFaqChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSaveContent: (section: string) => void;
}

const ServicesTabContent: React.FC<ServicesTabContentProps> = ({
  civilContent,
  techContent,
  energyContent,
  itInfraContent,
  faqContent,
  handleCivilChange,
  handleTechChange,
  handleEnergyChange,
  handleItInfraChange,
  handleFaqChange,
  handleSaveContent,
}) => {
  return (
    <div className="space-y-6">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="civil">
          <AccordionTrigger className="text-lg font-medium py-4 hover:bg-gray-50 px-4 rounded-md">
            Génie Civil
          </AccordionTrigger>
          <AccordionContent className="p-4 pt-6 bg-gray-50 rounded-md">
            <ServiceContent
              title="Génie Civil"
              description={civilContent.description}
              pageTitle={civilContent.pageTitle}
              pageDescription={civilContent.pageDescription}
              image={civilContent.image}
              onChange={handleCivilChange}
              onSave={() => handleSaveContent("Génie Civil")}
            />
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="tech">
          <AccordionTrigger className="text-lg font-medium py-4 hover:bg-gray-50 px-4 rounded-md">
            Technologie
          </AccordionTrigger>
          <AccordionContent className="p-4 pt-6 bg-gray-50 rounded-md">
            <ServiceContent
              title="Technologie"
              description={techContent.description}
              pageTitle={techContent.pageTitle}
              pageDescription={techContent.pageDescription}
              image={techContent.image}
              onChange={handleTechChange}
              onSave={() => handleSaveContent("Technologie")}
            />
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="energy">
          <AccordionTrigger className="text-lg font-medium py-4 hover:bg-gray-50 px-4 rounded-md">
            Énergie
          </AccordionTrigger>
          <AccordionContent className="p-4 pt-6 bg-gray-50 rounded-md">
            <ServiceContent
              title="Énergie"
              description={energyContent.description}
              pageTitle={energyContent.pageTitle}
              pageDescription={energyContent.pageDescription}
              image={energyContent.image}
              onChange={handleEnergyChange}
              onSave={() => handleSaveContent("Énergie")}
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="faq">
          <AccordionTrigger className="text-lg font-medium py-4 hover:bg-gray-50 px-4 rounded-md">
            FAQ
          </AccordionTrigger>
          <AccordionContent className="p-4 pt-6 bg-gray-50 rounded-md">
            <ServiceContent
              title="FAQ"
              description={faqContent.description}
              pageTitle={faqContent.pageTitle}
              pageDescription={faqContent.pageDescription}
              image={faqContent.image}
              onChange={handleFaqChange}
              onSave={() => handleSaveContent("FAQ")}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ServicesTabContent;
