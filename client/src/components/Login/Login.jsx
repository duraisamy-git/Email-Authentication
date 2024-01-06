import React, { useState } from 'react';
import "./login.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const handleSignup = async () =>{
    if(!email || !password){
      return alert("Please fill the details");
    }else {
    const response = await axios.post("http://localhost:4000/user/login",{
      email,
      password,
      
    });
    alert(response.data.msg);
    localStorage.setItem("token", response.data);
    
    console.log(response);
    if(response.data.msg === "Login successfully"){
     
      return navigate("/home");
    }
    
    
    
    
    
   
  }
  }
  return (
    <div className='login_header'>
      
       
        <div className="login_form"  >
       <h1>Login</h1>
        <input type="email" 
        name='email'
        
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
         placeholder='Email' /> <br />
        
        <input type="password"
        name='password'
        
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='Password' /> <br />
        <button  className='btn-btn' type='submit' onClick={handleSignup}> Submit</button>
        <p className='para-login'>Don't you have an accunt?<a href="/signup">signup</a></p>
        </div>
       

    </div>
  )
}

export default Login