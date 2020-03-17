import React from 'react';
import './App.css';
import Header from './views/Header.js';
import Splash from './views/Splash.js';
import Home from './views/Home.js';
import About from './views/About.js';
import Projects from './views/Projects.js';

import {BrowserRouter, Route} from 'react-router-dom';

// Choose to render Splash
class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="mainContainer">
          <Route exact={true} path='(/|/welcome)' render={() => (<Splash/>)}/>
          <Main/>
        </div>
      </BrowserRouter>
    );
  }
}

// Where I determine how to render different components based on link clicks throughout the app
// Unfortunately, I need to put Header into each one, because the Header shouldnt be rendered during
// "Welcome", and Routes render the Ruote you click and unmount everything else in the current displayed Route
class Main extends React.Component {
  render() {
    return (
      <div>
          <Route exact={true} path='/projects' render={() => (
            <div>
              <Header current="projects"/>
              <div className="main">
                <Projects/>
              </div>
            </div>
          )}/>
          <Route exact={true} path='/home' render={() => (
            <div>
              <Header current="home"/>
              <div className="main">
                <Home/>
              </div>
            </div>
          )}/>
          <Route exact={true} path='/about' render={() => (
            <div>
              <Header current="about"/>
              <div className="main">
                <About/>
              </div>
            </div>
          )}/>
        </div>
    )
  }
}

export default App;
