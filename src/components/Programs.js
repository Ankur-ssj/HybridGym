import React from 'react'
import DSC_0008 from '../Images/DSC_0008.jpg';
import gym1 from '../Images/gym1.png';
import gym2 from '../Images/gym2.jpg';
import gym3 from '../Images/gym3.jpg';
import hw1 from '../Images/hw1.jpg';
import hw2 from '../Images/hw2.jpg';
import hw3 from '../Images/hw3.jpg';
import '../scss/programs.css'

const Programs = () => {
    return (
        <div className="program-container">
        <div className="side-tag">TRAIN DIFFERENT <span> TRAIN 360</span></div>
            <img src={ DSC_0008 } className="proimg1" alt="dummy"/>
            <div className="pro-header">PROGRAMS</div>
            <div className="pro-type">CrossFit</div>
            <div className="pro-info">HYBRID 360FIT has been a pioneer when it come to CrossFit. We have an understanding of the core  value of CrossFit. the embodiment of high-intensity, constantly varied, exercises to achieve optimum human performance. We create an exciting atmosphere, where working out daily towards set goals becomes a joy.
            </div>
            <div className="gym-img-container">
            <img src={gym2} className="proimg2" alt="dummy"/>
            <img src={gym3} className="proimg3" alt="dummy"/>
            <img src={gym1} className="proimg4" alt="dummy"/>
            </div>
            <div className="pro-type2">Gym</div>
            <div className="pro-info2">All our gym are equiped with world-class equipment, from pull-up rigs to the best of elliptical and cardio machines. We have a team of expeirenced and knoledgeable coaches who ensure proper techniques of exercises, guiding you to achieve better every day.
            </div>
            <div className="gym-img-container2">
            <img src={hw1} className="proimg5" alt="dummy"/>
            <img src={hw2} className="proimg6" alt="dummy"/>
            <img src={hw3} className="proimg7" alt="dummy"/>
            </div>
            <div className="pro-type3">Home Workout</div>
            <div className="pro-info3">HYBRID 360FIT is soon launching a home workout program where all the best and proper exercising practices is followed. Hand crafted videos speacially made for our clients to achieve better results at home. Dont let this lockdown go to waste, get your dream figure by following our Home Workout routine Signup today.
            </div>
{/*             <img src={dummy} className="proimg8" alt="dummy"/>
            <div className="pro-header2">Enroll Now</div>
            <div className="pro-type4">Train 360</div>
            <div className="pro-info4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
            </div> */}
        </div>
    )
}

export default Programs;
