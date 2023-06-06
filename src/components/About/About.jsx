import React from "react";
import "../About/about.css";


const About = () => {

  return (
    <>
      <div id="about">
        <h2 className="text-center p-3">ABOUT ME</h2>
        <div className="row d-flex justify-content-evenly" id="aboutcontent">
          {/* <div className="bg-img">this is bg image</div> */}
        </div>
        <div className="col-md-5 d-flex align-items-center" id="textAbout">
          <div id="Abouttext">
            <p>
              Hi, I'm a trained MERN stack developer who is more interested to
              work in the field of frontend development. I have a relevant
              experience of working as a Reactjs developer
            </p>
            <br />
            <p>
              Apart from the development, I'm passionate about mentorship and
              have been involved in training the students for the past two
              years. I have spoken virtually as a guest speaker in few of the
              webinars conducted by Ed tech startups.
            </p>
            <br />
            <p>
              Being a people's person, I was fortunate enough to gain experience
              as a Business Development Executive. During my time in the role, I
              was the in-charge of end to end processing for sourcing of
              developers on C2C or C2H basis. Managing the developers pool as
              well as companies and clients pool and communicating throughout
              the process was associated with my designation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
