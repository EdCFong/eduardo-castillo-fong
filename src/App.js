import React from 'react';
import './App.css';
import MyPhoto from './imagen/Myself.png';

function App() {
  return (
    <body>
      <Head />
      <AboutMe />
    </body>
  );
}

function Head() {
  return (
    <div id="Head">
      <div id="welcome-section">
        <h1>Hi, I'am Eduardo Castillo Fong</h1>
        <h3>a web and software developer</h3>
      </div>
    </div>
  )
}

function AboutMe() {
  return (
    <div id="Me">
      <div id="WhoIam">

        <div id="WhoIam_Header">
          <img src={MyPhoto} alt="This is me" />
          <h2>Who I am?</h2>
        </div>
        <p> I am a student of computerized information systems at the <a href="http://ut.suagm.edu"
          target="_blank" rel="noopener noreferrer">University of Turabo</a> and I reside inFlorida,
           USA. Expecting graduate in 2021, I work for be part of the developer community, learning
           every day new cool technologies.</p>
        <p>Do you want to see what I'm doing? Let's take a look below.</p>
        <div id="arrowDiv">
          <a id="arrow" href="#achievements"><i class="fas fa-arrow-right"></i></a>
        </div>

      </div>



      <div id="Skills">
        <h2>My skills</h2>
        <div id="skillsList">
          
             <div id="exampleSkill1">
             <img class="skill_icon"
                                src="https://lh3.googleusercontent.com/cx3ZlX60fw5H5SqcEbyuHtXr05jxMtx23JVL5RY8V61rkwfqWod01Ar0XJdW1u2qIXppbv_nXUXExUoP6b-b340dlIKcHTX9vt-DJCAetOuZ8tXqXWndEZcWS4uuaMyzFJZgj8FxfIw=w2400"
                                alt="C# icon"/>
                 <p>WPF</p>
             </div>

        </div>
      </div>
    </div >

  )
}

export default App;
