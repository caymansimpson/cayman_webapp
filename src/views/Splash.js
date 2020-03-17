import React from 'react';
import './Splash.css';
import flower from '../assets/flower.png';
import '../App';
import { Link } from "react-router-dom"

class Splash extends React.Component {
  constructor(props) {
    super(props)
    this.state = {'progress': null};
  }

  render() {
    return (
      <div className="mainSplash">
        <div className="container">
          <p className="big" id="transition1">
            Welcome!
          </p>

          <p className="small" id="transition2">
            This is a personal website that I built out of boredom.
          </p>
          <img src={flower} className="flowerimage" id="transition3" alt="flower"/>
          <Link to="/home">
            <button id="transition3">
              Let's Explore!
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Splash;
