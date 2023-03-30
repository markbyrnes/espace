import {  NavLink } from "react-router-dom"
import styles from "./NavElement.css"

export default function NavElement(props){

    let url = props.to.toLowerCase() 
    let navTitle = props.to
    if (navTitle === "") navTitle = "Home"
    return(
        <NavLink 
        className="link"
        to={`/${url}`}
        style={({ isActive }) => ({
          color: isActive ? '#000000' : '#545e6f',
          background: isActive ? '#F5F5DC' : '#F5F5DC', //#FFDEAD
          
        })}
        >{navTitle}</NavLink>

    )
}