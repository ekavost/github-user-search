import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import es from './locales/es.json';
import ru from './locales/ru.json';

export default createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  globalInjection: true,
  messages: { en, es, ru },
});
