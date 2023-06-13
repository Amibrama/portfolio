import React from 'react';
import pic from '../../assets/profpicc.jpg';
import ProfileData from './ProfileData';
import Softskills from './Softskills';
import Techskill from './Techskill';
import Tools from './Tools';
import './Profile.css'

const Profiles = () => {
  return (
    <div className="Profiles">
      <div className="profile-card">
        <div className="profile-card-header">
          <div className="prof">
            
            <div className="pic">
              <img src={pic} alt="pic" />
            </div>
            <div className="name">Ibrahim</div>
          </div>

          <div className="bio">
            <div className="softskills">
              <h5 className="skills">SOFT SKILLS</h5>
              <Softskills />
            </div>
            <div className="techskills">
              <h5 className="skills">TECHNICAL SKILLS</h5>
              <Techskill />
            </div>
            <div className="tools">
              <h5 className="skills">TOOLS</h5>
              <Tools />
            </div>
          </div>
          <div className="median">
            <ProfileData />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
