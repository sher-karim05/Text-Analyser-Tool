import React from "react";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <a className="navbar-brand" href="/">
        {props.title}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li>
          </li>
        </ul>
      </div>
        <div className={`form-check form-switch text-${props.mode === "dark"?"white":"black"}`}>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            roles="aria-checked"
            onClick={props.toggleMode}
            aria-checked='false'
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Enable DarkMode
          </label>
        </div>
    </nav>
  );
}
