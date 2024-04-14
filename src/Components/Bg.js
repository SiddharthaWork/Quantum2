import React from 'react';
import './Hero.css'; // Import your CSS file containing styles for Home component
import BannerBackground from "../Assets/imaging.png";
import { FiArrowRight } from "react-icons/fi";
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Half = () => {
  return (
      <div className="home-container" style={{height:'80%', backgroundImage: `url(${BannerBackground})` }}>
        <Navbar />
      <div className="home-text-section">
        <h1 className="primaryes-heading">
          <br />
          <div className="typewriter-container">
            <div className="typewriter-text"><br/></div>
          </div>
        </h1>
        <p className="primarying-text">
 <br/>
        </p>
       
        <button className="secondarys-button">
          QUICK INQUIRY <FiArrowRight />
        </button>
    
      </div>
      <div className="home-image-container">
        {/* <img src={BannerImage} alt="" /> */}
      </div>
    </div>
  );
}

export default Half;
