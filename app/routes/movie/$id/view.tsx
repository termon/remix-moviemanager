// Test route for outliet comment
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import ReviewsList from "~/components/Movie/ReviewsList";
import { getMovieWithReviews } from "~/lib/db.server";

// executed on get
export let loader: LoaderFunction = async ({params}) => {
    const id = Number(params.id);
    return await getMovieWithReviews(id);
};


// client view
export default function View() {
    const movie = useLoaderData()
    
    return (
      <div className="pb-4">
        <ReviewsList reviews={movie.Reviews} onDelete={undefined} />
      </div>
    );
  }