import React, { useEffect, useRef, useState } from 'react';
import { CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface NewsItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  youtube?: string;
  date: string;
  type: 'image' | 'video';
}

const NewsFeed: React.FC = () => {
  const youtubeVideos: string[] = [
    "https://www.youtube.com/embed/K_LyuryRZ7o",
    "https://www.youtube.com/embed/xu6s0s-Udv0",
    "https://www.youtube.com/embed/_1T27jHaqkU", 
    "https://www.youtube.com/embed/U8NKY6aJqnE"
  ];

  const newsItems: NewsItem[] = [
    { 
      id: '1', 
      title: "INFO INVESTISSEMENT",
      description: 'Microsoft investir 296 millions de dollards supplémentaire en Afrique du sud.', 
      image: '/lovable-uploads/videos/AQM9ucCKupFdTuVc2KZRrcg1GY4tiR40gerwGeSvuw-Ox01PSNHd44-K_4P8sf_5uyApa_Wl89zwqbhue63IN86t.mp4', 
      date: '2024-05-02', 
      type: 'video'
    },
    { 
      id: '2', 
      title: "INFO INVESTISSEMENT",
      description: "Orange Afrique et Moyen-Orient s'assodie à Eutelsat pour booster l'internet par satellite.", 
      image: '/lovable-uploads/videos/AQNxyT9LHdnuqoyJdTkRIqSu1sCXZS6PHJrbz58eYutqh3fYU1PiQfMD_w2CW3nu3YZoH66vNGRhAF5gLRjV-Fhg.mp4', 
      date: '2024-05-02', 
      type: 'video'
    },
    { 
      id: '3', 
      title: "INFO INVESTISSEMENT",
      description: 'WhatsApp a frenchit le cap des 3 milliards d"utolisateurs quel impact en côte d"ivoire.', 
      image: '/lovable-uploads/videos/AQOFspLd2XGxL0kMcsEOw2VBbuUCMytFdD2BN0b7dKaZ_cx0ojR3kX86k2njJSCDvhwUqk37xnQMuzK6zOSnsuiA.mp4', 
      date: '2024-05-02', 
      type: 'video'
    },
    { 
      id: '4', 
      title: "INFO INVESTISSEMENT",
      description: "Orange Afrique et Moyen-Orient s'assodie à Eutelsat pour booster l'internet par satellite.", 
      image: '/lovable-uploads/videos/AQNxyT9LHdnuqoyJdTkRIqSu1sCXZS6PHJrbz58eYutqh3fYU1PiQfMD_w2CW3nu3YZoH66vNGRhAF5gLRjV-Fhg.mp4', 
      date: '2024-05-02', 
      type: 'video'
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const currentItem = newsItems[activeIndex];

  useEffect(() => {
    if (currentItem.type === 'image') {
      const timer = setTimeout(goToNext, 5000);
      return () => clearTimeout(timer);
    }
  }, [activeIndex, currentItem.type]);

  useEffect(() => {
    if (currentItem.type === 'video' && currentItem.image && videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay bloqué, tentative manuelle", error);
        });
      }
    }
  }, [activeIndex, currentItem]);

  function goToNext() {
    setPrevIndex(activeIndex);
    setActiveIndex((prev) => (prev + 1) % newsItems.length);
  }

  // Variants pour fade + translation
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 10 }
  };

  // Container pour appliquer stagger sur enfants
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="relative w-full">
      <motion.div
        className="flex flex-col lg:flex-row w-full gap-6 p-4 relative z-10"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Colonne gauche : texte et YouTube */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col gap-4"
          variants={fadeUp}
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Nos Réalisations Récentes</h2>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Découvrez en images et vidéos quelques-unes de nos dernières réalisations : travaux de construction, rénovations, aménagements d'espaces professionnels ou résidentiels et divers. Nos projets illustrent l'engagement de DTECH SARL envers la qualité, la rigueur et l'innovation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {youtubeVideos.map((src, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="w-full aspect-w-16 aspect-h-9"
              >
                <iframe
                  src={src}
                  title={`YouTube vidéo ${i + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg shadow-md"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Colonne droite : carousel */}
        <div className="relative w-full lg:w-1/2 h-[500px] overflow-hidden">
          {newsItems.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={item.id}
                variants={fadeUp}
                className={`absolute top-0 left-0 w-full h-full transform ${isActive ? 'z-20' : 'hidden'}`}
              >
                <motion.div
                  className="relative flex flex-col items-center justify-center w-full h-full bg-white shadow-xl rounded-2xl overflow-visible"
                  variants={container}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {/* Image ou vidéo */}
                  {item.type === 'image' && item.image && (
                    <>
                      <motion.div className="flex items-center justify-center z-10 max-h-[80%] w-full" variants={fadeUp}>
                        <img src={item.image} alt={item.title} className="max-h-full w-auto object-contain shadow-xl" />
                      </motion.div>
                      <motion.div className="relative w-full h-[50px] -mt-2 overflow-hidden z-0" variants={fadeUp}>
                        <img
                          src={item.image}
                          alt="reflet"
                          className="mx-auto w-auto max-h-full object-contain opacity-30 blur-sm rotate-x-180"
                          style={{ maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)' }}
                        />
                      </motion.div>
                    </>
                  )}

                  {item.type === 'video' && (
                    item.youtube ? (
                      <motion.iframe
                        src={item.youtube}
                        title={item.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full rounded-2xl shadow-lg"
                        variants={fadeUp}
                      />
                    ) : item.image && (
                      <motion.video
                        key={item.id}
                        ref={videoRef}
                        src={item.image}
                        className="w-full h-full object-contain shadow-lg"
                        autoPlay
                        muted
                        playsInline
                        onEnded={goToNext}
                        onError={() => { console.log("Erreur lecture vidéo"); goToNext(); }}
                        variants={fadeUp}
                      />
                    )
                  )}

                  {/* Texte descriptif */}
                  <motion.div variants={fadeUp}>
                    <CardContent className="w-full p-4 bg-white">
                      <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-700">{item.description}</p>
                      <div className="flex justify-between mt-2 text-xs text-gray-600">
                        <span>{new Date(item.date).toLocaleDateString('fr-FR')}</span>
                        <span className="font-semibold text-[#06a73d]">La Confiance, c'est DTECH SARL 👌</span>
                      </div>
                    </CardContent>
                  </motion.div>

                  {/* Bouton suivant */}
                  <motion.button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-30 hover:bg-black/70"
                    variants={fadeUp}
                  >
                    <ChevronRight size={24} />
                  </motion.button>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default NewsFeed;
