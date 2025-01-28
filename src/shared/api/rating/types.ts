import * as v from 'valibot'

export const ratingSchema = v.object({
  id: v.string(),
  title: v.string(),
  image: v.pipe(v.string(), v.url()),
  rating: v.number(),
  reviews: v.number(),
  url: v.pipe(v.string(), v.url()),
})
