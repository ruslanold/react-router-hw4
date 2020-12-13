import { NavLink } from "react-router-dom";

import logo from "./../../logo.svg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="menu">
          <li>
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink exact to="/recipes">Recipes</NavLink>
          </li>
        </ul>
        <div className="user__menu">
          <span>Login</span>
        </div>
      </div>
      
    </header>
  );
}

export default Header;
