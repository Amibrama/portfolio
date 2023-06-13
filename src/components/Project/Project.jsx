import React from "react";
import Projectdata from "./Projectdata";
import "./Project.css";

import coding from "../../assets/coding.png";
import github from "../../assets/github.png";

const Project = () => {
  const truncateDescription = (desc, maxLength) => {
    if (desc.length > maxLength) {
      return desc.substring(0, maxLength) + "...";
    }
    return desc;
  };

  return (
    <div className="cards">
      <div className="masonry">
        {Projectdata.map((item, index) => (
          <div key={index} className="card">
            <img src={item.image} alt={item.title} className="image" />
            <div className="details">
              <h2 className="black">
                <span class="terminal_user">Ibrahim@admin:</span>
                <span class="terminal_location">~</span>
                <span class="terminal_bling">$</span>

                {item.title}
                <span class="terminal_cursor"></span>
              </h2>
              <p className="black">
                <span class="terminal_user">Desc:</span>
                <span class="terminal_location">~</span>
                <span class="terminal_bling">$</span>
                {truncateDescription(item.desc, 108)}
              </p>
              <div className="buttons">
                <button className="butt">
                  <a href={item.live} target="_blank" rel="noopener noreferrer">
                    <span className="live">
                      <img src={coding} alt="live" className="icon" />
                    </span>
                    Live Demo
                  </a>
                </button>
                <button className="butt">
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="github">
                      <img src={github} alt="github" className="icon" />
                    </span>
                    GitHub
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
