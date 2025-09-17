import { useEffect, useState } from "react";

const images = [
  "/lovable-uploads/fae558d5-bea7-47f1-83ec-4d1775549515.png",
  "/lovable-uploads/fae558d5-bea7-47f1-83ec-4d1775549515.png",
  "/lovable-uploads/fae558d5-bea7-47f1-83ec-4d1775549515.png",
];

const BackgroundSlideshow = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Changement toutes les 5 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 z-0"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        filter: "brightness(0.4)", // effet sombre
      }}
    ></div>
  );
};

export default BackgroundSlideshow;
