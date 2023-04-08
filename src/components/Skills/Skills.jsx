import "../Skills/skills.css";
import Frontend from "../Skills/Frontend";
import Backend from "./Backend";
import DbAndOthers from "./DbAndOthers";
import Hoisting from "./Hoisting";
import VersionControl from "./VersionControl";

const Skills = () => {
  return (
    <>
      <div id="skills-parent">
        <h2 id="skills" className="text-center">
          SKILLS
        </h2>
        <div className="container-fluid row" id="parentAll">
          <div className="col-lg-4">
            <Frontend />
          </div>
          <div className="col-lg-4">
            <Backend />
            <Hoisting />
          </div>
          <div className="col-lg-4">
            <DbAndOthers />
            <VersionControl />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
