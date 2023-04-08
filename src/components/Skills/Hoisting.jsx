import "../Skills/skills.css"
import heroku from "../../assets/img/skills/heroku.svg";
import github from "../../assets/img/skills/github.svg";
import { Image } from "react-bootstrap";

const Hoisting = ()=>{
    return(
        <>
        <div id="parent">
        <h4>HOSTING PLATFORMS</h4>
        <div className="card text-white border-primary bg-transparent mb-3" id="card">
          {/* <div className="card-header">Header</div> */}
          <div className="card-body">
            <h5 className="card-title">HEROKU</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Image 
            src={heroku}
            height="70px"
            width="70px"></Image>
          </div>
        </div>
        <div class="card text-white border-secondary bg-transparent mb-3">
          {/* <div class="card-header">Header</div> */}
          <div class="card-body">
            <h5 class="card-title">GITHUB PAGES</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Image 
            src={github}
            height="70px"
            width="70px"></Image>
          </div>
        </div>
        </div> 
      </>  
    )
}

export default Hoisting