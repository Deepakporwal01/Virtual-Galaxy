import image from '../logo/logo.png';
import animation from '../logo/404088096solar-system-orbits-gif.gif'
import { NavLink } from 'react-router-dom';
import './Navbar.css';
const Navbar = ()=>{
    const linktext ={
        textDecoration : 'none',
 fontSize :'19px',
        color :'white',
    }
    return (<div className='main-navbar'> 
        <div className="navbar">
             
<div className='left-nav'>
    <div ><img src ={image} className ='logo-img'/></div>
        
 <h2 className="virtual-text">Virtual Galaxy</h2>
</div>

            
     <div className='right-nav'>
      <div>  <img src ={animation}  className="nav-animation"/></div>
 <NavLink to ="/" style={linktext} className='link-text'><button className='nav-btn'>Home</button></NavLink>
 <NavLink to ="/"  style={linktext} className='link-text'><button className='nav-btn'>Planets</button></NavLink>
 <NavLink to ="/gallary" style={linktext} className='link-text'><button className='nav-btn' >Gallery</button></NavLink>
 <NavLink to ="/FAQ" style={linktext} className='link-text'><button className='nav-btn'>FAQ</button></NavLink>
 <NavLink to ="/signup" style={linktext} className='link-text'><button className='nav-btn'>Sign-In</button></NavLink>

</div>

    


            </div>
        
        </div>
        
    
   

    
    
    
    
    
    );

}
export default Navbar;