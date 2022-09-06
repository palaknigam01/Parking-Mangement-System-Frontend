import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs-12">
              <div className="first">
                <h4>About US</h4>
                <p> Analytical Skills</p>
                <p> Problem-solving skills</p>
                <p> Critical-thinking skills</p>
                <p> Detail-oriented</p>
                <p> Multitasking</p>
                <p> Self-motivated</p>
              </div>
            </div>

            <div className="col-md-4 col-xs-12">
              <div className="second">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/sloats"}>Available Sloot</Link>
                  </li>
                  <li>
                    <Link to={"/abput-us"}>About</Link>
                  </li>
                  <li>
                    <Link to={"/contect-us"}>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4 col-xs-12">
              <div className="third">
                <h4>Contact</h4>
                <ul>
                  <li>Divine Parking</li>

                  <li>
                    <i className="far fa-envelope"></i> Divineparkmang@email.com
                  </li>

                  <li>
                    <i className="fas fa-map-marker-alt"></i> Indore, MP{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="line"></div>
              <div className="second2">
                <Link to={"https://codepen.io/AndreeaBunget"}>
                  {" "}
                  <i className="fab fa-codepen fa-2x margin"></i>
                </Link>
                <Link to="https://github.com/WebDeveloperCodeRep">
                  {" "}
                  <i className="fab fa-github fa-2x margin"></i>
                </Link>
                <Link
                  to={
                    "https://www.linkedin.com/in/andreea-mihaela-bunget-a4248812b/"
                  }
                >
                  {" "}
                  <i className="fab fa-linkedin fa-2x margin"></i>
                </Link>
                <Link
                  to={
                    "https://www.youtube.com/channel/UCX674BUbomzBCakbb75lhfA?view_as=subscriber"
                  }
                >
                  <i className="fab fa-youtube fa-2x margin"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
