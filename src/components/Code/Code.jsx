import React from "react";
import vscode from "../../assets/vscode.png";
import code from "../../assets/code.png";
import loca from "../../assets/location.png";
import SocialLinks from "../Buttons/Social";
import Lottie from "lottie-react";
import resume from "../../assets/resume.json";

import "./Code.css";

const Code = () => {
  return (
    <div className="code">
      <div className="top">
        <div className="left">
          <div className="logo">
            <img src={vscode} alt="vscode" />
          </div>
        </div>
        <div className="middle">Ibrahim's Skills</div>
        <div className="right">
          <span className="yellow round"></span>
          <span className="green round"></span>
          <span className="red round"></span>
        </div>
      </div>
      <div className="middles">
        <div className="sideNav">
          <div className="sidelist">
            <p>FRONTEND</p>
            <p>BACKEND</p>
            <p>TOOLS</p>
            <p>SOFTSKILLS</p>
            <SocialLinks />
          </div>
        </div>

        <div className="codebase">
          <div className="fullskills">
            <div className="frontend skilss">
              <div className="branches">
                <img src={code} alt="code" />
                <span className="branch">Feature/Frontend</span>
                <p>&gt;</p>
              </div>
              <div className="frontendList">
                <p className="languages">
                  <span className="brown">Languges =&gt;</span> [ "HTML", "CSS",
                  "JavaScript", "Redux","TypeScript", "Webpack"]
                </p>
                <p className="frameworks">
                  <span className="brown">Frameworks =&gt;</span> ["React",
                  "Bootstrap", "Material UI", "Tailwind"]
                </p>
              </div>
            </div>
          </div>
          <div className="backend skilss">
            <div className="branches">
              <img src={code} alt="code" />
              <span className="branch">Feature/Backend</span>
              <p>&gt;</p>
            </div>
            <div className="backendList">
              <p className="languages">
                <span className="brown">Languges =&gt;</span> [ "Ruby",
                "Python", "JavaScript", "PostgreSQL", "MySQL" ]
              </p>
              <p className="frameworks">
                <span className="brown">Frameworks =&gt;</span> ["Rails",
                "NodeJS"]
              </p>
            </div>
          </div>
          <div className="tools skilss">
            <div className="branches">
              <img src={code} alt="code" />
              <span className="branch">Feature/Tools_and_Testing</span>
              <p>&gt;</p>
            </div>
            <div className="toolsList">
              <p className="languages">
                <span className="brown">Tools =&gt;</span> [ "Git", "GitHub",
                "VS Code", "CLI","Postman", "Design Tools(FIGMA)"]
              </p>
              <p className="frameworks">
                <span className="brown">Testing =&gt;</span> ["Jest",
                "Capybara", "Rspec", "Selenum"]
              </p>
            </div>
          </div>
          <div className="softskills skilss">
            <div className="branches">
              <img src={code} alt="code" />
              <span className="branch">Feature/Softskills</span>
              <p>&gt;</p>
            </div>
            <div className="toolsList">
              <p className="languages">
                <span className="brown">Softskills =&gt;</span> [
                "Communication", "Collaboration", "Problem Solving", "Time
                management","Adaptability", "Leadership", "Mentoring",
                "Teamwork", "Remote communication"]
              </p>
            </div>
            <p className="blink">|</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="location">
          <img src={loca} alt="location" />
          <span>
            <p>India, Uttapredash</p>
          </span>
        </div>
        <div className="resume">
          <div className="resu">
            <Lottie animationData={resume} />
          </div>
          <span>
            <p>
              <a
                href="./Diaby_Mohammed_Resume_2.pdf"
                target="_blank"
                alt="resume"
              >
                See my Resume
              </a>
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Code;
