import React from 'react'
import emailjs from 'emailjs-com';
import {Button} from './Button';
import '../scss/contact.css';
import formbg from '../Images/formbg.png';

const Contact = () => {
    const sendEmail=(e)=> {
        e.preventDefault();
    
        emailjs.sendForm('service_hcyqi1s', 'template_xzo6poa', e.target, 'user_bQpp9jytp4yCJOBCH706U')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }
    return (
        <div>
        <img className="formbg" src={formbg} alt="background"/>
        <div className="wrapper">
        <div className="title">CONTACT US</div>
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="input-fields">
            <input type="text" Name="name" className="input" placeholder="Name"/>
            <input type="email" Name="email" className="input" placeholder="Email Address"/>
            <input type="number" Name="phone" className="input" placeholder="Phone"/>
          </div>
          <div className="msg">
            <textarea Name="message" placeholder="Message"></textarea>
            <Button className="btn" type="submit" value="send">Send</Button>
          </div>
      </form>
      </div>
</div>
    )
}

export default Contact
