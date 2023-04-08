import React from "react";
import "../Skills/skills.css";
import express from "../../assets/img/skills/express.svg";
import node from "../../assets/img/skills/nodejs.svg";
import { Image } from "react-bootstrap";

const Backend = () => {
  return (
    <>
      <div id="parent">
      <h4>BACKEND TECHNOLOGIES</h4>
        <div class="card text-white border-warning bg-transparent mb-3">
          {/* <div class="card-header">Header</div> */}
          <div class="card-body">
            <h5 class="card-title">EXPRESS JS</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Image
            src={express}
            height="70px"
            width="70px"></Image>
          </div>
        </div>

        <div class="card text-white border-info bg-transparent mb-3">
          {/* <div class="card-header">Header</div> */}
          <div class="card-body">
            <h5 class="card-title">NODE JS</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Image
            src={node}
            height="70px"
            width="70px"></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default Backend;
