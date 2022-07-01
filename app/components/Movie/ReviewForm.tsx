//import type { ReviewNoId } from "@/types";
import type { Review } from "@prisma/client";
import { Form, Link } from "@remix-run/react";

type ReviewFormProps = {
  edit?: boolean
  review: Review  | undefined //| ReviewNoId
  errors: any
  cancelUrl: string 
}

export default function ReviewForm({edit, review, errors, cancelUrl} : ReviewFormProps) {
  return (
    <div className="card mt-4 p-3">
      <h3 className="ms-3">{edit ? "Edit" : "Create" } Review</h3>

      <Form className="m-3" method="post">
        <input type="hidden" name="Id" defaultValue={review?.Id}/>
        <input type="hidden" name="MovieId" defaultValue={review?.MovieId}/>

        <div className="mb-2">
          <label htmlFor="Name" className="form-label">Name</label>
          <input name="Name" className="form-control" defaultValue={review?.Name}/>
          <div className="text-danger">{errors?.Name}</div>
  
        </div>

        <div className="mb-3">
            <label htmlFor="Comment" className="form-label">Comment</label>
            <textarea name="Comment" className="form-control" rows={2} defaultValue={review?.Comment}></textarea>
            <div className="text-danger">{errors?.Comment}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="Rating" className="form-label">Rating</label>
          <input name="Rating" type="number" className="form-control" defaultValue={review?.Rating} />
          <div className="text-danger">{errors?.Rating}</div>
        </div>        
      
        <button className="btn btn-primary" type="submit">{edit ? "Save" : "Create"}</button>
        <Link className="btn btn-link" to={cancelUrl}>Cancel</Link>
        
      </Form>
    </div>
  );
}
