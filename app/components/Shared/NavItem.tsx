import {Link} from '@remix-run/react'

export default function NavItem( {href, title}: any) {

    return (
        <li className="nav-item">
            <Link to={href} className="nav-link" aria-current="page">{title}</Link>
        </li> 
    )
}