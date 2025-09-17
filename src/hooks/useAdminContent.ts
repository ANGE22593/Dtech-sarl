
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface ServiceContent {
  title: string;
  description: string;
  pageTitle: string;
  pageDescription: string;
  image: string;
}

interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  workHours: string;
}

export const useAdminContent = () => {
  const { toast } = useToast();

  // Civil Engineering content
  const [civilContent, setCivilContent] = useState<ServiceContent>({
    title: "Génie Civil",
    description: "Conception et réalisation d'infrastructures, gestion de projets de construction, et expertise en structures...",
    pageTitle: "Nos Services en Génie Civil",
    pageDescription: "Découvrez notre gamme complète de services en génie civil, conçus pour répondre à tous vos besoins en matière de construction et d'aménagement d'espaces.",
    image: "/lovable-uploads/3456aef9-8978-4171-b005-f3fd9322151d.png"
  });

  // Technology content
  const [techContent, setTechContent] = useState<ServiceContent>({
    title: "Technologie",
    description: "Solutions informatiques innovantes, développement de logiciels sur mesure, et intégration de systèmes complexes...",
    pageTitle: "Nos Services Technologiques",
    pageDescription: "Découvrez notre gamme de services technologiques conçus pour répondre aux défis numériques actuels et propulser votre entreprise vers l'avenir.",
    image: "/lovable-uploads/1ec336f0-1b93-44a7-900a-b39d9d621be6.png"
  });
  
  // Energy content
  const [energyContent, setEnergyContent] = useState<ServiceContent>({
    title: "Énergie",
    description: "Conception de systèmes énergétiques durables, audits énergétiques, et solutions d'efficacité énergétique...",
    pageTitle: "Nos Services Énergétiques",
    pageDescription: "Découvrez notre gamme de solutions énergétiques conçues pour optimiser votre consommation tout en préservant l'environnement.",
    image: "/lovable-uploads/4f95254b-f6c9-473d-99ba-1ae1e4d5034d.png"
  });


  // FAQ content
  const [faqContent, setFaqContent] = useState<ServiceContent>({
    title: "FAQ",
    description: "Réponses aux questions fréquemment posées sur nos services.",
    pageTitle: "Foire Aux Questions",
    pageDescription: "Trouvez les réponses aux questions fréquemment posées sur DTECH SARL, nos services et nos méthodes de travail.",
    image: "/lovable-uploads/fe6fd368-c5dc-4a69-8157-8a9afc0646c7.png"
  });

  // Realisations content
  const [realisationsContent, setRealisationsContent] = useState<ServiceContent>({
    title: "Réalisations",
    description: "Nos projets réalisés pour divers clients.",
    pageTitle: "Nos Réalisations",
    pageDescription: "Découvrez quelques-uns des projets que nous avons réalisés pour nos clients. Notre expertise s'étend à travers différents domaines du génie civil, de l'énergie et de la technologie.",
    image: "/lovable-uploads/9f077a10-1534-4c8f-b034-9cffab76c093.png"
  });

  // Contact information
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    email: "contact@dtech-sarl.com",
    phone: "+225 07 07 07 07 07",
    address: "Abidjan, Côte d'Ivoire",
    workHours: "Lun-Ven: 8h-18h"
  });

  // Change handlers
  const handleCivilChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCivilContent(prev => ({ ...prev, [name]: value }));
  };
  
  const handleTechChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTechContent(prev => ({ ...prev, [name]: value }));
  };
  
  const handleEnergyChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEnergyContent(prev => ({ ...prev, [name]: value }));
  };

  const handleFaqChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFaqContent(prev => ({ ...prev, [name]: value }));
  };

  const handleRealisationsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setRealisationsContent(prev => ({ ...prev, [name]: value }));
  };
  
  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveContent = (section: string) => {
    toast({
      title: "Contenu mis à jour",
      description: `Les informations de la section ${section} ont été mises à jour.`,
    });
  };

  return {
    civilContent,
    techContent,
    energyContent,
    faqContent,
    realisationsContent,
    contactInfo,
    handleCivilChange,
    handleTechChange,
    handleEnergyChange,
    handleFaqChange,
    handleRealisationsChange,
    handleContactChange,
    handleSaveContent
  };
};
