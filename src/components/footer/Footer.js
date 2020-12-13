import { NavLink } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <ul className="menu">
          <li>
            <NavLink exact to="#">Terms of Use</NavLink>
          </li>
          <li>
            <NavLink exact to="#">Privacy policy</NavLink>
          </li>
        </ul>

      </div>
      
    </footer>
  );
}

export default Footer;
