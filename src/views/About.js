import React from 'react';
import './About.css';
import '../App';
import { Link } from "react-router-dom"

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {'progress': null};
  }


  render() {
    return (
      <div className="about">
        <h3>Links</h3>
        <ul className="bold">
          <li>
            <a href="https://www.linkedin.com/cayman-simpson" target="_blank">Linkedin</a>
          </li>
          <li>
            <a href="../assets/correlation.png" target="_bank">Resume (TODO: update)</a>
          </li>
        </ul>

        <h3>Story</h3>
        <p>I think it's pretty narcissistic to write a professional auto-biography about yourself.
        Yet, here I am! I hope the few who have made it to this page might actually find interest in
        the same things I do, and might reach out to me to discuss these things.</p>

        <p>Understanding social behavior with data is, I think, at the heart of my interests.
        I don't see myself being able to happily work in any other domain. I became so interested in
        the social aspect of data, after my first exposure to it (TODO link to project), I came back to
        Stanford and attempted to switch my major in Sociology {"(but only ended up with a minor )"}.</p>

        <p>Probably my most impactful and difficult work has happened at Facebook, where I've been working
        over the last couple of years on their Videos platform - to provide a videos consumption experience that
        people feel is fun, meaningful and connecting <span className="italics">{"(if they want it to be )"}</span>.
        I've worked on everything from Video Interactivity, Creators, Publishers, Content Quality, Incrementality
        Measurement, Distribution Incentives, Video Communities and Ranking. Most of what I've worked on boils down
        to answering the question: <span className="bold italics">How does content and interactions with others around
        content change behaviors {"(for good )"}?</span></p>

        <p>If this question interests you too, and you think you might have part of this answer, please reach
        out to me on LinkedIn - I'm always ears for new and better ideas!</p>

      </div>
    )
  }
}

export default About;
