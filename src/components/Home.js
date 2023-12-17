  import './Home.css';
  import image from '../images/bg.jpg';
  import ReactPlayer from 'react-player'
  import video from '../videos/planetsorbiting.mp4'
  import iss from '../images/iss.jpg';
import astroid from '../images/asteroid.jpg';
import {motion} from "framer-motion"
import galaxy from '../images/milkyWay-Galaxy.jpg'
import { useEffect } from 'react';
  const Home =()=>{

    useEffect(()=>{
    const data =  document.getElementById("xyz")
 
    } , [])
    return(
<div>
    <div className='containers'>
        <div className='btn'>

        <img src ={image} className='home-bg'/>
    <button className='button'>Sign-in to Explore the Galaxy</button>

        </div>
    
</div>
<h1 style={{textAlign:'center',marginTop:20, color:'white', fontSize:'40px'}}>Immersive Virtual Exploration</h1><br/>
<div className='video-player'><ReactPlayer  url={video} controls={false} playing={true} loop={true} width='100vw' height='100vh'/></div>
<h1 style={{textAlign:'center',marginTop:20, color:'white', fontSize:'40px'}}>More About  Space</h1><br/>
 <div id='xyz' className='space-cards'>
    <motion.div animate={{x:[-1000,0]}} transition={{ease:"linear" , duration:"1" }} className='space-iss-card'>
<div className='div-iss-img'><img src={iss} className='iss-img'/></div>
<h1 style={{textAlign:'center',color:'white'}}>ISS</h1>
<p className='iss-p'>
The International Space Station (ISS) is a habitable space laboratory that orbits Earth. It serves as a platform for scientific research and international collaboration, advancing our understanding of space and enabling exploration beyond our planet.</p>
<button className='card-btn'>Read More</button>
    </motion.div>
    <motion.div animate={{x:[1000,0]}} transition={{ease:"linear" , duration:"1" }}  className='space-astroid-card'>
    <div className='div-iss-img'><img src={astroid}   className='iss-img'/></div>
    <h1 style={{textAlign:'center',color:'white'}}>Astroid</h1>
    <p className='astroid-p'>An asteroid is a rocky object that orbits the Sun. Ranging in size from small boulders to massive bodies, they offer insights into the early solar system and pose potential threats to Earth's impact events.</p>
    <button className='card-btn'>Read More</button>
    </motion.div>
    
 </div>
 <button style={{color:'black' , background:'white',height:'3.4rem',width:'8.5rem' , textAlign:'center' , marginLeft:'30rem' , borderRadius:'2rem',marginTop:'4rem' ,cursor:'pointer'}}>Load More</button>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <h1 style={{color:'white' ,textAlign:'center' , fontSize:'40px'}}>Explore the vast wonders of the Universe</h1>
 <br/>
 <br/>
 <br/>
 <br/>

<div className='galaxy-img-para'>
  <div >
<img src ={galaxy} className='galaxy-img'/>
  </div>
  <div>
<p style={{color:'white',fontSize:'30px',width:'30rem'}}>Welcome to Virtual Galaxy, an immersive virtual galaxy experience that takes you on an extraordinary journey through the cosmos. galaxy like never before.</p>
  </div>
</div>

    </div>
    
    );
}
export default Home;