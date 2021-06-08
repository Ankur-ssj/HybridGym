import React from 'react'
import { Link } from 'react-router-dom';
import herosectionbg from '../Images/herosectionbg.png'
import '../scss/home.css';
import {Button} from './Button';

const Home = () => {
    return (
        <div>
        <img src={herosectionbg} alt="background" className="herobg"/>
            <div className="home-container">
                <div className="side-tag">TRAIN DIFFERENT <span> TRAIN 360</span></div>
                <div className="headline">WE WILL HELP YOU ACHIEVE WHAT SEEMS IMPOSSIBLE.</div>
                <h1 className="header">Write something here!</h1>
                <div className="hero-button">
                <Link style={{backgroundColor: "transparent"}} to="/About"><Button buttonSize="btn--large">GET STARTED</Button></Link>
                </div>
            </div>
            </div>
    )
}

export default Home
