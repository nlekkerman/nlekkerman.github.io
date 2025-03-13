import React, { useState } from "react";

const Home = () => {
  const portfolioProjects = [
    {
      title: "Future Flowers Shop",
      description:
        "An e-commerce platform built with Django that allows users to browse and purchase flowers. It features real-time cart management, secure payment processing via Stripe, and a responsive front-end designed with Bootstrap. The platform offers an intuitive user interface, where users can easily add items to their cart, manage quantities, and view product details. With a seamless and secure checkout process, users can confidently complete their purchases. The entire shopping experience is optimized for both mobile and desktop, providing a smooth and user-friendly experience across all devices",
      githubLink: "https://github.com/nlekkerman/future_flowers_shop", 
      demoVideo: "https://www.youtube.com/embed/lAvWc11Bgfs", 
      deployedLink: "https://future-flower-shop-7f6f515e140f.herokuapp.com",
    },
    {
      title: "Hotel Wantit",
      description:
        "A web platform designed for booking hotel rooms and restaurant tables. It features an intuitive booking system, real-time availability updates, and a simple interface for managing reservations. Built with Django for the backend and Bootstrap for a responsive front-end, the platform also includes an admin dashboard for managing bookings, reviews, and user feedback. Real-time notifications ensure that both guests and admins stay updated on reservation statuses.",
      githubLink: "https://github.com/nlekkerman/hotel-wantit",
      demoVideo: "https://www.youtube.com/embed/K-VDeyPZJNs",
      deployedLink: "https://hotel-wantit-0444de03d75c.herokuapp.com", // Fixed the deployed link here
    },
  ];

  return (
    <div className="main-container mb-5 mt-5 px-1">
      {/* Portfolio container displayed straight on load */}
      <div className="portfolio-container">
        {/* About Me Section */}
        <section className="about-me mb-5 text-white mt-5">
          <h2 className="text-center">Nikola Simic's Portfolio</h2>
          <p className="text-center">
            As a Full Stack Developer, I am passionate about creating innovative,
            user-focused solutions across front-end and back-end systems. 
            My expertise spans Python, Java, JavaScript, Django, React, and Android app development,
            enabling me to craft scalable applications that meet modern industry demands.
          </p>
        </section>

        {/* Portfolio content */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 g-2 justify-content-center">
          {portfolioProjects.map((project, index) => (
            <div key={index} className="col">
              <div className="project-card border rounded p-3 d-flex flex-column" style={{ height: "100%" }}>
                <div className="project-info d-flex flex-column flex-grow-1">
                  <h3 className="h5">{project.title}</h3>

                  {/* Description with equal height */}
                  <p className="project-description flex-grow-1" style={{ minHeight: "80px", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {project.description}
                  </p>

                  {/* Demo Video */}
                  <div className="demo-video-container mb-3" style={{ flexGrow: 0 }}>
                    <iframe
                      src={project.demoVideo}
                      title={`Demo of ${project.title}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-100"
                      style={{ height: "200px" }}
                    ></iframe>
                  </div>

                  {/* GitHub Link */}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                    style={{ marginTop: "auto" }}
                  >
                    View on GitHub
                  </a>

                  {/* Deployed Link */}
                  <a
                    href={project.deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm mt-2"
                    style={{ marginTop: "auto" }}
                  >
                    Visit the live site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer with contact information */}
      <div className="footer-container vw-100">
        <div className="contact-info">
          <p>Email: nlekkerman@gmail.com</p>
          <p>Phone: +353 83 095 5102</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
