import React, { useEffect, useState } from "react";
import "./Card.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const api = "https://3413-122-168-72-226.in.ngrok.io/slots-by-floor/1";
const token = JSON.parse(sessionStorage.getItem("token"));
console.log(token);
const headers = {
  "Content-Type": "application/json",
  Authorization: token,
  "ngrok-skip-browser-warning": "*",
};

const Cards = () => {
  const [slot, setSlot] = useState("");
  const [client_name, setClient_name] = useState("");
  const [car_colour, setCar_Color] = useState("");
  const [car_no, setCar_no] = useState("");
  const [intime, setIntime] = useState("");
  const [outtime, setOuttime] = useState("");

  useEffect(() => {
    data();
  }, []);

  const data = () => {
    axios
      .get(api, { headers })
      .then((res) => {
        console.log(token);
        console.log(res.data);
        setSlot(res.data);
        console.log("--------------slot", slot);
      })
      .catch((err) => {
        alert("error");
        console.log(err);
      });
  };

  const handleFocus = (floor_id, slot_id) => {
    console.log(floor_id, slot_id);
    let items = {
      booking: {
        client_name,
        car_colour,
        car_no,
        floor_id,
        slot_id,
        intime,
        outtime,
      },
    };
    //console.log("itesms", items);
    if (client_name === "") {
      toast.warning("Name Is Required");
    } else if (car_colour === "") {
      toast.warning("Colour Is Required");
    } else if (car_no === "") {
      toast.warning("Car number is Required");
    } else if (intime === "") {
      toast.warning("In time is Required");
    } else if (outtime === "") {
      toast.warning("Out Time is Required");
    } else {
      axios
        .post("https://3413-122-168-72-226.in.ngrok.io/bookings", items, {
          headers,
        })
        .then((res) => {
          console.log(res);
          toast.success("Slot Booked Sucsesfully....!");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Somthing went wrong plz try agian later....");
        });
    }
  };

  return (
    <div>
      <div className="contaniner">
        {slot && slot.length > 0
          ? slot.map((slots, index) => (
              <Card className="img" key={slots.id} sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vacant-car-parking-space-royalty-free-image-1591721505.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Slot no.{slots.number}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    data-toggle="modal"
                    data-target="#myModal"
                  >
                    BOOK NOW
                  </Button>
                </CardActions>
                <div>
                  <div id="myModal" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                          >
                            &times;
                          </button>
                          <h3 className="modal-title">Booking Details</h3>
                        </div>
                        <div className="form-group">
                          <label>Client Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="carnumber"
                            placeholder="Your car number"
                            value={client_name}
                            name="client_name"
                            onChange={(e) => setClient_name(e.target.value)}
                          />
                        </div>
                        <div className="modal-body">
                          <div className="form-group">
                            <label>Car Number</label>
                            <input
                              type="text"
                              className="form-control"
                              id="carnumber"
                              placeholder="Your car number"
                              value={car_no}
                              name="car_no"
                              onChange={(e) => setCar_no(e.target.value)}
                            />
                          </div>
                          <div className="form-group">
                            <label>Color Of Your Car</label>
                            <input
                              type="text"
                              className="form-control"
                              id="carcolour"
                              placeholder="colour of your car"
                              value={car_colour}
                              name="car_colour"
                              onChange={(e) => setCar_Color(e.target.value)}
                            />
                          </div>
                          <div className="form-group">
                            <label>In Time</label>
                            <input
                              type="time"
                              className="form-control"
                              id="in-time"
                              placeholder="in time"
                              value={intime}
                              name="intime"
                              onChange={(e) => setIntime(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Out Time</label>
                          <input
                            type="time"
                            className="form-control"
                            id="out-time"
                            placeholder="out time"
                            value={outtime}
                            name="outtime"
                            onChange={(e) => setOuttime(e.target.value)}
                          />
                        </div>

                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-warning"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          {console.log("-----------", slots.id, slots.floor_id)}
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-dismiss="modal"
                            // onMouseOver={()=>handleFocus(slots.id, slots.floor_id)}
                            onClick={() =>
                              handleFocus(slots.id, slots.floor_id)
                            }
                          >
                            Book
                          </button>
                          <ToastContainer />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))
          : "data not found"}
      </div>
    </div>
  );
};
export default Cards;
