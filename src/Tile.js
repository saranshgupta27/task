import React from "react";
import "./tile.css";
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core/styles";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import image from "./live.png";
function Tile({ data }) {
  const {
    location,
    place,
    Start,
    End,
    Expected_yield,
    min_inv,
    IRR,
    funded,
    total_value,
    img,
  } = data;

  const PrettoSlider = withStyles({
    root: {
      color: " rgb(102, 14, 95)",
      height: 8,
      width: "100%",
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      marginTop: -8,
      marginLeft: -12,
      "&:focus, &:hover, &$active": {
        boxShadow: "inherit",
      },
    },
    active: {},
    valueLabel: {
      left: "calc(-50% + 4px)",
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);

  return (
    <div
      className="tile"
      style={{
        background: `url(${img})`,
      }}
    >
      <div className="content">
        <div className="location">
          <div className="location-name">
            <LocationOnIcon /> {location}
          </div>
          <img src={image} className="live-img" alt="live" />
        </div>
        <div className="heading">
          <div className="heading-text">
            <p>{place}</p>
          </div>
          <div className="links">
            <FacebookIcon fontSize={"inherit"} />
            <TwitterIcon fontSize={"inherit"} />
            <LinkedInIcon fontSize={"inherit"} />
            <InstagramIcon fontSize={"inherit"} />
          </div>
        </div>
        <div className="details">
          <div className="date-detail-box">
            <h1 className="left">
              Start:{Start}
              <br /> Expected Yield
              <br /> Min.Investment <br />
              Expected IRR
            </h1>
            <h1 className="right">
              End:{End} <br />
              {Expected_yield} <br />
              {min_inv}
              <br />
              {IRR}%
            </h1>
          </div>
        </div>
        <div className="footer-section">
          <div className="slider">
            <div className="slider-info">
              <p>{funded}% Funded</p> <p>{total_value} Crores</p>
            </div>

            <PrettoSlider
              valueLabelDisplay="auto"
              aria-label="value"
              defaultValue={parseInt(IRR)}
            />
          </div>
          <div className="button">
            <ArrowForwardIcon fontSize={"inherit"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tile;
