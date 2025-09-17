
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

const ProjectGallery = ({ images, title }: ProjectGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (image: string) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <Card 
            key={index} 
            className="overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => openLightbox(image)}
          >
            <div className="relative aspect-video">
              <img 
                src={image} 
                alt={`${title} - Image ${index + 1}`} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </Card>
        ))}
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-4xl w-[90vw] h-auto p-0 bg-transparent border-none">
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Vue agrandie" 
              className="w-full h-auto object-contain max-h-[80vh]"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectGallery;
