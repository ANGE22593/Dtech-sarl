
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building, Atom, Power, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceProjectCard from "@/components/ServiceProjectCard";

interface ServiceDetail {
  title: string;
  description: string;
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
  features: string[];
  benefits: { title: string; description: string }[];
  image: string;
  projects: {
    title: string;
    description: string;
    image: string;
    category: string;
  }[];
  serviceSection?: {
    title: string;
    image: string;
    description: string;
  }[];
}

const ServiceDetailPage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  const services: Record<string, ServiceDetail> = {
    "civil": {
      title: "Génie Civil",
      description: "Solutions complètes en génie civil, de la conception à la réalisation de vos projets d'infrastructure.",
      icon: Building,
      iconColor: "text-[#06a73d]",
      iconBg: "bg-green-100",
      features: [
        "Ingénierie : Conception et études",
        "Réalisation de projet neuf et rénovation",
        "Aménagement de bureaux, d'agence bancaire et espace commercial",
        "Construction métallique",
        "BTP",
        "Aménagement d'espace divers : Terrassement – Remblais – Espace vert - Parking"
      ],
      benefits: [
        {
          title: "Expertise Technique",
          description: "Notre équipe d'ingénieurs qualifiés garantit une exécution parfaite de votre projet."
        },
        {
          title: "Respect des Délais",
          description: "Nos méthodes de gestion de projet assurent une livraison dans les délais convenus."
        },
        {
          title: "Qualité Supérieure",
          description: "Nous utilisons les meilleurs matériaux et techniques pour des résultats durables."
        }
      ],
      image: "/lovable-uploads/527ba408-31db-443a-9731-6d36354f9d69.png",
      projects: [
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
      ],
      serviceSection: [
        {
          title: "Ingénierie : Conception et études Réalisation de projet neuf et rénovation",
          image: "/lovable-uploads/53892c71-e535-4975-bda4-2fc45d17383d.png",
          description: "Découvrez notre expertise en ingénierie, offrant des services de conception, d'études et de réalisation pour vos projets de construction neufs ou de rénovation. Notre équipe d'ingénieurs qualifiés vous accompagne de la planification à la réalisation finale. Que ce soit pour un nouveau bâtiment ou la rénovation d'une structure existante, nous mettons notre savoir-faire et notre expérience à votre service pour garantir des résultats exceptionnels. Grâce à une collaboration étroite et une attention particulière à vos besoins, nous créons des solutions sur mesure, adaptées à vos attentes, et assurons le succès de votre projet, quelle que soit sa complexité."
        },
        {
          title: "Aménagement de bureaux, d'agence bancaire et espace commercial",
          image: "/lovable-uploads/65717c40-17dd-4cb4-9b48-03cbcfe23d84.png",
          description: "Que vous souhaitiez entreprendre une rénovation complète ou concevoir un nouvel espace, notre équipe est là pour transformer votre vision en réalité.Nous savons qu'il est crucial de créer des environnements à la fois fonctionnels, esthétiques et ergonomiques, qui reflètent l'identité de votre entreprise tout en répondant aux besoins spécifiques de vos employés et clients. Grâce à une approche sur mesure, nous travaillons en étroite collaboration avec vous à chaque étape du projet, de la conception à la mise en œuvre.Engagés à offrir des prestations de haute qualité, nous veillons à chaque détail pour créer des espaces inspirants qui favorisent la productivité, le bien-être et renforcent l'image de votre marque."
        },
        {
          title: "Construction métallique BTP",
          image: "/lovable-uploads/f15269c6-909e-476c-87ea-2f625fa2dcf1.png",
          description: "Nous allions notre expertise en ingénierie aux dernières technologies de construction pour garantir des résultats de haute qualité, tout en respectant les normes de sécurité les plus rigoureuses. De la conception à la réalisation, nous nous engageons à fournir des solutions sur mesure qui répondent à vos exigences spécifiques en matière de conception, de budget et de délais. Fort de notre expérience reconnue dans la construction métallique, nous assurons la livraison de projets exceptionnels, quelle que soit leur envergure ou leur complexité."
        }
      ]
    },
    "tech": {
      title: "Technologie",
      description: "Solutions technologiques innovantes pour optimiser vos opérations et stimuler votre croissance.",
      icon: Atom,
      iconColor: "text-[#0677b0]",
      iconBg: "bg-blue-100",
      features: [
        "Réalisation et Mise aux normes de Datacenter",
        "Installation de réseaux Télécom et Informatique",
        "Génie civil télécom et Fibre Optique (LS, FTTH, BACKBONE, Déplacement de réseau)",
        "La Sécurité Électronique (Vidéosurveillance, Contrôle des accès, système d'alarme, système de détection incendie…)",
        "Fourniture de matériel et consommables"
      ],
      benefits: [
        {
          title: "Innovation Constante",
          description: "Nous restons à la pointe des dernières avancées technologiques."
        },
        {
          title: "Solutions Personnalisées",
          description: "Chaque solution est adaptée aux besoins spécifiques de votre entreprise."
        },
        {
          title: "Support Technique",
          description: "Notre équipe est disponible pour vous assister à chaque étape."
        }
      ],
      image: "https://images.unsplash.com/photo-1581092921461-39b788891011?auto=format&fit=crop&q=80&w=800",
      projects: [
        {
          title: "Installation de réseau informatique",
          description: "Déploiement d'un réseau informatique complet pour une entreprise en expansion.",
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000",
          category: "Réseau"
        },
        {
          title: "Système de sécurité électronique",
          description: "Installation d'un système de vidéosurveillance et contrôle d'accès pour un complexe commercial.",
          image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2000",
          category: "Sécurité"
        },
        {
          title: "Déploiement de fibre optique",
          description: "Projet d'installation de fibre optique pour connecter plusieurs sites d'une institution.",
          image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=2000",
          category: "Télécom"
        }
      ]
    },
    "energy": {
      title: "Énergie",
      description: "Solutions énergétiques durables pour réduire votre empreinte écologique et optimiser votre consommation.",
      icon: Power,
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-100",
      features: [
        "Audite énergétique",
        "Construction de Poste et ligne MT",
        "Installation Industrielle et domestique",
        "Système de régulation et de secours : Groupe électrogène- Onduleur- Régulateur",
        "Energie renouvelable : Installation solaire et d'inertie",
        "Froid : Climatisation individuel et centralisée"
      ],
      benefits: [
        {
          title: "Économies Substantielles",
          description: "Réduisez vos coûts énergétiques grâce à nos solutions optimisées."
        },
        {
          title: "Impact Environnemental Réduit",
          description: "Contribuez à la protection de l'environnement avec des solutions éco-responsables."
        },
        {
          title: "Performance Durable",
          description: "Nos systèmes sont conçus pour offrir des performances optimales sur le long terme."
        }
      ],
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
      projects: [
        {
          title: "Installation électrique industrielle",
          description: "Mise en place d'un système électrique complet pour une unité de production.",
          image: "/lovable-uploads/5ea90ddc-5b35-455f-9d05-9c4d1352168e.png",
          category: "Énergie"
        },
        {
          title: "Installation solaire",
          description: "Déploiement de panneaux solaires pour une entreprise visant l'autonomie énergétique.",
          image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=2000",
          category: "Renouvelable"
        },
        {
          title: "Système de secours énergétique",
          description: "Installation d'un système complet de groupe électrogène et d'onduleurs pour un centre de données.",
          image: "https://images.unsplash.com/photo-1626387600947-0d6310d21773?auto=format&fit=crop&q=80&w=2000",
          category: "Backup"
        }
      ]
    }
  };
  
  const serviceData = serviceId ? services[serviceId] : null;
  
  if (!serviceData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Service non trouvé</h1>
            <p className="mb-6">Le service que vous recherchez n'est pas disponible.</p>
            <Button asChild>
              <Link to="/services">Retour aux services</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className={`w-20 h-20 rounded-full ${serviceData.iconBg} flex items-center justify-center mb-4`}>
                <serviceData.icon className={`${serviceData.iconColor}`} size={40} />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-4 text-center">{serviceData.title}</h1>
            <div className="w-24 h-1 bg-[#06a73d] mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-gray-600 text-center mb-12">
              {serviceData.description}
            </p>
          </div>
          
          {serviceData.serviceSection ? (
            <div className="space-y-16 mb-16">
              {serviceData.serviceSection.map((section, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
                  <div className="md:w-1/2">
                    <img 
                      src={section.image} 
                      alt={section.title} 
                      className="rounded-lg shadow-lg w-full h-auto object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold mb-4 text-blue-900">{section.title}</h2>
                    <p className="text-gray-700 mb-6">{section.description}</p>
                    <Button asChild>
                      <Link to="/devis">Obtenir un devis</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Ce que nous offrons</h2>
                <div className="space-y-3">
                  {serviceData.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3" size={20} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button asChild className="bg-[#06a73d] hover:bg-[#0677b0]">
                    <Link to="/devis">Obtenir un Devis</Link>
                  </Button>
                </div>
              </div>
              <div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={serviceData.image}
                    alt={serviceData.title} 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          )}
          
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Pourquoi choisir nos services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceData.benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects section */}
          <div className="mt-20 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nos Réalisations</h2>
              <div className="w-24 h-1 bg-[#06a73d] mx-auto mb-8"></div>
              <p className="max-w-3xl mx-auto text-gray-600">
                Découvrez quelques-uns des projets que nous avons réalisés pour nos clients. 
                Notre expertise s'étend à travers différents domaines du génie civil, de l'énergie et de la technologie.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceData.projects.map((project, index) => (
                <ServiceProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  category={project.category}
                />
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Prêt à commencer votre projet?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir 
              comment nos services de {serviceData.title} peuvent vous aider.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-[#06a73d] hover:bg-[#0677b0]">
                <Link to="/#ContactInfo"></Link>
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

export default ServiceDetailPage;
