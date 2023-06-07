import React from 'react';
import { NavLink } from 'react-router-dom';
import next from '../../assets/next.png';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="nav-bar">
        <h2>
          IBRAHIM.<span>dev</span>
        </h2>
      </div>
      <div className="links">
        <NavLink to="/" exact activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about" exact activeClassName="active">
          About
        </NavLink>
        <NavLink to="/project" exact activeClassName="active">
          Project
        </NavLink>
      </div>
      <div className="contactBtn">
        ContactMe
        <img src={next} alt="next" />
      </div>
    </div>
  );
};

export default Navigation;
