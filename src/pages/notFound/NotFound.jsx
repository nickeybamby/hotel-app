import { Link } from "react-router-dom";
import "./notFound.css";

const NotFound = () => {
  return (
    <>
      <section className="notfound__section">
        <div className="container notfound__container">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>
            It's a shock the page you were looking for is no where to be found.{" "}
            <br /> Try one of these instead.
          </p>

          <div className="notfound__btns">
            <Link to="/" className="btn notBot">
              Go Back Home
            </Link>
            <Link to="/rooms" className="btn">
              View Rooms
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
