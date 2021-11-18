import React from 'react';
import LikeDislike from './LikeDislike';
import './Card.css'
const Card =({id,title,category,likes,dislikes})=>{
	
  return (
   <div className='tc  dib br3 pa3 ma2  bw2 shadow-5'> 
     <img alt='robots' src={`https://robohash.org/${id}?2000*200`} width='250px'/>
       <div> 
     <h2> {title} </h2>
     <h3> {category} </h3>
    
    
   <LikeDislike like={likes} dislikes={dislikes} />
    
  
     <button 

          
       className="bt br4 ph3 pv1  ba black  grow pointer bbc bt"
       >Supprimer</button>

     

       </div>
   

   </div>

  	)


}

export default Card; 