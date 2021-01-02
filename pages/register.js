import React, { useState, useEffect } from "react";
import {Router} from 'next/router'
import axios from 'axios';
import { Links } from "../components/links";
import {API_BASE_URL} from '../constants/api'



const preventDefault = f => e => {
    e.preventDefault()
    f(e)
  }
const Register = () => {

  const [state , setState] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email : "",
    password : "",
    confirmPassword: "",
    successMessage: null
})

const handleInputChange = (e) => {
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
  }

  const sendDetailsToServer =  () => {
  
    if(state.email.length && state.password.length) {
        const payload={
            "email":state.email,
            "password":state.password,
        }
        var config = {
            headers: { 
              "Access-Control-Allow-Origin" : "localhost:8001",
            
          },
            responseType: 'blob'
        };
        
        API_BASE_URL.post("/user", payload, config)
        .then( resp => {
            if (resp.status === 200){
              setState(prevState => ({
                ...prevState,
                'successMessage' : 'Registration successful.'
              }))
            }
            else{
                alert("Be reasonable");
            }
          }).catch(error => {
            console.log(error)
          })
    }
   
  };

  const onRegister= async (e) => {
    e.preventDefault();
    if(state.password === state.confirmPassword) {
        alert('Passwords do not match');   
    } else {
        sendDetailsToServer() 
        
    }
  }




  return <>
    <Links />
    <form onSubmit={onRegister}>
    <div>
        <label htmlFor="username">Username</label>
        <input type="text"
               id="username"
               name="username"
               onChange={handleInputChange}
               value={state.username}
        />
      </div>
      <div>
        <label htmlFor="firstame">First Name</label>
        <input type="text"
               id="firstname"
               name="firstname"
               onChange={handleInputChange}
               value={state.firstname}
        />
      </div>
      <div>
        <label htmlFor="lastname">Last Name</label>
        <input type="text"
               id="lastname"
               name="lastname"
               onChange={handleInputChange}
               value={state.lastname}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email"
               id="email"
               name="email"
               onChange={handleInputChange}
               value={state.email}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password"
               id="password"
               name="password"
               onChange={handleInputChange}
               value={state.password}
        />
      </div>
      {/* <div>
        <label htmlFor="password"> Confirm Password</label>
        <input type="password"
               id="password"
               name="password"
               onChange={handleInputChange}
               value={state.confirmPassword}
        />
      </div> */}
      <button type="submit">Register</button>
    </form>
  </>;
}

export default Register;