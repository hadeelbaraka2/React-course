import "./Header.css"
import { Link,NavLink } from "react-router";
const Header = () => {
    return (
        <div>
             <header className="header comp">
    <h1><Link to="/">Web Dev Roadmap</Link></h1>
    <ul className="flex">
      <li className="main-list">
        <NavLink className="main-link" to="/Basics">
          Basics
        </NavLink>
      </li>
      <li className="main-list">
        <NavLink className="main-link" to="/Frameworks">
          Frameworks
        </NavLink>
      </li>
      <li className="main-list">
        <NavLink className="main-link" to="/Tips">
          Tips
        </NavLink>
      </li>
    </ul>
  </header>
        </div>
    );
}

export default Header;
