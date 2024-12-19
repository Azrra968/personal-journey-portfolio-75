import { motion } from "framer-motion";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const FeaturedWork = () => {
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
            Professional Experience
          </span>
          <h1 className="heading-xl mb-6">Enterprise Projects</h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            A showcase of my professional work experience and contributions to enterprise-level projects.
          </p>

          <div className="space-y-24">
            {/* Enterprise Project 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 px-4 py-2 bg-accent text-white rounded-full text-sm">
                  Enterprise Project
                </div>
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Enterprise Platform"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div>
                <h2 className="heading-lg mb-4">Enterprise Analytics Platform</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Led the development of a comprehensive analytics solution for Fortune 500 companies,
                  processing millions of data points daily and driving business decisions through
                  actionable insights.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full">React</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full">Node.js</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full">AWS</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full">Kubernetes</span>
                </div>
                <div className="flex gap-4">
                  <Button>
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Featured Project 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 lg:order-1">
                <h2 className="heading-lg mb-4">AI Analytics Dashboard</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  An intelligent analytics platform that leverages machine learning
                  to provide predictive insights and data visualization. Used by
                  enterprise clients to make data-driven decisions.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full">Python</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full">TensorFlow</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full">React</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full">D3.js</span>
                </div>
                <div className="flex gap-4">
                  <Button>
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Button>
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                  alt="AI Analytics Dashboard"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </motion.div>

            {/* Featured Project 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                  alt="IoT Platform"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div>
                <h2 className="heading-lg mb-4">IoT Management Platform</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  A scalable IoT platform that enables real-time device monitoring,
                  data collection, and automated responses. Currently managing over
                  10,000 connected devices across multiple industries.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full">Node.js</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full">MQTT</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full">React</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full">InfluxDB</span>
                </div>
                <div className="flex gap-4">
                  <Button>
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default FeaturedWork;