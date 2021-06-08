import React, {useContext} from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import axios from 'axios';
import PNG_H360IndentedWhite from '../Logos/PNG_H360IndentedWhite.png';
import '../scss/navbar.css';
import {Button} from './Button';
import isLoggedIn from './LoggedIn';
import {UserContext} from '../App';





const Navbar=()=>{

  const {state, dispatch} = useContext(UserContext);

  const RenderMenu = () =>{
    if(state){
      return(
        <nav className="navbar navbar-expand-lg navbar-dark navbar-dark p-md-3">
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
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="/Contact" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              CONTACT
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><NavLink className="dropdown-item" to="/Contact">CONTACT</NavLink></li>
                <li><NavLink className="dropdown-item" to="/WorkoutPackage">WORKOUTS</NavLink></li>
                <li><NavLink className="dropdown-item" to="/">GALLERY</NavLink></li>
              </ul>
            </li>
            
              
             
              <li className="nav-link" to="/">
                {global.name}
              </li> 
         
              
              <li className="nav-link" to="/">
                <Button buttonStyle="btn--primary" buttonSize="btn--medium" onClick= {logout}>LOGOUT</Button>
              </li> 
               
          </ul>
        </div>
      </div>
    </nav>
    );
    }
    else{
      return(
        <nav className="navbar navbar-expand-lg navbar-dark navbar-dark p-md-3">
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
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="/Contact" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              CONTACT
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><NavLink className="dropdown-item" to="/Contact">CONTACT</NavLink></li>
                <li><NavLink className="dropdown-item" to="/WorkoutPackage">WORKOUTS</NavLink></li>
                <li><NavLink className="dropdown-item" to="/">GALLERY</NavLink></li>
              </ul>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/SignUp"><Button buttonStyle="btn--primary" buttonSize="btn--medium">SIGN IN</Button></NavLink>
            </li>
    
    
            <li className="nav-item">
              <NavLink className="nav-link" to="/Login"><Button buttonStyle="btn--primary" buttonSize="btn--medium">LOGIN</Button></NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
  
    }
  }
  
  

  const logout = () => {
      dispatch({type:'USER', payload:false})
  }
  return(
    <RenderMenu />
  )
      
};

export default Navbar;