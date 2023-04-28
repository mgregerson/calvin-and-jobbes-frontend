import "./App.css";
import Nav from "./Nav";
import RoutesList from "./RoutesList";
import { BrowserRouter } from "react-router-dom";
import JoblyApi from "./api";
import userContext from "./userContext.js";
import { useState, useEffect } from "react";

/** App
 *
 * State:
 *       - user: { username, firstName, lastName, email, isAdmin, applications}
 *       - currUser: string
 *       - token: string
 *
 *
 * App -> Nav
 * App -> RoutesList
 */

function App() {
  const [user, setUser] = useState(null);
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useState(null);

  /** Updates state for user and token whenever token, currUser changes */
  useEffect(
    function fetchUserOnTokenChange() {
      async function getUser() {
        const user = await JoblyApi.getUser(currUser, token);
        setUser(user);
      }
      if (token) getUser();
    },
    [token, currUser]
  );

  /** Makes api call to log in user, updates state for currUser and token */
  async function handleLogin(formData) {
    const token = await JoblyApi.loginUser(formData);
    setCurrUser(formData.username);
    setToken(token);
  }

  /** Makes api call to sign up new user, updates tate for currUser and token */
  async function handleSignup(formData) {
    const token = await JoblyApi.registerUser(formData);
    setCurrUser(formData.username);
    setToken(token);
  }

  /** Sets all states to null (logs out user) */
  function logOut(formData) {
    setUser(null);
    setCurrUser(null);
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
