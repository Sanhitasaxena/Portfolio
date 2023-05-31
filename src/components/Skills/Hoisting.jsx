import "../Skills/skills.css";
import heroku from "../../assets/img/skills/heroku.svg";
import netlify from "../../assets/img/skills/netlify2.webp";
import github from "../../assets/img/skills/github.svg";
import { Image } from "react-bootstrap";

const Hoisting = () => {
  return (
    <>
      <div id="parent">
        <h4>HOSTING PLATFORMS</h4>
        <div
          className="card text-white border-primary bg-transparent mb-3"
          id="card"
        >
          {/* <div className="card-header">Header</div> */}
          <div className="card-body">
            <h5 className="card-title">HEROKU</h5>
            <p className="card-text">
              Heroku is a cloud-based platform as a service (PaaS) that allows
              developers to deploy, manage, and scale web applications easily.
            </p>
            <Image src={heroku} height="70px" width="70px"></Image>
          </div>
        </div>
        <div class="card text-white border-secondary bg-transparent mb-3">
          {/* <div class="card-header">Header</div> */}
          <div class="card-body">
            <h5 class="card-title">GITHUB PAGES</h5>
            <p class="card-text">
              A popular web-based platform for version control and
              collaboration. It allows users to publish websites directly from
              their GitHub repositories.
            </p>
            <Image src={github} height="70px" width="70px"></Image>
          </div>
        </div>
        <div class="card text-white border-success bg-transparent mb-3">
          {/* <div class="card-header">Header</div> */}
          <div class="card-body">
            <h5 class="card-title">Netlify</h5>
            <p class="card-text">
              Netlify is a cloud-based platform that offers web hosting and
              serverless backend services for modern web applications.
            </p>
            <Image src={netlify} height="70px" width="70px"></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hoisting;
