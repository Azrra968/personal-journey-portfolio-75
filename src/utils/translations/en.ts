import { TranslationSchema } from './types';

export const enTranslations: TranslationSchema = {
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    featuredWork: "Featured Work",
    contact: "Contact",
  },
  home: {
    role: "Senior Software Engineer",
    headline: "Creating exceptional digital experiences through elegant code",
    description: "With over 8 years of experience in software development, I specialize in building scalable applications and leading high-performance teams.",
    viewCaseStudy: "View Case Study",
    aboutSection: {
      title: "About Me",
      subtitle: "Passionate about creating impactful solutions",
      description: "I'm a senior software engineer with expertise in building scalable web applications. My approach combines technical excellence with user-centered design principles to create solutions that not only work flawlessly but also provide exceptional user experiences.",
      frontend: {
        title: "Frontend Development",
        description: "Expertise in React, TypeScript, and modern frontend frameworks",
      },
      backend: {
        title: "Backend Systems",
        description: "Building robust APIs and scalable server architectures",
      },
      leadership: {
        title: "Technical Leadership",
        description: "Leading teams and architecting complex solutions",
      },
    },
    featuredWork: {
      title: "Featured Work",
      subtitle: "Recent Projects",
      projects: {
        ecommerce: {
          title: "E-commerce Platform",
          description: "A full-stack e-commerce solution with real-time inventory management",
        },
        analytics: {
          title: "Analytics Dashboard",
          description: "Real-time data visualization platform for business intelligence",
        },
      },
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Let's work together",
      description: "I'm always interested in hearing about new projects and opportunities.",
      cta: "Contact Me",
    },
  },
  about: {
    title: "About Me",
    subtitle: "Background & Expertise",
    description: "With over 8 years of experience in software development, I've had the privilege of working on diverse projects across various industries.",
    expertise: {
      title: "Core Competencies",
      frontend: "Frontend Development",
      backend: "Backend Systems",
      cloud: "Database & Cloud",
      practices: "Best Practices",
    },
    journey: {
      title: "Professional Journey",
      positions: {
        senior: {
          title: "Senior Software Engineer",
          period: "2020 - Present",
          company: "Tech Solutions Inc.",
          description: "Led development of enterprise-scale applications, mentored junior developers, and architected cloud-native solutions.",
        },
        mid: {
          title: "Software Engineer",
          period: "2018 - 2020",
          company: "Innovation Labs",
          description: "Developed and maintained multiple full-stack applications, implemented CI/CD pipelines.",
        },
        junior: {
          title: "Junior Developer",
          period: "2016 - 2018",
          company: "StartUp Co",
          description: "Built and maintained web applications, collaborated with cross-functional teams.",
        },
      },
    },
  },
  projects: {
    title: "Projects",
    subtitle: "My Work",
    description: "Explore my portfolio of projects spanning various technologies and domains.",
    viewCode: "View Code",
    viewDemo: "View Demo",
  },
  contact: {
    title: "Contact",
    subtitle: "Let's Connect",
    description: "I'm always interested in hearing about new projects and opportunities. Feel free to reach out!",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send Message",
    },
    success: "Message sent! Thank you for your message. We'll get back to you soon.",
  },
};