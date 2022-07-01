
import type { Review } from '@prisma/client';
import { Link } from '@remix-run/react';

function ReviewsList({ reviews, onDelete }: {reviews: Review[], onDelete:any}) { 
  return (
    <div className="card shadow-lg p-3 mb-5">
      <div className="card-body">
      <table className="table table-hover">
          <thead>
            <tr>
              {/* <th>Id</th> */}
              <th>Name</th>
              <th>On</th>
              <th>Rating</th>
              <th>Comment</th>   
              <th>Actions</th>    
            </tr>
          </thead>
          <tbody>
            { reviews && reviews.map((r:Review) => (
              <tr key={r.Id}>
                  {/* <td>{r.Id}</td> */}
                  <td>{r.Name}</td>
                  <td>{r.On}</td>
                  <td>{r.Rating}</td>
                  <td>{r.Comment}</td>  
                  <td>        
                    <Link to={`/movie/${r.MovieId}/review/${r.Id}/delete`} className="btn btn-link" ><i className="bi bi-trash"></i></Link>
                  </td>   
              </tr>
            ))}
          </tbody>
      </table>     
    </div>
  </div>
  );
}

export default ReviewsList;
