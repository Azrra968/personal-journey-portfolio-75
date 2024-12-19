import { navTranslations } from './nav';
import { homeTranslations } from './home';
import { projectsTranslations } from './projects';

export const translations = {
  en: {
    nav: navTranslations.en,
    home: homeTranslations.en,
    projects: projectsTranslations.en,
  },
  es: {
    nav: navTranslations.es,
    home: homeTranslations.es,
    projects: projectsTranslations.es,
  }
} as const;

export type Language = keyof typeof translations;
