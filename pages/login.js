import React, { useState, useEffect } from "react";
import {Router} from 'next/router'
import axios from 'axios';
import { Links } from "../components/links";
import {API_BASE_URL} from '../constants/api'



const preventDefault = f => e => {
    e.preventDefault()
    f(e)
  }
const Login = () => {

  const [state , setState] = useState({
    email : "",
    password : "",
    successMessage: null
})


  const onLoginSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      "email":state.email,
      "password": state.password
    }
    API_BASE_URL.post("/user")
    .then( resp => {
      if (resp.status === 200){
        setState(prevState => ({
          ...prevState,
          'successMessage' : 'Login successful.'
        }))
      }
      else if(response.code === 204){
        alert("Username and password do not match");
      }
      else{
          alert("Username does not exists");
      }
    }).catch(error => {
      console.log(error)
    })
    // alert("Success")
    // if (email && password) {
    //   login({ email, password });
    //   mutate();
    // }
  };

  const handleInputChange = (e) => {
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
  }


  return <>
    <Links />
    <form onSubmit={onLoginSubmit}>
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
      <button type="submit">Login</button>
    </form>
  </>;
}

export default Login;