
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Atom, Server } from "lucide-react";
import ServiceProjectCard from "@/components/ServiceProjectCard";

const TechnologyPage = () => {
  const subServices = [
    {
      title: "Réalisation et Mise aux normes de Datacenter",
      description: "Conception, implémentation et mise aux normes de centres de données modernes et efficaces pour votre entreprise.",
      image: "/lovable-uploads/ovh-serveurs-de-datacenter.jpg"
    },
    {
      title: "Installation de réseaux Télécom et Informatique",
      description: "Déploiement de solutions réseau performantes, adaptées aux besoins spécifiques de votre organisation.",
      image: "/lovable-uploads/1a4cb761-3106-47a1-a82a-79d9369c8c62.png"
    },
    {
      title: "Génie civil télécom et Fibre Optique",
      description: "Services complets pour FTTH, backbone, et déplacement de réseau avec des solutions de fibre optique de pointe.",
      image: "/lovable-uploads/Réseau/fibre-optique-deploiement-aerien.jpg"
    },
    {
      title: "Sécurité Électronique",
      description: "Solutions de vidéosurveillance, contrôle d'accès, systèmes d'alarme et détection incendie pour protéger vos locaux.",
      image: "/lovable-uploads/Réseau/protection-2.jpg"
    },
    {
      title: "Fourniture de matériel et consommables",
      description: "Approvisionnement en équipements informatiques, composants réseau et consommables de qualité pour votre entreprise.",
      image: "/lovable-uploads/Réseau/Equipement informatique.png"
    },
    {
      title: "Support technique et maintenance",
      description: "Services d'assistance technique et de maintenance régulière pour assurer le bon fonctionnement de vos systèmes IT.",
      image: "/lovable-uploads/Réseau/Tech-Support-1280x960.jpg"
    },

    {
      title: "Installation et maintenance de serveurs",
      description: "Mise en place et maintenance régulière de serveurs adaptés aux besoins spécifiques de votre entreprise.",
      image: "/lovable-uploads/Réseau/What-is-IT-infrastructure.jpg"
    },
    {
      title: "Solutions réseau avancées",
      description: "Conception et implémentation de solutions réseau performantes pour assurer une connectivité optimale.",
      image: "/lovable-uploads/Réseau/fibre optique.jpeg"
    },
    {
      title: "Sécurité électronique",
      description: "Systèmes de vidéosurveillance, contrôle d'accès et systèmes d'alarme pour protéger vos installations.",
      image: "/lovable-uploads/Réseau/protection-2.jpg"
    },
    {
      title: "Fibre optique",
      description: "Installation et maintenance de réseaux en fibre optique pour une connexion rapide et fiable.",
      image: "/lovable-uploads/Réseau/visuel-1-fibre-optique.jpg"
    },
    {
      title: "Câblage réseau",
      description: "Solutions de câblage structuré pour optimiser l'infrastructure réseau de votre entreprise.",
      image: "/lovable-uploads/Réseau/istockphoto-503844546-612x612.jpg"
    },
    {
      title: "Cloud computing",
      description: "Services cloud sécurisés et évolutifs pour stocker et gérer vos données en toute sécurité.",
      image: "/lovable-uploads/Réseau/securité cloud.jpeg"
    }
  ];

  const benefits = [
    "Équipements de dernière génération",
    "Techniciens certifiés et expérimentés",
    "Solutions personnalisées selon vos besoins",
    "Support technique réactif 24/7",
    "Optimisation des coûts d'exploitation",
    "Sécurité et fiabilité garanties"
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Technologie</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Solutions technologiques innovantes pour optimiser vos opérations et stimuler votre croissance
            </p>
          </div>
        </div>
      </div>
      <main className="flex-grow py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Atom className="text-[#0677b0]" size={40} />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-center">Nos Services Technologiques</h2>
            <div className="w-24 h-1 bg-[#06a73d] mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-gray-600 text-center mb-12">
              Découvrez notre gamme de services technologiques conçus pour répondre aux défis numériques actuels et propulser votre entreprise vers l'avenir.
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
            <h2 className="text-2xl font-bold mb-6 text-center">Pourquoi choisir nos services technologiques?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start p-4">
                  <CheckCircle className="text-blue-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-16">
            <h2 className="text-2xl font-semibold mb-4">Prêt à moderniser votre infrastructure technologique?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir 
              comment nos services technologiques peuvent transformer votre entreprise.
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

export default TechnologyPage;
