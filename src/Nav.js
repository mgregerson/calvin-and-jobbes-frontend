import { NavLink } from "react-router-dom";
import "./Nav.css";

/** Nav
 *
 * Contains links to '/', '/companies' and '/jobs'
 *
 * App -> Nav
 *
 */

function Nav() {
  return (
    <nav className="Navigation navbar navbar-expand-md">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/" end>
          Jobber the Hutt
        </NavLink>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item me-4">
            <NavLink className="nav-link" to="/companies" end>
              Companies
            </NavLink>
          </li>
          <li className="nav-item me-4">
            <NavLink className="nav-link" to="/jobs" end>
              Jobs
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
