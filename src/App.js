import React from 'react';
import './App.css';
import MyPhoto from './imagen/Myself.png';
import CSharp from './imagen/CSharp.png';
import XAML from './imagen/XAML.png';
import SQLite from './imagen/SQLite_Vector_logo2.png';
import UWP from './imagen/microsoft-store-windows-10.png';
import WPF from './imagen/wpf.png';
import HTML from './imagen/kisspng.com-HTML.png';
import CSS from './imagen/kisspng.com-CSS.png';
import JS from './imagen/javascript-logo.png';
import ReactLogo from './imagen/react.png';
import DateRemember from './imagen/DateRemember-Img.PNG';
import BestNumber from './imagen/BestNumber.png';
import QuotesMachine from './imagen/FriendsQuotesMachine.PNG';
import PomodoroClock from './imagen/Pomodoro Clock.png';




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
    <div id="skillsSection">
      <h1>Skills</h1>
      <div id="skills">
        <Skill name="HTML5" logo={HTML} alt="HTML icon" />
        <Skill name="CSS" logo={CSS} alt="CSS icon" />
        <Skill name="Javascript" logo={JS} alt="Javascript icon" />
        <Skill name="React" logo={ReactLogo} alt="React icon" />
        <Skill name="C#" logo={CSharp} alt="c sharp icon" />
        <Skill name="XAML" logo={XAML} alt="XAML icon" />
        <Skill name="SQLite" logo={SQLite} alt="SQLite icon" />
        <Skill name="Universal Windows Platform" logo={UWP} alt="UWP icon" />
        <Skill name="Windows Presentation Foundation" logo={WPF} alt="WPF icon" />
      </div>
    </div>
  )
}

function Skill(props) {
  return (
    <div className="skill">
      <img src={props.logo} alt={props.alt} />
      <i>{props.name}</i>
    </div>
  )
}

function Projects() {
  return (
    <div id="projectsSection">
      <h1>My projects</h1>
      <div id="projects">
        <div className="project">
          <h2>DateRemember app</h2>
          <div>
            <a href="https://www.microsoft.com/en-us/p/dateremember/9nxqf7xbr5zm?activetab=pivot:overviewtab">
              <img src={DateRemember} alt="DateRemember app" />
            </a>
            <ul>
              <li>Is a windows store app, a tool for save and remember birthdays and other important dates</li>
              <li>Created in Visual Studio using C# and XAML</li>
              <li>Save the dates in an SQLite database and use the windows notifications for notify the nearest</li>
            </ul>
          </div>
        </div>
        <div className="project">
          <h2>BestNumber app</h2>
          <div>
            <a href="https://www.microsoft.com/en-us/p/bestnumber/9nblgggxzmqw">
              <img src={BestNumber} alt="BestNumber app" />
            </a>
            <ul>
              <li>Is a windows store app, a game based on the classic English game of cows and bulls other important dates</li>
              <li>Created in Visual Studio using C# and XAML</li>
              <li>Available in the windows store with 5 stars calcification</li>
            </ul>
          </div>
        </div>
        <div className="project">
          <h2>Random Quote Machine</h2>
          <div>
            <a href="https://codepen.io/edcfong/full/jjXYZV">
              <img src={QuotesMachine} alt="Random Quote Machine" />
            </a>
            <ul>
              <li>This is a Front End Libraries Course's project from <a href="https://www.freecodecamp.org/">FreeCodeCamp</a></li>
              <li>Friends TV Show's random quotes generator</li>
              <li>Created in Visual Studio Code using HTML, CSS, JavaScript and JQuery</li>
            </ul>
          </div>
        </div>
        <div className="project">
          <h2>Pomodoro Clock</h2>
          <div>
            <a href="https://www.microsoft.com/en-us/p/dateremember/9nxqf7xbr5zm?activetab=pivot:overviewtab">
              <img src={PomodoroClock} alt="Pomodoro Clock" />
            </a>
            <ul>
              <li>This is a Front End Libraries Course's project from <a href="https://www.freecodecamp.org/">FreeCodeCamp</a></li>
              <li>Friends TV Show's random quotes generator</li>
              <li>Created in Visual Studio Code using HTML, CSS, JavaScript and JQuery</li>
            </ul>
          </div>
        </div>
      </div>
      <a href><h2 id="h2-moreProjects">See more projects here</h2></a>
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
