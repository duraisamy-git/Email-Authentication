import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useDispatch} from 'react-redux';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import Verify from './components/Verify/Verify';
import { handleLogin } from './components/slices/user';

const App = () => {

  const dispatch = useDispatch();
  useEffect(()=>{
    let token = localStorage.getItem("token");
    if(token){
     dispatch(handleLogin(token));
    
    } 
  },[]);
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path="/user/verify/:token"  element={<Verify />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App