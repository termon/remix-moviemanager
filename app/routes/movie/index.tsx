
import { Link, useLoaderData } from "@remix-run/react";
import { getMovies } from "~/lib/db.server";
import MovieList from "~/components/Movie/MovieList";

export async function loader() {
  return await getMovies();
}

export default function Index() {
  return (
    <>
      <Link className="btn btn-primary my-4" to="/movie/create">       
        Add Movie
      </Link>
      <MovieList movies={useLoaderData()} />
    </>
  );
}

