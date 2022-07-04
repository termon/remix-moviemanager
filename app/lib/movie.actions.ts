import type { Movie, Review } from ".prisma/client"
import type { MovieNoId, ReviewNoId } from "@/types"
import { addMovie, addReview, updateMovie } from "./db.server"
import { getFormField, getValidationErrors, ActionData } from "./base"

import * as yup from 'yup'

// ----------------  public action methods -----------------------------
export async function createReviewAction(movieId:number, request:Request) {
    let form = await request.formData();
    
    let r:ReviewNoId = {           
        Name: getFormField("Name",form),
        Comment: getFormField("Comment",form),
        On: new Date().toDateString(),
        Rating: Number(getFormField("Rating",form)),
        MovieId: movieId
    }
    
    const resp = new ActionData<Review|null>()
    try {
        await commentValidationSchema().validate(r, { abortEarly: false })
        const review = await addReview(r)
        resp.data = review 
    } catch(err:any) { 
        // transform yup errors into {FieldName: ErrorString,...}
        resp.errors = getValidationErrors(err) 
        resp.fields = form               
    }
    return resp
}


export async function createMovieAction(request:Request) : Promise< ActionData<Movie|null> > {
    const form = await request.formData();       
    // extract data from form
    let m:MovieNoId = {         
        Title: getFormField("Title",form),
        Director: getFormField("Director",form),
        Year: Number(getFormField("Year",form)),
        Duration: Number(getFormField("Duration",form)),
        Budget: Number(getFormField("Budget",form)),
        Rating: Number(getFormField("Rating",form)),
        PosterUrl: getFormField("PosterUrl",form),
        Genre: Number(getFormField("Genre",form)),
        Cast: getFormField("Cast",form),
        Plot: getFormField("Plot",form)
    }
    
    // validate and store or extract validation errors
    const resp = new ActionData<Movie|null>()
    try {
        await movieValidationSchema().validate(m, { abortEarly: false })
        const created = await addMovie(m)
        resp.data = created
    } catch(err:any) { 
        // transform yup errors into {FieldName: ErrorString,...}           
        resp.errors = getValidationErrors(err) 
        resp.fields = form 
    }
    return resp       
} 


export async function editMovieAction(id: number, request:Request) : Promise < ActionData<Movie|null> > {
    const form = await request.formData();

    console.log('edit form data', id, form)
    let m:Movie = {
        Id: Number(getFormField("Id",form)), // Number(id)
        Title: getFormField("Title",form),
        Director: getFormField("Director",form),
        Year: Number(getFormField("Year",form)),
        Duration: Number(getFormField("Duration",form)),
        Budget: Number(getFormField("Budget",form)),
        Rating: Number(getFormField("Rating",form)),
        PosterUrl: getFormField("PosterUrl",form),
        Genre: Number(getFormField("Genre",form)),
        Cast: getFormField("Cast",form),
        Plot: getFormField("Plot",form)
    }
    
    const resp = new ActionData<Movie|null>()       
    try {
        await movieValidationSchema().validate(m, { abortEarly: false })
        const updated = await updateMovie(m)
        resp.data = updated
    } catch(err:any) { 
            
        resp.errors = getValidationErrors(err) 
        resp.fields = form 
    }
    return resp
}


// -------------- private schema validators ---------------------------
function movieValidationSchema() {
    return yup.object().shape({
        Title: yup.string().required(),
        Year: yup.number().integer().required().min(1900).max(new Date().getFullYear()+1),
        Duration: yup.number().integer().required().min(1).max(300),
        Budget: yup.number().min(1).max(500).required(),
        Director: yup.string().required().min(5).max(100),
        Genre: yup.string().required(),
        Cast: yup.string().max(200),
        Plot: yup.string().max(500),
        PosterUrl: yup.string().url().test(`verify-url-type`, 'Url resource does not exist', function (value) {     
        return fetch(value || '')
            .then( resp => resp.status == 200)
            .catch( e => false)
        })
    })
}
function commentValidationSchema() {
    return yup.object({
        Name: yup.string().required(),
        Comment: yup.string().required().min(1).max(300),
        MovieId: yup.number().required(),
        Rating: yup.number().min(1).max(10)
    }).required();
}