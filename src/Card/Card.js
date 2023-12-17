import React from 'react'
 import './Card.css';

const Card = ({data}) => {
  return (
    <div className='card-div'>
         
        <div><img src ={data.imageUrl} className='galary-imgs' /></div>
<br/>
        <div style={{display:'flex',flexDirection:'column',
    gap:'4rem'}}>
        <div>
<h2 style={{color:'white',fonts:'20px'}}>{data.title}</h2>
<br/>
        <p style={{width:'15rem',fontSize:'12px',color:'#5a6471'}}>{data.description}</p>


</div>
        <div>
        <div style={{display:'flex', gap:'2rem'}}>

<p style={{ backgroundColor:'#343a40',borderRadius:'8px' ,  padding:"3px" , paddingLeft:"5px" , paddingRight:"5px"}}>{data.imgtype}</p>
<p style={{  backgroundColor:`${data?.color}`,borderRadius:'8px' ,  color:"white" ,   paddingLeft:"5px" , paddingRight:"5px" ,padding:"3px"}}>{data.trend}</p>
</div>


        </div>
        

        </div>

    </div>
  );
}
export default Card;
 