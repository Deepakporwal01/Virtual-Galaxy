import React from 'react'
 import { NavLink } from 'react-router-dom'
 import background from '../images/2137195.jpg'
 import {FcGoogle } from "react-icons/fc";
 import { FaFacebook ,FaTwitter } from "react-icons/fa6";
 import './Login.css';


export const Login = () => {
  return (
    <div className='main-login' style={{backgroundImage:`url(${background})`,backgroundSize:'contain'}}>
        <div className='login-m'>
<div className='login-inside' style={{fontWeight:'bold',marginTop:'2rem'}}>
<h1 style={{ }}><b>Welcome Back !</b></h1><br/>
        <p style={{ }}><b>you have been missed</b></p><br/>
        <form>
        <label className='label-m' ><b>Email</b></label><br/>
        <br/> 
            <input  className='input-m' type='email' placeholder='Enter your Email'/><br/><br/>
            <label className='label-m'><b>Password</b></label><br/><br/>
            <input  className='input-m'  type='password' placeholder='Password'/><br/>
            <br/>
            <button className='button-m'>Login</button>
        </form>
        <div style={{display:'flex',flexDirection:'column',gap:'1rem', justifyContent:'center' ,alignItems:'center',marginTop:'10px'}}>
        <NavLink>Forgot password?/</NavLink>
        <div style={{display:'flex',gap:'0.5rem'}}><div>Not signed up?</div><NavLink to='/signup'><p>Sign up now</p></NavLink> </div>

      <p>Or</p>
    
            <h4>Log In As</h4>
            <div style={{display:'flex' ,gap:'2rem'}}>
            <NavLink><FcGoogle size={35}/></NavLink>
            <NavLink><FaFacebook size={35}/></NavLink>
            <NavLink><FaTwitter size={35}/></NavLink>
            </div>
           

         </div>

</div>
       
        </div>
       
        
    </div>
    
    
  )
}

 