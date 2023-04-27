import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import NotFound from "./NotFound";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";

/** RoutesList
 *
 * Contains site-wide routes + global 404 (add expl)
 *
 * App -> RoutesList
 *
 */

function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<LoginForm />}></Route>
      <Route path="/signup" element={<SignupForm />}></Route>
      <Route path="/profile" element={<ProfileForm />}></Route>
      <Route path="/companies" element={<CompanyList />}></Route>
      <Route path="/companies/:handle" element={<CompanyDetail />}></Route>
      <Route path="/jobs" element={<JobList />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default RoutesList;
