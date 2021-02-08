import React from 'react';
import './App.css';
import {DotAnimation} from './gsap.js'

import MyPhoto_img from './imagen/Myself.png';
import CSharp_img from './imagen/Skills - CSharp.png';
import XAML_img from './imagen/Skills - XAML.png';
import SQLite_img from './imagen/Skills - SQLite.png';
import UWP_img from './imagen/Skills - Universal Windows Platform Windows Store Logo.png';
import WPF_img from './imagen/Skills - WPF.png';
import HTML_img from './imagen/Skills - HTML kisspng.com.png';
import CSS_img from './imagen/Skills - CSS kisspng.com.png';
import JS_img from './imagen/Skills - Javascript.png';
import React_img from './imagen/Skills - React.png';
import DateRemember_img from './imagen/Projects - DateRemember.png';
import BestNumber_img from './imagen/Projects - BestNumber.png';
import QuotesMachine_img from './imagen/Projects - FriendsQuotesMachine.png';
import PomodoroClock_img from './imagen/Projects - Pomodoro Clock.png';
import Stackoverflow_img from './imagen/Profiles - Stack Overflow.png';
import FCC_img from './imagen/Profiles - FreeCodeCamp.png';
import Github_img from './imagen/Profiles - Github.png';
import HackerRank_img from './imagen/Profiles - HackerRank.png';
import Linkedin_img from './imagen/Profiles - Linkedin.png';
import FCC_respWebDesign_img from './imagen/Certificate - ResponsiveWebDesign.png';
import FCC_JS_img from './imagen/Certificate - JavaScriptAlgorithmsAndDataStructures.png';
import FCC_frontLibr_img from './imagen/Certificate - ResponsiveWebDesign.png';
import Sololearn_Csharp_img from './imagen/Certificate - CSharp Tutorial.png';
import Sololearn_HTML_img from './imagen/Certificate - HTML Fundamentals.png';
import Sololearn_CSS_img from './imagen/Certificate - CSS Fundamentals.png';




function App() {
  return (
    <body>
      <Head />
      <div id="container">
        <AboutMe />
        <Certifications />
        <Projects />
      </div>
      <Information />
    </body>
  );
}

function Head() {
  return (
    <div id="head">
      <nav>
        <ul>
          <li><a href>Story</a></li>
          <li><a href>Blog</a></li>
          <li><a href>Tutorials</a></li>
          <li><a href>Tools</a></li>
          <li><a href>Linux</a></li>
        </ul>
      </nav>
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
      <Skills />
    </div>
  )
}

function WhoIam() {
  return (
    <div id="whoIam">

      <div id="whoIam_header">
        <img src={MyPhoto_img} alt="This is me" />
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

function Skills() {
  return (
    <div id="skillsSection">
      <h1>Skills</h1>
      <div id="skills">
        <Skill name="HTML5" logo={HTML_img} alt="HTML icon" />
        <Skill name="CSS" logo={CSS_img} alt="CSS icon" />
        <Skill name="Javascript" logo={JS_img} alt="Javascript icon" />
        <Skill name="React" logo={React_img} alt="React icon" />
        <Skill name="C#" logo={CSharp_img} alt="c sharp icon" />
        <Skill name="XAML" logo={XAML_img} alt="XAML icon" />
        <Skill name="SQLite" logo={SQLite_img} alt="SQLite icon" />
        <Skill name="Universal Windows Platform" logo={UWP_img} alt="UWP icon" />
        <Skill name="Windows Presentation Foundation" logo={WPF_img} alt="WPF icon" />
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

class certf {
  constructor(name, issuer, certificationImagen, altImagen) {
    this.name = name;
    this.issuer = issuer;
    this.certificationImagen = certificationImagen;
    this.altImagen = altImagen;
  }
}

function Certifications() {
  let certificationCollection = [];
  certificationCollection.push(new certf("Responsive Web Design", "FreeCodeCamp", FCC_respWebDesign_img,"Responsive Web Design Certificate"));
  certificationCollection.push(new certf("JavaScript Algorithms and Data Structures", "FreeCodeCamp", FCC_JS_img, "JavaScript Algorithms Certificate"));
  certificationCollection.push(new certf("Front End Libraries", "FreeCodeCamp", FCC_frontLibr_img, "Front End Libraries Certificate"));
  certificationCollection.push(new certf("C# Tutorial", "Sololearn", Sololearn_Csharp_img, "C# Tutorial Certificate"));
  certificationCollection.push(new certf("HTML Fundamentals", "Sololearn", Sololearn_HTML_img, "HTML Fundamentals Certificate"));
  certificationCollection.push(new certf("CSS Fundamentals", "Sololearn", Sololearn_CSS_img, "CSS Fundamentals Certificate"));

  return (
    <div id="certifications">
      <h1>Certifications</h1>
      <div id="certificationsContainer">
        <CertificationBoard id="board1" certf0={certificationCollection[0]} certf1={certificationCollection[1]} certf2={certificationCollection[2]} />
        <CertificationBoard id="board2" certf0={certificationCollection[3]} certf1={certificationCollection[4]} certf2={certificationCollection[5]} />
      </div>
      <div className="certificationsDots">
        <div id="dot1" className="dot" href="#board1"></div>
        <div id="dot2" className="dot" href="#board2"></div>
      </div>
    </div>
  )
}

function CertificationBoard(props) {
  return (
    <div className="certificationBoard">
      <Certification name={props.certf0.name} issuer={props.certf0.issuer} certImagen={props.certf0.certificationImagen} alt={props.certf0.altImagen}/>
      <Certification name={props.certf1.name} issuer={props.certf1.issuer} certImagen={props.certf1.certificationImagen} alt={props.certf1.altImagen}/>
      <Certification name={props.certf2.name} issuer={props.certf2.issuer} certImagen={props.certf2.certificationImagen} alt={props.certf2.altImagen}/>
    </div>
  )
}

function Certification(props) {
  return (
    <div className="certification">
      <p>{props.name}</p>
      <a href>From {props.issuer}</a>
      <img src={props.certImagen} alt={props.alt} />
      
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
              <img src={DateRemember_img} alt="DateRemember app" />
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
              <img src={BestNumber_img} alt="BestNumber app" />
            </a>
            <ul>
              <li>Is a windows store app, a game based on the classic English game of cows and bulls other important dates</li>
              <li>Created in Visual Studio using C# and XAML</li>
              <li>Available in the windows store with 5 stars calcification</li>
            </ul>
          </div>
        </div>
        <div className="project">
          <h2>Quote Machine</h2>
          <div>
            <a href="https://codepen.io/edcfong/full/jjXYZV">
              <img src={QuotesMachine_img} alt="Random Quote Machine" />
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
              <img src={PomodoroClock_img} alt="Pomodoro Clock" />
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
    <footer id="information">
      <h2>My profiles</h2>
      <div id="social_media_box">
        <div class="social_media">
          <a href="https://www.linkedin.com/in/eduardo-castillo-fong-0aa094165/?locale=en_US">
            <img class="social_media_icon"
              src={Linkedin_img}
              alt="Linkedln icon" />
          </a>
          <p>Linkedln</p>
        </div>

        <div class="social_media">
          <a id="profile-link" href="https://github.com/EdCFong">
            <img id="Github_icon" class="social_media_icon"
              src={Github_img}
              alt="GitHub icon" />
          </a>
          <p>GitHub</p>
        </div>

        <div class="social_media">
          <a href="https://stackoverflow.com/users/15054658/eduardo-castillo-fong?tab=profile">
            <img id="Stackoverflow_icon" class="social_media_icon"
              src={Stackoverflow_img}
              alt="Stack Overflow icon" />
          </a>
          <p>Stack Overflow</p>
        </div>

        <div class="social_media">
          <a href="https://www.freecodecamp.org/fccc7d4b82a-4ffd-4221-b47a-212f1c605b97">
            <img id="FreeCodeCamp_icon" class="social_media_icon"
              src={FCC_img}
              alt="FreeCodeCamp icon" />
          </a>
          <p>Free Code Camp</p>
        </div>

        <div class="social_media">
          <a href="https://www.hackerrank.com/eduardcf90">
            <img class="social_media_icon"
              src={HackerRank_img}
              alt="HackerRank icon" />
          </a>
          <p>Hacker Rank</p>
        </div>
      </div>

      <p id="contact">Contact me by <inline>eduardcf90@gmail.com</inline></p>
      <div id="moreLinks">
        <div id="personalInformation">
          <p>Information</p>
          <ul>
            <li><a href>Story</a></li>
            <li><a href>Path</a></li>
            <li><a href>All projects</a></li>
            <li><a href>All certifications</a></li>
            <li><a href>Work History</a></li>
          </ul>
        </div>
        <div id="resources">
          <p>Resources</p>
          <ul>
            <li><a href>Tools</a></li>
            <li><a href>Tutorials</a></li>
            <li><a href>Blog</a></li>
            <li><a href>Arduino projects</a></li>
            <li><a href>Linux</a></li>
          </ul>
        </div>
        <div id="others">
          <p>Others</p>
          <ul>
            <li><a href>Chess</a></li>
            <li><a href>sololearn</a></li>
            <li><a href>Codepen</a></li>
            <li><a href>Quora</a></li>
            <li><a href>Games</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

//DotAnimation("#dot1","#dot2");


export default App;
