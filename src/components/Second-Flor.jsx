import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Second-Flor.css";

const api = "https://3413-122-168-72-226.in.ngrok.io/slots-by-floor/2";
const token = JSON.parse(sessionStorage.getItem("token"));
console.log(token);
const headers = {
  "Content-Type": "application/json",
  Authorization: token,
  "ngrok-skip-browser-warning": "*",
};

const Second = () => {
  const [second, setSecond] = useState("");

  useEffect(() => {
    showData();
  }, []);

  const showData = () => {
    axios
      .get(api, { headers })
      .then((res) => {
        console.log(res.data);
        setSecond(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Second Floor</h2>
      <div className="container">
        {second && second.length > 0
          ? second.map((slots, index) => (
              <div className="card" key={slots.id}>
                <div className="content">
                  <h2 className="title">{slots.number}</h2>
                  <p className="data">
                    A data structure is a particular way of organizing data in a
                    computer so that it can be used effectively.
                  </p>
                </div>
              </div>
            ))
          : "data not found"}
      </div>
    </div>
  );
};

export default Second;
