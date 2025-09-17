import { useState, useEffect } from 'react';
import { Menu, X, Home, Briefcase, Info, GalleryHorizontalEnd } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 🔒 Bloque ou libère le scroll selon l'état du menu
  useEffect(() => {
    const body = document.body;
    if (isMenuOpen) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }

    // Sécurité : enlève toujours la classe à la destruction du composant
    return () => {
      body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

  //  Gère l'effet de flou et ombre au scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
     "fixed w-full z-50 transition-all duration-300",
     isMenuOpen
      ? "bg-white shadow-md py-2" // ← Forcer fond opaque quand menu ouvert
      : isScrolled
      ? "bg-white/95 backdrop-blur-sm shadow-md py-2"
      : "bg-white py-4"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src="/lovable-uploads/fae558d5-bea7-47f1-83ec-4d1775549515.png"
            alt="DTECH SARL Logo"
            className="h-12 hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          <Link to="/" className="hover:text-[#06a73d] transition-colors">Accueil</Link>
          <Link to="/services" className="hover:text-[#06a73d] transition-colors">Nos Services</Link>
          <Link to="/about" className="hover:text-[#06a73d] transition-colors">À Propos</Link>
          <Link to="/realisations" className="hover:text-[#06a73d] transition-colors">Réalisations</Link>
          <Link to="/faq" className="hover:text-[#06a73d] transition-colors">FAQ</Link>
          <Link to="/devis">
            <Button className="bg-[#0677b0] hover:bg-[#06a73d]">Obtenir un Devis</Button>
          </Link>
        </div>

        {/* Bouton menu mobile */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Overlay flou */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Drawer mobile */}
      <div className={cn(
        "fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 md:hidden",
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col px-6 py-8 space-y-6 text-gray-800 font-medium">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-2 hover:text-[#06a73d]">
            <Home size={20} /><span>Accueil</span>
          </Link>
          <Link to="/services" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-2 hover:text-[#06a73d]">
            <Briefcase size={20} /><span>Nos Services</span>
          </Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-2 hover:text-[#06a73d]">
            <Info size={20} /><span>À Propos</span>
          </Link>
          <Link to="/realisations" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-2 hover:text-[#06a73d]">
            <GalleryHorizontalEnd size={20} /><span>Réalisations</span>
          </Link>
          <Link to="/faq" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-2 hover:text-[#06a73d]">
            <GalleryHorizontalEnd size={20} /><span>FAQ</span>
          </Link>
          <Link to="/devis" onClick={() => setIsMenuOpen(false)}>
            <Button className="w-full bg-[#0677b0] hover:bg-[#06a73d]">
              Obtenir un Devis
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
