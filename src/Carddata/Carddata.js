import React from 'react'
 import blackhole from '../gallary/istockphoto-1088863384-612x612.jpg';
import astroidbelt from'../gallary/istockphoto-182090715-612x612.jpg';
import solar from'../gallary/sxE67qL6n6pmzf5Fp3bxSB-1200-80.jpg.webp';
import solarstream from '../gallary/XG38ontTs25pTcuDwW9dH-1200-80.jpg'
import milkeyway from '../gallary/istockphoto-530045185-612x612.webp';
import satelite from '../gallary/maxresdefault.jpg';
import moon from '../gallary/moon-1527501_1280.jpg';
import landingrover from '../gallary/mars-mars-rover-space-travel-robot-73910.jpeg';
import astronaut from '../gallary/sky-earth-space-working.jpg';
import sun from '../gallary/sun-11582_640.jpg';
import mars from '../gallary/mars-11012_640.jpg';
import telescope from '../gallary/istockphoto-1418847625-612x612.webp';
import Card from '../Card/Card.js';
import './Carddata.css';

export const Carddata = () => {

const cardsdata =[
    {
        imageUrl:`${blackhole}`,
        title: 'Black Hole',
        description:'Inescapable, dense celestial object with intense gravitational pull',
        imgtype:'JPG',
        trend:"New",
        id:'1',
        color:"green"
    },

    {
        imageUrl:`${astroidbelt}`,
        title:'Astroid belt',
        description:'Astroid belt: Debris-filled region between Mars and Jupiter.',
        imgtype: 'Png',
        trend:'Trend',
        id:'2',
        color:"yellow"
    },

    {
        imageUrl:`${solar}`,
        title:'Solar Eclipses',
        description:'Solar eclipses thrill skywatchers every year. You just have to be in the right place at the right time.',
        imgtype:'JPG',
        color:"red",
        trend:'Featured',
        id:'3',

    },

    {
        imageUrl:`${solarstream}`,
        title:'Solar Stream',
        description:'Solar stream: High-speed charged particles from the Suns corona',
        imgtype:"JPEG,",
        trend:'Hot',
        id:'4'
    },

    {
        imageUrl:`${satelite}`,
        title:'Satelites',
        description:'Orbiting objects used for communication, navigation, Earth observation, and more.',
        imgtype:'PNG',
        trend:'New',
        id:'5'
    },

{
        imageUrl:`${milkeyway}`,
        title:"Milkeyway Galaxy",
        description:'Orbiting objects used for communication, navigation, Earth observation, and more.',
        imgtype:'JPG',
        trend:'Featured',
        id:'6',
    },

    {
        imageUrl:`${moon}`,
        title:'Moon',
        description:'Earths satellite, cold, rocky orb, reflects sunlight, tides, and holds fascination for humanitys exploration dreams.',
        imgtype:'JPEG',
        trend:'Hot',
    },

    {
        imageUrl:`${landingrover}`,
        title:'Landing Rover',
        description:'Rover lands on distant world, explores, sends data, and expands humanitys knowledge of the cosmos.',
        imgtype:'PNG',
        trend:'Featured',
    },

    {
        imageUrl:`${astronaut}`,
        title:'astronaut',
        description:'Astronauts brave spaces dangers, explore beyond Earth, conduct research, and push humanitys frontiers in the cosmos.',
        imgtype:'JPG',
        trend:'New',
    },
    {
        imageUrl:`${sun}`,
        title:'sun',
        description:'Astronauts brave spaces dangers, explore beyond Earth, conduct research, and push humanitys frontiers in the cosmos.',
        imgtype:'JPG',
        trend:'New',
    },
    {
        imageUrl:`${mars}`,
        title:'mars',
        description:'Mars, the Red Planet, allures with its potential for life, captivating exploration, and future interplanetary possibilities for humanity.',
        imgtype:'JPG',
        trend:'Featured',
    },
    {
        imageUrl:`${telescope}`,
        title:'telescope',
        description:'Optical instrument magnifies distant celestial objects, revealing the cosmos wonders.Astronauts brave spaces dangers, explore beyond Earth, conduct research, and push humanitys frontiers in the cosmos.',
        imgtype:'JPEG',
        trend:'Hot',
    },
]

  return (
    <>
 <div style={{display:"flex" , flexDirection:"column" , justifyContent:"space-evenly" , paddingTop:"100px"}}>
    <div ><h1 style={{color:"white" , width:"100%" , textAlign:"center" , fontSize:"56px"}} > Virtual Galaxy Image gallary </h1></div>
    <div className='card-data'>
      
      {
      

      cardsdata.map((card,id)=>(<Card key={id} data ={card}/>))
      
      
      }</div>
      </div>
    </>
   
  );
}

 