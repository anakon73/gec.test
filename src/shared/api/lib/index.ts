import type * as v from 'valibot'
import type { MaybeRef } from 'vue'
import { and } from '@vueuse/math'

type EndpointAndSchema = {
  url: string | ((...args: any) => string)
  method: 'get' | 'post' | 'put' | 'patch' | 'delete'
  schema?: v.ObjectSchema<any, any> | v.ArraySchema<any, any>
}

export type ApiEndpointsAndSchemas = Record<string, EndpointAndSchema>

type KeyParam<T = number> = MaybeRef<T | null | undefined>

export type ToKeyParams<T extends Record<string, unknown>> = {
  [K in keyof T]: KeyParam<T[K]>
}

export function paramsAnd(params: Record<string, KeyParam<unknown>>) {
  return and(...Object.values(params))
}
