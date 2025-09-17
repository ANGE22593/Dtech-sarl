
import React, { useEffect, useState } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  autoplayInterval?: number;
  className?: string;
}

const ImageCarousel = ({ 
  images, 
  autoplayInterval = 5000, 
  className = ""
}: ImageCarouselProps) => {
  // Setup autoplay functionality
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api || !autoplayInterval) return;
    
    // Start autoplay
    const autoplayTimer = setInterval(() => {
      api?.scrollNext();
    }, autoplayInterval);
    
    // Clear interval on component unmount
    return () => {
      clearInterval(autoplayTimer);
    };
  }, [api, autoplayInterval]);

  if (!images || images.length === 0) return null;

  return (
    <Carousel 
      setApi={setApi} 
      className={`w-full ${className}`}
      opts={{
        loop: true,
        align: "center",
      }}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="md:basis-full lg:basis-full">
            <div className="relative h-64 md:h-80 lg:h-96 w-full overflow-hidden rounded-xl">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
              />
                  
              <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent"></div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 bg-white/80 hover:bg-white" />
      <CarouselNext className="right-2 bg-white/80 hover:bg-white" />
    </Carousel>
  );
};

export default ImageCarousel;
