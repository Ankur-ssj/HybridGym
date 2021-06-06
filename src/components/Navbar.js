import React from 'react';
import { NavLink } from 'react-router-dom';
import PNG_H360IndentedWhite from '../Logos/PNG_H360IndentedWhite.png';
import '../scss/navbar.css';
import {Button} from './Button';


const Navbar=()=>{
    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/"><img className="brand-img" alt="brand Logo" src={PNG_H360IndentedWhite}/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <NavLink className="nav-link" to="/">HOME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/About">ABOUT US</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Programs">PROGRAMS</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/SignUp"><Button buttonStyle="btn--primary" buttonSize="btn--medium">SIGN UP</Button></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/OurTeam"><Button buttonStyle="btn--primary" buttonSize="btn--medium">LOGIN</Button></NavLink>
        </li> 
      </ul>
    </div>
  </div>
</nav>
        
    );
};

export default Navbar;