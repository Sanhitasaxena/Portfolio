
import SlideShow from "./slideShow";
import "../experience/Card.css"


const Experience = () => {
  return (
    <>
       <div id="exp-main" className="wrapper p-3">
        {/* <div className="wave"></div> */}
       <h2 className="text-center" id="exp">EXPERIENCE</h2>
       <SlideShow/>
       </div>
    </>
  );
};

export default Experience;
