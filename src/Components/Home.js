import React from 'react';
import AboutBackgroundImage from "../Assets/aboutus-background-image.png";
import { BsFillPlayBtnFill } from 'react-icons/bs';

const About = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center',  }}>
      <div style={{ flex: 1, marginLeft:'50px' }}>
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div style={{ flex: 1, marginRight: '30px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1 style={{ fontSize: '4rem',color:'#00a6ff', marginRight: '8px' }}>About Us</h1>
        </div>
        <div style={{ maxWidth: '600px',marginRight:'50px' }}> {/* Container with fixed width */}
          <p style={{ marginBottom: '50px', wordWrap: 'break-word' }}>We are dedicated to unraveling the essence of your business and understanding what truly resonates with your customers. Our goal is to amplify your presence in the industry by delving deep into your unique qualities. We invest time in comprehending your brand's essence, values, and distinguishing factors. Equipped with this insight, we develop tailored solutions that directly engage your target audience. Consider us as your brand's reliable ally, committed to assisting you in your pursuit of success.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
