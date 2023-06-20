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
        <h1 className="Homepage-title mb-4 fw-bold">Calvin and Jobbes</h1>
        {user ? (
          <p className="Homepage-welcome lead">Welcome, {user.username}!</p>
        ) : (
          <div className="Homepage-stranger">
            <p className="Homepage-slogan lead">Find Your Dream Job</p>
            <p className="Homepage-info">
              A job searching app written in React and Express.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Homepage;
