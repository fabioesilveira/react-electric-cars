import { Link } from "react-router-dom";

function NotFound() {
    return(
        <div>
            <h3>This page does not exist.</h3>
            <Link to="/">
            Back to main page.
            </Link>
        </div>
    )
};

export default NotFound;