import React, { useState } from "react";
import "./Sign-up.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupComponent = () => {
  let navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [password_confirmation, setpassword_confirmation] = useState("");

  const onRagister = (e) => {
    e.preventDefault();
    //console.log(inpval);
    const item = { user: { name, email, password, password_confirmation } };
    if (name === "") {
      //alert("Username Is Required..!");
      toast.warning("Username Is Required..!");
    } else if (email === "") {
      //alert("Email Is Required..!");
      toast.warning("Email Is Required..!");
    } else if (!email.includes("@")) {
      //alert("Please Enter Valid Email-Id");
      toast.warning("Please Enter Valid Email-Id");
    } else if (password === "") {
      //alert("Password Is Required..!");
      toast.warning("Password Is Required..!");
    } else if (password.length < 5) {
      //alert("Password length must be Greater Then Five..!");
      toast.warning("Password length must be Greater Then Five..!");
    } else if (password_confirmation === "") {
      toast.warning("Confirmation Is Required..!!");
    } else if (password !== password_confirmation) {
      toast.warning("password did not match..!");
    } else {
      axios
        .post("https://3413-122-168-72-226.in.ngrok.io/users", item)
        .then((res) => {
          console.log(res);
          toast.success("Ragister Succesfuly....!");
          navigate("/log-in");
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
            <p>Registrestion Form</p>
          </div>

          <div className="form-content">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name *"
                    name="name"
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>
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
                    onChange={(e) => setpassword(e)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password *"
                    name="password_confirmation"
                    onChange={(e) => setpassword_confirmation(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button type="button" className="btnSubmit" onClick={onRagister}>
              <ToastContainer />
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
