import "./App.css";
import Nav from "./Nav";
import RoutesList from "./RoutesList";
import { BrowserRouter } from "react-router-dom";

/** App
 *
 * App -> Nav
 * App -> RoutesList
 */

function App() {

  // state for prefs
  // function for login
  // function for signup
  // function for edit user


  return (<div className="App">
    {/* Put in usercontext tags */}
    <BrowserRouter>
      <Nav />
      <RoutesList />
    </BrowserRouter>
  </div>);
}

export default App;
