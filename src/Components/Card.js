import React from 'react';
import AboutBackgroundImage from "../Assets/bg.png";
import ml from "../Assets/ml.png";
import word from "../Assets/word.png";
import { BsFillPlayBtnFill } from 'react-icons/bs';

const Card = () => {
  return (
    <div >
    
    <div style={{ width:'1500px', display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: 1, marginRight: '20px' }}>
        
<div style={{ display: 'flex', alignItems: 'center', marginLeft: '100px' }}> {/* Adding margin to move text to the right */}
          <h1 style={{ fontSize: '4rem', color: '#00a6ff', marginRight: '5px', marginBottom: '0' }}>Wordpress</h1>
          <h1 style={{ fontSize: '4rem', color: '#00a6ff', marginRight: '10px', marginTop: '0' }}>Development</h1>
          
</div>
        <div style={{ }}> {/* Container with fixed width */}
          <p style={{ marginBottom: '50px', wordWrap: 'break-word',textAlign:'right', marginLeft: '400px' }}> {/* Add margin to move text to the right */}
            
We specialize in the development and release of software, which can be locally installed on a web server and accessed via a proprietary website, or alternatively, hosted in the cloud and accessed through a WordPress website.
          </p>
        </div>
      </div>
      {/* <div style={{ flex: 1}}> */}
    <div style={{ flex: 1, marginRight: '10px' }}>

        {/* <img src={AboutBackgroundImage} alt="" /> */}
    <img src={word} alt="" style={{ width: '56%', height: '56%', objectFit: 'cover', borderRadius: '10px', marginRight: '50%' }} />

      </div>
    </div>


    <div style={{width:'1500px', marginLeft:"60px", display: 'flex', alignItems: 'center' }}>
    <div style={{ flex: 1, marginLeft: '10px' }}>
  <img src={ml} alt="" style={{ width: '50%', height: '50%', objectFit: 'cover', borderRadius: '10px', marginLeft: '50%' }} />
</div>

      <div style={{ flex: 1, marginLeft: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* <h1 style={{ fontSize: '4rem',color:'#00a6ff', marginRight: '8px' }}>Machine <br/> Learning</h1> */}
          <h1 style={{ fontSize: '4rem', color:'#00a6ff', marginRight: '8px', lineHeight: '1' }}>Machine <br/> Learning</h1>

        </div>
        <div style={{ maxWidth: '400px' }}> {/* Container with fixed width */}
          <p style={{ marginBottom: '50px', wordWrap: 'break-word',textAlign:'left' }}>Our primary focus revolves around website construction and design, encompassing coding and markup tasks ranging from basic text pages to intricate web applications, social networks, and e-commerce platforms.
          </p>
          </div>
      </div>
    </div>

    
    <div style={{ width:'1500px', display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: 1, marginRight: '20px' }}>
        
<div style={{ display: 'flex', alignItems: 'center', marginLeft: '200px' }}> {/* Adding margin to move text to the right */}
          <h1 style={{ fontSize: '4rem', color: '#00a6ff', marginRight: '5px', marginBottom: '0' }}>App</h1>
          <h1 style={{ fontSize: '4rem', color: '#00a6ff', marginRight: '10px', marginTop: '0' }}>Development</h1>

</div>
        <div style={{ }}> {/* Container with fixed width */}
          <p style={{ marginBottom: '50px', wordWrap: 'break-word',textAlign:'right', marginLeft: '400px' }}> {/* Add margin to move text to the right */}
            
We specialize in the development and release of software, which can be locally installed on a web server and accessed via a proprietary website, or alternatively, hosted in the cloud and accessed through a WordPress website.
          </p>
        </div>
      </div>
      {/* <div style={{ flex: 1}}> */}
    <div style={{ flex: 1, marginRight: '10px' }}>

        {/* <img src={AboutBackgroundImage} alt="" /> */}
  <img src={AboutBackgroundImage} alt="" style={{ width: '53%', height: '53%', objectFit: 'cover', borderRadius: '10px', marginRight: '50%' }} />

      </div>
    </div>

    <div style={{width:'1500px', marginLeft:"60px", display: 'flex', alignItems: 'center' }}>
    <div style={{ flex: 1, marginLeft: '10px' }}>
  <img src={AboutBackgroundImage} alt="" style={{ width: '50%', height: '50%', objectFit: 'cover', borderRadius: '10px', marginLeft: '50%' }} />
</div>

      <div style={{ flex: 1, marginLeft: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* <h1 style={{ fontSize: '4rem',color:'#00a6ff', marginRight: '8px' }}>Web Development</h1> */}
          <h1 style={{ fontSize: '4rem', color:'#00a6ff', marginRight: '8px', lineHeight: '1' }}>Web <br/> Development</h1>

        </div>
        <div style={{ maxWidth: '400px' }}> {/* Container with fixed width */}
          <p style={{ marginBottom: '50px', wordWrap: 'break-word',textAlign:'left' }}>Our primary focus revolves around website construction and design, encompassing coding and markup tasks ranging from basic text pages to intricate web applications, social networks, and e-commerce platforms.
          </p>
          </div>
      </div>
    </div>

    











</div>







  );
};

export default Card;
