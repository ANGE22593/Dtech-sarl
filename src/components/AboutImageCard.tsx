
import React, { useState, useEffect, useRef } from 'react';
import TypewriterText from './TypewriterText';
import { cn } from '@/lib/utils';

interface AboutImageCardProps {
  image: string;
  alt: string;
  title: string;
  quote: string;
  className?: string;
  delay?: number;
}

const AboutImageCard = ({ image, alt, title, quote, className, delay = 0 }: AboutImageCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Start animation after delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    // Set up intersection observer to trigger animation when in view
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isVisible) {
        setIsVisible(true);
      }
    }, { threshold: 0.3 });
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      clearTimeout(timer);
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay, isVisible]);
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "relative rounded-lg overflow-hidden shadow-xl group transition-all duration-300 h-56 mx-auto max-w-sm hover:scale-105",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={image} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80">
        <div className="absolute bottom-0 left-0 w-full p-4 text-white">
          <h4 className="text-lg font-bold mb-1 text-center">{title}</h4>
          
          <div className="h-16 flex justify-center items-center">
            {isHovered ? (
              <TypewriterText 
                text={quote} 
                delay={30} 
                className="text-sm italic text-center w-full" 
                repeat={true}
                permanentDisplay={false}
              />
            ) : (
              <span className="text-sm italic text-center w-full">{quote}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutImageCard;
