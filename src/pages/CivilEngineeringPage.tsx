import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Building } from "lucide-react";
import ServiceProjectCard from "@/components/ServiceProjectCard";

const CivilEngineeringPage = () => {
  const subServices = [
    {
      title: "Ingénierie : Conception et études",
      description: "Notre expertise en ingénierie offre des services de conception, d'études et de réalisation pour vos projets de construction neufs ou de rénovation.",
      image: "/lovable-uploads/cc8d9245-5dc7-4c3f-bfc4-e241a400b01b.png"
    },
    {
      title: "Aménagement de bureaux et d'espaces commerciaux",
      description: "Transformation d'espaces professionnels pour créer des environnements fonctionnels, esthétiques et ergonomiques qui reflètent l'identité de votre entreprise.",
      image: "/lovable-uploads/49b7167a-c63b-442b-baec-2278ef44b710.png"
    },
    {
      title: "Aménagement d'agence bancaire",
      description: "Solutions spécialisées pour les établissements financiers, avec une attention particulière à la sécurité et à l'expérience client.",
      image: "/lovable-uploads/Amenegement.png"
    },
    {
      title: "Construction métallique",
      description: "Structures métalliques robustes et élégantes pour tous vos besoins en construction industrielle et commerciale.",
      image: "/lovable-uploads/527ba408-31db-443a-9731-6d36354f9d69.png"
    },
    {
      title: "BTP",
      description: "Solutions complètes en bâtiment et travaux publics, de la fondation à la finition.",
      image: "/lovable-uploads/be8fe081-55c6-47a7-a6c5-8f4db13f09fa.png"
    },
    {
      title: "Aménagement d'espaces divers",
      description: "Terrassement, remblais, espaces verts et parkings adaptés à vos besoins spécifiques.",
      image: "/lovable-uploads/images (3).jpeg"
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

  const projects = [
    {
      title: "Aménagement d'agences bancaires",
      description: "Conception et aménagement intérieur moderne pour plusieurs agences bancaires en Côte d'Ivoire.",
      image: "/lovable-uploads/be8fe081-55c6-47a7-a6c5-8f4db13f09fa.png",
      category: "Aménagement"
    },
    {
      title: "Ingénierie",
      description: "Étude de plans architecturaux. Réalisation d'études détaillées pour un projet immobilier d'envergure.",
      image: "/lovable-uploads/527ba408-31db-443a-9731-6d36354f9d69.png",
      category: "Ingénierie"
    },
    {
      title: "Conception et réalisation de bureaux",
      description: "Projet complet de conception et construction de bureaux modernes pour une entreprise internationale.",
      image: "/lovable-uploads/65717c40-17dd-4cb4-9b48-03cbcfe23d84.png",
      category: "Génie Civil"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div 
        className="w-full h-[40vh] bg-cover bg-center bg-no-repeat relative pt-20" 
        style={{ 
          backgroundImage: `url('/lovable-uploads/depositphotos_403835358-stock-photo-a-night-miniature-highway-at.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Génie Civil</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Solutions complètes en génie civil, de la conception à la réalisation de vos projets d'infrastructure
            </p>
          </div>
        </div>
      </div>
      
      <main className="flex-grow py-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <Building className="text-[#06a73d]" size={40} />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-center">Nos Services en Génie Civil</h2>
            <div className="w-24 h-1 bg-[#06a73d] mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-gray-600 text-center mb-12">
              Découvrez notre gamme complète de services en génie civil, conçus pour répondre à tous vos besoins en matière de construction et d'aménagement d'espaces.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {subServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button asChild>
                    <Link to="/devis">Demander un devis</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mb-16 bg-white p-8 rounded-xl shadow-lg">
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
          
          <div className="text-center mt-16">
            <h2 className="text-2xl font-semibold mb-4">Prêt à commencer votre projet?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir 
              comment nos services de génie civil peuvent vous aider.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-[#06a73d] hover:bg-[#0677b0]">
                <a href="#contact">Nous Contacter</a>
              </Button>
              <Button asChild variant="outline" className="border-[#0677b0] text-[#0677b0] hover:bg-[#0677b0] hover:text-white">
                <Link to="/devis">Obtenir un Devis</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CivilEngineeringPage;
