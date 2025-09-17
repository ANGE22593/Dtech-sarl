
import React, { useState, useEffect, useRef } from 'react';
import PartnersCarousel from './PartnersCarousel';
import TypewriterText from './TypewriterText';

const PartnersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          
          setIsVisible(false);
          setHasAnimated(false);
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
  }, []);

  const partners = [
    {
      image: "/lovable-uploads/2ac4e64b-d762-45c9-8af1-e3242187a22d.png",
      name: "arise-ivoire-logo-230"
    },
    {
      image: "/lovable-uploads/23124938-9fef-4781-808a-5068b923ff28.png",
      name: "BSIC"
    },
    {
      image: "/lovable-uploads/1ec336f0-1b93-44a7-900a-b39d9d621be6.png",
      name: "Canal+ Universal"
    },
    {
      image: "/lovable-uploads/8628a91c-4e34-45ef-b992-361539d9e92d.png",
      name: "Carrefour"
    },
    {
      image: "/lovable-uploads/0f0f6bc4-6122-4ca4-b5f5-eac85a5bb630.png",
      name: "Colas"
    },
    {
      image: "/lovable-uploads/c17274ea-f41b-4bc1-adf6-f7f8c7ae0e35.png",
      name: "Cosmos Yopougon"
    },
    {
      image: "/lovable-uploads/cff90ffc-31e6-4d2f-adc8-140082feb75f.png",
      name: "KFC"
    },
    {
      image: "/lovable-uploads/6e25f661-141a-4e91-8e18-79cf4bbafbe2.png",
      name: "CFAO Mobility"
    },
    {
      image: "/lovable-uploads/523d499e-0dca-4d34-98c2-efc41a145772.png",
      name: "PONT HKB"
    },
    {
      image: "/lovable-uploads/499a125d-796d-440b-aac3-8ba8ca9fec7b.png",
      name: "PROSUMA"
    },
    {
      image: "/lovable-uploads/473d00a9-2fda-46de-b4d1-41b659b4a404.png",
      name: "TIPSP"
    },
    {
      image: "/lovable-uploads/86a07ba2-fd5e-44ea-b08b-1c7527e7a980.png",
      name: "aplus"
    }
  ];

  return (
    <section className="py-16 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {isVisible ? (
              <TypewriterText 
                text="Nos partenaires" 
                delay={50}
                repeat={true}
                onComplete={() => setHasAnimated(true)}
              />
            ) : (
              "Nos partenaires"
            )}
          </h2>
          <div className="w-24 h-1 bg-[#06a73d] mx-auto mb-8"></div>
        </div>

        <PartnersCarousel partners={partners} />
      </div>
    </section>
  );
};

export default PartnersSection;
