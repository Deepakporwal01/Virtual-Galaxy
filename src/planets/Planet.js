 import React from 'react'
 import { NavLink } from 'react-router-dom';
 import './Planets.css'
 
 export const Planet = () => {
    const linktext ={
        textDecoration : 'none',
 fontSize :'18px',
        color :'black',
        
        
    }
   return (
    <>

<div className='nav-planet-div'>
<div className='Nav-planet'>
<NavLink to ="/" style={linktext} className='link-text'><button className='nav-btn'>Planets</button></NavLink>
 <NavLink to ="/"  style={linktext} className='link-text'><button className='nav-btn'>DwarfPlanets</button></NavLink>
 <NavLink to ="/" style={linktext} className='link-text'><button className='nav-btn' >ISS</button></NavLink>
 <NavLink to ="/" style={linktext} className='link-text'><button className='nav-btn'>Astroids</button></NavLink>
 <NavLink to ="/" style={linktext} className='link-text'><button className='nav-btn'>Satelites</button></NavLink>
 <NavLink to ="/"  style={linktext} className='link-text'><button className='nav-btn'>Probes</button></NavLink>

</div>
     </div>
    </>
 
   );
 }
 
