import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import micImage from '../assets/images/mic.png'; // Microphone image path
import portfolioIcon from '../assets/images/portfolio-icon.jpg'; // Microphone image path
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isAssistantSpeaking, setIsAssistantSpeaking] = useState(false);
  const [isUserBlocked, setIsUserBlocked] = useState(false);
  const [lastSpokenPhrase, setLastSpokenPhrase] = useState("");
  const recognition = useRef(null);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [fallbackTimer, setFallbackTimer] = useState(null); // Store the timer reference

  const portfolioProjects = [
    {
      title: 'Responsive Resume Website',
      description:
        'A responsive single-page personal portfolio website showcasing my skills, projects, and contact information. Built using HTML, CSS, and Bootstrap for a modern and professional design.',
      githubLink: 'https://github.com/user/resume-website',
      demoVideo: 'https://www.youtube.com/embed/your-resume-demo',
    },
    {
      title: 'Interactive Quiz App',
      description:
        'A JavaScript-powered quiz application featuring multiple-choice questions, a timer, and a scoring system. Designed to be engaging and user-friendly with real-time feedback.',
      githubLink: 'https://github.com/user/quiz-app',
      demoVideo: 'https://www.youtube.com/embed/your-quiz-demo',
    },
    {
      title: 'E-Commerce Website Mockup',
      description:
        'A dynamic front-end mockup of an e-commerce platform. Features include a product gallery, responsive navigation, and an interactive shopping cart using JavaScript and CSS animations.',
      githubLink: 'https://github.com/user/ecommerce-mockup',
      demoVideo: 'https://www.youtube.com/embed/your-ecommerce-demo',
    },
    {
      title: 'Data Dashboard for Weather Monitoring',
      description:
        'A dashboard built with Python and Flask to display real-time weather data. Features an interactive chart and API integration for fetching live weather data for multiple cities.',
      githubLink: 'https://github.com/user/weather-dashboard',
      demoVideo: 'https://www.youtube.com/embed/your-weather-demo',
    },
    {
      title: 'Python-Based Task Manager',
      description:
        'A simple yet efficient task management system built in Python with a Tkinter GUI. Allows users to add, edit, and delete tasks, with data persistence using SQLite.',
      githubLink: 'https://github.com/user/task-manager',
      demoVideo: 'https://www.youtube.com/embed/your-task-manager-demo',
    },
  ];
  

  const startSpeechRecognition = () => {
    if (!recognition.current) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognition.current = new SpeechRecognition();
      recognition.current.continuous = true;
      recognition.current.lang = 'en-US';
  
      recognition.current.onend = () => {
        if (isListening) {
          console.log("Recognition ended, restarting because isListening is true");
          recognition.current.start();
        }
      };
  
      recognition.current.onresult = (event) => {
        const detectedTranscript = event.results[event.resultIndex][0].transcript.trim().toLowerCase();
        setTranscript(detectedTranscript);
        handleSpeechRecognition(detectedTranscript);
      };
    }
    speakResponse("Helo there, I'm here to simulate basic and most common recruiters questions!");
  
    setIsListening(true);
    recognition.current.start();
  };

  const stopSpeechRecognition = () => {
    if (recognition.current) {
      recognition.current.stop();
      setIsListening(false);
    }
  };

  const speakResponse = (responseText) => {
    if (isAssistantSpeaking) {
      setIsUserBlocked(true);
      return;
    }

    setIsAssistantSpeaking(true);
    setIsListening(false); // Temporarily turn off listening indicator

    if (recognition.current) {
      recognition.current.stop();
    }

    const utterance = new SpeechSynthesisUtterance(responseText);
    utterance.lang = 'en-GB';

    utterance.onstart = () => {
      setIsAssistantSpeaking(true);
    };

    utterance.onend = () => {
      setIsAssistantSpeaking(false);
      setIsUserBlocked(false);
      if (recognition.current) {
        recognition.current.start();
        setIsListening(true);
      }
    };

    utterance.onerror = (error) => {
      setIsAssistantSpeaking(false);
      setIsUserBlocked(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  const speakResponseClose = (responseText) => {
    if (isAssistantSpeaking) {
      setIsUserBlocked(true);
      return;
    }
  
    setIsAssistantSpeaking(true);
    setIsListening(false);
  
    // Stop recognition explicitly
    if (recognition.current) {
      recognition.current.stop();
    }
  
    const utterance = new SpeechSynthesisUtterance(responseText);
    utterance.lang = 'en-GB';
  
    utterance.onstart = () => {
      setIsAssistantSpeaking(true);
      setIsUserBlocked(true);
    };
  
    utterance.onend = () => {
      setIsAssistantSpeaking(false);
      setIsUserBlocked(false);
  
      // Reinitialize recognition and restart listening
      if (!recognition.current) {
        startSpeechRecognition(); // Safely reinitialize recognition
      } else if (isListening) {
        recognition.current.start(); // Restart recognition
        setIsListening(true);
      }
    };
  
    utterance.onerror = (error) => {
      console.error("Speech synthesis error:", error);
      setIsAssistantSpeaking(false);
      setIsUserBlocked(false);
    };
  
    window.speechSynthesis.speak(utterance);
  };
  

  const handleSpeechRecognition = (transcript) => {
    const normalizedTranscript = transcript.trim().toLowerCase();

    // Ignore self-generated phrases (i.e., previously spoken phrases)
    if (normalizedTranscript === lastSpokenPhrase.trim().toLowerCase()) {
      console.log("Ignored self-generated phrase:", normalizedTranscript);
      return;
    }

    const questionsAndAnswers = [

     
      {
        category: 'portfolio',
        keywords: [
          "portfolio", "show me your portfolio", "your work", "your projects", "see your portfolio", "can I see your work", 
          "show me some projects", "examples of your work", "portfolio showcase", "what projects have you worked on", 
          "projects you've done", "show your work", "your project examples", "display your portfolio", "portfolio display", 
          "can you show your work"
        ],
        answer: "Here are some of my projects. Check them out below!"
      },
    
      {
        category: 'about yourself',
        keywords: [
          "tell me something about yourself", "who are you", "introduce yourself", "your background", "brief introduction", 
          "what do you do", "about you", "what is your story", "who is the person behind", "can you tell me about you",
          "tell me about your career", "how did you get started", "who am I speaking to", "more about you"
        ],
        answer: "I am a software engineer with experience in full-stack development, specializing in React, Node.js, and cloud technologies."
      },
      
      {
        category: 'strengths',
        keywords: [
          "greatest strength", "your strengths", "what makes you strong", "what are your strengths", "what is your strongest skill",
          "your best quality", "strongest skills", "top strengths", "what do you excel at", "what's your biggest strength"
        ],
        answer: "My greatest strength is problem-solving. I enjoy tackling complex issues and breaking them down into smaller, manageable pieces."
      },
      
      {
        category: 'challenges',
        keywords: [
          "challenging project", "most challenging project", "difficult project", "tough project", "biggest challenge", 
          "biggest technical challenge", "hardest project", "difficult task", "what's the hardest task you've faced",
          "biggest problem you've solved", "toughest project you've worked on"
        ],
        answer: "I worked on a project where we had to migrate a legacy system to a microservices architecture. It involved not only technical challenges but also coordinating with cross-functional teams."
      },
    
      {
        category: 'deadlines',
        keywords: [
          "tight deadlines", "time management", "deal with deadlines", "approach to deadlines", "meet deadlines", 
          "deadline pressure", "working with deadlines", "manage deadlines", "how do you meet deadlines", "how to handle deadlines"
        ],
        answer: "I prioritize tasks effectively and maintain clear communication with my team to ensure we meet deadlines while maintaining quality."
      },
    
      {
        category: 'technologies',
        keywords: [
          "technologies used", "programming languages", "tools used", "tech stack", "what technologies do you use", 
          "which programming languages do you know", "technologies you work with", "what is your tech stack", "what tech do you use",
          "technological tools", "what's your technology stack", "technologies you're comfortable with"
        ],
        answer: "I am comfortable working with technologies like React, Node.js, JavaScript, Python, AWS, Docker, and databases like MySQL."
      },
    
      {
        category: 'debugging',
        keywords: [
          "approach debugging", "solve bugs", "debugging process", "debugging strategy", "troubleshooting code", 
          "how do you debug", "bug fixing", "debugging approach", "how to solve bugs", "dealing with code errors"
        ],
        answer: "I follow a systematic approach, starting with reproducing the issue, analyzing the logs, isolating the problem, and testing potential solutions."
      },
    
      {
        category: 'teamwork',
        keywords: [
          "working in a team", "team collaboration", "team dynamics", "how do you work in teams", "working with others", 
          "work with others", "team environment", "collaborate with colleagues", "how do you collaborate", "teamwork approach"
        ],
        answer: "I believe in open communication and collaboration. I ensure my ideas are heard while respecting others' perspectives and skills. I also actively participate in team discussions and contribute to solutions."
      },
    
      {
        category: 'leadership',
        keywords: [
          "leadership experience", "manage a team", "leading a project", "supervising a team", "team leader", 
          "leadership skills", "how do you lead", "leading a team", "management experience", "how do you manage teams"
        ],
        answer: "I have led small teams in the past, where I focused on task delegation, ensuring progress, and motivating my team. My goal is to empower the team to make decisions and grow their skill set."
      },
    
      {
        category: 'communication',
        keywords: [
          "communication skills", "how do you communicate", "collaborating with stakeholders", "dealing with clients", 
          "team communication", "how do you communicate with your team", "working with clients", "effective communication",
          "how do you communicate in teams", "what's your communication style"
        ],
        answer: "I prioritize clear and concise communication. I ensure stakeholders are updated regularly, and I actively listen to their concerns and feedback to make informed decisions."
      },
    
      {
        category: 'problem-solving',
        keywords: [
          "problem-solving approach", "how do you approach a problem", "solve problems", "overcome obstacles", 
          "tackle issues", "problem-solving strategy", "how do you handle problems", "how do you solve problems"
        ],
        answer: "I approach problems systematically by breaking them down into smaller, manageable parts. I look for patterns, ask questions, and consult with colleagues if necessary to find the most efficient solution."
      },
    
      {
        category: 'time management',
        keywords: [
          "time management skills", "prioritize tasks", "stay organized", "manage multiple projects", "task prioritization", 
          "how do you stay organized", "how do you manage your time", "time organization", "staying productive", "time efficiency"
        ],
        answer: "I use task management tools to stay organized and prioritize tasks based on urgency and importance. I also ensure that I am not overcommitted, and I communicate early if deadlines need adjusting."
      },
    
      {
        category: 'conflict resolution',
        keywords: [
          "deal with conflict", "conflict resolution", "disagreements with colleagues", "how to handle conflict", "dispute resolution", 
          "manage conflict", "resolve disagreements", "handling conflict at work", "how to resolve conflict"
        ],
        answer: "I believe in addressing conflicts early, encouraging open discussions, and seeking a solution that benefits all parties. It’s important to stay calm, listen to others, and find a compromise."
      },
    
      {
        category: 'adaptability',
        keywords: [
          "adapt to change", "adjust to new environments", "how do you handle change", "handling new challenges", 
          "adapting to new technology", "change management", "adjusting to changes", "how do you adapt", "becoming adaptable"
        ],
        answer: "I thrive in dynamic environments. I am adaptable and enjoy learning new things. When change occurs, I stay flexible and adjust my approach to ensure I meet new demands effectively."
      },
    
      {
        category: 'motivation',
        keywords: [
          "what motivates you", "why do you work hard", "source of motivation", "what drives you", "motivation at work", 
          "why are you motivated", "what inspires you", "what keeps you motivated", "what keeps you going"
        ],
        answer: "I am motivated by the opportunity to solve meaningful problems and make a positive impact. I enjoy learning and growing, both personally and professionally."
      },
    
      {
        category: 'failure',
        keywords: [
          "failure experience", "dealing with failure", "learn from mistakes", "what did you learn from failure", "how do you handle failure", 
          "failure lessons", "how do you bounce back from failure", "learning from mistakes", "overcoming failure"
        ],
        answer: "Failure is a part of growth. I have faced setbacks, but I always take them as learning opportunities. After each failure, I assess what went wrong, adjust my approach, and keep improving."
      },
    
      {
        category: 'career goals',
        keywords: [
          "future goals", "where do you see yourself", "long-term goals", "career aspirations", "future career", 
          "what are your career goals", "short-term goals", "what do you want to achieve", "professional goals"
        ],
        answer: "My long-term goal is to become a lead software engineer, working on large-scale systems while mentoring junior developers. I also want to keep enhancing my technical and leadership skills."
      },
    
      {
        category: 'performance under pressure',
        keywords: [
          "perform under pressure", "work under pressure", "handle stress", "deal with high-pressure situations", "working in stressful environments", 
          "stress management", "how do you perform under pressure", "working in stressful situations", "how do you deal with pressure"
        ],
        answer: "I remain calm under pressure and focus on breaking tasks into manageable steps. I stay organized and prioritize my workload to ensure that deadlines are met without compromising quality."
      },
      {
        category: 'greetings',
        keywords: [
          "hello", "hi"
        ],
        answer: "greetings!"
      }
    ];
    
    // Stop listening if the user says "thank you, that is all"
    if (
      normalizedTranscript.includes("thank you that is all") ||
      normalizedTranscript.includes("thank you that's all") ||
      normalizedTranscript.includes("thank you that was all")
    ) {
      speakResponseClose("You're welcome! Thank you for your time.");
      stopSpeechRecognition();
      return;
    }
    if (questionsAndAnswers.some(q => q.category === 'portfolio' && q.keywords.some(keyword => normalizedTranscript.includes(keyword)))) {
      if (!showPortfolio) {
        showPortfolioHandler();
        speakResponse("Here are some of my projects!");
        return; // Exit function after triggering the portfolio view
      }
       
    }

    let answerFound = false;
    for (let { keywords, answer } of questionsAndAnswers) {
      if (keywords.some((keyword) => normalizedTranscript.includes(keyword))) {
        speakResponse(answer);
        answerFound = true;
        break;
      }
    }

    // Fallback response if no matching response is found
    if (!answerFound && !isAssistantSpeaking && !isUserBlocked) {
      const fallbackPhrase = "I'm here to help! Could you please clarify your request?";

      // Check if the fallback phrase is the same as the last spoken phrase
      if (fallbackPhrase.trim().toLowerCase() === lastSpokenPhrase.trim().toLowerCase()) {
        console.log("Ignored fallback response to avoid repetition.");
        return; // Skip speaking the fallback phrase if it's the same as the last one
      }

      // Speak the fallback phrase if it's different from the last spoken phrase
      if (fallbackTimer) {
        const timer = setInterval(() => {
          speakResponse(fallbackPhrase);
        }, 15000); // Speak every 15 seconds
        setFallbackTimer(timer); // Store the interval ID
      }
    }
  };

  // Clear the fallback interval when the assistant finishes speaking
  const clearFallbackTimer = () => {
    if (fallbackTimer) {
      clearInterval(fallbackTimer);
      setFallbackTimer(null); // Reset the timer
    }
  };
// Show Portfolio Handler
const showPortfolioHandler = () => {
  setShowPortfolio(true);
};

// Close Portfolio Handler
const closePortfolioHandler = () => {
  setShowPortfolio(false);
};

return (
  <div className="main-container">
    {/* Button container hidden when portfolio is displayed */}
    {!showPortfolio && (
      <div className="button-container">
        <motion.button
          className={`talk-button ${isListening ? 'active' : ''} ${isAssistantSpeaking ? 'speaking' : ''}`}
          onClick={startSpeechRecognition}
        >
          <img src={micImage} alt="Microphone" className="button-image" />
          <p>{isListening ? 'Listening...' : 'Click to talk!'}</p>
        </motion.button>

        <motion.button
          className={`show-portfolio-button`}
          onClick={showPortfolioHandler}
        >
          <img src={portfolioIcon} alt="Portfolio Icon" className="portfolio-icon" />
          <p>{'Reveal Portfolio'}</p>
        </motion.button>
      </div>
    )}

    {/* Portfolio container displayed when showPortfolio is true */}
    {showPortfolio && (
 <div className="portfolio-container">
 {/* Close button */}
 <button className="close-button" onClick={closePortfolioHandler}>
   ✖
 </button>

 {/* Portfolio content */}
 <div className="row"> {/* Use Bootstrap row to create a grid */}
   {portfolioProjects.map((project, index) => (
     <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3"> {/* Use column classes for responsiveness */}
       <div className="project-card">
         <div className="project-info">
           <h3>{project.title}</h3>
           <p>{project.description}</p>

           {/* Demo Video */}
           <div className="demo-video-container">
             <iframe
               src={project.demoVideo}
               title={`Demo of ${project.title}`}
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen
             ></iframe>
           </div>

           {/* GitHub Link */}
           <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
             View on GitHub
           </a>
         </div>
       </div>
     </div>
   ))}
 </div>
</div>

)}

  </div>
);
};

export default Home;
