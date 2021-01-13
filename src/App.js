import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'


class App extends Component{
  render(){
      return(
          <div className="page-header">
            <nav class="nav-list">
              <ul class="main-nav">
                  <li><Link className="navbar_link" to="/">Home</Link></li>
                  <li><Link className="navbar_link" to="/about">About</Link></li>
                  <li><Link className="navbar_link" to="/skills">Skills</Link></li>
                  <li><Link className="navbar_link" to="/portfolio">Portfolio</Link></li>
                  <li><Link className="navbar_link" to="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
      )
  }
}

export default App;