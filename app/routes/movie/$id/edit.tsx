import type { Movie } from "@prisma/client";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect} from "@remix-run/node";
import { useActionData, useLoaderData} from "@remix-run/react";

import MovieForm from "~/components/Movie/MovieForm";
import { getMovie } from "~/lib/db.server";
import {  MovieActions } from "~/lib/movie.actions";
import type { ActionData } from "~/lib/base";


export let action: ActionFunction = async({params, request}) => {
  const {id} = params
  const actions = new MovieActions()
  const resp = await actions.edit(Number(id), request)
  if (resp.data) {
    return redirect(`/movie/${resp.data.Id}/view`)
  }
  return resp 
}

// executed on get
export let loader: LoaderFunction = async ({params}) => {
    const id = Number(params.id);
    return await getMovie(id);
};


// client view
export default function Edit() {
  const movie = useLoaderData()
  const actionData = useActionData< ActionData<Movie> >()

  return (
    <>
      <p>Edit Route</p>
      <MovieForm edit={true} movie={movie} errors={actionData?.errors} cancelUrl={`/movie/${movie.Id}/view`} />
    </>
  )
}