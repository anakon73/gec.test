import { queryOptions, useQuery } from '@tanstack/vue-query'
import { paramsAnd } from '../lib'
import { getRatings, ratingById, type RatingByIdKeyParams } from './api'

const entity = 'rating' as const
const Scopes = { All: 'all', ById: 'by-id' } as const

const keys = {
  getRatings: () => [{ entity, scope: Scopes.All }],
  byId: (
    params: RatingByIdKeyParams,
  ) => [{ entity, scope: Scopes.ById, ...params }],
} as const

export { keys as ratingKeys }

export function useRatingsQuery() {
  return queryOptions({
    queryKey: keys.getRatings(),
    queryFn: getRatings,
    refetchOnWindowFocus: false,
  })
}

export function useRatings() {
  return useQuery(useRatingsQuery())
}

export function useUserByIdQuery(params: RatingByIdKeyParams) {
  return queryOptions({
    queryKey: keys.byId(params),
    queryFn: ({ queryKey: [{ id }] }) => ratingById({ id: id! }),
    enabled: paramsAnd(params),
    refetchOnWindowFocus: false,
  })
}

export function useUserById(params: RatingByIdKeyParams) {
  return useQuery(useUserByIdQuery(params))
}
