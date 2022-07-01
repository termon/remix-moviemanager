//import { Movie } from "@prisma/client";
import type { ActionFunction, LoaderFunction} from "@remix-run/node";
import { redirect} from "@remix-run/node";
import { Form, Link,  useLoaderData } from "@remix-run/react";

import { getMovie, deleteMovie } from "~/lib/db.server";

export let action: ActionFunction = async({params, request}) => {
  let {id} = params;
  await deleteMovie(Number(id))
  return redirect(`/movie`) 
}

// executed on get
export let loader: LoaderFunction = async ({params}) => {
    const id = Number(params.id);
    return await getMovie(id);
};


// client view
export default function Edit() {
  const movie = useLoaderData()
 
  return (
    <>
        <Form className="m-3" method="post">
          <h4>Delete {movie.Title}?</h4>
          <button type="submit" className="btn btn-danger">Delete</button>
          <Link className="btn btn-link" to={`/movie/${movie.Id}/view`}>Cancel</Link>    
        </Form>
      
    </>
  )

}