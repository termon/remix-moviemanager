
type PropType = {
  enumeration: any
  name: string,
  defaultValue: any,
  className: string
}
export default function EnumSelectList( {enumeration, name, defaultValue, className}: PropType) {
  return ( 
    <select name={name} defaultValue={defaultValue} className={className} >
      <option value="-1" disabled>Choose a Genre...</option>
      {Object.keys(enumeration)
        .filter( f => !isNaN(Number(f)))
        .map(key => (
        <option key={key} value={key}>{enumeration[key as any]}</option>
      ))}
    </select>
  )  
}
