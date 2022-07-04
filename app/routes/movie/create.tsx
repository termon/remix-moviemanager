import type { Movie } from "@prisma/client";
import type { ActionFunction } from "@remix-run/node";
import { redirect} from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import MovieForm from "~/components/Movie/MovieForm";
import type { ActionData } from "~/lib/base";
import { createMovieAction } from "~/lib/movie.actions";

// executed on post
export let action: ActionFunction = async({request}) => {
  const resp = await createMovieAction(request)
  if (resp.data) {
    return redirect(`/movie/${resp.data.Id}/view`)
  }
  return resp 
}

export default function Create() {
   let actionData = useActionData< ActionData<Movie> >() 
   let movie = actionData?.data

  return (
    <MovieForm movie={movie} errors={actionData?.errors} cancelUrl={"/movie/"} />
  );
}