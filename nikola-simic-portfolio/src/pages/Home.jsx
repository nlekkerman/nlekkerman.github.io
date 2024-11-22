import React, { useState } from 'react';
import levenshtein from 'levenshtein'; // Import the Levenshtein class from the 'levenshtein' package
import { motion } from 'framer-motion';
import micImage from '../assets/images/mic.png'; // Use a microphone image
import './Home.css';

const Home = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [recognitionActive, setRecognitionActive] = useState(false);
  const [sorryTimeoutActive, setSorryTimeoutActive] = useState(false);
  let recognition;
  // Function to handle text-to-speech (speaking the response)
  const handleTextToSpeech = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = speechSynthesis.getVoices().find(voice => voice.name === 'Google UK English Male');
      utterance.pitch = 1;
      utterance.rate = 1;

      // When the assistant starts speaking, set the speaking flag to true
      utterance.onstart = () => {
        setIsSpeaking(true); // Start speaking
        pauseSpeechRecognition(); // Pause recognition while speaking
      };

      // When the assistant finishes speaking, set the speaking flag back to false
      utterance.onend = () => {
        setIsSpeaking(false); // Finish speaking
        resumeSpeechRecognition(); // Resume recognition if it was active
      };

      speechSynthesis.speak(utterance);
    } else {
      alert('Text-to-Speech is not supported in this browser.');
    }
  };

  // Function to pause speech recognition
  const pauseSpeechRecognition = () => {
    if (recognition && isListening) {
      recognition.stop(); // Stop listening temporarily
      console.log('Recognition paused while speaking.');
    }
  };

  // Function to resume speech recognition
  const resumeSpeechRecognition = () => {
    if (recognition && !isSpeaking && recognitionActive) {
      recognition.start(); // Restart listening after speaking
      console.log('Recognition resumed after speaking.');
    }
  };

  // Function to request and start speech recognition
  const requestVoicePermission = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Speech recognition is not supported in this browser.');
      return;
    }

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(() => {
        console.log('Microphone access granted!');
        startSpeechRecognition();
      })
      .catch((error) => {
        console.error('Microphone permission denied:', error);
        alert('Please allow microphone access for speech recognition.');
      });
  };

  const startSpeechRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
      console.log('Listening...');
    };

    recognition.onresult = (event) => {
      const transcript = event.results[event.resultIndex][0].transcript.trim().toLowerCase();
      setTranscript(transcript);
      handleSpeechRecognition(transcript);
    };

    recognition.onerror = (error) => {
      console.error('Recognition error:', error);
    };

    recognition.onend = () => {
      if (!isSpeaking && recognitionActive) {
        recognition.start(); // Resume listening if recognition is still active
      }
    };

    recognition.start();
    setRecognitionActive(true);
  };

// Inside your handleSpeechRecognition function
const handleSpeechRecognition = (transcript) => {
  const normalizedTranscript = transcript.toLowerCase().trim();
  console.log("Transcript: ", normalizedTranscript); // Log the transcript

  if (isSpeaking) {
    console.log('Ignoring input as the assistant is speaking.');
    return;
  }
  const questionsAndAnswers = [
    {
      category: 'about yourself',
      keywords: [
        "tell me something about yourself", "who are you", "introduce yourself", "your background", "brief introduction", 
        "what do you do", "about you", "what is your story"
      ],
      answer: "I am a software engineer with experience in full-stack development, specializing in React, Node.js, and cloud technologies."
    },
    {
      category: 'strengths',
      keywords: [
        "greatest strength", "your strengths", "what makes you strong", "what are your strengths", "what is your strongest skill"
      ],
      answer: "My greatest strength is problem-solving. I enjoy tackling complex issues and breaking them down into smaller, manageable pieces."
    },
    {
      category: 'challenges',
      keywords: [
        "challenging project", "most challenging project", "difficult project", "tough project", "biggest challenge", 
        "biggest technical challenge", "hardest project"
      ],
      answer: "I worked on a project where we had to migrate a legacy system to a microservices architecture. It involved not only technical challenges but also coordinating with cross-functional teams."
    },
    {
      category: 'deadlines',
      keywords: [
        "tight deadlines", "time management", "deal with deadlines", "approach to deadlines", "meet deadlines", 
        "deadline pressure", "working with deadlines", "manage deadlines"
      ],
      answer: "I prioritize tasks effectively and maintain clear communication with my team to ensure we meet deadlines while maintaining quality."
    },
    {
      category: 'technologies',
      keywords: [
        "technologies used", "programming languages", "tools used", "tech stack", "what technologies do you use", 
        "which programming languages do you know", "technologies you work with", "what is your tech stack"
      ],
      answer: "I am comfortable working with technologies like React, Node.js, JavaScript, Python, AWS, Docker, and databases like MySQL."
    },
    {
      category: 'debugging',
      keywords: [
        "approach debugging", "solve bugs", "debugging process", "debugging strategy", "troubleshooting code", 
        "how do you debug", "bug fixing", "debugging approach"
      ],
      answer: "I follow a systematic approach, starting with reproducing the issue, analyzing the logs, isolating the problem, and testing potential solutions."
    },
    {
      category: 'teamwork',
      keywords: [
        "working in a team", "team collaboration", "team dynamics", "how do you work in teams", "working with others", 
        "work with others", "team environment", "collaborate with colleagues"
      ],
      answer: "I believe in open communication and collaboration. I ensure my ideas are heard while respecting others' perspectives and skills. I also actively participate in team discussions and contribute to solutions."
    },
    {
      category: 'leadership',
      keywords: [
        "leadership experience", "manage a team", "leading a project", "supervising a team", "team leader", 
        "leadership skills", "how do you lead", "leading a team"
      ],
      answer: "I have led small teams in the past, where I focused on task delegation, ensuring progress, and motivating my team. My goal is to empower the team to make decisions and grow their skill set."
    },
    {
      category: 'communication',
      keywords: [
        "communication skills", "how do you communicate", "collaborating with stakeholders", "dealing with clients", 
        "team communication", "how do you communicate with your team", "working with clients", "effective communication"
      ],
      answer: "I prioritize clear and concise communication. I ensure stakeholders are updated regularly, and I actively listen to their concerns and feedback to make informed decisions."
    },
    {
      category: 'problem-solving',
      keywords: [
        "problem-solving approach", "how do you approach a problem", "solve problems", "overcome obstacles", 
        "tackle issues", "problem-solving strategy", "how do you handle problems"
      ],
      answer: "I approach problems systematically by breaking them down into smaller, manageable parts. I look for patterns, ask questions, and consult with colleagues if necessary to find the most efficient solution."
    },
    {
      category: 'time management',
      keywords: [
        "time management skills", "prioritize tasks", "stay organized", "manage multiple projects", "task prioritization", 
        "how do you stay organized", "how do you manage your time", "time organization"
      ],
      answer: "I use task management tools to stay organized and prioritize tasks based on urgency and importance. I also ensure that I am not overcommitted, and I communicate early if deadlines need adjusting."
    },
    {
      category: 'conflict resolution',
      keywords: [
        "deal with conflict", "conflict resolution", "disagreements with colleagues", "how to handle conflict", "dispute resolution", 
        "manage conflict", "resolve disagreements", "handling conflict at work"
      ],
      answer: "I believe in addressing conflicts early, encouraging open discussions, and seeking a solution that benefits all parties. It’s important to stay calm, listen to others, and find a compromise."
    },
    {
      category: 'adaptability',
      keywords: [
        "adapt to change", "adjust to new environments", "how do you handle change", "handling new challenges", 
        "adapting to new technology", "change management", "adjusting to changes", "how do you adapt"
      ],
      answer: "I thrive in dynamic environments. I am adaptable and enjoy learning new things. When change occurs, I stay flexible and adjust my approach to ensure I meet new demands effectively."
    },
    {
      category: 'motivation',
      keywords: [
        "what motivates you", "why do you work hard", "source of motivation", "what drives you", "motivation at work", 
        "why are you motivated", "what inspires you", "what keeps you motivated"
      ],
      answer: "I am motivated by the opportunity to solve meaningful problems and make a positive impact. I enjoy learning and growing, both personally and professionally."
    },
    {
      category: 'failure',
      keywords: [
        "failure experience", "dealing with failure", "learn from mistakes", "what did you learn from failure", "how do you handle failure", 
        "failure lessons", "how do you bounce back from failure", "learning from mistakes"
      ],
      answer: "Failure is a part of growth. I have faced setbacks, but I always take them as learning opportunities. After each failure, I assess what went wrong, adjust my approach, and keep improving."
    },
    {
      category: 'career goals',
      keywords: [
        "future goals", "where do you see yourself", "long-term goals", "career aspirations", "future career", 
        "what are your career goals", "short-term goals", "what do you want to achieve"
      ],
      answer: "My long-term goal is to become a lead software engineer, working on large-scale systems while mentoring junior developers. I also want to keep enhancing my technical and leadership skills."
    },
    {
      category: 'performance under pressure',
      keywords: [
        "perform under pressure", "work under pressure", "handle stress", "deal with high-pressure situations", "working in stressful environments", 
        "stress management", "how do you perform under pressure", "working in stressful situations"
      ],
      answer: "I remain calm under pressure and focus on breaking tasks into manageable steps. I stay organized and prioritize my workload to ensure that deadlines are met without compromising quality."
    }
  ];
  

  // Match the transcript to a predefined question-answer pair
  for (let { keywords, answer } of questionsAndAnswers) {
    if (keywords.some((keyword) => normalizedTranscript.includes(keyword))) {
      handleTextToSpeech(answer);
      return;
    }
  }

  const stopKeywords = ['thank you', 'bye', 'goodbye'];
  if (stopKeywords.some((keyword) => normalizedTranscript.includes(keyword))) {
    handleTextToSpeech("You're welcome! Have a great day!");
    stopSpeechRecognition();
    return;
  }

 // If input is unrecognized, trigger a timeout response
if (!sorryTimeoutActive) {
  // Set timeout active to prevent triggering multiple "Sorry" responses
  setSorryTimeoutActive(true);

  // Set a timeout to wait for 15 seconds before responding
  setTimeout(() => {
    handleTextToSpeech("Sorry, I didn't understand that. Please try again.");
    // Reset timeout active after responding
    setSorryTimeoutActive(false);
  }, 15000); // 15-second timeout
  
  // Return early to stop further execution
  return; 
}
};


  // Stop speech recognition entirely
  const stopSpeechRecognition = () => {
    if (recognition) {
      recognition.stop();
      setRecognitionActive(false);
      setIsListening(false);
    }
  };

  return (
    <div>
      <motion.button
        className={`talk-button ${isListening ? 'active' : ''}`}
        onClick={requestVoicePermission}
      >
        <img src={micImage} alt="Microphone" className="button-image" />
        <p>{isListening ? 'Listening...' : 'Click to talk'}</p>
      </motion.button>

      <div className="transcript">
        <p>{transcript}</p>
      </div>

      <button onClick={() => handleTextToSpeech('Hello, I am your assistant!')}>
        Say Hello
      </button>
    </div>
  );
};

export default Home;
