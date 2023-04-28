import "./App.css";
import Nav from "./Nav";
import RoutesList from "./RoutesList";
import { BrowserRouter } from "react-router-dom";
import JoblyApi from "./api";
import userContext from "./userContext";
import { useState, useEffect } from "react";

const DEFAULT_USER = { username: null };

/** App
 *
 * App -> Nav
 * App -> RoutesList
 */

// email, firstName, isAdmin, lastName, userName

function App() {
  const [user, setUser] = useState(DEFAULT_USER);
  const [token, setToken] = useState(null);

  console.log(user, "THE CURRENT USER");
  console.log(token, "THE CURR TOKEN");

  useEffect(
    function fetchUserOnTokenChange() {
      async function getUser() {
        const user = await JoblyApi.getUser(user, token);
        setUser(user);
      }
      if (token) getUser();
    },
    [token]
  );

  // function for login
  async function handleLogin(formData) {
    const token = await JoblyApi.loginUser(formData);
    setUser(formData.username);
    setToken(token);
  }

  // function for signup
  async function handleSignup(formData) {
    const token = await JoblyApi.registerUser(formData);
    setToken(token);
  }

  // function for edit user
  async function handleProfileEdit(formData) {
    try {
      const user = await JoblyApi.editUser(formData);
      setUser(user);
    } catch (err) {
      return err;
    }
  }

  console.log(user, "DID WE GET NEW USER????");

  return (
    <div className="App">
      <userContext.Provider value={{ user }}>
        <BrowserRouter>
          <Nav />
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
