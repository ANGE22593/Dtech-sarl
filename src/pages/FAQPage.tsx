import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

const FAQPage = () => {
  const faqItems = [
    {
      question: "Quels service proposez-vous ?",
      answer: (
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">GENIE CIVIL:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Ingénierie : Conception et études, Réalisation de projet neuf et rénovation</li>
              <li>Aménagement de bureaux, d'agence bancaire et espace commercial</li>
              <li>Construction métallique, BTP</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">ENERGIES:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Audit énergétique</li>
              <li>Construction de Poste et ligne MT</li>
              <li>Installation Industrielle et domestique</li>
              <li>Systèmes de secours : Groupe électrogène, Onduleur, Régulateur</li>
              <li>Énergie renouvelable : Solaire</li>
              <li>Climatisation individuelle et centralisée</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">TECHNOLOGIES:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Datacenter</li>
              <li>Installation de réseaux Télécom et Informatique</li>
              <li>Fibre Optique (FTTH, BACKBONE, etc.)</li>
              <li>Vidéosurveillance, Alarme, Détection incendie</li>
              <li>Fourniture de matériel et consommables</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      question: "Comment puis-je contacter le service client ?",
      answer: "Par téléphone au +225 27 21 36 00 70 / 01 03 32 79 99 ou par e-mail à infos@dtechi.com."
    },
    {
      question: "Comment puis-je obtenir un devis pour mon projet ?",
      answer: "Demandez un devis par téléphone ou par e-mail à infos@dtechi.com."
    },
    {
      question: "Comment garantissez-vous la qualité de vos travaux ?",
      answer: "Nous respectons des normes strictes avec une équipe qualifiée pour superviser chaque projet."
    },
    {
      question: "Pouvez-vous prendre des projets sur mesure ?",
      answer: "Oui, nous réalisons des projets personnalisés selon vos besoins spécifiques."
    },
    {
      question: "Proposez-vous des services de gestion de projet ?",
      answer: "Oui, nous assurons la planification, la réalisation et la livraison des projets avec efficacité."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Foire Aux Questions</h1>
            <div className="w-24 h-1 bg-[#046b2d] mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Trouvez les réponses aux questions fréquemment posées sur DTECH SARL, nos services et nos méthodes de travail.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg mb-4 shadow-sm overflow-hidden transition-all"
                >
                  <AccordionTrigger className="px-6 py-4 group hover:bg-green-100 data-[state=open]:bg-green-100">
                    <div className="flex justify-between items-center w-full">
                      <span className="text-lg font-medium text-left group-hover:text-[#046b2d] data-[state=open]:text-[#046b2d] transition-colors duration-200">
                        {item.question}
                      </span>
                      <ChevronDown className="h-5 w-5 text-[#046b2d] transform transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="px-6 py-4 text-gray-700 bg-white">
                      {item.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQPage;
