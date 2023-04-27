import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import NotFound from "./NotFound";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";
import { useContext } from "react";
import userContext from "./UserContext";

/** RoutesList
 *
 * Contains site-wide routes + global 404 (add expl)
 *
 * Props:
 *
 *      - handleSignup: Func
 *      - handleLogin: Func
 *      - handleEditUser: Func
 *
 * App -> RoutesList
 *
 */

function RoutesList({ handleSignup, handleLogin, handleProfileEdit }) {
  const { prefs } = useContext(userContext);
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route
        path="/login"
        element={<LoginForm handleLogin={handleLogin} />}
      ></Route>
      <Route
        path="/signup"
        element={<SignupForm handleSignup={handleSignup} />}
      ></Route>
      <Route
        path="/profile"
        element={
          <ProfileForm
            currPrefs={prefs}
            handleProfileEdit={handleProfileEdit}
          />
        }
      ></Route>
      <Route path="/companies" element={<CompanyList />}></Route>
      <Route path="/companies/:handle" element={<CompanyDetail />}></Route>
      <Route path="/jobs" element={<JobList />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default RoutesList;
