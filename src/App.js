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
  return (<div className="App">
    <BrowserRouter>
      <Nav />
      <RoutesList />
    </BrowserRouter>
  </div>);
}

export default App;
