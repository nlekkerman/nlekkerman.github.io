import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import './Home.css';

const Home = () => {
  const projects = [
    {
      videoSrc: "https://www.youtube.com/embed/example1",
      description: "Explore the untamed beauty of Killarney National Park, Ireland.",
      title: "Killarney Wild",
      link: "https://github.com/nlekkerman/killarney-wild",
      bgClass: "content-killarney",
    },
    {
      videoSrc: "https://www.youtube.com/embed/example2",
      description: "A thrilling number-guessing game that tests your intuition and strategy.",
      title: "Infinite Guess",
      link: "https://github.com/nlekkerman/infinite-guess",
      bgClass: "content-infinite",
    },
    // Add other projects similarly...
  ];

  return (
    <>
      <Navbar />
      <Header />
      <div className="container" id="projects">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default Home;
