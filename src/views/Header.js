import React from 'react';
import './Header.css';
import '../App';
import { Link } from "react-router-dom"

class HeaderItem extends React.Component {
  render() {
    return (
      <div className='columnholder'>
        <div className="column">
          <Link to={"/" + this.props.text}>
            <span className={this.props.emphasis? "emphasis":""}>{this.props.text}</span>
          </Link>
        </div>
      </div>
    )
  }
}

// Gets passed props of what current Route we followed, and highlights the item on the UI
// to make it clear which page you're currently viewing
class Header extends React.Component {
  render() {
    return (
      <div className="mainheader">
        <div className="nameContainer">
          <Link to="/home">
            <h1>Cayman Simpson</h1>
          </Link>
        </div>
        <div className="pageselections">
          <HeaderItem text='projects' emphasis={this.props.current==='projects'}/>
          <HeaderItem text='home' emphasis={this.props.current==='home'}/>
          <HeaderItem text='about' emphasis={this.props.current==='about'}/>
        </div>
      </div>
    );
  }
}

export default Header;
