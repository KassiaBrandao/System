import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importações dos arquivos JSON de localização
import en from './locales/en.json';
import pt from './locales/pt.json';
import es from './locales/es.json';

// Configuração dos recursos com as traduções
const resources = {
  en: {
    translation: en,  // Certifique-se de que as chaves no JSON estão diretamente sob 'translation'
  },
  pt: {
    translation: pt,
  },
  es: {
    translation: es,
  },
};

// Inicialização do i18n com a detecção de idioma e configuração para React
i18n
  .use(LanguageDetector)  // Adiciona o detector de idiomas do navegador
  .use(initReactI18next)  // Adiciona o suporte para React
  .init({
    resources,
    fallbackLng: 'pt', // Idioma de reserva
    debug: false,      // Ative para true para ver logs de debug

    // Namespace padrão usado para suas traduções
    ns: ['translation'],
    defaultNS: 'translation',

    keySeparator: false,  // Usar false se você preferir acessar as traduções sem usar chaves

    interpolation: {
      escapeValue: false,  // Não é necessário escapar valores em React
      formatSeparator: ',',  // Separador de formato para interpolação
    },

    // Configurações do React i18next para ligação (binding)
    react: {
      useSuspense: true,  // Usa suspense para carregar traduções
    },
  });

export default i18n;
