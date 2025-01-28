import { createI18n } from 'vue-i18n'
import enUs from './locales/en.json'
import ua from './locales/ua.json'

type MessageSchema = typeof enUs

export const i18n = createI18n<[MessageSchema], 'en-Us' | 'ua'>({
  legacy: false,
  locale: localStorage.getItem('locale') || 'en-Us',
  globalInjection: true,
  messages: { 'en-Us': enUs, ua },
})
