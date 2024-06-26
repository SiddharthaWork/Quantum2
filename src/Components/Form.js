import React from 'react';
import "./Form.css"
import {motion} from 'framer-motion';
import  {fadeIn} from './variant'

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const handleReset = () => {
    document.getElementById('mail').value = ''; // Reset email input
    document.getElementById('message').value = ''; // Reset message input
  };

  return (
    <motion.div 
    variants={fadeIn("right",0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: false, amount: 0.5 }} className="form-container">
      <div className="form">
        <span className="heading">Get in touch</span>
        <form onSubmit={handleSubmit}>
          <input placeholder="Name" type="text" className="input" />
          <input placeholder="Email" id="mail" type="email" className="input" />
          <textarea placeholder="Say Hello" rows="10" cols="30" id="message" name="message" className="textarea"></textarea>
          <div className="button-container">
            <button type="submit" className="send-button">Send</button>
            <div className="reset-button-container">
              <button type="button" id="reset-btn" className="reset-button" onClick={handleReset}>Reset</button>
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
