import { motion } from "framer-motion";
import { Code2, Database, Globe, Server } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { useParams } from "react-router-dom";
import { translations } from "../utils/translations";

const About = () => {
  const { lang } = useParams();
  const t = translations[lang as "en" | "es"].about;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            {t.title}
          </span>
          <h1 className="heading-xl mb-6">{t.subtitle}</h1>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                {t.description}
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Profile"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <h2 className="heading-lg mb-8">{t.expertise.title}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card>
              <CardHeader>
                <Globe className="h-8 w-8 text-accent mb-2" />
                <CardTitle>{t.expertise.frontend}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>React & Next.js</li>
                  <li>TypeScript</li>
                  <li>State Management</li>
                  <li>Responsive Design</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Server className="h-8 w-8 text-accent mb-2" />
                <CardTitle>{t.expertise.backend}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Node.js & Express</li>
                  <li>Python & Django</li>
                  <li>RESTful APIs</li>
                  <li>Microservices</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Database className="h-8 w-8 text-accent mb-2" />
                <CardTitle>{t.expertise.cloud}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>SQL & NoSQL</li>
                  <li>AWS Services</li>
                  <li>Docker & K8s</li>
                  <li>Serverless</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Code2 className="h-8 w-8 text-accent mb-2" />
                <CardTitle>{t.expertise.practices}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Clean Code</li>
                  <li>CI/CD</li>
                  <li>Testing</li>
                  <li>Documentation</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="heading-lg mb-8">{t.journey.title}</h2>
          <div className="space-y-8">
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">{t.journey.positions.senior.title}</h3>
              <p className="text-accent mb-4">{t.journey.positions.senior.period} • {t.journey.positions.senior.company}</p>
              <p className="text-muted-foreground">
                {t.journey.positions.senior.description}
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">{t.journey.positions.mid.title}</h3>
              <p className="text-accent mb-4">{t.journey.positions.mid.period} • {t.journey.positions.mid.company}</p>
              <p className="text-muted-foreground">
                {t.journey.positions.mid.description}
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">{t.journey.positions.junior.title}</h3>
              <p className="text-accent mb-4">{t.journey.positions.junior.period} • {t.journey.positions.junior.company}</p>
              <p className="text-muted-foreground">
                {t.journey.positions.junior.description}
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;