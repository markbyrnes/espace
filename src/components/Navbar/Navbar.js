import NavElement from "../NavElement/NavElement"
import styles from "./Navbar.css"

export default function Navbar() {
  return (
  <nav>
    <ul className="navbar__list">
      <li className="home">
        <NavElement to="" />
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
      <li>
        <NavElement to="Register" />
      </li>
    </ul>
  </nav>
  )
}
