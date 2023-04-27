import "./App.css";
import Nav from "./Nav";
import RoutesList from "./RoutesList";
import { BrowserRouter } from "react-router-dom";
import JoblyApi from "./api";
import userContext from "./UserContext";
import { useState } from "react";

const DEFAULT_PREFS = {};

/** App
 *
 * App -> Nav
 * App -> RoutesList
 */

// email, firstName, isAdmin, lastName, userName

function App() {
  // state for prefs
  const [prefs, setPrefs] = useState(DEFAULT_PREFS);
  // function for login
  async function handleLogin(formData) {
    try {
      const token = await JoblyApi.handleLogin(formData);
      const user = await JoblyApi.getUser(formData.username, token);
      updatePrefs(user);
    } catch (err) {
      return err;
    }
  }
  // function for signup
  async function handleSignup(formData) {
    try {
      const token = await JoblyApi.handleSignup(formData);
      const user = await JoblyApi.getUser(formData.username, token);
      updatePrefs(user);
    } catch (err) {
      return err;
    }
  }
  // function for edit user
  async function handleProfileEdit(formData) {
    try {
      const user = await JoblyApi.editUser(formData);
      updatePrefs(user);
    } catch (err) {
      return err;
    }
  }

  function updatePrefs(newPrefs) {
    setPrefs(newPrefs);
  }

  console.log(prefs, "DID WE GET NEW PREFS????");

  return (
    <div className="App">
      <userContext.Provider value={prefs}>
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
