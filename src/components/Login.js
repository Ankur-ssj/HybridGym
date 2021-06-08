import React, {useState, useContext} from 'react'
import {Button} from './Button';
import axios from 'axios';
import {useHistory, NavLink} from 'react-router-dom';
import '../scss/signup.css';
import formbg from '../Images/formbg.png';
import {UserContext} from "../App";


const Login = () => {

  
  const {state, dispatch} = useContext(UserContext);

    

    const history = useHistory();
    const[email, setEmail] = useState('');
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
                              } 
                              
                              else if(log.status === 200) {
                                window.alert("login successful!");
                                console.log(" login successful!");
                                dispatch({type: "USER", payload:true});
                                history.push('/', {params: true});
                              }
                    })
         
        }

    return (
       <div>
        <img className="formbg" src={formbg} alt=""/>
        <div className="sign-wrapper">
        <div className="sign-title">LOGIN</div>
        <form method="POST" className="signup-form">
          <div className="sign-input-fields">
            <input type="email" autoComplete="off" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" placeholder="Email Address"/>
            <input type="password" autoComplete="off" name="password" value={password} onChange={(e) => setPassword(e.target.value)}className="input" placeholder="Password"/>
          </div>
            <Button className="btn" value="login" onClick={loginUser} id="login" type="submit" value="send">Send</Button>
      </form>
      <p className="below-form">If not a member already please <span><NavLink className="span-txt" to='/SignUp'>Sign up</NavLink></span></p>
      </div>
       </div>

    )
}

export default Login