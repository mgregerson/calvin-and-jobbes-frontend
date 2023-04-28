import "./Homepage.css";

/** Homepage
 *
 * Props: user {username, firstName, lastName, email, applications: []}
 * State: None
 *
 * App -> Homepage
 */

function Homepage({ user }) {
  return (
    <div className="Homepage">
      <div className="container text-center my-auto">
        <h1 className="mb-4 fw-bold">Jobber the Hutt</h1>
        {user ? (
          <p className="lead">Welcome, {user.username}!</p>
        ) : (
          <p className="lead">Find Your Dream Job</p>
        )}
      </div>
    </div>
  );
}

export default Homepage;
