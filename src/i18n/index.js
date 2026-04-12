import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en'
import es from './locales/es'
import { getPathLanguage } from '../legal/content'

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
}

const getInitialLanguage = () => {
  if (typeof window === 'undefined') {
    return 'es'
  }

  const pathLanguage = getPathLanguage(window.location.pathname)
  if (pathLanguage && resources[pathLanguage]) {
    return pathLanguage
  }

  const language = window.navigator.language?.split('-')[0]
  return language && resources[language] ? language : 'es'
}

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
