import React from "react";
// import Typewriter from "typewriter-effect";
import styled from "styled-components";
// import FloatButtons from "../float-buttons/float-button";
import "../title-msg/title-msg.css";


// props.theme.themecolor came from our theme.js as in index.js we have wrapped it in themeprovider
const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 25rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;

  strong {
    font-size: 1.25em;
  }
  div {
    color: ${(props) => props.theme.textColor};

    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;

    .main {
      font-size: 40px;
      color: white;
      font-family: League Spartan;
      font-weight: bold;
    }

    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
          Hi, I am <strong>Sanhita</strong>
          <br />
          <span>I develop websites..</span>
        </div>
        <div className="contact-button">
        {/* <FloatButtons/> */}
        </div>
      </div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;
