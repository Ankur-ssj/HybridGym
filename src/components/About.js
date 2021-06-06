import React from 'react'
import '../scss/about.css'
import aboutusimg from '../Images/aboutusimg.png'
import aboutusimg2 from '../Images/aboutusimg2.jpg'
import aboutusimg3 from '../Images/aboutusimg3.jpg'
import aboutusimg4 from '../Images/aboutusimg4.jpg'

const About = () => {
    return (
        <div className="about-container">
            <img className="aboutimg" src={aboutusimg} alt="about us"/>
            <div className="side-tag">TRAIN DIFFERENT <span> TRAIN 360</span></div>
            <div className="about-header">ABOUT US</div>
            <div className="sub-head1">OUR COACHING</div>
            <p className="about-text1">At HYBRID 360FIT,we have a team of experienced and knowledgeable coaches who emphasize proper form, technique, and safety with every workout.Our coaches can help scale movements for each individual athlete, enabling all of our members to be challenged, while progressing as safely as possible. We strive to continually improve and expand our knowledge base to provide members with the best training possible. For us, each member becomes an athlete the moment they enroll, and we believe in providing the best of everything to feed the beast inside you</p>
            <div className="sub-head2">OUR COMMUNITY</div>
            <p className="about-text2">We pride ourselves on having a strong, diverse, and close-knit community. We hold each other accountable during workouts and inspire each other to achieve individual goals. Your fellow members will quickly become some of your closest friends, sharing a passion for having fun inside and outside the gym. We love our community and enjoy hosting social events such as pub crawls, parties, and dinners to help members get to know each other better! Most develop a life long friendship, and what more to add to that?</p>
            <img className="aboutimg2" src={aboutusimg2} alt="about us"/>
            <div className="sub-head3">OUR COMPETITION</div>
            <p className="about-text3">At HYBRID 360FIT, our only competition lies with ourselves, to raise the bar of our standards and quality with each coming day. We do not believe in competing with anyone else because we feel it isn’t productive enough, the only competition you will ever have is with the beast inside you. you can bring the best in when the beast is out!</p>
            <img className="aboutimg4" src={aboutusimg4} alt="about us"/>
            <div className="sub-head4">OUR FACILITIES</div>
            <p className="about-text4">Our spacious gym is fully equipped with large pull-up rigs and world-class pieces of equipment. the gym has restrooms with showers and free dedicated parking. HYBRID 360FIT uses Bratva software to enable our athletes to reserve classes, record workouts, and track improvements. Athletes can access their Bratva profiles from any tablet, computer or mobile device.</p>
            <img className="aboutimg3" src={aboutusimg3} alt="about us"/>
        </div>
    )
}

export default About
