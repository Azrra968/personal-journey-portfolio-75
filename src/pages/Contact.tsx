import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Navigation from "@/components/Navigation";
import { useParams } from "react-router-dom";
import { translations } from "../utils/translations";

const Contact = () => {
  const { toast } = useToast();
  // Extract lang from URL params and provide default
  const { lang = "en" } = useParams<{ lang: string }>();
  // Ensure we use a valid language or fallback to English
  const currentLang = (lang === "es" ? "es" : "en") as "en" | "es";
  const t = translations[currentLang].contact;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: t.success,
      description: t.description,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            {t.title}
          </span>
          <h1 className="heading-xl mb-6">{t.subtitle}</h1>
          <p className="text-lg text-muted-foreground mb-12">
            {t.description}
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-muted-foreground">contact@example.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h3 className="font-bold mb-1">{t.form.name}</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Location</h3>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded-md border bg-background"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded-md border bg-background"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t.form.message}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-3 rounded-md border bg-background"
                  required
                ></textarea>
              </div>
              <Button type="submit" className="w-full">
                {t.form.submit}
              </Button>
            </form>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;