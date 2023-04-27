import "./App.css";
import Nav from "./Nav";
import RoutesList from "./RoutesList";
import { BrowserRouter } from "react-router-dom";
import JoblyApi from "./api";
import userContext from "./userContext";
import { useState } from "react";
import SignupForm from "./SignupForm";


const DEFAULT_PREFS = { username: null };

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

    const token = await JoblyApi.loginUser(formData);
    const user = await JoblyApi.getUser(formData.username, token);
    updatePrefs(user);

  }
  // function for signup
  async function handleSignup(formData) {
    // try {
    const token = await JoblyApi.registerUser(formData);
    const user = await JoblyApi.getUser(formData.username, token);
    console.log("APP LEVEL SUBMIT", formData);
    updatePrefs(user);
    // } catch (err) {
    //   return <SignupForm handleSignup={handleSignup} />;
    // }
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
      <userContext.Provider value={{ prefs }}>
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
