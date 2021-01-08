import React from 'react';
import './App.css';
import MyPhoto from './imagen/Myself.png';
import iconC from './imagen/CSharp.png'

function App() {
  return (
    <body>
      <Head />
      <div id="container">
        <AboutMe />
        <Skills />
        <Projects />
      </div>
      <Information />
    </body>
  );
}

function Head() {
  return (
    <div id="head">
      <div id="presentationMessage">
        <h1>Hi, I'm Eduardo Castillo Fong</h1>
        <h3><strong>&gt;_</strong> software developer and computer enthusiast</h3>
      </div>
    </div>
  )
}

function AboutMe() {
  return (
    <div id="Me">
      <WhoIam />
      <Certifications />
    </div>
  )
}

function WhoIam() {
  return (
    <div id="whoIam">

      <div id="whoIam_header">
        <img src={MyPhoto} alt="This is me" />
        <h2>Who I am?</h2>
      </div>
      <p> I am a student of computerized information systems at the <a href="http://ut.suagm.edu"
        target="_blank" rel="noopener noreferrer">University of Turabo</a> and I reside inFlorida,
        USA. Expecting graduate in 2021, I work for be part of the developer community, learning
        every day new cool technologies.</p>
      <p> I am a student of computerized information systems at the <a href="http://ut.suagm.edu"
        target="_blank" rel="noopener noreferrer">University of Turabo</a> and I reside inFlorida,
        USA. Expecting graduate in 2021, I work for be part of the developer community, learning
        every day new cool technologies.</p>
      <p>Do you want to see what I'm doing? Let's take a look below.</p>

      <a id="arrow" href="#achievements"><i class="fas fa-arrow-right"></i></a>


    </div>
  )
}

function Certifications() {
  return (
    <div id="certifications">

    </div>
  )
}

function Skills() {
  return (
    <div id="skills">
      <h1>Skills</h1>
      <Skill />
    </div>
  )
}

function Skill() {
  return (
    <div class="skill">
      <img src={iconC} alt="c sharp icon" />
      <i>C# programing</i>
    </div>
  )
}

function Projects() {
  return (
    <div>

    </div>
  )
}

function Information() {
  return (
    <div>

    </div>
  )
}


export default App;
