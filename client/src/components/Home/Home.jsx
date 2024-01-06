import React,{useState} from 'react';
import "./home.css";

const Home = () => {
    const [show,setShow] = useState(false);

    const handleShow=()=>{
        if(show===false){
            setShow(true)
        }else{
            setShow(false)
        }
      }
  return (
    <div className="main-header">
        
       
    
    
    <div className="main_container">
    
    <h2> !!..Hii dear's your email verified and login was successfully..!!</h2>
    </div>
    
    
    </div>
  
        
  )
}

export default Home