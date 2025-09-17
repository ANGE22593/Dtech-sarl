
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import ProjectGallery from "@/components/ProjectGallery";
import { ChevronLeft } from "lucide-react";

// Définir les données des projets
const projectsData = {
  "amenagement-agence-canal-plus": {
    title: "Aménagements d'Agence pour CANAL+",
    description: "Aménagements d'Agence pour CANAL+ dans plusieurs villes de la Côte d'ivoire. Chaque espace est conçu pour offrir une expérience client immersive et personnalisée, reflétant l'esprit unique de notre concept de qualité. Les agences, réparties à travers plusieurs villes de la Côte d'Ivoire, incarnent l'élégance et le dynamisme, fruit de l'esprit de créativité de DTECH.",
    category: "Aménagement",
    images: [
      "/lovable-uploads/71a95255-5b4b-4366-8809-6265f56554d8.png",
      "/lovable-uploads/9f077a10-1534-4c8f-b034-9cffab76c093.png",
      "/lovable-uploads/8023b0c4-96ba-4718-890a-bb13bb15daa8.png",
      "/lovable-uploads/cc6c856a-a54c-467a-97d8-42f9f6f37852.png",
      "/lovable-uploads/photo_2024-04-20_20-45-26.jpg",
      "/lovable-uploads/photo_2024-04-20_20-44-58.jpg",
      "/lovable-uploads/photo_2024-04-20_20-45-52.jpg",
      "/lovable-uploads/photo_2024-04-20_20-45-47.jpg",
      "/lovable-uploads/photo_2024-03-10_13-46-11.jpg",
      "/lovable-uploads/fda578f7-ebe5-414a-9201-9f78bcdaf8bd.png"
    ],
    coverImage: "/lovable-uploads/9f077a10-1534-4c8f-b034-9cffab76c093.png"
  },
  "amenagement-siege-colas-abidjan": {
    title: "Aménagement siège social colas Abidjan",
    description: "Conception et réalisation de l'aménagement complet du siège social de Colas à Abidjan, incluant des espaces de bureaux modernes, des salles de réunion et un accueil haut de gamme. L'intégration d'éléments de design contemporain et de matériaux de qualité supérieure confère à l'ensemble un environnement de travail à la fois fonctionnel et esthétique, reflétant l'image professionnelle de l'entreprise.",
    category: "Aménagement",
    images: [
      "/lovable-uploads/4b08782d-5ac1-477d-b535-abf7cce1debe.png",
      "/lovable-uploads/2ab619c4-2623-42ac-ab1b-4b211211d348.png",
      "/lovable-uploads/3456aef9-8978-4171-b005-f3fd9322151d.png", 
      "/lovable-uploads/4bb12f22-d773-4f12-898b-79dd0b55ed89.png",
      "/lovable-uploads/colas 2.jpg",
      "/lovable-uploads/colas 3.jpg",
      "/lovable-uploads/colas 4.jpg",
      "/lovable-uploads/colas 5.jpg",
      "/lovable-uploads/photo_2024-03-10_13-00-02 (6).jpg", 
      "/lovable-uploads/f656d256-08c7-4e22-bfd3-3d34d985dfe0.png"
    ],
    coverImage: "/lovable-uploads/colas couverture.jpg"
  },
  "realisation-parking": {
    title: "Réalisation d'un parking",
    description: "Conception et construction d'un parking moderne offrant une solution optimale pour le stationnement des véhicules. Ce projet comprend l'étude, la planification et l'exécution complète d'un espace de stationnement fonctionnel, sécurisé et durable, adapté aux besoins spécifiques du client. Notre équipe a mis en œuvre des techniques modernes de génie civil pour assurer la qualité et la durabilité de l'ouvrage.",
    category: "Génie Civil",
    images: [
      "/lovable-uploads/418a6e7d-fa24-4e7d-9a64-6d2fed4d31e3.png",
      "/lovable-uploads/8e6973d9-bd07-4846-ac89-0a4eafe982f2.png",
      "/lovable-uploads/4f95254b-f6c9-473d-99ba-1ae1e4d5034d.png"
    ],
    coverImage: "/lovable-uploads/418a6e7d-fa24-4e7d-9a64-6d2fed4d31e3.png"
  },
  "renovation-facades-citroen-peugeot-mitsubishi": {
    title: "Rénovation façades CITROËN PEUGEOT MITSUBISHI",
    description: "Travaux de rénovation complète des façades des concessions automobiles à Abidjan.",
    category: "Génie Civil",
    images: [
      "/lovable-uploads/b85fd41c-5449-4c1b-9e36-dea5a5627991.png",
      "/lovable-uploads/a26b673d-629f-42ea-9745-20071df9c2f7.png",
      "/lovable-uploads/543fba37-4a27-4756-9b8b-cc38648d3d82.png",
      "/lovable-uploads/3e9d358e-5d7e-4f6b-a37c-cb9749b6986f.png",
      "/lovable-uploads/b7a6276e-32ab-476e-95aa-0e2036ee2234.png"
    ],
    coverImage: "/lovable-uploads/b85fd41c-5449-4c1b-9e36-dea5a5627991.png"
  },
  "construction-maison-individuelle": {
    title: "Construction de maison individuelle",
    description: "Travaux de construction de maisons individuelles et villas de prestige en Côte d'Ivoire.",
    category: "Génie Civil",
    images: [
      "/lovable-uploads/5144c6a5-cc6b-4475-ac27-fe4d2d9cecff.png",
      "/lovable-uploads/3456aef9-8978-4171-b005-f3fd9322151d.png",
      "/lovable-uploads/6f0e50d5-286d-4c43-afbe-b2d82f13d78b.png",
      "/lovable-uploads/photo_2024-03-10_13-40-35 (4).jpg",
      "/lovable-uploads/photo_2024-03-10_13-40-35.jpg",
      "/lovable-uploads/photo_2024-03-10_13-40-34 (3).jpg",
      "/lovable-uploads/photo_2024-03-10_13-40-34.jpg",
      "/lovable-uploads/b3cdcf12-df30-43a2-a1e1-5c4ad10dd0ef.png",
      "/lovable-uploads/e6f222f5-f056-41e3-84f8-a216606ad552.png"
    ],
    coverImage: "/lovable-uploads/4e849f6d-5cda-4945-ad50-c6515b047224.png"
  },
  "showroom-mercedes-benz": {
    title: "Réalisation d'un SHOWROOM MERCEDES BENZ BY CFAO",
    description: "Construction et aménagement d'un espace d'exposition automobile haut de gamme.",
    category: "Génie Civil",
    images: [
      "/lovable-uploads/1befc5d1-14f4-4784-80ce-8197ad7bf7c8.png",
      "/lovable-uploads/01913e21-0df7-4ee3-b865-76ceb9cf884e.png",
      "/lovable-uploads/6bfcd239-dcf1-447c-b5b1-8e9bd0eff845.png",
      "/lovable-uploads/5ea90ddc-5b35-455f-9d05-9c4d1352168e.png", 
      "/lovable-uploads/photo_2024-04-20_20-46-10.jpg",
      "/lovable-uploads/photo_2024-04-20_20-44-36.jpg",
      "/lovable-uploads/photo_2024-04-20_20-46-06.jpg",
      "/lovable-uploads/photo_2024-04-20_20-45-58.jpg",  
      "/lovable-uploads/6bc76a5f-0235-4187-9879-5be1897b5473.png",
      "/lovable-uploads/60daae46-20fc-4338-9f17-722ea5200710.png"
    ],
    coverImage: "/lovable-uploads/photo_2024-04-20_20-46-06.jpg"
  },
  "etude-plans-architecturaux": {
    title: "Etude de plans architecturaux",
    description: "Construction et aménagement d'un espace d'exposition automobile haut de gamme.",
    category: "Génie Civil",
    images: [
      "/lovable-uploads/527ba408-31db-443a-9731-6d36354f9d69.png",
      "/lovable-uploads/photo_2024-03-10_13-56-48.jpg",
      "/lovable-uploads/photo_2024-03-10_13-56-48-abidjan.jpg",
      "/lovable-uploads/photo_2024-03-10_13-58-00.jpg",
      "/lovable-uploads/bétoniere.jpg"
    ],
    coverImage: "/lovable-uploads/photo_2024-03-10_13-56-48.jpg"
  }
  // Ajoutez d'autres projets ici selon le même format
};

const ProjectDetailPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  
  // Si le projectId n'existe pas dans les données, afficher un message d'erreur
  if (!projectId || !projectsData[projectId as keyof typeof projectsData]) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold mb-6">Projet non trouvé</h1>
          <Button asChild>
            <Link to="/realisations">Retour aux réalisations</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }
  
  const project = projectsData[projectId as keyof typeof projectsData];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <Button variant="outline" asChild className="mb-8">
            <Link to="/realisations" className="flex items-center">
              <ChevronLeft className="mr-2 h-4 w-4" /> Retour aux réalisations
            </Link>
          </Button>
          
          <div className="mb-10">
            <div className="h-[40vh] w-full rounded-lg overflow-hidden mb-6">
              <img 
                src={project.coverImage} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-white bg-[#0677b0] rounded-full">
              {project.category}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-gray-700 text-lg mb-8">{project.description}</p>
          </div>
          
          <ProjectGallery images={project.images} title="Galerie du projet" />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
