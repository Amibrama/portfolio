import React, { useState, useEffect, useMemo } from 'react';
import Lottie from 'lottie-react';
// import animationData from '../../assets/star.json';
import developer from '../../assets/developer.json';
import Data from './data';
import './Home.css';

const Home = () => {
  const [currentWord, setCurrentWord] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedCharacters, setTypedCharacters] = useState('');

  const words = useMemo(
    () => ['FullStack Developer', 'Freelancer', 'Creator'],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const word = words[currentIndex];
      setTypedCharacters((prevTypedCharacters) => {
        if (prevTypedCharacters === word) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
          return '';
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
      <div className="headerText">
        <h3>
          <span className="char">{typedCharacters}</span>
          <span className="blink">|</span>
        </h3>
      </div>
      <div className="straight"></div>
      <p className="quote">
        <span className="blue">
          "Every great developer you know got there by solving problems <br />{' '}
          they were unqualified to solve until they actually did it"
        </span>{' '}
        <br /> <span className="black"> Patrick Mckenzie</span>
      </p>
      <div className="divide">
        <div className="animation">
          <div className="animation-developer">
            <Lottie animationData={developer} />
          </div>
        </div>
        <div className="about">
          <h4 className="aa">
            About Me
            <span className="vr"></span>
            <span className="storytime">STORY-TIME</span>
          </h4>

          <Data />
          <div className="contactss">
            <button>contact-him</button>
          </div>
        </div>
        <div className="socials">
          <h4 className="aa">
            Social
            <span>- </span>
            <span className="media">Media</span>
          </h4>{' '}
          <p>
            {' '}
            With a keyboard as his wand and a screen as his canvas, he weaved
            digital magic that captivated users and transformed Websites.From
            front-end wizardry to back-end sorcery, <strong>
              Ibrahim
            </strong>{' '}
            mastered the art of full-stack development. He brought ideas to life
            with pixel-perfect designs and crafted powerful back-end systems
            that handled any challenge thrown his way.
          </p>
        </div>
      </div>
      hello there
    </div>
  );
};

export default Home;
