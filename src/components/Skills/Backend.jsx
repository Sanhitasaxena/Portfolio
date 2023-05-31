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
              Express.js is a minimal and flexible web application framework for
              Node.js, a JavaScript runtime environment. 
            </p>
            <Image src={express} height="70px" width="70px"></Image>
          </div>
        </div>

        <div class="card text-white border-info bg-transparent mb-3">
          {/* <div class="card-header">Header</div> */}
          <div class="card-body">
            <h5 class="card-title">NODE JS</h5>
            <p class="card-text">
              Node.js is an open-source, cross-platform JavaScript runtime
              environment built on Chrome's V8 JavaScript engine that allows
              developers to execute JS code outside of a web browser,on
              the server-side.
            </p>
            <Image src={node} height="70px" width="70px"></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default Backend;
