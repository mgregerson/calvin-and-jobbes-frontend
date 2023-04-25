import { NavLink } from "react-router-dom";

/** Nav
 *
 * Contains links to '/', '/companies' and '/jobs'
 *
 * App -> Nav
 *
 */

function Nav() {
  return (
    <nav className="Nav navbar navbar-expand-md">
      <NavLink to="/" end>
        Jobly
      </NavLink>
      <NavLink to="/companies" end>
        Companies
      </NavLink>
      <NavLink to="/jobs" end>
        Jobs
      </NavLink>
    </nav>
  );
}

export default Nav;