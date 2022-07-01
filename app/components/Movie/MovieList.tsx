import type { Movie } from "@prisma/client";
import { Link } from "@remix-run/react";

function MovieList({ movies }: { movies:Movie[] }) {

  return (
    <>
      <h3>Movie List</h3>

      <table className="table table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { movies.map((m:Movie) => (
            <tr key={m.Id}>
                <td>{m.Id}</td>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>
                  <Link to={`/movie/${m.Id}/view`} className="btn btn-link"><i className="bi bi-justify"></i></Link>            
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default MovieList;
