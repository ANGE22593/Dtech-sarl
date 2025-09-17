import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building, Wrench, Atom, Power, Globe } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ServicesPage = () => {
  const services = [
    {
      title: "Technologie",
      description:
        "Solutions informatiques innovantes, développement de logiciels sur mesure, et intégration de systèmes complexes, Installation et maintenance de matériel informatique, solutions réseau avancées, Sécurité électronique, Fibre optique, Cablage réseau...",
      icon: Atom,
      color: "blue",
      variant: "tech" as const,
      link: "/services/tech",
    },
    {
      title: "Énergie",
      description:
        "Conception de systèmes énergétiques durables, audits énergétiques, et solutions d'efficacité énergétique...",
      icon: Power,
      color: "darkgreen",
      variant: "energy" as const,
      link: "/services/energy",
    },
    {
      title: "Génie Civil",
      description:
        "Conception et réalisation d'infrastructures, gestion de projets de construction, et expertise en structures...",
      icon: Building,
      color: "green",
      variant: "civil" as const,
      link: "/services/civil",
    },
    {
      title: "Consultation",
      description:
        "Expertise technique, analyses de faisabilité et audits, solutions personnalisées à vos défis.",
      icon: Wrench,
      color: "green",
      variant: "civil" as const,
      link: "/realisations",
    },
    {
      title: "Solutions Durables",
      description:
        "Développement de projets à faible impact environnemental et optimisation des ressources.",
      icon: Globe,
      color: "darkgreen",
      variant: "energy" as const,
      link: "/faq",
    },
  ];

  // Variants pour fade-in + translation verticale
  const fadeUp = {
    hidden: { opacity: 0, y: 1 },
    visible: { opacity: 1, y: 0 },
  };

  // Container avec stagger pour enfants
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.5 } },
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />

      {/* HERO SECTION */}
      <div
        className="w-full h-[40vh] bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url('/lovable-uploads/depositphotos_403835358-stock-photo-a-night-miniature-highway-at.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <motion.div
          className="container mx-auto px-4 h-full flex flex-col items-center justify-center relative z-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Nos Services
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-white/90 max-w-2xl"
          >
            Des solutions professionnelles adaptées à vos besoins
          </motion.p>
        </motion.div>
      </div>

      {/* MAIN SECTION */}
      <main className="flex-grow py-16 relative">
        <div
          className="absolute inset-0 -z-10 opacity-20 bg-cover bg-center blur-md"
          style={{
            backgroundImage: `url('/lovable-uploads/depositphotos_403835358-stock-photo-a-night-miniature-highway-at.jpg')`,
          }}
        ></div>

        <div className="container mx-auto px-4">
          {/* Intro Texte */}
          <motion.div
            className="mb-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold mb-4"
            >
              Nos Domaines d'Expertise
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="w-24 h-1 bg-[#06a73d] mx-auto mb-8"
            ></motion.div>
            <motion.p
              variants={fadeUp}
              className="max-w-3xl mx-auto text-gray-700 mb-8"
            >
              Nous proposons une gamme complète de services dans les domaines du
              Génie Civil, de la Technologie et de l'Énergie pour répondre à
              tous vos besoins professionnels. Découvrez nos solutions
              personnalisées et notre expertise pluridisciplinaire.
            </motion.p>
          </motion.div>

          {/* Cartes Services */}
          <motion.div
            className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.9 }}
            variants={container}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeUp}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  color={service.color}
                  variant={service.variant}
                  link={service.link}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
          >
            <motion.h2
              variants={fadeUp}
              className="text-2xl font-semibold mb-4"
            >
              Besoin d'un Service Sur Mesure?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-gray-700 max-w-2xl mx-auto mb-8"
            >
              Nous comprenons que chaque projet est unique. Contactez-nous pour
              discuter de vos besoins spécifiques ou pour obtenir un devis
              personnalisé.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button asChild className="bg-[#06a73d] hover:bg-[#0677b0]">
                <Link to="/#contact">Nous Contacter</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-[#0677b0] text-[#0677b0] hover:bg-[#0677b0] hover:text-white"
              >
                <Link to="/devis">Obtenir un Devis</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
