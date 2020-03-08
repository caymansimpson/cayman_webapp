import React from 'react';
// import logo from '../images/logo.svg'; how to import photos; code: src={logo}
import './Example.css';
import '../App';
//import { render } from "react-dom";
import { Link } from "react-router-dom"

// npm install --save react-css-transition-replace
import ReactCSSTransitionReplace from 'react-css-transition-replace';

class Example extends React.Component {
  // constructor(props) {
  //   super(props);
  // }  // boilerplate code

  render() {

    return (
      <div className="example">
        <p> hey, this is an example and it should be red</p>
      </div>
    );
  }
}

export default Example;
