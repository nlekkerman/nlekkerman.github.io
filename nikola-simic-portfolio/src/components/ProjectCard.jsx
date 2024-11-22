import React, { useState } from 'react';
import { motion } from 'framer-motion';
import micImage from '../assets/images/mic.png';
import './Home.css';

const Home = () => {
  

  const handleButtonClick = () => {
   handleVoicePermissionsAndStartSpeechRecognition();
  };

  return (
    <div>
      <motion.button
        className={`talk-button ${isListening ? 'active' : ''}`}
        onClick={handleButtonClick}
      >
        <img src={micImage} alt="Microphone" className="button-image" />
        <p className="mic-text">
          {isListening ? 'Listening...' : 'Click to talk'}
        </p>
      </motion.button>
    </div>
  );
};

export default Home;
