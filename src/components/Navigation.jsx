import React from "react";
// import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./Navigation.css";

const removeUser = sessionStorage.getItem("token");

const logout = () => {
  if (removeUser) {
    sessionStorage.removeItem("token");
    toast.success("...Log-out...");
  } else {
    toast.error("!!...Register First..!!");
  }
};

const Navigation = () => {
  return (
    <div className>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            {/* <img className="logo" src="https://cdn4.vectorstock.com/i/1000x1000/41/33/dp-monogram-logo-vector-33144133.jpg" alt="img"/> */}
            <a className="navbar-brand" href="/">
              Divine Parking
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to={"/"}>Home </Link>
            </li>
            <li className="dropdown">
              <Link to={"/slots"}>
                Slots
                <div class="dropdown-content">
                  <Link to={"/flor-1"}>Flor no: 1</Link>
                  <Link to={"/flor-2"}>Flor no: 2</Link>
                  <Link to={"/flor-3"}>Flor no: 3</Link>
                </div>
              </Link>
            </li>
            <li>
              <Link to={"/contect-us"}>Contect Us</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to={"/sign-up"}>
                <span className="glyphicon glyphicon-user"></span> Sign Up
              </Link>
            </li>
            {sessionStorage.getItem("token") ? (
              <li>
                <Link to={""}>
                  <span
                    className="glyphicon glyphicon-log-out"
                    type="button"
                    onClick={logout}
                  ></span>
                  Logout
                </Link>
                <ToastContainer />
              </li>
            ) : (
              <li>
                <Link to={"/log-in"}>
                  <span className="glyphicon glyphicon-log-in"></span> Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navigation;
