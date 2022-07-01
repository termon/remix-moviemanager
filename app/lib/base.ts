import type { ValidationErrors } from "@/types";

// extract form data field value
export function getFormField(field:string, form: FormData): string {
    let data = form.has(field) ? form.get(field) : ''
    if (typeof(data) === 'string') {
        return data
    }
    return '';
}

// transform yup errors into {FieldName: ErrorString,...}        
export function getValidationErrors(err:any) {
    return err.inner.reduce(
        (obj:any, item:any) => Object.assign(obj, { [item.path]: item.errors[0] || '' }), {}
    ); 
}

// The Movie Db Enums
export enum Genre {
    Action, Comedy, Family, Horror, Romance, SciFi, Thriller, Western, War
}
export enum Role {
  Admin, Manager, Guest
}

  export class ActionData<T> {
    public errors: ValidationErrors | undefined
    public fields: FormData | undefined
    public data: T | undefined
  }