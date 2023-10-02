
import { NavLink } from "react-router-dom"
export function NavBar (){
    return (
        <ul> 
        <li> 
        <NavLink to="/">main page</NavLink>
        </li>
        <li>
        <NavLink to="/contacts">contacts page</NavLink>
        </li>
        <li>
        <NavLink to="/login">login page</NavLink>
        </li>
        <li>
        <NavLink to = "/portfolio">portfolio page</NavLink>
        </li>
        </ul>
    )
}