import { TranslationSchema } from './types';

export const esTranslations: TranslationSchema = {
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
    description: "Explora mi portafolio de proyectos abarcando varias tecnologías y dominios.",
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
};