import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import NotFound from "./NotFound";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Unauthorized from "./Unauthorized";
import ProfileForm from "./ProfileForm";
import { useContext } from "react";
import userContext from "./userContext.js";

/** RoutesList
 *
 * Contains site-wide routes + global 404 + global 403 (for non-user accessing protected routes)
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
  const { user } = useContext(userContext);

  console.log(user, "USER IN ROUTES LIST");

  if (user) {
    return (
      <Routes>
        <Route path="/" element={<Homepage user={user} />}></Route>
        <Route path="/companies" element={<CompanyList />}></Route>
        <Route path="/companies/:handle" element={<CompanyDetail />}></Route>
        <Route path="/jobs" element={<JobList />}></Route>
        <Route path="/profile" element={<ProfileForm handleProfileEdit={handleProfileEdit} />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Homepage user={user} />}></Route>
      <Route
        path="/login"
        element={<LoginForm handleLogin={handleLogin} />}
      ></Route>
      <Route
        path="/signup"
        element={<SignupForm handleSignup={handleSignup} />}
      ></Route>
      <Route path="/companies" element={<Unauthorized />}></Route>
      <Route path="/companies/:handle" element={<Unauthorized />}></Route>
      <Route path="/jobs" element={<Unauthorized />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default RoutesList;
