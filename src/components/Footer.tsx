
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-[#f6f2f2] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/2ce4221c-d206-4322-8bae-aaae67d6eda0.png" 
                alt="DTECH SARL Logo" 
                className="h-10 transition-all duration-500 hover:animate-pulse hover:scale-110" 
              />
            </div>
            <p className="text-gray-400 mb-6">
              Solutions d'ingénierie intégrées en Génie Civil, Technologie et Énergie pour 
              répondre à vos défis les plus complexes.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61558566999314&locale=fr_FR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#3366a8] flex items-center justify-center hover:bg-[#06a73d] transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/detch-sarl/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BfS3KHeG0QdeQFaaxQpjrtA%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1151a5] flex items-center justify-center hover:bg-[#06a73d] transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services/civil" className="hover:text-[#06a73d] transition-colors">Génie Civil</Link></li>
              <li><Link to="/services/tech" className="hover:text-[#06a73d] transition-colors">Technologie</Link></li>
              <li><Link to="/services/energy" className="hover:text-[#06a73d] transition-colors">Énergie</Link></li>
              <li><Link to="/realisations" className="hover:text-[#06a73d] transition-colors">Consultation</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-[#06a73d] transition-colors">Accueil</Link></li>
              <li><Link to="/services" className="hover:text-[#06a73d] transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-[#06a73d] transition-colors">À Propos</Link></li>
              <li><Link to="/devis" className="hover:text-[#06a73d] transition-colors">Obtenir un Devis</Link></li>
              <li><Link to="/realisations" className="hover:text-[#06a73d] transition-colors">Réalisations</Link></li>
              <li><Link to="/faq" className="hover:text-[#06a73d] transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex group">
                <MapPin className="text-[#06a73d] mr-3 flex-shrink-0 group-hover:animate-bounce" size={20} />
                <div>
                  <p>DTECH SARL Abidjan</p>
                  <p className="text-sm">Boite postale: 11BP 1806 ABIDJAN 11 ABIDJAN</p>
                  <a 
                    href="https://maps.google.com/?q=DTECH+SARL+2,+72X9+HPR,+Abidjan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#06a73d] text-sm hover:underline"
                  >
                    Voir sur la carte
                  </a>
                </div>
              </li>
              <li className="flex group cursor-pointer" onClick={() => window.location.href = 'tel:+2252721360070'}>
                <Phone className="text-[#06a73d] mr-3 flex-shrink-0 group-hover:animate-bounce" size={20} />
                <div>
                  <a href="tel:+2252721360070" className="hover:text-[#06a73d]">+225 27 21 36 00 70</a><br />
                  <a href="tel:+22501033279" className="hover:text-[#06a73d]">+225 01 03 32 79 99</a>
                </div>
              </li>
              <li className="flex group cursor-pointer" onClick={() => window.location.href = 'mailto:info@dtechci.com'}>
                <Mail className="text-[#06a73d] mr-3 flex-shrink-0 group-hover:animate-bounce" size={20} />
                <a href="mailto:info@dtechci.com" className="hover:text-[#06a73d]">info@dtechci.com</a>
              </li>
              <li className="flex group">
                <Clock className="text-[#06a73d] mr-3 flex-shrink-0 group-hover:animate-bounce" size={20} />
                <span>Lun – Sam de 08H00 à 18H00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t bg-[#237241] pt-8">
          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-[#eff1f0] text-sm mb-4 md:mb-0">
              &copy; {currentYear} DTECH SARL. Tous droits réservés.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <a href="#" className="text-[#eff1f0] transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-[#eff1f0] transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-[#eff1f0] transition-colors">
                Plan du site
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
