import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form,FormControl,FormField,FormItem,FormLabel,FormMessage,} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Building, Atom, Power } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(3, { message: "Le nom et prénom sont requis" }),
  email: z.string().email({ message: "Email invalide" }),
  address: z.string().min(5, { message: "Adresse requise" }),
  phone: z.string().min(8, { message: "Numéro de téléphone requis" }),
  service: z.enum(["genie-civil", "energie", "technologie"], {
    required_error: "Veuillez sélectionner un service",
  }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const DevisPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      address: "",
      phone: "",
      service: undefined,
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom_prenom: data.fullName,
          email: data.email,
          adresse: data.address,
          telephone: data.phone,
          service: data.service,
          description: data.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi de la demande.");
      }

      toast.success("✅ Votre demande de devis a été envoyée avec succès !");
      form.reset();
    } catch (error: any) {
      console.error(error);
      toast.error("❌ Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10 text-center">
              <h1 className="text-3xl font-bold mb-4">Obtenir un Devis</h1>
              <div className="w-24 h-1 bg-[#06a73d] mx-auto mb-6"></div>
              <p className="text-gray-600">
                Complétez le formulaire ci-dessous pour obtenir un devis
                personnalisé pour votre projet. Notre équipe vous contactera
                dans les plus brefs délais.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-8">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom et Prénom</FormLabel>
                        <FormControl>
                          <Input placeholder="Votre nom complet" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="votre-email@exemple.com"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Adresse</FormLabel>
                        <FormControl>
                          <Input placeholder="Votre adresse complète ou ville " {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Téléphone</FormLabel>
                        <FormControl>
                          <Input placeholder="+225 XX XX XX XX XX" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sélectionner un service</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionner un service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="genie-civil">
                              <div className="flex items-center">
                                <Building
                                  className="text-[#06a73d] mr-2"
                                  size={16}
                                />
                                <span>Génie Civil</span>
                              </div>
                            </SelectItem>
                            <SelectItem value="technologie">
                              <div className="flex items-center">
                                <Atom className="text-[#0677b0] mr-2" size={16} />
                                <span>Technologie</span>
                              </div>
                            </SelectItem>
                            <SelectItem value="energie">
                              <div className="flex items-center">
                                <Power
                                  className="text-emerald-600 mr-2"
                                  size={16}
                                />
                                <span>Énergie</span>
                              </div>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description du besoin (optionnel)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Décrivez brièvement votre projet ou vos besoins"
                            {...field}
                            className="h-32"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-[#06a73d] hover:bg-[#0677b0]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer la demande de devis"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DevisPage;
