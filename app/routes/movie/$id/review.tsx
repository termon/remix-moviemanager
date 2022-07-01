import type { Review } from "@prisma/client";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect} from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";

import { getMovieWithReviews } from "~/lib/db.server";
import type { ActionData } from "~/lib/base";
import { MovieActions } from "~/lib/movie.actions";
import ReviewForm from "~/components/Movie/ReviewForm";


// executed on POST
export let action: ActionFunction = async({params, request}) => {
  const {id} = params
  const actions = new MovieActions()
  const resp = await actions.createReview(Number(id), request)
  if (resp.data) {
    return redirect(`/movie/${id}/view`)
  }
  return resp 
}

// executed on get
export let loader: LoaderFunction = async ({params}) => {
  const id = Number(params.id);
  return await getMovieWithReviews(id);
};

// client view
export default function CreateReview() {
  const movie = useLoaderData()
  const actionData = useActionData<ActionData<Review>>()
  const review = actionData?.data

  return (
      <ReviewForm 
        review={review} 
        errors={actionData?.errors} 
        cancelUrl={`/movie/${movie.Id}/view`}        
      /> 
  );
}