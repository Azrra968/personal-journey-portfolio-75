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
      viewCaseStudy: string;
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
        description: string;
        cta: string;
      };
    };
    about: {
      title: string;
      subtitle: string;
      description: string;
      expertise: {
        title: string;
        frontend: string;
        backend: string;
        cloud: string;
        practices: string;
      };
      journey: {
        title: string;
        positions: {
          senior: {
            title: string;
            period: string;
            company: string;
            description: string;
          };
          mid: {
            title: string;
            period: string;
            company: string;
            description: string;
          };
          junior: {
            title: string;
            period: string;
            company: string;
            description: string;
          };
        };
      };
    };
    projects: {
      title: string;
      subtitle: string;
      viewCode: string;
      viewDemo: string;
    };
    contact: {
      title: string;
      subtitle: string;
      description: string;
      form: {
        name: string;
        email: string;
        message: string;
        submit: string;
      };
      success: string;
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
      viewCaseStudy: "Ver Caso de Estudio",
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
            description: "Una solución e-commerce completa con gestión de inventario en tiempo real",
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
        description: "Siempre estoy interesado en escuchar sobre nuevos proyectos y oportunidades.",
        cta: "Contáctame",
      },
    },
    about: {
      title: "Sobre Mí",
      subtitle: "Experiencia y Trayectoria",
      description: "Con más de 8 años de experiencia en desarrollo de software, he tenido el privilegio de trabajar en diversos proyectos en varias industrias.",
      expertise: {
        title: "Competencias Principales",
        frontend: "Desarrollo Frontend",
        backend: "Sistemas Backend",
        cloud: "Base de Datos y Cloud",
        practices: "Mejores Prácticas",
      },
      journey: {
        title: "Trayectoria Profesional",
        positions: {
          senior: {
            title: "Ingeniero de Software Senior",
            period: "2020 - Presente",
            company: "Tech Solutions Inc.",
            description: "Lideré el desarrollo de aplicaciones empresariales, mentoría a desarrolladores junior y arquitectura de soluciones cloud-native.",
          },
          mid: {
            title: "Ingeniero de Software",
            period: "2018 - 2020",
            company: "Innovation Labs",
            description: "Desarrollé y mantuve múltiples aplicaciones full-stack, implementé pipelines CI/CD.",
          },
          junior: {
            title: "Desarrollador Junior",
            period: "2016 - 2018",
            company: "StartUp Co",
            description: "Construí y mantuve aplicaciones web, colaboré con equipos multifuncionales.",
          },
        },
      },
    },
    projects: {
      title: "Proyectos",
      subtitle: "Mi Trabajo",
      viewCode: "Ver Código",
      viewDemo: "Ver Demo",
    },
    contact: {
      title: "Contacto",
      subtitle: "Conectemos",
      description: "Siempre estoy interesado en escuchar sobre nuevos proyectos y oportunidades. ¡No dudes en contactarme!",
      form: {
        name: "Nombre",
        email: "Correo",
        message: "Mensaje",
        submit: "Enviar Mensaje",
      },
      success: "¡Mensaje enviado! Gracias por tu mensaje. Te responderemos pronto.",
    },
  },
};