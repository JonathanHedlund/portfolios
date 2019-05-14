import React, { Component } from 'react';
import './App.css';
import pf from './IMG_0599.JPG';
import logo from './logo.png'
import profilbild from './profilbild.jpg'
import Projects from './components/Projects.js'
import WorkExperience from './components/WorkExperience.js'
import Experiences from './components/Experiences.js'

class App extends Component {

  render() {
    return (

      <div className="Main">
        <div className="Personal">
          <div className="About">
            <img src={pf} alt="Profilbild" />
            <div className="Info">
              <h1>JONATHAN HEDLUND</h1>
              <h4>M.Sc.Eng STUDENT IN INTERACTION AND DESIGN</h4>
              <p>I have a genuine interest in design, entrepreneurship and psychology.
               I'm a curious person that loves getting involved in new projects and challenges
               where I get the opportunity to learn new, and apply my existing knowledge.
               When I'm not studying i spend most of my time training and reading.</p>
              <hr />
              <div className="Education">
                <h4>EDUCATION</h4>
                <p>M.Sc.Eng IN INTERACTION AND DESIGN <br />UMEÅ UNIVERSITY - 300 HP｜AUGUST 2016 - CURRENT</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="links">
            <a className="Link" href="mailto:jonathan.hedlund.371@gmail.com">
              <i className="far fa-envelope fa-2x"></i>
              <p>EMAIL</p>
            </a>
            <a className="Link" target="_blank" href="https://www.linkedin.com/in/jonathanhedlund/">
              <i className="fab fa-linkedin-in fa-2x"></i>
              <p>LINKEDIN</p>
            </a>
            <a className="Link" target="_blank" href="https://drive.google.com/file/d/1N85m8WA0dHi70sgX9nF-sXW3uG8n093_/view?usp=sharing">
              <i className="far fa-file fa-2x"></i>
              <p>CV</p>
            </a>
            <a className="Link" target="_blank" href="https://www.goodreads.com/user/show/89568653-jonathan-hedlund">
              <i className="fas fa-book fa-2x"></i>
              <p>BOOKSHELF</p>
            </a>
          </div>
        </div>
        <div className="Experiences">
          <WorkExperience />
          <Projects />
          <Experiences />
        </div>
      </div>
    );
  }
}

export default App;
