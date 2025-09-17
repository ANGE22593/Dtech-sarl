
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsFeed from "@/components/NewsFeed";

const NewsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Actualités</h1>
            <div className="w-24 h-1 bg-[#06a73d] mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Suivez les dernières actualités et les projets en cours de DTECH SARL.
              Découvrez nos activités récentes et nos réalisations.
            </p>
          </div>
          
          <div className="mb-12">
            <NewsFeed />
          </div>
          
          {/* Section pour afficher plus d'actualités */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-4">Archives des actualités</h2>
            <div className="w-16 h-1 bg-[#0677b0] mb-8"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Ajouter ici des cartes d'actualités archivées si nécessaire */}
              <div className="p-6 bg-gray-100 rounded-lg text-center">
                <p className="text-gray-500">Plus d'actualités seront bientôt disponibles.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NewsPage;
