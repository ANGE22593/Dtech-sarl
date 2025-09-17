import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Power } from "lucide-react";
import ServiceProjectCard from "@/components/ServiceProjectCard";

const EnergyPage = () => {
  const subServices = [
    {
      title: "Audit énergétique",
      description: "Évaluation complète de vos installations pour identifier les opportunités d'optimisation de la consommation énergétique.",
      image: "/lovable-uploads/images.jpeg"
    },
    {
      title: "Construction de Poste et ligne MT",
      description: "Conception et réalisation de postes électriques et de lignes moyenne tension selon les normes en vigueur.",
      image: "/lovable-uploads/5ea90ddc-5b35-455f-9d05-9c4d1352168e.png"
    },
    {
      title: "Installation Industrielle et domestique",
      description: "Services complets d'installation électrique pour les environnements industriels et résidentiels.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Système de régulation et de secours",
      description: "Installation de groupes électrogènes, onduleurs et régulateurs pour assurer la continuité de vos opérations.",
      image: "/lovable-uploads/téléchargement.jpeg"
    },
    {
      title: "Énergie renouvelable",
      description: "Solutions d'énergie solaire et d'inertie pour réduire votre empreinte carbone et vos coûts énergétiques.",
      image: "/lovable-uploads/prix-des-energies-scaled.jpeg"
    },
    {
      title: "Froid : Climatisation",
      description: "Installation et maintenance de systèmes de climatisation individuels et centralisés pour tous types de bâtiments.",
      image: "/lovable-uploads/images (1).jpeg"
    }
  ];

  const benefits = [
    "Économies d'énergie substantielles",
    "Solutions durables et écologiques",
    "Techniciens certifiés en systèmes énergétiques",
    "Conformité aux normes internationales",
    "Réduction de l'empreinte carbone",
    "Fiabilité et performance optimale"
  ];

  const projects = [
    {
      title: "Système de secours énergétique",
      description: "Installation d'un système complet de groupe électrogène et d'onduleurs pour un centre de données.",
      image: "https://images.unsplash.com/photo-1626387600947-0d6310d21773?auto=format&fit=crop&q=80&w=2000",
      category: "Backup"
    },
    {
      title: "Installation solaire",
      description: "Déploiement de panneaux solaires pour une entreprise visant l'autonomie énergétique.",
      image: "/lovable-uploads/prix-des-energies-scaled.jpeg",
      category: "Renouvelable"
    },
    {
      title: "Climatisation industrielle",
      description: "Installation de systèmes de climatisation pour un complexe industriel de grande envergure.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2000",
      category: "Climatisation"
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Énergie</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Solutions énergétiques durables pour réduire votre empreinte écologique et optimiser votre consommation
            </p>
          </div>
        </div>
      </div>
      
      <main className="flex-grow py-16 bg-gradient-to-r from-emerald-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <Power className="text-emerald-600" size={40} />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-center">Nos Services Énergétiques</h2>
            <div className="w-24 h-1 bg-[#06a73d] mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-gray-600 text-center mb-12">
              Découvrez notre gamme de solutions énergétiques conçues pour optimiser votre consommation tout en préservant l'environnement.
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
            <h2 className="text-2xl font-bold mb-6 text-center">Pourquoi choisir nos services énergétiques?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start p-4">
                  <CheckCircle className="text-emerald-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-16">
            <h2 className="text-2xl font-semibold mb-4">Prêt à optimiser votre consommation énergétique?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir 
              comment nos services énergétiques peuvent vous aider à économiser et à préserver l'environnement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-[#06a73d] hover:bg-[#0677b0]">
                <Link to="/#contact">Nous Contacter</Link>
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

export default EnergyPage;
