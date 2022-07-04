import type { Movie, Review } from "@prisma/client"

// Define a Movie type that includes the relation to `Reviews` 
export type MovieWithReviews =  Movie & { Reviews: Review[] } 

// Define a Review type with no Id
export type ReviewNoId = Pick<Review, 'Name' | 'On' | 'Comment' | 'Rating' | 'MovieId'>

// Define a Movie type with no Id
export type MovieNoId = Pick<Movie, 'Title' | 'Director' | 'Year' | 'Duration' | 'Budget' | 
                                    'Rating' | 'PosterUrl' | 'Genre' | 'Cast' | 'Plot'>

// export type for ValidationErrors
export type ValidationErrors = {
  name: string,
  errors: any
}
 
// export type MovieWithReviews = MovieGetIncludePayload<{
//    review: true
// }>

// export type ReviewNoId = ReviewGetSelectPayLoad<{
//   Name: true,
//   On: true,
//   Comment: true,
//   Rating: true,
//   MovieId: true
// }>

// export type MovieNoId = MovieGetSelectPayload<{
//   Title: true,
//   Director: true,
//   Year: true,
//   Duration: true,
//   Budget: true,
//   Rating: true,
//   PosterUrl: true,
//   Genre: true,
//   Cast: true,
//   Plot: true,
// }>