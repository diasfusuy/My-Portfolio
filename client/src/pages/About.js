import React from 'react';
import '../components/About.css';
import pic from '../assets/pic.png';
import skills from '../assets/skills.png';
import bio from '../assets/bio.png';

const About = () => {
    return (
        <div className="about-container">
      <div className="profile-section">
        <img src= {pic} alt="Profile" className="profile-image" />
        <h1 className="profile-name">YUSUF SAHIN</h1>
      </div>
      <div className="info-cards">
        <div className="info-card">
          <img src={skills} alt="Skills" className="info-icon" />
          <h2>Skills</h2>
          <p>
            As a Full Stack Developer, I have expertise in building responsive web applications from end to end. 
            I’m proficient in front-end technologies like HTML, CSS, and JavaScript frameworks to create intuitive user interfaces. 
            On the back-end, I have experience with Node.js, Express, and databases like MongoDB and PostgreSQL to develop robust server-side logic. 
            Additionally, I’m skilled in integrating RESTful APIs, managing version control with Git, and ensuring cross-platform compatibility for a seamless user experience.
          </p>
        </div>
        <div className="info-card">
          <img src={bio} alt="Biography" className="info-icon" />
          <h2>Biography</h2>
          <p>
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
    