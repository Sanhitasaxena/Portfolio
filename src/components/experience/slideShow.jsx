import React from "react";
import Card from "./Card";
import Carousel from "react-bootstrap/Carousel";
import "../experience/Card.css";
import typnew from "../../assets/img/experience/typ3.png"
import bbnew from "../../assets/img/experience/bb2.jpg"
import gvnew from "../../assets/img/experience/gv2.png"

const SlideShow = () => {
  // console.log(props.slide)
  return (
    <>
      <div id="parent">
        <Carousel variant="light">
          <Carousel.Item>
            <Card
              name="The Youth Project"
              designation="Frontend developer"
              image={typnew}
              experience={`"During my time as a frontend developer, I got the 
            opportunity to work with the industry experts and gain knowledge. 
            I worked with Reactjs to integrate the APIs as well as mapping the data. 
            In addition to that, I worked with the responsive web design and built
            proper responsive components".  
            `}
            />
          </Carousel.Item>

          <Carousel.Item>
            <Card
              name="The Youth Project"
              designation="Business development executive"
              image={typnew}
              experience={`"Coming from a tech background, it was a bit tricky for me
              to work in a non-technical profile. However, as a part of my role, I was responsible
              for setting up the company's network with the clients and client companies. 
              *Maintaining the pool of company's and resources through MS Excel. 
              *Working on C2C and C2H model to source our resources on contract basis."
            `}
            />
          </Carousel.Item>

          <Carousel.Item>
            <Card
              name="GrapeVine"
              designation="Campus Ambassador"
              image={gvnew}
              experience={`"Being a Campus Ambassador, I overcomed my fear of the people's 
              judgement(log kya khaenge) as it included tasks of creating the videos and posting
              it on social media. To be part here, helped me interact with a number of people
              from different parts of the country and spend quality time with them. 
              We colaborated with big brands like Amazon and ZingTv.
              
              In this journey I transformed myself from being an Ambivert to being an Extrovert."
              `}
            />
          </Carousel.Item>

          <Carousel.Item>
            <Card
              name="Byte Brackets"
              designation="Reactjs Intern"
              image={bbnew}
              experience={`"Though it was a comparetively short span of time at Byte Brackets,
              it definetly taught me many things. I learnt to handle work pressure(pretty well).
              I worked with React to develop the UI and embed it with functionalities.
              Most importantly, I had an experience of connecting directly with the client and understanding their needs
              for the project." 
              `}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default SlideShow;
