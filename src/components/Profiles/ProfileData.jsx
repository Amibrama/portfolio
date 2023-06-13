import React from 'react';
import '../Home/Home.css';

const ProfileData = () => {
  return (
    <div className="data">
      <div className="bttn">
        <a
          href="https://linkedin.com/dmambo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Linkedin</button>
        </a>
      </div>
      <div className="bttn">
        <a
          href="https://twitter.com/kingibro345"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Twitter</button>
        </a>
      </div>
      <div className="bttn">
        <a
          href="https://github.com/dmambo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Github</button>
        </a>
      </div>
    </div>
  );
};

export default ProfileData;
