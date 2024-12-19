import { motion } from "framer-motion";
import { Code2, Database, Globe, Server } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const About = () => {
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
            About Me
          </span>
          <h1 className="heading-xl mb-6">Background & Expertise</h1>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                With over 8 years of experience in software development, I've had the privilege
                of working on diverse projects across various industries. My journey in tech
                began with a Computer Science degree, and since then, I've been passionate about
                creating efficient, scalable solutions that solve real-world problems.
              </p>
              <p className="text-lg text-muted-foreground">
                I specialize in full-stack development, with a particular focus on cloud
                architecture and distributed systems. My approach combines technical excellence
                with a deep understanding of business needs to deliver solutions that drive
                real value.
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

          <h2 className="heading-lg mb-8">Core Competencies</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card>
              <CardHeader>
                <Globe className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Frontend Development</CardTitle>
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
                <CardTitle>Backend Systems</CardTitle>
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
                <CardTitle>Database & Cloud</CardTitle>
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
                <CardTitle>Best Practices</CardTitle>
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

          <h2 className="heading-lg mb-8">Professional Journey</h2>
          <div className="space-y-8">
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Senior Software Engineer</h3>
              <p className="text-accent mb-4">2020 - Present • Tech Solutions Inc.</p>
              <p className="text-muted-foreground">
                Led development of enterprise-scale applications, mentored junior developers,
                and architected cloud-native solutions using modern technologies.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Software Engineer</h3>
              <p className="text-accent mb-4">2018 - 2020 • Innovation Labs</p>
              <p className="text-muted-foreground">
                Developed and maintained multiple full-stack applications, implemented CI/CD
                pipelines, and improved system performance.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Junior Developer</h3>
              <p className="text-accent mb-4">2016 - 2018 • StartUp Co</p>
              <p className="text-muted-foreground">
                Built and maintained web applications, collaborated with cross-functional
                teams, and participated in agile development processes.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;