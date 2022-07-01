// https://github.com/maticzav/prisma2/blob/master/docs/prisma-client-js/generated-types.md
// import { MovieGetPayload } from "./node_modules/@prisma/client/index"

// Define a Movie type that includes the relation to `Reviews` 
export type MovieWithReviews = MovieGetIncludePayload<{
  review: true
}>

export type ReviewNoId = ReviewGetSelectPayLoad<{
  Name: true,
  On: true,
  Comment: true,
  Rating: true,
  MovieId: true
}>

export type MovieNoId = MovieGetSelectPayload<{
  Title: true,
  Director: true,
  Year: true,
  Duration: true,
  Budget: true,
  Rating: true,
  PosterUrl: true,
  Genre: true,
  Cast: true,
  Plot: true,
}>

// export type for ValidationErrors
export type ValidationErrors = {
  name: string,
  errors: any
}