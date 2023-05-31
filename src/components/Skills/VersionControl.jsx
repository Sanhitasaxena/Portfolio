import { Image } from "react-bootstrap";
import "../Skills/skills.css";
import git from "../../assets/img/skills/git-icon.svg";

const VersionControl = () => {
  return (
    <>
      <div id="parent">
        <h4>VERSION CONTROLS</h4>
        <div class="card text-white border-warning bg-transparent mb-3">
          {/* <div class="card-header">Header</div> */}
          <div class="card-body">
            <h5 class="card-title">GIT</h5>
            <p class="card-text">
              Git is a distributed version control system (VCS) widely used for
              managing source code and tracking changes in software development
              projects.
            </p>
            <Image src={git} height="70px" width="70px"></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default VersionControl;
