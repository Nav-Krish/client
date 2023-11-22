import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  // menu is set to show or disable the menu in small screen
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    /* The nav contains all the required details like link names, menu icon and a title */
    <nav>
      <Link to="/" className="title">
        Password Reset Task
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Signup</NavLink>
        </li>
        <li>
          <NavLink to="/forgot-password">Forgot Password</NavLink>
        </li>
        <li>
          <NavLink to="/">Logout</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;