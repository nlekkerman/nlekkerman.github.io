import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ videoSrc, description, title, link, bgClass }) => (
  <div className="project-card">
    <div className="video-container">
      <iframe
        src={videoSrc}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
      ></iframe>
      <p className="mt-3">{description}</p>
    </div>
    <div className={`content-container ${bgClass}`}>
      <h3>{title}</h3>
      <a className="demo-link" href={link} target="_blank" rel="noopener noreferrer">
        View GitHub Repo
      </a>
    </div>
  </div>
);

ProjectCard.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  bgClass: PropTypes.string.isRequired,
};

export default ProjectCard;
