import { NavLink } from "react-router-dom";
import "./Nav.css";
import { useContext } from "react";
import userContext from "./userContext.js";
import jwt_decode from "jwt-decode";

/** Nav
 *
 * Contains links to '/', '/companies', '/jobs', '/login', '/signup', '/profile'
 *
 * Props:
 *        - logOut: function that handles logging out a user
 *
 * App -> Nav
 *
 */

function Nav({ logOut }) {
  // const { user } = useContext(userContext);

  const token = localStorage.getItem("token");
  const { username } = jwt_decode(token);
  console.log(username, "THE USERNAME IN NAV");

  return (
    <nav className="Navigation navbar navbar-expand-md">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/" end>
          Jobber the Hutt
        </NavLink>

        {token ? (
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
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/profile" end>
                Edit Profile
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/" onClick={logOut} end>
                Log out {username}
              </NavLink>
            </li>
          </ul>
        ) : (
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/login" end>
                Login
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/signup" end>
                Sign Up
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Nav;
