import React, {useState} from 'react'
import {Button} from './Button';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import '../scss/signup.css';
import formbg from '../Images/formbg.png';

const Login = () => {
    const history = useHistory();
    const[token, setToken] =useState('');
    const[email, setEmail] = useState('');
    const[res, setRes] = useState({});
    const[password, setPassword] = useState('');

    const loginUser = async(e) =>{
        e.preventDefault();
            console.log('reached')
            const axiosPost = axios.create({
              baseURL: 'https://gym-app-rest-api.herokuapp.com'});
                await axiosPost.post('/users/login', {
                  'email': email,
                  'password': password,
                }) //syntax switched to backticks from inverted commas for global uid
                .then(log  =>{ 
                            global.token = log.data.accessToken;
                            global.name = log.data.name;
                            global.uid = log.data.id;
                            console.log(global.token);
                            if(log.status === 500 || !log) {
                                window.alert("Invalid credentials !");
                                console.log("invalid credentials!");
                              } else if(log.status === 200) {
                                window.alert("login successful!");
                                console.log(" login successful!");
                                history("/" , {params:"loggedin"})
                              }
                    })
          console.log(res);
          console.log(token);

        }

    return (
       <div>
        <img className="formbg" src={formbg} alt=""/>
        <div className="sign-wrapper">
        <div className="sign-title">SIGN UP</div>
        <form method="POST" className="signup-form">
          <div className="sign-input-fields">
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" placeholder="Email Address"/>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}className="input" placeholder="Password"/>
          </div>
            <Button className="btn" value="login" onClick={loginUser} id="login" type="submit" value="send">Send</Button>
      </form>
      </div>
       </div>

    )
}

export default Login
