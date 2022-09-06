import React, { useState } from "react";
import "./Sign-in.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignInComponent = () => {
  let navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();

    const item = { user: { email, password } };
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
      console.log(item);
      axios
        .post("https://3413-122-168-72-226.in.ngrok.io/users/sign_in", item)
        .then((res) => {
          console.log(res);
          sessionStorage.setItem("token", JSON.stringify(res.data.token));
          console.log(res.data.token);
          toast.success("Login Sucsess....!");
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          console.log(err.message);
        });
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
                    onChange={(e) => setemail(e.target.value)}
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
                    onChange={(e) => setpassword(e.target.value)}
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
