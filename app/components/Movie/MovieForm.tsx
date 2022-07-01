import type { Movie } from "@prisma/client";

import { Form, Link } from "@remix-run/react";
import { Genre } from "~/lib/base";
import SelectList from "../SelectList";

type MovieFormProps = {
  edit?: boolean 
  movie: Movie | undefined
  cancelUrl: string 
  errors: any 
}

export default function MovieForm({edit, movie, errors, cancelUrl} : MovieFormProps) {
  return (
    <div className="card mt-4 p-3">
      <h3 className="ms-3">{edit ? "Edit" : "Create" } Movie</h3>

      <Form className="m-3" method="post">

        {/* Hidden fields to hold Id and Rating */}
        <input name="Id" type="hidden" defaultValue={movie?.Id} />
        <input name="Rating" type="hidden" defaultValue={movie?.Rating} />
        
        <div className="mb-2">
          <label htmlFor="Title" className="form-label">Title</label>
          <input name="Title" className="form-control"  defaultValue={movie?.Title }  />
          <div className="text-danger">{errors?.Title}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="Director" className="form-label">Director</label>
          <input name="Director" className="form-control" defaultValue={movie?.Director}/>
          <div className="text-danger">{errors?.Director}</div>
        </div>

        <div className="row">
            <div className="col-3">
              <label htmlFor="Year" className="form-label">Year</label>
              <input name="Year" type="number" className="form-control" defaultValue={movie?.Year}/>
              <div className="text-danger">{errors?.Year}</div>
            </div>

            <div className="col-3">
              <label htmlFor="Budget" className="form-label">Budget (£m)</label>
              <input name="Budget" type="number" className="form-control" defaultValue={movie?.Budget} />
              <div className="text-danger">{errors?.Budget}</div>
            </div>

            <div className="col-3">
              <label htmlFor="Duration" className="form-label">Duration</label>
              <input name="Duration" type="number" className="form-control" defaultValue={movie?.Duration}/>
              <div className="text-danger">{errors?.Duration}</div>
            </div>
            
            <div className="col-3">
              <label htmlFor="Genre" className="form-label">Genre</label>
              <SelectList type={typeof(Genre)} name="Genre" defaultValue={movie?.Genre} className="form-control"/>            
              <div className="text-danger">{errors?.Genre}</div>             
            </div>
        </div>

        <div className="mb-3">
            <label htmlFor="Cast" className="form-label">Cast</label>
            <textarea name="Cast" className="form-control" rows={2} defaultValue={movie?.Cast}></textarea>
           <div className="text-danger">{errors?.Cast}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="PosterUrl" className="form-label">Poster Url</label>
            <input name="PosterUrl" type="url" className="form-control" defaultValue={movie?.PosterUrl || ''}/>
           <div className="text-danger">{errors?.PosterUrl}</div>
      </div>

        <div className="mb-3">
            <label htmlFor="Plot" className="form-label">Plot</label>
            <textarea name="Plot" className="form-control" rows={5} defaultValue={movie?.Plot}></textarea>
            <div className="text-danger">{errors?.Plot}</div>
        </div>
      
        <button className="btn btn-primary" type="submit">{edit ? "Save" : "Create"}</button>
        <Link className="btn btn-link" to={cancelUrl}>Cancel</Link>
        
      </Form>
    </div>
  );
}
