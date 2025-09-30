import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    profiles: {
      title: 'Profiles',
      empty: 'No profiles yet.',
    },
  },
  hu: {
    profiles: {
      title: 'Profilok',
      empty: 'Még nincs profil.',
    },
  },
  it: {
    profiles: {
      title: 'woopty hoopty',
      empty: 'Nessun profilo ancora.',
    },
  },
}

const i18n = createI18n({
  locale: 'hu',
  fallbackLocale: 'hu',
  messages,
})

export default i18n
