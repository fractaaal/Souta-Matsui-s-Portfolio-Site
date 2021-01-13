import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDo from './ToDo'
import Fade from './component/Fade';
import Home from './component/Home';
import About from './component/About';
import Skills from './component/Skills';
import Portfolio from './component/Portfolio';
import Contact from './component/Contact';
import LogosAnimation from './component/LogosAnimation';
import FullWidthTabs from './Tabs'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ToDo />
    <Route exact path={'/'} component={Home}/>
    <Route path={'/about'}  component={About}/>
    <Route path={'/skills'}  component={Skills}/>
    <Route path={'/portfolio'} component={Portfolio}/>
    <Route path={'/contact'} component={Contact}/>
  </BrowserRouter>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
