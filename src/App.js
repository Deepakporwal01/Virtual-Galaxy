import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home'; 
import rocket from "./images/rocket.png"
import { useEffect, useState } from "react";
import FAQS from './FAQ/faqs';
import { Planet } from './planets/Planet';
import { Signup } from './Signup/Signup';
import { Login } from './Signup/Login';
import { Carddata } from './Carddata/Carddata';
import { Route, Routes } from 'react-router-dom';
import Card from './Card/Card';

function App() { 


 

  return (
    
   <div style={{backgroundColor:'black',height:'100%'}}>
    <Navbar/>
    <Routes >


<Route path='/' element={<Home/>}/>
   <Route path='/gallary' element={<Carddata/>}/>
   <Route path='/FAQ' element={< FAQS/>}/>
   <Route path='/signup' element= {<Signup/>}/>
   <Route path='/login' element= {<Login/>}/>



    </Routes>
   <Footer/>
   
  
    </div>
  );
}

export default App;
