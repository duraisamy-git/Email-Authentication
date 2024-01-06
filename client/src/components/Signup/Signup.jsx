import React,{useState} from 'react';
import axios from "axios";
import "./signup.css";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
  const [name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[age, setAge] = useState("");
  const [contactNo, setContactNo] = useState(""); 

  const handleClick = async ()=>{
       if(!name || !email || !password || !age || !contactNo){
        return alert("Please fill the all details");
       }
    
    const {data} = await axios.post("http://localhost:4000/user/signup",{
      name,email,password,age,contactNo,
    });
    console.log(data);
    alert(data.msg);
    
    
  }
  
  return (
    <div className='signup_header'>
      
      
    <div className="signup_form" >
   <h1>Signup</h1>
    <input type="text" name='name' required value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name' /> <br />
    <input type="email" name='email' required value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder='Email' /> <br />
    <input type="password" name='password' required value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' /> <br />
    <input type="number" name='age' required value={age} onChange={(e)=>setAge(e.target.value)} placeholder='Age' /> <br />
    <input type="number" required value={contactNo} onChange={(e)=>setContactNo(e.target.value)} placeholder='ContactNo' /> <br />

    <button  className='btn-btn' type='submit' onClick={handleClick} > Submit</button>
    <p className='para-signup'>Do you have an accunt?<a href="/">login</a></p>
    </div>
   

</div>
  )
}

export default Signup