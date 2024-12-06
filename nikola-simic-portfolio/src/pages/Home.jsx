import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import portfolioIcon from "../assets/images/portfolio-icon.jpg"; // Microphone image path
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

const Home = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [isAssistantSpeaking, setIsAssistantSpeaking] = useState(false);
  const [isUserBlocked, setIsUserBlocked] = useState(false);
  const [lastSpokenPhrase, setLastSpokenPhrase] = useState("");
  const recognition = useRef(null);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [fallbackTimer, setFallbackTimer] = useState(null);
  const [showInstructions, setShowInstructions] = useState(false);
  const [isInitial, setIsInitial] = useState(true);
  const [isIntroduction, setisIntroduction] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  const portfolioProjects = [
    {
      title: "Access Granted",
      description:
        "This project aims to create websites that are accessible and usable by everyone, regardless of their abilities or disabilities.",
      githubLink: "https://github.com/VCGithubCode/access-granted",
      demoVideo: "https://www.youtube.com/embed/access-granted-demo", 
    },
    {
      title: "Future Flowers Shop",
      description:
        "An advanced e-commerce platform with AI chat support, built using Django and deployed on Heroku.",
      githubLink: "https://github.com/nlekkerman/future_flowers_shop",
      demoVideo: "https://www.youtube.com/embed/fV8RmBUKWEU",
    },
    {
      title: "Hotel Wantit",
      description:
        "A dynamic web platform for hotel room and table booking, featuring interactive chat functionality and smooth user experience.",
      githubLink: "https://github.com/nlekkerman/hotel-wantit",
      demoVideo: "https://www.youtube.com/embed/K-VDeyPZJNs",
    },
    {
      title: "Save Waldo",
      description:
        "An interactive text-based adventure game where you solve puzzles and riddles to rescue Waldo. Includes logic puzzles and challenging interactive levels.",
      githubLink: "https://github.com/nlekkerman/save-waldo",
      demoVideo: "https://www.youtube.com/embed/ob0kXHP4bh0",
    },
    {
      title: "Infinite Guess",
      description:
        "A thrilling number-guessing game that tests your intuition and strategy with bonus rounds, leaderboards, and challenging mystery features.",
      githubLink: "https://github.com/nlekkerman/infinite-guess",
      demoVideo: "https://www.youtube.com/embed/OLQhSHsHQHQ",
    },
    {
      title: "Killarney Wild",
      description:
        "Explore the untamed beauty of Killarney National Park with this immersive platform featuring captivating imagery, wildlife details, and community-focused conservation efforts.",
      githubLink: "https://github.com/nlekkerman/killarney-wild",
      demoVideo: "https://www.youtube.com/embed/8FE15_CsunU",
    },
  ];

  const startSpeechRecognition = () => {
    if (isListening) {
      recognition.current.stop();
      setIsListening(false); // Update the state to reflect that we're not listening anymore
      return; // Exit the function early
    }

    // If recognition is not already running, start it
    if (!recognition.current) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      recognition.current = new SpeechRecognition();
      recognition.current.continuous = true;
      recognition.current.lang = "en-US";

      recognition.current.onend = () => {
        if (isListening) {
          console.log(
            "Recognition ended, restarting because isListening is true"
          );
          recognition.current.start();
        }
      };

      recognition.current.onresult = (event) => {
        const detectedTranscript = event.results[
          event.resultIndex
        ][0].transcript
          .trim()
          .toLowerCase();
        setTranscript(detectedTranscript);
        handleSpeechRecognition(detectedTranscript);
      };
    }
    setisIntroduction(true);
    speakResponse(
      "Hello there, I'm here to simulate basic and most common recruiters' questions, to get exact phrases please click Instructions button!"
    );
    // Delay the state updates for 3 seconds
    setTimeout(() => {
      setisIntroduction(false);
      setIsInitial(false); // Change from "Click to try" to "Listening..."
      setIsListening(true); // Start the listening process
    }, 5500);
    recognition.current.start();
  };
  const toggleInstructions = () => {
    setShowInstructions(!showInstructions); // Toggle visibility of instructions
  };
  // Toggle footer visibility
  const toggleFooter = () => {
    setShowFooter(!showFooter);
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
    utterance.lang = "en-GB";

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
    utterance.lang = "en-GB";

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
    setIsInitial(true);

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
        category: "portfolio",
        keywords: [
          "portfolio",
          "show me your portfolio",
          "your work",
          "your projects",
          "see your portfolio",
          "can I see your work",
          "show me some projects",
          "examples of your work",
          "portfolio showcase",
          "what projects have you worked on",
          "projects you've done",
          "show your work",
          "your project examples",
          "display your portfolio",
          "portfolio display",
          "can you show your work",
        ],
        answer: "Here are some of my projects. Check them out below!",
      },
      {
        category: "general",
        keywords: [
          "about yourself",
          "who are you",
          "introduce yourself",
          "describe yourself",
          "your background",
          "share your background",
          "share background",
          "define yourself",
          "talk yourself",
          "brief introduction",
          "what is your story",
          "what's your story",
          "what's your name",
          "share journey",
          "share your journey",
          "career overview",
        ],
        answer:
          "Hi, my name is Nikola, a Full Stack Developer with experience in Android development using Firestore and Firebase. I have a strong background in web development with JavaScript, React, Django, Python, and SQL. I’m proficient in using tools like Git, PostgreSQL, and Heroku to build scalable, efficient applications. Additionally, I have experience working in Agile environments. Lately I completed the Code Institute’s Full Stack Developer course, where I polished my skills in e-commerce development,Agile and cloud technologies.",
      },

      {
        category: "strengths",
        keywords: [
          "what are your strengths as a developer",
          "developer strengths",
          "developer strength",
          "your key strengths",
          "what makes you a strong developer",
          "your strong side",
        ],
        answer:
          "For me, My strengths are problem-solving, adaptability, and critical thinking, which allow me to tackle challenges effectively. Additionally, my ability to think outside the box enables me to deliver unique and innovative solutions, ensuring that I can approach problems from fresh perspectives and create exceptional results.",
      },
      {
        category: "weaknesses",
        keywords: [
          "weaknesses as a developer",
          " areas to improve",
          "your weaknesses",
          "areas you are working on improving",
          "where do you need improvement",
          "weaknesses as a developer",
          "areas for improvement",
          "skills to improve",
          "improvement goals",
          "developer growth areas",
          "skills development",
          "improvement challenges",
          "areas to work on",
          "developer self-improvement",
          "your weak side",
          "personal growth areas",
        ],
        answer:
          "One area I continue to improve is that, at times, my ability to think outside the box can lead me down unintended or less efficient paths. While this creative thinking often results in unique solutions, I’ve learned to better balance innovation with practicality. I’m working on refining my planning and realization process to ensure I stay focused on the most effective and goal-oriented direction, ensuring that creativity aligns with the project’s objectives.",
      },

      {
        category: "self-improvement",
        keywords: [
          "improve yourself",
          "self-development as a developer",
          "developer growth activities",
          "developer improvement methods",
          "improve coding skills",
          "self-improvement techniques",
          "developer personal growth",
          "how to grow as a developer",
          "developer self-learning",
          "improve programming skills",
          "coding growth strategies",
        ],
        answer:
          "To improve as a developer, I like to challenge myself by working on side projects where I dive into technologies I’m not familiar with. For example, this portfolio is my first time working with React, and it's also the second time I’ve worked with voice interaction. In my latest project, I worked on 'Mickey The Mike' (a.k.a. Buddy) for a Code Institute Hackathon, where our team won 1st place for creating an accessible web solution. I also make sure to stay updated with industry trends through online courses and resources.",
      },
      {
        category: "bugs",
        keywords: [
          "how do you find bugs",
          "error detection",
          "debugging process",
          "how to debug code",
          "finding hidden issues",
          "debugging tools",
          "using logs",
          "debugging techniques",
        ],
        answer:
          "When debugging, I use tools like DevTools, terminal output, and logging (such as Python's logger and JavaScript’s console.log) to identify hidden issues. I also have a strong understanding of data flow and streams, which helps me know where to focus and what questions to ask in order to get the desired outcome. If I get stuck, I use the internet and all available tools to research solutions. Running tests also helps ensure that everything is functioning correctly.",
      },

      {
        category: "teamwork",
        keywords: [
          "teamwork experience",
          "working with teams",
          "collaboration in teams",
          "cross-functional teams",
          "multidisciplinary teamwork",
          "team collaboration skills",
          "team project experience",
          "working in the teams",
          "working in the team",
          "working in teams",
          "working in team",
          "Agile methodology",
          "Agile team collaboration",
        ],
        answer:
          "Yes, I’ve worked in multidisciplinary teams, particularly in two hackathons where I was involved in the entire process of app creation. Using Agile principles, I contributed to iterative development cycles and ensured good communication and collaboration within the team. From brainstorming ideas to developing and launching the app, we leveraged everyone’s strengths to reach our goals. These experiences taught me how to collaborate effectively across different roles and deliver successful results with flexibility and adaptability.",
      },
      {
        category: "technologies",
        keywords: [
          "technologies expertise",
          "programming languages",
          "frameworks familiarity",
          "development tools",
          "tech stack",
          "technologies used",
          "tech tools",
          "familiar with programming languages",
          "frameworks expertise",
          "tools proficiency",
          "tech stack experience",
          "familiarity with tech tools",
          "tools and technologies",
          "technologies you use",
          "programming stack",
          "development environment",
          "technological proficiency",
          "tools you use",
          "tech stack familiarity",
        ],
        answer:
          "I am confident with JavaScript, Python, Java, CSS, and HTML, and have solid experience in Android development. React is a new technology for me, and this portfolio is my first project using it, which I am learning as I go. On the backend, I have worked with Python and Django, and I am familiar with databases like PostgreSQL and Firebase. I also have experience with version control tools like Git and use cloud services such as Firebase for backend tasks. I enjoy learning new technologies and am always looking to expand my skill set, adapting quickly to new tools as I continue growing as a developer.",
      },
      {
        category: "recent projects",
        keywords: [
          "recent projects",
          "latest work",
          "recent development",
          "projects you've worked on",
          "recent development work",
          "latest project examples",
          "projects you've completed",
          "recent work examples",
          "portfolio projects",
          "latest development examples",
        ],
        answer:
          "My latest project is 'Access Granted,' where I developed a voice assistant to enhance accessibility. [ ] This project, along with others like my React-based portfolio, is featured in my portfolio. [] Feel free to check them out—just ask to see the projects, or follow the instructions for direct keywords. [ ] You can also click on the dashboard to check all of them.",
      },

      {
        category: "prioritization",
        keywords: [
          "how do you prioritize tasks",
          "task prioritization",
          "organizing tasks",
          "task management",
          "workload organization",
          "What is your task prioritization strategy?",
          "organize tasks effectively?",
          "manage tasks?",
          "plan your workload?",
          "task organization tips?",
        ],
        answer:
          "I use task management tools to prioritize tasks by urgency and importance, ensuring critical tasks are completed first while maintaining flexibility for changes.",
      },

      {
        category: "failure",
        keywords: [
          "project failure",
          "handling failure",
          "failure examples",
          "dealing with failure",
          "learning from failure",
          "project setbacks",
          "failure lessons",
        ],
        answer:
          "Yes, of course, I've failed more projects than I’ve completed, but each failure has been a valuable lesson in my growth as a developer. A recent example is when I missed the submission deadline for my final project because I focused on drastically improving the app’s performance. Even though I had an MVP ready, I spent extra time optimizing it, which caused a delay. This was a valuable lesson about balancing quality and deadlines, and I’m now more aware of managing my time and expectations better.",
      },
      {
        category: "problem-solving",
        keywords: [
          "tough problem",
          "coding challenge",
          "complex issue",
          "problem-solving ability",
          "coding problems",
          "coding faced",
          "solve problems",
          "troubleshooting issues",
          "debugging bugs",
          "technical problems",
          "optimizing performance",
          "project setbacks",
          "error solutions",
          "thinking skills",
          "development hurdles",
          "code inefficiencies",
          "debugging strategy",
          "performance bottlenecks",
          "solution mindset",
        ],
        answer:
          "I find problem-solving to be one of my key strengths. Programming often presents complex challenges, and I enjoy the process of finding solutions. It’s a continuous learning experience, and I appreciate the opportunity to approach problems from different angles. This mindset helps me stay adaptable and focused when tackling new challenges in the development process, making me well-suited for the dynamic nature of this field.",
      },

      {
        category: "ideal environment",
        keywords: [
          "ideal environment",
          "work best",
          "preferred environment",
          "best work setting",
          "collaborative environment",
          "agile environment",
          "open communication",
          "innovative setting",
          "teamwork environment",
          "productive environment",
          "creative workspace",
          "comfortable setting",
          "motivating space",
          "flexible environment",
          "supportive workplace",
          "focused workspace",
          "dynamic environment",
        ],
        answer:
          "I work best in environments that are collaborative and agile, where open communication is encouraged and everyone feels comfortable sharing ideas. A setting that fosters innovation, teamwork, and creativity is ideal for me. I value flexibility, a supportive atmosphere, and a space that allows for both individual focus and group collaboration. This kind of environment helps me thrive and stay motivated, ultimately leading to the best outcomes in my work.",
      },
      {
        category: "conflict resolution",
        keywords: [
          "conflict resolution",
          "handling conflicts",
          "team disagreements",
          "resolving conflicts",
          "disagreement resolution",
          "team conflict",
          "conflict management",
          "handling disputes",
          "workplace conflict",
          "conflict approach",
          "conflict solution",
          "disagreement management",
          "team resolution",
          "collaborative resolution",
          "effective conflict resolution",
          "problem-solving conflicts",
          "resolving team issues",
        ],
        answer:
          "Conflicts usually arise when people hold grudges, driven by ego, and stop listening to each other. By approaching a conflict with the intention to truly hear the other person, I reduce the chances of escalation by 50% right from the start. I also have a strong urge to resolve misunderstandings quickly, as I believe that a lack of clarity hinders productivity and personal growth. I can't create or be effective in an environment where tension or unresolved issues are allowed to linger.",
      },
      {
        category: "greetings",
        keywords: ["hello", "hi"],
        answer: "Hello! How can I assist you today?",
      },
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
    if (
      questionsAndAnswers.some(
        (q) =>
          q.category === "portfolio" &&
          q.keywords.some((keyword) => normalizedTranscript.includes(keyword))
      )
    ) {
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
      const fallbackPhrase =
        "I'm here to help! Could you please clarify your request?";

      // Check if the fallback phrase is the same as the last spoken phrase
      if (
        fallbackPhrase.trim().toLowerCase() ===
        lastSpokenPhrase.trim().toLowerCase()
      ) {
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
            className={`talk-button 
              ${isListening ? "active" : ""} 
              ${isAssistantSpeaking ? "speaking" : ""} 
              ${isInitial ? "initial" : ""}`}
            onClick={startSpeechRecognition}
          >
            <p>
              {isIntroduction
                ? "" // When introduction is active
                : isInitial
                ? "NIKOLA'S VOICE"
                : isListening
                ? "Listening..." // If actively listening
                : isAssistantSpeaking
                ? "Wait please..." // If assistant is speaking
                : "Please wait..."}{" "}
            </p>
            {/* Hidden paragraph that appears on hover */}
            <span className="talk-button-description">
              Engage in a realistic interview experience with me! Click the
              button to allow microphone access and ask questions about my
              skills, experience, and more. I’ll respond just as I would in a
              real interview. Want to know the best questions to ask? Click the
              Instructions button to see helpful phrases for all the questions.
            </span>
          </motion.button>

          {/* Instruction button to toggle visibility of instructions */}
          <motion.button
            className="instruction-button"
            onClick={toggleInstructions}
          >
            <p>
              {showInstructions ? "Hide Instructions" : "Show Instructions"}
            </p>
          </motion.button>

          <motion.button
            className={`show-portfolio-button`}
            onClick={showPortfolioHandler}
          >
            <p>{"Reveal Portfolio"}</p>
          </motion.button>

          {/* Footer/Contact Info Button */}
          <div className="additional-button-container">
            <button className="extra-action-button" onClick={toggleFooter}>
              Contact Info
            </button>
          </div>
        </div>
      )}

      {/* Instructions paragraph */}
      {showInstructions && (
        <div className="instructions">
          <p>
            show your portfolio? <br />
          </p>
          <p>
            show your work? <br />
          </p>
          <p>
            Introduce yourself? <br />
          </p>
          <p>
            your strong side? <br />
          </p>
          <p>
            your weak side? <br />
          </p>
          <p>
            How do you improve as a developer? <br />
          </p>
          <p>
            find bugs? <br />
          </p>
          <p>
            work in teams? <br />
          </p>
          <p>
            programming languages? <br />
          </p>
          <p>
            recent projects? <br />
          </p>
          <p>
            prioritize tasks? <br />
          </p>
          <p>
            project failure? <br />
          </p>
          <p>
            solve problems? <br />
          </p>
          <p>
            motivating space? <br />
          </p>
          <p>
            conflicts at work? <br />
          </p>
          <p>
            Hi! <br />
          </p>
          <p>
            thank you that was all! <br />
          </p>
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
          <div className="row">
            {portfolioProjects.map((project, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
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
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer with contact information, shown when showFooter is true */}
      {showFooter && (
        <div className="footer-container">
          <div className="contact-info">
            <p>Email: nlekkerman@gmail.com</p>
            <p>Phone: +353 83 095 5102</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
