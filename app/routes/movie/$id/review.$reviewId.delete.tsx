import type { Review } from "@prisma/client";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect} from "@remix-run/node";
import {  Form, Link,  useLoaderData } from "@remix-run/react";
import { deleteReview, getReview} from "~/lib/db.server";


export let action: ActionFunction = async({params, request}) => {
  console.log('delete review action', params)
  let {id, reviewId} = params;
  await deleteReview(Number(id), Number(reviewId))
  return redirect(`/movie/${id}/view`) 
}

// executed on get
export let loader: LoaderFunction = async ({params}) => {
    const { reviewId } = params
    return await getReview(Number(reviewId))
};

// client view
export default function ReviewDelete() {
  const review:Review = useLoaderData()
  
  return (
    <>
        <Form className="m-3" method="post">
          <h4>Delete {review.Comment}?</h4>
          <button type="submit" className="btn btn-danger">Delete</button>
          <Link className="btn btn-link" to={`/movie/${review.MovieId}/view`}>Cancel</Link>    
        </Form>
      
    </>
  )

}