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
        <NavLink to="/" end>
          <a className="navbar-brand">Jobly</a>
        </NavLink>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item me-4">
            <NavLink to="/companies" end>
              <a className="nav-link">Companies</a>
            </NavLink>
          </li>
          <li className="nav-item me-4">
            <NavLink to="/jobs" end>
              <a className="nav-link">Jobs</a>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
