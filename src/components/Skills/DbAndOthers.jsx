import React from "react";
import { Image } from "react-bootstrap";
import mongoDb from "../../assets/img/skills/mongodb.svg";
import "../Skills/skills.css";

const DbAndOthers = () => {
  return (
    <>
      <div id="parent">
        <h4>DATABASES</h4>
        <div class="card border-light bg-transparent mb-3">
          {/* <div class="card-header">Header</div> */}
          <div class="card-body">
            <h5 class="card-title">MONGODB</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Image 
            src={mongoDb}
            height="70px"
            width="70px"></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default DbAndOthers;
