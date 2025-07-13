// import PropTypes from "prop-types";

import { Link } from "react-router-dom";

export default function Navbar({title, mode, changeMode}) {

  const alterMode = mode === "light" ? "dark":"light";

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            {/* <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button> */}
            <div className="form-check form-switch text-white">
              <input
                className={`form-check-input bg-${mode}`}
                type="checkbox"
                role="switch"
                id="switchCheckDefault"
                onClick={changeMode}
              />
              <label className={`form-check-label text-${alterMode}`} htmlFor="switchCheckDefault">
                {`Enable ${alterMode[0].toUpperCase() + alterMode.slice(1)} Mode`}
              </label>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

//Setting expected prop types so we get an error if we unexpectedly pass wrong type;
// Navbar.propTypes = {
//   title: PropTypes.string,
// };

//Setting default values if we dont pass any values;
// Navbar.defaultProps = {
//   title: "Navbar",
// };
