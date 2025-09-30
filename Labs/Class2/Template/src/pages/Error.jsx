import { Link } from "react-router-dom";

export default function Error() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center p-4 bg-light">
            <h1 className="display-1 text-danger">404</h1>
            <h2 className="mb-3">Oops! Page Not Found</h2>
            <p className="mb-4 text-muted">
                The page you are looking for does not exist or may have been moved.
                Please check the URL or return to the homepage.
            </p>
            <Link to="/" className="btn btn-primary btn-lg">
                Go to Home
            </Link>
        </div>
    );
}