import React from 'react';
import './Hero.css'; // Import your CSS file containing styles for Home component
import BannerBackground from "../Assets/home-banner-background.jpg";
import { FiArrowRight } from "react-icons/fi";
import Navbar from './Navbar';

const Home = () => {
  return (
      <div className="home-container" style={{ backgroundImage: `url(${BannerBackground})` }}>
        <Navbar />
      <div className="home-text-section">
        <h1 className="primaryes-heading">
          Welcome to
          <div className="typewriter-container">
            <div className="typewriter-text">Quantum Compilers</div>
          </div>
        </h1>
        <p className="primarying-text">
          You understand your customers better than anyone. <br/> We know that, and we can help you turn that knowledge into results.
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

export default Home;
