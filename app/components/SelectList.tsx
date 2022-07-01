import { Genre } from "~/lib/base"

type PropType = {
  type: any
  name: string,
  defaultValue: any,
  className: string
}
export default function SelectList( {type, name, defaultValue, className}: PropType) {
  return ( 
    <select name={name} defaultValue={defaultValue} className={className} >
      <option value="-1" disabled>Choose a Genre...</option>
      {Object.keys(typeof(type))
        .filter( f => !isNaN(Number(f)))
        .map(key => (
        <option key={key} value={key}>{Genre[key as any]}</option>
      ))}
    </select>
  )  
}
