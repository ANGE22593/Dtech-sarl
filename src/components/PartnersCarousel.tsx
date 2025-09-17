
import React, { useEffect, useState } from 'react';

interface PartnerType {
  image: string;
  name: string;
}

interface PartnersCarouselProps {
  partners: PartnerType[];
  className?: string;
}

const PartnersCarousel = ({ partners, className }: PartnersCarouselProps) => {
  if (!partners || partners.length === 0) return null;

  return (
    <div className={`w-full overflow-hidden ${className || ''}`}>
      <div className="flex gap-6 animate-infinite-scroll">
        {partners.map((partner, index) => (
          <div key={index} className="flex-shrink-0">
            <div className="bg-white p-4 rounded-lg shadow-md h-24 flex items-center justify-center hover:shadow-xl transition-shadow duration-300 min-w-[150px]">
              <img 
                src={partner.image} 
                alt={partner.name}
                className="max-h-16 max-w-full object-contain transition-all duration-300 hover:scale-110"
                loading="lazy"
              />
            </div>
          </div>
        ))}
        
        {/* Duplicate the partners to create a continuous effect */}
        {partners.map((partner, index) => (
          <div key={`duplicate-${index}`} className="flex-shrink-0">
            <div className="bg-white p-4 rounded-lg shadow-md h-24 flex items-center justify-center hover:shadow-xl transition-shadow duration-300 min-w-[150px]">
              <img 
                src={partner.image} 
                alt={partner.name}
                className="max-h-16 max-w-full object-contain transition-all duration-300 hover:scale-110"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersCarousel;
