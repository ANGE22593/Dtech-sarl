
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import PartnersSection from "@/components/PartnersSection";
import NewsFeed from "@/components/NewsFeed"; // Import the NewsFeed component
import { Building, Wrench, Atom, Power, Database, Server, Globe } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import TypewriterText from "@/components/TypewriterText";
import { Link } from "react-router-dom";

const Index = () => {
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsServicesVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);
  
  const services = [
    
    {
      title: "Technologie",
      description: "Solutions informatiques innovantes, développement de logiciels sur mesure, et intégration de systèmes complexes...",
      icon: Atom,
      color: "blue",
      variant: "tech" as const,
      link: "/services/tech"
    },
    {
      title: "Énergie",
      description: "Conception de systèmes énergétiques durables, audits énergétiques, et solutions d'efficacité énergétique...",
      icon: Power,
      color: "darkgreen",
      variant: "energy" as const,
      link: "/services/energy"
    },
    {
      title: "Génie Civil",
      description: "Conception et réalisation d'infrastructures, gestion de projets de construction, et expertise en structures...",
      icon: Building,
      color: "green",
      variant: "civil" as const,
      link: "/services/civil"
    },
    {
      title: "Consultation",
      description: "Expertise technique, analyses de faisabilité et audits, solutions personnalisées à vos défis.",
      icon: Wrench,
      color: "green",
      variant: "civil" as const,
      link: "/realisations"
    },
   
    {
      title: "Solutions Durables",
      description: "Développement de projets à faible impact environnemental et optimisation des ressources.",
      icon: Globe,
      color: "darkgreen", 
      variant: "energy" as const,
      link: "/faq"
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero section at the top */}
      <Hero />
      
      {/* About Section */}
      <AboutSection />
      
      {/* News Feed - added BEFORE Partners Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Actualités</h2>
            <div className="w-24 h-1 bg-[#0677b0] mx-auto mb-8"></div>
          </div>
          <NewsFeed />
        </div>
      </section>
      
      {/* Partners Section */}
      <PartnersSection />
      
      {/* Services section */}
      <section id="services" className="py-16 bg-white" ref={servicesRef}>
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              {isServicesVisible ? (
                <TypewriterText 
                  text="Nos Services" 
                  delay={50}
                  repeat={true}
                />
              ) : (
                "Nos Services"
              )}
            </h2>
            <div className="w-24 h-1 bg-[#06a73d] mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Nous proposons une gamme complète de services dans les domaines du Génie Civil, 
              de la Technologie et de l'Énergie pour répondre à tous vos besoins.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                color={service.color}
                variant={service.variant}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à Transformer Votre Projet en Réalité?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Confiez-nous vos défis et découvrez comment notre approche pluridisciplinaire 
            peut vous apporter des solutions innovantes et efficaces.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-8 py-3 bg-[#0677b0] text-white font-medium rounded-lg hover:bg-[#06a73d] transition-colors"
          >
            Contactez-nous Aujourd'hui
          </a>
        </div>
      </section>
      
      <ContactForm />
      
      <Footer />
    </div>
  );
};

export default Index;
