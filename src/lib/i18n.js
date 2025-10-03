import { writable } from 'svelte/store';
import en from './translations/en.json';
import uk from './translations/uk.json';

// Available languages
export const languages = {
  en: 'English',
  uk: 'Українська'
};

// Translation data
const translations = {
  en,
  uk
};

// Current language store
export const currentLanguage = writable('en');

// Translation function
export function translate(key, lang = 'en') {
  const keys = key.split('.');
  let value = translations[lang];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // Fallback to English if translation not found
      value = translations.en;
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = value[fallbackKey];
        } else {
          return key; // Return the key if no translation found
        }
      }
      break;
    }
  }
  
  return typeof value === 'string' ? value : key;
}

// Reactive translation function for Svelte components
export function t(key) {
  let currentLang = 'en';
  currentLanguage.subscribe(lang => currentLang = lang);
  return translate(key, currentLang);
}
