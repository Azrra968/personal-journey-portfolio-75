import { motion } from "framer-motion";
import { ChevronRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Index = () => {
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
            Senior Software Engineer
          </span>
          <h1 className="heading-xl mb-6">
            Creating exceptional digital experiences through elegant code
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
            With over 8 years of experience in software development, I specialize in building scalable applications and leading high-performance teams.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/projects">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                View Projects <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
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
            About Me
          </span>
          <h2 className="heading-lg mb-6">
            Passionate about creating impactful solutions
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'm a senior software engineer with expertise in building scalable web applications. My approach combines technical excellence with user-centered design principles to create solutions that not only work flawlessly but also provide exceptional user experiences.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-lg">
              <h3 className="font-bold mb-2">Frontend Development</h3>
              <p className="text-sm text-muted-foreground">
                Expertise in React, TypeScript, and modern frontend frameworks
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <h3 className="font-bold mb-2">Backend Systems</h3>
              <p className="text-sm text-muted-foreground">
                Building robust APIs and scalable server architectures
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <h3 className="font-bold mb-2">Technical Leadership</h3>
              <p className="text-sm text-muted-foreground">
                Leading teams and architecting complex solutions
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
            Featured Work
          </span>
          <h2 className="heading-lg mb-12">Recent Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-lg">
              <div className="glass-card p-8 h-full transition-all duration-300 hover:translate-y-[-4px]">
                <h3 className="heading-md mb-4">E-commerce Platform</h3>
                <p className="text-muted-foreground mb-4">
                  A full-stack e-commerce solution with real-time inventory management
                </p>
                <Button variant="outline" className="group-hover:bg-accent group-hover:text-white">
                  View Case Study <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <div className="glass-card p-8 h-full transition-all duration-300 hover:translate-y-[-4px]">
                <h3 className="heading-md mb-4">Analytics Dashboard</h3>
                <p className="text-muted-foreground mb-4">
                  Real-time data visualization platform for business intelligence
                </p>
                <Button variant="outline" className="group-hover:bg-accent group-hover:text-white">
                  View Case Study <ChevronRight className="ml-2 h-4 w-4" />
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
            Get in Touch
          </span>
          <h2 className="heading-lg mb-6">Let's work together</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            Contact Me <Mail className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
