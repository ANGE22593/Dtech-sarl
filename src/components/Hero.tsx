import { Button } from "@/components/ui/button";
import { Building, Atom, Power } from "lucide-react";
import { Link } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";
import TypewriterText from "./TypewriterText";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // 🎬 Personnalisation du fond
  const backgroundType: "video" | "image" = "video"; 
  const backgroundSource =
    backgroundType === "video"
      ? "/lovable-uploads/videos/stock-footage-future-building-construction-and-inventive-engineering-project-concept-with-hud-hologram-graphic.webm"
      : "/lovable-uploads/backgrounds/Capture d’écran 2025-05-18 003448.png";

  const carouselImages = [
    { src: "/lovable-uploads/photo_2025-08-18_15-01-48.jpg", alt: "Technologies" },
    { src: "/lovable-uploads/photo_2025-08-18_15-02-17.jpg", alt: "Ingénieur en usine" },
    { src: "/lovable-uploads/photo_2025-08-18_15-02-29.jpg", alt: "Équipement électrique" },
    { src: "/lovable-uploads/photo_2025-08-18_15-02-10.jpg", alt: "Technicien" },
    { src: "/lovable-uploads/photo_2024-04-20_20-44-36.jpg", alt: "Bâtiment commercial" },
    { src: "/lovable-uploads/cc8d9245-5dc7-4c3f-bfc4-e241a400b01b.png", alt: "Ingénieur civil" },
    { src: "/lovable-uploads/photo_2025-08-19_11-40-00.jpg", alt: "Ingénieur civil" },
    { src: "/lovable-uploads/6bc76a5f-0235-4187-9879-5be1897b5473.png", alt: "Ingénieur civil" },
    { src: "/lovable-uploads/4bb12f22-d773-4f12-898b-79dd0b55ed89.png", alt: "Ingénieur civil" }

  ];

  return (

    <div className="relative pt-24 pb-32 overflow-hidden">
      <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >

        {/* 🌄 Fond dynamique */}
        {backgroundType === "video" ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm -z-10"
          >
            <source src={backgroundSource} type="video/webm" />
          </video>
        ) : (
          <img
            src={backgroundSource}
            alt="Fond d’écran"
            className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm -z-10"
          />
        )}

        <div className="container mx-auto px-4 pt-12 md:pt-20">
          {/* 👉 espace horizontal réduit entre texte et carrousel */}
          <div className="flex flex-col md:flex-row items-center md:gap-x-8">
            
            {/* Texte */}
            <div className="md:w-5/12 mb-10 md:mb-0">
              <div className="animate-fade-in">
                <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  <span className="bg-gradient-to-r from-[#0677b0] to-[#06a73d] text-transparent bg-clip-text">
                    La Technologie au service,
                    <br />
                    de votre satisfaction
                  </span>
                </h1>

                <p className="text-2xlg md:text-xl text-gray-700 mb-8 max-w-lg">
                  {isVisible && (
                    <TypewriterText
                      text="Une expertise pluridisciplinaire au service de vos projets les plus ambitieux. DTECH SARL transforme vos défis en opportunités."
                      delay={20}
                      repeat={false}
                      permanentDisplay={true}
                    />
                  )}
                </p>

                {/* Boutons */}
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button size="lg" className="font-medium bg-[#06a73d] hover:bg-[#0677b0]" asChild>
                    <Link to="/services">Découvrir nos Services</Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="font-medium border-[#0677b0] text-[#0677b0] hover:bg-[#0677b0] hover:text-white"
                    asChild
                  >
                    <Link to="/about">En savoir plus</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Carrousel  et Icones */}
            <div className="md:w-7/120 relative">
              <div className="flex justify-center">
                <div className="relative w-full max-w-3xl">
                  <ImageCarousel images={carouselImages} autoplayInterval={8000} className="card-rise" />
                  <div className="mt-6 bg-white p-6 rounded-xl shadow-3xl card-rise">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex flex-col items-center text-center p-2 animate-fade-in" style={{ animationDelay: "400ms" }}>
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2 animate-pulse">
                          <Atom className="text-[#0677b0]" />
                        </div>
                        <span className="text-sm font-medium">Technologie</span>
                      </div>
                      <div className="flex flex-col items-center text-center p-2 animate-fade-in" style={{ animationDelay: "600ms" }}>
                        <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-2 animate-pulse">
                          <Power className="text-emerald-600" />
                        </div>
                        <span className="text-sm font-medium">Énergie</span>
                      </div>
                      <div className="flex flex-col items-center text-center p-2 animate-fade-in" style={{ animationDelay: "200ms" }}>
                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2 animate-pulse">
                          <Building className="text-[#06a73d]" />
                        </div>
                        <span className="text-sm font-medium">Génie Civil</span>
                      </div>
                    </div>
                  </div>
                  {/* Décorations */}
                  <div className="absolute top-4 left-4 w-full h-full bg-blue-100 rounded-xl -z-10"></div>
                  <div className="absolute top-7 left-7 w-full h-full bg-green-100 rounded-xl -z-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Courbe décorative */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
            <path
              fill="#ffffff"
              fillOpacity="100"
              d="M0,96L80,85.3C160,75,320,53,480,58.7C640,64,800,96,960,96C1120,96,1280,64,1360,48L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
