import {  NavLink } from "react-router-dom"
import NavElement from "../NavElement/NavElement"
import styles from "./Navbar.css"

export default function Navbar() {
  return (
  <nav>
    <ul className="navbar--list">
      <li className="home">
        <NavElement to="Home" />
      </li>
      <li>
        <NavElement to="Spaceships" />
      </li>
      <li>
        <NavElement to="Warpdrives" />
      </li>
      <li>
        <NavElement to="Electronics" />
      </li>
      <li>
        <NavElement to="Spacesuits" />
      </li>
    </ul>
  </nav>
  )
}
