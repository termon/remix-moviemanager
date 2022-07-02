
// type of enumeration to use when creating select options
type EnumType = {
  enumeration: any
}

export default function EnumSelectList( {enumeration, ...props}: EnumType & React.HTMLProps<HTMLSelectElement>) { 
  
  return ( 
    <select {...props} >   
      <option value="-1" disabled>Choose a Genre...</option>
      {Object.keys(enumeration)
        .filter( f => !isNaN(Number(f)))
        .map(key => (
        <option key={key} value={key}>{enumeration[key as any]}</option>
      ))}
    </select>
  )  
}
