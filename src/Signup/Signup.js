import React from 'react'
 import { NavLink } from 'react-router-dom';
 import {FcGoogle } from "react-icons/fc";
 import { FaFacebook ,FaTwitter } from "react-icons/fa6";
 import signupbg from '../images/2137195.jpg';
 import './Signup.css';

export const Signup = () => {
  return (
    <div className='signup-main' style={{backgroundImage:`url(${signupbg})`,backgroundSize:'contain',backgroundRepeat:'no-repeat'}}> 

    <div className='signup-containt'>
      <div style={{marginTop:'2.4rem'}}>

      <div >
          
          <h1 style={{color:'black'}}>Sign Up</h1>
          <br/>
          <p>Its free and always will be</p>
          <br/>
           
                   </div>
                 
                   <form>
                    <div className='signup-label' >
                    <label >First Name</label>
                    <label >Last Name</label>   
                   </div>
                   <br/>
                   <div className='signup-div'>
                   <input  className='signup-input' name='first name' type='text' placeholder='First name'/> 
                      
                      <input className='signup-input' name='last name' type='text' placeholder='Last name'/> 
                   </div>
                   <br/>
                 <div className='signup-label'>
                 <label ><pre>email           </pre></label> 
                <label >Phone no:</label> 
                 </div>
                 <br/>
                   <div className='signup-div'>
                   <input className='signup-input'  type='email' placeholder='Email '/> 
                   <input className='signup-input' type='number' placeholder='Phone no'/> 
                   </div>
                   <br/>
                      
                    <div className='signup-label'>

                    <label className='signup-label' ><pre>password  </pre></label>
                    <label > confirm password</label>
                    </div>
                    <br/>
                    <div className='signup-div'>
                    <input className='signup-input' type='password' placeholder='password'/> 
                    <input className='signup-input' type='password' placeholder='confirm password'/> 
                    </div>
                    <br/>
                    <br/>
          
                      <button style={{height:'2.8rem',width:'40rem',backgroundColor:'#4e4e4e',color:'white',border:'none',borderRadius:'40px'}}><p style={{fontSize:'18px'}}>Sign Up</p></button>

                   </form>
                   <br/>
                   <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'2px'}}> 
                   <div style={{display:'flex',gap:'1rem'}}>
                   <p>Already sign up ?</p> <NavLink to ='/login'>Login now</NavLink>
          
                   </div>
                   <br/>
                   <p>Or</p>
                   <div className='form-line'></div>
                   <div>
                      <h4 style={{textAlign:'center'}}>Log In As</h4>
                      <br/>
                      <div style={{display:'flex',gap:'1rem',height:'4rem'}}>
                      <NavLink><FcGoogle size={30}/></NavLink>
                      <NavLink><FaFacebook  size={30}/></NavLink>
                      <NavLink><FaTwitter  size={30}/></NavLink>
                      </div>
                     
          
                   </div>
                  
                    
                   </div>
                  



      </div>
   
    </div>
     
        
    </div>
  );
}

 
 