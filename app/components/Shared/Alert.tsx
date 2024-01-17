import { ErrorSvg } from "../Icons/ErrorSvg"
import { SuccessSvg } from "../Icons/SuccessSvg"
import { WarningSvg } from "../Icons/WarningSvg"

export default function Alert( {type, msg} : { type:string, msg:string} ) {

    let icon 
    if (type === 'success')
        icon = <SuccessSvg msg={msg} /> 
    else if (type === 'warning')
        icon = <WarningSvg msg={msg} />
    else
        icon = <ErrorSvg msg ={msg} />

    return (
        <div className={`alert alert-${type} shadow-lg`}>
            <div>
                {icon}
            </div>
       </div>
 
    )
}