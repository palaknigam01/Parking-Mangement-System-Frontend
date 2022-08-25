import React from "react";
// import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/home">
              Divine Parking
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to={"/home"}>Home</Link>
            </li>
            <li>
              <Link to={"/view-slots"}>Available Slots</Link>
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
            <li>
              <Link to={"/log-in"}>
                <span className="glyphicon glyphicon-log-in"></span> Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navigation;
