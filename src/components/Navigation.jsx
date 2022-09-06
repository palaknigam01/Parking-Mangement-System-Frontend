import React from "react";
// import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Link, NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./Navigation.css";

const removeUser = sessionStorage.getItem("token");
const Logout = () => {
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
            <Link to={"/"} className="navbar-brand">
              Divine Parking
            </Link>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to={"/"}>Home </Link>
            </li>
            <li className="dropdown">
              <Link to={"/slots"}>
                Slots
                <div className="dropdown-content">
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
            {sessionStorage.getItem("token") ? (
              <>
                <li>
                  <NavLink to={""}>
                    <span
                      className="glyphicon glyphicon-log-out"
                      type="button"
                      onClick={Logout}
                    ></span>
                    Logout
                  </NavLink>
                  <ToastContainer />
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to={"/log-in"}>
                    <span className="glyphicon glyphicon-log-in"></span> Login
                  </NavLink>
                  <ToastContainer />
                </li>
                <li>
                  <NavLink to={"/sign-up"}>
                    <span className="glyphicon glyphicon-user"></span> Sign Up
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navigation;
