import React from "react";
import "../Skills/skills.css";
import html5 from "../../assets/img/skills/html-5.svg";
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
        <div
          className="card text-white border-primary bg-transparent mb-3"
          id="card"
        >
          {/* <div className="card-header">Header</div> */}
          <div className="card-body">
            <h5 className="card-title">HTML5</h5>
            <p className="card-text">
              It is a markup language that defines the structure and layout of
              web pages and is supported by all modern web browsers.
            </p>
            <Image src={html5} height="70px" width="70px"></Image>
          </div>
        </div>

        <div class="card text-white border-secondary bg-transparent mb-3">
          {/* <div class="card-header">Header</div> */}
          <div class="card-body">
            <h5 class="card-title">CSS3</h5>
            <p class="card-text">
              It is an integral part of web development and works alongside HTML
              to define the visual appearance and layout of web pages.
            </p>
            <Image src={css3} height="70px" width="70px"></Image>
          </div>
        </div>

        <div class="card text-white border-success bg-transparent mb-3">
          {/* <div class="card-header">Header</div> */}
          <div class="card-body">
            <h5 class="card-title">BOOTSTRAP</h5>
            <p class="card-text">
              Bootstrap is a popular front-end framework that helps developers
              create responsive and mobile-first websites and web applications.
            </p>
            <Image src={bootstrap} height="70px" width="70px"></Image>
          </div>
        </div>

        <div class="card text-white border-warning bg-transparent mb-3">
          {/* <div class="card-header">Header</div> */}
          <div class="card-body">
            <h5 class="card-title">JAVASCRIPT</h5>
            <p class="card-text">
              JavaScript is a high-level programming language primarily used for
              developing interactive and dynamic web applications. It is often
              referred to as the "language of the web".
            </p>
            <Image src={js} height="70px" width="70px"></Image>
          </div>
        </div>

        <div class="card text-white border-danger bg-transparent mb-3">
          {/* <div class="card-header">Header</div> */}
          <div class="card-body">
            <h5 class="card-title">REACTJS</h5>
            <p class="card-text">
              ReactJS, commonly referred to as React, is an open-source
              JavaScript library used for building user interfaces (UI) and
              single-page applications.
            </p>
            <Image src={react} height="70px" width="70px"></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frontend;
