import React, { Component } from 'react';
import './ToDo.css';
import { Link } from 'react-router-dom'



class ToDo extends Component{
  render(){
      return(
          <div className="page-header">
            <nav className="nav-list">
              <ul className="main-nav">
                  <li><Link className="navbarLink" to="/">Home</Link></li>
                  <li><Link className="navbarLink" to="/about">About</Link></li>
                  <li><Link className="navbarLink" to="/skills">Skills</Link></li>
                  <li><Link className="navbarLink" to="/portfolio">Portfolio</Link></li>
                  <li><Link className="navbarLink" to="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
      )
  }
}

export default ToDo;

