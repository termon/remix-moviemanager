import type { LoaderFunction} from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import MovieView from "~/components/Movie/MovieView";
import { getMovieWithReviews } from "~/lib/db.server";

// executed on get
export let loader: LoaderFunction = async ({params}) => {
    const id = Number(params.id);
    return await getMovieWithReviews(id);
};

// client view - layout file for /movie/:id/....
export default function View() {
    const movie = useLoaderData()
    return (

        <div className="py-4">
           
            <MovieView movie={movie} >
                <div className="d-flex">
                    <Link className="btn btn-link" to={`/movie`}>List <i className="bi bi-justify"></i></Link>
                    <Link className="btn btn-link" to={`/movie/${movie?.Id}/delete`} >Delete <i className="bi bi-trash"></i></Link>
                    <Link className="btn btn-link" to={`/movie/${movie?.Id}/edit`}>Edit <i className="bi bi-pen"></i></Link>
                    <Link className="btn btn-link" to={`/movie/${movie?.Id}/review`}>Review <i className="bi bi-chat-dots"></i></Link>
                </div> 
            </MovieView>

            {/* Output movie child routes here */}
            <Outlet />                
      
        </div>
    );
  }