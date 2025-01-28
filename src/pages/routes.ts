import type { RouteRecordInfo, RouteRecordRaw } from 'vue-router'
import { HomePage } from './home'

export const routes: RouteRecordRaw[] = [
  { name: 'Home', path: '/', component: HomePage },
]

export interface RouteNamedMap {
  Home: RouteRecordInfo<'Home', '/'>
}

declare module 'vue-router' {
  interface TypesConfig {
    RouteNamedMap: RouteNamedMap
  }
}
