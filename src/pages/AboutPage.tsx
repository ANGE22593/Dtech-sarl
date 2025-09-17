import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import BlurImage from "@/components/BlurImage";
import { motion } from 'framer-motion';
import { AnimatedButton } from '@/components/ui/animated-button';


const AboutPage = () => {
return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#020529] py-16 text-white pt-16 pb-10 pl-10 pr-10">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Notre Histoire */}
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
                  Notre Histoire
                </h1>
                <p className="text-lg text-muted-foreground text-[#a5a7a7]">
                  La société a été fondée en Février 2019. Elle a commencé ses activités
                  avec des prestations principalement dans le domaine des télécoms.
                  Ensuite l'énergie et le Génie Civil.
                </p>
                <p className="text-muted-foreground text-[#a5a7a7]">
                  La société a été fondée en Février 2019. 
                  Elle a commencé ses activités avec des prestations principalement dans le domaine des télécoms.
                  Ensuite l’énergie et le Génie Civil. En moins de cinq ans, DTECH SARL a réalisé une croissance exceptionnelle. 
                   Cette expansion rapide est le fruit de plusieurs facteurs clés de succès, notamment :
                  <ul>
                    <li>L'innovation, en intégrant constamment des technologies de pointe dans ses services,</li>
                    <li>La satisfaction client, grâce à une écoute attentive des besoins et des attentes de ses partenaires,</li>
                    <li>La qualité des services, un engagement permanent à offrir des solutions adaptées et durables.</li>
                    <li>Aujourd'hui, DTECH SARL se positionne comme un acteur majeur dans ses domaines, collaborant avec des entreprises de renom à travers le pays.</li>
                  </ul>
                  Notre engagement envers l'excellence nous a permis de tisser des partenariats solides et de maintenir un portefeuille de clients satisfaits et fidèles. 
                  NOTRE VISION Devenir un partenaire technique et technologique incontour.
                </p>
              </motion.div>

              {/* Image animée */}
              <motion.div
                className="relative h-[400px] lg:h-[500px]"
                animate={{
                  y: [0, 100, 0], // uniquement mouvement haut ↔ bas
                }}
                transition={{
                  duration: 30,   // durée d’un cycle complet
                  repeat: Infinity, // animation infinie
                  ease: "easeInOut", // mouvement doux
                }}
              >
                <BlurImage
                  src="/lovable-uploads/DSC02043.webp"
                  alt="Client africain satisfait"
                  className="w-full h-[200px]  lg:h-[350px] object-contain rounded-2xl shadow-lg"
                  priority={true}
                />
              </motion.div>
            </div>
          </section>

          
          {/* Values Section */}
          <section className="py-20 bg-muted/30 rounded-3xl px-6 md:px-12 mb-20">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-[#15b452]">Nos Valeurs</h2>
              <p className="text-muted-foreground">
                Nos valeurs fondamentales guident chaque aspect de notre entreprise, à la réalisation de votre projet.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: "Qualité",
                  description: "Nous sélectionnons les meilleurs matériaux et travaillons avec des artisans experts pour garantir des produits de qualité supérieure qui durent dans le temps.",
                  delay: 0.2
                },
                {
                  title: "Durabilité",
                  description: "L'environnement est au cœur de nos préoccupations. Nous utilisons des matériaux durables et des processus de fabrication responsables.",
                  delay: 0.4
                },
                {
                  title: "Innovation",
                  description: "Nous recherchons constamment de nouvelles façons d'améliorer nos produits, en intégrant les dernières technologies et tendances du design.",
                  delay: 0.6
                }
              ].map((value, index) => (
                <motion.div 
                  key={index} 
                  className="bg-background rounded-xl p-8 shadow-lg border" 
                  initial={{ opacity: 0, y: 2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: value.delay }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
          {/* Produits et Services */}
          <section className="bg-white rounded-2xl shadow-lg p-10">
            <h2 className="text-2xl font-semibold mb-6 text-green-700">Produits et Services</h2>
            <p className="text-gray-700 mb-6">
              DTECH regroupe trois départements, témoignant de son expertise dans divers domaines :
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-2 text-green-600">Génie Civil</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Conception et études</li>
                  <li>Projets neufs et rénovations</li>
                  <li>Aménagements divers</li>
                  <li>Construction métallique</li>
                  <li>BTP</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2 text-green-600">Énergie</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Audit énergétique</li>
                  <li>Installation industrielle et domestique</li>
                  <li>Systèmes de secours</li>
                  <li>Énergies renouvelables</li>
                  <li>Climatisation</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2 text-green-600">Technologie</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Datacenter</li>
                  <li>Réseaux Télécom et Informatique</li>
                  <li>Fibre optique</li>
                  <li>Sécurité électronique</li>
                  <li>Fourniture de matériel</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-[#15b452] pt-10">Notre Équipe</h2>
              <p className="text-muted-foreground">
                Une équipe passionnée et expérimentée, dédiée à offrir des solutions
                innovantes et fiables pour répondre aux besoins de nos partenaires.
              </p>
            </div>

            <div className="space-y-24">
              {[
                {
                  name: "M. KOUASSI RAYMOND",
                  role: "MANAGER GENERAL",
                  description:"Il pilote la croissance de l’entreprise avec rigueur et leadership.>> Mon ambition est de transformer chaque projet en référence de qualité et d’innovation. Je ne me contente pas de construire, je bâtis des solutions durables qui allient performance technique et valeur ajoutée pour nos clients. J’excelle dans la coordination d’équipes pluridisciplinaires, en encourageant l’autonomie, l’innovation et la responsabilisation. Je sais mobiliser les talents autour d’objectifs ambitieux tout en maintenant une culture d’entreprise saine et performante. Avec une solide maîtrise des normes internationales, des techniques modernes et des outils numériques comme le BIM, je garantis des constructions sûres, efficaces et respectueuses de l’environnement. Chaque projet est géré avec un œil sur la rentabilité, les coûts maîtrisés, le respect des délais et la satisfaction client. Mon objectif : maximiser la valeur tout en minimisant les risques.Je mets l’accent sur l’innovation, que ce soit dans les matériaux, les méthodes de construction ou la digitalisation des processus. Je veux que nos projets ne soient pas seulement construits, mais qu’ils se distinguent par leur qualité, leur durabilité et leur impact positif. Grâce à un solide réseau de partenaires et de clients, je suis capable de sécuriser de grands projets et de créer des synergies stratégiques, garantissant la croissance pérenne de l’entreprise.",
                  image: "/lovable-uploads/IMG_1274.JPG",
                },
                {
                  name: "M. Kouakou Hervé",
                  role: "Responsable Administratif et Financier",
                  description:
                    "Responsable de la coordination administrative, il veille au bon fonctionnement des opérations.  Mon objectif est d’optimiser le fonctionnement du bureau pour qu’il devienne un véritable moteur de performance et de productivité. Je m’assure que chaque processus contribue à l’efficacité globale de l’organisation.  Je coordonne les équipes avec rigueur et humanité, en valorisant les talents et en favorisant la collaboration. Je sais créer un environnement où chaque employé comprend son rôle et contribue Avec une maîtrise parfaite des outils bureautiques, des logiciels de gestion et des méthodes administratives modernes, je garantis des flux de travail efficaces, une gestion précise des documents et des processus simplifiés.  Chaque projet ou mission est géré avec un focus sur la qualité, le respect des délais et l’optimisation des ressources. Mon objectif est de maximiser l’efficacité tout en réduisant les erreurs et les pertes de temps.  J’introduis des solutions innovantes pour automatiser les tâches répétitives, améliorer la communication interne et accélérer la prise de décision. Mon but : rendre le bureau agile et réactif face aux besoins changeants. Je valorise une communication claire et transparente avec les collaborateurs, la direction et les partenaires externes. Je sais négocier, résoudre les conflits et instaurer un climat de confiance.",
                  image: "/lovable-uploads/IMG_1272.JPG",
                },
                {
                  name: "M. Ben Raoul Tiembié",
                  role: "Responsable Département Génie Civil",
                  description:
                    "Mon ambition est de faire du département Génie Civil un moteur d’excellence technique et de croissance durable pour l’entreprise. Je conçois et supervise des projets qui ne sont pas seulement solides et fiables, mais qui deviennent de véritables références en termes de qualité, d’innovation et de respect des délais.  Mon leadership et management est de coordonner et motiver des équipes pluridisciplinaires en favorisant la rigueur, la créativité et la responsabilité. Je sais transformer une équipe en une force unie, capable de relever les plus grands défis. La conception et la réalisation d’ouvrages, les études techniques, le dimensionnement et l’optimisation des structures, la gestion de chantiers complexes avec respect strict des normes de qualité et de sécurité, les innovations en construction. Chaque projet est mené avec un suivi rigoureux : maîtrise des coûts, respect des délais, sécurité des équipes et satisfaction du client. Mon objectif est que chaque chantier soit livré dans l’excellence et contribue à la réputation de l’entreprise. Je veille à intégrer des solutions modernes et respectueuses de l’environnement, en introduisant des techniques de construction durables et en tirant parti des nouvelles technologies de modélisation et de suivi de projet. Je sais assurer une communication fluide entre la direction, les clients, les partenaires et les équipes terrain. Je négocie, résous les imprévus et garantis la conformité aux normes légales et contractuelles.",
                  image: "/lovable-uploads/WhatsApp Image 2025-08-22 à 17.01.21_e7ddcd33.JPG",
                },
                {
                  name: "M. Kouassi Stéphane",
                  role: "Responsable Département Technologie",
                  description:
                    "Ma vision est de faire de l’infrastructure IT et des systèmes électroniques un véritable moteur de performance et de sécurité pour l’entreprise. Je m’assure que tous les réseaux, installations et équipements sont fiables, performants et prêts à évoluer avec les besoins de l’entreprise. Je dirige et coordonne des équipes techniques spécialisées dans l’installation, la maintenance et la supervision des infrastructures réseau, fibre optique, câblage et systèmes de sécurité électronique. Je valorise la rigueur, la réactivité et l’excellence opérationnelle. L’installation et la maintenance de réseaux câblés et fibre optique , les systèmes de vidéosurveillance, contrôle d’accès et alarme , a supervision et l’optimisation des infrastructures physiques IT et télécoms , l’intégration de solutions technologiques fiables et durables sont nos spécialités.  Chaque projet est géré avec un souci de qualité, de respect des délais et d’efficacité opérationnelle. Mon objectif : assurer un fonctionnement optimal et sécurisé des installations, tout en maîtrisant les coûts. Je veille à l’adoption de solutions modernes et adaptées, telles que les réseaux structurés, la gestion intelligente des câblages et les technologies de sécurité électronique avancées, pour anticiper les besoins futurs de l’entreprise.  Je facilite la coordination entre les équipes techniques et la direction, garantissant que les projets respectent les standards de qualité et les exigences réglementaires. Je négocie avec les fournisseurs et supervise la qualité des installations. ",
                  image: "/lovable-uploads/IMG_1269.JPG",
                },
                {
                  name: "M. Ephraïm Agnero",
                  role: "Responsable Département Énergie",
                  description:
                    "Mon objectif est d’optimiser la gestion énergétique de l’entreprise, réduire les coûts tout en garantissant la fiabilité et la continuité des installations. Je transforme l’énergie en levier de performance durable et d’innovation.  Je pilote des équipes techniques spécialisées dans la production, la distribution et la supervision énergétique. Je favorise la coordination, la montée en compétences et la responsabilité individuelle pour atteindre l’excellence opérationnelle dans le domaines tels que :la mise en place des systèmes électriques industriels et tertiaires, et les installations haute et basse tension, La gestion de production et distribution d’énergie, L’efficacité énergétique, la consommation optimisée et les solutions renouvelables , la conformité aux normes de sécurité et réglementations énergétiques. Chaque projet énergétique que je pilote vise à améliorer la performance, réduire les pertes et assurer la continuité de service. Mon objectif : une gestion intelligente, économique et fiable de l’énergie. Je mets l’accent sur l’intégration des énergies renouvelables, l’automatisation et la supervision intelligente des systèmes, afin de réduire l’empreinte carbone et de préparer l’entreprise aux défis énergétiques de demain. Je collabore étroitement avec la direction, les fournisseurs et les équipes techniques pour garantir la qualité, la sécurité et la rentabilité des installations. Je suis capable de présenter des analyses claires et des recommandations stratégiques pour la prise de décision.",
                  image: "/lovable-uploads/IMG_1266.JPG",
                },
              ].map((member, index) => {
                const isReversed = index % 2 === 1; // alterne gauche / droite
                return (
                  <motion.div
                    key={index}
                    className={`flex flex-col md:flex-row items-center md:items-stretch gap-10 ${
                      isReversed ? "md:flex-row-reverse" : ""
                    }`}
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.25 }}
                  >
                    {/* Colonne Image */}
                    <motion.div
                      className="w-full md:w-1/2"
                      initial={{ opacity: 0, y: -30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="h-[360px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg">
                        <BlurImage
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </motion.div>

                    {/* Colonne Texte */}
                    <motion.div
                      className="w-full md:w-1/2 flex flex-col justify-center"
                      initial={{ opacity: 0, y: -30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-2xl md:text-3xl font-bold">{member.name}</h3>
                      <p className="text-green-600 font-medium mt-1">{member.role}</p>
                      <p className="text-muted-foreground mt-4 leading-relaxed">
                        {member.description}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </section>


          {/* Join Us CTA */}
          <section className="mb-20">
            <div className="bg-primary text-primary-foreground rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Rejoignez Nous </h2>
              <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/80">
                Abonnez-vous à notre newsletter pour rester informé des dernières collections, 
                événements et offres exclusives.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex h-12 w-full rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-6 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/30 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                />
                <AnimatedButton 
                  className="h-12 rounded-full px-6 bg-primary-foreground text-primary shadow hover:bg-primary-foreground/90"
                  animation="scale"
                >
                  Envoyer
                </AnimatedButton>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
