import React, {useState} from 'react'
import {Button} from './Button';
import {useHistory, NavLink} from 'react-router-dom';
import '../scss/signup.css';
import formbg from '../Images/formbg.png';

const SignUp = () => {
    const history = useHistory();
    const [res , setRes] = useState({});
    const [user, setUser] = useState({
      name: "", email: "", phone:"", password: "",
    });
    let name, value;
    const handleInputs = (e) =>{
      name = e.target.name;
      value = e.target.value;

      setUser({...user, [name]:value});
    }
    const postData = async (e)=>{
      e.preventDefault();
      const{ name, email, phone, password }= user;
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name: name,
          email: email,
          phone: phone,
          password: password,
         })
    };  
       await fetch('https://gym-app-rest-api.herokuapp.com/users/signup', requestOptions)
        .then(response => setRes(response));
      }
      console.log(res);
      if(res.status === 400 || !res) {
        window.alert("Invalid registration!");
        console.log("invalid registration!");
      } else if(res.status === 201) {
        window.alert(" Registration successful!");
        console.log(" Registration successful!");

        history.push("/Login");
      }

    return (    
        <div>
        <img className="formbg" src={formbg} alt="background"/>
        <div className="sign-wrapper">
        <div className="sign-title">SIGN UP</div>
        <form method="POST" className="signup-form">
          <div className="sign-input-fields">
            <input type="text" autoComplete="off" name="name" id="name" value={user.name} onChange={handleInputs} className="input" placeholder="Name"/>
            <input type="email" autoComplete="off" name="email" id="email" value={user.email} onChange={handleInputs} className="input" placeholder="Email Address"/>
            <input type="number" autoComplete="off" name="phone" id="phone" value={user.phone} onChange={handleInputs} className="input" placeholder="Phone"/>
            <input type="password" autoComplete="off" name="password" id="password" value={user.password} onChange={handleInputs} className="input" placeholder="Password"/>
          </div>
            <Button className="btn" name="signup" id="signup" onClick={postData} type="submit" value="register">SIGN UP</Button>
      </form>
      <p className="below-form">If already a member already please <span><NavLink className="span-txt" to='/Login'>Login</NavLink></span></p>
      </div>
</div>

    )
    }

export default SignUp
