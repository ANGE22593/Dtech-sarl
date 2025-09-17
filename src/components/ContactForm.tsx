import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    type: "demande", // 👈 pour distinguer "contacts" ou "demandes"
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // 🔹 On choisit l'URL en fonction du type choisi
      const url =
        formData.type === "contact"
          ? "http://localhost:3000/api/contacts"
          : "http://localhost:3000/api/demandes";

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: formData.name,
          email: formData.email,
          telephone: formData.phone,
          sujet: formData.subject,
          description: formData.message,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast({
          title: "✅ Succès",
          description: data.message || "Données enregistrées avec succès.",
        });

        // reset du form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          type: "demande",
        });
      } else {
        toast({
          title: "❌ Erreur",
          description: data.error || "Impossible d’enregistrer les données.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Erreur frontend:", error);
      toast({
        title: "Erreur serveur",
        description: "Veuillez réessayer plus tard.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Contactez-Nous</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Vous avez un projet ou une question ? Sélectionnez le type de formulaire et envoyez-nous vos informations.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Bloc infos */}
          <div className="lg:w-1/3 order-2 lg:order-1">
            <div className="bg-white p-6 rounded-xl shadow-lg h-full">
              <h3 className="text-xl font-bold mb-6">Informations de Contact</h3>
              <div className="space-y-6">
                <a href="tel:+2252721360070" className="flex items-start group hover:bg-gray-50 p-2 rounded-lg transition-colors">
                  <div className="w-12 h-12 rounded-full bg-blue-100 group-hover:bg-blue-200 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="text-blue-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Téléphone</h4>
                    <p className="text-gray-600">+225 27 21 36 00 70</p>
                    <p className="text-gray-600">+225 07 08 58 18 91</p>
                  </div>
                </a>

                <a href="mailto:infos@dtechci.com" className="flex items-start group hover:bg-gray-50 p-2 rounded-lg transition-colors">
                  <div className="w-12 h-12 rounded-full bg-blue-100 group-hover:bg-blue-200 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="text-blue-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600">infos@dtechci.com</p>
                  </div>
                </a>

                <a
                  href="https://maps.google.com/?q=Marcory+Cité+HIBISCUS+Abidjan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start group hover:bg-gray-50 p-2 rounded-lg transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 group-hover:bg-blue-200 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="text-blue-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Adresse</h4>
                    <p className="text-gray-600">Marcory Cité HIBISCUS<br />(Rue Gaoussou Kone), Abidjan</p>
                  </div>
                </a>
              </div>

              <div className="mt-8 pt-6 border-t">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="text-blue-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Horaires d'ouverture</h4>
                    <p className="text-gray-600">Lun – Sam: 08:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="lg:w-2/3 order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg">
              {/* Sélecteur pour choisir le type */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Type de formulaire
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2"
                >
                  <option value="demande">Demande</option>
                  <option value="contact">Contact</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Votre numéro de téléphone"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Sujet
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Sujet de votre message"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message / Description
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Décrivez votre besoin en détail"
                  required
                />
              </div>

              <Button type="submit" className="w-full md:w-auto">
                Envoyer
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
