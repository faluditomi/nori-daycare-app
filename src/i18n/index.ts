import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    profiles: {
      title: 'Profiles',
      empty: 'No profiles yet.',
      note: 'Notes',
      noNotePlaceholder: 'No notes yet',
    },
  },
  hu: {
    profiles: {
      title: 'Profilok',
      empty: 'Még nincs profil.',
      note: 'Megjegyzés',
      noNotePlaceholder: 'Nincs még megjegyzés',
    },
  },
  it: {
    profiles: {
      title: '___',
      empty: 'Nessun profilo ancora.',
      note: '___',
      noNotePlaceholder: '___',
    },
  },
}

const i18n = createI18n({
  locale: 'hu',
  fallbackLocale: 'hu',
  messages,
})

export default i18n
