import React from "react";
import "../Skills/skills.css";
import html5 from "../../assets/img/skills/html-5.svg"
import css3 from "../../assets/img/skills/css3.svg";
import bootstrap from "../../assets/img/skills/bootstrap-4.svg";
import react from "../../assets/img/skills/react.svg";
import js from "../../assets/img/skills/javascript.svg";
import { Image } from "react-bootstrap";

const Frontend = () => {
  return (
    <>
      <div id="parent">
        <h4>FRONTEND TECHNOLOGIES</h4>
        <div className="card text-white border-primary bg-transparent mb-3" id="card">
          {/* <div className="card-header">Header</div> */}
          <div className="card-body">
            <h5 className="card-title">HTML5</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Image 
            src={html5}
            height="70px"
            width="70px"></Image>
          </div>
        </div>

        <div class="card text-white border-secondary bg-transparent mb-3">
          {/* <div class="card-header">Header</div> */}
          <div class="card-body">
            <h5 class="card-title">CSS3</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Image 
            src={css3}
            height="70px"
            width="70px"></Image>
          </div>
        </div>

        <div class="card text-white border-success bg-transparent mb-3">
          {/* <div class="card-header">Header</div> */}
          <div class="card-body">
            <h5 class="card-title">BOOTSTRAP</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Image 
            src={bootstrap}
            height="70px"
            width="70px"></Image>
          </div>
        </div>

        <div class="card text-white border-warning bg-transparent mb-3">
          {/* <div class="card-header">Header</div> */}
          <div class="card-body">
            <h5 class="card-title">JAVASCRIPT</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Image 
            src={js}
            height="70px"
            width="70px"></Image>
          </div>
        </div>

        <div class="card text-white border-danger bg-transparent mb-3">
          {/* <div class="card-header">Header</div> */}
          <div class="card-body">
            <h5 class="card-title">REACTJS</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Image 
            src={react}
            height="70px"
            width="70px"></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frontend;
