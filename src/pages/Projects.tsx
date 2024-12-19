import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    demo: "#"
  },
  {
    title: "AI-Powered Analytics",
    description: "Machine learning platform for predictive analytics and data visualization.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tech: ["Python", "TensorFlow", "React", "AWS"],
    github: "#",
    demo: "#"
  },
  {
    title: "IoT Management System",
    description: "Centralized platform for managing and monitoring IoT devices in real-time.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    tech: ["React", "Node.js", "MQTT", "InfluxDB"],
    github: "#",
    demo: "#"
  },
  {
    title: "Enterprise Resource Planning",
    description: "Comprehensive ERP system for business process management.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tech: ["Java", "Spring Boot", "PostgreSQL", "React"],
    github: "#",
    demo: "#"
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable cloud infrastructure management and monitoring solution.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tech: ["AWS", "Terraform", "Docker", "Kubernetes"],
    github: "#",
    demo: "#"
  },
  {
    title: "Blockchain Platform",
    description: "Decentralized application platform for secure transactions.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tech: ["Solidity", "Web3.js", "React", "Node.js"],
    github: "#",
    demo: "#"
  },
  {
    title: "AI Chatbot",
    description: "Intelligent conversational agent for customer support automation.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    tech: ["Python", "NLP", "React", "FastAPI"],
    github: "#",
    demo: "#"
  },
  {
    title: "Cybersecurity Suite",
    description: "Comprehensive security monitoring and threat detection system.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    tech: ["Python", "React", "ElasticSearch", "Kibana"],
    github: "#",
    demo: "#"
  },
  {
    title: "DevOps Pipeline",
    description: "Automated CI/CD pipeline for streamlined development workflows.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    tech: ["Jenkins", "Docker", "Kubernetes", "GitLab"],
    github: "#",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            Projects
          </span>
          <h1 className="heading-xl mb-6">My Work</h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            A collection of projects that showcase my expertise in software development,
            from web applications to system architecture.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-accent/10 text-accent rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Projects;