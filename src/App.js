import "./App.css";
import Nav from "./Nav";
import RoutesList from "./RoutesList";
import { BrowserRouter } from "react-router-dom";
import JoblyApi from "./api";
import userContext from "./userContext.js";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

/** App
 *
 * Props: None
 *
 * State:
 *       - user: { username, firstName, lastName, email, isAdmin, applications}
 *       - token: null -> string
 *
 *
 * App -> Nav
 * App -> RoutesList
 */

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  console.log(user, "THE USER STATE");
  console.log(token, "THE USER STATE");

  /** Updates state for user and token whenever token changes */
  useEffect(
    function fetchUserOnTokenChange() {
      async function getUser(username) {
        const user = await JoblyApi.getUser(username, token);
        setUser(user);
      }
      if (token) {
        const { username } = jwt_decode(token);
        localStorage.setItem("token", JSON.stringify(token));
        console.log(localStorage.getItem("token"), "THE LOCAL STORAGE");
        getUser(username);
      }
    },
    [token]
  );

  /** Makes api call to log in user, updates state token */
  async function handleLogin(formData) {
    const token = await JoblyApi.loginUser(formData);
    setToken(token);
  }

  /** Makes api call to sign up new user, updates state for token */
  async function handleSignup(formData) {
    const token = await JoblyApi.registerUser(formData);
    setToken(token);
  }

  /** Sets all states to null (logs out user) */
  function logOut(formData) {
    setUser(null);
    setToken(null);
  }

  /** TODO: Work on this */
  async function handleProfileEdit(formData) {
    try {
      const user = await JoblyApi.editUser(formData);
      setUser(user);
    } catch (err) {
      return err;
    }
  }

  return (
    <div className="App">
      <userContext.Provider value={{ user }}>
        <BrowserRouter>
          <Nav logOut={logOut} />
          <RoutesList
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            handleProfileEdit={handleProfileEdit}
          />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
