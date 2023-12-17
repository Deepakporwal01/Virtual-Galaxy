import image from '../logo/logo.png'
import {FaGreaterThan } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import './Footer.css';
import {AiOutlineWhatsApp ,AiOutlineTwitter ,AiFillInstagram,AiFillLinkedin,AiOutlineGithub} from "react-icons/ai";
import {BsFacebook} from "react-icons/bs";

const Footer =()=>{

    const iconsize ={

        width:25,height:25

    }
    return (
        <div>
            <footer className='footer'>
            <div className="container">
        <div className="footer-address">
  <div><img src ={image} className="footer-logo"/></div>
  <h1 className='footer-heading'>Virtual Universe</h1>
  <p className='footer-p'>Lakshmi Narayan College of Technology and Science,</p>
  <p className='footer-p'>Bhopal</p>
  <p className='footer-p'>Madhya Pradesh,462022</p>
  <p className='footer-p'><b>phone:</b>+91-7389517818</p>
        </div>
        <div className="footer-usefullinks">
            <div className='heading-underline'>
            <h1 className='footer-heading'>Useful Links</h1>
          <div className='underline'></div>
            </div>

<br/>
<FaGreaterThan color='white'/>  <NavLink to =" ">Home</NavLink> <br/> <br/>
<FaGreaterThan color='white'/>  <NavLink to =" ">Services</NavLink> <br/><br/>
<FaGreaterThan color='white'/>  <NavLink to =" ">Terms of Services</NavLink> <br/><br/>
<FaGreaterThan color='white'/>  <NavLink to =" ">Privacy Policy</NavLink><br/><br/>
        </div>
        <div className="footer-ourservices">
            <div className='heading-underline'>
            <h1 className='footer-heading'>Our Services</h1>
<div className='underline'></div>
            </div>

<br/>
<FaGreaterThan color='white'/>   <NavLink to =" ">3D Models</NavLink> <br/><br/>
<FaGreaterThan color='white'/>   <NavLink to =" ">Planets</NavLink> <br/><br/>
<FaGreaterThan color='white'/>   <NavLink to =" ">Information</NavLink> <br/><br/>
        </div>
        <div className="footer-community">
            <div className='heading-underline'>
            <h1 className='footer-heading'>Community </h1>
            
<div className='underline'></div>
            </div>

<br/> 
<FaGreaterThan color='white' />   <NavLink to =" ">About Us</NavLink> <br/><br/>
<FaGreaterThan color='white'/>   <NavLink to =" ">Benifits</NavLink> <br/><br/>
<FaGreaterThan color='white'/>   <NavLink to =" ">Accomplishment</NavLink> <br/><br/>
<FaGreaterThan color='white'/>   <NavLink to =" ">FAQ</NavLink> <br/><br/>
        </div>
            </div>
            <br/>
            <br/>
            
        
            <div className='footer-end'>

                <div className=' footer-copyright'>
<h2 className='footer-p' style={{fontSize:"15px"}}>© Copyright Virtual Universe. All Rights Reserved
Designed by Deepak Porwal</h2>
                </div>
                <div className='footer-endright' style={{gap:"1rem"}}>
                  

<div className='footpara'>
<p className='footer-p'> Stay in the loop?</p>
</div>
<div className='footer-icons'>
   <NavLink to =" " ><AiOutlineWhatsApp style={iconsize} /></NavLink> <br/>
   <NavLink to =" "><AiOutlineTwitter style={iconsize} /></NavLink> <br/>
   <NavLink to =" "><BsFacebook  style={iconsize}/></NavLink> <br/>
   <NavLink to =" "><AiFillInstagram  style={iconsize}/></NavLink> <br/>
  <NavLink to =" "><AiFillLinkedin  style={iconsize}/></NavLink> <br/>
  <NavLink to =" "><AiOutlineGithub  style={iconsize}/></NavLink> <br/>






</div>
                </div>

            </div>
            </footer>
           
        </div>
    );
}
export default Footer;