import { Language, TranslationSchema } from './types';
import { enTranslations } from './en';
import { esTranslations } from './es';

export type { Language, TranslationSchema };

export const translations: Record<Language, TranslationSchema> = {
  en: enTranslations,
  es: esTranslations,
};