import * as v from 'valibot'
import { API_URL } from '@/shared/config'
import type { ApiEndpointsAndSchemas, ToKeyParams } from '../lib'
import { ratingSchema } from './types'

const endpoints = {
  getRatings: {
    url: '/api/ratings',
    method: 'get',
    schema: v.array(ratingSchema),
  },
  byId: {
    url: ({ id }: RatingByIdParams) => `/api/ratings/${id}`,
    method: 'get',
    schema: ratingSchema,
  },
} satisfies ApiEndpointsAndSchemas

export async function getRatings() {
  const { url, method, schema } = endpoints.getRatings

  const response = await fetch(`${API_URL}${url}`, { method })
  if (!response.ok)
    throw new Error(`HTTP error! Status: ${response.status}`)
  const data = await response.json()

  return v.parse(schema, data)
}

export type RatingByIdParams = { id: number }
export type RatingByIdKeyParams = ToKeyParams<RatingByIdParams>
export async function ratingById({ id }: RatingByIdParams) {
  const { url, method, schema } = endpoints.byId

  const response = await fetch(`${API_URL}${url({ id })}`, { method })
  if (!response.ok)
    throw new Error(`HTTP error! Status: ${response.status}`)
  const data = await response.json()

  return v.parse(schema, data)
}
