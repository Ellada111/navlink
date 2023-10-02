
import { Link } from "react-router-dom"
export function Footer (){
    return (
        <ul>
            <li>
            <Link to="/contacts">contacts page</Link>
            </li>
            <li>
            <Link to="/main">main page</Link>
            </li>
            <li>
            <Link to="/portfolio">portfolio page</Link>
            </li>
           
        </ul>
    )
}