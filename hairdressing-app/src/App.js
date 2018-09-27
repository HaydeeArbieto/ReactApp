import React, { Component } from 'react';
import logo from './logo.svg';
import logohairdressing from "./images/logotyp.png";
import './App.css';

import ReactDOM from 'react-dom';
import { Link, Route, Switch } from 'react-router-dom';
//import Loadable from 'react-loadable';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import Home from './js/Home';
import Contact from './js/Contact';
import Pricelist from './js/Pricelist';
import Galeri from './js/Galeri';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logohairdressing} className="App-logo" alt="logohairdressing" />
          <h1 className="App-title">Welcome to Nina's Salong!</h1>
        </header>
        <p className="App-intro">
          Here is a app...  </p>
          
        <Navbar class="navbar navbar-default">
          <Nav>
            <NavItem eventKey={Home} href="/">Home</NavItem>
            <NavItem eventKey={Pricelist} href="/pricelist">Prislista</NavItem>
            <NavItem eventKey={Galeri} href="/galeri">Galeri</NavItem>
            <NavItem eventKey={Contact} href="/contact">Kontakta oss</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-    dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
         
        <Route exact path="/" component={Home}/>
        <Route path='/pricelist' component={Pricelist}/>
        <Route path="/galeri" component={Galeri}/>
        <Route path='/contact' component={Contact}/>
      </div>  
    );
  }
}

export default App;