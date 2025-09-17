
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceProjectCard from "@/components/ServiceProjectCard";

const RealisationsPage = () => {
  const projects = [
    {
      title: "Aménagements d'Agence pour CANAL+",
      description: "Aménagements d'Agence pour CANAL+ dans plusieurs villes de la Côte d'ivoire. Chaque espace est conçu pour offrir une expérience client immersive et personnalisée, reflétant l'esprit unique de notre concept de qualité.",
      image: "/lovable-uploads/9f077a10-1534-4c8f-b034-9cffab76c093.png",
      category: "Aménagement",
      projectId: "amenagement-agence-canal-plus"
    },
    {
      title: "Aménagement siège social colas Abidjan",
      description: "Conception et réalisation de l'aménagement complet du siège social de Colas à Abidjan, incluant des espaces de bureaux modernes, des salles de réunion et un accueil haut de gamme.",
      image: "/lovable-uploads/f656d256-08c7-4e22-bfd3-3d34d985dfe0.png",
      category: "Aménagement",
      projectId: "amenagement-siege-colas-abidjan"
    },
    {
      title: "Réalisation d'un parking",
      description: "Conception et construction d'un parking moderne offrant une solution optimale pour le stationnement des véhicules.",
      image: "/lovable-uploads/418a6e7d-fa24-4e7d-9a64-6d2fed4d31e3.png",
      category: "Génie Civil",
      projectId: "realisation-parking"
    },
    {
      title: "Réalisation d'un SHOWROOM MERCEDES BENZ BY CFAO. MADE BY DTECH SARL",
      description: "Construction et aménagement d'un espace d'exposition automobile haut de gamme.",
      image: "/lovable-uploads/photo_2024-04-20_20-46-06.jpg",
      category: "Génie Civil",
      projectId: "showroom-mercedes-benz"
    },
    {
      title: "CONSTUCTION METALIQUE",
      description: "Construction et aménagement d'un espace d'exposition automobile haut de gamme. .",
      image: "/lovable-uploads/527ba408-31db-443a-9731-6d36354f9d69.png",
      category: "Ingénierie",
      projectId: "etude-plans-architecturaux"
    },
    {
      title: "Construction de maison individuelle",
      description: "Travaux de construction de maisons individuelles et villas de prestige en Côte d'Ivoire.",
      image: "/lovable-uploads/4e849f6d-5cda-4945-ad50-c6515b047224.png",
      category: "Génie Civil",
      projectId: "construction-maison-individuelle"
    },
    {
      title: "Rénovation façades CITROËN PEUGEOT MITSUBISHI",
      description: "Travaux de rénovation complète des façades des concessions automobiles à Abidjan.",
      image: "/lovable-uploads/b85fd41c-5449-4c1b-9e36-dea5a5627991.png", 
      category: "Génie Civil",
      projectId: "renovation-facades-citroen-peugeot-mitsubishi"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

        <div className="pt-28 pb-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div 
                className="w-full h-[40vh] bg-cover bg-center bg-no-repeat elative pt-50" 
                style={{ 
                backgroundImage: `url('/lovable-uploads/depositphotos_403835358-stock-photo-a-night-miniature-highway-at.jpg')`
                }}
              >
                <div 
                  className=" opacity-20 bg-cover" 
                  style={{ 
                  backgroundImage: `url('/lovable-uploads/depositphotos_403835358-stock-photo-a-night-miniature-highway-at.jpg')`
                }}
                >
                </div>
                <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
                  <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Nos Réalisations</h1>
                    <p className="max-w-3xl mx-auto text-gray-600">
                     <p className="text-lg md:text-xl text-white/100 max-w-xl text-left text-color = green">
                        Découvrez quelques-uns des projets que nous avons réalisés pour nos clients.
                        Notre expertise s'étend à travers différents domaines du génie civil, de l'énergie et de la technologie.
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ServiceProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  category={project.category}
                  projectId={project.projectId}
                />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button size="lg" asChild>
                <Link to="/devis">Discuter de votre projet</Link>
              </Button>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
};

export default RealisationsPage;
