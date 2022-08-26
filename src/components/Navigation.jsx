import React from "react";
// import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


const logout = () =>{
  const removeUser = localStorage.getItem("user");
  if(removeUser){
    localStorage.removeItem("user");
    console.log("remove");
    toast.success("...Log-out...");
  } else {
    toast.error("Register First..!!");
    
  }
}

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
              <Link to={"/avl-sloats"}>Available Slots</Link>
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
            <li>
              <Link to={""}>
                <span className="glyphicon glyphicon-log-out" type="button" onClick={logout}></span> Logout
              </Link>
              <ToastContainer />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navigation;
