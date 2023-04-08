import { Image } from "react-bootstrap"
import "../Skills/skills.css"
import git from "../../assets/img/skills/git-icon.svg";

const VersionControl = ()=>{
    return(
        <>
        <div id="parent">
          <h4>VERSION CONTROLS</h4>
          <div class="card text-white border-warning bg-transparent mb-3">
          {/* <div class="card-header">Header</div> */}
          <div class="card-body">
            <h5 class="card-title">GIT</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Image 
            src={git}
            height="70px"
            width="70px"></Image>
          </div>
        </div>
        </div>
        </>
    )
}

export default VersionControl