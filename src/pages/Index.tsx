import { motion } from "framer-motion";
import { ChevronRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { translations } from "../utils/translations";

const Index = () => {
  const { lang } = useParams();
  const t = translations[lang as "en" | "es"].home;

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="section-container min-h-[90vh] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            {t.role}
          </span>
          <h1 className="heading-xl mb-6">
            {t.headline}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
            {t.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <Button size="icon" variant="outline">
                <Github className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="outline">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="outline">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="section-container bg-secondary/50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            {t.aboutSection.title}
          </span>
          <h2 className="heading-lg mb-6">
            {t.aboutSection.subtitle}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t.aboutSection.description}
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-lg">
              <h3 className="font-bold mb-2">{t.aboutSection.frontend.title}</h3>
              <p className="text-sm text-muted-foreground">
                {t.aboutSection.frontend.description}
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <h3 className="font-bold mb-2">{t.aboutSection.backend.title}</h3>
              <p className="text-sm text-muted-foreground">
                {t.aboutSection.backend.description}
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <h3 className="font-bold mb-2">{t.aboutSection.leadership.title}</h3>
              <p className="text-sm text-muted-foreground">
                {t.aboutSection.leadership.description}
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Preview */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            {t.featuredWork.title}
          </span>
          <h2 className="heading-lg mb-12">{t.featuredWork.subtitle}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-lg">
              <div className="glass-card p-8 h-full transition-all duration-300 hover:translate-y-[-4px]">
                <h3 className="heading-md mb-4">{t.featuredWork.projects.ecommerce.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.featuredWork.projects.ecommerce.description}
                </p>
                <Button variant="outline" className="group-hover:bg-accent group-hover:text-white">
                  {t.viewCaseStudy} <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <div className="glass-card p-8 h-full transition-all duration-300 hover:translate-y-[-4px]">
                <h3 className="heading-md mb-4">{t.featuredWork.projects.analytics.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.featuredWork.projects.analytics.description}
                </p>
                <Button variant="outline" className="group-hover:bg-accent group-hover:text-white">
                  {t.viewCaseStudy} <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="section-container bg-secondary/50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            {t.contact.title}
          </span>
          <h2 className="heading-lg mb-6">{t.contact.subtitle}</h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t.contact.description}
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            {t.contact.cta} <Mail className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;