
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const CivilServicePage = () => {
  const services = [
    {
      title: "Aménagement de bureaux, d'agence bancaire et espace commercial",
      description: "Transformation d'espaces commerciaux et professionnels selon vos besoins spécifiques.",
      images: [
        "/lovable-uploads/65717c40-17dd-4cb4-9b48-03cbcfe23d84.png",
        "/lovable-uploads/be8fe081-55c6-47a7-a6c5-8f4db13f09fa.png"
      ]
    },
    {
      title: "Ingénierie : Conception et études Réalisation de projet neuf et rénovation",
      description: "De la conception à la réalisation, nous vous accompagnons dans vos projets de construction neufs ou de rénovation.",
      images: [
        "/lovable-uploads/527ba408-31db-443a-9731-6d36354f9d69.png",
        "/lovable-uploads/738b5334-2013-4ca2-8164-2a32c0e97dc6.png"
      ]
    },
    {
      title: "Construction métallique BTP",
      description: "Structures métalliques robustes et élégantes pour tous vos besoins en construction.",
      images: [
        "/lovable-uploads/f15269c6-909e-476c-87ea-2f625fa2dcf1.png"
      ]
    }
  ];

  const benefits = [
    "Projets livrés dans les délais",
    "Équipe hautement qualifiée",
    "Utilisation de technologies de pointe",
    "Conformité aux normes internationales",
    "Suivi personnalisé de chaque projet",
    "Engagement envers la qualité et la durabilité"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-28 pb-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Services de Génie Civil</h1>
            <div className="w-24 h-1 bg-[#06a73d] mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              DTECH SARL offre une gamme complète de services de génie civil, de l'aménagement d'espaces commerciaux à la construction métallique et la réalisation de projets neufs.
            </p>
          </div>
          
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
                <div className="md:w-1/2">
                  <div className="grid grid-cols-1 gap-4">
                    {service.images.map((img, imgIndex) => (
                      <img 
                        key={imgIndex} 
                        src={img} 
                        alt={`${service.title} - image ${imgIndex+1}`} 
                        className="rounded-lg shadow-lg w-full h-auto object-cover" 
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <Button asChild>
                    <Link to="/devis">Obtenir un devis</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Pourquoi choisir nos services de Génie Civil?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start p-4">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link to="/devis">Demander un devis pour votre projet</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CivilServicePage;
