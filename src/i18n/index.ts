import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    profiles: 'Profiles',
  },
  hu: {
    profiles: 'Profilok',
  },
  it: {
    profiles: 'woopty hoopty',
  },
}

const i18n = createI18n({
  locale: 'hu', // default
  fallbackLocale: 'hu',
  messages,
})

export default i18n
