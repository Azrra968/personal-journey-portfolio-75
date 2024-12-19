type Translation = {
  [key: string]: {
    nav: {
      home: string;
      about: string;
      projects: string;
      featuredWork: string;
      contact: string;
    };
    home: {
      role: string;
      headline: string;
      description: string;
      aboutSection: {
        title: string;
        subtitle: string;
        description: string;
        frontend: {
          title: string;
          description: string;
        };
        backend: {
          title: string;
          description: string;
        };
        leadership: {
          title: string;
          description: string;
        };
      };
      featuredWork: {
        title: string;
        subtitle: string;
        projects: {
          ecommerce: {
            title: string;
            description: string;
          };
          analytics: {
            title: string;
            description: string;
          };
        };
      };
      contact: {
        title: string;
        subtitle: string;
        cta: string;
      };
    };
  };
};

export const translations: Translation = {
  en: {
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
        cta: "Contact Me",
      },
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre Mí",
      projects: "Proyectos",
      featuredWork: "Trabajo Destacado",
      contact: "Contacto",
    },
    home: {
      role: "Ingeniero de Software Senior",
      headline: "Creando experiencias digitales excepcionales a través de código elegante",
      description: "Con más de 8 años de experiencia en desarrollo de software, me especializo en construir aplicaciones escalables y liderar equipos de alto rendimiento.",
      aboutSection: {
        title: "Sobre Mí",
        subtitle: "Apasionado por crear soluciones impactantes",
        description: "Soy un ingeniero de software senior con experiencia en la construcción de aplicaciones web escalables. Mi enfoque combina excelencia técnica con principios de diseño centrados en el usuario para crear soluciones que no solo funcionan perfectamente sino que también brindan experiencias excepcionales.",
        frontend: {
          title: "Desarrollo Frontend",
          description: "Experiencia en React, TypeScript y frameworks frontend modernos",
        },
        backend: {
          title: "Sistemas Backend",
          description: "Construcción de APIs robustas y arquitecturas escalables",
        },
        leadership: {
          title: "Liderazgo Técnico",
          description: "Liderando equipos y arquitectando soluciones complejas",
        },
      },
      featuredWork: {
        title: "Trabajo Destacado",
        subtitle: "Proyectos Recientes",
        projects: {
          ecommerce: {
            title: "Plataforma E-commerce",
            description: "Una solución e-commerce full-stack con gestión de inventario en tiempo real",
          },
          analytics: {
            title: "Panel de Analytics",
            description: "Plataforma de visualización de datos en tiempo real para inteligencia empresarial",
          },
        },
      },
      contact: {
        title: "Contacto",
        subtitle: "Trabajemos juntos",
        cta: "Contáctame",
      },
    },
  },
};