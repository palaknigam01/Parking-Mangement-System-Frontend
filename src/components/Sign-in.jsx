
import React, { useState } from "react";
import "./Sign-in.css";
import { useNavigate } from "react-router-dom";
//import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignInComponent = () => {
  let navigate = useNavigate();
  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);

  //console.log(inpval);

  const getData = (e) => {
    //console.log(e.target.value);

    const { value, name } = e.target;
    //console.log(value,name);
    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const onLogin = (e) => {
    e.preventDefault();
    //console.log(inpval);

    const { name, email, password, confirmPassword } = inpval;
     if (email === "") {
      //alert("Email Is Required..!");
      toast.warning("Email Is Required..!");
    } else if (!email.includes("@")) {
      //alert("Please Enter Valid Email-Id");
      toast.warning("Please Enter Valid Email-Id");
    } else if (password === "") {
      //alert("Password Is Required..!");
      toast.warning("Password Is Required..!");
    } else {
      // localStorage.setItem("user", JSON.stringify([...data, inpval]));

      
    //   //alert("Ragister Succesfuly....!");
    //   axios
    //     .post("https://090e-223-236-34-156.in.ngrok.io/users/users", inpval)
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       console.log(err.message);
    //     });
      toast.success("Login Succesfuly....!");
      navigate("/home");
    }
  };

  return (
    <div>
      <div className="container register-form">
        <div className="form">
          <div className="note">
            <p>Login Form</p>
          </div>

          <div className="form-content">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email *"
                    name="email"
                    onChange={getData}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Your Password *"
                    name="password"
                    onChange={getData}
                  />
                </div>
              </div>
            </div>
            <button type="button" className="btnSubmit" onClick={onLogin}>
              <ToastContainer />
              Log-In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInComponent;
