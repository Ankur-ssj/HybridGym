import React from 'react'
import dummy from '../Images/dummy.png';
import '../scss/programs.css'

const Programs = () => {
    return (
        <div className="program-container">
        <div className="side-tag">TRAIN DIFFERENT <span> TRAIN 360</span></div>
            <img src={dummy} className="proimg1"/>
            <div className="pro-header">PROGRAMS</div>
            <div className="pro-type">CrossFit</div>
            <div className="pro-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
            </div>
            <div className="gym-img-container">
            <img src={dummy} className="proimg2"/>
            <img src={dummy} className="proimg3"/>
            <img src={dummy} className="proimg4"/>
            </div>
            <div className="pro-type2">Gym</div>
            <div className="pro-info2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
            </div>
            <div className="gym-img-container2">
            <img src={dummy} className="proimg5"/>
            <img src={dummy} className="proimg6"/>
            <img src={dummy} className="proimg7"/>
            </div>
            <div className="pro-type3">Home Workout</div>
            <div className="pro-info3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
            </div>
            <img src={dummy} className="proimg8"/>
            <div className="pro-header2">Enroll Now</div>
            <div className="pro-type4">Train 360</div>
            <div className="pro-info4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
            </div>
        </div>
    )
}

export default Programs;
