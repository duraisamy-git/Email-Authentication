import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import "./verify.css";

const Verify = () => {
    const {token} = useParams();
    const [loading, setLoading] = useState(true);
   
    const verifyUser = async ()=>{
        try {
            const response = await axios.get(`https://email-login-fjv7.onrender.com/user/verify/${token}`
            );
            alert(response.data.msg);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(()=>{
        if(token){
            verifyUser();
        };
    },[token]);

    if(loading){
        return(
            <div className='verify_loading'>
                <img src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif" 
                alt="" />
            </div>

            
        );
    }

  return (
    <div className='verify' >
        <h1>Verified Successfully</h1>
        <img src="https://media.tenor.com/0AVbKGY_MxMAAAAM/check-mark-verified.gif" 
        alt=""  
        className='verified'
        />
        <Link to="/login">
         <button>Login Now</button>
        </Link>
    </div>
  )
}

export default Verify
