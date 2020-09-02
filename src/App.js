import React from 'react';
import './App.css';
import MyPhoto from './imagen/Myself.png' ;

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
        <div id="box_who_i_am_Header">
          <img id="My_photo" src={MyPhoto} alt="This is me" />
          <h2 class="h2_left_3">Who I am?</h2>
        </div>
        <p> I am a student of computerized information systems at the <a href="http://ut.suagm.edu"
            target="_blank">University of Turabo</a> and I reside inFlorida, USA. Expecting graduate in 2021,
             I work for be part of the developer community, learning every day new cool technologies.</p>
        <p>Do you want to see what I'm doing? Let's take a look below.</p>
      <div>
        <a id="arrow" href="#achievements"><span class="glyphicon glyphicon-arrow-right"></span></a>
      </div>
    </div>
    <div id="Skills">
      <h2 class="h2_left">Technologies I use</h2>
      <div id="technologies_list">
        <p class="a_technology"><span class="glyphicon glyphicon-check technology_icon"></span>Universal
                            Windows
                            Platform (UWP)</p>
        <p class="a_technology"><span class="glyphicon glyphicon-check technology_icon"></span>SQLite
                        </p>
        <p class="a_technology"><span class="glyphicon glyphicon-check technology_icon"></span>Bootstrap
                        </p>
      </div>
    </div>
    </div >

  )
}

export default App;
