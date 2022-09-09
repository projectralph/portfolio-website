import React from 'react';
import IMG1 from '../../assets/savory-scripts.png';
import IMG2 from '../../assets/to-do app.png';
import IMG3 from '../../assets/google-map-clone.png';
import IMG4 from '../../assets/NYCBARB.png';
import IMG5 from '../../assets/to-do app.png';
import IMG6 from '../../assets/RSVP-APP.PNG';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Savory Scripts',
      img: IMG1,
      description:
        'A recipe app that shows users instructions on how to cook a variety of dishes. Users can also search for recipes by cuisines.',
      technologies: 'React | Spoonacular API',
      link: 'https://savory-scripts.vercel.app/',
      github: 'https://github.com/projectralph/savory-scripts',
    },
    {
      id: 2,
      title: 'NYC Barbell Landing Page',
      img: IMG4,
      description:
        'Landing page for a local gym in NYC. This page was built using HTML, CSS, and JavaScript.',
      technologies: 'React | TailwindCSS | AOS ',
      link: 'https://nycbarbell.vercel.app/',
      github: 'https://github.com/projectralph/nycbarbell-landingpage',
    },
    {
      id: 3,
      title: 'To-Do-App',
      img: IMG2,
      description: 'User friendly app to plan your day and manage tasks',
      technologies: 'React | Webpack',
      link: 'https://to-do-app-theta-three.vercel.app/',
      github: 'https://github.com/projectralph/To-Do-App',
    },
    {
      id: 4,
      title: 'Google Maps Clone',
      img: IMG3,
      description:
        'Fully responsive Google Maps clone built using HTML, CSS, Javascript, and Mapbox API',
      technologies: 'JavaScript | CSS | HTML | Mapbox API',
      link: 'https://google-map-clone.vercel.app/',
      github: 'https://github.com/projectralph/google-map-clone',
    },
    {
      id: 5,
      title: 'World News',
      img: IMG5,
      description:
        'Fully responsive interactive website built based on Adobe XD design',
      technologies: 'JavaScript | CSS',
      link: 'https://meri-mg.github.io/Unilab-world-news/',
      github: 'https://github.com/Meri-MG/Unilab-world-news',
    },
    {
      id: 6,
      title: 'Capstone: Restaurant Reservation System',
      img: IMG6,
      description:
        'Final project for the Software Engineering course at Thinkful. This project was built using React, Node.js, Express, and PostgreSQL.',
      technologies: 'React | PostgreSQL | Knex | Express | Node.js',
      link: 'https://villa-frontend.herokuapp.com/dashboard',
      github: 'https://github.com/projectralph/RSVP-APP',
    },
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
