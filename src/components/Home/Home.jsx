import React, { useState, useEffect, useMemo } from "react";
import Lottie from "lottie-react";
import Blinker from "../Buttons/Blinker";
import Resume from "../Buttons/Resume";
import Code from "../Code/Code";
import developer from "../../assets/developer.json";
import Data from "./data";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";
import "./Home.css";

const Home = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedCharacters, setTypedCharacters] = useState("");

  const words = useMemo(
    () => ["FullStack Developer", "Freelancer", "Creator"],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const word = words[currentIndex];
      setTypedCharacters((prevTypedCharacters) => {
        if (prevTypedCharacters === word) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
          return "";
        } else {
          const nextCharacter = word[prevTypedCharacters.length];
          return prevTypedCharacters + nextCharacter;
        }
      });
    }, 200);

    return () => clearInterval(interval);
  }, [currentIndex, words]);

  return (
    <div className="home">
      <div className="hero">
        <div className="headerText" id="home">
          <Blinker />
          <p>
            Welcome to the world of{" "}
            <span className="char">
              <strong>Diaby Mohammed Ibrahim</strong>
            </span>
            , a visionary Full Stack Web Developer who builds digital wonders.
            With an insatiable hunger for learning languages and frameworks, I
            merge design and functionality to create captivating web
            experiences. Embark on this exciting journey of innovation and
            creativity with me.
          </p>
        </div>
      </div>
      <div className="straight"></div>
      <div className="here">
        <Code />
      </div>
      <p className="quote">
        <span className="blue">
          "Every great developer you know got there by solving problems <br />{" "}
          they were unqualified to solve until they actually did it"
        </span>{" "}
        <br /> <span className="black"> Patrick Mckenzie</span>
      </p>
      <div className="divide">
        <div className="animation">
          <div className="animation-developer">
            <Lottie animationData={developer} />
          </div>
        </div>
        <div className="about" id="about">
          <h4 className="aa">
            About Me
            <span className="vr"></span>
            <span className="storytime">STORY-TIME</span>
          </h4>

          <Data />
          <div className="bttn">
            <Resume />
          </div>
          <div className="underline"></div>
        </div>
      </div>
      <div className="projectss" id="project">
        <h2>Highlighted Projects</h2>
        <Project />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
