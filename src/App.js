import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import SignUp from './components/SignUp';
import Programs from './components/Programs';

const App=()=>{
  return (
    <Router>
    <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/About" exact component={About}/>
        <Route path="/SignUp" exact component={SignUp}/>
        <Route path="/Programs" exact component={Programs}/>
      </Switch>
    </Router>
  );
}

export default App;