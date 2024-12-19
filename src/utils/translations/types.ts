export type Language = "en" | "es";

export type TranslationSchema = {
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
    description: string;
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