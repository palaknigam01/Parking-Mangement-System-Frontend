import React from "react";
import "./Banner.css";

const Banner = () => {
  const mystyle = {
    position: "relative",
    backgroundPosition: "center",
    backgroundImage: `url("https://imageio.forbes.com/specials-images/imageserve/1142143072/0x0.jpg?format=jpg&width=1200")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "600px",
    width: "100%",
  };
  return (
    <div>
      <div className="banner">
        <div style={mystyle}>
          <h1 className="text-content">
              Finding parking shouldn’t be a hassle. <br></br>
              Let’s get you parked and on to the bigger things.
          </h1>
        </div>

        <div className="text">
          <h1 className="text-lg-center"><b>WE HAVE A SPOT FOR YOU.®</b></h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
