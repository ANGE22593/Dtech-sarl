import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import AboutImageCard from "./AboutImageCard";
import { Link } from "react-router-dom";
import TypewriterText from "./TypewriterText";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  const imageCards = [

  {
    image: "/lovable-uploads/depositphotos_403835358-stock-photo-a-night-miniature-highway-at.jpg",
    alt: "Technologie",
    title: "Technologie",
    quote: "L'innovation entre vos mains aujourd'hui.",
    link: "/services/tech"
  },
  {
    image: "/lovable-uploads/cb381dca-c073-40e1-a9be-5456607a1324.png",
    alt: "Énergie",
    title: "Énergie",
    quote: "Alimentez demain avec des solutions propres et puissantes.",
    link: "/services/energy"
  },
  {
    image: "/lovable-uploads/be8fe081-55c6-47a7-a6c5-8f4db13f09fa.png",
    alt: "Génie Civil",
    title: "Génie Civil",
    quote: "Nous bâtissons l'avenir avec des solutions durables.",
    link: "/services/civil"
  }
];

  return (
    <section id="about" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            {isVisible ? (
              <TypewriterText 
                text="À Propos de Nous" 
                delay={50}
                repeat={true}
              />
            ) : (
              "À Propos de Nous"
            )}
          </h2>
          <div className="w-24 h-1 bg-[#0677b0] mx-auto mb-8 rounded-full"></div>
        </div>

        {/* Layout avec images cliquables et texte statique en dessous */}
        <div className="flex flex-wrap justify-center gap-8">
          {imageCards.map((card, index) => (
            <div
              key={index}
              className="w-full sm:w-[90%] md:w-[45%] lg:w-[30%] transform transition-transform duration-500"
            >
              {/* Image cliquable */}
              <Link to={card.link} className="block">
                <AboutImageCard
                  image={card.image}
                  alt={card.alt}
                  title={card.title}
                  quote={card.quote}
                  delay={index * 300}
                  className="rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-500"
                />
              </Link>

              {/* Texte en dessous */}
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-gray-900">{card.title}</h3>
                <p className="text-gray-600 mt-2">{card.quote}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button 
            asChild 
            className="bg-[#06a73d] hover:bg-[#0677b0] text-white px-6 py-3 rounded-lg"
          >
            <Link to="/about">Découvrir Notre Histoire</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
