import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import SignUp from './components/SignUp';
import Programs from './components/Programs';
import Footer from './components/Footer';
import Contact from './components/Contact';
import WorkoutPackage from './components/WorkoutPackage';
import Login from './components/Login';

const App=()=>{
  return (
    <Router>
    <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/About" exact component={About}/>
        <Route path="/SignUp" exact component={SignUp}/>
        <Route path="/Programs" exact component={Programs}/>
        <Route path="/Contact" exact component={Contact}/>
        <Route path="/WorkoutPackage" exact component={WorkoutPackage}/>
        <Route path="/Login" exact component={Login}/>
      </Switch>
    <Footer/>
    </Router>
  );
}

export default App;