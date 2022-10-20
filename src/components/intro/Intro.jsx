import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p>Hi! I’m Ralph. 

A New York City based full-stacked developer with a front-end focus that has a passion for building excellent software with exquisite user interfaces. I enjoy freelancing creative designs
 and improving my skills to tailor to today’s everchanging job market. A critical-thinking individual with a passion for improvement and being able to blend working
objectives with personal and professional ambitions.
  When I’m not building software, I spend my time competitive powerlifting. <br/>Welcome to my portfolio!
</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro