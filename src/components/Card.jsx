import React from "react";
import "./Card.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Cards = () => {
  return (
    <div>
      <div>
        <Card className="img" sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vacant-car-parking-space-royalty-free-image-1591721505.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Slot no.1
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" data-toggle="modal" data-target="#myModal">
              BOOK NOW
            </Button>
          </CardActions>
          <div>
            <div id="myModal" class="modal fade" role="dialog">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">
                      &times;
                    </button>
                    <h4 class="modal-title">Booking Details</h4>
                  </div>
                  <div class="modal-body">
                    <div class="form-group">
                      <label>Car Number</label>
                      <input
                        type="text"
                        class="form-control"
                        id="carnumber"
                        placeholder="Your car number"
                      />
                    </div>
                    <div class="form-group">
                      <label>Color Of Your Car</label>
                      <input
                        type="text"
                        class="form-control"
                        id="carcolour"
                        placeholder="colour of your car"
                      />
                    </div>
                    <div class="form-group">
                      <label>Slot no</label>
                      <input
                        type="number"
                        class="form-control"
                        id="slotnumber"
                        placeholder="slot number"
                      />
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-warning"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-dismiss="modal"
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default Cards;
