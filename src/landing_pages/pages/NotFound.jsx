import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: "70vh" }}>
      <div className="text-center">

        <h1 className="display-1 fw-bold text-dark">404</h1>

        <h4 className="fw-semibold mt-3">
          Oops! Page not found
        </h4>

        <p className="text-muted mt-2 mb-4">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link to="/" className="btn btn-dark px-4">
          Go to Home
        </Link>

      </div>
    </div>
  );
}

export default NotFound;
