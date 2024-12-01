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
          Hi, I’m Yusuf!
          I’m a Full-Stack Blockchain Engineer with a bachelor’s degree in Exercise Science. My journey into tech is a unique one—before becoming a developer, I worked as a Personal Trainer. Even during my school years, 
          I had a strong interest in blockchain technology. After spending some time in the fitness industry,
          I decided to pursue my passion and transitioned into full-stack development with a focus on blockchain.
          As a developer, I thrive on solving complex problems and enjoy the creative process of building innovative solutions. Beyond development, I have a deep love for soccer, which I played at a semi-professional level in Turkey and at the college level in the U.S. 
          These experiences taught me the value of teamwork, communication, and resilience—skills that I bring to every project I work on.
          My personal motto is, "Surrender is not an option!" This belief drives me to continuously improve and strive to be the best version of myself, both professionally and personally.
          Feel free to reach out—I’m always open to discussing new opportunities or collaborations!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
    