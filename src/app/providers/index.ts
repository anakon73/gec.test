import type { App } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'

import { router } from './router'
import { i18n } from './i18n'

export function applyProviders(app: App) {
  app.use(VueQueryPlugin)
  app.use(router)
  app.use(i18n)
}
