import React from "react";
import "../float-buttons/float-button.scss"
import {BsLinkedin } from 'react-icons/bs';
import {AiFillInstagram } from 'react-icons/ai';
import {MdEmail } from 'react-icons/md';
import { Button } from "react-bootstrap";

const FloatButtons = () => {
  return (
    <>
      <div class="fab-container">
        <div class="fab shadow">
          <div class="fab-content">
            <span class="material-icons"><Button variant="warning">Contact me</Button></span>
            
          </div>
        </div>
        <div class="sub-button shadow">
          <a href="google.com" target="_blank">
            <span class="material-icons"><BsLinkedin/></span>
          </a>
        </div>
        <div class="sub-button shadow">
          <a href="google.com" target="_blank">
            <span class="material-icons"><AiFillInstagram/></span>
          </a>
        </div>
        <div class="sub-button shadow">
          <a href="google.com" target="_blank">
            <span class="material-icons"><MdEmail/></span>
          </a>
        </div>
        {/* <div class="sub-button shadow">
          <a href="google.com" target="_blank">
            <span class="material-icons">help_outline</span>
          </a>
        </div> */}
      </div>
    </>
  );
};

export default FloatButtons;
